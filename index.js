let num =document.querySelector('h2')
let btns = document.querySelectorAll('button')

let i=0;
btns[0].onclick=()=>{
    num.innerHTML=i++;
}
btns[1].onclick=()=>{
    num.innerHTML=i--;
}