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
        <md-table-cell md-label="Item_Id" >{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Item_Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Current price">{{ c_p }}</md-table-cell>
        <md-table-cell md-label="Discount percent">{{ d_p }}</md-table-cell>
        <md-table-cell md-label="flat discount">{{ f_d }}</md-table-cell>
        <md-table-cell md-label="Edit discount"><md-icon class="md-primary">edit</md-icon></md-table-cell>
        <md-table-cell md-label="Delete discount"><md-icon class="md-accent">delete_outline</md-icon></md-table-cell>
         <md-table-cell md-label="Reports"><img src="../../assets/img/ic_pdf.png" class="pdf_icon"></md-table-cell>
        <md-table-cell md-label="Parent Org">
          <md-autocomplete
              class="search"
              v-model="item.parent_org"
              :md-options="item.parent_org_content"
            >
          </md-autocomplete>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      search_userName: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ],
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          pwd: "aaaaa",
          type: "admin",
          reset_pwd_link: "https://admin.comtech.com",
          status: "blocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Andrey",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "blocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Veronika",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "blocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Stevan",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "unblocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Alexandra",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "blocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Cenya",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "unblocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
        {
          name: "Konstantin",
          pwd: "aaaaa",
          type: "user",
          reset_pwd_link: "https://admin.comtech.com",
          status: "blocked",
          parent_org: "",
          parent_org_content:[
            "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsf"
          ]
        },
      ]
    };
  },
  methods:{
    search_user(){
      var user_name = this.search_userName.toLowerCase()
      var row = document.getElementsByTagName('tr')
      for(var i=1;i<row.length;i++){
        var row_userName = row[i].querySelectorAll(".user-name>div")[0].innerHTML.toLowerCase()
        if(row_userName.indexOf(user_name)>-1) row[i].style.display = "table-row"
        else row[i].style.display = "none"
      }
    }
  }
};
</script>
<style scoped>
.md-table-cell input[type='password']{
  border: none;
  background-color: transparent;
}
.md-table-cell .md-field{
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.pdf_icon{
    width: 30px;
    height: 30px;
}
</style>