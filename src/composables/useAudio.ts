import { AudioContext } from 'standardized-audio-context'

export const useAudio = () => {
  const start = () => {
    const audioContext = new AudioContext()
    const oscillatorNode = audioContext.createOscillator()
    oscillatorNode.connect(audioContext.destination)

    oscillatorNode.start()
  }

  return {
    start,
  }
}
