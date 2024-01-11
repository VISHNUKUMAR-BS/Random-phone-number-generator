let numberEl = document.getElementById("number-el");
let random_number = 0
function generate(){
    numberEl.textContent = " "
    for(let i = 0; i < 10; i++){
            if(i === 0){
                let difference = 3
                random_number = Math.floor(Math.random() * difference) + 6
                numberEl.textContent += random_number
            }
            else{
                random_number = Math.floor(Math.random() * 10)
                numberEl.textContent += random_number
            }
    }
}


