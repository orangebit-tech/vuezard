<template>
  <div id="app" class="app">
    <div class="header">
      <Header/>
    </div>
    <div class="main-frame">
   <p class="blue" href="">hello</p>
    </div>
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import scrapedin from 'scrapedin'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      
    }
  },
  methods: {
    async scrap(){
      const scrapedin = require('scrapedin')
        const profileScraper = await scrapedin({ email: 'login@mail.com', password: 'pass' })
        const profile = await profileScraper('https://www.linkedin.com/in/some-profile/')
      return profile


    }
  },
  created () {
    console.log(this.scrap())
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
  color: #29658A;


}
html {
  
}
body {
  background-color: #25274D !important;
  
}
.app {

} 
.header {
  margin-bottom: 130px;
}
.main-frame {
  border: 1px solid #29658A;
  height: 300px;
}

/* Palette */
.black {
  color: #25274D;
}
.grey {
  color: #474866;
}
.lightgrey {
  color: #A9ABB8;
}
.blue {
  color: #2D9CCA;
}
.darkblue {
  color: #29658A;
}

.bg-black {
  background-color: #25274D;
}
.bg-grey {
  background-color: #474866;
}
.bg-lightgrey {
  background-color: #A9ABB8;
}
.bg-blue {
  background-color: #2D9CCA;
}
.bg-darkblue {
  background-color: #29658A;
}


</style>
