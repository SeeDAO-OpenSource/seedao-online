import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARDSIGN-3-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCCapaignSpeechBoardSign1Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('❓竞选区', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginLeft: 0,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('本区展示本季竞选市政厅三个岗位的竞选人信息', {
            talkWith: this
        })
        await player.showText('透过与竞选人互动，了解竞选人报名参选的动机与目的', {
            talkWith: this
        })
        await player.showText('一起为 SeeDAO 选出下一季市政厅合适的人选吧!', {
            talkWith: this
        })
    }
}