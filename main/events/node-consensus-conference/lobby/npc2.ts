import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-1-2',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('character_29_frame16x20')
        this.setComponentsTop(Components.text('成员服务', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 8,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('🌐 浏览 SeeDAO OS...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz' })
    }
}