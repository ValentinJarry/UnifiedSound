import {
  floatHarmRatio,
  ModeName,
  NaturalIntervalNotationRatios,
  PIN,
  type IntervalRatiosAppendix,
  type PureModes,
  type TemperedModes,
} from '@/music-theory/base/base'

/** @Doc _'How Equal Temperament Ruined Harmony' - Ross W. Duffin_ */
export const JiReferenceAppendix: IntervalRatiosAppendix = Object.entries(
  NaturalIntervalNotationRatios,
).reduce(
  (acc, [PIN, notation]) => ({ ...acc, [PIN]: floatHarmRatio(notation) }),
  {} as IntervalRatiosAppendix,
)

console.debug({ JiReferenceAppendix }) // @Val -debug-

/** @pureIntonation @Limit5th */
export const ji5LimitModesFreqRatios: PureModes = {
  [ModeName.NaturalMajor]: {
    [PIN.Unison]: JiReferenceAppendix.Unison,
    [PIN.MajTone]: JiReferenceAppendix.MajTone,
    [PIN.Maj3rd]: JiReferenceAppendix.Maj3rd,
    [PIN.Nat4th]: JiReferenceAppendix.Nat4th,
    [PIN.Nat5th]: JiReferenceAppendix.Nat5th,
    [PIN.Maj6th]: JiReferenceAppendix.Maj6th,
    [PIN.Maj7th]: JiReferenceAppendix.Maj7th,
    [PIN.Oct]: JiReferenceAppendix.Oct,
  },
  [ModeName.NaturalMinor]: {
    [PIN.Unison]: JiReferenceAppendix.Unison,
    [PIN.MajTone]: JiReferenceAppendix.MajTone,
    [PIN.Min3rd]: JiReferenceAppendix.Min3rd,
    [PIN.Nat4th]: JiReferenceAppendix.Nat4th,
    [PIN.Nat5th]: JiReferenceAppendix.Nat5th,
    [PIN.Min6th]: JiReferenceAppendix.Min6th,
    [PIN.MinLesser7th]: JiReferenceAppendix.MinLesser7th,
    [PIN.MinGreater7th]: JiReferenceAppendix.MinGreater7th,
    [PIN.Oct]: JiReferenceAppendix.Oct,
  },
}

console.debug({ ji5LimitModesFreqRatios }) // @Val -debug-

/** @pureIntonation @Limit7th */
export const ji7LimitModesFreqRatios: PureModes = {
  [ModeName.NaturalMajor]: {
    [PIN.Unison]: JiReferenceAppendix.Unison,
    [PIN.MajTone]: JiReferenceAppendix.MajTone,
    [PIN.Maj3rd]: JiReferenceAppendix.Maj3rd,
    [PIN.Nat4th]: JiReferenceAppendix.Nat4th,
    [PIN.Nat5th]: JiReferenceAppendix.Nat5th,
    [PIN.Maj6th]: JiReferenceAppendix.Maj6th,
    [PIN.Maj7th]: JiReferenceAppendix.Maj7th,
    [PIN.Oct]: JiReferenceAppendix.Oct,
  },
  [ModeName.NaturalMinor]: {
    [PIN.Unison]: JiReferenceAppendix.Unison,
    [PIN.MajTone]: JiReferenceAppendix.MajTone,
    [PIN.Min3rd]: JiReferenceAppendix.Min3rd,
    [PIN.Nat4th]: JiReferenceAppendix.Nat4th,
    [PIN.Nat5th]: JiReferenceAppendix.Nat5th,
    [PIN.Min6th]: JiReferenceAppendix.Min6th,

    // TODO @Val [NEXT] Research which minor seventh should appear
    [PIN.MinLesser7th]: JiReferenceAppendix.MinLesser7th,
    [PIN.MinGreater7th]: JiReferenceAppendix.MinGreater7th,

    [PIN.Oct]: JiReferenceAppendix.Oct,
  },
}

console.debug({ ji7LimitModesFreqRatios }) // @Val -debug-

/** @TET_12 */
export const tet12ModesFreqRatios: TemperedModes = {
  [ModeName.AllIntervals]: {
    [PIN.Unison]: 1,
    [PIN.MinTone]: Math.pow(Math.pow(2, 1 / 12), 1),
    [PIN.MajTone]: Math.pow(Math.pow(2, 1 / 12), 2),
    [PIN.Min3rd]: Math.pow(Math.pow(2, 1 / 12), 3),
    [PIN.Maj3rd]: Math.pow(Math.pow(2, 1 / 12), 4),
    [PIN.Nat4th]: Math.pow(Math.pow(2, 1 / 12), 5),

    /** @Note Equivalent to `Augmented4th` and `Diminished5th`. */
    ['Tritone']: Math.pow(Math.pow(2, 1 / 12), 6),

    [PIN.Nat5th]: Math.pow(Math.pow(2, 1 / 12), 7),
    [PIN.Min6th]: Math.pow(Math.pow(2, 1 / 12), 8),
    [PIN.Maj6th]: Math.pow(Math.pow(2, 1 / 12), 9),

    // TODO @Val [NEXT] Research which minor seventh is closest to ET.
    // [PIN.MinLesser7th]: Math.pow(Math.pow(2, 1/12), 10),
    // [PIN.MinGreater7th]: Math.pow(Math.pow(2, 1/12), 10),
    ['Minor 7th']: Math.pow(Math.pow(2, 1 / 12), 10),

    [PIN.Maj7th]: Math.pow(Math.pow(2, 1 / 12), 11),
    [PIN.Oct]: 2,
  },
  [ModeName.NaturalMajor]: {
    [PIN.Unison]: 1,
    [PIN.MajTone]: Math.pow(Math.pow(2, 1 / 12), 2),
    [PIN.Maj3rd]: Math.pow(Math.pow(2, 1 / 12), 4),
    [PIN.Nat4th]: Math.pow(Math.pow(2, 1 / 12), 5),
    [PIN.Nat5th]: Math.pow(Math.pow(2, 1 / 12), 7),
    [PIN.Maj6th]: Math.pow(Math.pow(2, 1 / 12), 9),
    [PIN.Maj7th]: Math.pow(Math.pow(2, 1 / 12), 11),
    [PIN.Oct]: 2,
  },
  [ModeName.NaturalMinor]: {
    [PIN.Unison]: 1,
    [PIN.MajTone]: Math.pow(Math.pow(2, 1 / 12), 2),
    [PIN.Maj3rd]: Math.pow(Math.pow(2, 1 / 12), 3),
    [PIN.Nat4th]: Math.pow(Math.pow(2, 1 / 12), 5),
    [PIN.Nat5th]: Math.pow(Math.pow(2, 1 / 12), 7),
    [PIN.Min6th]: Math.pow(Math.pow(2, 1 / 12), 8),

    // TODO @Val [NEXT] Research which minor seventh is closest to ET.
    // [PIN.MinLesser7th]: Math.pow(Math.pow(2, 1/12), 10),
    // [PIN.MinGreater7th]: Math.pow(Math.pow(2, 1/12), 10),
    ['Minor 7th']: Math.pow(Math.pow(2, 1 / 12), 10),

    [PIN.Oct]: 2,
  },
}

console.debug({ tet12ModesFreqRatios }) // @Val -debug-

export const FREQUENCIES: Record<string, number> = {
  // Cn1_Stanard_Concert: 261.63 / 32,
  // C0_Standard_Concert: 261.63 / 16,
  C1_Standard_Concert: 261.63 / 8,
  C2_Standard_Concert: 261.63 / 4,
  C3_Standard_Concert: 261.63 / 2,
  C4_Standard_Concert: 261.63,
  C5_Standard_Concert: 261.63 * 2,
  // C6_Standard_Concert: 261.63 * 4,
  // C7_Standard_Concert: 261.63 * 8,

  // An1_Standard_Concert: 440 / 32,
  // A0_Standard_Concert: 440 / 16,
  A1_Standard_Concert: 440 / 8,
  A2_Standard_Concert: 440 / 4,
  A3_Standard_Concert: 440 / 2,
  A4_Standard_Concert: 440,
  A5_Standard_Concert: 440 * 2,
  // A6_Standard_Concert: 440 * 4,
  // A7_Standard_Concert: 440 * 8,

  // An1_Standard_Baroque: 435 / 32,
  // A0_Standard_Baroque: 435 / 16,
  A1_Standard_Baroque: 435 / 8,
  A2_Standard_Baroque: 435 / 4,
  A3_Standard_Baroque: 435 / 2,
  A4_Standard_Baroque: 435,
  A5_Standard_Baroque: 435 * 2,
  // A6_Standard_Baroque: 435 * 4,
  // A7_Standard_Baroque: 435 * 8,
}
