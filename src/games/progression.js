import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const getRoundData = () => {
  const start = getRandomInt(1, 50)
  const step = getRandomInt(1, 10)
  const length = getRandomInt(5, 10)
  const hiddenIndex = getRandomInt(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)
