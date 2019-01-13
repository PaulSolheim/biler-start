class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    }

    create() {
        //set up
        emitter=new Phaser.Events.EventEmitter();
        controller=new Controller();
        mediaManager=new MediaManager({scene:this});
        var sb=new SoundButtons({scene:this});
        //
        //define our objects

    }

    update() {
        //constant running loop
    }
}
