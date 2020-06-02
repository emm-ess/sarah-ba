<template>
    <div id="app">
        <div class="selection-wrapper">
            <uv-select v-model="selection.uv1">UV 1</uv-select>
            <uv-select v-model="selection.uv2">UV 2</uv-select>
        </div>
        <chart-wrapper :data="dataRecords" />
        <stat-table :data="dataRecords" />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import UvSelect from '@/components/UvSelect.vue'
import ChartWrapper from '@/components/ChartWrapper.vue'
import StatTable from '@/components/StatTable.vue'

import {UV, DATA, DataEntry, DataRecords} from './dataHandler'

function passUV(value: number, selection: number): boolean {
    return selection === 0 ? true : value === selection
}

@Component({
    components: {
        UvSelect,
        ChartWrapper,
        StatTable,
    },
})
export default class App extends Vue {
    selection = {
        uv1: UV[0].id,
        uv2: UV[0].id,
    }

    get selectedData(): DataEntry[] {
        const {uv1, uv2} = this.selection
        return DATA.filter((entry) => {
            return passUV(entry.uv1, uv1) && passUV(entry.uv2, uv2)
        })
    }

    get dataRecords(): DataRecords {
        return this.selectedData.reduce(
            (result, entry) => {
                result.plural.push(entry.plural)
                result.vor.push(entry.vor)
                result.krit.push(entry.krit)
                result.spill1.push(entry.spill1)
                result.spill2.push(entry.spill2)
                result.spill3.push(entry.spill3)
                result.sentence.push(entry.sentence)
                return result
            },
            {
                plural: [],
                vor: [],
                krit: [],
                spill1: [],
                spill2: [],
                spill3: [],
                sentence: [],
            } as DataRecords,
        )
    }
}
</script>

<style lang="sass">
#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

.selection-wrapper
    display: flex
    flex-direction: row
</style>
