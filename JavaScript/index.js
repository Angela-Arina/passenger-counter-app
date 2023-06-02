let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment(){
    count += 1
    countEl.textContent = count
}
increment();
function save(){
    let countStr = count + " - "

    saveEl.innerText += countStr
    countEl.tectContent = 0
    count = 0

}