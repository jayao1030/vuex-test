import axios from 'axios'

const state = {
  todos: [
  ]
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
   commit('SETTODOS', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
    commit('NEWTODO', res.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    commit('REMOVETODO', id)
  }
}

const mutations = {
  SETTODOS: (state, todos) => (state.todos = todos),
  NEWTODO: (state, newTodo) => (state.todos.unshift(newTodo)),
  REMOVETODO: (state, id) => state.todos = state.todos.filter(item => item.id !== id)

}

export default {
  state,
  getters,
  actions,
  mutations
}