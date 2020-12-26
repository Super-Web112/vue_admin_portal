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
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Customer Name">{{ item.customer_name }}</md-table-cell>
        <md-table-cell md-label="Phone Number">{{ item.phone_number }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
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
          type: "Shoes",
          date: "2020-12-23",
          status: "Niger",
          customer_name: "Dakota Rice",
          phone_number:"859658569"
        },
        {
          id: 2,
          type: "Shoes",
          date: "2020-12-23",
          status: "Niger",
          customer_name: "Dakota Rice",
          phone_number:"859658569"
        },
        {
          id: 3,
          type: "Shoes",
          date: "2020-12-23",
          status: "Niger",
          customer_name: "Dakota Rice",
          phone_number:"859658569"
        },
        {
          id: 4,
          type: "Shoes",
          date: "2020-12-23",
          status: "Niger",
          customer_name: "Dakota Rice",
          phone_number:"859658569"
        },
      ]
    };
  }
};
</script>
