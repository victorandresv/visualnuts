for(n=1;n<=100;n++){
    if(n%3 == 0 && n%5 == 0){
        console.log('Visual Nuts')
    } else if(n%3 == 0){
        console.log('Visual')
    } else if(n%5 == 0){
        console.log('Nuts')
    } else {
        console.log(n)
    }
}