import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-3-10',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('vfan')
        this.setComponentsTop(Components.text('大凡', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 0,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('你好，我是大凡，目前在竞选 SeeDAO 的品牌协调岗位。', {
            talkWith: this
        })

        const choice = await player.showChoices('你想了解我的哪些信息？', [
            { text: '你的社区经验是什么？', value: 0 },
            { text: '为什么竞选品牌协调？', value: 1 },
            { text: '你对 SeeDAO 未来的规划是什么？', value: 2 }
        ], {
            talkWith: this
        })

        if (choice && choice.value === 0) {
            await player.showText('我曾是 NCC 数字游民社区主理人，负责 BD、社区氛围营造和品牌推广。', {
                talkWith: this
            })
            await player.showText('在 SeeDAO，我从 S3 赛季开始就参与了多个品牌相关项目，包括 AMA 活动、品牌内容制作和 DC 社群建设。', {
                talkWith: this
            })
            await player.showText('S6 赛季，我担任研发公会的主理人，全面负责公会的运营与发展。', {
                talkWith: this
            })
        } else if (choice && choice.value === 1) {
            await player.showText('SeeDAO 目前发展迅速，但仍然面临着品牌传播力不足的问题。', {
                talkWith: this
            })
            await player.showText('社区需要更清晰的品牌形象和更多高质量的合作资源，而我擅长品牌塑造和社区运营。', {
                talkWith: this
            })
            await player.showText('如果能当选，我希望通过品牌协调岗位，让 SeeDAO 的品牌建设更专业，并推动更多社群合作。', {
                talkWith: this
            })
        } else if (choice && choice.value === 2) {
            await player.showText('我希望 SeeDAO 未来能成为一个结合 AI 技术和社群共建的去中心化数字城市。', {
                talkWith: this
            })
            await player.showText('AI 未来会深度融入社区的各种决策，包括社群治理、内容创作和价值交换，让 SeeDAO 形成一个更加智能、开放的生态。', {
                talkWith: this
            })
            await player.showText('品牌协调的核心任务就是优化品牌叙事，让更多人理解 SeeDAO 的愿景，吸引更多志同道合的开发者和贡献者加入。', {
                talkWith: this
            })
        }

        const voteChoice = await player.showChoices('你会投票支持我(大凡)吗？', [
            { text: '支持！', value: 'yes' },
            { text: '还需要考虑', value: 'maybe' },
            { text: '不支持', value: 'no' }
        ], { talkWith: this })

        if (voteChoice && voteChoice.value === 'yes') {
            await player.showText('感谢你的支持！我会努力推动 SeeDAO 的品牌升级和社群建设！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'maybe') {
            await player.showText('没关系，你可以再观察一下，如果有问题欢迎和我交流！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'no') {
            await player.showText('没问题！如果你有任何建议，也欢迎告诉我，我希望能不断优化品牌协调策略。', {
                talkWith: this
            })
        }
    }
}