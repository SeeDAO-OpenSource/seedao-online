import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'TABLE-5-2',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCVotingBooth2Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐总预算', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('🌐 浏览提案 [ S10 社区总预算 ]', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/378' })

    }
}