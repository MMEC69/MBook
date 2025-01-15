export const sleep = async (seconds : number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}

export const dateConverter =  (date : string) => {
    const newFormat = new Intl.DateTimeFormat("en-us", {
        dateStyle : "full"
    })
    return newFormat;
}

export const JSONFetch = async (type : string, path : string, body : object ) => {
    const response = await fetch(path, {
        method : type,
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(body)
    });
    return response;
}
