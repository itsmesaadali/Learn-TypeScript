abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ) {}

    abstract getSepia():void
    getReelTime(): number{
        // some calculation
        return 8
    }
}

// const saad = new TakePhoto('test', 'test')

class Instagram extends TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('sepia')
    }   
}

const saad = new Instagram('test', 'test', 3)
saad.getReelTime()