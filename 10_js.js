
function $(id) {
    return document.getElementById(id);
}


document.addEventListener("DOMContentLoaded", function () {


    $("filterContent").style.display = "none";
    $("newContent").style.display = "none";

    filterArticles();
});



function showFilter() {

    const filter = $("filterContent");
    const addForm = $("newContent");

    if (filter.style.display === "block") {
        filter.style.display = "none";
    } else {
        filter.style.display = "block";
        addForm.style.display = "none";
    }
}



function showAddNew() {

    const filter = $("filterContent");
    const addForm = $("newContent");

    if (addForm.style.display === "flex") {
        addForm.style.display = "none";
    } else {
        addForm.style.display = "flex";
        filter.style.display = "none";
    }
}



function filterArticles() {

    const showOpinion = $("opinionCheckbox").checked;
    const showRecipe = $("recipeCheckbox").checked;
    const showUpdate = $("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "" : "none";
        }
    });
}



let nextId = 11;

function addNewArticle() {

    const title = $("inputHeader").value.trim();
    const text = $("inputArticle").value.trim();


    let type = "";

    if ($("opinionRadio").checked) type = "opinion";
    if ($("recipeRadio").checked) type = "recipe";
    if ($("lifeRadio").checked) type = "update";

    if (!title || !text || !type) {
        alert("Please complete all fields.");
        return;
    }

    const article = document.createElement("article");
    article.classList.add(type);
    article.id = "a" + nextId++;


    const marker = document.createElement("span");
    marker.className = "marker";

    if (type === "opinion") marker.textContent = "Opinion";
    if (type === "recipe") marker.textContent = "Recipe";
    if (type === "update") marker.textContent = "Update";


    const h2 = document.createElement("h2");
    h2.textContent = title;


    const p = document.createElement("p");
    p.textContent = text;


    const pLink = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    pLink.appendChild(link);

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(pLink);

    $("articleList").prepend(article);


    $("inputHeader").value = "";
    $("inputArticle").value = "";
    $("opinionRadio").checked = false;
    $("recipeRadio").checked = false;
    $("lifeRadio").checked = false;

    filterArticles();
}