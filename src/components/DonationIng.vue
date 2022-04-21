<template>
    <div data-tiara-layer="topic" class="group_catelist">
        <h3 class="screen_out">모금함 카테고리</h3>
        <div class="inner_catelist">
            <ul class="list_cate">
                <li v-bind:class="{ on: isActive==='전체'}">
                    <a data-tiara-layer="all" data-tiara-action-name="토픽_전체_클릭" class="link_cate"  @click="aa('전체')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="//t1.kakaocdn.net/together_image/ico_all.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">전체</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='어린이'}">
                    <a class="link_cate" data-tiara-layer="children" data-tiara-action-name="토픽_children_클릭"  @click="aa('어린이')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_kidz.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">어린이</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='여성'}">
                    <a class="link_cate" data-tiara-layer="woman" data-tiara-action-name="토픽_woman_클릭" @click="aa('여성')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_woman.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">여성</span>
                    </a>
                </li>
                <li v-bind:class="{ on: isActive==='어르신'}">
                    <a class="link_cate" data-tiara-layer="silver" data-tiara-action-name="토픽_silver_클릭" @click="aa('어르신')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <image x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://t1.kakaocdn.net/together_image/ico_old.png">
                            </image>
                        </svg>
                        <span  class="txt_cate">어르신</span>
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
<span class="box_sorting sort_on" data-tiara-layer="recommend" data-tiara-action-name="추천순_클릭">
<input type="radio" class="inp_sort" name="sort0">
<label class="lab_sort" for="sort0">
추천순</label>
</span>
<span class="box_sorting" data-tiara-layer="recent" data-tiara-action-name="최신순_클릭">
<input type="radio" class="inp_sort" name="sort1">
<label class="lab_sort" for="sort1">
최신순</label>
</span>
<span class="box_sorting" data-tiara-layer="complete" data-tiara-action-name="종료임박순_클릭">
<input type="radio" class="inp_sort" name="sort2">
<label class="lab_sort" for="sort2">
종료임박순</label>
</span>
  <!---->
</span>
    </div>
    <!---->
    <ul class="list_fund fund_raising">
      <!---->
      <li class="listcard" v-for="(cardData, index) in cardDatas" :key=index>
        <intersection-observer>
          <fundraising-card>
            <a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" :href="'/fundraisings/'+cardData.postid">
<span class="box_thumb">
<span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/bn3wWP/btrw63EPYSj/S3jhP3AQbsV3Ib0qOyrvr0/c203.jpg&quot;);">
</span>
</span>
              <span class="box_together">
<span class="bundle_tit">
<strong class="tit_together ellipsis_type1">
<span class="tag_bundle"></span>
 {{ cardData.title }} </strong>
<span class="">
<span class="screen_out">제안자</span>
{{ cardData.proponent }}</span>
</span>
<span class="wrap_state">
<span class="state_bar">
<span class="state_gage state_ing" :style="{width : cardData.achievement+'%'}"></span>
</span>
<span class="screen_out">달성률</span>
<span class="txt_per">{{cardData.achievement}}%</span>
</span>

<span class="price_goal">{{cardData.price}} </span>
</span>
            </a>

          </fundraising-card>
        </intersection-observer>
      </li>
    </ul>
  </div>



</template>

<script>
    export default {
        name: "DonationIng",
        data() {
            return {
              cardDatas : [
                {
                  title: '가',
                  proponent: '가가',
                  achievement: 10,
                  price: 10000,
                  postid:1
                },
                {
                  title: '나',
                  proponent: '나나',
                  achievement: 20,
                  price: 20000,
                  postid:2
                },
                {
                  title: '다',
                  proponent: '다다',
                  achievement: 30,
                  price: 30000,
                  postid:3
                },
                {
                  title: '라',
                  proponent: '라라',
                  achievement: 40,
                  price: 40000,
                  postid:4
                },
                {
                  title: '마',
                  proponent: '마마',
                  achievement: 50,
                  price: 50000
                },
                {
                  title: '마',
                  proponent: '마마',
                  achievement: 50,
                  price: 50000
                },
                {
                  title: '마',
                  proponent: '마마',
                  achievement: 50,
                  price: 50000
                },
              ],
              isActive : '전체',
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
          aa(topic){
            this.isActive = topic;
            console.log(topic);
          },

        },
    };
</script>

<style lang="scss">

</style>
