import * as React from 'react';
import Dashboard from '../days/dashboard'
import SideBar from '../ui-custom/customSideBar'
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query'
import { fetchNews } from '../fetchers/news'
import { Context } from '../context/context'

import styles from './styles.module.scss';


type News = {
  title: string;
  content: string;
}


let WithReactQuery = (isTickerActive: boolean) => {
  const { isLoading, data } = useQuery(['news'], fetchNews, { staleTime: 60000 })

  let getContent = () => {
    if (isLoading) {
      return <>Loading...</>
    } else if (data?.error) {
      return <>News fetching Error (localhost only): {data.error.message}</>
    } else {
      return <> {data?.news.articles && data.news.articles.map((news: News) => news.title)}</>
    }
  }


  return (
    <div className={styles.tickerWrap}>
      <div className={isTickerActive ? styles.ticker : styles.stoppedTiker}>

        <div className={styles.tickerItem}>{getContent()}
        </div>
      </div>
    </div>
  )
}



const Main = () => {
  const [isTickerActive, setTickerActive] = React.useState(true)



  return (
    <Context.Provider value={{ isTickerActive, setTickerActive }}>
      <Grid container spacing={2}>
        <div className={styles.main}>
          <div className={styles.header}>
            <SideBar />
          </div>
          <Dashboard />
          {WithReactQuery(isTickerActive)}
        </div>
      </Grid>
    </Context.Provider>
  );
};

export default Main;