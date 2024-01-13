<template>
  <div @click="handleClick" class="border rounded p-4 cursor-pointer hover:shadow-md">
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
    // Add any logic you need here

    const handleClick = () => {
      // console.log("Card Clicked!");
      // Add any additional logic when the card is clicked
    };

    return {
      handleClick,
    };
  },
};
</script>

<style scoped>
/* Add additional styles as needed */
</style>
