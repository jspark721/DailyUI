$(document).ready(function(){

  let inputs = [""];
  let totalString;
  let operators = ["+", "-", "/", "*"];
  let decimal = ["."];
  let nums = [0,1,2,3,4,5,6,7,8,9];
  let lastInput = inputs[inputs.length-1];

  function getValue(input){
    if(decimal.includes(lastInput) === true && input === "."){
      console.log("error, duplicate decimal");
    } else if (inputs.length === 1 && operators.includes(input) === false){
      inputs.push(input);
    } else if (operators.includes(lastInput) === false) {
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    updateValue();
  }

  function updateValue() {
    totalString = inputs.join("");
    $("#total").html(totalString);
  }

  function getTotal(){
    totalString = inputs.join("");
    $("#total").html(eval(totalString));
  }

  $("a").not("#dot").on("click", function(){
    if(this.id === "clearall"){
      inputs = [""];
      updateValue();
    } else if(this.id === "clear"){
      inputs.pop();
      updateValue();
    } else if(this.id === "equal"){
      getTotal();
    }
    else {
      if(lastInput.indexOf("+","-","*","/",".")=== -1){
        $("#total").text(this.id);
        getValue(this.id);
      } else {
        $("#total").text(this.id);
        getValue(this.id);
      }
    }
  });

});
