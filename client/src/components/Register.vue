<template>
<div>
  <h1>Register</h1>

  <input type="email" name="email" placeholder="email" v-model="email"/>
  <br>
  <input type="password" name="password" placeholder="password" v-model="password"/>
  <br>
  <button @click="register">Register</button>
</div>
</template> 

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      //Now that we have v-model, it grabs the attribute name and information
      //and binds it to these parameters

      //So it is saying for example: set email value to abc in the v-model
      email:'',
      password:''
    } 
  },
    methods:{
      async register(){
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
}
</script>
}

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
