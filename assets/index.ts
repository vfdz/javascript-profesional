import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads/index'

const video = document.querySelector("video")
const buttonPlay: HTMLElement = document.getElementById("Play")
const buttonMute: HTMLElement = document.getElementById("Mute")

const player = new MediaPlayer({ 
    element: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message)
//     })
// }