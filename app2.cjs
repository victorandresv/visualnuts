const {GetCountryNumber, GetCountryWMOLGerman, GetCountryWithHighestOffLang, GetMostCommonOfficialLanguage} = require('./functions.cjs')

var data = [];

try {
    data = require("./data.json")
}
catch(e){
    console.log(e);
}



console.log(GetCountryNumber(data))
console.log(GetCountryWMOLGerman(data))
console.log(GetCountryWithHighestOffLang(data))
console.log(GetMostCommonOfficialLanguage(data))
