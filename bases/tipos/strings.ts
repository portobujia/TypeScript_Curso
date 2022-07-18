(() => {

    //3 formas de declarar strings
    const batman: string = 'Batman';
    const superman: string = "Superman";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(batman.toUpperCase());

    console.log(`I´m ${batman}`);

    console.log(batman[10]?.toUpperCase() || 'No esta presente');
})()