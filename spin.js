var number = document.getElementById("prize")
let listnum = document.getElementById("list-number")
let list_result = document.getElementById("list-number")
prize_list = []
function clearThis(target) {
    target.value= "";
}
function makelist(){
    prize_list.length === 0
    if(number.value == ""){
        alert("Điền số vào bạn ui")
        clearThis(target)
        
    }
    else if(number.value >= 2){
        if(prize_list.length === 0){
            for (let index = 1; index <= number.value; index++) {
                prize_list.push(index)
            }
        }
        else{
            prize_list.length === 0
            for (let index = 1; index <= number.value; index++) {
                prize_list.push(index)
            }
        }
    }
    else{
        alert("Nhiều quà lên chứ")
        clearThis(target)
    }
}
    

box = []
function side_enter(){
    for (let index = 0; ; index++) {
        let num = Math.floor(Math.random() * number.value)+1;
        if(box.includes(num) == true){
            num = Math.floor(Math.random() * number.value)
        }
        else{
            box.push(num)
        }
        if(box.length == number.value){
            break
        }
    }
}
function enter_box(){
    if(box.length === 0){
        side_enter()
    }
    else{
        box.length === 0;
        side_enter()
    }
    
}

let resultHTML = ""
let the_result_list = document.getElementById("list-result")

function clears(){
    resultHTML = "";
    the_result_list.innerHTML = resultHTML;
}

function assign(){
    resultHTML = "";
    resultHTML += `
        <h2 id="list-number">CHÚC MỪNG CÁC BẠN ĐÃ QUAY ĐƯỢC GIẢI!!!</h2>
        `
    for (let i = 0; i <= prize_list.length -1; i++) {
        resultHTML += `
        <p id="list-number">LUCKYBOX: ${prize_list[i]} - GIẢI SỐ: ${box[i]}</p>
        `

    }    
    
}


function clear_box(){
    prize_list = [];
    box = []
}
function give_result(){
    makelist()
    enter_box()
    assign() 
    the_result_list.innerHTML = resultHTML;
    clear_box()
}


