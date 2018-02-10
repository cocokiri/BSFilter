import './style.css'

console.log("InjectWisdom")

const opinionText = document.createElement('textarea')
opinionText.setAttribute("class", "opinionText")
opinionText.value = `//your opinion => ...`


const loginInput = document.createElement('input')
loginInput.setAttribute("id", "account")

const loginBtn = document.createElement('span')
loginBtn.setAttribute("class", "submitBtn")
loginBtn.innerText = "SUBMIT";

loginBtn.addEventListener("click", function() {
    if (loginInput.value) {
        chrome.storage.sync.set({'userName': loginInput.value}, function() {
            // Notify that we saved.
            console.log('Username saved');
        });
    }
    loginArea.setAttribute("id",'hidden');
    alert("user logged in as ", loginInput.value)

})

const loginArea = document.createElement("div")
loginArea.setAttribute("id", "inputFieldX")

loginArea.appendChild(loginInput)
loginArea.appendChild(loginBtn)

chrome.storage.sync.get("userName", function(items){
    if(items.userName) {
        loginArea.setAttribute("id", "hidden")
    };

})


const submitTextBtn = document.createElement('span')
submitTextBtn.setAttribute("class", "submitBtn_opinion")
submitTextBtn.innerText = "SUBMIT"

submitTextBtn.setAttribute("id", "hidden");
opinionText.setAttribute("id", "hidden")

console.log(chrome.storage.sync, "got it")

const FeedbackStruct = {
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
const feedbacktext = document.createElement("span");
const icons = [1, 1, 1].map(e => document.createElement("i"))

const textbox = document.createElement("div");
textbox.setAttribute("class", "textbox")
const texts = [];

let c = 0;
for (let f in FeedbackStruct) {
    if (FeedbackStruct.hasOwnProperty(f)) { //bestmap!

        icons[c].setAttribute("class", FeedbackStruct[f]["iconClass"]);
        icons[c].setAttribute("title", FeedbackStruct[f]["tooltip"]); //doesn't do anything
        icons[c].setAttribute("id", FeedbackStruct[f]["id"]); //doesn't do anything

        icons[c].setAttribute("data-tooltip", FeedbackStruct[f]["tooltip"]); //doesn't do anything

        texts[c] = document.createElement("span");
        texts[c].innerText = FeedbackStruct[f]["tooltip"];
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

    localStorage.setItem("user", "ryan")
})
