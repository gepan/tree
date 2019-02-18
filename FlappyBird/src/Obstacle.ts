class Obstacle extends egret.DisplayObjectContainer {
    private upImage: eui.Image;
    private downImage: eui.Image;
    public index: number
    constructor(index: number) {
        super();
        this.index = index;
        this.upImage = new eui.Image("pipe2_png");
        this.upImage.height = Math.random() * (Data.SceneHeight - Data.ObstacleUDGap);
        this.upImage.y = 0;
        this.downImage = new eui.Image("pipe1_png");
        this.downImage.height = Data.SceneHeight - Data.ObstacleUDGap - this.upImage.height;
        this.downImage.y = Data.SceneHeight - this.downImage.height;
        this.addChild(this.upImage);
        this.addChild(this.downImage);
        this.x = Data.SceneWidth + Data.ObstacleLRGap * (index - 1);
        this.width = this.upImage.width;
    }
    getUpRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y, this.upImage.width, this.upImage.height);
    }
    getDownRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y + this.downImage.y, this.downImage.width, this.downImage.height);
    }
    // private rect1:eui.Rect = new eui.Rect();
    // private rect2:eui.Rect = new eui.Rect();
    // private rect3:eui.Rect = new eui.Rect();
    isCollision(bird: Bird):boolean {
        let birdRect = bird.getRect();
        let upRect = this.getUpRect();
        let downRect = this.getDownRect();
        // this.rect1.x = upRect.x;
        // this.rect1.y = upRect.y;
        // this.rect1.width = upRect.width;
        // this.rect1.height = upRect.height;
        // this.rect2.x = downRect.x;
        // this.rect2.y = downRect.y;
        // this.rect2.width = downRect.width;
        // this.rect2.height = downRect.height;
        // this.rect3.x = birdRect.x;
        // this.rect3.y = birdRect.y;
        // this.rect3.width = birdRect.width;
        // this.rect3.height = birdRect.height;
        // egret.MainContext.instance.stage.addChild(this.rect1);
        // egret.MainContext.instance.stage.addChild(this.rect2);
        // egret.MainContext.instance.stage.addChild(this.rect3);
        return birdRect.intersects(upRect) || birdRect.intersects(downRect);
    }
    /**
     * 是否有效
     */
    isEffective(): boolean {
        if (this.x + this.width < 0)
            return false;
        return true;
    }
}