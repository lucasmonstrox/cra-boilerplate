import * as Yup from 'yup';
import {
  MIN_TODO_LENGTH,
  MAX_TODO_LENGTH
} from './globalVariables';

export default Yup.object().shape({
  todoName: Yup
  .string()
  .min(MIN_TODO_LENGTH, `Digite ao menos ${MIN_TODO_LENGTH} caracteres`)
  .max(MAX_TODO_LENGTH, `Digite até ${MAX_TODO_LENGTH} caracteres`)
  .required('O campo não pode estar vazio'),
});
