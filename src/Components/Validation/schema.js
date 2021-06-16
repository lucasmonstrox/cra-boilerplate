import * as Yup from 'yup'


export default Yup.object().shape({
    title: Yup
        .string()
        .min(5, 'O mínimo de caracter é 5')
        .max(10, 'O máximo de caracter é 10')
        .required('O título é obrigatório'),
})