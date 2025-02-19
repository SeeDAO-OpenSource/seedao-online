import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'

@EventData({
    name: 'EV-1'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('cat')
        this.setHitbox(16, 16)
        this.speed = 1
        this.infiniteMoveRoute(
            [Move.tileRandom()]
        )
    }
    onAction(player) {
        // console.log('cat id: ', this.id)
    }
}