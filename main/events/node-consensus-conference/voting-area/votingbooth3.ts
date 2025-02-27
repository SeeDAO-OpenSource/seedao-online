import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'TABLE-5-3',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCVotingBooth3Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐市政厅评估', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        const helpChoice = await player.showChoices('本季市政厅岗位评估提案:', [
            { text: '🌐 治理协调-咖啡', value: '1' },
            { text: '🌐 品牌协调-文倩', value: '2' },
            { text: '🌐 社区运营-Ashley', value: '2' },
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === '1') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/372' })
        } else if (helpChoice && helpChoice.value === '2') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/371' })
        } else if (helpChoice && helpChoice.value === '3') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/370' })
        }

    }
}