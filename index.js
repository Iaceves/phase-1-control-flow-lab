  

function scuberGreetingForFeet(feet) {
  // Write your code here!
  let result;

  if (feet > 2500 ){
    result = 'No can do.'
  }
  else if(feet >= 2001){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (feet >= 401) {
    result = 'That will be twenty bucks.'
  }
  else if (feet <= 400){
    result = 'This one is on me!'
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC"  ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let generous = 'generous';
let notGenerous = 'not as generous';
let anyThing = 'thanks for everything';
let result;

  switch (tip) {
    case generous: 
     result = "Thank you so much.";
      break;
    case notGenerous:
      result = "Thank you."
      break;    
    case anyThing:
      result = "Bye."
      break;
    
  }
  return result;
}
