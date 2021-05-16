import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl
} from 'react-native';


import { MyTextInput } from '../../Components/Component';
import * as Font from '../../Utils/Typography';
import IconStar from 'react-native-vector-icons/Entypo';


const AdminHome = ({ navigation }) => {

const [restaurants, setRestaurants] = useState([]);
const [searchBrand, setSearchBrand] = useState('');
const [isLoading, setLoading] = useState(false);
const [refreshing, setRefreshing] = useState(false);

useEffect(() => {

    getDatas();
  
  }, [searchBrand]);


const getDatas = async()  =>{

  let records=[];

  setLoading(true);

  try {

await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json', { 
  method: 'GET',
    headers: {
      Accept: 'application/json',
      contentType: 'application/json',
    }
})

    .then(response =>  response.json()  )
     .then(responseJson => {

       responseJson.forEach((noodleRoless)=>{

        if (noodleRoless.Brand.toLowerCase().indexOf(searchBrand.toLowerCase().trim()) !== -1) {

            records.push(noodleRoless);

            setLoading(false);

        }
          })

          setRestaurants(records);  
  });
    } catch (error) {
      console.log('Fetch error: ', error);
    }
}


const onRefresh = () => {
 
  getDatas();

};



  const  goToItsDetails  = (res) =>{

  var brand = res.Brand
  var variety = res.Variety
  var style = res.Style
  var country = res.Country
  var stars = res.Stars
 

  navigation.navigate('NoodlesDetails', {

    brand,
    variety,
    style,
    country,
    stars,

  });

  }


  return (

    <ScrollView
    
    
    refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    
    >

<SafeAreaView style={{ flex: 1 ,alignItems:'center'}}>
   <View
   
   style={{

    width:'100%',
    backgroundColor:'#800000',
    height:75,
    alignItems:'center',
    justifyContent:'center'

   }}
   
   
   >

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
        
      }}
       >

        wide variety of noodles
           </Text>


       </View>
       



<View


style={{

    paddingTop:20,
    width:'90%'
}}
>
       <MyTextInput
                        placeholder="Search Brand... "
                        onChangeText={(text) => setSearchBrand(text)}
                        // style={{ paddingHorizontal: 10, }}
                        
                        
                        />


                        </View>



                        {isLoading ? (
            <ActivityIndicator  color="#0000ff"  />)  :  (<>





<View
       
       style={{

        width:'90%',
        marginTop:45,
        flexDirection:'row',
        flexWrap:'wrap',
        // backgroundColor:'yellow',
        justifyContent:'space-around',
        marginBottom:30


       }}
       >


{
          restaurants.map((res, index) => 


          <TouchableOpacity
           
          style={{

           width:'45%',
           marginBottom:45,
       
          }}

          onPress={()=>goToItsDetails(res)}
          
          >


<Image
                     style={{
                       width: '100%',
                       height: 200,
                       resizeMode: 'cover',
                       borderRadius:8
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
           borderTopColor:'#FFFFFF'
          }}
          >         


        <View
        
        
        style={{

           paddingTop:15,
           width:'100%',
           // backgroundColor:'yellow',
           alignItems:'center'
             
        }}>

            <Text
            
            style={{
               color: "black",
               fontSize: 20,


               fontFamily: Font.FF_LATO_BOLD,
               fontWeight:'500',
               fontStyle:'normal',
               
             }}
            >

            {res.Brand}

                </Text>


            </View>

            <View
        
        
        style={{

           paddingTop:15,
           alignItems:'center'
        }}>

            <Text
            
            style={{
               color: "black",
               fontSize: 12,
               textAlign:'center',

               fontFamily: Font.FF_LATO_MEDIUM,
               fontWeight:'400',
               fontStyle:'normal',
               
             }}
            >

{res.Variety}

                </Text>


            </View>



     <View
     
     style={{

        flexDirection:'row',
        justifyContent:'center',
        paddingTop:10
     }}
     
     >

{res.Stars ===  5  ?  (<>



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
      </View>
              </TouchableOpacity>
          )}

           </View>
            
            </>)}


           </SafeAreaView>
       
       </ScrollView>
  );
};

export default AdminHome;
