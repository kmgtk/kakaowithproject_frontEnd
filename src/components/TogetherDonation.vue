<template>
  <ul class="nav justify-content-center" >
    <li routerlinkactive="on" class="nav-item">
      <a class="nav-link active" aria-current="page" href="/fundraisings/now"><span class="txt_tab">모금중</span></a>
    </li>
    <li routerlinkactive="on" class="nav-item">
      <a class="nav-link active" aria-current="page" href="/fundraisings/epilogue"><span class="txt_tab">모금후기</span></a>
    </li>
  </ul>

  <router-view />

</template>

<script>
export default {
  name: "TogetherDonation",
  data() {
    return {


    };
  },

  methods :{


  },
};
</script>

<style lang="scss">

</style>
