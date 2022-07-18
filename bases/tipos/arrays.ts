(() => {

    //Array que aceptará number o string
    const numbers: (string | number)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];

    const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const villians = ['Omega', 'Dorammu', 'Duende verde'];

    villians.forEach(v => console.log(v.toUpperCase()));

})()