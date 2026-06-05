const sanPham = [
  {
    ten: "Bạn Gấu Kẹo Bông",
    loai: "thu-bong",
    trangThai: "Kỷ niệm",
    kichThuoc: "50cm",
    thoiGian: "3 tuần",
    nam: "2026",
    cauChuyen: "Một bạn gấu len lớn, đánh dấu lúc con bắt đầu làm được sản phẩm phức tạp và cần nhiều kiên nhẫn hơn.",
    hinhAnh: "assets/gau-len.svg",
    mauNen: "#ffe2a8"
  },
  {
    ten: "Áo Choàng Rừng Xanh",
    loai: "do-mac",
    trangThai: "Trưng bày",
    kichThuoc: "Mặc được",
    thoiGian: "Vài ngày",
    nam: "2026",
    cauChuyen: "Một chiếc áo choàng có thể mặc được. Món này nên được lưu lại như cột mốc về kỹ năng và độ bền.",
    hinhAnh: "assets/ao-choang.svg",
    mauNen: "#cfe9dc"
  },
  {
    ten: "Bạn Thỏ Bé Xíu",
    loai: "luu-niem",
    trangThai: "Có thể nhận nuôi",
    kichThuoc: "Nhỏ",
    thoiGian: "1 ngày",
    nam: "2026",
    cauChuyen: "Một bạn nhỏ dễ thương, phù hợp làm quà lưu niệm hoặc nhận nuôi.",
    hinhAnh: "assets/tho-len.svg",
    mauNen: "#e6ddf4"
  },
  {
    ten: "Gà Con Nắng Vàng",
    loai: "luu-niem",
    trangThai: "Có thể nhận nuôi",
    kichThuoc: "Nhỏ",
    thoiGian: "1 ngày",
    nam: "2026",
    cauChuyen: "Một món nhỏ tươi sáng, dễ trưng bày trên bàn học hoặc tặng bạn bè.",
    hinhAnh: "assets/ga-con.svg",
    mauNen: "#f8eadf"
  },
  {
    ten: "Mảnh Luyện Tập Số 1",
    loai: "thu-bong",
    trangThai: "Đang học",
    kichThuoc: "Vừa",
    thoiGian: "Chưa ghi",
    nam: "2025",
    cauChuyen: "Không cần hoàn hảo. Đây là loại sản phẩm nên giữ lại để sau này nhìn thấy rõ mình đã tiến bộ thế nào.",
    hinhAnh: "assets/cuon-len.svg",
    mauNen: "#ffd8cc"
  },
  {
    ten: "Món Quà Nhỏ",
    loai: "luu-niem",
    trangThai: "Đã tặng",
    kichThuoc: "Nhỏ",
    thoiGian: "Cuối tuần",
    nam: "2026",
    cauChuyen: "Handmade không chỉ là món đồ. Nó là thời gian và tình cảm được đặt vào từng mũi len.",
    hinhAnh: "assets/trai-tim.svg",
    mauNen: "#f6d7df"
  }
];

const luoiBoSuuTap = document.querySelector("#galleryGrid");
const nutLoc = document.querySelectorAll(".filter");
const nutMenu = document.querySelector(".nav-toggle");
const menu = document.querySelector(".site-nav");

function hienThiSanPham(boLoc = "all") {
  const danhSachHienThi = boLoc === "all"
    ? sanPham
    : sanPham.filter(item => item.loai === boLoc);

  luoiBoSuuTap.innerHTML = danhSachHienThi.map(item => `
    <article class="product-card">
      <div class="product-image" style="--card-bg: ${item.mauNen}">
        <img src="${item.hinhAnh}" alt="${item.ten}">
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span class="product-category">${tenLoai(item.loai)}</span>
          <span class="product-status">${item.trangThai}</span>
        </div>
        <h3>${item.ten}</h3>
        <p>${item.cauChuyen}</p>
        <div class="product-details">
          <span>${item.kichThuoc}</span>
          <span>${item.thoiGian}</span>
          <span>${item.nam}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function tenLoai(loai) {
  const ten = {
    "thu-bong": "Thú bông len",
    "do-mac": "Đồ mặc",
    "luu-niem": "Đồ lưu niệm"
  };
  return ten[loai] || loai;
}

nutLoc.forEach(button => {
  button.addEventListener("click", () => {
    nutLoc.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    hienThiSanPham(button.dataset.filter);
  });
});

nutMenu.addEventListener("click", () => {
  const dangMo = menu.classList.toggle("open");
  nutMenu.setAttribute("aria-expanded", String(dangMo));
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    nutMenu.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

hienThiSanPham();
