export const deviceJs = {
    middle: `(max-width: 750px)`,
    low: `(max-width: 450px)`,
}


export const apiGateway = async (url, get) => {
    const response = await fetch(url)
    if(response.status === 200){
        const json = await response.json()
        get(json)
    }
    else{
        console.log(response.status, response)
    }
}