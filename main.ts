namespace SpriteKind {
    export const échelle = SpriteKind.create()
    export const kong = SpriteKind.create()
    export const peacht = SpriteKind.create()
    export const tonneau = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
info.onCountdownEnd(function () {
    sprites.destroy(mySprite, effects.spray, 500)
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level7`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(false)
mySprite.ay = 300
mySprite.setPosition(380, 600)
info.startCountdown(100)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 3 3 3 . . . 
    . . . . . . . 3 . . . 3 3 3 . . 
    . . . . . 3 3 3 . 3 3 3 3 3 . . 
    . . . . 3 . 3 3 3 3 3 3 3 3 . . 
    . . . 3 . 3 3 3 3 3 3 . . 3 . . 
    . . . 3 3 3 3 3 3 3 3 . 3 3 . . 
    3 3 3 3 3 3 3 3 . 3 3 . 3 3 . . 
    3 . . 3 3 3 3 3 3 3 3 . 3 3 . . 
    3 . . 3 3 3 3 3 3 . 3 3 . 3 . . 
    3 . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    3 3 3 3 3 3 3 3 3 3 3 . 3 . . . 
    . 3 3 3 3 3 . 3 3 3 3 3 . . . . 
    . . 3 . . . 3 . 3 3 3 3 . . . . 
    . . 3 . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(395, 600)
mySprite2.follow(mySprite, 50)
