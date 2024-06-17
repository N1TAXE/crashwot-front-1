import {MutableRefObject, RefObject, useEffect, useState} from "react";

import { SpinePlayer } from "@esotericsoftware/spine-player";
import {StringMap} from "@esotericsoftware/spine-core";
import {SpinePlayerConfig, Viewport} from "@esotericsoftware/spine-player/dist/Player";

export interface AnimationTypes {
    ref: MutableRefObject<HTMLElement> | RefObject<HTMLElement>;
    name: string;
    config: SpinePlayerConfig
}

export const useAnimation = ({ ref, name, config }: AnimationTypes) => {
    const [animation, setAnimation] = useState<SpinePlayer>();

    useEffect(() => {
        if (!ref?.current) return;

        const spine = new SpinePlayer(ref.current, {
            jsonUrl: `/static/animation/${name}/${name}.json`,
            atlasUrl: `/static/animation/${name}/${name}.atlas`,
            backgroundColor: "#00000000",
            alpha: true,
            showControls: false,
            showLoading: false,
            defaultMix: 0.25,
            viewport: {
                ...config.viewport
            },
            ...config
        });

        setAnimation(spine);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, ref]);

    return [animation];
};
