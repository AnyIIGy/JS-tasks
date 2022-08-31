let newDiv = document.createElement("div")
newDiv.setAttribute("class", "newDiv")
document.body.prepend(newDiv)

function dayMonth(day, month) {
    month = new Date('Jan 1 2023 00:00:00')
    day = new Date()

    let interval = month - day

    let days = Math.floor(interval / 1000 / 60 / 60 / 24)
    let hours = Math.floor(interval / 1000 / 60 / 60) % 24
    let minutes = Math.floor(interval / 1000 / 60) % 60
    let seconds = Math.floor(interval / 1000) % 60

    document.querySelector(".newDiv").innerText = `Days: ${days} - Hours :${hours} - Minutes: ${minutes} - Seconds ${seconds}`

    if (interval < 0) {
        document.querySelector(".newDiv").innerText = "Finish"
    }

}
dayMonth()
setInterval(dayMonth, 1000)