let check = true;

var winpatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

window.onload = function () {

    var buttons = document.querySelectorAll(".btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", xo);
    }

    document.querySelector("#reset").addEventListener("click",resetbtn);


    function resetbtn(){
        location.reload();
    }
    
    function xo() {
    
        var ox = this.innerHTML;
        if(ox=="X" || ox == "O"){
            return;
        } 
    
        if(check==true){
    
            this.innerHTML = "X";
            check = false;
    
        }
    
        else{
            this.innerHTML = "O";
            check = true;
        }    

        win();
    }




};

function win (){

    for(let pattern of winpatter){

        var boxs = document.querySelectorAll(".btn");
        
        var a = boxs[pattern[0]].innerHTML; 
        var b = boxs[pattern[1]].innerHTML;
        var c = boxs[pattern[2]].innerHTML;

        if(a != "" && b != "" && c != ""){
            
            if(a == b && b == c){

                document.querySelector(".heading").innerHTML= a+" is the winner";

                return;

            }
        }


    }
}













