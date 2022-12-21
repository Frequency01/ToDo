import axios from 'axios'

export const fetchNews = async () => {
    const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fe9d412fca264b4b9fb286256e5778bc')
        .then(resp => { return { news: resp.data, error: null } })
        .catch((err) => { return { error: err.response.data, news: null } })



    return result;
}

