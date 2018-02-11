import './style.css'
import {setAttr} from "./utils";


const commentBox = document.createElement('textarea')
commentBox.setAttribute("class", "commentBox")
commentBox.value = `//your opinion => ...`

const commentSubmit = document.createElement('span')
commentSubmit.setAttribute("class", "submitBtn_opinion")
commentSubmit.innerText = "SUBMIT"

commentSubmit.hidden = true;
commentBox.hidden = true;


const iconPresets = [
    {
        title: "BS!",
        class: "fas fa-times",
        id: "icon-BS!"
    },
    {
        title: "Meh.",
        class: "fab fa-sticker-mule",
        id: "icon-Meh."
    },
    {
        title: "Wow",
        class: "fab fa-studiovinari",
        id: "icon-Wow"
    }
];

const icons = iconPresets.map(p => setAttr(document.createElement("i"))(p)) //currying!
const texts = iconPresets.map(p => document.createElement("span"));
texts.map((t,i) => {t.textContent = iconPresets[i].title});

const iconBar = document.createElement("section");
iconBar.setAttribute("class", "iconBar")

const textbox = document.createElement("div");
textbox.setAttribute("class", "textbox")

//Attach
for (let i of icons) {
    iconBar.appendChild(i)
}
for (let t of texts) {
    textbox.appendChild(t);
}



const container_feedback = document.createElement("div");

container_feedback.setAttribute("class", "containerFeedback")
container_feedback.appendChild(commentBox)
container_feedback.appendChild(commentSubmit)
container_feedback.appendChild(iconBar);
container_feedback.appendChild(textbox)

export {container_feedback, commentBox, commentSubmit};

