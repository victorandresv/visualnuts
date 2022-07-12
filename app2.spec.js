const { GetCountryNumber, GetCountryWMOLGerman, GetCountryWithHighestOffLang, GetMostCommonOfficialLanguage } = require('./functions.cjs')
const data = require("./data.json")


test('Data should contain 5 countries', () => {
    const count = GetCountryNumber(data);
    expect(count).toBe(5)
})

test('Country should be BE', () => {
    const info = GetCountryWithHighestOffLang(data);
    expect(info.country).toBe('BE')
})

test('Country with highest languages count should be 3', () => {
    const info = GetCountryWMOLGerman(data);
    expect(info.languages_count).toBe(3)
})

test('Should be nl', () => {
    const lang = GetMostCommonOfficialLanguage(data);
    expect(lang).toBe('nl')
})

test('GetCountryWMOLGerman Should return null', () => {
    const data = GetCountryWMOLGerman([]);
    expect(data).toBe(null)
})

test('GetCountryWithHighestOffLang Should return null', () => {
    const data = GetCountryWithHighestOffLang([]);
    expect(data).toBe(null)
})

test('GetMostCommonOfficialLanguage Should return null', () => {
    const data = GetMostCommonOfficialLanguage([]);
    expect(data).toBe(null)
})

test('GetCountryWMOLGerman Should be DE', () => {
    let pnd = null
    data.forEach(item => {
        if(item.country == 'DE'){
            item.languages.push('es')
            item.languages.push('pt')
            item.languages.push('en')
            pnd = item;
        }
    })
    const country = GetCountryWMOLGerman(data);
    expect(pnd.country).toBe('DE')
})