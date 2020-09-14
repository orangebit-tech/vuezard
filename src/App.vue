<template>
  <div id="app" class="app">
    <div class="header">
      <Header/>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Vue from 'vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {

      myGitHubData: {}
    }
  },
  methods: {
    async get(){
      return await this.GitHubAPI.get('/user', {}, [this.myGitHubData, 'user'])
    }
  },
  created () {
  }
}
</script>

<style>
@import '/assets/style.css'; 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #45A29F;
}
body {
  padding-left: 10%;
  padding-right: 10%;
  background-color: #0B0C10 !important;
}
h1 {
  color: #C5C6C8;
}
h3 {
 color: #66FCF1;
 font-weight: 200;
} 
.main-frame {

  border: 1px solid #202833;
  height: 175px;
  width: 100%;
}
.info {
  display: inline-block;
  padding-top: 20px;
}
.image {
  display: inline-block;
  border: 3px solid #45A29F;
  width: 120px;
  height: 120px;
  border-radius: 50%;

}
.png {
  max-width: 105px;
}
.initials {
  color: #45A29F;
  margin-top: 20px;
  margin-left: 2px;
  letter-spacing: 4px;
}
.smile {
  border-bottom: 6px solid #45A29F;
  border-radius: 100%;
  width: 70px;
  height: 30px;
  margin-left: 25px;
  margin-top: -18px;
}
.title {
  margin-left: 25px;
  vertical-align: top;
  display: inline-block;
}
.header {
  margin-bottom: 130px;
}
.buttons {
  margin-top: 27px;
}
.button {
  font-weight: 200;
  font-size: 18px;
  border: 1px solid #202833;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 20px;
  border-radius: 5px;
  transition: 0.3s;
  text-decoration: none;
  color: #C5C6C8
}
.button:hover {
  color: #66FCF1;
  border: 1px solid  #66FCF1;
  cursor: pointer;
}
.is-active {
  width: static;
  /* font-weight: 600; */
  background-color: #66FCF1;
  color: #0B0C10 !important;
  border: 1px solid  #66FCF1;
}
.router-2 {
  margin-top: 25px;
  border: 1px solid  #202833;
  height: 400px;
  padding: 15px;
}
.block {
  color: #C5C6C8;
  border: 1px solid #202833;
  width: 250px;
  height: 250px;
  margin: 20px;
  vertical-align: top;
}
.block-inline {
  display: inline-block;

}
.block-left {
  width: 530px ;
  /* padding-left: 0px; */
}
.block-right {
  width: 530px;
    padding-left: 20px !important;
  padding-right: 20px !important;
  
}
.summary {
  padding-left: 20px !important;
  padding-right: 20px !important;
  /* letter-spacing: 0.06rem; */
  line-height: 1.2rem;
  text-align: left;
  /* padding-left: 20px; */
  /* padding-right: 15px; */
}

.loading{
  

}
.spinner {
  text-align: center !important;
  vertical-align: center;
  margin-left: 46%;
  margin-top: 12%;
}
.gh-contributions {
  width: 40%;
  border: 1px solid #202833;
  vertical-align: top;
  padding-top: 0px;
  padding-bottom: 20px;
  display: inline-block;
  
}
.contribs {
  text-align: center;

}
.widget-title {
  color: #45A29F;
  font-size: 16px;
}
.widget-number {
  color: #66FCF1;
}
.chart {
  width: 100%;
  display: inline-block;
  border: 1px solid #202833;
}
.experience{
   width: auto;
}

</style>
