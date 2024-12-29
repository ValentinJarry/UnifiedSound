export const useAudio = () => {
  const audioCtx = new window.AudioContext()

  const initialize = () => {}

  const play = (frequency: number) => {
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    oscillator.connect(gainNode)
    gainNode.gain.value = 0.5
    gainNode.connect(audioCtx.destination)
    gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 1)
    oscillator.frequency.value = frequency
    oscillator.start()

    const stopTime = audioCtx.currentTime + 1
    oscillator.stop(stopTime)
  }

  return {
    initialize,
    play,
  }
}
