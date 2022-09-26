const format = (self) => {
    return {
        capitalize(config: {parser: string}){
            const {target} = self
            
            if(config && config.hasOwnProperty('parser')){
                if(Array.isArray(target)){
                    return 
                }
            } else {
                if(Array.isArray(target)){
                
                }
            }
            
        },
        plural(word: string, config: {raw: boolean}){
            const {target} = self
            let prefix, suffix

            if(Array.isArray(target)){
               prefix = target.length
               suffix = target.length === 1 ? self.text.upper(word) : self.text.upper(word + 's')

               return `${prefix} ${suffix}`
            } else if(typeof target === 'number'){
               prefix = target
               suffix = target === 1 ? word : word + 's'

               return self.format.foo() + ` ${prefix} ${suffix}`
            } else if(typeof target === 'string' && !isNaN(Number(target))){
               prefix = Number(target)
               suffix = Number(target) === 1 ? word : word + 's'

               return `${prefix} ${suffix}`
            } else {
              return ''
            }
        }
   }
}