import { Container, Card as CardBootstrap, Row } from 'react-bootstrap'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'
import { AsDataExel, Card, ByCountriesData } from './components'
import { useEffect, useState } from 'react'
import { formInitialValues } from '@/models/formTypes'
import { Link } from 'react-router-dom'

export default function Results () {
  const [data, setData] = useState<formInitialValues[]>([])
  const [arrayCountries, setArrayCountries] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const data: any = querySnapshot.docs.map(doc => doc.data())

      const orderData:formInitialValues[] = data.map((item: formInitialValues) => { return { terms_and_conditions: item.terms_and_conditions, email: item.email, full_name: item.full_name, birth_date: item.birth_date, country_of_origin: item.country_of_origin } })

      const countries = orderData.map((item: formInitialValues) => item.country_of_origin)
      setArrayCountries(countries)
      setData(orderData)
      setLoading(false)
    }
    getData()
  }, [])
  if (loading) return (<h1>Loading...</h1>)
  return (
    <Container>
      <CardBootstrap className='mb-3'>

        <CardBootstrap.Header>
          <CardBootstrap.Title>Resultados</CardBootstrap.Title>
        </CardBootstrap.Header>

        <CardBootstrap.Body>
          <Row className='mx-0 px-0 justify-content-center'>

            {
            data.map((item: formInitialValues, index: number) => {
              return <Card key={index} data={item} />
            })
          }
            <ByCountriesData data={arrayCountries} />
          </Row>
        </CardBootstrap.Body>

        <CardBootstrap.Footer>
          <AsDataExel data={data} />
          <Link className='ms-5' to='/'>Volver al inicio</Link>
        </CardBootstrap.Footer>

      </CardBootstrap>
    </Container>
  )
}
