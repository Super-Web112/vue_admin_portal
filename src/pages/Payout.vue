<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Payout</h4>
          </md-card-header>
          <md-card-content>
            <payout-table table-header-color="green"></payout-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PayoutTable } from "@/components";

export default {
  components: {
  
    PayoutTable
  }
};
</script>
