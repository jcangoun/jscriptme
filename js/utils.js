// Ce fichier contient des fonction réutilisable -->

function readFile(file, done) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var value;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                value = JSON.parse(allText);
                done(value);
            }
        }
    }
    rawFile.send(null);
}

function checkUserName(username){

    if (username.length < 5)
        return false;
    else
        return true;
}

function checkPass(password){

    let passRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    if (!passRegex.test(password))
        return false;
    else
        return true;
}

function showAlert(message){
    alert(message);
}


function displayArticle(article){

    const section = document.getElementsByTagName("section")[0];
    section.classList.add("sectionFlex");
                
    let articleBloc = document.createElement('article');
    articleBloc.setAttribute("data-id" , article.id);

    let articleTitle = document.createElement("h2");
    articleTitle.innerText = article.title;

    let articleResumes = document.createElement("p");
    articleResumes.innerText = article.resumes;

    let articleContent = document.createElement("p");
    articleContent.innerText = article.content;

    let articleAuthor = document.createElement("p");
    articleAuthor.innerText = article.author;

    let articleDate = document.createElement("span");
    articleDate.innerText = article.publishedDate;

    let articleImg = document.createElement("img");
    articleImg.setAttribute("src", article.img);

    let articleTags = document.createElement("p")
    articleTags.innerText = article.tags;

                    
    articleBloc.appendChild(articleTitle);
    articleBloc.appendChild(articleResumes);
    articleBloc.appendChild(articleContent);
    articleBloc.appendChild(articleDate);
    articleBloc.appendChild(articleAuthor);
    articleBloc.appendChild(articleImg);
    articleBloc.appendChild(articleTags);

    section.appendChild(articleBloc);

    articleTitle.addEventListener("click", function(){

        document.location="article.html?id="+article.id;