const btn = document.querySelector("button");
const result = document.querySelector("h2");

btn.addEventListener("click",( ) =>{
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);

    let rgb = `rgb(${num1},${num2},${num3})`;

    rgb = document.body.style.backgroundColor = rgb; 

    result.innerText = rgb;
})