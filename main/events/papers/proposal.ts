import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../consts/events'


@EventData({
    name: 'PAPER-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class ProposalEvent extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('SIP-1', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 3,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('桌上放着一张纸，标题写着 SIP-1，但是文字已经不清楚了...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz' })
    }
}