import axios from 'axios'

export const getAllComics = async () => {
    let res = await axios({
        method: 'get',
        url: '/api/comics/',
        headers: {},
    })
    return res.data
}