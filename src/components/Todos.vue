<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div
        v-for="todo in allTodos" :key="todo.id"
        class="todo"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Todos',
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos()
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo'])
  }

  
}
</script>

<style lang="sass" scoped>
.todos
  display: grid
  grid-template-column: repeat(3, 1fr)
  grid-gap: 1rem
.todo
  border: 1px solid #ccc
  background: #41b883
  padding: 1rem
  border-radius: 5px
  text-align: center
  position: relative
  cursor: pointer

</style>