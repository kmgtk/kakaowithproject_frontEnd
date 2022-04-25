<template>

  <HeaderLayout></HeaderLayout>
  <!--<JoinMember></JoinMember>-->
  <router-view />
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout";

export default {
  name: "App",
  components: {
   // TogetherDonation,
    HeaderLayout,
    //JoinMember
  },

  data(){
    return{
      abc : "",
    }
  },

  methods : {

  },
};
</script>

<style lang="scss">

</style>
