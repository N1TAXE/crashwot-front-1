import {MutableRefObject, useEffect, useState} from "react";

import { SpinePlayer } from "@esotericsoftware/spine-player";
import {StringMap} from "@esotericsoftware/spine-core";
import {Viewport} from "@esotericsoftware/spine-player/dist/Player";

export interface AnimationTypes {
    ref: MutableRefObject<HTMLElement>;
    name: string;
    viewport: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        padLeft?: string | number;
        padRight?: string | number;
        padTop?: string | number;
        padBottom?: string | number;
        debugRender?: boolean;
        transitionTime?: number;
        animations?: StringMap<Viewport>;
    }
}

export const useAnimation = ({ ref, name, viewport = {}, ...rest }: AnimationTypes) => {
    const [animation, setAnimation] = useState<SpinePlayer>();

    useEffect(() => {
        if (!ref?.current) return;

        const spine = new SpinePlayer(ref?.current, {
            preserveDrawingBuffer: false,
            jsonUrl: `${import.meta.env.VITE_PUBLIC_URL}/static/animation/${name}/${name}.json`,
            atlasUrl: `${import.meta.env.VITE_PUBLIC_URL}/static/animation/${name}/${name}.atlas`,
            backgroundColor: "#00000000",
            alpha: true,
            showControls: false,
            showLoading: false,
            animation: "idle",
            defaultMix: 0.25,
            viewport,
            ...rest,
        });

        setAnimation(spine);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, ref]);

    return [animation];
};
