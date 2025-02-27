import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-3-7',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('lizi')
        this.setComponentsTop(Components.text('LiZi', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 0,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('你好，我是栗子，目前正在竞选 SeeDAO 的治理协调岗位。', {
            talkWith: this
        })

        const choice = await player.showChoices('你想了解哪些信息？', [
            { text: '你的治理经验是什么？', value: 0 },
            { text: '为什么竞选治理协调？', value: 1 },
            { text: '你如何看待 SeeDAO 的治理未来？', value: 2 }
        ], {
            talkWith: this
        })

        if (choice && choice.value === 0) {
            await player.showText('在 SeeDAO，我曾担任多个治理相关岗位，如 Notion 管理、工具管家、会议记录助理等。', {
                talkWith: this
            })
            await player.showText('我深度参与了多个赛季的治理流程，熟悉 SeeDAO 的治理框架、规则，以及技术工具的运用。', {
                talkWith: this
            })
            await player.showText('同时，我的治理反馈和审查获得大家认可，review 工作时通常会达到 100%-120% 的评价。', {
                talkWith: this
            })
        } else if (choice && choice.value === 1) {
            await player.showText('随着 SeeDAO 进入 “晨兴阶段”，市政厅等核心角色开始转向支持者角色，而治理机制也在不断调整。', {
                talkWith: this
            })
            await player.showText('治理工作是 DAO 运转的关键，但很多新成员还不了解治理流程，我希望能让治理更加透明，帮助大家适应变化。', {
                talkWith: this
            })
            await player.showText('作为治理协调，我的目标是展开长期的治理讨论，理清治理逻辑，让更多人能够参与并贡献。', {
                talkWith: this
            })
        } else if (choice && choice.value === 2) {
            await player.showText('SeeDAO 的治理体系正经历快速变化，公会架构、社区共识和工具使用都在不断调整。', {
                talkWith: this
            })
            await player.showText('未来的治理应该更加透明和高效，减少不必要的阻力，同时提升治理的可持续性。', {
                talkWith: this
            })
            await player.showText('如果能当选，我会推动治理流程优化，让治理讨论更加公开，并帮助新成员快速融入。', {
                talkWith: this
            })
        }

        const voteChoice = await player.showChoices('你会投票支持我(栗子)吗？', [
            { text: '支持！', value: 'yes' },
            { text: '还需要考虑', value: 'maybe' },
            { text: '不支持', value: 'no' }
        ], { talkWith: this })

        if (voteChoice && voteChoice.value === 'yes') {
            await player.showText('感谢你的支持！我会努力让 SeeDAO 的治理更加高效、透明！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'maybe') {
            await player.showText('没关系，你可以再观察一下，如果有问题欢迎和我交流！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'no') {
            await player.showText('没问题！如果你有任何建议，也欢迎告诉我，我希望能不断优化治理策略。', {
                talkWith: this
            })
        }
    }
}