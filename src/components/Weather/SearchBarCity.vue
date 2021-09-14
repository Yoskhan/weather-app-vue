<template>
  <div class="container-searchbar">
    <input class="input-add" type="text" placeholder="London..." />
    <button class="btn-add">{{ $t("UI.btn-add") }}</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";

.container-searchbar {
  margin: 0 auto;
}

.input-add {
  @include input();
}

.btn-add {
  @include btn();
}
</style>
