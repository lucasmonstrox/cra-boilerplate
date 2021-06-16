export interface Todo {
  title: string;
  done: Boolean;
}

export interface TodoProps {
  id: number;
  todo: Todo;
  onRemove: Function;
  onToggle: Function;
}
