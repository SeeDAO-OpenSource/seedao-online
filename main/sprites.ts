import { RpgGui, RpgSprite, type RpgSpriteHooks } from '@rpgjs/client'

const sprite: RpgSpriteHooks = {
    onInit(sprite: RpgSprite) {
        sprite.interactive = true
        sprite.on('click', () => {
            sprite.guiDisplay = !sprite.guiDisplay
        })
    }
}

export default sprite