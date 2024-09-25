
function palindrom(str){

    const reversed = str.split("").reverse().join('')
    
    return str === reversed 
}
       
console.log(palindrom('madaddfffdm'))