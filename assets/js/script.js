"use strict";

const BASE_URL = "https://api.github.com/users/";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let pictureUrl = document.querySelector("img");
    let name = document.querySelector("h1");
    getUser(pictureUrl, name);

}

function getUser(pictureUrl, name) {
    fetch(BASE_URL + "KempDewulf")
        .then(res => res.json())
        .then(user => {
            console.log(user);
            pictureUrl.src = user.avatar_url;
            name.innerText = user.name;
        })
}




