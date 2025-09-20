const input = document.getElementById("fname");
const button = document.querySelectorAll("button")
const toggle = document.getElementById("themeToggle");

    addEventListener("keydown",function(e){
    let key = e.key;

if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
    // If input has only "0", replace it instead of appending
    if (input.value === "0") {
      input.value = key;
    } else {
      input.value += key;
    }
  } else if (key === "Enter") {
    try {
      input.value = eval(input.value);
    } catch (err) {
      input.value = "Syntax Error";
    }
  } else if (key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (key === "Escape") { 
    input.value = "";
  }
});
for(let i = 0 ; i<button.length;i++){
    button[i].addEventListener("click", function(){
        let value = this.innerText;

        if(value === "AC"){
            input.value = "";
        }else if (value === "DE"){
            input.value = input.value.slice(0,-1)
        }else if(value === "%"){
            input.value = parseFloat(input.value)/100;
        }else if(value === "π"){
            input.value = Math.PI
        }else if(value === "x²"){
            input.value = Math.pow(parseFloat(input.value),2);
        }else if(value === "x³"){
            input.value = Math.pow(parseFloat(input.value),3);
        }else if(value === "√"){
            input.value = Math.sqrt(input.value)
        }else if
        (value === "+" || value ==="-" || value === "*" || value === "/" ||
         value === "1" || value ==="2" || value === "3" || value === "4" ||
         value === "5" || value ==="6" || value === "7" || value === "8" ||
         value === "9" || value ==="0" || value === "00" || value === "." 
        ){
            input.value += value;
        }
        else if(value === "="){
            try{
            input.value = eval(input.value)
        }catch(error){
            input.value = "Syntax Error"
        }}

        });
}
toggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#2e2e2e";
    document.body.style.color = "white";
  }
});