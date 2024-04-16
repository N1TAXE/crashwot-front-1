import {Path} from "@remix-run/router/history.ts";
import {PATHS} from "../../../../shared/lib/react-router";
import {IconTypes} from "../../../../shared/ui/icon";

type navItem = {
    text: string;
    icon: IconTypes;
    href: string | Partial<Path>;
};

export const items: navItem[] = [
    { text: 'Crash', icon: 'crashgame', href: PATHS.root },
    { text: 'Кейсы', icon: 'case', href: PATHS.cases.list() },
];