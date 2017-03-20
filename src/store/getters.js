export default{
  doneTodos (state) {
    return state.todos.filter(todo => todo.done)
  },
  importTodos (state) {
    return state.todos.filter(todo => todo.text.match('1'))
  },
  doneTodosNum (state) {
    return (state, getters) => getters.doneTodos.length
  }
}
