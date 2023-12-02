let nomeDoHeroi = "Mario Bros"; // Solicita o nome do herói ao usuário
let experienciaDoHeroi;

do {
    experienciaDoHeroi = parseInt(("7890"))// Solicita a experiência do herói ao usuário
} while (isNaN(experienciaDoHeroi))// Repete a solicitação até que o valor inserido seja um número

let nivelDoHeroi;

if (experienciaDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi >= 6001 && experienciaDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)