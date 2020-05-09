<template>
  <div>
    <input placeholder="Insert a task" v-model="task" type="text" />
    <button @click.prevent="insertTask">Add</button>
    <br />
    <ul v-for="task in todoList" :key="task.id">
      <li
        :class="{ 'completed-task': task.completed }"
        :id="task.id"
        @click="completeTask"
      >{{ task.description }}</li>
    </ul>
    <span class="errorMessage" v-if="errorMessage">Insert a task!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      task: '',
      errorMessage: false,
      id: null
    }
  },
  methods: {
    insertTask() {
      if (this.task.length !== 0) {
        this.errorMessage = false
        this.todoList.push({
          id: this.id + 1,
          description: this.task,
          completed: false
        })
        this.id++
        this.task = ''
      } else {
        this.errorMessage = !this.errorMessage
      }
    },
    completeTask() {
      const taskId = parseInt(event.target.id)
      this.todoList.find(currentTask => {
        if (currentTask.id === taskId) {
          currentTask.completed = !currentTask.completed
        }
      })
    }
  }
}
</script>
<style scoped>
.completed-task {
  text-decoration: line-through;
}

.errorMessage {
  color: red;
}
</style>
