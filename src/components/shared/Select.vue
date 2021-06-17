<template>
  <select
    :id="id"
    class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    :value="value"
    @change="e => $emit('change', e.target.value)"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      class="bg-white text-black mobile:text-base"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
