let nombre = prompt("Ingresá tu nombre");
let edad = parseInt(prompt("Ingresá tu edad"));
let edad_bici = parseInt(prompt("A qué edad aprendiste a andar en bici?"));
const edad_promedio = '5';
const promedio = parseInt(edad_promedio);

anios_andando = edad - edad_bici;

window.alert(`${nombre} llevás ${anios_andando} años sabiendo andar en bici`);

console.log(`${nombre} la edad promedio en que se aprende a andar en bici es ${edad_promedio}`);
console.log(typeof edad)
console.log(typeof anios_andando)