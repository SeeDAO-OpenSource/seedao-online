import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARD-2-1',
    hitbox: {
        width: 64,
        height: 64
    }
})

export default class NCCProposal1Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐SeeDAO\n社区提案规则', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
            marginBottom: 48
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('🌐 浏览提案 [ SeeDAO 社区提案规则 ]', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/369' })
    }
}