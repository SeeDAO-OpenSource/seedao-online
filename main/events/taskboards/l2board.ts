import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../consts/events'

@EventData({
    name: 'BOARD-L2',
    hitbox: {
        width: 64,
        height: 64
    }
})

export default class L2TaskBoardEvent extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('L2 任务', {
            fill: '#ffffff',
            fontSize: 15,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginBottom: 32,
            marginRight: 12,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('[L2 贡献者任务公布栏] 🌐 打开 dework 中 ...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.dework.xyz/rickys-hoard/o-olove/view/l2-m7ad02v4' })
        player.showNotification('请在支持钱包的浏览器浏览网页', { time: 5000 })
    }
}