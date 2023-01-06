import { Form, Row, Col, Card, FloatingLabel, Button, Container } from 'react-bootstrap'
import { useFormik } from 'formik'
import { formTypes } from '@/models'
import { arrayCountries } from '@/utils'
import { db } from '@/config/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function FormCreate () {
  const { values, handleChange, handleBlur, errors, isSubmitting, handleSubmit } = useFormik({
    initialValues: formTypes,
    onSubmit: async (values, { resetForm }) => {
      try {
        const docRef = await addDoc(collection(db, 'users'), values)
        console.log('Document written with ID: ', docRef.id)
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <Container>
      <Card className='mx-2 my-2'>
        <Card.Header>
          <Card.Title>
            Completa el Formulario
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Aqui va el motivo del formulario, el porque de llenarlo, etc.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nunc non nisl aliquet, nec ultricies nisl aliquet. Nullam auctor
            tincidunt nisl, nec ultricies nisl aliquet. Nullam auctor tincidunt
          </Card.Text>
        </Card.Body>
        <Card.Footer>

          <Form
            onSubmit={handleSubmit}
          >
            <Row>
              <Form.Group as={Col} sm={12} md={6}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Nombre completo'
                  className='mb-3'
                >
                  <Form.Control
                    required
                    type='text'
                    name='full_name'
                    value={values.full_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.full_name}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Correo electrónico'
                  className='mb-3'
                >
                  <Form.Control
                    required
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Fecha de nacimiento'
                  className='mb-3'
                >
                  <Form.Control
                    required
                    type='date'
                    name='birth_date'
                    value={values.birth_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.birth_date}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='¿Cuál es tu país de origen?'
                  className='mb-3'
                >
                  <Form.Select
                    required
                    name='country_of_origin'
                    value={values.country_of_origin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.country_of_origin}
                  >
                    <option value=''>Selecciona un país</option>
                    {arrayCountries.map((country, index) => (
                      <option key={index} value={country.value}>{country.label}</option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} sm={12} md={6}>

                <Form.Check
                  type='checkbox'
                  label='¿Acepta los términos y condiciones?'
                  required
                  name='terms_and_conditions'
                  value={values.terms_and_conditions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.terms_and_conditions}
                  className='d-flex justify-content-center gap-2'
                />

              </Form.Group>
              <Col
                sm={12}
                md={6}
                className='my-2 mx-auto'
              >
                <Button
                  className='w-100'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Col>
            </Row>

          </Form>
        </Card.Footer>
      </Card>
    </Container>
  )
}
