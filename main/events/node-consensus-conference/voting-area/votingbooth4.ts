import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'TABLE-5-4',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCVotingBooth4Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('🌐岗位竞选', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        const helpChoice = await player.showChoices('下季市政厅岗位竞选提案:', [
            { text: '🌐 品牌协调岗位投票', value: '1' },
            { text: '🌐 社区运营岗位投票', value: '2' },
            { text: '🌐 治理协调岗位投票', value: '3' },
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === '1') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/376' })
        } else if (helpChoice && helpChoice.value === '2') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/375' })
        } else if (helpChoice && helpChoice.value === '3') {
            player.emit(OPEN_WEB_PAGE, { url: 'https://app.seedao.xyz/proposal/thread/373' })
        }

    }
}