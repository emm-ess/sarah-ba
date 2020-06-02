<template>
    <div>
        <canvas ref="canvas" width="400" height="400"></canvas>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Ref, Watch} from 'vue-property-decorator'
import Chart from 'chart.js'
import 'chartjs-chart-box-and-violin-plot'

import {DataRecords} from '@/dataHandler'

@Component
export default class ChartWrapper extends Vue {
    @Prop({type: Object, required: true})
    private readonly data!: DataRecords

    @Ref()
    private readonly canvas!: HTMLCanvasElement

    chart!: Chart

    mounted(): void {
        this.addChart()
    }

    get boxplotData() {
        return {
            labels: ['plural', 'vor', 'krit', 'spill1', 'spill2', 'spill3', 'sentence'],
            datasets: [
                {
                    label: 'Dataset 1',
                    borderColor: 'red',
                    borderWidth: 1,
                    outlierRadius: 3,
                    itemRadius: 3,
                    outlierColor: '#999999',
                    data: Object.values(this.data),
                },
            ],
        }
    }

    @Watch('data')
    updateChart(): void {
        this.chart && this.chart.destroy()
        this.addChart()
    }

    addChart(): void {
        const ctx = this.canvas.getContext('2d')
        this.chart = new Chart(ctx as CanvasRenderingContext2D, {
            type: 'boxplot',
            data: this.boxplotData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Chart.js Box Plot Chart',
                },
                // scales: {
                //     xAxes: [{
                //         // Specific to Bar Controller
                //         categoryPercentage: 0.9,
                //         barPercentage: 0.8,
                //     }],
                // },
            },
        })
    }
}
</script>
