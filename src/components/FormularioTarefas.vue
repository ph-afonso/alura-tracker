<template>
    <div class="box formulario">
        <div class="columns is-flex is-align-items-center">
            <div class="column is-8" role="form" aria-label="Formulário para criação de nova tarefa">
                <input class="input is-link" type="text" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
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
    emits: ['aoSalvarTarefa'],
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
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            });
            
            this.descricao = '';
        }
    }
});
</script>

<style>
    .formulario {
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
</style>