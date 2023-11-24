let nombre = prompt('Saisissez un nombre');
let message = "";

console.log(nombre);
for (let decompte = 1; decompte<10; decompte +=1){
    message += nombre + "x" + decompte + "=" + decompte * nombre + "\n";
}


alert(message);