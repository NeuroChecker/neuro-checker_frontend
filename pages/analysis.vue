
<script lang="ts" setup>
const categories: Record<string, BulletLegendItemInterface> = {
  revenue: { name: 'Prikkelniveau', color: '#87A0E4' },
}

interface AreaChartItem {
  date: string
  revenue: number
}

const AreaChartData: AreaChartItem[] = [
  { date: 'Jan', revenue: 5 },
  { date: 'Feb', revenue: 2 },
  { date: 'Maa', revenue: 2 },
  { date: 'Apr', revenue: 3 },
  { date: 'Mei', revenue: 2 },
  { date: 'Jun', revenue: 1 },
  { date: 'Jul', revenue: 2 },
  { date: 'Aug', revenue: 3 },
  { date: 'Sep', revenue: 3 },
  { date: 'Oct', revenue: 4 },
  { date: 'Nov', revenue: 4 },
  { date: 'Dec', revenue: 5 },
]

const xFormatter = (tick: number, _i?: number, _ticks?: number[]): string => {
  return `${AreaChartData[tick]?.date ?? ''}`
}
</script>
<template>
  <div style="background-color: #1E1E1E; margin: 0px; padding: 0px; height: 100vh; max-width: 320px; width: 100%; overflow: hidden;">
    <div style=" grid: auto / auto auto; gap: 10px; padding: 5px; display: grid; justify-content: center; align-items: center; width: 100%;">
      <h1 style="grid-column: span 2; font-size: 15px; color: #87A0E4;"> Jouw Analyse </h1>
      <Card
        title="Geluid"
        :value="42"
      >
      </Card>
      <Card
          title="Licht"
          :value="100"
      >
      </Card>
      <Card
          title="Hartslag"
          :value="82"
      >
      </Card>
      <Card
          title="Bloeddruk"
          :value="120"
      >
      </Card>
      <AreaChart
          style="grid-column: span 2; width: 100%;"
          :data="AreaChartData"
          :height="250"
          y-label="Niveau"
          x-label="Maand"
          :categories="categories"
          :y-num-ticks="4"
          :x-num-ticks="8"
          :y-grid-line="true"
          :legend-position="LegendPosition.TopRight"
          :hide-legend="false"
          :x-formatter="xFormatter"
      />
    </div>
  </div>
</template>
