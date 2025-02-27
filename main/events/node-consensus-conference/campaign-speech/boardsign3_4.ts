import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARDSIGN-3-4',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCCapaignSpeechBoardSign4Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('', { // 治理\n协调
            fill: '#ffffff',
            fontSize: 11,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginLeft: 4,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('看台上的是竞选 [ 治理协调 ] 的竞选人', {
            talkWith: this
        })
    }
}