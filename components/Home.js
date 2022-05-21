import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import tw from 'twrnc';
import Card from './Card';
import Loader from './loader/Loader';
import Swiper from 'react-native-swiper';
import axios from 'axios';


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        return async () => {
            setLoading(true);
            try {
                const data = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=74117d0a5ab7400daf1cbbf589b611fa');
                setAllNews(data?.data?.articles);
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
            }
        }
    }, []);


    return (
        <View style={tw.style(`h-full`, styles.homeBody)}>

            {
                loading ? (
                    <Loader />
                ) : (
                    <Swiper horizontal={true} loop={false} showsPagination={false} >
                        {
                            allNews.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            })
                        }
                    </Swiper>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    homeBody: {
        backgroundColor: "#0e0f11"
    }
})

export default Home;