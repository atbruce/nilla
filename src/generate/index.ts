// @ts-nocheck
import {COLORS, LOREM} from '../library/index'
export const generate = (self: {target: any | null | undefined}) => {
    return {
        /*
        // clone: (({target}: any | null | undefined) => JSON.parse(JSON.stringify(target)))(self),
        clone(){
            return (({target}: any | null | undefined) => JSON.parse(JSON.stringify(target)))(self)
        },
        */
        /*
        guid: (({target}: any | null | undefined) => {
            let response = ""

            while(response.length < 30){
                const rand = Math.random()
                response += (rand).toString(16).substr(3, 6) 
            }

            return response.substr(0, 8) + "-" +
                   response.substr(8, 4) + "-4" +
                   response.substr(12, 3) + "-" +
                   ((Math.random()*4|0)+8).toString(16) + // [89ab]
                   response.substr(15, 3) + "-" +
                   response.substr(18, 12)

        })(self),
        */
        color(avoid: string[] | string | null | undefined){
            return ((self: {target: string[] | string | null | undefined; random: {}}) => {
                const {random} = self,
                      operator = (() => COLORS[random.between(0, COLORS.length - 1)])()
                
                let remaining_attempts = 100,
                    response = operator
                
                if(avoid && Array.isArray(avoid)){
                    // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                    while(avoid.includes(response) && remaining_attempts){
                        response = operator
                        remaining_attempts--
                    }
                } else if(avoid && typeof avoid === 'string'){
                    // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                    while(avoid == response && remaining_attempts){
                        response = operator
                        remaining_attempts--
                    }
                }
                
                return response
            })(self)
        },
        guid(){
            return (({target}: any | null | undefined) => {
                let response = ""

                while(response.length < 30){
                    const rand = Math.random()
                    response += (rand).toString(16).substr(3, 6) 
                }

                return response.substr(0, 8) + "-" +
                       response.substr(8, 4) + "-4" +
                       response.substr(12, 3) + "-" +
                       ((Math.random()*4|0)+8).toString(16) + // [89ab]
                       response.substr(15, 3) + "-" +
                       response.substr(18, 12)

            })(self)
        },
        hex(avoid: string[] | string | null | undefined){
            return (({target}: any | null | undefined) => {
                const operator = (() => "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16)))()

                let remaining_attempts = 100,
                    response = operator

                if(avoid && Array.isArray(avoid)){
                    // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                    while(avoid.includes(response) && remaining_attempts){
                        response = operator
                        remaining_attempts--
                    }
                } else if(avoid && typeof avoid === 'string'){
                    // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                    while(avoid == response && remaining_attempts){
                        response = operator
                        remaining_attempts--
                    }
                }

                return response
            })(self)
        },
        numberArray(start: number | string | null | undefined, stop: number | string | null | undefined, interval: number | string | null | undefined){
            return (({target}: any | null | undefined) => {
                const check_start = typeof start,
                      check_stop = typeof stop,
                      check_interval = typeof interval
                
                if(check_start === 'boolean' || check_start === 'object' || check_start === 'undefined'){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(start): Argument must be 'number' or valid numerical 'string'.`
                    throw new TypeError(message) 
                } else if(typeof start === 'string' && isNan(Number(start))){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(start): Argument must be 'number' or valid numerical 'string'. Received: 'string', isNaN(Number(start)) == true`
                    throw new TypeError(message) 
                } else if(typeof start === 'string') {
                    start = Number(start)
                }
                
                if(check_stop === 'boolean' || check_stop === 'object' || check_stop === 'undefined'){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(stop): Argument must be 'number' or valid numerical 'string'.`
                    throw new TypeError(message) 
                } else if(typeof stop === 'string' && isNan(Number(stop))){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(stop): Argument must be 'number' or valid numerical 'string'. Received: 'string', isNaN(Number(stop)) == true`
                    throw new TypeError(message) 
                } else if(typeof stop === 'string') {
                    stop = Number(stop)
                }
                
                if(check_interval === 'boolean' || (check_interval === 'object' && check_interval !== null)){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(interval): Argument must be 'number' or valid numerical 'string'.`
                    throw new TypeError(message) 
                } else if(typeof interval === 'string' && isNan(Number(interval))){
                    const message = `[ nilla().generate.numberArray(stop, start, interval) ]: @param(interval): Argument must be 'number' or valid numerical 'string'. Received: 'string', isNaN(Number(interval)) == true`
                    throw new TypeError(message) 
                } else if(typeof interval === 'string') {
                    interval = Number(interval)
                } else if(typeof interval !== 'number') {
                    interval = 1
                }
                
                let response = [],
                    itt
                
                if(start < stop){
                    itt = start
                    
                    while(itt < stop){
                        response.push(itt)
                        itt += Math.abs(interval)
                    }
                    response.push(stop)
                } else {
                    itt = start
                    
                    while(itt > stop){
                        response.push(itt)
                        itt -= Math.abs(interval)
                    }
                    response.push(stop)
                }
                
                return response
                
            })(self)
        },
        text(max_words: number | string | null | undefined, paragraphs: number | string | null | undefined){
            return ((self: {target: any | null | undefined; format: {}; random: {}}) => {
                const {format, random} = self
                
                max_words = max_words !== null && typeof max_words !== undefined && !isNaN(Number(max_words)) ? Number(max_words) : 50
                
                let response = [],
                    
                while(max_words){
                    let word_count = random.between(5, 10),
                        sentance = []
                        
                    word_count = word_count > max_words ? max_words : word_count
                    
                    while(word_count){
                        const word_index = random.between(0, LOREM.length - 1)
                        
                        let word = LOREM[word_index]
                        
                        if(!sentance.length){
                            self.target = word
                            word = format.capitalize()
                        } else if(word_count - 1 == 0){
                            word = `${word}.`
                        }
                        
                        sentance.push(word)
                        word_count--
                    }
                    response.push(sentance.join(' '))
                    max_words -= sentance.length
                }
                
                return response.join(' ')
                
            })(self)
        }
        
    }
}