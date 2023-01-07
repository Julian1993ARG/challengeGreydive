import { faker } from '@faker-js/faker'
import { formInitialValues } from '@/models/formTypes'
import { db } from '@/config/firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const createRandomUsers = (count: number): formInitialValues[] => {
  const users: formInitialValues[] = []
  for (let i = 0; i < count; i++) {
    users.push({
      full_name: faker.name.fullName(),
      email: faker.internet.email(),
      birth_date: faker.date.past(18).toISOString().split('T')[0],
      country_of_origin: faker.address.country(),
      terms_and_conditions: 'true',
    })
  }
  return users
}

const uploadRandomUsers = async (count: number) => {
  const existingUsers = await getDocs(collection(db, 'users'))
  if (existingUsers.size !== 0) return
  const users = createRandomUsers(count)
  const promisesUsers = users.map(async (user) => addDoc(collection(db, 'users'), user))
  // Promise.all(promisesUsers)
}

export default uploadRandomUsers
