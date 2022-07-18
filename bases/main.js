"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'asdfasdf',
        age: 33,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        adress: {
            id: 111,
            zip: "030303",
            city: "Coruña"
        },
        getFullAddress(id) {
            return this.adress.city;
        }
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
    }
    ;
}
//# sourceMappingURL=main.js.map