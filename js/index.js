// Bài 1
function tinhTongDiem(diemMon1, diemMon2, diemMon3) {
    return diemMon1 + diemMon2 + diemMon3;
}
document.getElementById("ketQua").onclick = function() {
    let diemChuan = document.getElementById("diemChuan").value * 1;
    let diemKhuVuc = document.getElementById("khuVuc").value * 1;
    let diemDoiTuong = document.getElementById("doiTuong").value * 1;
    let diemMon1 = document.getElementById("monthu1").value * 1;
    let diemMon2 = document.getElementById("monthu2").value * 1;
    let diemMon3 = document.getElementById("monthu3").value * 1;
    
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById("xuatRaKetQua").innerHTML = `Bạn đã rớt do có môn bị điểm 0 hoặc nhỏ hơn điểm chuẩn`;
        return;
    }

    let tongDiem = tinhTongDiem(diemMon1, diemMon2, diemMon3) + diemKhuVuc + diemDoiTuong;

    if (tongDiem >= diemChuan) {  
        document.getElementById("xuatRaKetQua").innerHTML = `Tổng điểm của bạn là ${tongDiem}. Bạn đã đậu`;
    } else {
        document.getElementById("xuatRaKetQua").innerHTML = `Tổng điểm của bạn là ${tongDiem}. Bạn đã rớt. Do tổng điểm của bạn nhỏ hơn điểm chuẩn`;
    }
}

//Bài 2

function tinh50KwDau(soKw){
        return soKw* 500;
}
function tinh50KwKe(soKw){
        return soKw * 650;
}
function tinh100KwKe(soKw){
        return soKw * 850;
}
function tinh150KwKe(soKw){
        return soKw * 1100;
}
function tinhSoKwConLai(soKw){
        return soKw * 1300;
}

document.getElementById("ketQua2").onclick=function(){
    let hoVaTen=document.getElementById("hoTen").value;
    let soKw=document.getElementById("soKw").value*1;
    let tinhsoKw = 0;
    if(soKw<=0){
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
        return;
    }
    if(soKw<=50){
        tinhsoKw = tinh50KwDau(soKw);
    }
    if(50<soKw && soKw<=100){
        tinhsoKw=tinh50KwDau(50)+ tinh50KwKe(soKw -50);
    }
    if(soKw > 100 && soKw <=200){
        tinhsoKw=tinh50KwDau(50)+tinh50KwKe(50)+tinh100KwKe(soKw - 100);
    }
    if(soKw > 200 && soKw<=350){
        tinhsoKw=tinh50KwDau(50)+tinh50KwKe(50)+tinh100KwKe(100)+tinh150KwKe(soKw - 150);
    }
    if(soKw > 350){
        tinhsoKw=tinh50KwDau(50)+tinh50KwKe(50)+tinh100KwKe(100)+tinh150KwKe(150)+tinhSoKwConLai(soKw - 350);
    }
    document.getElementById("xuatTienDien").innerHTML=`Họ tên: ${hoVaTen}; Tiền điện: ${tinhsoKw.toLocaleString('vi-VN', {style: "currency",
        currency: "VND",})}`
}

//Bài 3

function tinhThue(thuNhapNam, soNguoiPhuThuoc) {
    let thuNhapChiuThue = thuNhapNam - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
    if(thuNhapChiuThue>0){
        return thuNhapChiuThue;
    }else{
        return 0;
    }
}

document.getElementById("ketQua3").onclick = function() {
    let hoTen = document.getElementById("hoTen2").value;
    let thuNhapNam = document.getElementById("thuNhapNam").value * 1;
    let soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    let thuNhapChiuThue = tinhThue(thuNhapNam, soNguoiPhuThuoc);
    let tongThuePhaiTra = 0;

    if (thuNhapChiuThue <= 60e+6) {
        tongThuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120e+6) {
        tongThuePhaiTra = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.05;
    } else if (thuNhapChiuThue <= 210e+6) {
        tongThuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15;
    } else if (thuNhapChiuThue <= 384e+6) {
        tongThuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2;
    } else if (thuNhapChiuThue <= 624e+6) {
        tongThuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25;
    } else if (thuNhapChiuThue <= 960e+6) {
        tongThuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3;
    } else {
        tongThuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35;
    }
    document.getElementById("xuatRaTienThue").innerHTML = `Họ tên: ${hoTen}. Tiền thuế phải trả là ${tongThuePhaiTra.toLocaleString('vi-VN', {style: "currency",
        currency: "VND",})}`;
}

//Bài 4

function MuonHienThiSoKetNoi() {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let hienThiSoKetNoi = document.getElementById("hienThiSoKetNoi");
    if (loaiKhachHang === "doanhNghiep") {
        hienThiSoKetNoi.classList.remove("d-none");
    } else {
        hienThiSoKetNoi.classList.add("d-none");
    }
}
document.getElementById("loaiKhachHang").addEventListener("change",  MuonHienThiSoKetNoi);

document.getElementById("tinhTienCap").onclick = function() {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let maKhachHang = document.getElementById("maKhachHang").value*1;
    let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    let tongChiPhi = 0;
    let khongChon=document.getElementById("khongChon").value;
    if(loaiKhachHang === khongChon){
        alert("Hãy chọn loại khách hàng");
        document.getElementById("xuatTienCap").innerHTML=''
    }else{

    if (loaiKhachHang === "nhaDan") {
        tongChiPhi = 4.5 + 20.5 + (soKenhCaoCap * 7.5);
    } else if (loaiKhachHang === "doanhNghiep") {
        tongChiPhi = 15 + 75 + (soKenhCaoCap * 50);
        if (soKetNoi > 10) {
            tongChiPhi += (soKetNoi - 10) * 5;
        }
        
    }
    document.getElementById("xuatTienCap").innerHTML =
        `Mã khách hàng: ${maKhachHang}. Tổng hóa đơn là ${tongChiPhi.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
}
    
}