<template>

  <HeaderLayout></HeaderLayout>
  <!--<JoinMember></JoinMember>-->
  <router-view />
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout";
//import JoinMember from "@/components/JoinMember";
//import TogetherDonation from "@/components/TogetherDonation";

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
