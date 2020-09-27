export function formatDate(date: Date, new_Date?: Date){
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date);

    if(new_Date){
        return `${day}-${month}-${year }`;
    }else{
        const dayPlusOne = Number(day) + 1;
        return `${dayPlusOne}-${month}-${year }`;
    }
} 

export function formatTime(date: Date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? 0 : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}

export function formatMilitaryTime(date: Date){
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    return `${hours}:${minutes}`;
}

export function dateTimeToDate(date: Date){
    return new Date(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
}

export function minusDays(date: Date, days: number){
    date.setDate(date.getDate() - days);
    return date;
}

export function timeToMilliseconds(seconds?: number, minutes?: number){
    if(minutes){
        return minutes * 60000;
    }

    if(seconds){
        return seconds * 1000;
    }
}

export function timeDifference(dt1: Date, dt2: Date){
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}

export function minusMinutes(date: Date, minutes: number){
    return date.setMinutes(date.getMinutes() - minutes);
}

export function timeToMinutes(str: string){ //in format 8:00
    let time = str.split(":").map(Number);
    return time[0]*60+time[1]*1;
}

export function timeToHour(str: string){ //in format 8:00
    let time = str.split(":").map(Number);
    return time[0];
}