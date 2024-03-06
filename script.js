window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
});

function elemekElerese1() {
    let cimELEM=document.getElementById('f1')
    console.log(cimELEM)
    console.log(cimELEM.innerHTML)
}
function elemekElerese2() {
   const ideELEM=document.getElementById("ide")
   ideELEM.innerHTML="<p>Jó reggelt</p>"
}
function elemekElerese3() {
    const Elem=document.getElementsByClassName("ide")
    Elem.innerHTML="<p>Jó reggelt</p>"
}
