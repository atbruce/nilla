// @ts-nocheck
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
        text(max_length: number | string | null | undefined, paragraphs: number | string | null | undefined){
            return (({target, format}: {target: any | null | undefined; format: {}}) => {
                
            })(self)
        }
        
    }
}