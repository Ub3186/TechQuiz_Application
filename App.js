import React from 'react';
import Navigator from './routes/drawer';
import { LogBox } from 'react-native'
import QuizLevel from './src/Tquiz/QuizLevel';
import QuizPage from './src/Tquiz/QuizPage';
import Quiz from './src/Tquiz/QuizPage';

LogBox.ignoreAllLogs()
export default function App() {
  return (
    <Navigator />
  );
}