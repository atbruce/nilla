import { format } from './format/'

const librarys = {
    format
}

export const nilla = (target: any) => {
   let self = {target, ...librarys}
   
   Object.keys(librarys).forEach(key => {
       // @ts-ignore
       self[key] = librarys[key](self)
   })
   
   return self
}