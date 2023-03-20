"use strict";

function buildArticleFromData(data) {
    const article = document.createElement("article");
    const img = document.createElement('img');
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = data["title"];
    img.alt = `picsum image ${data["imgId"]}`;
    img.src = `https://picsum.photos/id/${data["imgId"]}/150`;
    p.textContent = data["description"];

    article.appendChild(img);
    article.appendChild(section);
    article.appendChild(h2);
    article.appendChild(p);
    return article;
}

const articles = articleData.map(buildArticleFromData);
articles.forEach(article => target.appendChild(article));