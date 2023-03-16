<template>
    <md-field class="md-field">
      <md-icon id="icon">search</md-icon>
      <md-input  v-model="searchQuery"
       placeholder="Ieškoti kontaktų..."
        class="input"></md-input>
    </md-field>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: "",
        }
    },
}
</script>
  
<style scoped>
    #icon {
        background-color: #EDEDED;
    }


   
</style>