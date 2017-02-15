import axios from "axios";

import configs from "../congifs";

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

export default function(q){
    const params = {
        part: 'snippet',
        type: 'video',
        key: configs.YOUTUBE_API_KEY,
        q: q,
        maxResults: 20
    }

    return axios.get(SEARCH_URL, {
        params: params
    }).then(response => {
        return response.data.items
    }).then(items => {
        return items.map(item => {
            return { 
                id: item.id.videoId, 
                title: item.snippet.title,
                description: item.snippet.description
            }
        });
    }).catch(err => {
        console.error(err);
    });
}