class MediaPlayer {
    constructor(config) {
        this.media = config.element
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
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
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    toggleMute() {
        (this.media.muted)
        ? this.unmute()
        : this.mute()
    }
    // paused() {
    //   return this.media.paused
    // }
}

export default MediaPlayer