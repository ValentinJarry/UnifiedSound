<script setup lang="ts">
import { ref, computed, type Ref } from 'vue';
import { useAudio } from '@/composables/useAudio'
import { useKeys, EVENT_KEYS } from '@/composables/useKeys'
import { C4, ji5LimitModesFreqRatios, ji7LimitModesFreqRatios } from '@/composables/constants'

const keys: Ref<string[]> = ref([])
const currentMode: Ref<number> = ref(0)
const currentInterval: Ref<string> = ref('NaturalMajor')

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
  play
})

</script>

<template>
  <div class="about">
    <div class="room">
      <div class="controls">
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
          <span class="details">{{ +(definedInterval[Object.keys(definedInterval)[i]] * C4).toFixed(5) }}</span>
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
  /* background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 12px 12px 24px #d9d9d9,
    -12px -12px 24px #ffffff; */
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.title {
  margin-bottom: auto;
  align-self: flex-start;
}

.details {
  font-size: 12px;
}

.key.active {
  background: linear-gradient(145deg, #affec7, #e6e6e6);
  border-color: #affec7;
  /* box-shadow: 12px 12px 24px #d9d9d9,
    -12px -12px 24px #ffffff; */
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
</style>
