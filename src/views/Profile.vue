<template>
  <!-- 부트스트랩 : container -->
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.uername }}</strong> Profile
      </h3>

      <p>
        <strong>Id</strong>
        {{ currentUser.id }}
      </p>

      <p>
        <strong>Email</strong>
        {{ currentUser.email }}
      </p>
    </header>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  // 화면이 뜨자마자 실행되는 이벤트
  mounted() {
    // 사용자가 로그인하지 않은 경우 로그인 페이지로 강제 이동
    if (!this.currentUser) {
      // 강제 로그인 페이지로 이동시킴
      this.$router.push("/login");
    }
  },
};
</script>

<style>
</style>