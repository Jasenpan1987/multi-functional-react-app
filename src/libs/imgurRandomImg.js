import axios from "axios";

import configs from "../congifs";

const RAND_IMG_URL = "https://api.imgur.com/3/gallery/random/random/20";
const AUTH_STR = `Client-ID ${configs.IMGUR_CLIENT_ID}`;

export default function(){
    const configs = {
        headers: { 
            "Authorization": AUTH_STR, 
            "Accept": "application/json"
        }
    }
    return axios.get(RAND_IMG_URL, configs).then(response => {
        return response.data.data;
    }).then(imgs => {
        return imgs.filter(img => {
            return /(\.jpg|\.png|\.jpeg)$/.test(img.link);
        }).map(img => {
            return { id: img.id, link: img.link, title: img.title };
        });
    })
}