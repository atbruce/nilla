// @ts-nocheck
export const generate = (self: {target: any | null | undefined}) => {
    return {
        clone: (({target}: any | null | undefined) => JSON.parse(JSON.stringify(target)))(self),
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
        hex: (({target}: string[] | null | undefined) => {
            const getRandomHex = (() => "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16)))()
            
            let response = getRandomHex
            
            if(Array.isArray(target)){
                let remaining_attempts = Number(target.length)
                // MEMO | remaining_attempts simply prevents function from iterating in the event it's large array
                while(target.includes(response) && remaining_attempts){
                    response = getRandomHex
                    remaining_attempts--
                }
            }
            
            return response
        })(self),
        randomBetween(min: any[] | number | string, max: any[] | number | string){
            return (({target}: any[] | number | sting) => {
                
            })(self)
        }
    }
}