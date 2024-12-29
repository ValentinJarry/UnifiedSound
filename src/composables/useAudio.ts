/** @pureIntonation @Limit5th */
export const ji5LimitModesFreqRatios: Record<string, Record<string, number>> = {
  NaturalMajor: {
    Unison: 1,
    MajorSecond: 9 / 8,
    MajorThird: 5 / 4, //
    PerfectFourth: 4 / 3,
    PerfectFifth: 3 / 2,
    MajorSixth: 5 / 3, //
    MajorSeventh: 15 / 8, //
    Octave: 2,
  },
  NaturalMinor: {
    Unison: 1,
    MajorSecond: 9 / 8,
    MinorThird: 5 / 4, //
    PerfectFourth: 4 / 3,
    PerfectFifth: 3 / 2,
    MinorSixth: 8 / 5, //
    MinorSeventh: 16 / 9, //
    Octave: 2,
  },
}

/** @pureIntonation @Limit7th */
export const ji7LimitModesFreqRatios: Record<string, Record<string, number>> = {
  NaturalMajor: {
    Unison: 1,
    MajorSecond: 9 / 8,
    MajorThird: 7 / 6, // CHANGED from 5/4
    PerfectFourth: 4 / 3,
    PerfectFifth: 3 / 2,
    MajorSixth: 8 / 5, // CHANGED from 5/3 (to 8/5 ~or 7/4~)
    // 'MajorSixth': 7/4, // CHANGED from 5/3 (to 8/5 ~or 7/4~)
    MajorSeventh: 15 / 8, // CHANGED from 15/8 (to 15/8 ~or 9/5~)
    // 'MajorSeventh': 9/5, // CHANGED from 15/8 (to 15/8 ~or 9/5~)
    Octave: 2,
  },
  NaturalMinor: {
    Unison: 1,
    MajorSecond: 9 / 8,
    MinorThird: 6 / 5, // CHANGED from 5/4 (~to 6/5~ or 7/6)
    // 'MinorThird': 7/6, // CHANGED from 5/4 (~to 6/5~ or 7/6)
    PerfectFourth: 4 / 3,
    PerfectFifth: 3 / 2,
    MinorSixth: 7 / 4, // CHANGED from 8/5
    // 'MinorSeventh': 7/4, // CHANGED from 16/9 (to 16/9 or 7/4)
    MinorSeventh: 16 / 9, // CHANGED from 16/9 (to 16/9 or 7/4)
    Octave: 2,
  },
}
export const useAudio = ({ frequency }: { frequency: number }) => {
  const audioCtx = new window.AudioContext()
  const oscillator = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()
  oscillator.connect(gainNode)
  gainNode.gain.value = 0
  gainNode.connect(audioCtx.destination)

  const initialize = () => {
    oscillator.frequency.value = frequency
    oscillator.start()
  }

  return {
    oscillator,
    gainNode,
    initialize,
  }
}
