function fibonacci(n){
    if(n<=0){
        return false
    }else if(n<=2){
        return 1;
    }else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

module.exports = fibonacci