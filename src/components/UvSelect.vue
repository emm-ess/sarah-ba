<template>
    <div>
        <label for="uv1">
            <slot />
        </label>
        <select id="uv1" v-model="innerValue">
            <option v-for="item in items"
            :key="item.id"
            :value="item.id">{{ item.name }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'
import { UV } from '@/dataHandler'

@Component
export default class UvSelect extends Vue {
    @Model('change', { type: Number })
    readonly selection!: number

    items = UV

    get innerValue(){
        return this.selection
    }
    set innerValue(value: number){
        this.$emit('change', value)
    }
}
</script>
