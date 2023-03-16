<template>
    <div id="inputFieldComponent">
        <div class="md-subheading"><slot name="header"></slot></div>

        <md-field id="input-field">
            <slot id="icon" name="icon"></slot>
            <slot name="input"></slot>
        </md-field>

    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
}
</script>
  
<style scoped>

    .md-subheading {
        text-align: left;
        color: #666666;
    }

    #icon {
        position: relative;
        max-width: 25px;
        max-height: 25px;
        padding-top: 7px;
        padding-right: 7.5px;
    }
    #input-field {
        background-color : #EEEEEE;
        margin: auto;
        text-align: left;
    }
</style>