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


/**
 * Return the number of countries
 * @returns int
 */
 var GetCountryNumber = (data) => {
    return data.length;
}

/**
 * Return the country with the most official languages, where they officially speak German,
 * that counts all the official languages spoken in the listed countries.
 * @returns any
 */
var GetCountryWMOLGerman = (data) =>{
    if(GetCountryNumber(data) > 0){
        let most_official_languages_item = null
        data.forEach(item =>{
            if(item.languages.join(',').match(/de/gi) != null){
                if(most_official_languages_item == null){
                    most_official_languages_item = item;
                } else if(item.languages.length > most_official_languages_item.languages.length) {
                    most_official_languages_item = item;
                }
            }
        });
        return {
            country: most_official_languages_item,
            languages_count: most_official_languages_item.languages.length
        };
    } else {
        return null;
    }
}

/**
 * Find the country with the highest number of official languages
 * @returns any
 */
var GetCountryWithHighestOffLang = (data) =>{
    if(GetCountryNumber(data) > 0){
        let highest_official_languages_item = null
        data.forEach(item =>{
            if(highest_official_languages_item == null){
                highest_official_languages_item = item;
            } else if(item.languages.length > highest_official_languages_item.languages.length) {
                highest_official_languages_item = item;
            }
        });
        return highest_official_languages_item;
    } else {
        return null;
    }
}

/**
 * Find the most common official language(s), of all countries.
 * @returns any
 */
var GetMostCommonOfficialLanguage = (data) =>{
    if(GetCountryNumber(data) > 0){
        const languages = []
        data.forEach((item) => {
            item.languages.forEach(lang =>{
                languages.push(lang)
            })
        });

        const counts = {};
        const langs = []
        languages.forEach((index) => {
            counts[index] = (counts[index] || 0) + 1;
            langs.push({
                lang: index,
                count: counts[index]
            })
        });

        let most_common_language = null;
        langs.forEach(lang =>{
            if(most_common_language == null){
                most_common_language = lang
            } else if(lang.count > most_common_language.count){
                most_common_language = lang
            }
        })
        
        return most_common_language.lang;
    } else {
        return null;
    }
}


exports.Numbers = Numbers;
exports.GetCountryNumber = GetCountryNumber;
exports.GetCountryWMOLGerman = GetCountryWMOLGerman;
exports.GetCountryWithHighestOffLang = GetCountryWithHighestOffLang;
exports.GetMostCommonOfficialLanguage = GetMostCommonOfficialLanguage;