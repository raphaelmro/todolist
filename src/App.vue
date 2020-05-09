<template>
  <div>
    <input placeholder="Insert a task" v-model="task" type="text" />
    <button @click.prevent="insertTask">Add</button>
    <ul v-for="task in todoList" :key="task.id">
      <li
        v-bind:class="{ 'completed-task': task.completed }"
        :id="task.id"
        @click="completeTask"
      >{{ task.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      task: '',
      id: null
    }
  },
  methods: {
    insertTask() {
      this.todoList.push({
        id: this.id + 1,
        description: this.task,
        completed: false
      })
      this.id++
      this.task = ''
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
</style>
