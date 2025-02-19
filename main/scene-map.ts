import { type RpgSceneMapHooks, RpgSceneMap, RpgGui, inject, RpgClientEngine } from '@rpgjs/client'

const sceneMap: RpgSceneMapHooks = {
    onAfterLoading(scene: RpgSceneMap) {
        const clientEngine = inject(RpgClientEngine)
        // scene.on('click', (position) => {
        //     clientEngine.socket.emit('create-event', position)
        // })
    }
}

export default sceneMap