const giaTien50KwDau = 500;
const giaTien50KwKe = 650;
const giaTien100KwKe = 850;
const giaTien150KwKe = 1100;
const conLai = 1300;


var btnTinhTien = document.getElementById("btnTinhTien");
btnTinhTien.onclick = function(e){
    e.preventDefault();
    var ten = document.getElementById("inputTen").value;
    var soKw = document.getElementById("inputSoKw").value;

    var tongTien = 0;

    if (soKw <= 50) {
        tongTien = soKw * giaTien50KwDau;
        document.getElementById("txtThongBao").innerHTML = ten + " " + tongTien + "vnd";
    }else if (50 < soKw <= 100) {
        tongTien = soKw * giaTien50KwKe;
        document.getElementById("txtThongBao").innerHTML = ten + " " + tongTien + "vnd";
    }
    
    if (100 < soKw < 150) {
        tongTien = soKw * giaTien100KwKe;
        document.getElementById("txtThongBao").innerHTML = ten + " " + tongTien + "vnd";
    }
    
    if (soKw == 150) {
        tongTien = soKw * giaTien150KwKe;
        document.getElementById("txtThongBao").innerHTML = ten + " " + tongTien + "vnd";
    }else if(soKw > 150) {
        tongTien = soKw * conLai;
        document.getElementById("txtThongBao").innerHTML = ten + " " + tongTien + "vnd";
    }

}