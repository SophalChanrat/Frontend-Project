import React from 'react'
import { Nav_setting } from '../Components/navigation-bar/Nav_setting';
import { Footer } from '../Components/footer/Footer';
import WatchListCom from '../Components/watchList/WatchlistCom'
import { useUser } from '../Components/context/UserProvider';

export const WatchList = () => {
  const { user } = useUser();
  
  // Get user's watchlist or show empty array if no user/no watchlist
  const userWatchlist = user?.watchlist || [];

  return (
    <>
      <Nav_setting />
      <WatchListCom 
        title={user ? `${user.username}'s Watchlist` : "Watchlist"} 
        movies={userWatchlist} 
      />
      <Footer />
    </>
  )
}
