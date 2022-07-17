let myprojects = []

let month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

function addMyproject(event) {
    event.preventDefault()

    let title = document.getElementById("input-myproject-title").value
    let content = document.getElementById("input-myproject-content").value
    let image = document.getElementById("input-myproject-image")

    image = URL.createObjectURL(image.files[0])

    let myproject = {
        title,
        content,
        image,
        postedAt: new Date()
    }

    myprojects.push(myproject)
    renderMyprojects()
}

function renderMyprojects() {
    console.log(myprojects);

    let containerMyprojects = document.getElementById("contents")

    containerMyprojects.innerHTML = ""

    for (let i = 0; i < myprojects.length; i++) {
        containerMyprojects.innerHTML += `
        <div class="myproject-list-item">
            <div class="myproject-image">
                <img src="${myprojects[i].image}" alt="" />
            </div>
            <div class="myproject-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Myproject</button>
                </div>
                <h1>
                    <a href="myproject-detail.html" target="_blank">${myprojects[i].title}</a>
                </h1>
                <div class="detail-myproject-content">
                    ${getFullTime(myprojects[i].postedAt)} | Erick Kurniawan
                </div>
                <p>
                    ${myprojects[i].content}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">${getDistanceTime(myprojects[i].postedAt)}</span>
                </div>
            </div>
        </div>
        `
    }
}

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hour = time.getHours()
    let minute = time.getMinutes()

    return `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`
}

function getDistanceTime(time) {

    let distance = new Date() - new Date(time)

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour // 3600
    let hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)

    if (dayDistance >= 1) {
        const dayDate = Math.floor(dayDistance) + ' day ago'
        return dayDate
    } else {
        let hourDistance = Math.floor(distance / (miliseconds * secondInHour))
        if (hourDistance > 0) {
            return hourDistance + ' hour ago'
        } else {
            let minuteDistance = Math.floor(distance / (miliseconds * secondInMinutes))
            return minuteDistance + ' minute ago'
        }
    }

}

setInterval(function() {
    renderMyprojects()
}, 2000)