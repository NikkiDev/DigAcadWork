const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
countItems = document.querySelector(".countItems");

let a = 1;

plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? + a : a;
    countItems.innerText = a;
    console.log(a);
})

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        a = (a < 10) ? + a : a;
        countItems.innerText = a;
        console.log(a);
    }
})