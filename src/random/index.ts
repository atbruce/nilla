// @ts-nocheck
export const random = (self: {target: any | null | undefined}) => {
    return {
        between(min: number | string, max: number | string, avoid: number | string | number[] | string[]){
            return (({target}: any | null | undefined) => {
                let min_converted, max_converted
                
                if(typeof min === 'string' && !isNaN(Number(min))){
                    min_converted = Number(min)
                } else if(typeof min === 'number'){
                    min_converted = Number(min)
                } else {
                    const message = `[ nilla().random.between(min, max, avoid) ]:  @param(min): argument must be 'number' || valid numerical 'string'`
                    throw new TypeError(message) 
                }
                
                if(typeof max === 'string' && !isNaN(Number(max))){
                    max_converted = Number(max)
                } else if(typeof max === 'number'){
                    max_converted = Number(max)
                } else {
                    const message = `[ nilla().random.between(min, max, avoid) ]:  @param(max): Argument must be 'number' || valid numerical 'string'`
                    throw new TypeError(message) 
                }
                
                const operator = (() => Math.floor(Math.random() * (max_converted - min_converted + 1) + min_converted))()
                
                let invalid_avoid = false,
                    remaining_attempts = 100,
                    response = operator
                
                if(avoid && Array.isArray(avoid)){
                    invalid_avoid = avoid.map(item => isNaN(Number(item))).includes(true)
                    
                    if(invalid_avoid){
                        const message = `[ nilla().random.between(min, max, avoid) ]: @param(avoid): Array indexes must be 'number' || valid numerical 'string'`
                        throw new TypeError(message) 
                    } else {
                        avoid = avoid.map(item => Number(item))
                        
                        // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                        while(avoid.includes(response) && remaining_attempts){
                            response = operator
                            remaining_attempts--
                        }
                    }
                } else if(typeof avoid !== 'undefined' && typeof avoid !== null){
                    invalid_avoid = isNaN(Number(avoid))
                    
                    if(invalid_avoid){
                        const message = `[ nilla().random.between(min, max, avoid) ]: @param(avoid): Argument must be 'number' || valid numerical 'string'`
                        throw new TypeError(message) 
                    } else {
                        avoid = Number(avoid)
                        
                        // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                        while(response == avoid && remaining_attempts){
                            response = operator
                            remaining_attempts--
                        }
                    }
                }
                
                return response 
            })(self)
        },
        from(){
            return (({target, format}: {target: any[]; random: {}}) => {
                if(target && Array.isArray(target) && target.length){
                    const index = random.between(0, Number(target.length - 1))
                    return target[index]
                } else if(target && Array.isArray(target)){
                    const message = `[ nilla(target).random.from() ]: @param(target): Argument is an empty array`
                    throw new TypeError(message) 
                } else {
                    const message = `[ nilla(target).random.from() ]: @param(target): Argument is required and must be an array`
                    throw new TypeError(message) 
                }
            })(self)
        },
    }
}