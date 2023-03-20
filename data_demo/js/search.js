"use strict";

query.addEventListener('change', ev => {
    while(results.firstChild) {
        results.firstChild.remove();
    }

    if(!query.value) {
        return;
    }

    const filteredData = articleData.filter(item => {
        return item.description.includes(query.value);
    });

    const articles = filteredData.map(buildResultsFromData);
    articles.forEach(article => results.appendChild(article));
    
    if(!articles.length) {
        const li = document.createElement('li');
        li.textContent = `No results found for ${query.value}`;
        results.appendChild('li');
    }
});

function buildResultsFromData(data) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    img.alt = `picsum image ${data.imgId}`;
    img.src = `https://picsum.photos/id/${data["imgId"]}/50`;
    a.textContent = data.title;
    a.href = `article.html?id=${data.id}`;
    li.appendChild(img);
    li.appendChild(a);
    return li;
}