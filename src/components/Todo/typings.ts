interface Todo {
  id: number;
  name: string;
  done: Boolean;
};

interface TodoProps {
  todo: Todo;
  onRemove: Function;
  onToggle: Function;
};

export { Todo as ITodo, TodoProps };