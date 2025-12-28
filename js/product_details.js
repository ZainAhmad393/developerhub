// URL se id nikaalna
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// container
const detailsContainer = document.getElementById("product-details");
const breadcrumbContainer = document.getElementById("breadcrumbs");

// safety check
if (!productId) {
  detailsContainer.innerHTML = "<p>Product not found</p>";
  throw new Error("No product ID in URL");
}

// product find karo
const product = products.find(p => p.id == productId);

if (!product) {
  detailsContainer.innerHTML = "<p>Product not found</p>";
  throw new Error("Invalid product ID");
}

// ================== RENDER PRODUCT ==================
detailsContainer.innerHTML = `
  <div class="product-detail-card">
    <img src="${product.image}" width="300">

    <h2>${product.title}</h2>
    <p>${product.details}</p>
    <h4>${product.price}</h4>

    <p><strong>Material:</strong> ${product.more_details.material}</p>
    <p><strong>Color:</strong> ${product.more_details.color}</p>
    <p><strong>Warranty:</strong> ${product.more_details.warranty}</p>
  </div>
`;

// ================== BREADCRUMBS ==================
breadcrumbContainer.innerHTML = `
  <a href="index.html">Home</a> >
  <a href="products.html?category=${product.category[0]}">
    ${product.category[0]}
  </a> >
  <a href="products.html?brand=${product.brand}">
    ${product.brand}
  </a> >
  <span>${product.title}</span>
`;
