import { Form, Row, Col, Card, FloatingLabel, Button, Container } from 'react-bootstrap'
import { useFormik } from 'formik'
import { formTypes } from '@/models'
import { arrayCountries, validateSchemaForm, removeLocalStorage, setLocalStorage } from '@/utils'
import { db } from '@/config/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function FormCreate () {
  const navigate = useNavigate()
  const { values, handleChange, handleBlur, errors, isSubmitting, handleSubmit, touched } = useFormik({
    initialValues: formTypes,
    validationSchema: validateSchemaForm,
    onSubmit: async (values, { resetForm }) => {
      try {
        const docRef = await addDoc(collection(db, 'users'), values)
        console.log('Document written with ID: ', docRef.id)
        resetForm()
        removeLocalStorage('formValues')
        Swal.fire({
          icon: 'success',
          title: '¡Bien hecho!',
          text: 'Tu formulario se ha enviado correctamente',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          didClose: () => {
            navigate('/results')
          },
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intenta de nuevo',
        })
      }
    },
  })
  useEffect(() => { if (values)setLocalStorage('formValues', values) }, [values])
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
                    isInvalid={touched.full_name && !!errors.full_name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.full_name}
                  </Form.Control.Feedback>
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
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
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
                    isInvalid={touched.birth_date && !!errors.birth_date}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.birth_date}
                  </Form.Control.Feedback>

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
                    isInvalid={touched.country_of_origin && !!errors.country_of_origin}
                  >
                    <option value=''>Selecciona un país</option>
                    {arrayCountries.map((country, index) => (
                      <option key={index} value={country.value}>{country.label}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>
                    {errors.country_of_origin}
                  </Form.Control.Feedback>
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
                  isInvalid={touched.terms_and_conditions && !!errors.terms_and_conditions}
                  className='d-flex justify-content-center gap-2'
                  checked={!!values.terms_and_conditions}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.terms_and_conditions}
                </Form.Control.Feedback>
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
      <Link to='/results'> Resultados</Link>
    </Container>
  )
}
