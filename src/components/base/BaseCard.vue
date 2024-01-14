<template>
  <div class="border rounded p-4 cursor-pointer hover:shadow-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    borderColor: {
      type: String,
      default: "border-gray-300",
    },
    backgroundColor: {
      type: String,
      default: "bg-white",
    },
    borderRadius: {
      type: String,
      default: "rounded",
    },
    hoverEffect: {
      type: String,
      default: "hover:shadow-md",
    },
  },
  setup() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
