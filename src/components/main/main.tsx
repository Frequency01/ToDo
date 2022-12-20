import * as React from 'react';
import Dashboard from '../days/dashboard'
import SideBar from '../ui-custom/customSideBar'
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query'
import { fetchNews } from '../fetchers/news'
import {Context} from '../context/context'

import styles from './styles.module.scss';


type News = {
  title: string;
  content: string;
}


let WithReactQuery = (isTickerActive:boolean) => {
  const { isError, isLoading, data } = useQuery(['news'], fetchNews, { staleTime: 60000 })

  if (isLoading) {
    return <>Loading...</>
  }
  if (isError) {
    return <>Error...</>
  }

  return (
    <div className={styles.tickerWrap}>
      <div className={isTickerActive ? styles.ticker : styles.stoppedTiker}>
        <div className={styles.tickerItem}>{data.articles && data.articles.map((news: News) => news.title)}
        </div>
      </div>
    </div>
  )
}



const Main = () => {
  const [isTickerActive, setTickerActive] = React.useState(true)

    

  return (
    <Context.Provider value={{isTickerActive, setTickerActive}}>
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