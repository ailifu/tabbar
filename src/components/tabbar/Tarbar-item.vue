<template>
  <div
    class="tabbar-item"
    @click="tabbarclick"
    :class="isActive ? 'tabbar-active' : ''"
  >
    <slot name="tabbarico" v-if="!isActive"></slot>
    <slot name="tabbarico-active" v-if="isActive"></slot>
    <slot name="tabbartext"></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar-item',
  components: {},
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1;
    },
    isStyle() {
      return this.isActive ? { color: 'red' } : {};
    },
  },
  data() {
    return {};
  },
  methods: {
    tabbarclick() {
      console.log(this.$route);
      this.$router.push(this.link);
    },
  },
};
</script>
<style lang="less" scoped>
.tabbar-item {
  flex: 1;
  img {
    width: 24px;
  }
}
.tabbar-active {
  color: #f60;
}
</style>
