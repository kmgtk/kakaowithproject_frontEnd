<template>
  <article class="container">
    <div class="page-header">
      <div class="col-md-6 col-md-offset-3">
        <h3>회원가입 Form</h3>
      </div>
    </div>
    <div class="col-sm-6 col-md-offset-3">
      <form role="form">
        <div class="form-group">
          <label for="inputName">성명</label>
          <input type="text" class="form-control" id="inputName" placeholder="이름을 입력해 주세요">
        </div>
        <div class="form-group">
          <label for="inputPassword">비밀번호</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="비밀번호를 입력해주세요">
        </div>
        <div class="form-group">
          <label for="inputPasswordCheck">비밀번호 확인</label>
          <input type="password" class="form-control" id="inputPasswordCheck" placeholder="비밀번호 확인을 위해 다시한번 입력 해 주세요">
        </div>
        <div class="form-group">
          <label for="inputtelNO">주소</label><br>
          <input type="text" id="postcode" placeholder="우편번호" :value="postNumber" >

          <input type="button" @click="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
          <input type="text" id="address" placeholder="주소" :value="address"><br>
          <input type="text" id="detailAddress" placeholder="상세주소" :value="detailAddress">
          <input type="text" id="extraAddress" placeholder="참고항목" :value="referenceAddress">
        </div>
        <div class="form-group">
          <label for="inputMobile">휴대폰 번호</label>
          <input type="tel" class="form-control" id="inputMobile" placeholder="휴대폰번호를 입력해 주세요">
        </div>
        <div class="form-group">
          <label for="InputEmail">이메일 주소</label>
          <input type="email" class="form-control" id="InputEmail" placeholder="이메일 주소를 입력해주세요">
        </div>


        <div class="form-group text-center">
          <button type="submit" id="join-submit" class="btn btn-primary">
            회원가입<i class="fa fa-check spaceLeft"></i>
          </button>
          <button type="submit" class="btn btn-warning">
            가입취소<i class="fa fa-times spaceLeft"></i>
          </button>
        </div>
      </form>
    </div>
  </article>

</template>

<script>
export default {
  name: "JoinMember",
  data() {
    return {
      postNumber: '',
      address: '',
      detailAddress: '',
      referenceAddress:'',

    };
  },

  methods :{

    sample6_execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if(data.userSelectedType === 'R'){
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
              extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraAddr !== ''){
              extraAddr = ' (' + extraAddr + ')';
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById('extraAddress').value = extraAddr;
            this.referenceAddress = extraAddr;

          } else {
            document.getElementById('extraAddress').value = '';
            this.referenceAddress = '';
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('postcode').value = data.zonecode;
          this.postNumber = data.zonecode;
          document.getElementById('address').value = addr;
          this.address = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById('detailAddress').focus();
        }
      }).open()
    }

  },
};
</script>

<style lang="scss">

</style>
