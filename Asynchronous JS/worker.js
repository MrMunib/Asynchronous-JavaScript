onmessage = function(data){
    let k =data.data.reduce((acc , item) => item+acc, 0)
    this.postMessage(k)
}