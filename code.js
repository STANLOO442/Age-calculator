let button = document.getElementById('button');
let dayMessage = document.getElementById('p01');
let monthMessage = document.getElementById('p02');
let yearMessage = document.getElementById('p03');
const date = new Date();






button.addEventListener( "click",  checkDate);

 


function checkDate(){
        let d = document.getElementById('day').value;
        let m = document.getElementById('month').value;
        let y = document.getElementById('year').value;

        if(d == "" || isNaN(d) ){

            dayMessage.innerHTML = "Date is required"
        }
       if(m == "" || isNaN(m)){

            monthMessage.innerHTML = "Month is required"
        }
       if(y == "" || isNaN(y) ){
            yearMessage.innerHTML = "Year is required"
        }
       if(m == 4 || m == 6 || m == 9 || m == 11 && d == 31) {
            monthMessage.innerHTML = "Invalid Month"
        }
      if(m > 12 || m < 1){
        monthMessage.innerHTML = "Invalid Month"
      }
       if(m == 2 && d > 29 && (y%4 == 0)) {
            monthMessage.innerHTML = "Invalid Date"
        }

        if((m == 2) && d > 28) {
            monthMessage.innerHTML = "Invalid Month"
        }
        if ( y > date.getFullYear(y) || y < 1900){
            yearMessage.innerHTML = "Invalid Year"
        } 
        if (d > 31 || d < 1){
            dayMessage.innerHTML = "Ivalid Date"
        }
         return;
        
    
    }

        
    