import {request} from 'graphql-request'

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

const ids2 = [{
    DOMid: "icon-BS!",
    voteValue: -1
}]

function getPageURL() {return window.location.href;}


let opinionAr;
let submitButton;

function reqDetails(review, currentUser, myPage, opinionStr) {
   return ` mutation {
  createReview(review: ${i-1}, 
  reviewedBy: "Hackmind",
  user: "${currentUser}",
  url: "${myPage}",
  opinion: "${opinionStr}"){
    review
    reviewedBy
    url
    user
  }
} `
}


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document is ready
        window.setTimeout(function () {
            console.log('document is reaydy ...', window.document, document.getElementsByTagName("body"))

            //GET ICONs from DOM
            const buttons = ids.map(e => document.getElementById(e));
            opinionAr = document.getElementsByClassName("opinionArea")[0]
            submitButton = document.getElementsByClassName("submitBtn")[0]


            submitTextBtn.addEventListener("click", function () {

                //request() //create ContentShema
                submitTextBtn.setAttribute("id", "hidden");
                opinionText.setAttribute("id", "hidden")
            })

            console.log(buttons, "Button!")

            request(postOpinionLoc, requestAll).then(data => console.log(data, "ALL"));

            let currentUser = localStorage.getItem("user") || "unregistered";

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
                        opinionText.setAttribute("id", "show")

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



console.log('bundle.main.js ran through')
