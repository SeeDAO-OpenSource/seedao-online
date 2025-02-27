import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOOK-1-3',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyBook3Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('❓提案投票', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('🌐 浏览 SeeDAO OS...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz' })
    }
}