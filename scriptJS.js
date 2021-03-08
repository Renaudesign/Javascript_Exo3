// @ts-check
let subjectAge = Number(prompt("Veuillez indiquer vôtre âge, mon cher.", ""))
if (subjectAge >= 18 && subjectAge < 100){
  alert("Vous êtes majeur")
}
else if (subjectAge < 18 && subjectAge > 0) {
  alert("Vous êtes mineur")
}
else {
  alert("erreur de saisie")
}
