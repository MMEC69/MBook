export const sleep = async (seconds : number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));
}

export const dateConverter =  (date : string) => {
    const newFormat = new Intl.DateTimeFormat("en-us", {
        dateStyle : "full"
    })
    return newFormat;
}
