import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-TALK-1-2',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPCTalk2Event extends RpgEvent {
    async onAction(player: RpgPlayer) {
        await player.showText('你好, 欢迎 SeeDAO 成员共襄盛举', {
            talkWith: this
        })
        const helpChoice = await player.showChoices('你想要了解哪些信息呢?', [
            { text: '我是社区成员但不是节点，我能参加大会吗？', value: 'join' },
            { text: '目前不是节点的社区成员可以投票吗？', value: 'voting' },
            { text: '不是节点可以报名公共岗位吗？', value: 'govwork' }
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === 'join') {
            await player.showText('可以，节点公式大会向全社区开放，所有决策公开透明。', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'voting') {
            await player.showText('不可以，社区成员可以旁听，并表达对提案的意见，但是无投票权。', {
                talkWith: this
            })
            await player.showText('SeeDAO 治理原则之一是分层治理，让更了解事情原委的人治理。', {
                talkWith: this
            })
            await player.showText('节点比一般社区成员在社区投入时间更多，更了解 SeeDAO 运行情况，所以具有共识大会投票权。', {
                talkWith: this
            })
            await player.showText('社区成员可能会参加市政厅、战略孵化器、各个公会和各个项目，可以参与相应组织的治理。', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'govwork') {
            await player.showText('可以，非节点只要满足报名门槛也可以参与报名。', {
                talkWith: this
            })
            await player.showText('关于市政厅各公共岗位报名资格与工作要求，请查看下方帮助区', {
                talkWith: this
            })
        }
    }
}