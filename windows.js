const win= require('os')
const user=win.userInfo()
console.log(user)
console.log(`the system time ${win.uptime()}seconds`)

const current ={
    name:win.type(),
    release:win.release(),
    totalmem:win.totalmem(),
    freemem:win.freemem()
}
console.log(current)