import { useApi } from '../../service/api';
import Types from './types';
import { useDispatch } from 'react-redux';

export function setToken(token) {
    return {
        type: Types.SETTOKEN,
        payload: {token}
    }
}

export function setUserType(usertype) {
    return {
        type: Types.SETUSERTYPE,
        payload: {usertype}
    }
}

export function createAccount() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data) => {
        const info = await api.signup(data);
    }
}

export function Login() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data, type) => {
        dispatch(setUserType(type));
        const info = await api.signin(data)
    }
}