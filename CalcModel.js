function CalcModel() {
    
    var holder = 0;
    var calcValue = 0;
    var bankC = 1.00;
    var existingCountry = "GBP";
   var foreignCountry = "EUR";
   var freedomCountry ="USD";
  
   var GBPrate = "1.3";
   var EURrate = "1.00";
   var USDrate = "1.1387";


   if (localStorage) {
      if (localStorage.existingCountry) {
          existingCountry = localStorage.existingCountry;
           
       }
        if (localStorage.foreignCountry) {
          foreignCountry = localStorage.foreignCountry
      } 
        if (localStorage.bankC) {
          bankC = localStorage.bankC;
           
    }



this.init = function () {
 
       
};


    this.getCurrentValue = function () {
        return calcValue; 
      
       
    };

    this.convertValue = function () {
       holder = ((holder + calcValue)*GBPrate);
       
       
        calcValue = (holder * bankC).toFixed(0)+ foreignCountry;
     
        console.log(calcValue);
        console.log(GBPrate);
        console.log(bankC);
        console.log(holder);
       
        
      
    };

    this.setValue = function (value) {
        if (calcValue ==0) {
            calcValue = value;
        } else {
        
        calcValue = calcValue + value;
    };
    };

    this.reset = function () {
        calcValue = "";
        holder ="";
    };

   this.setExistingCountry = function (value) {
       existingCountry = value;
       
       if (localStorage) {
           localStorage.existingCountry = existingCountry;
       }
     
       console.log(existingCountry);
       
   };
   
   this.getExistingCountry = function () {
       return existingCountry;
   };
   
   this.setForeignCountry = function (value) {
       foreignCountry = value;
       
   if (localStorage) {
           localStorage.foreignCountry = foreignCountry;
       }
       
      
       
   };
   
   
   this.getForeignCountry = function () {
       return foreignCountry;
   };
   
   this.setBankRate = function (value) {
      
      bankC = value;
      if (localStorage) {
           localStorage.bankC =  bankC;
       }
      
      console.log(bankC);
   };
   
   this.getBankRate = function () {
       return bankC;
   };

     


};
}



