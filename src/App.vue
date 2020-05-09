<template>
  <div>
    <label>
      <input placeholder="Insert a task" v-model="task" type="text" />
    </label>
    <button @click.prevent="insertTask">Add</button>
    <br />
    <ul v-for="task in todoList" :key="task.id">
      <li
        :class="{ 'completed-task': task.completed }"
        :id="task.id"
        @click="completeTask"
      >
        {{ task.description }}
      </li>
    </ul>
    <span class="errorMessage" v-if="errorMessage">Insert a task!</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      task: '',
      errorMessage: false,
      id: null
    }
  },
  computed: {
    ...mapState(['todoList'])
  },
  methods: {
    insertTask() {
      if (this.task.length !== 0) {
        this.errorMessage = false
        this.$store.dispatch('insertTask', {
          id: this.id + 1,
          description: this.task,
          completed: false
        })
        this.id = this.id + 1
        this.task = ''
      } else {
        this.errorMessage = !this.errorMessage
      }
    },
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

.errorMessage {
  color: red;
}
</style>
