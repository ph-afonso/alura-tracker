<template>
    <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaItem v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefas v-if="listaEstaVazia">
            Nenhuma tarefa realizada hoje.
        </BoxTarefas>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefas from '../components/FormularioTarefas.vue'
import TarefaItem from '../components/TarefaItem.vue'
import ITarefa from '../interfaces/ITarefas';
import BoxTarefas from '../components/BoxTarefas.vue';

export default defineComponent({
    name: 'App',
    components: {
        FormularioTarefas,
        TarefaItem,
        BoxTarefas
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    }

});
</script>