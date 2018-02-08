import graphtest from "./graphtest.js";
import {request} from 'graphql-request'

const query = `{hello(name:"Hackmind"){message}}`


request('https://api.graph.cool/simple/v1/cjdd66m810f1s0165fe0efssz', query).then(data => console.log(data))


// console.log(graphtest)
console.log("new")

const ids = ["icon-Meh.", "icon-Wow", "icon-BS!"];
console.log(document.readyState, "doc State")


ready(setUp);

function setUp() {
        const buttons = ids.map(e => document.getElementById(e));
        console.log("Button!")
        buttons.map(function (e, i) {
            console.log(e, "button")
            e.addEventListener("click", function (ev) {
                console.log("you clicked " + i + " yee")
            })
        })
}


function ready(fn) {
    if (document.readyState != 'complete'){
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        fn();
    }
}

ready(function() {
    // start up your app
})


// const FeedbackStruct = {
//     meh: {
//         tooltip: "Meh.",
//         iconClass: "fab fa-sticker-mule",
//         id: "icon-Meh."
//     },
//     amazing: {
//         tooltip: "Wow",
//         iconClass: "fab fa-studiovinari",
//         id: "icon-Wow"
//     },
//     bullshit: {
//         tooltip: "BS!",
//         iconClass: "fas fa-times",
//         id: "icon-BS!"
//     }
// }


