
function getchr(j){
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var cb='';
 for(i=0; i<=j; i++){
var ab = Math.floor(Math.random()*characters.length);
var bc= characters[ab];
cb+=bc;
 }
 
return cb;
}

function randomize(){
    let p1EL=document.getElementById("p1-el");
let p2EL=document.getElementById("p2-el");
   
    
   p1EL.value=getchr(15);
   p2EL.value=getchr(15);
    return false;
}

// function copyPassword() {
//    let copyText = document.getElementById("password");
//     copyText.select();
//     document.execCommand("copy");
// }  
function copyPassword(){
    // Get the text field
    let copyText = document.getElementById("p1-el");
    
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // a
    setTimeout(function(){
      alert("Copied the text: " + copyText.value);
    },3000)
  }

  function copyPass(){
    // Get the text field
    let copyTex= document.getElementById("p2-el");
    
  
    // Select the text field
    copyTex.select();
    copyTex.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyTex.value);
  
    // Alert the copied text
    setTimeout(function(){
         alert("Copied the text: " + copyTex.value);
    },3000)
//    
   }