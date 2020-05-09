<template>
  <v-list v-if="todoListLength !== 0" width="300" class="mx-auto mt-5">
    <v-subheader>My Tasks</v-subheader>
    <v-list-item v-for="task in todoList" :key="task.id">
      <v-list-item-content>
        <v-list-item-title
          :id="task.id"
          :class="{ 'completed-task': task.completed }"
          @click="completeTask"
          v-html="task.description"
        ></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'TodoList',

  computed: {
    ...mapState(['todoList']),
    completedTasks() {
      return this.$store.getters.completedTasks
    },
    todoListLength() {
      return this.$store.getters.getTodoListLength
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
.completed-task {
  text-decoration: line-through;
}
</style>
