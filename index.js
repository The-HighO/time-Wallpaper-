
setInterval(() => {
    let todaysDate = new Date
    let hours = document.querySelector(".hour")
    let minutes = document.querySelector(".min")
    let seconds = document.querySelector(".sec")


    hours.innerHTML = todaysDate.getHours()
    minutes.innerHTML = todaysDate.getMinutes()
    seconds.innerHTML = todaysDate.getSeconds()
}, 10);

