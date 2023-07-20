import axios  from "axios"

export const getStatic = async (path) => {
    path = path.replace(new RegExp('/', 'g'), '&')
    return (await axios.get(`/api/staticfiles/${path}`)).data
}