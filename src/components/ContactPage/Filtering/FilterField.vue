<template>
    <div id="container">
        <div class="md-layout-item">
            <md-field>
                <md-select v-model="selectedOption" name="country" id="country" :placeholder="PlaceholderText(dataset.key)">
                    <md-option v-for="data in dataset.value" :key="data.id" value="data">{{ data }}</md-option>
                </md-select>
            </md-field>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['dataset'],
    data() {
        return {
            selectedOption: null,
        }
    },
    methods: {
        PlaceholderText(value) {
            let word = "";
            switch (value) {
                case 'company':
                    word = "įmonę";
                    break;
                case 'division':
                    word = "diviziją";
                    break;
                case 'departament':
                    word = "departamentą";
                    break;
                case 'group':
                    word = "grupę";
                    break;
                case 'office':
                    word = "būstinę";
                    break;
            }
            return `Pasirinkite ${word}`;
        }
    }
}
</script>
  
<style scoped></style>