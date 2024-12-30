<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';
import { useAudio } from '@/composables/useAudio'
import { useKeys, EVENT_KEYS } from '@/composables/useKeys'
import { FREQUENCIES, ji5LimitModesFreqRatios, ji7LimitModesFreqRatios } from '@/composables/constants'

const keys: Ref<string[]> = ref([])
const currentMode: Ref<number> = ref(0)
const currentInterval: Ref<string> = ref('NaturalMajor')
const currentFrequency: Ref<string> = ref('C4')

const frequencies: Ref = ref([
  'C4',
  'A4'
])
const modes: Ref = ref([
  {
    label: "ji5LimitModesFreqRatios",
    value: ji5LimitModesFreqRatios,
  },
  {
    label: "ji7LimitModesFreqRatio",
    value: ji7LimitModesFreqRatios
  },
])
const intervals: Ref = ref([
  'NaturalMajor',
  'NaturalMinor'
])

const { play } = useAudio()

const definedInterval = computed(() => {
  const localMode = modes.value[currentMode.value].value
  return localMode[currentInterval.value]
})

const { handleKeyDown, handleKeyUp } = useKeys({
  definedInterval,
  keys,
  frequency: currentFrequency,
  play
})

</script>

<template>
  <div class="about">
    <div class="room">
      <div class="controls">
        <select v-model="currentFrequency">
          <option v-for="(frequency) in frequencies" :key="frequency">{{ frequency }}</option>
        </select>
        <select v-model="currentMode">
          <option v-for="({ label }, key) in modes" :value="key" :key="key">{{ label }}</option>
        </select>
        <select v-model="currentInterval">
          <option v-for="(interval) in intervals" :key="interval">{{ interval }}</option>
        </select>
      </div>
      <div class="keyboard">
        <div :class="['key', { active: keys.indexOf(key) > -1 }]" v-for="(key, i) in EVENT_KEYS" :key="key"
          @mousedown="handleKeyDown({ code: key })" @mouseup="handleKeyUp({ code: key })"
          @mouseleave="handleKeyUp({ code: key })">
          <span class="title">{{ Object.keys(definedInterval)[i] }}</span>
          <span class="details">{{ +definedInterval[Object.keys(definedInterval)[i]].toFixed(5)
            }}</span>
          <span class="details">{{ +(definedInterval[Object.keys(definedInterval)[i]] * FREQUENCIES[currentFrequency]).toFixed(5) }}</span>
        </div>
      </div>
      <div class="body">
        <div class="main-key active">
          Play
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  cursor: pointer;
}

.room {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.controls {
  display: flex;
  gap: 10px;
}

.keyboard {
  display: flex;
  gap: 10px;
}

.key {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #090909;
  flex-direction: column;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 4px 4px 12px #d9d9d9, -6px -6px 12px #ffffff;
}
.key.active {
  background: linear-gradient(145deg, #affec7, #e6e6e6);
  border-color: #affec7;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.main-key {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #fb702c;
  box-shadow: 4px 4px 12px #d9d9d9, -6px -6px 12px #ffffff, #fb702c 2px 2px 10px 0px inset, #d42a02 -4px -4px 1px 0px inset;
  background-color: #d42a02;
}
.main-key:active {
  background: linear-gradient(145deg, #d42a02, red);
  border-color: #d42a02;
  box-shadow: inset 4px 4px 12px #ee2c00, inset -4px -4px 12px #ff6644;
}

.title {
  margin-bottom: auto;
  align-self: flex-start;
}

.details {
  font-size: 12px;
}
</style>
