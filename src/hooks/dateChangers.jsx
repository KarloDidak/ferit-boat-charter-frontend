
export function shortDate (dateNumber){
    let options = {
        year:"numeric",
        month:"numeric",
        day:"numeric"
    }
    const date = new Date();
    date.setTime(dateNumber);
    return date.toLocaleDateString("hr-HR,options")
}

export function longDate (dateNumber){
    let options = {
        year:"numeric",
        month:"numeric",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
        timeZone:"Europe/Zagreb"
    }
    const date = new Date();
    date.setTime(dateNumber);
    return date.toLocaleDateString("hr-HR,options")
}

export function dateToNumber(dateString){
    return new Date(dateString).getTime();
}