import Numbers from "./app1"

/**
 * Print exercise
 */
 const data = Numbers()
 data.forEach(item => {
     if(item.label == ''){
         console.log(item.number)
     } else {
         console.log(item.label)
     }
 })