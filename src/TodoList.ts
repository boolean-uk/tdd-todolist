type Todo = {
  id: number;
  task: string;
  complete: boolean;
};

class TodoList {
  private currentId: number = 0;
  private _todos: Todo[] = [];

  get todos(): Todo[] {
    return this._todos;
  }

  getTodo = (id: number): Todo | string => {
    return this.findTodo(id) || `There is no todo with id: ${id}.`;
  };

  getComplete = (): Todo[] => {
    return this._todos.filter((todo) => todo.complete);
  };

  getIncomplete = (): Todo[] => {
    return this._todos.filter((todo) => !todo.complete);
  };

  setComplete = (id: number): Todo | string => {
    const foundTodo = this.findTodo(id);

    if (foundTodo) {
      foundTodo.complete = true;
    }

    return foundTodo || `There is no todo with id: ${id}.`;
  };

  createTodo = (task: string): Todo => {
    const todo = {
      id: ++this.currentId,
      task,
      complete: false,
    };
    this._todos.push(todo);

    return todo;
  };

  deleteTodo = (id: number): Todo | string => {
    const foundTodo = this.findTodo(id);

    if (foundTodo) {
      this._todos = this._todos.filter((todo) => todo !== foundTodo);
      return foundTodo;
    }

    return `There is no todo with id: ${id}.`;
  };

  private findTodo = (id: number): Todo | undefined => {
    const foundTodo = this._todos.find((todo) => todo.id === id);

    return foundTodo;
  };
}

module.exports = TodoList;
