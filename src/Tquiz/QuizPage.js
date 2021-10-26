
import React,{useState, useEffect} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  document

  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from "react-native-confetti-cannon";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BASE_URL = "https://techquiz-api.herokuapp.com"


export default function QuizPage({navigation}) {
  const language = navigation.getParam('language')
  const difficulty = navigation.getParam('difficulty')
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [token, setToken] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState({});
    
  const STORAGE_KEY = '@save_token'

 
  useEffect(()=> {
    fetch(
      `${BASE_URL}/question/${language}/${difficulty}?skip=${Math.round(Math.random()*20)}` 
    )
      .then((response) => response.json())
      .then((json) => {
        setQuestions(json)
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error("error with questions",error);
      })
      .finally(setLoading(false));
 
  
  },[])
    
function getNextQuestion(){
  setIndex(() => index + 1)
}

function updateScores(){
  try{

  
  fetch(`${BASE_URL}/user/score?score=${score}`, {
      method: "PATCH",  
      headers: {"Authorization" : `Bearer ${token}`},  
      }).then(response => {
              return response.json();  
            }).then(data => alert('score has been added to the leaderboard'))
            .catch((error) => alert(e))

          }catch(e){
            alert(e)
          }
            
}

const readData = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEY)

    if (token !== null) {
      setToken(token)
    }

  } catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

useEffect(()=> {
    readData();
},[])



return (
  

  <View style={styles.container}>

    {questions && questions[index] && index < 10 ?
    
      
              

<View style={{ padding: 16 }}>
<ScrollView>
       <Text style={styles.QuestionSection}
        >
          {`${index + 1} - ${questions[index].question}`}
        </Text>
        {[
          questions[index].option1, 
          questions[index].option2,
          questions[index].option3,
          questions[index].option4
    ].map((option) => (
          <TouchableOpacity style={styles.AnswerSection}
            key = {option}
            onPress={() => {
              if(option === questions[index].answer) setScore(()=> score + 1)
              getNextQuestion()
            }}
          >
            <Text style={styles.optionButton} key={option}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>



            :
            <View>
              {index>=10 && !showScore ?
              <View style={styles.showScoreButton}>
                <TouchableOpacity style={styles.AnswerSection}
            
            onPress={() => {
              setShowScore(true)
            }}
          >
            <Button style={{margin: 160}} title="Show Score" onPress={() => {updateScores();setShowScore(true)}} />
          </TouchableOpacity>
             
             </View>
             : 
              <View style={styles.showScoreButton}>
             <Text style={{color:"white", fontSize:50}}>Final Score</Text>
                   <Text style={{fontSize:50, color: 'black', backgroundColor:"#fff", padding:10, borderRadius:5}}>
                    {showScore ? score + "/10" : ""}
                   </Text>
                   <TouchableOpacity
                      style={styles.button} 
                     onPress={() => {navigation.navigate("Home")}}
                   >
                     <FontAwesome5 name={'door-open'} color={'black'} size={30} />
                     <Text style={{fontSize:20, color:'white'}}>Home</Text>
                   </TouchableOpacity>
              </View>
              }
              
              </View>
 }
    </View>
      

)
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#36485f",
    borderRadius: 15,
    alignItems: "stretch",
    alignContent:"space-between",
    flex: 1,
  },
  QuestionSection: {
    marginVertical: 20,
    width: '100%',
    color: "white",
    fontSize: 20, 
  },
  QuestionCount: {
    marginBottom: 20,
    alignItems: "stretch",

    color: "#fff",
  },
  QuestionText: {
    marginBottom: 12,
    padding: 20,
  },
  noOfQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    alignContent: "stretch",
    alignItems: "stretch",
  },
  AnswerSection: {
    width: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
    color:"white"
  },
  ScoreSection: {
    fontSize: 50,
    alignItems: "center",
    color: "#fff",
    padding: 40,
  },
  button: {
    backgroundColor: "#59cbbd",
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 30,
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#F3E5AB",
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  showScoreButton: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  }
});

