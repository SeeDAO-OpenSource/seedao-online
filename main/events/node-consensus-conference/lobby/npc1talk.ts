import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-TALK-1-1',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPCTalk1Event extends RpgEvent {
    async onAction(player: RpgPlayer) {
        await player.showText('你好, 亲爱的访客, 欢迎来到 SeeDAO!', {
            talkWith: this
        })
        const helpChoice = await player.showChoices('你想要了解哪些信息呢?', [
            { text: '我不是 SeeDAO 成员，可以参加大会吗？', value: 'guest' },
            { text: '我代表媒体方，本次大会提供哪些服务？', value: 'media' },
            { text: '我可以邀请更多非 SeeDAO 成员来大会吗？', value: 'invited' }
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === 'guest') {
            await player.showText('可以，SeeDAO 是无许可的，无歧视的，欢迎任何人按照会议规则参加节点共识大会。', {
                talkWith: this
            })
            await player.showText('不过，由于技术原因，本季 SeeDAO 节点共识大会基于 Zoom 召开，最多只能 500 人同时参加', {
                talkWith: this
            })
            await player.showText('我们会优先保证节点、SeeDAO 社区成员参加。', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'media') {
            await player.showText('欢迎媒体参加报道，大会内容对外开放透明，皆可公开获取。', {
                talkWith: this
            })
            await player.showText('如果您想要邀请社区成员接受访谈，则需要直接联系其本人并获得同意。', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'invited') {
            await player.showText('可以。SeeDAO 致力于构造开放包容的 DAO2DAO 网络', {
                talkWith: this
            })
            await player.showText('我们欢迎任何个人和组织参加SeeDAO 节点共识大会。', {
                talkWith: this
            })
        }
    }
}