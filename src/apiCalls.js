import {request} from 'graphql-request'

const postOpinionLoc = "https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9";

const location = {
    comments:"",

}

const DBreq = function(){

    //window.location.href;
}

let currentUser;
chrome.storage.sync.get("userName", function(items){
    currentUser = items.userName;
    console.log(currentUser,"  = username")
})
export {currentUser}


export const API_Calls = {
    allData: {
        url: "https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9",
        details(){
            return `query {
    allReviews(orderBy:review_ASC) {
        review
        reviewedBy
        id
        url
    }
}`
        }
    },
    vote:{
        url: "https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9",
        details(rating, currentUser = currentUser){
            return ` mutation {
  createReview(review: ${rating}, 
  reviewedBy: "Hackmind",
  user: "${currentUser}",
  url: "${window.location.href}"){
    review
    reviewedBy
    url
    user
  }
} `
        }
    },
    comment:{
        url:"https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9",
        details(comment, currentUser = currentUser){
            return ` mutation {
  createReview(review: ${0}, 
  reviewedBy: "Hackmind",
  user: "${currentUser}",
  url: "${window.location.href}",
  opinion: "${comment}"){
    review
    reviewedBy
    url
    user
    opinion
  }
} `
        }
    }
};
