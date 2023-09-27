import * as Yup from 'yup'

export const sighupValidation = Yup.object({
    name: Yup.string().min(3).required('name!'),
    email: Yup.string().email('valid email').required('email'),
    password: Yup.string().min(5).required('password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'not match')
})