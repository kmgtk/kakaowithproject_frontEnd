<template>
  <div>
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
  name: "DonationListCard",
  props:{
    state_gage : String,
  },
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
