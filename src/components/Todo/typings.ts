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

export type { Todo, TodoProps };