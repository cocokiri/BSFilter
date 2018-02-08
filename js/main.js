import {request} from 'graphql-request'

const query = `{hello(name:"Hackmind"){message}}`;


request('https://api.graph.cool/simple/v1/cjdd66m810f1s0165fe0efssz', query).then(data => console.log(data))


// console.log(graphtest)
console.log("new");

const ids = ["icon-Meh.", "icon-Wow", "icon-BS!"];
console.log(document.readyState, "doc State");



document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document is ready
        window.setTimeout(function(){
            console.log('document is reaydy ...', window.document, document.getElementsByTagName("body"))


            const buttons = ids.map(e => document.getElementById(e));
            console.log(buttons, "Button!")
            buttons.map(function (e, i) {
                console.log(e, "button");
                e.addEventListener("click", function (ev) {
                    console.log("you clicked " + i + " yee")
                })
            })
        }, 2000)


    }
    else {
        console.log("ASDASD- not ready yet")
    }
};

// ready(setup);

function setUp() {
        const buttons = ids.map(e => document.getElementById(e));
        console.log("Button!")
        buttons.map(function (e, i) {
            console.log(e, "button");
            e.addEventListener("click", function (ev) {
                console.log("you clicked " + i + " yee")
            })
        })
}


function ready(fn) {
    if (document.readyState !== 'complete'){
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        fn();
    }
}



console.log('tuuuut')
