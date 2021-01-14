function muvelet(asd) {
    console.log(asd)
    document.getElementById('szam').value += asd;
}
function egye() {
    var v = document.getElementById('szam').value;
    var x = eval(v);
    document.getElementById('veg').innerHTML = "Végeredmény: " + x;
}
function c() {
    document.getElementById("szam").value = "";
    document.getElementById("veg").innerHTML = "Végredmény: ";
}
function vissza() {
    window.location="../index.html"
}