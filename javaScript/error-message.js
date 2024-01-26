const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();


//recupération des champs pour chaque élément du formulaire
let nom = document.getElementById("nom").value
let email = document.getElementById("email").value
let telephone = document.getElementById("telephone").value
let sujet = document.getElementById("sujet").value
let message = document.getElementById("message").value

//si les champs ne sont pas complet on met un message d'érreur

if (!nom || !email || !telephone || !sujet || !message){
    document.getElementById("error-message").style.display="block";
    document.getElementById("valid-message").style.display="none";
}
// sinon on vide les champs 
else
{
    document.getElementById("error-message").style.display="none";
    document.getElementById("valid-message").style.display="block";

    document.getElementById("nom").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telephone").value = ""
    document.getElementById("sujet").value = ""
    document.getElementById("message").value = ""
    
}   
} )