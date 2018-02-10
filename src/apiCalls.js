import {request} from 'graphql-request'

const postOpinionLoc = "https://api.graph.cool/simple/v1/cjdeskbto3tuh011134m3pto9";

const location = {
    comments:"",

}

const DBreq = function(){

    //window.location.href;
}

const reqDetails = {
    createReview: ` mutation {createReview(review: ${0}, 
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
} `,
    requestAll: `query {
    allReviews(orderBy:review_ASC) {
        review
        reviewedBy
        id
        url
    }
}`
}