const displayName = document.querySelector("#result")
const disA = document.querySelector("#alert")
document.getElementById("submit").addEventListener("click", function(e){

    e.preventDefault();

    const distance = document.getElementById("kilo");
    const val = distance.value;
    if (val) {
      disA.style.display = "none";
      distance.style.border = "1px solid blue";
      displayName.innerHTML = (val * 1.60934)
        
    }else {
        // const dval = val * 10;
       
        distance.style.border = "1px solid red";
        disA.style.display = "block";

    }
 
   

});