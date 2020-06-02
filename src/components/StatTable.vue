<template>
    <table>
        <tr>
            <td></td>
            <th v-for="stat in stats" :key="stat.name">{{ stat.name }}</th>
        </tr>
        <tr>
            <th>min</th>
            <td v-for="stat in stats" :key="stat.name">{{ stat.min }}</td>
        </tr>
        <tr>
            <th>max</th>
            <td v-for="stat in stats" :key="stat.name">{{ stat.max }}</td>
        </tr>
        <tr>
            <th>mean</th>
            <td v-for="stat in stats" :key="stat.name">{{ stat.mean }}</td>
        </tr>
        <tr>
            <th>median</th>
            <td v-for="stat in stats" :key="stat.name">{{ stat.median }}</td>
        </tr>
        <tr>
            <th>standard Deviation</th>
            <td v-for="stat in stats" :key="stat.name">
                {{ stat.standardDeviation }}
            </td>
        </tr>
        <!-- <tr>
            <th>significance</th>
            <td v-for="stat in stats" :key="stat.significance">{{ stat.significance }}</td>
        </tr> -->
    </table>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {min, max, mean, median, standardDeviation} from 'simple-statistics'

import {DataRecords} from '@/dataHandler'

type Stat = {
    name: string
    min: number
    max: number
    mean: number
    median: number
    standardDeviation: number
    // significance: number
}

@Component
export default class StatTable extends Vue {
    @Prop({type: Object, required: true})
    private readonly data!: DataRecords

    get stats(): Stat[] {
        return Object.entries(this.data).map(([name, values]) => {
            return values.length
                ? {
                    name,
                    min: min(values),
                    max: max(values),
                    mean: mean(values),
                    median: median(values),
                    standardDeviation: standardDeviation(values),
                    // significance: 0,
                }
                : {
                    name,
                    min: 0,
                    max: 0,
                    mean: 0,
                    median: 0,
                    standardDeviation: 0,
                    // significance: 0,
                }
        })
    }
}
</script>
