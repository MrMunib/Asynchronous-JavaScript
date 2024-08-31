// CallBacks vs Promises vs Async/Await

// 👇 With the help of Callback

// function dataFetcher(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result)
//     })
// }

// dataFetcher("https://randomuser.me/api" , function(result){
//     console.log(result.results[0].gender)
// })





// 👇 With the help of Promise
// function dataFetcher(url) {
//   const parchi = new Promise(function (resolve, reject) {
//     fetch(url)
//       .then(raw => raw.json())
//       .then((result) => {
//         resolve(result)
//       });
//     });
//     return parchi 
// }


// dataFetcher("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result)
// })



// 👇 With the help of Async/Await


async function dataFetcher(url){
        let data = await fetch(url)    
        let result = await data.json()

        return result.results[0].name.first;
}

async function lala(result) {
    let  kaka = await dataFetcher(`https://randomuser.me/api/`)
    console.log(kaka)

}

lala()