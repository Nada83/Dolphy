import { BASE_URL } from './types';

export function useApi() {
    async function GET(url) {
        const token = '';
        if (!apiKey) {
            throw new Error('Api is not initailized yet')
        }
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await result.json();
        return { data }
    }

    async function POST(url, params) {
        const token = '';
        if (!apiKey) {
            throw new Error('Api is not initailized yet')
        }
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: params === null ? void 0 : typeof params === 'string' ? params : JSON.stringify(params)
        });
        const data = await result.json();
        return { data }
    }
    async function POST0(url, params) {        
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        const data = await result.json();
        return { data }
    }
    return {
        async signin(params) {
            console.log(params)
            const {data} = await POST0('/user/login', params);
            console.log(data)
        },
        async signup(params) {
            console.log(params)
            const {data} = await POST0('/user/register', params);
            console.log(data)
        }
    }
}