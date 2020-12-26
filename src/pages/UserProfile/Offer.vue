<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Offers Promotions</h4>
          </md-card-header>
          <md-card-content>
            <offers-table table-header-color="green"></offers-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { OffersTable } from "@/components";

export default {
  components: {
    OffersTable
  }
};
</script>
