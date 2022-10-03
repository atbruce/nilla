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
    'sock',
    'turtle dove'
]

words.forEach(word => { 
    console.log(`${word} -------------------`)
    console.log(nilla(0).format.plural(word))
    console.log(nilla(1).format.plural(word))
    console.log(nilla(1200).format.plural(word, {formatCount: 2}))
    console.log(nilla(words).format.plural(word))
    console.log(nilla('500').format.plural(word))
    console.log(nilla('1').format.plural(word))
    console.log(nilla(0).format.plural(word, {zeroMod: "There's no"}))
    console.log(nilla(1).format.plural(word, {raw: true}))
    console.log(nilla(100).format.plural(word, {raw: true}))
    console.log('--------------------------------')
})

const numbers = [
    15,
    958,
    4573,
    105988,
    9877530,
    190043123,
    288923432000,
    1607000400000,
    1340000000000000,
    // ['foo'],
]
/*
numbers.forEach(number => {
    console.log(number , `-------------------`)
    console.log(nilla(number).format.count())
    console.log(nilla(number).format.count(2))
    console.log(nilla(number.toString()).format.count(2))
    console.log(nilla(number).format.count('4'))
    console.log(nilla(number.toString()).format.count('4'))
    console.log('--------------------------------')
})
*/

let sample_object = {
    first_name: 'John',
    last_name: 'Smith',
    age: 50,
    favorite_color: 'blue'
}

const sample_clone = nilla(sample_object).clone
/*
const rand = Math.random()
console.log('rand', rand)
*/

sample_object.first_name = 'Robert'

console.log('sample_clone::::::', sample_clone)
console.log('sample_object::::::', sample_object)


const rand_id_1 = nilla().generate.guid()
const rand_id_2 = nilla().generate.guid()
console.log('rand_id_1::::::', rand_id_1)
console.log('rand_id_2::::::', rand_id_2)


const rand_hex_1 = nilla().generate.hex()
const rand_hex_2 = nilla().generate.hex(['#1a75d2', '#000000', '#ffffff', '#42f2d7'])
console.log('rand_hex_1::::::', rand_hex_1)
console.log('rand_hex_2::::::', rand_hex_2)
