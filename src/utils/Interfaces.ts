export interface TaskInterface {
  title: string;
  done: Boolean;
}

export interface TaskProps extends TaskInterface {
  id: number;
  removeTask: Function;
  changeStatus: Function;
}
