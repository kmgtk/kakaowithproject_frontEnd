<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand"  href="#"><img src="https://t1.kakaocdn.net/together_image/common/tit_blacklogo_190212.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"  >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/fundraisings/now">같이기부</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">프로모션</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-align: center">
          <button>회원가입</button>
          <button>로그인</button>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {};
  }
};
</script>

<style lang="scss">

</style>
