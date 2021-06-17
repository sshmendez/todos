<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    class="shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full sm:text-sm border-gray-300 rounded-md py-1 px-4"
    :placeholder="placeholder"
    :value="value"
    @input="e => input(e)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
