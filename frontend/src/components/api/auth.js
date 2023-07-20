import axios from 'axios'
import { cookies }  from './cookies'
import { storage } from './storage'

export const auth = (username, password) => {
    axios({
        method: 'post',
        url: '/auth/token/login/',
        headers: {},
        data: {
            username: username,
            password: password
        }
    }).then( (res) => {
        let token = res.data['auth_token']
        storage.set('Authorization', `Token ${token}`)
        //cookies.set('Authorization', `Token ${token}`, { path: '' })
        window.location.reload()
        console.log('success:', storage.get('Authorization'))
    } )
}

export let isAuth = () => {
    if(storage.get('Authorization') == undefined) {
        return false
    } else {
        return true
    }
}

export const logout = () => {
    axios({
        method: 'post',
        url: '/auth/token/logout/',
        headers: {
            'Authorization': storage.get('Authorization')
        },
    }).then( () => {
        storage.remove('Authorization')
        window.location.reload()
        console.log('success: logout')
    } )

}

export const  myUserInfo = async () => {
    let res = await axios({
        method: 'get',
        url: '/api/profile/',
        headers: {
            'Authorization': storage.get('Authorization')
        },
    })
    return res.data
}