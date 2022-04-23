<template>
    <div data-tiara-layer="topic" class="group_catelist">
        <h3 class="screen_out">모금함 카테고리</h3>
        <div class="inner_catelist">
            <ul class="list_cate">
                <li v-bind:class="{ on: isActive==='전체'}">
                    <a data-tiara-layer="all" data-tiara-action-name="토픽_전체_클릭" class="link_cate"  @click="clickTopic('전체')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="//t1.kakaocdn.net/together_image/ico_all.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">전체</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='어린이'}">
                    <a class="link_cate" data-tiara-layer="children" data-tiara-action-name="토픽_children_클릭"  @click="clickTopic('어린이')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_kidz.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">어린이</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='여성'}">
                    <a class="link_cate" data-tiara-layer="woman" data-tiara-action-name="토픽_woman_클릭" @click="clickTopic('여성')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_woman.png">
                            </image>
                        </svg>
                        <span  class="txt_cate" @click="clickTopic('여성')">여성</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='어르신'}">
                    <a class="link_cate" data-tiara-layer="silver" data-tiara-action-name="토픽_silver_클릭" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_old.png">
                            </image>
                        </svg>
                        <span  class="txt_cate" @click="clickTopic('어르신')">어르신</span>
                    </a>
                </li>
            </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="screen_out">
            <defs>
                <filter id="filtersThumb">
                    <feComposite result="inputTo_38" in="SourceGraphic" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0">
                    </feComposite>
                    <feColorMatrix type="saturate" values="0" data-filterid="38"></feColorMatrix>
                </filter>
            </defs>
        </svg>
    </div>

  <div class="group_fundlist">
    <h4 class="screen_out">
      모금중 리스트</h4>
    <div data-tiara-layer="listing_logic" class="sort_cate">
<span class="inner_sort_cate">
<span :class="{box_sorting : true, sort_on : isBoxSortingActive==='추천순_클릭' }" data-tiara-layer="recommend" data-tiara-action-name="추천순_클릭" @click="click_box_sorting('추천순_클릭')">
<input type="radio" class="inp_sort" name="sort0">
<label class="lab_sort" for="sort0">
추천순</label>
</span>
<span :class="{box_sorting : true, sort_on : isBoxSortingActive==='최신순_클릭' }" data-tiara-layer="recent" data-tiara-action-name="최신순_클릭" @click="click_box_sorting('최신순_클릭')">
<input type="radio" class="inp_sort" name="sort1">
<label class="lab_sort" for="sort1">
최신순</label>
</span>
<span :class="{box_sorting : true, sort_on : isBoxSortingActive==='종료임박순_클릭' }" data-tiara-layer="complete" data-tiara-action-name="종료임박순_클릭" @click="click_box_sorting('종료임박순_클릭')">
<input type="radio" class="inp_sort" name="sort2">
<label class="lab_sort" for="sort2">
종료임박순</label>
</span>
  <!---->
</span>
    </div>
    <DonationListCard></DonationListCard>
  </div>



</template>


<script>

import DonationListCard from "@/components/DonationListCard";

    export default {
        name: "DonationIng",
      components:{
        DonationListCard,
      },
        data() {
            return {
              isActive : '전체',
              isBoxSortingActive : '추천순_클릭',
            };
        },

      computed:{
        computedStyleObject(pix){
          return{
            width:pix+"%",
          }
        }
      },

        methods :{
          clickTopic(topic){
            this.isActive = topic;
            console.log(topic);
          },
          click_box_sorting(box_sorting_name){
            this.isBoxSortingActive = box_sorting_name;
          }

        },
    };
</script>

<style lang="scss">

</style>
