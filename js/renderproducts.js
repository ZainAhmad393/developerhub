// ================== GLOBAL STATE ==================
let currentFilters = {
  category: "all",
  brand: "all",
  search: "",
  price: 3000,
};

let currentPage = 1;
const ITEMS_PER_PAGE = 4;

// ================== FUSE OPTIONS ==================
const fuseOptions = {
  keys: ["title", "details", "brand", "category"],
  threshold: 0.35,
};

// ================== STAR RATING ==================
function renderStars(rating) {
  let stars = "";
  let full = Math.floor(rating);
  for (let i = 0; i < full; i++) stars += `<i class="bi bi-star-fill"></i>`;
  for (let i = 0; i < 5 - full; i++) stars += `<i class="bi bi-star"></i>`;
  return stars;
}

// ================== RENDER PRODUCTS ==================
function renderProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  // Pagination slice
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedItems = items.slice(start, end);

  paginatedItems.forEach((p) => {
    container.innerHTML += `
     <div class="product-row" data-id="${p.id}">
  <div class="product-img">
  <a  href="product-details.html?id=${p.id}" class="product-link">
  <img src="${p.image}"  alt="${p.title}">
  </a>
  </div>

  <div class="product-info">
  <a href="product-details.html?id=${p.id}" class="product-link">
  <h3>${p.title}</h3>
  </a>

    <div class="rating-row">
      ${renderStars(p.rating)}
      <span class="rating-text">${p.rating}</span>
      <span class="orders">154 orders</span>
      <span class="shipping">Free Shipping</span>
    </div>

    <p class="description">${p.details}</p>
    <div class="more-details" style="display:none;">
          <p><strong>Material:</strong> ${p.more_details.material}</p>
          <p><strong>Color:</strong> ${p.more_details.color}</p>
          <p><strong>Warranty:</strong> ${p.more_details.warranty}</p>
          <p><strong>Features:</strong> ${p.more_details.features.join(", ")}</p>
          <p><strong>Usage:</strong> ${p.more_details.usage}</p>
        </div>
  </div>
<button class="toggle-btn" data-id="${p.id}">Show More</button>
  <div class="product-price">
    <h4>${p.price}</h4>
    <del>${p.discounted_price}</del>
    <button class="wishlist">♡</button>

  </div>
</div>
    `;
  });

    // Toggle More / Less
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      const details = document.querySelector(`.product-row[data-id='${id}'] .more-details`);
      if(details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Show Less";
      } else {
        details.style.display = "none";
        this.textContent = "Show More";
      }
    });
  });
}


// ================== CATEGORY LIST ==================
let categoriesExpanded = false;

function renderCategoryList() {
  const set = new Set();
  products.forEach((p) => p.category.forEach((c) => set.add(c)));

  const ul = document.getElementById("category-list");
  ul.innerHTML = "";

  const allCategories = ["All Categories", ...Array.from(set)];
  const LIMIT = 4;

  allCategories.forEach((c, index) => {
    const li = document.createElement("li");
    li.textContent = c;
    li.dataset.value = c === "All Categories" ? "all" : c.toLowerCase();

    if (index === 0) li.classList.add("active");

    // 👇 hide extra categories
    if (!categoriesExpanded && index > LIMIT) {
      li.classList.add("category-hidden");
    }

    li.addEventListener("click", () => {
      ul.querySelectorAll("li").forEach((x) => x.classList.remove("active"));
      li.classList.add("active");

      currentFilters.category = li.dataset.value;
      currentFilters.brand = "all";
      brandsExpanded = false;
      renderBrandList(currentFilters.category);
      applyFilters();
    });

    ul.appendChild(li);
  });

  // toggle button text
  const btn = document.getElementById("toggleCategories");
  if (allCategories.length > LIMIT + 1) {
    btn.style.display = "block";
    btn.textContent = categoriesExpanded ? "See less" : "See more";
  } else {
    btn.style.display = "none";
  }
}

document.getElementById("toggleCategories").addEventListener("click", () => {
  categoriesExpanded = !categoriesExpanded;
  renderCategoryList();
});

// ================== BRAND LIST ==================
let brandsExpanded = false;
function renderBrandList(selectedCategory = "all") {
  const set = new Set();

  products.forEach((p) => {
    const cats = p.category.map((c) => c.toLowerCase());
    if (selectedCategory === "all" || cats.includes(selectedCategory)) {
      set.add(p.brand);
    }
  });

  const ul = document.getElementById("brand-list");
  ul.innerHTML = "";

  const allBrands = ["All Brands", ...Array.from(set)];
  const LIMIT = 4;

  allBrands.forEach((b, index) => {
    const li = document.createElement("li");
    li.textContent = b;
    li.dataset.value = b === "All Brands" ? "all" : b;

    if (index === 0) li.classList.add("active");

    // 👇 hide extra brands
    if (!brandsExpanded && index > LIMIT) {
      li.classList.add("category-hidden");
    }

    li.addEventListener("click", () => {
      ul.querySelectorAll("li").forEach((x) => x.classList.remove("active"));
      li.classList.add("active");

      currentFilters.brand = li.dataset.value;
      applyFilters();
    });

    ul.appendChild(li);
  });

  // Toggle button text
  const btn = document.getElementById("toggleBrands");
  if (allBrands.length > LIMIT + 1) {
    btn.style.display = "block";
    btn.textContent = brandsExpanded ? "See less" : "See more";
  } else {
    btn.style.display = "none";
  }
}
document.getElementById("toggleBrands").addEventListener("click", () => {
  brandsExpanded = !brandsExpanded;
  renderBrandList(currentFilters.category);
});

// ================== APPLY FILTERS ==================
function applyFilters() {
  let result = [...products];

  // SEARCH (ALWAYS GLOBAL)
  if (currentFilters.search !== "") {
    const fuse = new Fuse(products, fuseOptions);
    result = fuse.search(currentFilters.search).map((r) => r.item);
  }

  result = result.filter((p) => {
    const cats = p.category.map((c) => c.toLowerCase());
    const price = parseFloat(p.price.replace("$", ""));

    return (
      (currentFilters.category === "all" ||
        cats.includes(currentFilters.category)) &&
      (currentFilters.brand === "all" || p.brand === currentFilters.brand) &&
      price <= currentFilters.price
    );
  });

  renderProducts(result);
  renderPagination(result.length);
  renderBreadcrumbs();
  renderActiveFilters();
}

// ================== ACTIVE FILTER CHIPS ==================
function renderActiveFilters() {
  const box = document.getElementById("active-filters");
  box.innerHTML = "";

  const filters = [];

  if (currentFilters.category !== "all")
    filters.push({ label: currentFilters.category, key: "category" });

  if (currentFilters.brand !== "all")
    filters.push({ label: currentFilters.brand, key: "brand" });

  if (currentFilters.search !== "")
    filters.push({ label: `"${currentFilters.search}"`, key: "search" });

  if (currentFilters.price < maxPrice)
    filters.push({ label: `≤ ${currentFilters.price}`, key: "price" });

  filters.forEach((f) => {
    const chip = document.createElement("span");
    chip.className = "badge bg-primary";
    chip.innerHTML = `${f.label} <i class="bi bi-x ms-1" style="cursor:pointer"></i>`;

    chip.querySelector("i").onclick = () => {
      currentFilters[f.key] = f.key === "price" ? maxPrice : "all";
      if (f.key === "search")
        document.getElementById("search-input").value = "";
      currentPage = 1;
      applyFilters();
    };

    box.appendChild(chip);
  });

  // Clear all
  if (filters.length > 0) {
    const clear = document.createElement("button");
    clear.textContent = "Clear All Filters";
    clear.className = "btn btn-sm btn-outline-danger ms-2";
    clear.onclick = () => {
      currentFilters = {
        category: "all",
        brand: "all",
        search: "",
        price: maxPrice,
      };
      document.getElementById("search-input").value = "";
      document.getElementById("price-filter").value = maxPrice;
      currentPage = 1;
      renderCategoryList();
      renderBrandList();
      applyFilters();
    };
    box.appendChild(clear);
  }
}

// ================== BREADCRUMBS ==================
function renderBreadcrumbs() {
  const bc = document.getElementById("breadcrumbs");
  bc.innerHTML = "Home";

  if (currentFilters.category !== "all")
    bc.innerHTML += ` > ${currentFilters.category}`;
  if (currentFilters.brand !== "all")
    bc.innerHTML += ` > ${currentFilters.brand}`;
  if (currentFilters.search !== "")
    bc.innerHTML += ` > "${currentFilters.search}"`;
}

// ================== PAGINATION ==================
function renderPagination(totalItems) {
  const p = document.getElementById("pagination");
  p.innerHTML = "";

  const pages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (pages <= 1) return;

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className =
      i === currentPage
        ? "btn btn-primary btn-sm"
        : "btn btn-outline-primary btn-sm";
    btn.onclick = () => {
      currentPage = i;
      applyFilters();
    };
    p.appendChild(btn);
  }
}

// ================== INIT ==================
let maxPrice = 3000;

document.addEventListener("DOMContentLoaded", () => {
  maxPrice = Math.max(
    ...products.map((p) => parseFloat(p.price.replace("$", "")))
  );
  document.getElementById("price-filter").max = maxPrice;
  document.getElementById("price-filter").value = maxPrice;
  document.getElementById("price-value").textContent = maxPrice;

  renderCategoryList();
  renderBrandList();
  applyFilters();

  document.getElementById("search-input").addEventListener("input", (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    currentPage = 1;
    applyFilters();
  });

  document.getElementById("price-filter").addEventListener("input", (e) => {
    currentFilters.price = +e.target.value;
    document.getElementById("price-value").textContent = e.target.value;
    currentPage = 1;
    applyFilters();
  });
});
