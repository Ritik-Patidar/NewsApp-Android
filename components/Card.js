import React, { useCallback , useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable , Dimensions, Linking, Alert, ActivityIndicator } from 'react-native';
import tw from 'twrnc';
import {format} from 'date-fns';
import Loader from './loader/Loader' ;

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


const Card = (props) => {
    const { source, author, title, content, urlToImage , url, publishedAt} = props.item ;
    
    const [imgLoading , setImgLoading ] = useState(false);

    const openLink = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (



        <View
            style={{
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                paddingHorizontal: 20,
                paddingVertical: 25,
                position: 'absolute',
            }}
        >
            <View style={tw.style(`rounded-2xl h-full`, styles.card)} >
                {
                    !urlToImage ? (
                        <View style={tw.style(`h-50 rounded-2xl flex flex-row items-center justify-center`,{backgroundColor:"#353941"})} ><Text style={tw.style(`text-gray-500 text-lg`)} >No Image To Preview</Text></View>
                    ):(
                        <View style={tw.style(`w-full h-50 `)} >
                            {
                                imgLoading ? (
                                    <View style={tw.style(``,{ flex:1, alignItems: 'center',justifyContent: 'center'})} ><Loader /></View>
                                ):(null)
                            }
                            <Image onLoadStart={() => setImgLoading(true)} onLoadEnd={() => setImgLoading(false)} source={{ uri: urlToImage }} style={tw.style(`${!imgLoading ? "h-full w-full ": ""} rounded-t-2xl rounded-b-lg`)} />
                        </View>
                    )
                }
                <Pressable onPress={openLink} >
                    <Text style={tw.style(`text-white text-xl py-5 px-4`)} >{title}</Text>
                </Pressable> 
                <Text style={tw.style(`text-gray-300 text-base px-4`)} >{content}</Text>
                <Text style={tw.style(`text-gray-500 text-xs px-4 pt-5`)} >News by {!author ? "Unknown" : author}</Text>
                <Text style={tw.style(`text-gray-500 text-xs px-4 pt-2`)} >{!publishedAt ? "" : `Published At : ${format(new Date(publishedAt), 'd,LLLL Y h:m b')}`}</Text>
                {/* <Text style={tw.style(`text-gray-500 text-xs px-4 pt-2`)} >Published At {!publishedAt ? "Unknown" : publishedAt}</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#26282B"
    }
})

export default Card;