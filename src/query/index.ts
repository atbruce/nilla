// @ts-nocheck
export const query = (self: {target: any | null | undefined}) => {
    return {
        includes(query: any){
            return (({target}: any[]) => {
                const check_query = typeof query
                
                let response 
                
                if(check_query === 'object' && Object.keys(query.length)){
                    const map = target.map(item => {
                        const check_item = typeof item
                        
                        if(check_item === 'object' && Object.keys(item.length)){
                            return JSON.stringify(item)
                        } else {
                            return item
                        }
                    })
                    
                    response = map.includes(JSON.stringify(query))
                } else {
                    response = target.includes(query)
                }
                
                return response
            })(self)
        }
    }
}