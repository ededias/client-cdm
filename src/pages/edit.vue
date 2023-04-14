<template>
  <VCard radius="large">
    <h3 class="title is-5 mb-2">Instruções</h3>
    <ul>
      <li>Passo 1: Crie a tabela em HTML</li>
      <li>Passo 2: Crie as funções CRUD usando a API do laravel</li>
    </ul>
  </VCard>
  <VCard radius="large" style="text-align: center">
    <VFlex class="column" flex-direction="row" flex-wrap="wrap">
      <VFlexItem flex-grow="1">
        <VField label="Nome" horizontal>
          <VControl fullwidth>
            <VInput v-model="props.name" type="text" placeholder="Cerveja" />
          </VControl>
        </VField>
      </VFlexItem>
      <VFlexItem flex-grow="1">
        <VField label="Valor" horizontal>
          <VControl fullwidth>
            <VInput v-model="props.value" type="text" placeholder="10,50" />
          </VControl>
        </VField>
      </VFlexItem>
    </VFlex>
    <VFlex class="column" flex-direction="row" flex-wrap="wrap">
      <VFlexItem flex-grow="1">
        <VField label="Data de Validade" horizontal>
          <VControl fullwidth>
            <VInput
              v-model="props.date"
              v-mask="'##/##/####'"
              type="text"
              placeholder="10/10/2023"
            />
          </VControl>
        </VField>
      </VFlexItem>
      <VFlexItem flex-grow="1">
        <VField label="Valor do Desconto" horizontal>
          <VControl fullwidth>
            <VInput v-model="props.discount" type="text" placeholder="10,50" />
          </VControl>
        </VField>
      </VFlexItem>
    </VFlex>
    <VFlex class="column" flex-direction="row" flex-wrap="wrap">
      <VFlexItem>
        <VField>
          <VControl>
            <VSelect v-model="props.discountType">
              <VOption value="">Tipo de desconto</VOption>
              <VOption value="1">Fixo</VOption>
              <VOption value="2">Percentual</VOption>
            </VSelect>
          </VControl>
        </VField>
      </VFlexItem>
    </VFlex>

    <VFlex flex-direction="column">
      <VFlexItem flex-grow="1" class="column">
        <VField>
          <VControl>
            <VTextarea
              v-model="props.description"
              rows="4"
              columns="10"
              placeholder="Digite a descrição simplificada"
            ></VTextarea>
          </VControl>
        </VField>
      </VFlexItem>
      <VFlexItem flex-grow="1" class="column">
        <VField>
          <VControl>
            <VTextarea
              v-model="props.smallDescription"
              rows="4"
              columns="10"
              placeholder="Digite a descrição completa"
            ></VTextarea>
          </VControl>
        </VField>
      </VFlexItem>
    </VFlex>
    <VFlex flex-direction="column">
      <VButtons
        ><VButton color="primary" outlined @click="save()"> Salvar </VButton></VButtons
      >
    </VFlex>
  </VCard>
</template>
  
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import axios from 'axios'
import { ref } from 'vue'

const props = ref({
  date: '',
  description: '',
  smallDescription: '',
  discount: 0.0,
  name: '',
  quantity: 0,
  value: 0.0,
  discountType: 0,
})

useHead({
  title: 'Clube do Malte',
})

const save = async () => {
  try {
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)
    const endPoint = params.get('hash') ? `update/${params.get('hash')}` : 'store'
    const method = params.get('hash') ? `PUT` : 'POST'
    const data = {
      validDate: props.value.date,
      description: props.value.description,
      smallDescription: props.value.smallDescription,
      discount: props.value.discount,
      name: props.value.name,
      quantity: props.value.quantity,
      value: props.value.value,
      discountType: props.value.discountType,
    }

    const response = await axios({
      method: method,
      url: `http://127.0.0.1:8000/api/products/${endPoint}`,
      data,
    })
    console.log(response)
    // const response = await axios.post(
    //   `http://127.0.0.1:8000/api/products/${endPoint}`,
    //   data
    // )
    if (response.status != 200) {
      return
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loadProduct()
})
const loadProduct = async () => {
  try {
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)
    const response = await axios.get(
      `http://127.0.0.1:8000/api/products/edit/${params.get('hash')}`
    )
    if (response.status != 200) return

    props.value.date = response.data.valid_date
    props.value.description = response.data.description
    props.value.smallDescription = response.data.small_description
    props.value.discount = response.data.discount
    props.value.discountType = response.data.discount_type
    props.value.name = response.data.name
    props.value.quantity = response.data.quantity
    props.value.value = response.data.value

    // return props
  } catch (e) {
    return []
  }
}
</script>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/_demo/landing';
</style>