/* eslint-disable camelcase */
import { Card as CardBootstrap, Col } from 'react-bootstrap'
import { formInitialValues } from '@/models/formTypes'
import { firstLetterUppercase } from '@/utils'
import { faker } from '@faker-js/faker'

interface CardProps {
  data: formInitialValues
}
export default function Card ({ data }: CardProps) {
  const { birth_date, country_of_origin, email, full_name } = data
  const date = new Date(birth_date)
  const age = new Date().getFullYear() - date.getFullYear()
  return (
    <CardBootstrap
      as={Col} sm={12} md={5} lg={4}
      className='my-3 mx-2 px-0'
    >

      <CardBootstrap.Header>
        <CardBootstrap.Title>{full_name}</CardBootstrap.Title>
      </CardBootstrap.Header>

      <CardBootstrap.Body>
        <CardBootstrap.Text>
          <strong>Fecha de nacimiento:</strong> {birth_date}
        </CardBootstrap.Text>
        <CardBootstrap.Text>
          <strong>Edad:</strong> {age}
        </CardBootstrap.Text>
        <CardBootstrap.Text>
          <strong>Pais de origen:</strong> {firstLetterUppercase(country_of_origin)}
        </CardBootstrap.Text>
        <CardBootstrap.Text>
          <strong>Correo electrónico:</strong> <a href={`mailto:${email}`}> {email}</a>
        </CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
  )
}
