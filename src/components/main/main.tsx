import React, { useEffect } from 'react'
import Dashboard from '../days/dashboard'
import SideBar from '../ui-custom/customSideBar'
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query'
import { fetchNews } from '../fetchers/news'

import styles from './styles.module.scss';

let WithReactQuery = () => {
  const { isError, isLoading, data } = useQuery(['news'], fetchNews, { staleTime: 60000 })

  if (isLoading) {
    // console.log('Loading')
    return <>Loading...</>
  }
  if (isError) {
    // console.log('error')
    return <>Error...</>
  }

  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        <div className={styles.tickerItem}>{data.articles && data.articles.map((news: any) => news.title)}
        </div>
      </div>
    </div>
  )
}


const Main = () => {
  return (
    <Grid container spacing={2}>
       <div className={styles.main}>
      <div className={styles.header}>
        <SideBar />
      </div>
      <Dashboard />
      {WithReactQuery()}
      </div>
    </Grid>
  );
};

export default Main;