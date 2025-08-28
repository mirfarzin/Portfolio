const inc =document.getElementById("inc");
const dec =document.getElementById("dec");
const resetbtn =document.getElementById("resetbtn");
const countLabel =document.getElementById("countLabel")

let count = 0;

inc.onclick = function(){
    count++;
    countLabel.textContent=count;
}
dec.onclick = function(){
    count--;
    countLabel.textContent=count;
}
resetbtn.onclick = function(){
    count =0;
    countLabel.textContent= count;
}

