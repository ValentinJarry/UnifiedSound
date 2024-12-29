<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue';
import { useAudio, ji5LimitModesFreqRatios, ji7LimitModesFreqRatios } from '@/composables/useAudio'

const pristine = ref(true)
const notes: Ref<string[]> = ref([])

const C4 = 261.63;

const { oscillator, gainNode, initialize } = useAudio({
  frequency: C4
})

const eventKeys = "QWERTYUI".split("").map(_ => `Key${_}`);

const { NaturalMajor } = ji7LimitModesFreqRatios
const handleKeyDown = ({ code }: { code: string }) => {
  const found = eventKeys.indexOf(code);
  const toneKey = Object.keys(NaturalMajor)[found];
  const factor = NaturalMajor[toneKey];

  if (found > -1) {
    gainNode.gain.value = 1
    clearKey(code)
    notes.value.push(code)
    oscillator.frequency.value = C4 * factor;
  }
}
const handleKeyUp = ({ code }: { code: string }) => {
  console.log("keyup", code)

  clearKey(code)

  gainNode.gain.value = 0
}

const clearKey = (code: string) => {
  const found = notes.value.indexOf(code)
  if (found) {
    notes.value.splice(found, 1);
  }
}

const handleStart = () => {
  pristine.value = false
  initialize()
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown)
  document.addEventListener("keyup", handleKeyUp)
})

onBeforeUnmount(() => {
  oscillator.stop()
  document.removeEventListener("keydown", handleKeyDown)
  document.removeEventListener("keyup", handleKeyUp)
});

</script>

<template>
  <div class="about">
    <button @click="handleStart" v-if="pristine">start</button>
    <div v-else class="keyboard">
      <div :class="['key', { active: notes.indexOf(key) > -1 }]" v-for="key in eventKeys" :key="key">
        {{ key }}
      </div>
      <div>{{ notes }}</div>
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

.keyboard {
  display: flex;
  gap: 10px;
}

.key {
  width: 120px;
  height: 120px;
  background-color: red;
}
</style>
