import { Card, ProgressBar, Col } from 'react-bootstrap'

interface Props {
  data: string[]
}
interface CountriesData{
  countryName: string
  countryCount: number
  countryPercentage: number
}

export default function ByCountriesData ({ data }:Props) {
  const countries = data.reduce((acc: any, item: string) => {
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item] += 1
    }
    return acc
  }, {})
  const totalCountries = data.length
  const countriesData: CountriesData[] = Object.keys(countries).map((country) => {
    const countryCount = countries[country]
    const countryPercentage = (countryCount / totalCountries) * 100
    return {
      countryName: country,
      countryCount,
      countryPercentage,
    }
  })
  countriesData.sort((a, b) => b.countryCount - a.countryCount)
  return (

    <Card
      as={Col}
      sm={12} md={8} lg={8}
      className='px-0'
    >
      <Card.Header>
        <Card.Title className='user-select-none'>Grafica paises</Card.Title>
      </Card.Header>
      <Card.Body>
        {countriesData.map((countryData) => (
          <div key={countryData.countryName}>
            <div className='d-flex justify-content-between user-select-none'>
              <span className='text-uppercase fw-bold'>{countryData.countryName}</span>
              <span className='fw-bold'>{countryData.countryCount}</span>
            </div>
            <ProgressBar
              now={countryData.countryPercentage}
              label={`${countryData.countryPercentage.toFixed(1)}%`}
            />
          </div>
        ))}
      </Card.Body>
    </Card>

  )
}
