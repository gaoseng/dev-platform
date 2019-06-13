<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    login
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Home extends Vue {
  name:string = '1111111111111111111111111111111111111';
  created() {
    console.log(123); 
    this.name;
  }
}
</script>
