const fibonacci=require('./lib/fibonacci')
 console.log(fibonacci(1));
 console.log(fibonacci(2));
 console.log(fibonacci(3));
 console.log(fibonacci(5));
   
console.log('hello world')
//判断是否是闰年

function isLeapYear(year) {
   if((year % 4 == 0) && (year % 100 != 0)){
      // window.alert('是闰年')
      return true
   }else if(year % 400 == 0){
    //window.alert('是闰年')
    return true
   }else
    {
        //window.alert('不是闰年')
        return false
     }
    }
    console.log(isLeapYear(2000));

    
function isLeapYear2(year) {
    if((year % 4 == 0) && (year % 100 != 0||year % 400 == 0)){
       return true
    }else{
         return false
      }
     }
     console.log(isLeapYear(2001));
