


function CalcController() {
    var cModel = new CalcModel(),
            cView = new CalcView(),
            updateCalcDisplay = function () {
                cView.ShowTextScreen(cModel.getCurrentValue(), cModel.getExistingCountry(), cModel.getForeignCountry(), cModel.getBankRate());


            };
            
            


       this.init = function() {
       cView.init();
       cModel.init();
       updateCalcDisplay();
       
    
        cView.setEqualsClickCallback(function () {
            cModel.convertValue();
            updateCalcDisplay();

        });

        cView.setButtonClickCallback(function () {
            cModel.setValue(this.value);
            updateCalcDisplay();
        });



        cView.setResetClickCallback(function () {
            cModel.reset();
            updateCalcDisplay();
        });

       

        cView.setExistingClickCallback(function () {
            cModel.setExistingCountry(this.value);
        });

        cView.setTransferClickCallback(function () {
            cModel.setForeignCountry(this.value);
        });

        cView.setBankClickCallback(function () {
            cModel.setBankRate(this.value);
            
            updatebCutDisplay();
        });

    };

};

var calcController = new CalcController();
window.addEventListener("load", calcController.init(), false);