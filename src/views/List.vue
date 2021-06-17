<template>
  <div>
    <Form placeholder="Assignee" @addTodo="addTodo" />
    <List :todos="todos" @completed="changeStatusById"></List>
  </div>
</template>

<script>
import List from '@/components/pages/list/List.vue';
import Form from '@/components/pages/list/Form.vue';

const mockData = [
  {
    id: 1,
    assignee: 'Alice Adams',
    title: 'Walk the dog',
    description: 'avoid 23rd street, barks too much',
    isCompleted: true,
  },
  {
    id: 2,
    assignee: 'Eric May',
    title: 'Walk the dog',
    description: 'avoid 23rd street, barks too much',
    isCompleted: false,
  },
  {
    id: 3,
    assignee: 'Fabian Watson',
    title: 'Walk the dog',
    description: 'avoid 23rd street, barks too much',
    isCompleted: false,
  },
];

export default {
  name: 'Home',
  components: {
    List,
    Form,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.todos = mockData;
  },
  methods: {
    addTodo(newTodo) {
      const maxId = Math.max.apply(
        null,
        this.todos.map(todo => todo.id),
      );

      this.todos = [...this.todos, { ...newTodo, id: maxId + 1 }];
    },
    changeStatusById({ id, value }) {
      this.todos = this.todos.map(todo => {
        if (todo.id !== id) return todo;
        return { ...todo, isCompleted: value };
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
