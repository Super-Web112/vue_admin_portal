<template>
  <div>
    <div>
     <md-dialog-prompt class="bg-1"
      :md-active.sync="active"
      v-model="value"
      md-title="What's your name?"
      md-input-maxlength="30"
      md-input-placeholder="Type your name..."
      md-confirm-text="Done" />
      <md-button class="md-raised md-primary mgl-10" @click="active = true">sync inventory</md-button>
      <span v-if="value">Value: {{ value }}</span>
      <md-button class="md- md-primary mgl-10" @click="active = true">create sale order</md-button>
      <md-button class="md-rairaisedsed md-primary mgl-10" @click="active = true">create service order</md-button>
      <md-button class="md-raised md-primary mgl-10" @click="active = true"> modify ratings</md-button>
      <md-button class="md-raised md-primary mgl-10" @click="active = true">upload invoice</md-button>
      <md-button class="md-raised md-primary mgl-10" @click="active = true">Settlement periods</md-button>
    </div>
  </div>
</template>
<style scoped>
.mgl-10{
    margin-left: 10px !important;
}
.btn-bgcolor{
    background-color: rgb(127, 255, 212);
}
.bg-1{
  width: 50px;
}

.md-dialog {
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    min-width: 800px !important;
    max-width: 80%;
    min-height: 500px;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    flex-direction: row;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 11;
    border-radius: 2px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: auto;
    transform: translate(-50%,-50%);
    transform-origin: center center;
    transition: opacity .15s cubic-bezier(.25,.8,.25,1),transform .2s cubic-bezier(.25,.8,.25,1);
    will-change: opacity,transform,left,top;
}
</style>
<script>
  export default {
    name: 'DialogPrompt',
    data: () => ({
      active: false,
      value: null
    })
  }
</script>
    