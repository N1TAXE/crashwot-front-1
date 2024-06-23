import React from 'react';
import styles from "./styles.module.scss";
import {ProfileLevel, ProfileReferrals, ProfileTabs, ProfileUser} from "../../widgets/user";
import ProfileStats from "../../widgets/user/stats";

const AnotherUserPage = () => {
    return (
        <div className={`container ${styles.profile}`}>
            <div className={styles.profileTop}>
                <ProfileUser/>
                <ProfileLevel/>
                <ProfileReferrals/>
            </div>
            <ProfileStats/>
            <ProfileTabs/>
        </div>
    )
};

export default AnotherUserPage;