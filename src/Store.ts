import { action, observable } from "mobx";
import React from "react";
import { IStore } from "./IStore";
import { Rotation } from "./Types";

export class Store implements IStore {
    @observable
    public playerProps: React.CSSProperties;

    constructor() {
        this.playerProps = observable<React.CSSProperties>({
            width: "64px",
            height: "64px",
            position: 'absolute',
            top: 100,
            left: 0,
            transform: 'rotate(0deg)'
        });
    }

    @action
    setPlayerX = (x: number) => {
        this.playerProps.top = x;
    }

    @action
    setPlayerY = (x: number) => {
        this.playerProps.left = x;
    }

    @action
    setRotation = (rotation: Rotation) => {
        this.playerProps.transform = `scaleX(${rotation})`;
    }
}