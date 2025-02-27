import { RpgEvent, EventData, Components, RpgPlayer } from '@rpgjs/server'
import { OPEN_WEB_PAGE } from '../../../consts/events'


@EventData({
    name: 'NPC-3-6',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class NCCLobbyNPC1Event extends RpgEvent {
    onInit() {
        this.setGraphic('ricky')
        this.setComponentsTop(Components.text('Ricky', {
            fill: '#ffffff',
            fontSize: 12,
            fontFamily: 'Arial',
            stroke: '#000000',
        }), {
            marginRight: 0,
        })
    }

    async onAction(player: RpgPlayer) {
        await player.showText('[你发现 Ricky 一脸黑色, 看起来为了 SeeDAO 肝到不能再肝]')

        await player.showText('咳咳...你好，我是 Ricky，目前正在竞选社区运营..咳咳', {
            talkWith: this
        })

        const choice = await player.showChoices('你想了解哪些信息？', [
            { text: '为什么永远看到你在线上?', value: 0 },
            { text: 'Ricky 你到底为什么这么拼?', value: 1 },
            { text: 'SeeDAO 已经死了啦', value: 2 }
        ], {
            talkWith: this
        })

        if (choice && choice.value === 0) {
            await player.showText('其实我养了 5 个工读生, 每天帮我刷 SeeDAO 微信群', {
                talkWith: this
            })
        } else if (choice && choice.value === 1) {

            await player.showText('你人生中能参与到几个 <中国第一> 的项目? 我是抱持 Vision 在参与社区的!', {
                talkWith: this
            })
        } else if (choice && choice.value === 2) {
            await player.showText('只有到所有人把 SeeDAO 忘记的时后, SeeDAO 才是真的死, 有多少中文 DAO 都没人记得了', {
                talkWith: this
            })
        }

        const voteChoice = await player.showChoices('你会投票支持我(Ricky)吗？', [
            { text: '现在支持！', value: 'yes' },
            { text: '晚点支持!', value: 'maybe' },
            { text: '不会不支持!', value: 'no' }
        ], { talkWith: this })

        if (voteChoice && voteChoice.value === 'yes') {
            await player.showText('感谢你的支持！我会努力优化 SeeDAO 的社区运营，提升成员体验！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'maybe') {
            await player.showText('没关系，你可以再观察一下，如果有问题欢迎和我交流！', {
                talkWith: this
            })
        } else if (voteChoice && voteChoice.value === 'no') {
            await player.showText('没问题！如果你有任何建议，也欢迎告诉我，我希望能不断优化社区运营策略。', {
                talkWith: this
            })
        }
    }
}