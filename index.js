
let t = document.getElementById("time");

setInterval(()=>{
    let val = new Date();
    t.innerHTML = val.toLocaleTimeString();
},1000)
