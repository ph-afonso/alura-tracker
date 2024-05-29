<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent ({
        name: 'BoxTarefas'
    });
</script>

<style scoped>
    .box {
        background: #0D3B66;
    }
</style>