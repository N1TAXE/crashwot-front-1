import React from 'react';
import {useUserStore} from "../../app/stores/userStore.tsx";
import {useParams} from "react-router-dom";
import AnotherUserPage from "./AnotherUserPage.tsx";
import {ProfileUserPage} from "./ProfileUserPage.tsx";

export const UserPage = () => {
    const {user} = useUserStore()
    const {userId} = useParams()

    if (!user || !userId || Number(userId) !== user.id) return (
        <AnotherUserPage/>
    )
    return <ProfileUserPage/>
};