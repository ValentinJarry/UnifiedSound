import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { C4, type Mode } from '@/composables/constants'

export const EVENT_KEYS = 'QWERTYUI'.split('').map((_) => `Key${_}`)

type PlayFunction = (frequency: number) => void
export const useKeys = ({
  definedInterval,
  keys,
  play,
}: {
  definedInterval: Ref<Mode>
  keys: Ref<string[]>
  play: PlayFunction
}) => {
  const handleKeyDown = ({ code }: { code: string }) => {
    const interval = definedInterval.value
    const found = EVENT_KEYS.indexOf(code)
    const isPlaying = isDownKey(code)
    const toneKey = Object.keys(interval)[found]
    const factor = Number(interval[toneKey])

    if (found > -1 && isPlaying == -1) {
      keys.value.push(code)
      play(C4 * factor)
    }
  }

  const isDownKey = (code: string) => {
    return keys.value.indexOf(code)
  }

  const handleKeyUp = ({ code }: { code: string }) => {
    clearKey(code)
  }

  const clearKey = (code: string) => {
    const found = isDownKey(code)
    if (found > -1) {
      keys.value.splice(found, 1)
    }
  }
  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('keyup', handleKeyUp)
  })
  return {
    handleKeyDown,
    handleKeyUp,
  }
}
