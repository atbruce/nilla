// @ts-nocheck
import { format } from './format/'
import { generate } from './generate/'
import { random } from './random/'
const libraries = {
    format,
    generate,
    random
}

export const nilla = (target: any | null | undefined) => {
    let self = {target: target || null, clone: null, ...libraries}
    
    self.clone = (({target}: any | null | undefined) => JSON.parse(JSON.stringify(target)))(self)

    Object.keys(libraries).forEach(key => {
        self[key] = libraries[key](self)
    })
   
   return self
}