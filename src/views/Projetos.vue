<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input is-link" v-model="nomeDoProjeto" id="nomeDoOriejto">
            </div>
            <div class="field">
                <button class="button is-link" type="submit" >Salvar</button>
            </div>
        </form>
        <table class="table is-fullwidth mt-5">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: "ProjetosTarefas",
    data() {
        return {
            nomeDoProjeto: '',

        };
    },
    methods: {
        salvar () {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto);
            this.nomeDoProjeto = '';
        }
    },
     setup () {
        const store = useStore();

        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
     }
});
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
   
}

</style>