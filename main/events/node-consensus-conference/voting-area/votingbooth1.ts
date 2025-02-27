import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'TABLE-5-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCVotingBooth1Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐节点门槛', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        const helpChoice = await player.showChoices('本季节点资格门槛设置提案:', [
            { text: '🌐 节点有效门槛', value: '1' },
            { text: '🌐 活跃度门槛', value: '2' },
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === '1') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/380' })
        } else if (helpChoice && helpChoice.value === '2') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/379' })
        }

    }
}