import react from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDHT = Dimensions.get('window').width
const ITEM_WIDHT = SLIDER_WIDHT * 0.88

type Props = {
    item: {
        imgUrl: string
    }
    index: number
}

const carouselItems = [
    {
        imgUrl:
        'https://media.gazetadopovo.com.br/2021/07/05161854/SIERRA-7_varandas_revisado-img_01-960x540.jpg'
    },
    {
        imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEtobwDlKBK4TJmy2tnley4At_dMZ7TfXeWPC5-HmbejCm29F5qaMRRxc2XR-nLzSFSM&usqp=CAU'
    },
    {
        imgUrl:
        'https://bendittamarcenaria.com.br/wp-content/uploads/2021/11/BendittaMarcenaria-Apto-AdoroDesign-0038-8219-1024x683.jpg'
    },
]

function carouselCardItem({item, index}: Props){

    return(
        <View style={styles.cardCarousel} key={index}>
            <Image style={styles.image} source={{ uri: item.imgUrl}} />
        </View>
    )
}

export function Carou(){
    return (
        <View style={styles.container}>
            <Carousel 
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={SLIDER_WIDHT}
                itemWidth={ITEM_WIDHT}
                useScrollView={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cardCarousel: {
        width: ITEM_WIDHT
    },
    image: {
        height: 250,
        borderRadius: 10,
    }
})