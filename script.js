const search = () => {
    const searchbox = document.getElementById("search-phone").value.toUpperCase();
    const storeitems = document.getElementById("card-group")
    const card = document.querySelectorAll(".card")
    const pname = storeitems.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let match = card[i].getElementsByTagName('h5')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
    }
}

function IPhone11() {
    document.getElementById("test1").innerHTML =
        "Display Size : 6.1 inches, Ram : 4Gb, Storage : 64Gb, Released: 20 September 2019, Price: 87,999 Tk";
}
function IPhone12() {
    document.getElementById("test2").innerHTML =
        "Display Size : 6.1 inches, Ram : 4Gb, Storage : 64Gb, Released: 23 October 2020, Price: 1,17,999 Tk";
}
function IPhone13() {
    document.getElementById("test3").innerHTML =
        "Display Size : 6.1 inches, Ram : 4Gb, Storage : 128Gb, Released: 24 September 2021, Price: 1,18,999 Tk";
}
function GalaxyM62() {
    document.getElementById("test4").innerHTML =
        "Display Size : 6.7 inches, Ram : 8Gb, Storage : 128Gb, Released: 3 March 2021, Price: 34,999 Tk";
}
function GalaxyF22() {
    document.getElementById("test5").innerHTML =
        "Display Size : 6.4 inches, Ram : 6Gb, Storage : 128Gb, Released: 13 July 2021, Price: 19,999 Tk";
}
function GalaxyA22() {
    document.getElementById("test6").innerHTML =
        "Display Size : 6.4 inches, Ram : 6Gb, Storage : 128Gb, Released: 1 July 2021, Price: 21,999 Tk";
}
function Xiaomi11TPro() {
    document.getElementById("test7").innerHTML =
        "Display Size : 6.67 inches, Ram : 8Gb, Storage : 256Gb, Released: 5 October 2021, Price: 64,999 Tk";
}
function Xiaomi11T() {
    document.getElementById("test8").innerHTML =
        "Display Size : 6.67 inches, Ram : 8Gb, Storage : 128Gb, Released: 5 October 2021, Price: 49,999 Tk";
}
function Redmi10() {
    document.getElementById("test9").innerHTML =
        "Display Size : 6.5 inches, Ram : 6Gb, Storage : 128Gb, Released: 20 August 2021, Price: 20,999 Tk";
}
function Realme9i() {
    document.getElementById("test10").innerHTML =
        "Display Size : 6.6 inches, Ram : 6Gb, Storage : 128Gb, Released: 10 January 2022, Price: 19,490 Tk";
}
function Realme8() {
    document.getElementById("test11").innerHTML =
        "Display Size : 6.5 inches, Ram : 8Gb, Storage : 128Gb, Released: 28 April 2021, Price: 24,990 Tk";
}
function RealmeC25Y() {
    document.getElementById("test12").innerHTML =
        "Display Size : 6.5 inches, Ram : 4Gb, Storage : 64Gb, Released: 30 September 2021, Price: 13,590 Tk";
}

