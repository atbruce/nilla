const {nilla} = require('../lib/cjs/index.js')
/*
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

numbers.forEach(number => {
    console.log(number , `-------------------`)
    console.log(nilla(number).format.count())
    console.log(nilla(number).format.count(2))
    console.log(nilla(number.toString()).format.count(2))
    console.log(nilla(number).format.count('4'))
    console.log(nilla(number.toString()).format.count('4'))
    console.log('--------------------------------')
})


let sample_object = {
    first_name: 'John',
    last_name: 'Smith',
    age: 50,
    favorite_color: 'blue'
}

const sample_clone = nilla(sample_object).clone

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

// const my_string = 'the quick brown fox jumped over the small fence'
const my_string = 'john'
const my_string_cap = nilla(my_string).format.capitalize()

console.log('my_string_cap', my_string_cap)

const my_title = 'abraham lincoln: a story untold'
const my_title_cap = nilla(my_title).format.title()

console.log('my_title_cap', my_title_cap)

const my_lorem = nilla().generate.text(100)
console.log('my_lorem', my_lorem)

const my_color = nilla().generate.color()
console.log('my_color', my_color)

const my_decimal = 1.5
console.log('typeof my_decimal', typeof my_decimal)

const my_boolean = undefined
console.log('typeof my_boolean', typeof my_boolean)
*/

const my_array_1 = nilla().generate.numberArray(1, 10)
console.log('my_array_1 |', my_array_1)
console.log('------------------------')

const my_array_2 = nilla().generate.numberArray(1, -10)
console.log('my_array_2 |', my_array_2)
console.log('------------------------')

const my_array_3 = nilla().generate.numberArray(-20, -10)
console.log('my_array_3 |', my_array_3)
console.log('------------------------')

const my_array_4 = nilla().generate.numberArray(-20, -10, 2)
console.log('my_array_4 |', my_array_4)
console.log('------------------------')

const my_array_5 = nilla().generate.numberArray(0, 3, (1/3))
console.log('my_array_5 |', my_array_5)
console.log('------------------------')

const my_array_6 = nilla().generate.numberArray(1, 200, 5)
console.log('my_array_6 |', my_array_6)
console.log('------------------------')