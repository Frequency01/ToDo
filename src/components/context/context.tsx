import React from 'react'

type NewsContext = {
    isTickerActive: boolean;
    setTickerActive: React.Dispatch<React.SetStateAction<boolean>>;

}

export const Context = React.createContext<NewsContext>({ isTickerActive: true, setTickerActive: () => null })