export interface cours{
    nom:string,
    volume:number
}
export class etudiant{
    private nom:string;
    private age:number;
    info() {
        console.log("nom "+this.nom +"age"+this.age);
    }
    constructor(private nom?:string,private age?:number){
        this.nom=nom;
        this.age=age;
        }
}

