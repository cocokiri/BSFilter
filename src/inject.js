import './style.css'
import {setAttr} from "./utils";
import {request} from "graphql-request";
import {API_Calls} from "./apiCalls";


const commentBox = document.createElement('textarea')
commentBox.setAttribute("class", "commentBox")
commentBox.value = `//your opinion => ...`

const commentSubmit = document.createElement('span')
commentSubmit.setAttribute("class", "submitBtn_opinion")
commentSubmit.innerText = "SUBMIT"

commentSubmit.hidden = true;
commentBox.hidden = true;





//submitTextBtn is from inject.js
commentSubmit.addEventListener("click", function () {
    console.log("comment submit!", this)
    if (!commentBox.value) {
        return;
    }
    let comment = commentBox.value
        .replace(/\n/g, "\r\n").replace(/\r\r/g, "\r");

    request(API_Calls.comment.url, API_Calls.comment.details(comment))
        .then(data => {
            console.log(data, "with comment");
            commentSubmit.hidden = true;
            commentBox.hidden = true;
        })
})


const iconPresets = [
    {
        title: "BS!",
        class: "fas fa-times",
        id: "icon-BS!",
        color: 'red',
    },
    {
        title: "Meh.",
        class: "fab fa-sticker-mule",
        id: "icon-Meh.",
        color: "orange"
    },
    {
        title: "Wow",
        class: "fab fa-studiovinari",
        id: "icon-Wow",
        color: "blue"
    }
];

const icons = iconPresets.map(p => setAttr(document.createElement("i"))(p)) //currying!
const texts = iconPresets.map(p => document.createElement("span"));
texts.map((t, i) => {
    t.textContent = iconPresets[i].title
});




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

export {container_feedback, commentBox, commentSubmit, icons};

