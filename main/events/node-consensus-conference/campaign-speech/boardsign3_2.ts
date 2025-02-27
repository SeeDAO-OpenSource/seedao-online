import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARDSIGN-3-2',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCCapaignSpeechBoardSign2Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('', { // 社区\n运营
            fill: '#ffffff',
            fontSize: 11,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginLeft: 4,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('看台上的是竞选 [ 社区运营 ] 的竞选人', {
            talkWith: this
        })
    }
}