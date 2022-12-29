import { Keyboard } from "./Constants";
import { IKeyHandler } from "./IKeyHandler";
import { IStore } from "./IStore";
import { Rotation } from "./Types";

export class KeyHandler implements IKeyHandler {
    private store: IStore;

    constructor(store: IStore) {
        this.store = store;
    }

    tryHandleUpClick = (e: KeyboardEvent, limitValue: number): void => {
        if (e.key === Keyboard.ArrowUp && typeof this.store.playerProps.top !== "undefined") {
            const newValue = parseInt(this.store.playerProps.top.toString()) - 10;
            if (newValue >= limitValue) {
                this.store.setPlayerX(newValue);
            }
        }
    }

    tryHandleDownClick = (e: KeyboardEvent, limitValue: number): void => {
        if (e.key === Keyboard.ArrowDown && typeof this.store.playerProps.top !== "undefined") {
            const newValue = parseInt(this.store.playerProps.top.toString()) + 10;
            if (newValue <= limitValue) {
                this.store.setPlayerX(newValue);
            }
        }
    }

    tryHandleLeftClick = (e: KeyboardEvent, limitValue: number): void => {
        if (e.key === Keyboard.ArrowLeft && typeof this.store.playerProps.left !== "undefined") {
            const newValue = parseInt(this.store.playerProps.left.toString()) - 10;
            if (newValue >= limitValue) {
                this.store.setPlayerY(newValue);
            }
            this.store.setRotation(Rotation.Backwards);
        }
    }

    tryHandleRightClick = (e: KeyboardEvent, limitValue: number): void => {
        if (e.key === Keyboard.ArrowRight && typeof this.store.playerProps.left !== "undefined") {
            const newValue = parseInt(this.store.playerProps.left.toString()) + 10;
            if (newValue <= limitValue) {
                this.store.setPlayerY(newValue);
            }
            this.store.setRotation(Rotation.Forwards);
        }
    }
}