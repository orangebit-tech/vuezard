<template>
  <div id="app" class="app">

    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap");

#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #45A29F;
}
html, body {
  font-family: 'Barlow', sans-serif;
}
a {
  font-weight: 500 !important;
}
body {
  padding-left: 10%;
  padding-right: 10%;
  background-color: #0B0C10 !important;
}
h1 {
  color: #C5C6C8;
  font-weight: 500;
}
h3 {
 color: #66FCF1;
 font-weight: 400;
} 
.main-frame {
  border: 1px solid #202833;
  height: 170px;
  width: 100%;
}
.info {
  display: inline-block;
  padding-top: 20px;
}
.image {
  margin-top: 20px;
  display: inline-block;
  border: 3px solid #45A29F;
  width: 90px;
  height: 80px;
  border-radius: 20%;
}
.png {
  max-width: 105px;
}
.initials {
  font-size: 40px;
  margin-top: 12px;
  margin-left: 5px;
  color: #45A29F;
  letter-spacing: 4px;
}
.title {
  margin-left: 25px;
  vertical-align: top;
  display: inline-block;
}
.header {
  margin-bottom: 130px;
}
.webdev {
  font-weight: 400;
  font-size: 22px;
  margin-top: -10px !important;
}
.buttons {
  margin-top: 27px;
}
.button {
  font-size: 18px;
  border: 1px solid #202833;
  padding: 4px;
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
  background-color: #66FCF1;
  color: #0B0C10 !important;

}
.is-still-active {
  width: static;
  background-color: transparent;
  color: #45A29F !important;
  border: 1px solid #45A29F
}

.router-2 {
  margin-top: 0px;
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
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.block-inline {
  display: inline-block;
}
.block-left {
  width: 530px ;
}
.block-right {
  width: 530px;
}
.summary {
  padding-left: 20px !important;
  padding-right: 20px !important;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 15px;
}
.summary p {
  margin-top: -10px;
}
.spinner {
  text-align: center !important;
  vertical-align: center;
  margin-left: 46%;
  margin-top: 12%;
}
.gh-contributions {
  width: 120px;
  height: 130px;
  border: 1px solid #202833;
  vertical-align: top;
  padding-top: 0px;
  padding-bottom: 20px;
  display: inline-block;
}
.contribs {
  text-align: center;
}
.chartjs-render-monitor {
  z-index: 2 !important;
}
.y-axis {
  padding-left: 28px;
  padding-right: 10px;
  color: #C5C6C8;
  font-size: 13px;
  height: 18px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: -24px;
  background-color: #0B0C10 !important;
  opacity: 0.8;
}
.project-widget {
  transition: 0.3s;
  opacity: 0.5;
  
}
.project-widget:hover {
  cursor: pointer;
  opacity: 0.8 ;
  border: 1px solid #45A29F;
  /* box-shadow: 0 0 2px #C5C6C8;
  -moz-box-shadow: 0 0 2px #C5C6C8;
  -webkit-box-shadow: 0 0 2px #C5C6C8;
  -o-box-shadow: 0 0 2px #C5C6C8; */
}
.project h3 {
  color: #C5C6C8;
}
.project.is-active {
  background-color: transparent !important;
  width: static;
  color: #0B0C10 !important;
  border: none !important;
}
.project.is-active .project-widget {
  opacity: 1;
  border: 1px solid  #66FCF1 !important;
  box-shadow: 0 0 0px #45A29F;
  -moz-box-shadow: 0 0 0px #45A29F;
  -webkit-box-shadow: 0 0 0px #45A29F;
  -o-box-shadow: 0 0 0px #45A29F;
}
.project.is-active .project-widget:hover {

}
.description {

  text-align: left;
  padding-left: 1rem;
  color: #C5C6C8 !important;
}
.description h3 {
    color: #C5C6C8;
}
.description a {
  color: #45A29F;
}
.widget-title {
  color: #45A29F;
  font-size: 16px;
}
.widget-number {
  color: #66FCF1;
}
.chart {
  width: 400px;
  height: 150px;
  display: inline-block;
  border: 1px solid #202833;
}
svg {

}
.horizontal {

}
.skills {

  margin-left: 0px !important;
  padding-left: 0px !important;
  list-style: none;
  letter-spacing: 1px;
  line-height: 22px;
  color: #66FCF1;
}
p {
  letter-spacing: 1px;
  line-height: 22px;
  font-size: 16px;
  text-align: center;

}
.division {
  margin-left: 0px !important;
  vertical-align: top;
  display: inline-block;
  width: 340px !important;
}
.division .label {
  margin-left: 0px !important;
}
.skills-block {

  text-align: center !important;
  width: auto;
}
.skill {
  color: #C5C6C8;
}
.contact {
  width: 350px;
  height: 110px;
  padding: 20px;
  text-align: center;
}
.dynamic-link {
  display: inline-block;
  align-content: center !important;
  overflow: hidden;
}
.icon {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  color: #45A29F; 
  font-size: 40px
}
.icon:hover {
  cursor: pointer;
  color: #66FCF1
}
.copy-icon:hover {
  color: #66FCF1;
  cursor: pointer;
}
.message {
   display: block; 
   color: #45A29F;
}
.message {
    -webkit-animation: fadeinout 2s linear forwards;
    animation: fadeinout 2s linear forwards;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}
@-webkit-keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
.external-link-icon {
  display: inline-block;
}
.link:hover {
  text-decoration: underline;
  color: #66FCF1 !important;
}
.experience{
   width: auto;
}
@media screen and (max-width: 1013px){
  .skills-block {
      min-height: 432px;
  }
}
@media screen and (max-width: 840px) {
  .chart-widget {
    width: auto !important;
  }
  .router-2 {
    padding: 0px;
  }
  .block-right {
    width: auto !important;
  }
  .block {
    width: auto;
    height: auto;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .blocks {
    padding: 0px !important;
  }
}
@media screen and (max-width: 704px){
  .buttons {
  }
  .button {
    margin-left: 0px;
    margin-top: 20px;
    display: block;
  } 
}
@media screen and (max-width: 485px){
  .division {
    width: auto !important;
  }
  .skills-block {
    max-width: auto !important;
  }
  .main-frame {
    height: auto !important;
  }
  .title {
    display: block;
    margin-left: 0px;
  } 
}
</style>
