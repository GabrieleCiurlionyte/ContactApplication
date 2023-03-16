<template>
    <div id="container">
        <md-button class="md-button md-raised md-primary">
            <img id="left_arrow" class="arrow" src="../../assets/icons/icons8-double-left-96.png">
            <span>Praeitas puslapis</span>
        </md-button>

        <md-button class="md-button md-raised md-primary">
            <span>Kitas puslapis</span>
            <img id="right_arrow" class="arrow" src="../../assets/icons/icons8-double-left-96.png">
        </md-button>

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
    #container {
        width : 100%;
        display: flex;
        justify-content: center;
    }
    .md-button {
        background-color: #1F3F77;
    }
    span {
        color: white;
    }
    .arrow {
        max-width: 15%;
    }
    #right_arrow {
        transform: rotate(180deg);
    }
</style>