//方法一:
    var arr = [1,2,3,4,5,4,3,2];
    function repeat(arr){
        var brr = [];
        for(let i=0;i<arr.length;i++){
            if(brr.indexOf(arr[i])==-1){
                brr.push(arr[i]);
            }
        }
        return brr;
    }
    console.log(repeat(arr));
    
//方法二:
    var newArr = ["a","b","c","d","a","b","c"];
    function norepeat(newArr){
        var newBrr = [];
        
        for(let i=newArr.length-1;i>=0;i--){
            if(newBrr.indexOf(newArr[i])==-1){
                newBrr.unshift(newArr[i]);
            }    
        }
        return newBrr;
    }
    console.log(norepeat(newArr));