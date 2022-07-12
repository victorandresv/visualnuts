const { Numbers } = require('./functions.cjs')

test('15 Should get Visual Nuts', () => {
    var out = ""
    const data = Numbers();
    data.forEach(item => {
        if(item.number === 15){
            out = item.label;
        }
    })
    expect(out).toBe('Visual Nuts')
})

test('87 Should get Visual', () => {
    var out = ""
    const data = Numbers();
    data.forEach(item => {
        if(item.number === 87){
            out = item.label;
        }
    })
    expect(out).toBe('Visual')
})

test('35 Should get Nuts', () => {
    var out = ""
    const data = Numbers();
    data.forEach(item => {
        if(item.number === 35){
            out = item.label;
        }
    })
    expect(out).toBe('Nuts')
})

test('8 Should get empty', () => {
    var out = ""
    const data = Numbers();
    data.forEach(item => {
        if(item.number === 2){
            out = item.label;
        }
    })
    expect(out).toBe('')
})