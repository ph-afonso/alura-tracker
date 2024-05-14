<template>
    <div class="box">
        <div class="columns is-flex is-align-items-center">
            <div class="column is-8" role="form" aria-label="Formulário para criação de nova tarefa">
                <input class="input" type="text" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>00:00:00</strong>
                    </section>
                    <button class="buttton">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="buttton">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FormularioTarefas'
});
</script>

<style scoped></style>