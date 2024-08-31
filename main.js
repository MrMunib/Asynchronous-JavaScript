// Aisa kuch b code jis to run hony main time lgta hai , JS mai usy code by default in most cases async code consider kr k "SIDE STACK" mai dal diya jata hai 

// setTimeOut -  setTimeOut ka code kuch dair badd chalta hai 

// setInterval - set interval ka code kuch dair bad chalta hai bar bar ek particular interval time mein 

// Fetch API - ye kisi aur url par jaa kr kuch data ly kr ay ga YA data hmarey pass sy us url pr lekar jay ga

// Axios (or other HTTPS Libraries) - ye bhi whi kry ga jo fetch krta hai bas ye thora ziyada developer friendly hai


// promise - is k andr jo code likha jay ga wo apna kam kareyga or promise khud side stack main chla jayega us code ko lekar or jb ande sy code resolve kiya jayega tb promise chly ga




// 1. setTimeOut
// setTimeout(function(){console.log("Hello World")}, 2000)

// console.log("hey 1");
// console.log("hey 2");
// setTimeout(function(){console.log("hey 3");
// }, 2000)
// console.log("hey 4");


/*
--------------------                         --------------------
|                  |                         |                  |
|      hey 1       |                         |                  |
|      hey 2       |                         |                  |
|      hey 4       |                         |      hey 3       |
|                  |                         |                  |
|                  |                         |                  |
|                  |                         |                  |
--------------------                         --------------------
 MAIN CallBack STACK                      SIDE STACK / CallBack Queue

*/





// 2. setInterval

// let counter = 0;
// let myInterval = setInterval(function(){
//     counter++;
//     console.log(counter)
//     console.log("Hello World 1")
//     if (counter === 3) clearInterval(myInterval);
// }, 2000)





// 3. Fetch API 
// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(result => console.log(result.results[0].name.first))



// Axios
// axios.get(`https://randomuser.me/api/`)
// .then(res =>  console.log(res.data.results[0].email))




// Promises
// Kuch code soch , jo k async code ho, mtlb k ye side stack main jaygega aur bad mei chalega main stack k, ab ye soco ka ap ne is code ko likha hai to iska answer kbhi na kbhi a b skta hai or nhi b akta, promises kya krty hain aisa smjhoo k ap promise ke andr koi bhi async code likhdo jo b dil kry aur promise apko aik parchi dey deta hai and wo parchi par be by default likha hota hai PENDING, parchi pr 2 events haty hain mainly ek event ka namm hai (then) aur ek event ka nam hai (catch), agr apka dta agya to parchi pr resolve likh diya jay ga or (then) chlyga or agr parchi pr rejected likh diya jay ga to (catch) chly ga.
//  PENDING | FULFILLED | REJECTED

// let parchi = new Promise(function(resolve, reject) {
//     axios.get('https://randomuser.me/api/')
//         .then(res => {
//             if (res.data.results[0].gender === "male") {
//                 resolve();  
//             } else {
//                 reject();  
//             }
//         })
//         .catch(err => {
//             reject(err);
//         });
// });

// parchi
//     .then(function() {
//         console.log("Male Aya");
//     })
//     .catch(function() {
//         console.log("Female Aya");
//     });










// CallBacks
// CallBacks kuch khass nhi hai blky sirf ek function hota hai, bs thora special jo hai wo ye hai k isko pass kiya jata hai as an argument jab particular async code chal jaye

// function abcd(a, b){
//         b()
// }

// abcd(1, function(){
//     console.log("I AM OUTPUT OF CALLBACK FUNCTION")
// })

// In the above exampele b() is a call back function

// Another Example

// function doSomeAsyncTask(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result)
//     })
// }

// doSomeAsyncTask("https://randomuser.me/api/", function(result){
//     let data = result.results[0]
//     console.log(data.gender, data.name.first, data.email, data.cell)
// })










// Async/Await
// koi b function bana lo or usky and jo b dil kry wo async code likh do and jb ap async likhty ho to bad wali line pehly chlal jati jati hai q k async side stack pe hota hai aur bad wali line agr async ke basis pr hui to apka code fail hojay ga wo isliye q k apka code depend krta hai async code k ko jo k sync code k bad chly ga

// with async/await ap async code bhai aisy likh skty ho jaisy k ap normal synhcrounus code likh rhe ho


// async function abcd(){
//     // await ko work krwany k liye await k parent fucntion pr async lgana zrori hai 
//     let a = await fetch(`https://randomuser.me/api/`)
//     a = await a.json()
//     console.log(a.results[0].gender)
// }

// abcd()






// Generators:
// Ap program k flow ko puase kr skte ho and bol skte ho k ap next step perform kro or phir ap ko next step jb b chaheye wo step perfom kr skty ho 


function* printNums(){
    console.log("Started");
    yield 1;
    console.log("Pehla Chal chuka");
    yield 2;
    console.log("Dusra Chal chuka");
    yield 3;
    console.log("Teesra Chal chuka");
}


const ans = printNums()
console.log(ans.next().value)
console.log(ans.next().value)
console.log(ans.next().value)
console.log(ans.next())





// Web Workers
// Usually hmara pura code single thread pr chalta hai pra kai bar kuch bary calculations perform krny pr jaty hai jis ki wja sy apka mai thread busy hojata hai ya phir wo kafi ziada loaded hojata hia aur aapke baki tasts ki performance km hojati hai 

// Thread aisa smjho ki ek computational task ko perfom krne k liye ek thread aloted hota hai 


// [1-100000]

// Is situation ko achy sy handle kry k liye we use web workers, ap chaaho to apna koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perfomr karega and aapka main thread efficiently bakki cheezo ko handle kar sky ga .  


// Now how to do it ?


// 1. create worker.js
// ap apni main js file sy data send krskty ho or ap apky worker file data accept kroge and jo perfor krna hai wo kro gy and wha sy data wpis main file me bhejo gy and main file mei wapis accept krogy.


var nums = Array.from({length : 10000}, (_, b) => b+1)
const worker = new Worker("worker.js")
worker.postMessage(nums)

worker.onmessage = function(data){
    console.log(data.data)
}