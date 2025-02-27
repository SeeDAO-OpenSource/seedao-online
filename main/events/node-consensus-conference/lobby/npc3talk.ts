import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-TALK-1-3',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPCTalk3Event extends RpgEvent {
    async onAction(player: RpgPlayer) {
        await player.showText('你好, 本季节点! 请别忘了去铸造领取链上身份哦!', {
            talkWith: this
        })
        const helpChoice = await player.showChoices('你想要了解哪些信息呢?', [
            { text: '如何验证节点身份资格？', value: 'validate' },
            { text: '怎么针对提案进行投票？', value: 'voting' },
            { text: '什么是治理挖矿激励？', value: 'govmining' }
        ], { talkWith: this })

        if (helpChoice && helpChoice.value === 'validate') {
            await player.showText('请在 SeeDAO OS 内查看有效积分与活跃积分，是否符合本季门槛', {
                talkWith: this
            })
            await player.showText('以及是否钱包内持有 SEED NFT', {
                talkWith: this
            })
            await player.showText('符合条件的地址需要前往节点大会网站进行节点身份铸造', {
                talkWith: this
            })
            await player.showText('请注意! 节点身份资格领取有截止期限, 请把握时间!', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'voting') {
            await player.showText('在 SeeDAO OS 内打开左侧 [提案]，就能看到提案列表', {
                talkWith: this
            })
            await player.showText('在领取身份之后, 显示 [未投] 的提案就可以进行投票', {
                talkWith: this
            })
            await player.showText('不过, 需要等到节点大会开始后, 提案进入投票期才能执行', {
                talkWith: this
            })
        } else if (helpChoice && helpChoice.value === 'govmining') {
            await player.showText('根据 SeeDAO 元规则 7.1.2，治理挖矿用来奖励参与节点公式大会的节点。', {
                talkWith: this
            })
            await player.showText('治理挖矿数额为该治理季度，除治理挖矿以外 POW 所产生 $SCR 的 1/20。', {
                talkWith: this
            })
            await player.showText('治理挖矿规则为，节点根据对节点共识大会所有提案的投票数平分。', {
                talkWith: this
            })
            await player.showText('待共识大会所有提案提案投票结束，会有市政厅统计所有票数，', {
                talkWith: this
            })
            await player.showText('并空投相应治理奖励到节点地址，并在社区公示。', {
                talkWith: this
            })
        }
    }
}