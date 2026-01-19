// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (Ít nhất 6 SP, 2 danh mục)
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphone", true),
    new Product(2, "MacBook M3 Max", 95000000, 5, "Laptop", true),
    new Product(3, "Ốp lưng Silicone", 900000, 0, "Accessories", false),
    new Product(4, "Cáp sạc USB-C", 500000, 50, "Accessories", true),
    new Product(5, "Samsung S24 Ultra", 31000000, 12, "Smartphone", true),
    new Product(6, "Chuột Magic Mouse", 2500000, 15, "Accessories", true)
];

// Hàm render để hiển thị kết quả ra HTML không cần F12
function renderResult(title, content) {
    const container = document.getElementById('display-results');
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<h3>${title}</h3><pre>${content}</pre>`;
    container.appendChild(div);
}

// --- THỰC THI VÀ HIỂN THỊ ---

// Hiển thị Câu 2 (Danh sách gốc)
renderResult("Câu 2: Khởi tạo mảng products (Dữ liệu gốc)", JSON.stringify(products, null, 2));

// Câu 3: Mảng mới chỉ chứa name và price
const c3 = products.map(p => ({ name: p.name, price: p.price }));
renderResult("Câu 3: Danh sách Name và Price", JSON.stringify(c3, null, 2));

// Câu 4: Sản phẩm còn hàng (quantity > 0)
const c4 = products.filter(p => p.quantity > 0);
renderResult("Câu 4: Sản phẩm còn hàng", JSON.stringify(c4, null, 2));

// Câu 5: Kiểm tra sản phẩm giá trên 30.000.000
const c5 = products.some(p => p.price > 30000000);
renderResult("Câu 5: Có sản phẩm nào giá trên 30tr không?", c5 ? "Có" : "Không");

// Câu 6: Kiểm tra Accessories có đang bán không
const c6 = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
renderResult("Câu 6: Tất cả sản phẩm Accessories đều đang bán?", c6 ? "Đúng" : "Không");

// Câu 7: Tổng giá trị kho (price * quantity)
const c7 = products.reduce((total, p) => total + (p.price * p.quantity), 0);
renderResult("Câu 7: Tổng giá trị kho hàng", c7.toLocaleString() + " VND");

// Câu 8: Duyệt bằng for...of
let c8Text = "";
for (const p of products) {
    c8Text += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
}
renderResult("Câu 8: Duyệt mảng bằng for...of", c8Text);

// Câu 9: Duyệt bằng for...in
let c9Text = "";
for (const key in products[0]) {
    c9Text += `${key}: ${products[0][key]}\n`;
}
renderResult("Câu 9: In tên thuộc tính và giá trị (for...in)", c9Text);

// Câu 10: Tên SP đang bán và còn hàng
const c10 = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
renderResult("Câu 10: Danh sách tên SP đang bán và còn hàng", JSON.stringify(c10, null, 2));