const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;
const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;


var btnKiemTra = document.getElementById("btnKiemTra");
btnKiemTra.onclick = function(e){
    e.preventDefault();
    var diemchuan = document.getElementById("inputDiemChuan").value;
    var diemMon1 = parseFloat(document.getElementById("inputDiem1").value); 
    var diemMon2 = parseFloat(document.getElementById("inputDiem2").value);
    var diemMon3 = parseFloat(document.getElementById("inputDiem3").value);
    var khuVuc = parseFloat(document.getElementById("inputKhuVuc").value);
    var doiTuong = parseFloat(document.getElementById("inputDoiTuong").value);

    var diemTongKet = "";

    if (diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0){
        diemTongKet = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    }

    if (diemTongKet >= diemchuan){
        document.getElementById("txtTB").innerHTML = "Thi đậu!" + diemTongKet + "  điểm";
    }else {
        document.getElementById("txtTB").innerHTML = "Thi trượt!";
    }
    
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById("txtTB").innerHTML = "Bị điểm liệt, thi trượt!";
    }
}