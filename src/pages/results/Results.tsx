import { doc, getDocs, collection } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'

export default function Results () {
  const handleSubmit = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
    })
  }
  return (
    <button onClick={handleSubmit}>Results</button>
  )
}
