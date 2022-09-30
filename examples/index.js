const {nilla} = require('../lib/cjs/index.js')

const words = [
    'horse',
    'HORSE',
    'HORSES',
    'goose|geese',
    'try',
    'TRY',
    'pastry',
    'PASTRY',
    'pastries',
    'PASTRIES',
    'cows',
    'FROG',
    'Shoes',
    'entry',
    'sock'
]

words.forEach(word => { 
    console.log(`${word} -------------------`)
    console.log(nilla(0).format.plural(word))
    console.log(nilla(1).format.plural(word))
    console.log(nilla(100).format.plural(word))
    console.log(nilla(words).format.plural(word))
    console.log(nilla('500').format.plural(word))
    console.log(nilla('1').format.plural(word))
    console.log(nilla(0).format.plural(word, true))
    console.log(nilla(1).format.plural(word, true))
    console.log(nilla(100).format.plural(word, true))
    console.log('--------------------------------')
})