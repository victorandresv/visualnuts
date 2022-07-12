var data = [];

try {
    data = require("./data2.json")
}
catch(e){
    console.log(e);
}

/**
 * Return the number of countries
 * @returns int
 */
function GetCountryNumber(){
    return data.length;
}

/**
 * Return the country with the most official languages, where they officially speak German,
 * that counts all the official languages spoken in the listed countries.
 * @returns any
 */
function GetCountryWMOLGerman(){
    if(GetCountryNumber() > 0){
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
function GetCountryWithHighestOffLang(){
    if(GetCountryNumber() > 0){
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
function GetMostCommonOfficialLanguage(){
    if(GetCountryNumber() > 0){
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

console.log(GetMostCommonOfficialLanguage())
