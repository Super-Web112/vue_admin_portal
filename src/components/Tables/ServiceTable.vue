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
        <md-table-cell md-label="date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Customer_name">{{ item.c_n }}</md-table-cell>
        <md-table-cell md-label="Phone_number">{{ item.p_n }}</md-table-cell>
        <md-table-cell md-label="History">{{ item.history }}</md-table-cell>
        <md-table-cell md-label="Add Estimate button">{{ item.btn }}</md-table-cell>
        <md-table-cell md-label="Add Part request">{{ item.request }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "service-table",
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
          type: "Dakota Rice",
          date: "",
          status: "Niger",
          c_n: "Oud-Turnhout",
          p_n: "Gloucester",
          history: "Gloucester",
          btn: "Gloucester",
          request: "Gloucester"
        },
        {
          id: 2,
          type: "Minerva Hooper",
          date: "",
          status: "Curaçao",
          c_n: "Sinaai-Waas",
          p_n: "Gloucester",
          history: "Gloucester",
          btn: "Gloucester",
          request: "Gloucester"
        },
        {
          id: 3,
          type: "Sage Rodriguez",
          date: "",
          status: "Netherlands",
          c_n: "Overland Park",
          p_n: "Gloucester",
         history: "Gloucester",
          btn: "Gloucester",
          request: "Gloucester"
        },
        {
          id: 4,
          type: "Philip Chaney",
          date: "",
          status: "Korea, South",
          c_n: "Gloucester",
          p_n: "Gloucester",
          history: "Gloucester",
          btn: "Gloucester",
          request: "Gloucester"
        }
      ]
    };
  }
};
</script>
