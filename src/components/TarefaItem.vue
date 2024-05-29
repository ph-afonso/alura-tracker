<template>
    <BoxTarefas>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTemporizador :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefas>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroTemporizador from "./CronometroTemporizador.vue";
import BoxTarefas from "./BoxTarefas.vue";
import ITarefa from "@/interfaces/ITarefas";

export default defineComponent({
    name: "TarefasItem",
    components: {
        CronometroTemporizador,
        BoxTarefas
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
                required: true,       
        }
    }
});
</script>

<style scoped>

</style>