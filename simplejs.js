//goes with js_3.html

var event1 = document.getElementById("button1");

event1.addEventListener('click',myfirst,false);
                    
                    function myfirst () {
                       
                        var userinput = document.getElementById("input1").value; 
                        document.getElementById("demo").innerHTML = userinput; 
                    }
                