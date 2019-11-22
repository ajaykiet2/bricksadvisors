import React from 'react'

import {Banner} from '../common'
import {StepsToBuy, CardListing, CategoryListing, Subscriber} from '../widgets'
import Promotion from '../promotions/Promotion'
import SearchWidget from '../widgets/SearchWidget'

class Home extends React.Component{
  
  render(){
        let trendingProperties = {
            title: "Trending Properties",
            description: "Shop and get your favourite phone at amazing prices!",
            filters:{
              limit: 10
            }
        };
        return(
            <>
                <Banner />
                <SearchWidget />
                <StepsToBuy />
                <CardListing data={trendingProperties}/> 
                <Promotion />
                <CategoryListing />
                <Subscriber />
            </>
        )   
    }
}

export default Home;