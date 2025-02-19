import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../consts/events'

@EventData({
    name: 'BOARD-SNS',
    hitbox: {
        width: 64,
        height: 64
    }
})

export default class TaskBoard1Event extends RpgEvent {
    onInit() {
        this.setComponentsTop(Components.text('SNS 任务', {
            fill: '#ffffff',
            fontSize: 15,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginBottom: 32,
            marginRight: 16,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('[SNS 持有者任务公布栏] 🌐 打开 dework 中 ...', {
            talkWith: this
        })
        player.emit(OPEN_WEB_PAGE, { url: 'https://app.dework.xyz/rickys-hoard/o-olove/view/guest-and-sns-m7aczl49' })
        player.showNotification('请在支持钱包的浏览器浏览网页', { time: 5000 })
    }
}