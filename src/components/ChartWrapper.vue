<template>
    <div>{{ data.length }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { DataEntry } from '@/dataHandler'

@Component
export default class ChartWrapper extends Vue {
    @Prop({type: Array, required: true})
    private readonly data!: DataEntry[]
}
</script>
