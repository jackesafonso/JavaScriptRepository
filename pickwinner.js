//Add Event Listeners 
document.getElementById("button1").addEventListener('click',thelist,false);

//declare the array
var myArray = [];
var themembers = "";
function thelist(){
    //console.log("thelist is listening")
    //i need to get the value of input 1 from the webpage
    var newmember + document.getElementById ("input1").value;
    //add the new member
    myArray.push(newmember);
    
    //display all members of the array
    displayarray();
    
    
}

function displayarray(){
    var index;
    for (index = 0, index < myArray.length; index++){
        themembers = thelist + myArray [index];
        
    }
     document.getElementById("thelist").innerHTML = themembers;
        
}//end of function