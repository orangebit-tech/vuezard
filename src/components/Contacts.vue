<template>
    <div>
        <div class="block block-inline contact">
            <div v-for="(contact, index) in contacts" :key="index" @click="setLink(contact.url || contact.content)" class="icon">
                <font-awesome-icon :icon="contact.icon" />
            </div>
            <!-- <div class="icon">
                <font-awesome-icon icon="envelope" />
      
            </div>
            <div @click="this.setLink()" class="icon">
                <font-awesome-icon :icon="['fab', 'github']" />
         
            </div>
            <div class="icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
       
            </div>
            <div class="icon">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </div> -->
            <a v-if='link.includes("@")' class="dynamic-link" style="display: block; text-decoration: none; color: #C5C6C8; margin-top: 10px;">
                {{link}}
                <font-awesome-icon @click="doCopy"  class="copy-icon" v-clipboard:copy="link" style="margin-left: 6px !important" :icon="['fas', 'copy']" />
                <a v-if="message !==''" class="message" >{{message}}</a>
            </a>
            <div class="link" style="display: block; margin-top: 10px;" v-else>
                <a style=" text-decoration: none; color: #C5C6C8; display: inline;" :href='link' class="dynamic-link" >{{link}}</a><font-awesome-icon class="external-link-icon" style="margin-left: 6px;" v-if='link!==""' :icon="['fas', 'external-link-alt']" />
            </div>
            
          
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return {
            message: '',
            copiedText: '',
            link: '',
            contacts: [
                {
                    name: 'email',
                    icon: 'envelope',
                    content: 'support@orangebit.info',
                    url: ''
                },
                {
                    name: 'github',
                    icon: ["fab", "github"],
                    url: 'https://github.com/orangebit-tech/'
                },
                {
                    name: 'linkedin',
                    icon: ["fab", "linkedin"],
                    url: 'https://linkedin.com/in/a3i3 '
                },
                {
                    name: 'facebook',
                    icon: ["fab", "facebook"],
                    url: 'https://www.facebook.com/people/Aziz-Aznabakiyev/100010267336445'
                },
            ]
        }
    },
    methods: {
        setLink(content){
            this.link = content
        },
        doCopy: function () {
            if(this.link !==''){
                this.$copyText(this.link)
                this.message = 'Copied...'
            }
            
        }
    },
    created (){
        if(this.message !== ''){
            setTimeout(() => {
                this.message = '';
                // console.log('message: '+this.message)
            }, 1000);
        }
    }

}
</script>