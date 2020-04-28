import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const buttonPlay = document.getElementById("Play")
const buttonMute = document.getElementById("Mute")

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] })

buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()