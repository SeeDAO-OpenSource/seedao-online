import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-3-9',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('suannai')
        this.setComponentsTop(Components.text('酸奶', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 0,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('你好，我是酸奶，SeeDAO 的品牌协调岗位。', {
            talkWith: this
        })

        const choice = await player.showChoices('你想了解哪些信息？', [
            { text: '你的工作经验是什么？', value: 0 },
            { text: '你为什么竞选品牌协调？', value: 1 },
            { text: '你如何看待品牌治理的未来？', value: 2 }
        ], {
            talkWith: this
        })

        if (choice && choice.value === 0) {
            await player.showText('我曾担任 SeeDAO 媒体中心负责人和品牌负责人，熟悉品牌建设和媒体运作流程。', {
                talkWith: this
            })
            await player.showText('此外，我有丰富的外部合作活动经验，能处理各类品牌事件和社区运营事务。', {
                talkWith: this
            })
            await player.showText('在内容制作方面，我也有公众号、Mirror 文章运营经验，并能处理媒体设计相关工作。', {
                talkWith: this
            })
        } else if (choice && choice.value === 1) {
            await player.showText('SeeDAO 的工具日益发达，品牌治理也需要升级，AI 未来将会在品牌资料和数据管理方面发挥更大作用。', {
                talkWith: this
            })
            await player.showText('我希望利用 AI 技术和社区共创模式，让品牌治理更加系统化，提高内容的专业性和覆盖能力。', {
                talkWith: this
            })
        } else if (choice && choice.value === 2) {
            await player.showText('品牌治理不仅是视觉风格，更涉及社区价值观的统一表达。', {
                talkWith: this
            })
            await player.showText('未来，我想探索更多类型的 “内容合创” 机制，让更多人自主参与品牌建设。', {
                talkWith: this
            })
            await player.showText('让品牌不仅是由少数人决定，而是让整个社区共同塑造，形成去中心化的品牌文化。', {
                talkWith: this
            })
        }

        const voteChoice = await player.showChoices('你会投票支持我(酸奶)吗？', [
            { text: '支持！', value: 'yes' },
            { text: '还需要考虑', value: 'maybe' },
            { text: '不支持', value: 'no' }
        ], { talkWith: this })

        if (voteChoice && voteChoice.value === 'yes') {
            await player.showText('感谢你的支持！我会努力推动 SeeDAO 的品牌治理进化！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'maybe') {
            await player.showText('没关系，你可以再观察一下，如果有问题欢迎和我交流！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'no') {
            await player.showText('没问题！如果你有任何建议，也欢迎告诉我，我希望能不断优化品牌策略。', {
                talkWith: this
            })
        }
    }
}