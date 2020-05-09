<template>
  <v-app>
    <TodoForm />
    <TodoList />
  </v-app>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoList, TodoForm }
}
</script>
