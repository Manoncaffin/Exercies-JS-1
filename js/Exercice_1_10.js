let userWord= prompt('Saisissez un mot');
let message = "";

console.log(userWord[5]);

for (let lettre = 0; lettre <userWord.length; lettre +=1){
    message += userWord[lettre] + "\n";

}
console.log (message);

