/**
 * @description Watch video
 */
 function watchVideo() {
    return (new class {
        /**
         * @private
         */
        private videoEl: HTMLVideoElement = document.createElement('video')

        constructor() {
            this.videoEl.setAttribute('autoplay', 'true')
            console.log(this.videoEl.getAttribute('autoplay'))

            const success = (stream) => {
                this.videoEl.srcObject = stream
            }
            const failed = (err) => {
                throw new Error(err)
            }

            if(navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        facingMode: { ideal: 'environtment'}
                    }
                }).then(success, failed)
            }   
        }

        get size() {
            return {
                width: this.videoEl.videoWidth,
                height: this.videoEl.videoHeight
            }
        }

        get video() {
            return this.videoEl
        }
    })

}

export default watchVideo