import React, { useContext } from 'react';
import style from './Home.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import {BallTriangle} from 'react-loader-spinner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import {Helmet}  from 'react-helmet'  ;

export default function Home() {
return <>
 <Helmet>
        <title>Fresh Cart Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
<MainSlider />
<CategorySlider />
<FeaturedProducts />
</>
}
