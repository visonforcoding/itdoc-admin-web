import request from './request'
import qs from 'Qs'

export function login(params) {
    return request({
        url: '/admin/hand-login',
        method: 'post',
        data: qs.stringify(params)
    })
}

export function loginOut(params) {
    return request({
        url: '/admin/hand-loginOut',
        method: 'get',
        data: qs.stringify(params)
    })
}