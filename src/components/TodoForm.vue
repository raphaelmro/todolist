<template>
  <v-card width="300" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">TodoList</h1>
    </v-card-title>
    <v-card-text>
      <span class="errorMessage" v-if="errorMessage.length > 0">{{
        errorMessage
      }}</span>
      <v-form>
        <label>
          <v-text-field
            label="Insert a task"
            v-model="task"
            prepend-icon="mdi-calendar-today"
          />
        </label>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click.prevent="insertTask" color="success">Add Task</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TodoForm',
  data() {
    return {
      task: '',
      id: null
    }
  },
  computed: {
    ...mapState(['errorMessage'])
  },
  methods: {
    insertTask() {
      this.$store.dispatch('insertTask', {
        id: this.id + 1,
        description: this.task,
        completed: false
      })
      this.id = this.id + 1
      this.task = ''
    }
  }
}
</script>
<style scoped>
.errorMessage {
  color: red;
}
</style>
