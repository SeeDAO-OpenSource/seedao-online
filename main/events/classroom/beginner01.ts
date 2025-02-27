import axios from 'axios'
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'NPC-1',
    hitbox: {
        width: 32,
        height: 32
    }
})
export default class Beginner01Event extends RpgEvent {
    onInit() {
        this.setGraphic('healer_f')
    }

    async onAction(player: RpgPlayer) {
        await player.showText('嘿，你是来了解竞选情况的吗？我是 Jingyi，目前在竞选品牌协调岗位！', {
            talkWith: this
        })

        const choice = await player.showChoices('你想了解什么？', [
            { text: '你的经验是什么？', value: 0 },
            { text: '为什么想竞选品牌协调？', value: 1 },
            { text: '如果你当选了，会做什么？', value: 2 }
        ], {
            talkWith: this
        })

        if (choice && choice.value === 0) {
            await player.showText('我有自由职业的经验，时间灵活，并且曾经创立自己的品牌，对品牌定位和策略有思考和实践。', {
                talkWith: this
            })
            await player.showText('此外，我在 SeeDAO 参与活动推广、品牌设计和社区协作，熟悉 DAO 生态的运作方式。', {
                talkWith: this
            })
        } else if (choice && choice.value === 1) {
            await player.showText('SeeDAO 对于去中心化社区经济很有潜力，我希望通过品牌协调工作，让更多人理解和参与 DAO。', {
                talkWith: this
            })
            await player.showText('我也想探索 DAO 如何更好地支持线下活动和 Web3 生态的融合。', {
                talkWith: this
            })
        } else if (choice && choice.value === 2) {
            await player.showText('如果当选，我会优化品牌推广和活动策略，让社区的品牌形象更清晰，并帮助成员更容易理解 DAO。', {
                talkWith: this
            })
            await player.showText('我也会推动 SeeDAO 的品牌内容整理，并连接社区成员，让大家都能参与进来。', {
                talkWith: this
            })
        }

        const voteChoice = await player.showChoices('你会投票支持我吗？', [
            { text: '支持！', value: 'yes' },
            { text: '还需要考虑', value: 'maybe' },
            { text: '不支持', value: 'no' }
        ], { talkWith: this })

        if (voteChoice && voteChoice.value === 'yes') {
            await player.showText('太棒了！谢谢你的支持，我会努力让品牌协调工作发挥最大作用！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'maybe') {
            await player.showText('没关系，欢迎随时找我聊聊，我的 WeChat 是 XXXXXX，我很乐意分享我的想法！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'no') {
            await player.showText('没问题！如果有任何意见，也欢迎告诉我，我希望能做得更好！', {
                talkWith: this
            })
        }
    }
}