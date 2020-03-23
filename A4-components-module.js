//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.
var myModule = (function(){
    function clock(){

    }

    function getTime(){
        clock();
    }
    
    var module = {
        getTime: getTime
    };

    return module;
})();