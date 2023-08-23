import Constants from 'expo-constants';

const ip = Constants.expoConfig.extra.IP;

export const getMultipleChoice = async (numQuestions, text) => {
  let source = { numQuestions, text };
  source = JSON.stringify(source);

  try {
    const response = await fetch(`http://${ip}:8000/questions/mc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // mode: 'no-cors',
      body: source
    });
    const json = await response.json();
    const questions = json.response.choices[0].text;

    console.log(
      '🪵 ---------------------------------------------------------------------🪵'
    );
    console.log(
      '🪵 ~ file: NewQuizScreen.jsx:77 ~ getQuestions ~ questions:',
      questions
    );
    console.log(
      '🪵 ---------------------------------------------------------------------🪵'
    );

    return questions;
  } catch (error) {
    console.error(error);
  }
};
