1//
function iterateAndLogWithFor(n) {
    for (var i=0 ; i<=n ; i++ )  {
    if (i % 2 ===0 ) {
    console.log( i+"is even")
        
    }
        
      else {  console.log( i+"is odd")
           }
    
    }
    
    }

    function iterateAndLogWithWhile(n) {
        var i=0
        while (i<=n) {
        if (i % 2 ===0 ) {
    console.log( i+"is even")
        
    }    
            else {  console.log( i+"is odd")
           }
            i++
        }
    }

    2 // 

    function weirdDivisionWithFor(n) {
        for (var i=1 ; i<=n ; i++) {
        if (i%3===0) {
        console.log("julia")
            
        }
        else if (i%5===0) {
        console.log("james")
            
        }
            else if (i%3===0 && i%5===0) {
        console.log("juliajames")
            
        }
            else { console.log(i)
        }
        }
        }


        function weirdDivisionWithFor(n) {
            var i=1
        while (i<=n) {
        if (i%3===0) {
        console.log("julia")
            
        }
        else if (i%5===0) {
        console.log("james")
            
        }
            else if (i%3===0 && i%5===0) {
        console.log("juliajames")
            
        }
            else { console.log(i)
        }
            i++
        }
        }

        3//

        function laughWithFor(num) {
            var str ="ha"
        var res=""
            for(i=0 ; i<num ; i++) {
               res+=str 
            }
            return res 
        }  

        function laughWithWhile(number) {
            var str="ha"
                var res=""
                while (num>0) {
                    res +=str
                    num --
                    
                }
                return str
            
            }


            function laughRecursively(num) {
                var x="ha"
                if (num<=0) {
                    return ""
                }
                return x+laughRecursively(num-1)
            }

            4//

            function sumWithFor(number) {
                var res=0
                for (var i=number ; i>0 ; i--) {
                    res+=i
                }
                return res
            }

            function sumWithWhile(number) {
                var res=0
                while (number>0) {
                    res+=number
                    number--
                }
                return res 
            }

            5//
            function factorialRecursively(number) {
                if(number===0) {
                
                   return 1 
                }
                    return number*factorialRecursively(number-1)
                
                }

                11// function remove(array, element) {
                    var arr=[]
                    for (var i=0 ; i<array.length ; i++) {
                        if (array[i] !== element) {
                            arr.push(array[i])
                        }
                    }
                    return arr
                }

6// 
function rangeFor(min, max) {
    var array = [];
  
    for (var i = min; i < max; i++) {
      array.push(i);
    }
  
    return array;
  }
  7//
  function rangeWhile(min, max) {
    var array = [];
    var i = min;
  
    while (i < max) {
      array.push(i);
      i = i + 1;
    }
  
    return array;
  }
  //EX7
  function reverseWithFor(str) {
    var res="";
    for(var i=str.length-1;i>=0;i--){
      res=res+str[i];
                       
        }
    return res
}
function reverseWithWhile(str) {
    var res=""
     i=str.length-1
    while (i>=0) {
       res=res+str[i]; 
    }
    return res 
}
function reverseR(str) {
    if (str === '') {
      return str;
    } else {
      return str[str.length - 1] + reverseR(str.slice(0, -1));
    }
  }
  //EX8
  function addDigits(n) {
    var res = 0;
    var numStr = n.toString();
  
    for (var i = 0; i < numStr.length; i++) {
      res = res+parseInt(numStr[i]); 
    }
  
    return res;
  }
  //EX9
  function fibRecursive(n) {
    if (n<=0){
        return 1;
    }
       else if (n==1){
            return 1;
       }
       else if(n==2){
           return 2
       }
       else {
           return fibRecursive(n-1) 
       }
   }
   //EX10
   function firstDigit(str) {
    res=""
 for (var i = 0; i < str.length; i++) {
      res=res+ parseInt(str[i])
 }
    return res ;
}
        
        
12//
function average(arr){
 var res= 0
for (var i = 0; i < arr.length; i++) {
  if (arr.length === 0) {
       return 0
                        }
  else { res+= arr[i]
 }
}
             
 return Math.floor(res/arr.length)
}

13//
function findMax(str) {
    var maxi=str[0]
for (var i = 0 ; i<str.length ; i++) {
    if(str.length===0) {
        return 0 
   
    }
    else if (str[i]>maxi) {
maxi=str[i]
    }
    
    
}
    return maxi 
}
14//
function evenDigitsOnly(n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i]%2 !== 0) {
            return false
        }
    }
    return true
}

16// 
function firstDuplicate(array) {
    
    var x=array[i+1]
    x++
    
for (var i = 0; i < array.length; i++) {
    if(array[i] === x)
return x

       }
    return  "No duplicates"
}