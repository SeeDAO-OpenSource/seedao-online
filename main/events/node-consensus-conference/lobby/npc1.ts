import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-1-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('character_28_frame16x20')
        this.setComponentsTop(Components.text('访客服务', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 8,
        })
    }
}