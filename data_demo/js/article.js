"use strict";

const searchParams = new URLSearchParams(document.location.search);

const id = parseInt(searchParams.get("id"));

const data = articleData.find(item => {
    return item.id === id;
});

title.textContent = data.title;
image.alt = `picsum image ${data.imgId}`;
image.src = `https://picsum.photos/id/${data.imgId}/500`;
description.textContent = data.description;