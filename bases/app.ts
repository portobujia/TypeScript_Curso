const msg: string = 'Hola mundo';

const hero = {
    name: 'Ironman',
    age: 44
}

console.log(msg);

const a: number = 10;
let b: number = 10;

function sayHello(msg: string) {
    console.log(msg + ' ' + 'Alfonso');
}

//Función anónima autoinvocada
(()=>{
    const a:number=10;
    console.log(a);
})()