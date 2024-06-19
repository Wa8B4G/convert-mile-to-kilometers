const displayName = document.querySelector("#result")
const disA = document.querySelector("#alert")
document.getElementById("submit").addEventListener("click", function(e){

    e.preventDefault();

    const distance = document.getElementById("kilo");
    const val = distance.value;
    if (val) {
        
      displayName.innerHTML = (val * 1.60934)
        
    }else {
        // const dval = val * 10;
       
        
        disA.style.display = "block";

    }
 
   

});