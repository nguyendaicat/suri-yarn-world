const products = [
  {
    name: "Big Marshmallow Bear",
    category: "plushie",
    status: "Memory",
    size: "50cm",
    time: "3 weeks",
    year: "2026",
    story: "Một bạn gấu len lớn, đánh dấu lúc con bắt đầu làm được sản phẩm phức tạp và cần nhiều kiên nhẫn hơn.",
    image: "assets/placeholder-bear.svg",
    bg: "#ffe2a8"
  },
  {
    name: "Forest Cloak",
    category: "wearable",
    status: "Portfolio",
    size: "Wearable",
    time: "Several days",
    year: "2026",
    story: "Một chiếc áo choàng có thể mặc được. Món này nên được lưu lại như cột mốc về kỹ năng và độ bền.",
    image: "assets/placeholder-cloak.svg",
    bg: "#cfe9dc"
  },
  {
    name: "Tiny Bunny Friend",
    category: "souvenir",
    status: "Adoptable",
    size: "Small",
    time: "1 day",
    year: "2026",
    story: "Một bạn nhỏ dễ thương, phù hợp làm quà lưu niệm hoặc nhận nuôi.",
    image: "assets/placeholder-bunny.svg",
    bg: "#e6ddf4"
  },
  {
    name: "Sunny Chick",
    category: "souvenir",
    status: "Adoptable",
    size: "Small",
    time: "1 day",
    year: "2026",
    story: "Một món nhỏ tươi sáng, dễ trưng bày trên bàn học hoặc tặng bạn bè.",
    image: "assets/placeholder-chick.svg",
    bg: "#f8eadf"
  },
  {
    name: "Practice Piece No. 1",
    category: "plushie",
    status: "Learning",
    size: "Medium",
    time: "Unknown",
    year: "2025",
    story: "Không cần hoàn hảo. Đây là loại sản phẩm nên giữ lại để sau này nhìn thấy rõ mình đã tiến bộ thế nào.",
    image: "assets/placeholder-yarn.svg",
    bg: "#ffd8cc"
  },
  {
    name: "Gift for Someone",
    category: "souvenir",
    status: "Gifted",
    size: "Small",
    time: "Weekend",
    year: "2026",
    story: "Handmade không chỉ là món đồ. Nó là thời gian và tình cảm được đặt vào từng mũi len.",
    image: "assets/placeholder-heart.svg",
    bg: "#f6d7df"
  }
];

const galleryGrid = document.querySelector("#galleryGrid");
const filterButtons = document.querySelectorAll(".filter");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all"
    ? products
    : products.filter(product => product.category === filter);

  galleryGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-image" style="--card-bg: ${product.bg}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span class="product-category">${labelCategory(product.category)}</span>
          <span class="product-status">${product.status}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.story}</p>
        <div class="product-details">
          <span>${product.size}</span>
          <span>${product.time}</span>
          <span>${product.year}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function labelCategory(category) {
  const labels = {
    plushie: "Plushie",
    wearable: "Wearable",
    souvenir: "Souvenir"
  };
  return labels[category] || category;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

renderProducts();
