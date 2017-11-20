// document.getElementById("figcaption2").style.lineHeight = document.getElementById("img2").height + 'px';
// document.getElementById("figcaption3").style.lineHeight = document.getElementById("img3").height + 'px';

for (i = 1; i <= 3; i++) {
    var altura = document.getElementById("img" + i).height;
    document.getElementById("figcaption" + i).style.lineHeight = altura + 'px';
    console.log((parseInt(altura) + 1));
    document.getElementById("figcaption" + i).style.marginTop = "-" + (parseInt(altura) + 3) + "px";
}