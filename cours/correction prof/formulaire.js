// permet d'être sur que le DOM à bien été chargé
window.addEventListener('DOMContentLoaded', () => {

    // event submit sur le formulaire
    document.getElementById("form").addEventListener("submit", (event) => {

        let erreur =  document.getElementById("erreur");

        // récupère les éléments du formulaire
        form = document.forms['form'];

        // reset le message d'erreur
        erreur.innerHTML = "";
        erreur.style = "display: none;"

        // appel la fonction valider et récupère les messages d'erreur
        let erreurMessage = valider(form);

        // affiche les messages d'erreur si erreurMessage n'est pas vide
        if (erreurMessage !== "") {

            erreur.innerHTML = erreurMessage + "<br><br>";
            erreur.style = "display: block;"

            // stop le submit
            event.preventDefault();
        }

    });

    function valider(form) {

        let erreur = "";

        // ne récupère que les éléments à valider
        const { prenom, nom, mail, tel, password } = form;

        erreur += validatePrenom(prenom);
        erreur += validateNom(nom);
        erreur += validateEmail(mail);
        erreur += validateTel(tel);
        erreur += validatePassword(password);

        return erreur;
    }

    function validatePrenom(prenom) {
        console.log(prenom.value);
        if(prenom.value === "") {
            return "<br>Le prénom est obligatoire";
        }

        return "";
    }

    function validateNom(nom) {
        if(nom.value === "") {
            return "<br>Le nom est obligatoire";
        }

        return "";
    }

    function validateEmail(mail) {

        if(mail.value === "") {
            return "<br>L'email est obligatoire";
        }

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!mail.value.match(mailformat)) {
            return "<br>L'email n'ai pas valide";
        }

        return "";
    }

    function validateTel(tel) {

        if(tel.value === "") {
            return "<br>Le téléphone est obligatoire";
        }

        const telFormat = /^\d{10}$/;
        if(!tel.value.match(telFormat)) {
            return "<br>Le téléphone n'ai pas valide";
        }

        return "";
    }

    function validatePassword(password) {
        if(password.value === "") {
            return "<br>Le mot de passe est obligatoire";
        }

        const passwordFormat = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*[!#$%&? "]).*$/;
        if(!password.value.match(passwordFormat)) {
            return "<br>Le mot de passe n'est pas conforme (8 caractère minimum et un caractère spécial)";
        }

        return "";
    }
});