const myTitle = document.querySelector("#myTitle");
const counterKeeper = document.querySelector("#counterKeeper");
var counter = 0;

//function below detects whenever the title on top is clicked to trigger the text, color, and counter value to change
myTitle.addEventListener("click", () => {
  //text of #myTitle is determined on click
  if (myTitle.textContent == "Front End Developer") {
    myTitle.textContent = "Full-Stack Developer";
  } else if (myTitle.textContent == "Full-Stack Developer") {
    myTitle.textContent = "MEN Stack Developer";
  } else {
    myTitle.textContent = "Front End Developer";
  }
  //random color generated and applied to #myTitle
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  myTitle.style.color = "#" + randomColor;
  //counter display value increased and counterKeeper becomes visible and updated
  counter++;
  counterKeeper.textContent = counter.toString();
  if (counterKeeper.style.display !== "block") {
    counterKeeper.style.display = "block";
  }
});