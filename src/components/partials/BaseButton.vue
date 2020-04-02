<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 200px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  color: #fff;
  background-color: #39b982;
  border-color: #39b982;
}
</style>
