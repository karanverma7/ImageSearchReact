import axios from 'axios'


export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID ALnr_fGSk9tiC3BLpQpCtGwa3AUZ4qeElsgukhDN2jA'
        }
    }
)