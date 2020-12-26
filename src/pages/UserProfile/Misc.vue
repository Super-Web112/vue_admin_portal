<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Miscellaneous</h4>
          </md-card-header>
          <md-card-content>
            <misc-table table-header-color="green"></misc-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { MiscTable } from "@/components";

export default {
  components: {
    MiscTable
  }
};
</script>
