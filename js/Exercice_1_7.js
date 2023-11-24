let pointure = prompt('entrez votre pointure');
let naissance = prompt('entrez votre année de naissance');

function resultat (a, b){
    return (((a * 2) + 5) * 50 - b + 1766)
}

alert (resultat(pointure, naissance));

