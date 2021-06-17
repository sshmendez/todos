<template>
  <div class="px-8 py-4">
    <div class="bg-white border border-gray-300 shadow rounded-lg p-6">
      <div class="">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Add a Todo</h3>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="mt-5">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <Input v-model="assignee" placeholder="Assignee" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <Input v-model="title" placeholder="Title" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <Input v-model="description" placeholder="Description" />
            </div>
          </div>
        </div>
        <div class="mt-5 text-right sm:px-6">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/shared/Input.vue';
import Button from '@/components/shared/Button.vue';

export default {
  name: 'Form',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      assignee: '',
      title: '',
      description: '',
    };
  },
  methods: {
    onSubmit() {
      const newTodo = {
        assignee: this.assignee,
        title: this.title,
        description: this.description,
        isCompleted: false,
      };

      this.$emit('addTodo', newTodo);
      this.clearForm();
    },
    clearForm() {
      this.assignee = '';
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
