import { useState, useEffect } from "react"
import { UserType } from "../@types/user.type"
import userService from "../services/users/userService";

export const useAllUserFriends = () => {

    const [userFriends, setUserFriends] = useState<UserType[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUserFriends = async () => {
            const response = await userService.getAllUserFriends();
            setUserFriends(response);
            setIsLoading(false);
        }

        getUserFriends();

        return () => userService.stopListeningUserFriends();
    }, []);

    return { userFriends, isLoading };

}