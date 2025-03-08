import { RpgClientEngineHooks, RpgClientEngine } from "@rpgjs/client"
import { OPEN_WEB_PAGE } from "./consts/events"
import wagmiConfig from "./config/wagmi"

declare module '@rpgjs/client' {
  interface RpgClientEngine {
    wagmiConfig: typeof wagmiConfig
  }
}

const client: RpgClientEngineHooks = {
    onConnected(engine: RpgClientEngine) {
      engine.wagmiConfig = wagmiConfig

        engine.socket.on(OPEN_WEB_PAGE, (data: { url: string }) => {
            window.open(data.url, "_blank");
        });
        // engine.socket.on("showInputBox", () => {
        //     const input = document.createElement("input");
        //     input.type = "text";
        //     input.placeholder = "請輸入名稱...";
        //     input.style.position = "absolute";
        //     input.style.top = "50%";
        //     input.style.left = "50%";
        //     input.style.transform = "translate(-50%, -50%)";
        //     input.style.fontSize = "20px";
        //     document.body.appendChild(input);
        //     input.addEventListener("keydown", (e) => {
        //         if (e.key === "Enter") {
        //             engine.socket.emit("inputSubmitted", input.value);
        //             document.body.removeChild(input);
        //         }
        //     });
        // });
    },
    onConnectError(engine: RpgClientEngine, err: Error) {
        console.log("Connection Error:", err.message);
    }
};

export default client;