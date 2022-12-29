export interface IKeyHandler {
    tryHandleUpClick(e: KeyboardEvent, limitValue: number): void;
    tryHandleDownClick(e: KeyboardEvent, limitValue: number): void;
    tryHandleLeftClick(e: KeyboardEvent, limitValue: number): void;
    tryHandleRightClick(e: KeyboardEvent, limitValue: number): void;
}