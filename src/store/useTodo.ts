import { defineStore } from 'pinia';

interface ITodo {
  text: string;
  id: number;
  isFinished: boolean;
}
interface ITodoState {
  todo: Array<ITodo>;
  filter: 'all' | 'finished' | 'unfinished';
  nextId: number;
}

interface ITodoGetters {}

export const useTodo = defineStore<string, ITodoState>('todo', {
  state() {
    return {
      todo: [],
      filter: 'all',
      nextId: 0,
    };
  },
  getters: {
    finishedTodo(state) {
      return state.todo.filter((item) => item.isFinished);
    },
    unfinishedTodo(state) {
      return state.todo.filter((item) => !item.isFinished);
    },
    filteredTodo(state) {
      if (this.filter === 'finished') {
        return this.finishedTodo;
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodo;
      }
      return this.todo;
    },
  },
  actions: {
    addTodo(text: string) {
      this.todo.push({ text, id: this.nextId++, isFinished: false });
    },
  },
});
