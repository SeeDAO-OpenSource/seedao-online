import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'CABINET-1-1',
    hitbox: {
        width: 64,
        height: 64
    }
})

export default class NCCLobbyCABINET1Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐历届大会信息', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 64,
            marginTop: -32,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('🌐 浏览历届节点大会信息 ...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://seedao.notion.site/SeeDAO-f57031667089473faa7ea3560d05960c' })
    }
}