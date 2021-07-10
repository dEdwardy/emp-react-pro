import {instance} from '../utils/service'
export const auth = (data: any) => instance('/auth/login', {method: 'POST', data})
export const getDict = () => instance('/user/dict')
export const getArticle = (data: any) => instance('/article', {method: 'POST', data})
export const getArtilceDetail = (id: number | string) => instance(`/article/${id}`)
export const getUsers = () => instance('/user')
export const getCategoryList = () => instance('/category/list')
export const getTagList = () => instance('/tag/list')
export const getAds = () => instance('/ad')
