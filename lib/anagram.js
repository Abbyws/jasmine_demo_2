
function anagram(str){
    var result=[];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<2;j++){
             result.push(str[i]+anagram(drop(str,i))[j]);
        }
       
    }

    return result;
}


module.exports=anagram