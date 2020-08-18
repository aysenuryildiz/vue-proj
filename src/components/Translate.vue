<template>
  <div id="translate">
      <TranslateForm v-on:formSubmit="textToTranslate"></TranslateForm>
      <input type="text" v-model="translatedText" placeholder="Your translated text is here" disabled='true'>
  </div>
</template>
<script>
import TranslateForm from './TranslateForm';
export default {
  name: 'Translate',
  components: {
    TranslateForm
  },
  data(){
      return{
          translatedText:'',
      }
  },
  methods:{
      textToTranslate: function(text,language){
                        console.log(language);

          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?'+
          'key=trnsl.1.1.20200423T160657Z.bb950abf9cdfbce9.6fc870f4039a08b4fa6a23394cebb82ddeccfe1e'+
          '&text=' + text +
          '&lang='+language).then((res) =>{ 
              console.log(language);
              this.translatedText = res.body['text'][0];
              })


      }
  }
}
</script>

<style>

</style>