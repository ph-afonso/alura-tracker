<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTemporizador :tempoEmSegundos="tempoEmSegundos" />
        <ButtonTemporizador @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <ButtonTemporizador @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTemporizador from './CronometroTemporizador.vue';
import ButtonTemporizador from './ButtonTemporizador.vue';

export default defineComponent({
    name: 'VisorTemporizador',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroTemporizador,
        ButtonTemporizador
    },
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar () {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);

            this.cronometroRodando = true;

        },
        finalizar () {
            clearInterval(this.cronometro);

            this.cronometroRodando = false;

            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
});
</script>

<style scoped>
</style>