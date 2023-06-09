import { useMutation } from '@tanstack/react-query'
import {
    ENDPOINT_AUTH_LOGIN,
    ENDPOINT_AUTH_REGISTER
} from '../utils/constants/endpoints.constants'
import AxiosApiHelper from '../helper/axios_api.helper'
import useAuth from '../custom_hooks/use_auth'
import { useDispatch } from 'react-redux'
import { showErrorAlert, showSuccessAlert } from '../redux/global/global.reducer'

export const RepoAuthRegister = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch();

    return useMutation(
        async d => {
            d.role = d.role.toUpperCase()
            let data = d

            if (d.role == 'CLIENT') {
                data = {
                    email: d.email,
                    password: d.password,
                    name: d.name
                }
            }

            return await AxiosApiHelper.post(ENDPOINT_AUTH_REGISTER, data)
        },
        {
            onSuccess: data => {
                setAuth(data)
                dispatch(showSuccessAlert("Welcome to dreamy wedding"))
            },
            onError: error => {
                dispatch(showErrorAlert(error))
            }
        }
    )
}

export const RepoAuthLogin = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch();

    return useMutation(data => AxiosApiHelper.post(ENDPOINT_AUTH_LOGIN, data), {
        onSuccess: data => {
            setAuth(data)
            dispatch(showSuccessAlert("Welcome again"))
        }, onError: error => {
            dispatch(showErrorAlert(error))
        }
    })
}
