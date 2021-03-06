import qs from 'qs';
import axios from 'axios';

const CLIENT_ID_DEV = 'a0b0391a47dac2c';
// const CLIENT_ID_DEV = '5d2d5d8edaf0bb0';
const CLIENT_ID_PROD = '2f5ce5d2d8a54b0';
const ROOT_URL = 'https://api.imgur.com/';

export default{
    login() {
        const querystring = {
            client_id:  process.env.NODE_ENV === 'production' ?  CLIENT_ID_PROD:CLIENT_ID_DEV,
            response_type: 'token'
        }
        window.location = `${ROOT_URL}oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post( `${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })

        return Promise.all(promises)
    }
}

