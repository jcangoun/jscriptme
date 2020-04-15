window.onload = function() {

    // VOUS Y ETES PRESQUE !!!

    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvelle object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML

          readFile('data/articles.json', function(articles) {  
// Methode Class URL avec searchParm
            // Avec searchParm on va chercher ce qui est stocké dans l'url 
            const parm = new URL(document.location).searchParm;
            const id = parseInt(params.get("id"));

            for (let i = 0; i < articles.length ; i++) {

                const article = new Article(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);
    
                if (id == article.id) {

                       displayArticle(article);

    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)



}
