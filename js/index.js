window.addEventListener = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est affiché, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->



var connectionBut = document.getElementsByClassName("square-button-empty");

    console.log("square-button-empty");                                               

    var connectForm      = document.querySelector("#connexion-form");


    var inscriptForm    = document.querySelector("#register-form");

 /*   const buttons        
const connexionForms 
const inscriptionForm
*/

    connectionBut.addEventListener(function() {
        document.getElementsByClassName("square-button-empty[1]").style = ("display", "none");
    })


for (let i = 0; i < buttons.length; i++) {
        
            buttons[i].addEventListener("click", function(e){
            e.preventDefault();

                if (e.target.getAttribute("data-button")=="0"){
                connectForm.style.display = "none";
                inscriptForm.style.display = "flex";
                }
                else if(e.target.getAttribute("data-button")=="1"){
                inscriptForm.style.display = "none";
                connectForm.style.display = "flex";
                }
            })
        }



    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)






    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


const user = new User('jc (username)', 'jcangounou@hotmail.fr (email)', '747200 (password)';

    // Pour verifier le succès de la démarche je fais le console.log :

    console.log('Voici vos infos persos' + user.getusername() + 'voila');

            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'



//Je n 'ai plus le temps donc je place en copie collé les codes que j'avais fait avec l'aide de abdel...   :

            
        const logInButton  = document.querySelector("#logIn");
        const signUpButton = document.querySelector("#signUp");
        
        logInButton.addEventListener("click", function(e){
        e.preventDefault();
        
            let connectForm = document.getElementById("connexion-form"); // pour les form on peux directement cibler les imputs
            let email     = connectForm[0].value;
            let password  = connectForm[1].value;
        
            let user = localStorage.getItem("user");
                user = JSON.parse(user);
                
            if (user != null) {
                if(email == user.email && password == user.password){
                    document.location.href="home.html";
                }
                else{
                showAlert("Account do not exist, please register.")
                }
            }
        })

        signUpButton.addEventListener("click", function(e){
            e.preventDefault();

            let registerForm = document.getElementById("register-form");
            let username = registerForm[0].value;
            let email    = registerForm[1].value;
            let password = registerForm[3].value;
            let passC    = registerForm[3].value;

            let error    = false;

            let usernameStatus = checkUserName(username);
            if(!usernameStatus){
                showAlert("l'username doit comporter au moin 5 caracteres");
                error = true;
            }

            let passStatus = checkPass(password);
            if(!passStatus){
                showAlert("une maj une min integer 8cara");
                 error = true;
            }
            if (password !== passC){
                showAlert("mdp different");
                 error = true;
            }


            // if(error == false)
            // {

            // }
            
            var user = new User(username, email , password);
            console.log(user);
            
            localStorage.setItem("user", JSON.stringify(user));  // linverse de stringify c'est JSON.parse(user)
           

        })



}
