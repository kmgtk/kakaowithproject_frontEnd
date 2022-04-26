<template>
  <fundraising>
    <div id="dkContent" class="cont_project">
      <article id="mArticle">
        <h2 id="dkBody" class="screen_out">같이기부 본문</h2>
        <h3 class="screen_out">프로젝트 모금함</h3>
        <div data-tiara-layer="top_summary" class="wrap_visual">
          <div kagetype="c360" class="cont_visual" style="background-size: cover; background-color: rgb(59, 56, 32); background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/BnEdn/btrvXVIo3iv/vhJiBeVKARnTdYYvMvGOX1/c360.jpg&quot;);">
            <div class="front_pack">
<span class="tag_group">
<!---->
</span>
              <h4 class="tit_visual ellipsis_type1">홀몸어르신은 왜 식사를 거르고 살이 빠지는 걸까요?</h4>
              <span class="txt_sponsor ellipsis_g">by 구립신내노인종합복지관</span>

            </div>
          </div>
        </div>
        <div class="area_manage">
          <!---->
        </div>
        <!---->
        <!---->
        <h4 class="screen_out">스토리</h4>

        <div class="wrap_subject">
          <ng-component>
            <fundraising-content>
              <div class="cont_subject #content">
        <span class="tit_subject">오늘 여러분들의 식사는 어떠셨나요? </span>
                <p class="desc_subject">오늘 하루를 활기차게 보내기 위해 든든하게 식사하신 분, 다이어트로 칼로리 낮은 음식으로 식사하신 분, 스트레스로 먹고 싶은 음식을 양껏 드신 분, 아마 가지각색의 이유로 오늘은 무엇을 먹을까?라는 고민을 한 번씩을 해보셨을 겁니다. 하지만, 우리 동네 홀몸 어르신들은 하나 같이 생존을 위해 식사를 하고 계십니다.</p>

              </div>
            </fundraising-content>
\
          </ng-component>

          <div class="info_state">
<span class="total_fund">516,200<span class="txt_won">원</span></span>
            <span class="txt_goal">3,000,000원 목표</span>

          </div>
        </div>
        <!---->

        <!---->

        <!---->
        <comments>
          <div data-tiara-layer="comment" class="wrap_cmt cmt_type3">
            <strong class="screen_out">
              댓글</strong>
            <div class="wrap_info">
              <div class="inner_info">
<span class="txt_cmt">댓글 <span class="emph_sign">890</span></span>

              </div>
            </div>
            <!---->
            <ul class="list_cmt">

              <comment>
                <li id="12528464">

                  <div class="cmt_info">
<span class="info_append">
<!---->
<strong class="tit_nickname">
<span  class="link_nickname">
<!---->
<span class="screen_out">
닉네임</span>
 03.12 </span>
</strong>
<span class="txt_money">
  <span class="screen_out">기부금액</span>
  100원 <!---->
</span>
</span>
                    <span class="txt_cmt">
                      <span class="desc_cmt">응원해요</span>
                    </span>
                    <!---->
                  </div>
                </li>
                <!---->
              </comment>

              <!---->
            </ul>
            <!---->
            <!---->

            <!---->
          </div>
        </comments>

        <span id="wrapbutton">
</span>
        <div data-tiara-layer="sign sign_button" changeclassbyoffset="" fixedreachedelementid="wrapbutton" fixeddirection="bottom" fixedclass="btn_static" class="fund_float">
          <button type="button" class="btn_g btn_cheer" @click="handle_toggle">
<span class="ico_together ico_cheer">
</span>
            <span class="txt_float txt_cheer">
응원<span class="screen_out">
하기</span>
<span class="screen_out">
응원수</span>
<span class="num_active">
1989</span>
</span>
          </button>
          <!---->
          <button type="button" data-tiara-layer="share share_button" data-tiara-action-kind="Share" data-tiara-action-name="공유하기_클릭" class="btn_g" @click="handle_toggle">
<span class="ico_together ico_share">
</span>
            <span class="txt_float txt_share">
공유<span class="num_active">
156</span>
              <!---->
</span>
          </button>
          <!---->
          <button type="button" data-tiara-layer="donation donation_button" data-tiara-action-name="기부하기_클릭" class="btn_g btn_give" @click="handle_toggle">
            <!---->
            <span>
<span>
<span class="ico_give"></span>
<span class="txt_float txt_give">기부하기</span>
</span>
</span>
          </button>
        </div>
        <!---->
      </article>
    </div>
    <share-modal>
      <modal>
        <div tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 25%; margin-left: -192px;">
          <modal-content>
            <div class="inner_together_layer inner_together_layer2">
              <div class="layer_head">
                <strong class="screen_out">
                  SNS 공유하기</strong>
              </div>
              <div class="layer_body">
                <div class="wrap_sns">
                  <p class="desc_sns">
                    로그인 후, 공유하면<br class="line_mobile">
                    기부금이 적립됩니다♡</p>
                  <!---->
                  <strong class="screen_out">
                    SNS 목록</strong>
                  <ul class="list_sns" data-tiara-layer="share share_detail">
                    <li>
                      <button type="button" data-tiara-layer="talk" data-tiara-action-kind="Share" data-tiara-action-name="카카오톡공유_클릭" class="ico_social ico_kakaotalk social_on">
                        KakaoTalk </button>
                    </li>
                    <li>
                      <button type="button" data-tiara-layer="story" data-tiara-action-kind="Share" data-tiara-action-name="카카오스토리공유_클릭" class="ico_social ico_kakaostory social_on">
                        KakaoStory </button>
                    </li>
                    <li>
                      <button type="button" data-tiara-layer="facebook" data-tiara-action-kind="Share" data-tiara-action-name="페이스북공유_클릭" class="ico_social ico_facebook social_on">
                        Facebook </button>
                    </li>
                    <li>
                      <button type="button" data-tiara-layer="twitter" data-tiara-action-kind="Share" data-tiara-action-name="트위터공유_클릭" class="ico_social ico_twitter social_on">
                        Twitter </button>
                    </li>
                    <li>
                      <button type="button" data-tiara-layer="url_copy" data-tiara-action-kind="Share" data-tiara-action-name="URL복사_클릭" ngxclipboard="" class="ico_social ico_copy social_on">
                        URL<br>
                        복사 </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="layer_foot">
                <button type="button" class="btn_close">
<span class="ico_together">
닫기</span>
                </button>
              </div>
            </div>
          </modal-content>
        </div>
      </modal>
      <share-story-modal>
        <modal>
          <div tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 15%; margin-left: -250px;">
            <modal-content>
              <div  class="inner_together_layer inner_together_layer9 inner_together_layer10">
                <div class="layer_head">
                  <strong class="screen_out">
                    카카오스토리 공유하기</strong>
                </div>
                <div class="layer_body">
                  <div class="wrap_share">
                    <div class="info_post">
                      <img alt="프로필사진" class="img_thumb" src="">
                      <div class="inp_post">
                        <label for="writeCmt" class="screen_out">
                          공유글 쓰기</label>
                        <textarea name="writeCmt" id="writeCmt" cols="30" rows="10" placeholder="하고 싶은 말을 남겨주세요." class="tf_write ng-untouched ng-pristine ng-valid">
</textarea>
                      </div>
                    </div>
                    <div class="info_scrap">
                      <a target="_blank" class="link_thumb" href="https://together.kakao.com/fundraisings/94923" style="background-image: url(&quot;&quot;);">
                      </a>
                      <!---->
                      <div class="box_scrap">
                        <a class="link_scrap" href="https://together.kakao.com/fundraisings/94923">
                          <!---->
                          <!---->
                        </a>
                        <!---->
                        <a target="_blank" class="link_by" href="https://together.kakao.com/fundraisings/94923">
                          TOGETHER.KAKAO.COM</a>
                      </div>
                    </div>
                  </div>
                  <div class="wrap_foot">
                    <button type="button" title="공개설정 변경" class="btn_open">
                      <em class="ico_together2 ico_global">
                        전체공개</em>
                      <!---->
                      <!---->
                      <span class="ico_together2 ico_arr">
</span>
                    </button>
                    <div class="open_tooltip hide">
                      <ul>
                        <li>
                          <input type="radio" name="openChoice" id="openChoice1" value="A" class="inp_choice">
                          <label for="openChoice1" class="lab_choice lab_choiced">
<span class="ico_together2 ico_global">
</span>
                            전체공개 <span class="ico_together2 ico_choice">
</span>
                          </label>
                        </li>
                        <li>
                          <input type="radio" name="openChoice" id="openChoice2" value="F" class="inp_choice">
                          <label for="openChoice2" class="lab_choice">
<span class="ico_together2 ico_friend">
</span>
                            친구공개 <span class="ico_together2 ico_choice">
</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="btn_group">
                      <button type="button" class="btn_comm">
                        취소 </button>
                      <button type="submit" class="btn_comm btn_share">
                        카카오스토리로 공유 </button>
                    </div>
                  </div>
                </div>
              </div>
            </modal-content>
          </div>
        </modal>
      </share-story-modal>
    </share-modal>
    <!---->
    <donation-modal>
      <modal >
        <div  v-show="is_show" tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 25%; margin-left: -192px;">
          <modal-content>
            <div  class="inner_together_layer inner_together_layer6">
              <div class="layer_head">
                <strong class="screen_out">
                  기부하기</strong>
              </div>
              <div  class="layer_body">
                <form novalidate="" name="form" class="form_manage ng-untouched ng-pristine ng-valid">
                  <fieldset>
                    <legend class="screen_out">
                      기부금액 입력 양식</legend>
                    <div data-tiara-layer="donation donation_detail" class="wrap_fund">
                      <!---->
                      <dl class="list_pay">
                        <dt class="cate_write cate_fund">
<span>
기부금 결제</span>
                        </dt>
                        <!---->
                        <dd class="info_write info_fund">
                          <p class="txt_info">
                            무통장은 3천원, 기타 결제는 1천원부터 가능합니다. </p>
                          <!---->
                          <!---->
                          <!---->
                          <div class="box_digit">
                            <button type="button" data-tiara-layer="100" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(100)">
                              + 1백원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="1000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(1000)">
                              + 1천원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="5000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(5000)">
                              + 5천원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="10000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(10000)">
                              + 1만원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="50000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(50000)">
                              + 5만원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="100000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(100000)">
                              + 10만원<span class="screen_out" >
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="500000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="donationPricePlus(500000)">
                              + 50만원<span class="screen_out">
원 입력</span>
                            </button>
                            <button type="button" data-tiara-layer="ac" data-tiara-action-name="기부금액_초기화_클릭" class="btn_modify" @click="donationPricePlus('reset')">
                              다시 입력 </button>
                          </div>
                          <div class="wrap_tf">
                            <strong class="screen_out">
                              결제액</strong>
                            <em class="num_point">
                              {{ computedDonationPrice }}</em>
                            원 </div>
                          <!---->
                          <!---->
                          <!---->
                        </dd>
                        <!---->
                        <!---->
                        <!---->
                        <dt class="cate_write cate_reply">
                          <label for="tfReply">
                            응원댓글 쓰기</label>
                        </dt>
                        <dd class="info_write info_reply">
                          <div class="wrap_tf">
<textarea id="tfReply" cols="30" rows="10" name="comment" placeholder="따뜻한 한마디를 남겨주세요." data-tiara-layer="comment" data-tiara-action-name="댓글작성창_클릭" class="tf_write tf_reply ng-untouched ng-pristine ng-valid">
</textarea>
                            <span class="txt_limit">
<span class="screen_out">
현재 글자수</span>
<span class="num_now">
0/</span>
<span class="screen_out">
제한 글자수</span>
300 </span>
                          </div>
                        </dd>
                      </dl>

                      <!---->
                      <!---->
                      <!---->
                    </div>
                    <div class="wrap_btn wrap_btn_type">
                      <button type="button" freezebutton="" class="btn_set btn_type1">
                        결제하기 </button>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div class="layer_foot">
                <button type="button" class="btn_close" @click="handle_toggle"><span class="ico_together">닫기</span></button>
              </div>
            </div>
          </modal-content>
        </div>
      </modal>
    </donation-modal>

    <modal>
      <div tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 25%; margin-left: -192px;">
        <modal-content>
          <!---->
        </modal-content>
      </div>
    </modal>
    <!---->
  </fundraising>


</template>

<script>
    export default {
        name: "DonationIngDetail",
        data() {
            return {
              donationPrice : 0,
              is_show: false
            }
        },

      computed:{

        computedDonationPrice(){
          return this.donationPrice;
        }
      },

        methods :{
          handle_toggle: function(){
            this.is_show = !this.is_show; // #2, #3
            console.log(this.is_show);
          },
          donationPricePlus(addPrice){

            if(addPrice==='reset'){
              this.donationPrice = 0;
            }else{
              this.donationPrice += addPrice;
            }

            console.log(this.donationPrice);

          },
        },

      mounted() {
        this.$route.params.id
          console.log(this.$route.params.id);
      }
    };
</script>

<style lang="scss">

</style>
