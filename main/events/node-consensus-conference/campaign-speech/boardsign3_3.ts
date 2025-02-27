import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARDSIGN-3-3',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCCapaignSpeechBoardSign3Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('', { // 品牌\n协调
            fill: '#ffffff',
            fontSize: 11,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginLeft: 4,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('看台上的是竞选 [ 品牌协调 ] 的竞选人', {
            talkWith: this
        })
    }
}