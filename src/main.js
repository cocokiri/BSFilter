import {request} from 'graphql-request'
import './style.css'


const query = `{hello(name:"Hackmind"){message}}`;



const postOpinionLoc = "https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9";

request('https://api.graph.cool/simple/v1/cjdd66m810f1s0165fe0efssz', query).then(data => console.log(data))

function postVote(pageURL, vote) {
    const myQuery = "some";
    //request();
}

const requestAll = `query {
    allReviews(orderBy:review_ASC) {
        review
        reviewedBy
        id
        url
    }
}`;

const ids = ["icon-BS!", "icon-Meh.", "icon-Wow"];

function getPageURL() {return window.location.href;}




function reqDetails(currentUser, myPage, opinionStr) {
   return ` mutation {
  createReview(review: ${0}, 
  reviewedBy: "Hackmind",
  user: "${currentUser}",
  url: "${myPage}",
  opinion: "${opinionStr}"){
    review
    reviewedBy
    url
    user
    opinion
  }
} `
}
let currentUser;
let opinion;
let submitTextBtn;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document is ready
        window.setTimeout(function () {
            console.log('document is reaydy ...', window.document, document.getElementsByTagName("body"))

            //GET ICONs from DOM
            const buttons = ids.map(e => document.getElementById(e));
            opinion = document.getElementsByClassName("opinionText")[0]
            submitTextBtn = document.getElementsByClassName("submitBtn_opinion")[0]

            //submitTextBtn is from inject.js
            submitTextBtn.addEventListener("click", function () {
                let opinionStr = document.getElementsByClassName("opinionText")[0].value
                    .replace(/\n/g, "\r\n").replace(/\r\r/g, "\r");

                opinionStr = opinionStr.toString()
                //no ENTER in textarea!!

                //request() //create ContentShema
                submitTextBtn.setAttribute("id", "hidden");
                opinion.setAttribute("id", "hidden")
                let textPost = reqDetails(
                    currentUser,
                    getPageURL(),
                    opinionStr
                    );

                console.log(textPost, "textpost")
                request(postOpinionLoc, textPost).then(data => console.log(data, "with comment"))


            })

            console.log(buttons, "Button!")

            request(postOpinionLoc, requestAll).then(data => console.log(data, "ALL"));

            // let currentUser = localStorage.getItem("user") || "unregistered";
            chrome.storage.sync.get("userName", function(items){
                currentUser = items.userName;
                console.log(currentUser,"  = username")
            })

            //MAKE THEM BUTTONS
            buttons.map(function (e, i) {
                e.addEventListener("click", function (ev) {
                    const myPage = getPageURL();
                    //postVote();
                    console.log("you clicked " + i + " yee");
                    const f = request(postOpinionLoc,
                        ` mutation {
  createReview(review: ${i-1}, 
  reviewedBy: "Hackmind",
  user: "${currentUser}",
  url: "${myPage}"){
    review
    reviewedBy
    url
    user
  }
} `
                    ).then(data => {
                        //AFTER VOTE
                        // changeIconBarToInputBar();

                        submitTextBtn.setAttribute("id", "show");
                        opinion.setAttribute("id", "show")

                        console.log("aahhhhh smth is back", data)


                    })
                })
            })
        }, 2000)


    }
    else {
        console.log("ASDASD- not ready yet")
    }
};



console.log('bundle.main.js ran through');
