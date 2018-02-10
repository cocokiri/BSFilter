import './style.css'
import {hide, isLoggedIn, LogIn, createDOMElement} from "./utils";

console.log("InjectWisdom")


//move login views to popup.js ....

const opinionText = document.createElement('textarea')
opinionText.setAttribute("class", "opinionText")
opinionText.value = `//your opinion => ...`


const loginInput = document.createElement('input')
loginInput.setAttribute("id", "account")

const loginBtn = document.createElement('span')
loginBtn.setAttribute("class", "submitBtn")
loginBtn.textContent = "SUBMIT";

loginBtn.addEventListener("click", function () {
    LogIn(loginBtn.value)
    hide(loginArea)
})


const loginArea = document.createElement("div")
loginArea.setAttribute("id", "inputFieldX")

loginArea.appendChild(loginInput)
loginArea.appendChild(loginBtn)


if (!isLoggedIn()) {
    hide(loginArea)
}


const submitTextBtn = document.createElement('span')
submitTextBtn.setAttribute("class", "submitBtn_opinion")
submitTextBtn.innerText = "SUBMIT"

submitTextBtn.setAttribute("id", "hidden");
opinionText.setAttribute("id", "hidden")

const iconPresets = {
    bullshit: {
        tooltip: "BS!",
        iconClass: "fas fa-times",
        id: "icon-BS!"
    },
    meh: {
        tooltip: "Meh.",
        iconClass: "fab fa-sticker-mule",
        id: "icon-Meh."
    },
    amazing: {
        tooltip: "Wow",
        iconClass: "fab fa-studiovinari",
        id: "icon-Wow"
    }
}

const feedback = document.createElement("section");


feedback.setAttribute("class", "iconBar")
const icons = [1, 1, 1].map(e => document.createElement("i"))

const textbox = document.createElement("div");
textbox.setAttribute("class", "textbox")
const texts = [];



    let c = 0;
    for (let f in iconPresets) {
        if (iconPresets.hasOwnProperty(f)) { //bestmap!

            icons[c].setAttribute("class", iconPresets[f]["iconClass"]);
            icons[c].setAttribute("title", iconPresets[f]["tooltip"]); //doesn't do anything
            icons[c].setAttribute("id", iconPresets[f]["id"]); //doesn't do anything

            icons[c].setAttribute("data-tooltip", iconPresets[f]["tooltip"]); //doesn't do anything

            texts[c] = document.createElement("span");
            texts[c].innerText = iconPresets[f]["tooltip"];
            c++;
        }
    }


//Attach
for (let i of icons) {
    feedback.appendChild(i)
}
for (let t of texts) {
    textbox.appendChild(t);
}

const FontAwesome = document.createElement("script");
FontAwesome.setAttribute("src", "https://use.fontawesome.com/releases/v5.0.6/js/all.js")
document.body.appendChild(FontAwesome);

const wisContainer = document.createElement("div");
wisContainer.setAttribute("class", "wisContainer")

window.addEventListener("load", function () {
    wisContainer.appendChild(opinionText)
    wisContainer.appendChild(submitTextBtn)

    wisContainer.appendChild(feedback);
    wisContainer.appendChild(textbox)

    document.body.appendChild(loginArea)

    document.body.appendChild(wisContainer);
})
