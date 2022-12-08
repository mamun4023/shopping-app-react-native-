import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar,
    ScrollView,
    TouchableOpacity, 
} from "react-native"
import {colors} from '../colors';
import {Items} from '../jsondata/items';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Home({navigation}){
    const [products, setProducts] = useState([]);
    const [accessory, setAccesory] = useState([]);


    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', ()=>{
            getDataFromDB()
        })
        return()=>{
            
        }
    },[navigation])

    const getDataFromDB = ()=>{
        let productList = []
        let accesoryList = []
        for(let i = 0; i<Items.length; i++){
            if(Items[i].category == 'product'){
                productList.push(Items[i])
            }else{
                accesoryList.push(Items[i])
            }
        }

        setProducts(productList);
        setAccesory(accesoryList);

    }


    const ProductCard = ({data})=>{
        return( 
            <TouchableOpacity
                style = {{
                    width : '50%',
                    marginVertical : 14
                }}
            >
                <View
                    style = {{
                        width : '100%',
                        height : 100,
                        borderRadius : 100,
                        
                    }}
                >

                </View>
               
            </TouchableOpacity>
        )
    }


    return(
        <View style={styles.container}>
            <StatusBar  
                backgroundColor= {colors.white}
                barStyle = 'dark-content'
            />

            <ScrollView 
                showsVerticalScrollIndicator = {false}
            > 

                <View 
                    style ={{
                        width : '100%',
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                        padding : 16
                    }}
                >
                    <TouchableOpacity>
                        <Entypo
                            name = "shopping-bag"
                            style= {styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name = 'cart'
                            style= {styles.icon}
                            
                        />
                    </TouchableOpacity>

                </View>
                <View
                    style = {{
                        marginBottom : 10,
                        padding : 16,
                    }}
                >
                    <Text 
                        style = {{
                            fontSize : 26,
                            color : colors.black,
                            fontWeight : '500',
                            letterSpacing : 1,
                            marginBottom : 10,

                        }}
                    >
                        Hi-Fi Shop &amp; Service 
                    </Text>
                    <Text 
                        style = {{
                            fontSize : 14,
                            color : colors.black,
                            fontWeight : '500',
                            letterSpacing : 1,
                            marginBottom : 10,

                        }}
                    >
                        Audio shop on Rustaveli Ave 57, This shop offers both products and services
                    </Text>

                </View>

                <View 
                    style = {{
                        padding : 16
                    }}
                > 
                    <View 
                        style = {{
                            flexDirection : 'row',
                            justifyContent : 'space-between'
                        }}
                    >     
                        <View 
                            style = {{
                                flexDirection : 'row',
                                alignItems : 'center',
                                justifyContent : 'space-between'
                            }}
                        > 
                            <Text
                                style = {{
                                    fontSize : 18,
                                    color : colors.black,
                                    fontWeight : '500',
                                    letterSpacing : 1
                                }}
                            > products</Text>
                            <Text
                                style = {{
                                    fontSize : 12,
                                    color : colors.black,
                                    fontWeight : '500',
                                    opacity : 0.4,
                                    marginLeft : 10
                                }}
                            > 41 </Text>

                        </View>
                         <View> 
                            <Text> See All</Text>
                        </View>       
                        
                    </View>

                </View>
                <View>
                    {products.map(data => 
                        <ProductCard data= {data} />
                    )}
                </View>


            </ScrollView>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : colors.white
    },
    icon : {
        fontSize : 18,
        color : colors.backgroundMedium,
        padding : 10,
        borderRadius : 10,
        backgroundColor : colors.backgroundLight,
        borderWidth : 1,
        borderColor : colors.backgroundLight
    }
   
})