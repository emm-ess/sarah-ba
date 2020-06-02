<template>
    <div id="app">
        <div class="selection-wrapper">
            <uv-select v-model="selection.uv1">UV 1</uv-select>
            <uv-select v-model="selection.uv2">UV 2</uv-select>
        </div>
        <chart-wrapper :data="selectedData" />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import UvSelect from '@/components/UvSelect.vue'
import ChartWrapper from '@/components/ChartWrapper.vue'

import {UV, DATA} from './dataHandler'

function passUV(value: number, selection: number): boolean {
    return selection === 0 ? true : value === selection
}

@Component({
    components: {
        UvSelect,
        ChartWrapper,
    },
})
export default class App extends Vue {
    selection = {
        uv1: UV[0].id,
        uv2: UV[0].id,
    }

    get selectedData() {
        const {uv1, uv2} = this.selection
        return DATA.filter((entry) => {
            return passUV(entry.uv1, uv1) && passUV(entry.uv2, uv2)
        })
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
