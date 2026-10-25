//! npm init -y , npm install -D typescript , npx tsc --init , npx tsc

//? all html tag or elements get.

const forms = document.getElementById("userForm") as HTMLFormElement
const names = document.getElementById("name") as HTMLInputElement
const htmlTags = document.getElementById("result") as HTMLHeadingElement
const ages = document.getElementById("ages") as HTMLInputElement

//? add even listinger.
forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    const namesValue:string = names.value;
    const ageValue:number = Number(ages.value)
    
    htmlTags.textContent = `Hello ${namesValue} you are ${ageValue} years old!`
    console.log(namesValue);
})