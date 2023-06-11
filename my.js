let display = document.getElementById("display_time")
let start_time = document.getElementById("Ot").value
let end_time = document.getElementById("Do").value

let is_reset = false
let timeID
let current_time = 0

function addTime() {
    is_reset = true
    display.textContent = ""
    window.clearTimeout(timeID);
    start_time = document.getElementById("Ot").value
    end_time = document.getElementById("Do").value
    current_time = start_time
    is_reset = false
    addNum()
}

function addNum(){
    if (!is_reset) {
        if (current_time > end_time){
            window.clearTimeout(timeID);
        }else{
            display.textContent = current_time
            timeID = window.setTimeout(addNum, 1000);
            current_time ++
        }
    }
}

function resetTimer(){
    is_reset = true
    display.textContent = ""
    window.clearTimeout(timeID);
}