import axios from 'axios'
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1'
})
export default class CharaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('chara')
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Do you whant save your progress?', [
            { text: 'Yes', value: true },
            { text: 'No', value: false }
        ])
        if (choice && choice.value) {
            const json = player.save()
            try {
                await axios.post('https://my-backend-game/save', {
                    data: json,
                    playerId: 123 // An identifier that you must have defined when the player was loaded in the game (be careful, do not use player.id which changes every time you log in)
                })
                player.showNotification('Your progress has been saved')
            }
            catch (err) {
                console.log(err)
                player.showNotification('Save failed')
            }
        }
    }
}