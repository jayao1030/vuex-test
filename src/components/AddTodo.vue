<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="handleSubmit">
      <input
        type="text"
        v-model="title"
        placeholder="Add todo.."
        >
        <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
    }
  }
}
</script>

<style lang="sass" scoped>
form
  display: flex

input[type="text"]
  flex: 10
  padding: 10px
  border: 1px solid #41b883
  outline: 0

input[type="submit"]
  flex: 2
  background:#41b883
  padding: 10px
  color: #fff
  border: 1px solid #41b883
  cursor: pointer
</style>