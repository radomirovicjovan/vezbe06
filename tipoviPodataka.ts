let godine:number = 20;
let ime:string = "Jovan";
let studira:boolean = true;

let predmeti:string[] = ["epos", "klijentske", "cloud"];
let ocene:number[] = [7,8,10];

let tuple:[string, number] = ["Jovan", 20];
enum Modul{
    TehnologijeElektronskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul = Modul.TehnologijeElektronskogPoslovanja;

let student:{ime:string, godine:number, studira:boolean}={
    ime:"Jovan",
    godine:21,
    studira:true
};

let brojIliString:number | string = 4;

let biloSta:any = "Moze bilo koji tip";

function cao():void{
    console.log("cao");
}

let n:null = null;
let u:undefined = undefined;

let nekaVrednost:any = "Nneki string";
let duzinaStringa:number = (nekaVrednost as string).length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);

