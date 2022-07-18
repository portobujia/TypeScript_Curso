//Se debe evitar el uso de any

(() => {

    let avenger: any = 123;
    //Una constante debe estar siempre inicializada
    //const exists;
    let power;

    avenger = 'Dr Strange';
    //console.log(avenger.charAt(0));

    //Casting: 2 maneras
    console.log((avenger as string).charAt(0));

    avenger=123;
    console.log(<number>avenger.toFixed(2));

})()