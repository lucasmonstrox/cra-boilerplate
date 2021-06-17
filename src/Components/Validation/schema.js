import * as Yup from 'yup'

export default Yup.object().shape({
    title: Yup
        .string()
        .min(5, 'O mínimo de caracter é 5')
        .max(20, 'O máximo de caracter é 20')
        .required('O título é obrigatório'),
})