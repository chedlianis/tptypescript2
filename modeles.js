"use strict";
exports.__esModule = true;
exports.etudiant = void 0;
var etudiant = /** @class */ (function () {
    function etudiant(nom, age) {
        this.nom = nom;
        this.age = age;
        this.nom = nom;
        this.age = age;
    }
    etudiant.prototype.info = function () {
        console.log("nom " + this.nom + "age" + this.age);
    };
    return etudiant;
}());
exports.etudiant = etudiant;
