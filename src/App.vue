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
    // console.log(process.env.GITHUB_TOKEN)
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Open+Sans:ital@1&display=swap');

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
 margin-top: 10px;
 margin-bottom: 0px !important;
} 
p {
  letter-spacing: 1px !important;
    margin-block-start: 10px !important;
    margin-block-end: 2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.main-frame {
  border: 1px solid #202833;
  border-radius: 6px;
  height: 142px;
  width: 100%;
}
.info {
  display: flex;
  justify-content: center;
}
.image {
  border-radius: 20%;
}
.png {
  max-width: 105px;
}
.inline-link {
  color: #45A29F !important
}
.inline-link:hover {
  color: #66FCF1 !important
}
.initials {
  font-size: 100px;
  color: #45A29F;
  letter-spacing: 7px;
  width:100%;
  display: flex;
  justify-content: space-around;
}
.title {
  margin-left: 20px;
      padding-top: 35px;

}
.header {
  margin-bottom: 130px;
}
.wide {
  display: none;
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
  border: 1px solid transparent;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
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
  border-radius: 6px;
  width: 250px;
  height: 272px;
  margin: 20px 10px;
  margin-bottom: 10px;
  vertical-align: top;
  padding: 5px 15px;
  vertical-align: center !important;
  
  min-width: 200px;
  margin-top: 10px;
}
.project-blocks {
  border: 1px solid #202833; display: inline-block; margin-top: 10px
}
.block img {
  max-width: 240px;
  border-radius: 6px;
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
}
.summary p {
  
}
.spinner {
  text-align: center !important;
  vertical-align: center;

    margin-left: auto;
    margin-right: auto;

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
  margin-top: 20px;

  transition: 0.3s;
  opacity: 0.5;
  max-height: 64px;
  border: none;
  
}
.project-widget:hover {
  cursor: pointer;
  opacity: 0.8 ;
  border-bottom: 1px solid #C5C6C8;
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
  border-bottom: 1px solid  #45A29F !important;
  box-shadow: 0 0 0px #45A29F;
  -moz-box-shadow: 0 0 0px #45A29F;
  -webkit-box-shadow: 0 0 0px #45A29F;
  -o-box-shadow: 0 0 0px #45A29F;
}
.project.is-active .project-widget:hover {

}
.description {
  display: inline-block;
  text-align: center;
  color: #C5C6C8 !important;
  max-width: 1000px;

}
.description p {
    font-size: 18px !important;
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
  padding: 5px;
  width: 430px;
  height: 170px;
  display: inline-block;
  border: 1px solid #202833;
    margin-bottom: 20px;
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
  padding-bottom: 15px;
}
.division .label {
  margin-left: 0px !important;
}
.skills-block {

  text-align: center !important;
  width: auto;
  height: auto;
}
.skill {
  color: #C5C6C8;
}
.contact {
  width: 360px;
  height: unset;
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
.gixcore {
 
  display: inline;
  font-size: 42px;
  font-family: 'Audiowide', cursive !important;
  color: #B2B3B4 !important;
  /* text-shadow: 1px 1px 2px rgb(57, 100, 116); */
}
.gc-logo{
  margin-top: -5px !important;
  text-decoration: none;
}
.header ul {
  list-style: none;
  font-weight: 500 !important;
}
.nav-mob {
  display: none;
}
.page-title {
    display: none;
  }
.dropdown__menu-link:hover{

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
  .division {
    display: block;
  }
  
}
@media screen and (max-width: 840px) {
  .loading {
text-align: center !important;
  }
  .block-right {
    min-height: 170px;
    width: auto !important;
  }
  .chart-widget {
    width: auto !important;
    padding-bottom: 10px;
  }
  .chart {
    padding: 5px;
    margin-bottom: 0px;
  }
  .y-axis {
    margin-top: -28px;
  }
  .router-2 {
    padding: 0px;
  }
  .block {
    width: auto;
    height: auto;
    margin-left: 0px ;
    margin-right: 0px;
  }
  .blocks {
    padding: 15px !important;
  }
  .project-widget{
    margin-bottom: 0px;
    margin-top: 8px;
  }
  .project-blocks {
  margin-top: 25px
}
.contact {
  margin-top: 25px;
}
}
@media screen and (max-width: 705px){
  h2 {
    margin-top: 15px;
    margin-bottom: -5px !important;
    
  }
  .project-widget {

  }
  .project-blocks {
  
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .page-title {
    display: block;
  }
  .project-widget a{
    text-decoration: none !important;
  }
  .nav-mob {
    float: right;
  position: fixed;
    display: block !important;
    top: 0px;
    right: 0px;
    margin-right: 0px !important;
  }
  .header.wide {
    display: none !important;
    padding-right: 0px;
  }
  .buttons {
    display: none;
  }
  .button {
    margin-left: 0px;
    margin-top: 20px;
    display: block;
  } 
}
@media screen and (max-width: 590px) {
  .chart {
  width: auto;
  height: auto;
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
  .webdev {
    margin-bottom: 15px !important;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: -10px !important;
    
  }
}
@media screen and (max-width: 407px){
  body {
     padding: 0px !important;
  }
  .info {
    padding: 0px;
    margin: 0px !important;
    
  }
  .main-frame {
margin-top: -40px !important;
  }
  .summary {
    line-height: 12px;
  }
  .chart {
  width: 250px;
  height: auto;

}
.blocks {
  padding: 0px;
}
.block-inline {
  display: block !important;
}
.project-widget {
  padding: 10px;
  margin: 10px;
 
}
.contact {
  padding-top: 15px !important;
  padding-bottom: 0px !important;
  margin-bottom: -10px !important;

}
.dynamic-link {
  margin-bottom: 15px !important;
}
.link {
  margin-bottom: 15px !important;
}
.project-widget:hover {
    border: none !important;
}
.project.is-active .project-widget {
   border: none !important;
}
.project-widget img{
  width: 150px;
}
.gixcore {
  font-size: 28px !important;
}
.block {
  padding: 0px 5px;
  margin-bottom: 15px;
}
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
 .project-blocks {
  height: auto;
  }
}
</style>