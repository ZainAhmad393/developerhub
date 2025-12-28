document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const listViewBtn = document.getElementById("listView");
  const gridViewBtn = document.getElementById("gridView");

  if (!productList || !listViewBtn || !gridViewBtn) {
    console.error("Grid/List elements not found in DOM");
    return;
  }

  listViewBtn.addEventListener("click", () => {
    productList.classList.remove("grid-view");
    productList.classList.add("list-view");

    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
  });

  gridViewBtn.addEventListener("click", () => {
    productList.classList.remove("list-view");
    productList.classList.add("grid-view");

    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
  });
});
