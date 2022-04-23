<template>
  <div class="group_givetop">
    <strong class="tit_givetop"> 응원, 공유하면 기부되는 가장 쉬운 나눔 </strong><!----><!---->
  </div>
  <div class="group_fundlist">
    <h4 class="screen_out">모금후기 리스트</h4>
    <div data-tiara-layer="listing_logic" class="sort_cate">
<span class="inner_sort_cate">
<span :class="{box_sorting : true, sort_on : isBoxSortingActive==='모금후기_클릭' }" data-tiara-layer="epilogue" data-tiara-action-name="모금후기_클릭" @click="click_box_sorting('모금후기_클릭')">
<input type="radio" class="inp_sort" name="sort0">
<label class="lab_sort" for="sort0">모금후기</label>
</span>
<span :class="{box_sorting : true, sort_on : isBoxSortingActive==='사업중' }" @click="click_box_sorting('사업중')" >
<input type="radio" class="inp_sort" name="sort1">
<label class="lab_sort" for="sort1">사업중</label>
</span>
  <!---->
</span>
    </div>

    <DonationListCard></DonationListCard>

    <!---->
    <!---->
    <div class="list_more">
      <!---->
    </div>
    <!---->
  </div>

</template>

<script>

import DonationListCard from "@/components/DonationListCard";
    export default {
        name: "DonationAfter",

      components:{
        DonationListCard,
      },

        data() {
            return {
              isBoxSortingActive : '모금후기_클릭',

            };
        },

        methods :{
          click_box_sorting(box_sorting_name){
            this.isBoxSortingActive = box_sorting_name;
          }


        },
    };
</script>

<style lang="scss">

</style>
