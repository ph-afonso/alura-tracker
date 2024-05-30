<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent ({
        name: 'BoxTarefas',
        data () {
            return {
                estilos: {
                    background: '#0D3B66'
                }
            }
        }
    });
</script>
