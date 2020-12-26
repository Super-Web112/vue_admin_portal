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
        <md-table-cell md-label="Entity_id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Entity_name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="amount due">{{ item.amont_d }}</md-table-cell>
        <md-table-cell md-label="detailed report">{{ item.default }}</md-table-cell>
        <md-table-cell md-label="Pay now button">{{ item.pay }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "payout-table",
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
          name:"dfdh",
          amont_d : "Dakota Rice",
          default: "$36,738",
          pay: "Niger",
         
        },
        {
          id: 2,
          name: "Minerva Hooper",
          amont_d:"irir",
          default: "$23,738",
          pay: "Curaçao",
        
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          amont_d: "$56,142",
          default: "Netherlands",
          pay: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          amont_d: "$38,735",
          default: "Korea, South",
          pay: "Gloucester"
        }
      ]
    };
  }
};
</script>
