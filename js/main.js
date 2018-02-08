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


let currentUser = localStorage.getItem("user") || "unregistered";

const ids = ["icon-BS!", "icon-Meh.", "icon-Wow"];

const ids2 = [{
    DOMid: "icon-BS!",
    voteValue: -1
}]

function getPageURL() {
    return window.location.href;
}


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document is ready
        window.setTimeout(function () {
            console.log('document is reaydy ...', window.document, document.getElementsByTagName("body"))

            //GET ICONs from DOM
            const buttons = ids.map(e => document.getElementById(e));
            console.log(buttons, "Button!")

            request(postOpinionLoc, requestAll).then(data => console.log(data, "ALL"));


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
