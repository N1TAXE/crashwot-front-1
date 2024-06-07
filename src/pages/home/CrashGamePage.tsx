import {CrashGameGiveaway, CrashGameInputs, CrashGamePromoBanner} from "./ui";
import styles from './styles.module.scss'
import {CrashGameAnimation} from "./ui/crashgame-animation";
import {CrashGameHistory} from "./ui/crashgame-history";
import {CrashGamePlayers} from "./ui/crashgame-players";
import { Helmet } from "react-helmet"
import React from 'react'

export function CrashGamePage() {
    return (
        <React.Fragment>
            <Helmet>
                <title>CrashWOT</title>
            </Helmet>
            <div className="container">
                <section className={styles.section}>
                    <div className={styles.sectionLeft}>
                        <button onClick={handle}>Test</button>
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