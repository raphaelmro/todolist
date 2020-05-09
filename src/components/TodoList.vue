<template>
  <div>
    <ul v-for="task in todoList" :key="task.id">
      <li
        :class="{ 'completed-task': task.completed }"
        :id="task.id"
        @click="completeTask"
      >
        {{ task.description }}
      </li>
    </ul>
    <span class="errorMessage" v-if="errorMessage.length > 0">
      {{ errorMessage }}
    </span>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'TodoList',

  computed: {
    ...mapState(['todoList', 'errorMessage']),
    completedTasks() {
      return this.$store.getters.completedTasks
    }
  },
  methods: {
    completeTask() {
      const taskId = parseInt(event.target.id)
      this.$store.dispatch('completeTask', taskId)
    }
  }
}
</script>
<style scoped>
.errorMessage {
  color: red;
}
.completed-task {
  text-decoration: line-through;
}
</style>
