var godine = 20;
var ime = "Jovan";
var studira = true;
var predmeti = ["epos", "klijentske", "cloud"];
var ocene = [7, 8, 10];
var tuple = ["Jovan", 20];
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
var student = {
    ime: "Jovan",
    godine: 21,
    studira: true
};
var brojIliString = 4;
var biloSta = "Moze bilo koji tip";
function cao() {
    console.log("cao");
}
var n = null;
var u = undefined;
var nekaVrednost = "Nneki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
