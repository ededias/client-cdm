<template>
  <VCard radius="large">
    <h3 class="title is-5 mb-2">Instruções</h3>
    <ul>
      <li>Passo 1: Crie a tabela em HTML</li>
      <li>Passo 2: Crie as funções CRUD usando a API do laravel</li>
    </ul>
  </VCard>
  <VCard radius="large" style="text-align: center">
    <VFlexTable :columns="columns" :data="data" @row-click="clickOnRow">
      <template #body-cell="{ row, column }">
        <VAction
          v-if="column.key === 'showData'"
          color="danger"
          @click.stop="deleteData(row.uuid)"
        >
          Excluir
        </VAction>

        <VAction v-if="column.key === 'showData'" :to="`/edit?hash=${row.uuid}`">
          Visualizar
        </VAction>
      </template>
    </VFlexTable>
  </VCard>
  <VCard>
    <VFlex flex-direction="column">
      <VButtons
        ><VAction color="primary" outlined :to="`/edit`"> Novo </VAction></VButtons
      >
    </VFlex>
  </VCard>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import axios from 'axios'
import moment from 'moment'

useHead({
  title: 'Clube do Malte',
})

onMounted(() => {
  loadProduct()
})

const loadProduct = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/products')
    if (response.status != 200) return
    return response.data
  } catch (e) {
    return []
  }
}

const deleteData = async (uuid: string) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/products/destroy/${uuid}`
    )
    if (response.status != 200) return
  } catch (e) {
    return []
  }
}
const data = [...(await loadProduct())]
const columns = {
  name: {
    label: 'Nome',
  },
  value: {
    label: 'Valor',
    format: (value: number) =>
      value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  },
  discount: {
    label: 'Desconto',
  },
  valid_date: {
    label: 'Validade',
    format: (value: string) => moment(value).format('DD/MM/YYYY'),
  },
  quantity: {
    label: 'Quantidade',
  },
  delete: {
    label: '',
    align: 'end',
  },
  showData: {
    label: '',
    align: 'end',
  },
}
const selectedRowsId = ref<number[]>([])
function clickOnRow(row: any) {
  if (selectedRowsId.value.includes(row.id)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== row.id)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, row.id]
  }
}
</script>


<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/_demo/landing';
</style>
