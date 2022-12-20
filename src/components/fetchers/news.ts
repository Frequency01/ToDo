import axios from 'axios'

export const fetchNews = async() => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fe9d412fca264b4b9fb286256e5778bc')
    const news = response.data

    return news;
}

