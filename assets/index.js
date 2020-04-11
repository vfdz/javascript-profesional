const video = document.querySelector("video")
const button = document.querySelector("button")

class MediaPlayer {
    constructor(config) {
        this.media = config.element
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    togglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause()
    }
    // paused() {
    //   return this.media.paused
    // }
}

const player = new MediaPlayer({ element: video })

button.onclick = () => player.togglePlay()

      // button.onclick = () => {
      //   (player.paused())
      //     ?player.play()
      //     :player.pause()
      // } 