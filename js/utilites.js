
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue);
    return textNumber
}


function showSectionById(id){
    document.getElementById('donation-home').classList.add('hidden')
    document.getElementById('donation-history').classList.add('hidden')
    
    document.getElementById(id).classList.remove('hidden')
}

function anotherBtn() {
    const buttonHome = document.getElementById("show-donation-home");
    buttonHome.style.backgroundColor = "white";
  }

  // Function to make the first button white when the second button is clicked
  function anotherBtn2() {
    const buttonHistory = document.getElementById("show-donation-history");
    buttonHistory.style.backgroundColor = "white";
  }

  // Select the first button (history)
  const buttonHistory = document.getElementById("show-donation-history");
  buttonHistory.addEventListener("click", function() {
    // Change its background to green and make the other button white
    buttonHistory.style.backgroundColor = "purple";
    anotherBtn();
  });

  // Select the second button (home)
  const buttonHome = document.getElementById("show-donation-home");
  buttonHome.addEventListener("click", function() {
    // Change its background to green and make the other button white
    buttonHome.style.backgroundColor = "purple";
    anotherBtn2();
  });