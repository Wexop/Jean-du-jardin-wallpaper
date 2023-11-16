const screenWidth = screen.width
const screenHeight = screen.height

const blockSize = 75

const randomImg = ["https://images.laprovence.com/media/2017/08/03/20624560_10212634719838147_1979358212_n.png?twic=v1/focus=0x0/cover=1480x833", "https://images.rtl.fr/~c/770v513/rtl/www/1120784-jean-dujardin-n-est-pret-de-tourner-un-nouveau-oss-117.jpg", "https://media.vanityfair.fr/photos/61080784796f2c1aef080e2b/4:3/w_960,h_720,c_limit/52703414.jpeg", "https://resize.marianne.net/r/770,462/img/var/LQ3100410C/393258/oss-117-dujardin.jpg", "https://resize.programme-television.org/original/var/premiere/storage/images/tele-7-jours/news-tv/oss-117-le-caire-nid-d-espions-c8-le-show-de-jean-dujardin-4484285/90175763-1-fre-FR/OSS-117-Le-Caire-nid-d-espions-C8-Le-show-de-Jean-Dujardin.jpg", "https://i0.wp.com/www.contrepoints.org/wp-content/uploads/2021/08/Screenshot-2021-08-18-at-12-33-07-3-OSS-117-3-Bande-Annonce-2-NOUVELLE-2021-Jean-Dujardin-Comedie-YouTube.png?fit=918%2C462&ssl=1", "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/jean-dujardin-oss117-01_0.jpg"]

const tabId = []

const nbBlockVertical = Math.round(screenHeight / blockSize)
const nbBlockHorizontal = Math.round(screenWidth / blockSize)

for (let i = 0; i < nbBlockVertical ; i++) {

    document.getElementById("table").innerHTML += `<tr id="${"tr" + i}"></tr>`
    for (let j = 0; j < nbBlockHorizontal; j++) {
        const id = (i * 100) + j
        tabId.push(id)
        document.getElementById("tr" + i).innerHTML += `<td onclick="onClickImage(id)" id="${id}" style=""><img style="width: ${blockSize + "px"}; height: ${blockSize + "px"}; object-fit: cover" id="${"img"+id}" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Carr%C3%A9_blanc.jpg"/></td>`
    }
}



const onClickImage = (id) => {
    const intId = parseInt(id)
    console.log(intId)
    console.log("img"+(intId+100))
    document.getElementById("img"+intId).src = randomImg[getRandomLength()]
    document.getElementById("img"+(intId+100)).src = randomImg[getRandomLength()]
    document.getElementById("img"+(intId-100)).src = randomImg[getRandomLength()]
    document.getElementById("img"+(intId-1)).src = randomImg[getRandomLength()]
    document.getElementById("img"+(intId+1)).src = randomImg[getRandomLength()]
}

const getRandomLength = () => {
    const random =  Math.round(Math.random() * (randomImg.length - 1));
    return random
}

const randomBetween = (nb) => {
    return Math.round(Math.random() * (nb));
}
