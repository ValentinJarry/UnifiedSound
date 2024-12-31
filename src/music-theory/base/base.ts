import { isNullish, type PartialRecord } from '../utilities/type-utilities'

// CONVERSION: HarmRatio to HarmRatioNotation

/** @Format '`numberator`:`denominator`'. Example natural fifth 3/2 frequency ratio is formatted as: `'3:2'`. */
export type HarmRatioNotation = string

export function harmRatio(num: number, den: number): HarmRatioNotation {
  if (isNullish(num) || isNullish(den)) {
    throw 'Invalid numerator and/or denominator to create harmonic ratio notation.'
  }
  return [num, den].join(':')
}

export function floatHarmRatio(notation: HarmRatioNotation): number {
  const [num, den] = notation.split(':').map(Number)

  return num / den
}

// ALL PURE INTERVALS

/**
 * @Abbr `PIN` : `Pure Interval Names`
 * @Doc Reference values from page 163 _'How Equal Temperament Ruined Harmony' - Ross W. Duffin_
 * @SymetricEnum
 */
export const enum PIN {
  Unison = 'Unison',
  /** @aka [QUESTION] `Diminised 2nd` ? */
  MinSemitone = 'MinSemitone',
  /** @aka `Minor 2nd` */
  MajSemitone = 'MajSemitone',
  /** @aka [QUESTION] `Augmented Unisson` ..? Not sure that can make to 12-tone degrees framework ? */
  MinTone = 'MinTone',
  /** @aka `Major 2nd` */
  MajTone = 'MajTone',
  Dim3rd = 'Dim3rd',
  Aug2nd = 'Aug2nd',
  Min3rd = 'Min3rd',
  Maj3rd = 'Maj3rd',
  Dim4th = 'Dim4th',
  Nat4th = 'Nat4th',
  Aug4th = 'Aug4th',
  Dim5th = 'Dim5th',
  /** @aka `Natural | Perfect | Pure | Just` `Fifth` same thing. */
  Nat5th = 'Nat5th',
  Aug5th = 'Aug5th',
  Min6th = 'Min6th',
  Maj6th = 'Maj6th',
  Aug6th = 'Aug6th',
  MinLesser7th = 'MinLesser7th',
  MinGreater7th = 'MinGreater7th',
  Maj7th = 'Maj7th',
  DimOct = 'DimOct',
  Aug7th = 'Aug7th',
  Oct = 'Oct',
}

// MODES

/**
 * TODO @Val [NEXT] Extend mode list as needed.
 * @SymetricEnum
 */
export enum ModeName {
  NaturalMajor = 'NaturalMajor',
  NaturalMinor = 'NaturalMinor',
  // TODO @Val [NEXT] [WEAEWEWQE] Fix issue with extra number of keys
  AllIntervals = 'AllIntervals',
}

/** @alias */
export type HarmRatio = number

// PURE MODE(S)

export type IntervalRatios = Record<PIN, number>

export type PureMode = PartialRecord<PIN, number>
export type PureModes = PartialRecord<ModeName, PureMode>

// export type PureAnnotatedMode = PartialRecord<PIN, HarmRatioNotation>
// export type PureAnnotatedModes = PartialRecord<ModeName, PureAnnotatedMode>
export type AllAnnotatedIntervals = Record<PIN, HarmRatioNotation>

// TEMPERED MODE(S)

export type TemperedMode = PartialRecord<PIN | string, number>
export type TemperedModes = PartialRecord<ModeName, TemperedMode>

// export type TemperedAnnotatedMode = Record<PIN, HarmRatioNotation>
// export type TemperedAnnotatedModes = Record<ModeName, TemperedMode>

/**
 * @Doc Reference values from page 163 _'How Equal Temperament Ruined Harmony' - Ross W. Duffin_
 * @CompositeEnum
 */
export const NaturalIntervalNotationRatios: AllAnnotatedIntervals = {
  [PIN.Unison]: '1:1',
  [PIN.MinSemitone]: '135:138',
  [PIN.MajSemitone]: '16:15',
  [PIN.MinTone]: '10:9',
  [PIN.MajTone]: '9:8',
  [PIN.Dim3rd]: '256:225',
  [PIN.Aug2nd]: '75:64',
  [PIN.Min3rd]: '6:5',
  [PIN.Maj3rd]: '5:4',
  [PIN.Dim4th]: '32:35',
  [PIN.Nat4th]: '4:3',
  [PIN.Aug4th]: '45:32',
  [PIN.Dim5th]: '64:45',
  [PIN.Nat5th]: '3:2',
  [PIN.Aug5th]: '405:256',
  [PIN.Min6th]: '8:5',
  [PIN.Maj6th]: '5:3',
  [PIN.Aug6th]: '225:128',
  [PIN.MinLesser7th]: '16:9',
  [PIN.MinGreater7th]: '9:5',
  [PIN.Maj7th]: '15:8',
  [PIN.DimOct]: '256:135',
  [PIN.Aug7th]: '2025:1024',
  [PIN.Oct]: '2:1',
}
