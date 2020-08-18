<template>
  <div id="translateform">
       <form v-on:submit = "submitForm">
           <input type="text" v-model="textToTranslate" placeholder="Input you content here...">
           <select name="" id="" v-model="language">
               <option value="en">English</option>
               <option value="ru">Russian</option>
               <option value="es">Spanish</option>
           </select>
           <input type="submit" value="Translate">
       </form>
  </div>
</template>
<script>

export default {
  name: 'TranslateForm',
  data(){
  return{
      textToTranslate:"", 
      language:"en",  
  }
  },
  methods:{
      submitForm(){
          this.$emit('formSubmit', this.textToTranslate, this.language);
      }
  }
}
</script>

<style>

</style>