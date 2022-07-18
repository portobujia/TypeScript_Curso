(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: Function } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'asdfasdf',
        age: 33,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }

    }

    let superman: { name: string, age?: number, powers: string[], getName?: Function } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }
    console.log(superman);

})()