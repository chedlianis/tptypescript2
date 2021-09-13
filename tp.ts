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
import { cours,etudiant } from "./modeles";
function dispalycours(c:cours){
    console.log(c.nom+" "+c.volume);
}
dispalycours({
    'nom':'Angular',
    'volume':30
})
let e:etudiant=new etudiant("amine",20);
let e1:etudiant=new etudiant("amine");
e.info();