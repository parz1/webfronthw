<template>
  <div>
    <router-link to="home">
      <Button id="backbtn" size="large" type="primary">
        <Icon type="ios-arrow-back"/>返回
      </Button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackBtn",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#backbtn {
  position: fixed;
  margin-left: 8%;
  bottom: 5%;
}
</style>
