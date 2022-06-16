<template>

</template>

<script>
import User from '@/model/user'
export default {
  name: "Login",
  data(){
    return{
      user:new User("",""),
      loading:false,
      message:""
    }
  },
  computed:{
    loggedIn(){
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created(){
    //로그인 되었으면 loggedIn=true
    //아니면 false
    //로그인 되었으면 사용자를 프로필 페이지로 안내
    if(this.loggedIn){
    //  강제 profile 페이지로 강제 이동함
      this.$router.push("/profile")
    }

  },
  methods:{

  }
}
</script>

<style scoped>

</style>