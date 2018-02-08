
import graphtest from "./graphtest.js";
import { request } from 'graphql-request'

const query = `{hello(name:"Hackmind"){message}}`


request('https://api.graph.cool/simple/v1/cjdd66m810f1s0165fe0efssz', query).then(data => console.log(data))



// console.log(graphtest)
console.log("new")

