<template>
  <div class="flex flex-col px-8 py-4">
    <div class="overflow-x-auto">
      <div class="w-56 ml-auto mr-0">
        <Input v-model="keyword" placeholder="Search..." />
      </div>
      <div class="pt-4 align-middle inline-block min-w-full">
        <div
          class="shadow overflow-hidden border border-gray-300 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Assignee
                </th>
                <th
                  scope="col"
                  class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(todo, todoIdx) in filteredTodos"
                :set="(showDescription = false)"
              >
                <tr
                  :key="todoIdx"
                  :class="todoIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                >
                  <td
                    :class="
                      `px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900
                      ${todo.isCompleted && 'line-through'}`
                    "
                  >
                    {{ todo.assignee }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ todo.title }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex">
                      <Button
                        class="w-1/2 mr-4"
                        @click="toggleDescription(todo.id)"
                      >
                        {{
                          expandedIndexes.includes(todo.id)
                            ? 'Collapse'
                            : 'Expand'
                        }}
                      </Button>
                      <Select
                        class="w-1/2"
                        :options="options"
                        :value="todo.isCompleted"
                        @change="(e) => changeStatusById(todo.id, e)"
                      />
                    </div>
                  </td>
                </tr>
                <tr
                  :key="`${todoIdx}-expand`"
                  v-if="expandedIndexes.includes(todo.id)"
                >
                  <td
                    colspan="3"
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    Description: {{ todo.description }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/shared/Input.vue';
import Select from '@/components/shared/Select.vue';
import Button from '@/components/shared/Button.vue';

export default {
  name: 'List',
  components: {
    Input,
    Select,
    Button,
  },
  props: {
    todos: Array,
  },
  data() {
    return {
      options: [
        {
          text: 'Completed',
          value: true,
        },
        {
          text: 'Incomplete',
          value: false,
        },
      ],
      keyword: '',
      expandedIndexes: [],
    };
  },
  computed: {
    filteredTodos() {
      if (this.keyword) {
        return this.todos.filter(todo =>
          this.searchSubstring(todo.assignee, this.keyword),
        );
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    toggleDescription(id) {
      if (this.expandedIndexes.includes(id)) {
        this.expandedIndexes = this.expandedIndexes.filter(
          expandedIndex => expandedIndex !== id,
        );
      } else {
        this.expandedIndexes = [...this.expandedIndexes, id];
      }
    },
    searchSubstring(string, keyword) {
      return string.toLowerCase().includes(keyword.toLowerCase());
    },
    changeStatusById(id, value) {
      this.$emit('completed', {id, value: value == 'true'});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
