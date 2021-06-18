import * as Yup from 'yup';

const TITLE_MINLENGTH = 5;
const TITLE_MAXLENGTH = 20;

export default Yup.object().shape({
    title: Yup
        .string()
        .min(TITLE_MINLENGTH, `O mínimo de caracteres é ${TITLE_MINLENGTH}`)
        .max(TITLE_MAXLENGTH, `O máximo de caracteres é ${TITLE_MAXLENGTH}`)
        .required('O título é obrigatório'),
});