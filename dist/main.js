"use strict";
//! npm init -y , npm install -D typescript , npx tsc --init , npx tsc
//? all html tag or elements get.
const forms = document.getElementById("userForm");
const names = document.getElementById("name");
const htmlTags = document.getElementById("result");
const ages = document.getElementById("ages");
//? add even listinger.
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const namesValue = names.value;
    const ageValue = Number(ages.value);
    htmlTags.textContent = `Hello ${namesValue} you are ${ageValue} years old!`;
    console.log(namesValue);
});
