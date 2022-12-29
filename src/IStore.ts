import React from "react";
import { Rotation } from "./Types";

export interface IStore {
    playerProps: React.CSSProperties;
    setPlayerX(x: number): void;
    setPlayerY(x: number): void;
    setRotation(rotation: Rotation): void;
}