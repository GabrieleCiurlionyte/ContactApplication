<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Struktūra</md-dialog-title>

            <!--Add dialog information-->
            <template v-if="showInitial">
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-layout md-gutter">
                        <div class="md-layout-item item">
                            <img  @click="showOfficeForm()" class="icon" src="../../../assets/icons/icons8-map-marker-90.png"/>
                            <span class="md-headline">Būstinė</span>
                        </div>

                        <div class="md-layout-item item">
                            <img  @click="showDivisionForm()" class="icon" src="../../../assets/icons/icons8-department-100.png"/>
                            <div class="md-headline">Divizija</div>
                        </div>

                        <div class="md-layout-item item">
                            <img @click="showDepartamentForm()" class="icon" src="../../../assets/icons/icons8-organization-chart-people-100.png"/>
                            <div class="md-headline">Departamentas</div>
                        </div>

                        <div class="md-layout-item item">
                            <img @click="showGroupForm()" class="icon" src="../../../assets/icons/icons8-user-groups-100.png"/>
                            <div class="md-headline">Grupė</div>
                        </div>
                    </div>
                </div>
            </template>



            <md-dialog-actions>
                <md-button class="md-primary" v-if="!showInitial" @click="closeModalWindow()">Close</md-button>
                <md-button class="md-primary" v-if="!showInitial" @click="closeModalWindow()">Save</md-button>
            </md-dialog-actions>

        </md-dialog>

    </div>
</template>
  
<script>
import { bus } from "../../../main"
export default {
    name: 'DialogCustom',
    props: ['showDialog'],
    data: () => ({
        modalWindowMode : "",
        showInitial: false,

        showDepartamentFormBool: false,
        showGroupFormBool: false,
        showDivisionFormBool : false,
        showOfficeFormBool: false,
    }),
    created() {
        bus.$on('InitializeStructreCreation', () => {
            this.showInitial = true;
        })    
    },
    methods: {
        closeModalWindow: function () {
            this.$emit('closeModalWindow');
        },
        showOfficeForm() {
            this.showOfficeFormBool = true;
            this.showInitial = false;
        },
        showDivisionForm(){
            this.showDivisionFormBool = true;
            this.showInitial = false;
        },
        showDepartamentForm() {
            this.showDepartamentFormBool = true;
            this.showInitial = false;
        },
        showGroupForm() {
            this.showGroupFormBool = true;
            this.showInitial = false;
        }
    },
}
</script>
  
<style lang="css" scoped>
#display {
    display: flex;
}

.selection {
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
  