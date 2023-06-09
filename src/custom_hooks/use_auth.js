import { useCookies } from "react-cookie";
import { RepoUserProfile as RepoUserProfile } from "../repositories/user.repo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuth, setAuth } from "../redux/user/user.reducer";
import Cookies from "js-cookie";

const useAuth = () => {
    const authData = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    // const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
    const { data: profileData, refetch, isSuccess } = RepoUserProfile();

    const isAuth = Cookies.get("access_token") != null;
    const token = Cookies.get("access_token");

    // const isAuth = cookies.access_token != null;
    // const token = cookies.access_token;

    useEffect(() => {
        if (isAuth && authData == null) {
            refetch();
        }
    }, [])

    const setUserData = async (data) => {
        dispatch(setAuth({
            id: data["_id"],
            name: data.name,
            email: data.email,
            role: data.role,
            avatar: data.avatar,
            bio: data.bio,
        }))
    };

    const handleSetAuthData = async (data) => {
        if (data != null && !isAuth) {
            // setCookie("access_token", data.access_token, { path: "/", httpOnly: false });
            Cookies.set("access_token", data.access_token)
            setUserData(data.user);
        } else if (data != null) {
            setUserData(data);
        }
        else {
            // removeCookie("access_token");
            Cookies.remove("access_token")
            dispatch(setAuth(null))
        }
    };

    const logout = () => {
        handleSetAuthData(null);
    };

    const fetchAuth = async () => {
        if (isAuth) {
            await refetch();
        } else {
            dispatch(deleteAuth())
        }
    };

    useEffect(() => {
        if (isSuccess && profileData != null) {
            setUserData(profileData);
        }
    }, [isSuccess, profileData]);

    const isAdmin = authData?.role === "ADMIN";
    const isSeller = authData?.role === "SELLER";
    const userId = authData?.id;

    return {
        isAuth,
        setAuth: handleSetAuthData,
        logout,
        token,
        userId,
        authData:
            authData == null
                ? null
                : {
                    id: authData.id,
                    name: authData.name,
                    email: authData.email,
                    role: authData.role,
                    bio: authData.bio,
                    avatar: authData.avatar,
                },
        isAdmin,
        isSeller,
        fetchAuth,
    };
};

export default useAuth;