import {CrashGameGiveaway, CrashGameInputs, CrashGamePromoBanner} from "./ui";
import styles from './styles.module.scss'
import {CrashGameAnimation} from "./ui/crashgame-animation";
import {CrashGameHistory} from "./ui/crashgame-history";
import {CrashGamePlayers} from "./ui/crashgame-players";
import React, {useCallback, useEffect, useState} from "react";
import { Helmet } from "react-helmet"
import useWebSocket, { ReadyState } from 'react-use-websocket';
export function CrashGamePage() {
    const [socketUrl, setSocketUrl] = useState('ws://188.120.243.85:8000/api');

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <React.Fragment>
            <Helmet>
                <title>Title using helmet</title>
            </Helmet>
            <div className="container">
                <section className={styles.section}>
                    <div className={styles.sectionLeft}>
                        <CrashGameInputs/>
                        <CrashGamePromoBanner/>
                        <CrashGameGiveaway/>
                    </div>
                    <div className={styles.sectionRight}>
                        <CrashGameAnimation/>
                        <CrashGameHistory/>
                        <CrashGamePlayers/>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}