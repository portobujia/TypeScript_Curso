(() => {

    //Interfaces anidadas
    interface Client {
        name: string;
        age?: number;
        adress: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        adress: {
            id: 111,
            zip: "030303",
            city: "Coruña"
        },
        getFullAddress(id: string) {
            return this.adress.city;
        }
    }

    //En una clase puede implementarse diferentes interfaces, como en Java
    //También puede hacerse interfaces de funciones, pero no son muy usadas

})()