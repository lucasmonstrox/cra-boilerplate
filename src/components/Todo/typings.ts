interface Todo {
  id: number;
  name: string;
  done: Boolean;
};

interface TodoProps {
  todo: Todo;
  onDelete: Function;
  onToggle: Function;
};

export type { Todo, TodoProps };