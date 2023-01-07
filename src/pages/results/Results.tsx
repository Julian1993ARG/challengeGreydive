import { doc, getDocs, collection } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'
import { AsDataExel, Card } from './components'
import { useEffect, useState } from 'react'
import { formInitialValues } from '@/models/formTypes'

export default function Results () {
  const [data, setData] = useState<formInitialValues[]>([])
  const [arrayCountries, setArrayCountries] = useState<string[]>([])
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const data: any = querySnapshot.docs.map(doc => doc.data())

      const orderData:formInitialValues[] = data.map((item: formInitialValues) => { return { terms_and_conditions: item.terms_and_conditions, email: item.email, full_name: item.full_name, birth_date: item.birth_date, country_of_origin: item.country_of_origin } })

      const countries = orderData.map((item: formInitialValues) => item.country_of_origin)
      setArrayCountries(countries)
      setData(orderData)
    }
    getData()
  }, [])
  return (
    <>
      <AsDataExel data={data} />
    </>
  )
}
