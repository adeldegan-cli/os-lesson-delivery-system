import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import AnswerButton from './AnswerButton';
import { colors } from '../config/colors';

const QuestionResultCard = ({ questionData }) => {
  // const isUserCorrect = questionData.chosenAnswer === questionData.correct;

  return (
    <Card mode='contained' style={{ backgroundColor: 'white' }}>
      <Card.Title
        title={`Question ${questionData.questionNumber}`}
        titleStyle={localStyles.titleStyle}
        subtitleStyle={localStyles.subtitleStyle}
      />
      <Card.Content>
        <View style={{ marginVertical: 20 }}>
          <Text>{questionData.prompt}</Text>
        </View>
        {questionData.shuffledArray.map((item, index) => {
          const isUserCorrect =
            questionData.chosenAnswer === questionData.correct;
          const isChosenAnswer = item === questionData.chosenAnswer;

          let buttonColor = colors.lightGrey;

          if (isChosenAnswer) {
            buttonColor = isUserCorrect ? colors.lightBlue : colors.red;
          }

          return (
            <AnswerButton
              key={index}
              buttonColor={buttonColor}
              textColor={colors.black}
              content={item}
              onPress={() => {}}
            />
          );
        })}
      </Card.Content>
    </Card>
  );
};

export default QuestionResultCard;

const localStyles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    letterSpacing: 1,
    color: colors.green,
    fontWeight: '600',
    lineHeight: 24,
    height: 24
  },
  subtitleStyle: {
    fontFamily: 'Poppins',
    fontSize: 12,
    letterSpacing: 1,
    color: colors.black,
    fontWeight: '400',
    lineHeight: 18,
    height: 33,
    flexWrap: 'wrap'
  }
});
