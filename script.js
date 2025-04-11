function searchLocation() {
    console.log("Hàm searchLocation được gọi");
    const search = document.getElementById('search').value;
    console.log("Từ khóa tìm kiếm:", search);
    const locations = [
        { name: "Hà Nội", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop", description: "Trái tim Việt Nam" },
        { name: "Đà Nẵng", image: "https://images.unsplash.com/photo-1565967511747-25f9e21c1a63?q=80&w=1974&auto=format&fit=crop", description: "Thành phố đáng sống" },
        { name: "TP.HCM", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop", description: "Thành phố sôi động" },
        { name: "Phú Quốc", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop", description: "Thiên đường biển" }
    ];
    const results = locations.filter(loc => loc.name.toLowerCase().includes(search.toLowerCase()));
    console.log("Kết quả tìm kiếm:", results);
    document.getElementById('results').innerHTML = results.length > 0 
        ? results.map(item => `
            <div class="result-card d-flex align-items-center p-3 mb-2 border rounded">
                <img src="${item.image}" alt="${item.name}" class="result-image me-3">
                <div>
                    <h6 class="mb-1">${item.name}</h6>
                    <p class="mb-0 text-muted">${item.description}</p>
                </div>
            </div>
        `).join('')
        : `<p class="p-2">Không tìm thấy kết quả cho: ${search}</p>`;
}

function addPlan() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const location = document.getElementById('location').value;
    if (location && startDate && endDate) {
        document.getElementById('planList').innerHTML += `
            <div class="plan-item p-3 mb-2 border rounded">
                <strong>${location}</strong> <br>
                Từ: ${startDate} - Đến: ${endDate}
            </div>`;
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
        document.getElementById('location').value = '';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

function bookHotel() {
    const hotel = document.getElementById('hotelName') ? document.getElementById('hotelName').value : '';
    if (hotel) {
        document.getElementById('hotelResults').innerHTML = `
            <div class="p-2 border-bottom">Đã đặt: ${hotel}</div>`;
        document.getElementById('hotelName').value = '';
    } else {
        alert('Vui lòng nhập tên khách sạn!');
    }
}