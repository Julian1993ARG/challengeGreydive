import { faker } from '@faker-js/faker'
/**
 * @description - Generate a random name with date and random number
 * @returns {string} - date--randomNumber
 * @example - 2021/1/1--12345
 */
const randomName = (): string => {
  const today = new Date()
  const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()
  const randonNumber = faker.random.numeric(5)
  return `${date}--${randonNumber}`
}

export default randomName
