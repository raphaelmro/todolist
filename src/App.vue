<template>
  <div>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoList, TodoForm }
}
</script>
