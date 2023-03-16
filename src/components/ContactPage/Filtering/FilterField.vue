<template>
    <div id="container">
        <md-autocomplete
      v-model="selectedFilter"
      :md-options="filters"
      md-layout="box"
      md-dense>
      <label>Filter</label>
    </md-autocomplete>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            //Get select option and bind them to it:
            //Categories are static
            selectedFilter: "",
            filters: [
                'Filter1',
                'Filter2',
                'Filter3',
                'Filter4',
            ],
        }
    },
}
</script>
  
<style scoped>

</style>