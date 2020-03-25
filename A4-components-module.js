//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.
var myModule = (function(){
    var count;

    function clock(){
        let current = new Date();
        let hours = current.getHours();
        let minutes = current.getMinutes();
        let seconds = current.getSeconds();

        if(minutes < 10 ){
            minutes = '0' + minutes;
        }

        if(seconds < 10){
            seconds = '0' + seconds;
        }

        count = hours + ":" + minutes + ":" + seconds;

        //console.log(count);
    }

    return {
        getTime: function(){
            clock();

            return count;
        }
    };
})();