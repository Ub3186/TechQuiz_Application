import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, ScrollView,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Scoreboard({navigation}){
    const [scoreData, setScoreData] = useState([])
    const [loading, setLoading] = useState(true)
    let value = 0
    useEffect(()=> {
    fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/leaderboard/`
    )
      .then((response) => response.json())
      .then((json) => {
        setScoreData(json)
        })
      .catch((error) => {
        console.error(error);
      })
      .finally(()=> setLoading(false));
 
  
  })


    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.heading}>
                <Text style={styles.heading}>Leaderboard</Text>
            </View>
            
            <View>
            {scoreData && scoreData.map((user, index) => {
                return(
                <View style={styles.box} key={index} >
                    <Text style={{color: '#000', fontSize:16}}>
                        {user.username }
                    </Text>
                    <Text style={{color: '#000', fontSize:16}}>
                        {user.score}
                    </Text>
                </View>
                )
            })}  
            </View> 
        </ScrollView>
        </View>   
    
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        paddingTop: 50,
        flexDirection: 'column', 
    },

    scroll: {
        height: '100%',
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0
    },
    box: {
        width: 300,
        height: 30,
        padding: 20,
        color: 'black',
        marginTop: 10,
        marginLeft:50,
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    heading: {
        color: "white",
        fontSize: 42,
        lineHeight: 30,
        margin: 10,
        fontWeight: "bold",
        justifyContent: 'center',
        alignContent: "center",
        padding: 20,
        textAlign:'center'
    }
});
