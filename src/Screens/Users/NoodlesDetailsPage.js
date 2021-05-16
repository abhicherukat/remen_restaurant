import React, {useEffect, useState,useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

import IconsBack from 'react-native-vector-icons/AntDesign';
import * as Font from '../../Utils/Typography';
import IconStar from 'react-native-vector-icons/Entypo';




const Login = ({ navigation, route}) => { 



    const { brand } = route.params;
    const { variety } = route.params;
    const { style } = route.params;
    const { country } = route.params;
    const { stars } = route.params;
  

    const [showBrand] = useState(brand);
    const [showVariety ] = useState(variety);
    const [ showStyle ] = useState(style);
    const [ showCountry ] = useState(country);
    const [ showStars ] = useState(stars);  


  const  backToHome  = () =>{

    navigation.navigate('Home');

  }



  return (

    <>


<ScrollView>

<SafeAreaView style={{ flex: 1 ,alignItems:'center'}}>
<View  style={styles.mainHeader}>
 
 <View
 style={{

  width:'90%',
  height:24,
  flexDirection:'row',
  justifyContent:'space-between',
  
 }}
 >


<TouchableOpacity

onPress={backToHome}
>

       <IconsBack
    name={'arrowleft'}
    style={{paddingTop:0,color:'#FFFFFF'}}
    size={30}
  />
       </TouchableOpacity>


       <View>
       <Text
       
       style={{
        color: "#FFFFFF",
        fontSize: 20,

        fontFamily: Font.FF_LATO_BOLD,
        fontWeight:'700',
        fontStyle:'normal',
        
      }}
       >

        Remen Restaurants
           </Text>

           <Text
       
       style={{
        color: "#FFFFFF",
        fontSize: 12,

        fontFamily: Font.FF_LATO_SEMIBOLD,
        fontWeight:'400',
        fontStyle:'normal',
        textAlign:'center'
        
      }}
       >

        wide variety of noodles
           </Text>

         </View>
         <View>
         <Text
         
         style={{

          fontSize: 20,
          color:'#800000',
          fontFamily: Font.FF_LATO_REGULAR,
          fontWeight:'400',
          fontStyle:'normal',
         }}>
           da
           </Text>
         </View>
             
   </View>

 </View>


  <View
  
  style={{

    width:'90%',
    alignItems:'center',
    paddingTop:25
  }}
  >

    <Text
    
    style={{
        color: "black",
        fontSize: 20,
        fontFamily: Font.FF_LATO_MEDIUM,
        fontWeight:'400',
        fontStyle:'normal',
        
      }}
    
    
    >

        Remen Restaurant - {showCountry}

        </Text>

        <Text
    
    style={{
        color: "black",
        fontSize: 12,
        fontFamily: Font.FF_LATO_MEDIUM,
        fontWeight:'400',
        fontStyle:'normal',
        
      }}
    
    
    >

     Taste Of {showCountry}

        </Text>

      </View>

       <View
       
       style={{

        width:'100%',
        marginTop:45,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginBottom:30

       }}
       >

          <View
           
          style={{

           width:'90%',
           marginBottom:45
          }}

          
          >


<Image
                     style={{
                       width: '100%',
                       height: 200,
                       resizeMode: 'cover',
                     }}
                     resizeMode="cover" 
 
 
                     source={{
                       uri: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/images135ea53.jpeg',
                     }}

                   
                   />


          <View
          
          style={{

           borderTopLeftRadius:0,
           borderTopRightRadius:0,
          }}
          >         


        <View
        
        
        style={{

           paddingTop:15,
           width:'100%',
             
        }}>

            <Text
            
            style={{
               color: "black",
               fontSize: 20,
               fontFamily: Font.FF_LATO_BOLD,
               fontWeight:'500',
               
             }}
            >

            {showBrand}

                </Text>


            </View>




            <View
     
     style={{

        flexDirection:'row',
        paddingTop:15
     }}
     
     >

{showStars ===  5  ?  (<>



   <IconStar
    name={'star'}
    style={{paddingTop:0,color:'#F2A31A'}}
    size={15}
  />
     <IconStar
    name={'star'}
    style={{paddingTop:0,color:'#F2A31A'}}
    size={15}
  />
     <IconStar
    name={'star'}
    style={{paddingTop:0,color:'#F2A31A'}}
    size={15}
  />
     <IconStar
    name={'star'}
    style={{paddingTop:0,color:'#F2A31A'}}
    size={15}
  />
     <IconStar
    name={'star'}
    style={{paddingTop:0,color:'#F2A31A'}}
    size={15}
  />


</>)  :  (<></>)}

  


         </View>
            <View
        
        
        style={{

           paddingTop:15,
           
        }}>

            <Text
            
            style={{
               color: "black",
               fontSize: 14,
               fontFamily: Font.FF_LATO_BOLD,
               fontWeight:'400',
               
             }}
            >

{showVariety}

                </Text>


            </View>


            <View
        
        
        style={{

           paddingTop:15,
        }}>

            <Text
            
            style={{
               color: "black",
               fontSize: 12,
               fontFamily: Font.FF_LATO_BOLD,
               fontWeight:'400',
               
             }}
            >

{showStyle}

                </Text>


            </View>


  
            <View
     
     style={{
        paddingTop:15
     }}
     
     >
   

    <Text
    
    style={{
        color: "#black",
        fontSize: 20,

        fontFamily: Font.FF_LATO_BOLD,
        fontWeight:'500',
        fontStyle:'normal',
        
      }}
    
    >
        About this item
        </Text>


        <Text
    
    style={{
        color: "#black",
        fontSize: 15,

        fontFamily: Font.FF_LATO_BOLD,
        fontWeight:'500',
        fontStyle:'normal',
        
      }}
    
    >
      Meeshay is a traditional noodle dish originating from Myanmar. It consists of rice noodles and a meat-based sauce (usually chicken or pork), along with an array of toppings. ... There are several versions of meeshay, but the two main versions are Shan or Mogok meeshay and Mandalay meeshay
        </Text>


         </View>
         
         
         
         </View>
              </View>

           </View>
       
       </SafeAreaView>
       
       </ScrollView>
 


</>

    );
};

export default Login;

const styles = StyleSheet.create({

  pendingCircle:{

    height :10 ,
    width :10,
    borderRadius: 10/2,
    backgroundColor:'#FF8A00'
  },
  mainHeader:{

    width:'100%',
    backgroundColor:'#800000',
    paddingTop:20,
    paddingBottom:24,
    alignItems:'center'
  },
    
});
