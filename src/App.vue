<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefas @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaItem  v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefas v-if="listaEstaVazia">
          Nenhuma tarefa realizada hoje.
        </BoxTarefas>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import FormularioTarefas from './components/FormularioTarefas.vue'
import TarefaItem from './components/TarefaItem.vue'
import ITarefa from './interfaces/ITarefas';
import BoxTarefas from './components/BoxTarefas.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefas,
    TarefaItem,
    BoxTarefas
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) { 
      this.tarefas.push(tarefa)
    },
    trocarTema (modoEscuroAtivo : boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }

});
</script>

<style scoped>
    .lista {
        padding: 1.25rem; 
    }

    main {
      --bg-primario: #FFF;
      --texto-primario: #000;
    }

    main.modo-escuro{
      --bg-primario: #2B2D42;
      --texto-primario: #FFF;
    }
    .conteudo {
      background-color: var(--bg-primario);
    }
</style>
