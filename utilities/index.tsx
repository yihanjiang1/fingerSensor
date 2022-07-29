import moment from "moment"
export type TTimer={
    millisecond:number
    second:number
    minute:number
    hour:number
    // duration:number
}
export function getTimerFromCurrentTime(startTime:number,currentTime?:number){
    const currentDuration = currentTime ? currentTime - startTime : moment().valueOf() - startTime
    let span = currentDuration
    // get hour, minute, second, millisecond
    const millisecond = (span%1000)
    span = Math.floor(span/1000)
    const second = (span%60)
    span = Math.floor(span/60)
    const minute = (span%60)
    span = Math.floor(span/60)
    const hour = (span%24)
    // store 
    return{
        millisecond,
        second,
        minute,
        hour,
        // duration:currentDuration
    }
}
export function formatZero(num:number = 0 , len:number){
    if(num.toString().length >len){
        return num.toString()
    } else {
        return(Array(len).join('0') + num).slice(-len)
    }
}
export function formatTimer(startTime:number, currentTime?:number){
    const timer = getTimerFromCurrentTime(startTime,currentTime)
    const { hour, minute, second, millisecond } = timer
    return `${formatZero(hour,2)} : ${formatZero(minute,2)} : ${formatZero(second,2)} : ${formatZero(millisecond,3)}`
} 
export function intervalFunction (fn:any, interval:number, startTime: number, endTime?: number) {
    // console.log('intervalFunction', endTime)
    let count = 0
    let currentInterval = interval
    let timer:string | number | NodeJS.Timeout = 0
    function inner() {
        let offset = new Date().getTime() - (startTime + count * interval)
        currentInterval = interval - offset
        // console.log(`${count}--> 当前时间: ${new Date().getTime()}, 代码执行时间: ${offset}, 下次循环间隔: ${currentInterval} `)
        timer = setTimeout(inner, currentInterval)
        fn(timer)
        count++
    }
    setTimeout(inner, interval)
}





