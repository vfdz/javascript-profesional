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

export default MediaPlayer