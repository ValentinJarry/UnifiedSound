// import { AudioContext } from 'standardized-audio-context'

export const useAudio = () => {
  const start = () => {
    const audioCtx = new window.AudioContext()

    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    oscillator.start()
  }

  return {
    start,
  }
}
