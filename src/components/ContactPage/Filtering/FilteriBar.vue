<template>
    <div id="container">
        <filter-field></filter-field>
        <filter-field></filter-field>
    </div>
</template>
  
<script>
import FilterField from "./FilterField.vue"

export default {
    components: {
        'filter-field': FilterField,
    },
    data() {
        return {

        }
    },
}
</script>
  
<style scoped></style>