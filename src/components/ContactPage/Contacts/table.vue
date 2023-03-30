<template>
    <div id="table" v-if="searched.length">
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header @md-selected="onSelect">
            <md-table-toolbar>
                <h1 class="md-title">Kontaktai</h1>

                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Ieškoti kontakto..." v-model="searchQuery" @input="searchOnTable" />
                </md-field>
            </md-table-toolbar>

            <md-table-empty-state md-label="Nerasta jokių kontaktų"
                :md-description="`Nerasta jokių kontaktų atitikusių paiešką: '${searchQuery}' query. Bandykite kitą paieškos terminą.`">
            </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                <md-table-cell md-label="Vardas" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Pavardė" md-sort-by="name">{{ item.surname }}</md-table-cell>
                <md-table-cell md-label="Pozicija" md-sort-by="email">{{ item.position }}</md-table-cell>
                <md-table-cell md-label="Telefono numeris" md-sort-by="gender">{{ item.phone_number }}</md-table-cell>
                <md-table-cell md-label="El. paštas" md-sort-by="title">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Adresas" md-sort-by="title">{{ item.office }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            contacts: "",
            searched: [],
            searchQuery: "",
            selected: "",
        }
    },
    async created() {
        this.contacts = await this.$contactPlugin.getAllContacts();
        this.searched = this.contacts;
    },
    methods: {
        searchOnTable() {
            this.searched = searchByName(this.users, this.search)
        },
        onSelect(item) {
            this.selected = item;
            this.$router.push(`/contacts/${this.selected.id}`);
        }
    }
}
</script>
    
<style scoped></style>