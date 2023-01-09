import * as yup from 'yup'
import { arrayCountries } from '@/utils'

const noSpecialCharacters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
const countries = arrayCountries.map((country) => country.value)

export const validateSchemaForm = yup.object().shape({
  full_name: yup
    .string()
    .required('El nombre es requerido')
    .min(10, 'El nombre debe tener al menos 10 caracteres')
    .max(50, 'El nombre debe tener máximo 50 caracteres')
    .matches(noSpecialCharacters, 'El nombre no puede contener caracteres especiales'),
  email: yup.string().email('El email no es válido').required('El email es requerido'),
  birth_date: yup.date().required('La fecha de nacimiento es requerida')
    .max(new Date(Date.now() - 567648000000), 'Debes ser mayor de 18 años'),
  country_of_origin: yup.string().required('El país de origen es requerido').oneOf(countries),
  terms_and_conditions: yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones'),
})
