/**
 * Get the whole integer numbers to the console, start 
 * from the number 1, and get all numbers going up to the number 100,
 * showing string messages when is divisible by 3 and 5
 * @returns array
 */
 var Numbers = () => {
    const numbers = [];
    for(var n=1;n<=100;n++){
        if(n%3 == 0 && n%5 == 0){
            numbers.push({
                number: n,
                label: 'Visual Nuts'
            })
        } else if(n%3 == 0){
            numbers.push({
                number: n,
                label: 'Visual'
            })
        } else if(n%5 == 0){
            numbers.push({
                number: n,
                label: 'Nuts'
            })
        } else {
            numbers.push({
                number: n,
                label: ''
            })
        }
    }
    return numbers;
}


module.exports = Numbers;