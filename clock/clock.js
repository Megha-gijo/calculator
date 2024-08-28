function getTime(){



const time = new Date()
console.log(time);

const hour = time.getHours()
console.log(hour);

const second = time.getSeconds()
console.log(second);

const minute = time.getMinutes()
console.log(minute);

result.innerHTML =`${hour}:${minute}:${second}:${hour>12?'PM':'AM'}`


setTimeout(()=>{
    getTime()
},1000)

}

getTime()

