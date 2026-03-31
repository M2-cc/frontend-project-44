import runGame from '../index.js'

const isEven = number => number % 2 === 0

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getGameData = () => {
  const question = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => runGame(description, getGameData)
