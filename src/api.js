import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const getPostsData = async () => {
    try {
        const res = await axios.get(`${baseUrl}/posts/`)
        return res.data
    } catch (error) {
        return []
    }
}

const getCommentsData = async (postId) => {
    try {
        const res = await axios.get(`${baseUrl}/posts/${postId}/comments`)
        return res.data
    } catch (error) {
        return []
    }
}

const getAlbumsData = async () => {
    try {
        const res = await axios.get(`${baseUrl}/albums/`)
        return res.data
    } catch (error) {
        return []       
    }
}

const getPhotosFromAlbums = async (albumId) => {
    try {
        const res = await axios.get(`${baseUrl}/albums/${albumId}/photos`)
        return res.data
    } catch (error) {
        return []
    }
}

export {
    getPostsData,
    getCommentsData,
    getAlbumsData,
    getPhotosFromAlbums
}