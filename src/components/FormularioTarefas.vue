<template>
    <div class="box">
        <div class="columns is-flex is-align-items-center">
            <div class="column is-8" role="form" aria-label="Formulário para criação de nova tarefa">
                <input class="input" type="text" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column">
                <VisorTemporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VisorTemporizador from './VisorTemporizador.vue';

export default defineComponent({
    name: 'FormularioTarefas',
    components: {
        VisorTemporizador
    },
    data () {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            console.log('Tempo da tarefa:' + tempoDecorrido);
            console.log('Descricao:' + this.descricao);

            this.descricao = '';
        }
    }
});
</script>

<style scoped></style>