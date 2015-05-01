/*jslint node: true. browser:true */
"use strict";


function CalcView() {
    var
            existingCurrency = document.getElementById("ExistingCurrency"),
            transferCurrency = document.getElementById("TransferCurrency"),
            bCut = document.getElementById("bankCut"),
            zero = document.getElementById("zero"),
            one = document.getElementById("one"),
            two = document.getElementById("two"),
            three = document.getElementById("three"),
            four = document.getElementById("four"),
            five = document.getElementById("five"),
            six = document.getElementById("six"),
            seven = document.getElementById("seven"),
            eight = document.getElementById("eight"),
            nine = document.getElementById("nine"),
            reset = document.getElementById("reset"),
            equals = document.getElementById("equals"),
            display = document.getElementById("output");
           
    var agent = "click";
   var openNav = true,
        addMouseAndTouchUp = function (elementID, handler) {
            //utility function to add both mouseup and touchend events and prevent double events
            var element = document.getElementById(elementID),
                f = function (e) {
                    e.preventDefault();//stops mobile browsers faking the mouse events after touch events
                    handler(e);
                    return false;
                };
            element.addEventListener("mouseup", f, false);
            element.addEventListener("touchend", f, false);
        },
        openCloseNav = function () {
            //toggle the side menu reveal
            if (openNav) {
                openNav = false;
                document.getElementById("nav").className = "closedmenu";
                document.getElementById("navelem").style.display = "none";
            } else {
                openNav = true;
                document.getElementById("nav").className = "";
                document.getElementById("navelem").style.display = "block";
            }
        };
        
        
        
        
       document.body.addEventListener('touchmove', 
       function(bodyStop) 
       {
          bodyStop.preventDefault();
          
      },false)  ;
        
        
        this.init = function () {
        openCloseNav();
        addMouseAndTouchUp("navmenu", openCloseNav);
        
        
        if (navigator.userAgent.match(/Android/i)) {
            agent = "touchstart";
        } 
        else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)){
        agent = "touchstart";
    }
    };
            
        
        
   
   
         

    this.ShowTextScreen = function (calcValue, exCurrency, fCurrency, baCut) {
        display.value = calcValue;
        existingCurrency.value = exCurrency;
        transferCurrency.value = fCurrency;
        bCut.value = baCut;
    };

    this.setExistingClickCallback = function (callback) {
        existingCurrency.addEventListener("change", callback);
    };

    this.setTransferClickCallback = function (callback) {
        transferCurrency.addEventListener("change", callback);
    };

    this.setBankClickCallback = function (callback) {
        bCut.addEventListener("change", callback);

    };

    

    this.setButtonClickCallback = function (callback) {
        one.addEventListener(agent, callback);
        two.addEventListener(agent, callback);
        three.addEventListener(agent, callback);
        four.addEventListener(agent, callback);
        five.addEventListener(agent, callback);
        six.addEventListener(agent, callback);
        seven.addEventListener(agent, callback);
        eight.addEventListener(agent, callback);
        nine.addEventListener(agent, callback);
        zero.addEventListener(agent, callback);
    };

   
    this.setResetClickCallback = function (callback) {
        reset.addEventListener(agent, callback);
    };

  
    this.setEqualsClickCallback = function (callback) {
        equals.addEventListener(agent, callback);
    };


   

}

