export interface formInitialValues {
  full_name: string
  email: string
  birth_date: string
  country_of_origin: string
  terms_and_conditions: string
}

const initialFormValues: formInitialValues = {
  full_name: '',
  email: '',
  birth_date: '',
  country_of_origin: '',
  terms_and_conditions: 'false',
}

export default initialFormValues
