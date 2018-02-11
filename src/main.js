import {request} from 'graphql-request'
import './style.css'
import {container_feedback, commentBox, commentSubmit, icons} from './inject.js'
import {API_Calls} from "./apiCalls";

const FontAwesome = document.createElement("script");
FontAwesome.setAttribute("src", "https://use.fontawesome.com/releases/v5.0.6/js/all.js")
document.body.appendChild(FontAwesome);

document.body.appendChild(container_feedback);

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document is ready
        window.setTimeout(function() {
            console.log('document is reaydy ...', window.document, document.getElementsByTagName("body"))
            const ids = ["icon-BS!", "icon-Meh.", "icon-Wow"]
            const buttons = ids.map(e => document.getElementById(e))

            console.assert(buttons[0] === icons[0], "same story?")
            //imported icons are not the same...as the ones in the dom

            buttons.map(function (e, i) {
                e.clicked = false;
                console.log('icon', e, "as    d   ", i)

                e.addEventListener("click", function (ev) {
                    console.log('clicked icon ' + i)
                    request(API_Calls.vote.url, API_Calls.vote.details(i))
                        .then(data => {
                            commentSubmit.hidden = false;
                            commentBox.hidden = false;

                            console.log("aahhhhh smth is back", data)
                        });

                    //keep color when already voted-- has to synched with DB
                    e.clicked = !e.clicked;
                    if (e.clicked) {
                        e.style.color = e.getAttribute('color');
                    }
                    else {
                        e.style.color = "";
                    }

                })
            });





            request(API_Calls.allData.url, API_Calls.allData.details()).then(data => console.log(data, "ALL"));

        }, 2000)
    }
    else {
        console.log("ASDASD- not ready yet")
    }
};

console.log('bundle.main.js ran through');
