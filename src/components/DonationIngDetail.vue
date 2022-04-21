<template>
    TEST 게시물

</template>

<script>
    export default {
        name: "DonationIngDetail",
        data() {
            return {

            }
        },

      computed:{

      },

        methods :{

        },

      mounted() {
        this.$route.params.id
          console.log(this.$route.params.id);
      }
    };
</script>

<style lang="scss">

</style>
