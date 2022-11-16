import axios from 'axios'

export const fetchNews = async() => {
    console.log('fetch')
    const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-11-10&sortBy=popularity&apiKey=fe9d412fca264b4b9fb286256e5778bc&pageSize=20&language=en')
    const news = response.data

    console.log('news', news )
    return news;
}

