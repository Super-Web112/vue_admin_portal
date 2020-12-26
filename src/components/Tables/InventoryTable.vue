<template>
  <div>
    <md-toolbar md-elevation="0" class="md-transparent">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-left">
          <div class="md-collapse">
            <md-field>
              <label>Search</label>
              <md-input v-model="search_userName"
              @input="search_user"
              @change="search_user"></md-input>
            </md-field>
          </div>
        </div>
      </div>
    </md-toolbar>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Item_ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Item_name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Category">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Image_link">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Details">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Rating">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Number of item">{{ item.number }}</md-table-cell>
        <md-table-cell md-label="Reports"><img src="../../assets/img/ic_pdf.png" class="pdf_icon"></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "inventory-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
<style scoped>
.pdf_icon{
  width: 30px;
  height: 30px;
}
</style>