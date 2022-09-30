// @ts-nocheck
export const format = (self: {target: any}) => {
    return {
        capital(config: {parser: string}){
            return ((target: string) => {
                let parser = (config && config.hasOwnProperty('parser')) ? config.parser : ' ',
                    words = target.split(parser)
                    
                words.forEach((word, index) => {
                    word = word.toLowerCase()
                              .split('')
                              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                              .join()

                    words[index] = word
                })

                return words.join(' ')
            })(self.target)
        },
        count(decimals: string | number | null | undefined){
            return (({target}: any[] | number | string) => {
                let dividend, divisor, max_dec, symbol
                
                if(Array.isArray(target)){
                    dividend = target.length
                } else if(typeof target == 'number'){
                    dividend = target
                } else if(typeof target == 'string' && !isNaN(Number(target))){
                    dividend = Number(target)
                } else if(typeof target == 'string'){
                    const message = `Nilla: Argument is typeof 'string' && isNaN(Number(string)) = true`
                    throw new TypeError(message)
                }

                if(dividend < 1000){
                    return dividend
                } else if(dividend < 1000000){
                    // MEMO | Thousands
                    divisor = 1000
                    max_dec = 3
                    symbol = 'K'
                } else if(dividend < 1000000000){
                    // MEMO | Millions
                    divisor = 1000000
                    max_dec = 6
                    symbol = 'M'
                } else if(dividend < 1000000000000){
                    // MEMO | Billions
                    divisor = 1000000000
                    max_dec = 9
                    symbol = 'B'
                } else if(dividend < 1000000000000000){
                    // MEMO | Trillions
                    divisor = 1000000000000
                    max_dec = 12
                    symbol = 't'
                } else if(dividend < Number.MAX_SAFE_INTEGER){
                    // MEMO | Quadrillion
                    divisor = 1000000000000000
                    max_dec = 15
                    symbol = 'q'
                } else {
                    // MEMO | Sorry, not adding support for BigInt right now
                    divisor = 1
                    max_dec = 0
                    symbol = ''
                }
                
                return ((decimals, dividend, divisor, max_dec, symbol) => {
                    if(decimals < max_dec){
                        return (dividend / divisor).toFixed(decimals || 0) + symbol
                    } else {
                        return Math.round(dividend / divisor) + symbol
                    }
                })(decimals, dividend, divisor, max_dec, symbol)

            })(self)
        },
        plural(word: string, config?: {raw?: boolean, formatCount?: number | string | null | undefined, zeroMod?: string}){
            /* MEMO
                @param(config): Opitonal settings
                @param(config.raw): Returns string without prefix 
                    - Example: !config.raw => '1200 messages' | !!config.raw => 'messages'
                @param(config.formatCount): Uses internal method to abbreviate thousands/millions/etc
                    - Example: !config.formatCount => '1200 messages' | config.formatCount: 1 => '1.2k messages'
                @param(config.zeroMod): Use user defined substitute in place of 0
                    - Example: !config.zeroMod => '0 messages' | config.zeroMod: 'No' => 'No messages'
            */
            return (({target, format}: {target: any[] | number | string; format: {}}) => {
                const is_custom = word.indexOf('|') > -1,
                      format_case = (word: string, end: number, tail: string) => {
                          const end_converted = end ? end : 1,
                                compare_letter = word.charAt(word.length - end_converted)
                          
                          if(compare_letter == compare_letter.toLowerCase() && compare_letter != compare_letter.toUpperCase()){
                                return end ? word.substring(0, word.length - end) + tail : word + tail
                          } else {
                                return end ? word.substring(0, word.length - end) + tail.toUpperCase() : word + tail.toUpperCase()
                          }
                      }
                
                let prefix,
                    suffix,
                    singular,
                    plural,
                    bucket
                
                word = word.toString()
                
                if(is_custom){
                    const words = word.split('|')
                    
                    singular = words[0]
                    plural = words[1]
                    bucket = 1
                } else {
                    let letters = word.split(''),
                        last_letter = letters[letters.length - 1]
                    
                    if(last_letter.toLowerCase() == 's'){
                        if(letters[letters.length - 2].toLowerCase() == 'e' && letters[letters.length - 3].toLowerCase() == 'i'){
                            singular = format_case(word, 3, 'y')
                            plural = word
                            bucket = 2
                        } else {
                            singular = format_case(word, 1, '')
                            plural = word
                            bucket = 3
                        }
                    } else if(last_letter.toLowerCase() == 'y'){
                        singular = word
                        plural = format_case(word, 1, 'ies')
                        bucket = 4
                    } else {
                        singular = word
                        plural = format_case(word, 0, 's')
                        bucket = 5
                    }
                }
                
                if(Array.isArray(target)){
                    if(config && config.hasOwnProperty('formatCount')){
                        prefix = config && config.hasOwnProperty('zeroMod') && !target.length ? config.zeroMod : format.count(config.formatCount)
                    } else {
                        prefix = config && config.hasOwnProperty('zeroMod') && !target.length ? config.zeroMod : target.length
                    }
                   
                    suffix = target.length === 1 ? singular : plural

                    return config && config.raw ? `${suffix}` : `${prefix} ${suffix}`
                } else if(typeof target === 'number'){
                    if(config && config.hasOwnProperty('formatCount')){
                        prefix = config && config.hasOwnProperty('zeroMod') && !target ? config.zeroMod : format.count(config.formatCount)
                    } else {
                        prefix = config && config.hasOwnProperty('zeroMod') && !target ? config.zeroMod : target
                    }
                    
                    suffix = target === 1 ? singular : plural

                    return config && config.raw ? `${suffix}` : `${prefix} ${suffix}`
                } else if(typeof target === 'string' && !isNaN(Number(target))){
                    if(config && config.hasOwnProperty('formatCount')){
                        prefix = config && config.hasOwnProperty('zeroMod') && ! Number(target) ? config.zeroMod : format.count(config.formatCount)
                    } else {
                        prefix = config && config.hasOwnProperty('zeroMod') && ! Number(target) ? config.zeroMod : Number(target)
                    }
                    
                    
                    suffix = Number(target) === 1 ? singular : plural

                    return config && config.raw ? `${suffix}` : `${prefix} ${suffix}`
                } else {
                  return ''
                }
            })(self)
        }
   }
}