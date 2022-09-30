// @ts-nocheck
import { format } from './format/'

const libraries = {
    format
}

export const nilla = (target: any) => {
    let self = {target, timer: null, ...libraries}
    // @ts-ignore
    self.clone = (({target}) => JSON.parse(JSON.stringify(target)))(self)
    // @ts-ignore
    /*
    self.performance = (({target}) => {
        const stop = performance.now()
        return parseFloat((stop - target) / 1000).toFixed(5)
    })(self)
    */
    /*
    self.start = ((self) => self.timer = preformance.now())(self)
    self.stop = (({timer}) => {
        const stop = performance.now()
    })(self)
    */
    Object.keys(libraries).forEach(key => {
        // @ts-ignore
        self[key] = libraries[key](self)
    })
   
   return self
}