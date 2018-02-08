console.log("InjectWisdom")


//if node has textcontent
//and it is > 20 words
//add to sum

//count words on site

// document.body.children


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


// const text1 = document.createElement("span");
// text1.innerText = "JA HALLO";

const FontAwesome = document.createElement("script");
FontAwesome.setAttribute("src", "https://use.fontawesome.com/releases/v5.0.6/js/all.js")
document.body.appendChild(FontAwesome);

const wisContainer = document.createElement("div");
wisContainer.setAttribute("class", "wisContainer")

window.addEventListener("load", function () {
    wisContainer.appendChild(feedback);
    wisContainer.appendChild(textbox)

    document.body.appendChild(wisContainer);
})
