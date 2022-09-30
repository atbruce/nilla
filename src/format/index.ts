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
        count(){
            return null
        },
        plural(word: string, raw?: boolean){
            return ((target: any[] | number | string) => {
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
                   prefix = target.length
                   suffix = target.length === 1 ? singular : plural

                   return raw ? `${suffix}` : `${prefix} ${suffix}`
                } else if(typeof target === 'number'){
                   prefix = target
                   suffix = target === 1 ? singular : plural

                   return raw ? `${suffix}` : `${prefix} ${suffix}`
                } else if(typeof target === 'string' && !isNaN(Number(target))){
                   prefix = Number(target)
                   suffix = Number(target) === 1 ? singular : plural

                   return raw ? `${suffix}` : `${prefix} ${suffix}`
                } else {
                  return ''
                }
            })(self.target)
        }
   }
}