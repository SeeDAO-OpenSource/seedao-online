import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'BOARDSIGN-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCProposalBoardSignEvent extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('❓提案区', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 24,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('本区展示了本季节点共识大会的提案', {
            talkWith: this
        })
        await player.showText('除了日常三层提案外，节点大会的提案都是对社区影响重大的提案', {
            talkWith: this
        })
        await player.showText('在每季一次举办的大会上，会让节点充分讨论与投票，决定社区的发展方向', {
            talkWith: this
        })
    }
}