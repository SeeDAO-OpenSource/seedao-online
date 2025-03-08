import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'
import CatEvent from './events/cat'

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = '勇者'
        player.level = 1
        player.setComponentsTop([
            // Components.text('L{level}',),
            Components.text('{name}')], {
            marginLeft: 2,
        }) 
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.showAttachedGui()
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
         // 登录
         player.gui('login-button').open();
    
         player.on('walletConnected', ({ address }) => {
            debugger
           // Handle wallet connection on server side
           player.setVariable('walletAddress', address);
           // You can add additional logic here
         });
         
        // player.on("inputSubmitted", (name) => {
        //     player.showText(`你的名稱是：${name}`);
        // });
        // await player.showText('請輸入你的暱稱:')
        // player.emit("showInputBox")
        await player.showText('欢迎来到星道世界 (SeeDAO Wolrd) [ 点击画面拖拉移动, 按键 A 互动 ]')
        player.setVariable('AFTER_INTRO', true)
        player.on('create-event', (position) => {
            player.createDynamicEvent({
                x: position.x,
                y: position.y,
                event: CatEvent
            })
        })
    }
}

export default player