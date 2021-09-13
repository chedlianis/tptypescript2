"use strict";
exports.__esModule = true;
/*let nom:string = "amine";
console.log(nom);*/
/*function info(){
    for(let i=0;i<5;i++){
        console.log("i="+i);
    }
    console.log('Finally:'+i);
}
info();*/
/*function somme(x:number,y:number){
    console.log(x+y);
}
somme(10,20);*/
/*let somme=(x,y)=>console.log(x+y);
somme(1,2);*/
/*let tab:any[]=[12,"angular",true,'a'];
for(var i=0;i<tab.length;i++){
    console.log(tab[i]) ;
}
let names:string[]=["amine","anis","radhi"];
for(var i=0;i<names.length;i++){
    console.log(names[i]) ;
}*/
var modeles_1 = require("./modeles");
function dispalycours(c) {
    console.log(c.nom + " " + c.volume);
}
dispalycours({
    'nom': 'Angular',
    'volume': 30
});
var e = new modeles_1.etudiant("amine", 20);
var e1 = new modeles_1.etudiant("amine");
e.info();
