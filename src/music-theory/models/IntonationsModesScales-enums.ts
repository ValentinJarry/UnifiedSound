import { type HarmRatioNotation } from '../base/base'

// INTONATION -------------------------------------------------------------------------------------------------------------------------------

export type IntonationsUUID =
  | JustIntonationsUUID
  | NonEqualTemperedIntonationsUUID
  | MinimalEqualTemperedIntonationsUUID
  | EqualTemperedIntonationsUUID

/**
 * Enum representing various traditional non-equal temperaments.
 */
export enum NonEqualTemperedIntonationsUUID {
  // Pythagorean = "@tempered @non-eq PythagoreanTemperament",
  Meantone = '@tempered @non-eq MeantoneTemperament',
  // Werckmeister = "@tempered @non-eq WerckmeisterTemperament",
  // Kirnberger = "@tempered @non-eq KirnbergerTemperament",
  // BachLehman = "@tempered @non-eq Bach-LehmanTemperament",
  // QuarterCommaMeantone = "@tempered @non-eq QuarterCommaMeantoneTemperament"
}

/**
 * Enum representing various traditional non-equal temperaments.
 */
export enum JustIntonationsUUID {
  JustIntonation = '@pure JustIntonation',
  // QUESTION: Consider breaking down into NLimit tuning sub-systems for JI.
}

/**
 * @TODO @Val [FUTURE] Worry about these once model for , `JustIntonationsUUID`, `NonEqualTemperedIntonationsUUID` and regular `EqualTemperedIntonationsUUID` are done & functional.
 * @warning these equal temperaments produce les than 12 notes, and so, won't support fully any mode that contain more notes than they support.
 */
export enum MinimalEqualTemperedIntonationsUUID {}
/** @warning Support only 5 notes, and so, 5 mode intervals max. */
// Equal_5_TET = "5-TET",
/** @warning Support only 7 notes, and so, 7 mode intervals max. */
// Equal_7_TET = "7-TET",
/** @warning Support only 9 notes, and so, 9 mode intervals max. */
// Equal_9_TET = "9-TET",

/**
 * Enum representing the 12 (or more) notes of various equal temperaments.
 */
export enum EqualTemperedIntonationsUUID {
  Equal_12_TET = '@tempered @eq @diat 12-TET',
  // Equal_19_TET = "@tempered @eq @diat 19-TET",
  // Equal_22_TET = "@tempered @eq @diat 22-TET",
  // Equal_24_TET = "@tempered @eq @diat 24-TET",
  // Equal_31_TET = "@tempered @eq @diat 31-TET",
  // Equal_41_TET = "@tempered @eq @diat 41-TET",
  // Equal_53_TET = "@tempered @eq @diat 53-TET",
  // Equal_72_TET = "@tempered @eq @diat 72-TET",
  // Equal_96_TET = "@tempered @eq @diat 96-TET",
}

// Diatonic Intervals ------------------------------------------------------------

/** @TemperedIntervals necessarily, the concept of uniform steps to compose the modes comes into play only once we tempered the intonation. */
export enum DiatonicStepsUUID {
  Unison = 'Unison',
  QuarterTone = 'Quarter Tone',
  ThreeQuarterTone = 'Three Quarter Tone',
  SemiTone = 'SemiTone',
  WholeTone = 'WholeTone',
  ToneAndHalf = 'Tone and a half',
}

// MODES ------------------------------------------------------------------------------------------------------------------------------------

/** @deprecated @Abstract */
type _SupAll_ModesUuid =
  | WesternModesUuid
  | OrientalMaqamsUuid
  | TurskishMaqamsUuid
  | ChineseModesUuid

/**
 * Enum representing various musical modes.
 */
export enum WesternModesUuid {
  NaturalMajor = 'Natural Major',
  NaturalMinor = 'Natural Minor',
  HarmonicMinor = 'Harmonic Minor',
  HarmonicMajor = 'Harmonic Major',
  AscendingMelodicMinor = 'Ascending Melodic Minor',
  DescendingMelodicMinor = 'Descending Melodic Minor',
  Altered = 'Altered',
  Diminished = 'Diminished',
  Augmented = 'Augmented',
  Suspended = 'Suspended',

  Ionian = 'Ionian',
  Dorian = 'Dorian',
  Phrygian = 'Phrygian',
  Lydian = 'Lydian',
  Mixolydian = 'Mixolydian',
  Aeolian = 'Aeolian',
  Locrian = 'Locrian',

  MajorSharpFifth = 'Major Sharp Fifth',
  MixolydianFlatSecond = 'Mixolydian Flat Second',
  MixolydianFlatSecondFlatSixth = 'Mixolydian Flat Second Flat Sixth',
  AlteredDominantDoubleFlatSeventh = 'Altered Dominant Double0 Flat Seventh',
  LocrianDoubleFlatSeventh = 'Locrian Double Flat Seventh',
  PhrygianFlatFourth = 'Phrygian Flat Fourth',
  PhrygianDominant = 'Phrygian Dominant',
  HalfDiminished = 'Half Diminished',
  DorianFlatFifth = 'Dorian Flat Fifth',
  DorianSharpFourth = 'Dorian Sharp Fourth',
  AeolianDominant = 'Aeolian Dominant',
  LydianFlatThird = 'Lydian Flat Third',
  LydianAugmented = 'Lydian Augmented',
  LydianSharpSecond = 'Lydian Sharp Second',
  LydianAugmentedSharpSecond = 'Lydian Augmented Sharp Second',

  // QUESTION: Should we split western from western jazz modes ?
}

interface OrientalMaqamsUuid {
  // TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes
}
interface TurskishMaqamsUuid {
  // TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes
}
interface ChineseModesUuid {
  // TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes
}

// PURE (DESCRIBED) INTERVALS ---------------------------------------------------------------------------------------------------------------

/** @deprecated @Abstract */
type _SuppAll_TemperedIntervalsUUID =
  | EqTemperedIntervalsUUID
  | TemperedOrientalIntervalsUUID
  | TemperedTurkishIntervalsUUID
  | TemperedChineseIntervalsUUID

/** @PureIntervals */
export type ExtendedPureIntervalsUUID = BasePureIntervalsUUID | PureMicrotonalIntervalsUUID

/** @TemperedIntervals */
export type TemperedIntervalsUUID = EqTemperedIntervalsUUID | NeqTemperedIntervalsUUID

/** @EqualTemperedIntervals */
export type EqTemperedIntervalsUUID =
  | EqTemperedDiatonicIntervalsUUID
  | EqTemperedMicrotonalIntervalsUUID

/** @NonEqualTemperedIntervals */
export type NeqTemperedIntervalsUUID =
  | NeqTemperedDiatonicIntervalsUUID
  | NeqTemperedMicrotonalIntervalsUUID

/**
 * @Western
 * @Parent `<WesternIntervalsUUID>`
 * @Pair  with `<WesternIntervalsUUID>` in general and its `<TemperedIntervalsUUID>` counterpart)
 * @Warning Using two separated enum for insuring they never get mixed up.
 * @Test TODO @Val Add a unit test that verifies the keys from `<EqTemperedDiatonicIntervalsUUID>` match with the keys from `EqTemperedDiatonicIntervalsUUID`.
 */
export const enum BasePureIntervalsUUID {
  Unison = '@pure Unison',
  MinorSecond = '@pure Minor Second',
  MajorSecond = '@pure Major Second',
  AugmentedSecond = '@pure @diat @west Augmented Second',
  MinorThird = '@pure Minor Third',
  MajorThird = '@pure Major Third',
  PerfectFourth = '@pure Perfect Fourth',
  AugmentedFourth = '@pure Augmented Fourth',
  DiminishedFifth = '@pure Diminished Fifth',
  PerfectFifth = '@pure Perfect Fifth',
  AugmentedFifth = '@pure Augmented Fifth',
  DiminishedSixth = '@pure Diminished Sixth',
  MinorSixth = '@pure Minor Sixth',
  MajorSixth = '@pure Major Sixth',
  AugmentedSixth = '@pure Augmented Sixth',
  DiminishedSeventh = '@pure Diminished Seventh',
  MinorSeventh = '@pure Minor Seventh',

  // TODO @Val [NOW] Is the harmonic even a thing and does it fit here in the list ? I'm thinking it's not Diatonic.
  // TODO @Val [NOW] Look for other harmonic variations of each degrees.
  // HarmonicSeventh = "@pure @diat @west Minor Seventh", // `7:4`

  MajorSeventh = '@west @tempered @diat Major Seventh',
  AugmentedSeventh = '@west @tempered @diat Augmented Seventh',
  Octave = '@west @tempered @diat Octave',
}

export enum PureMicrotonalIntervalsUUID {
  SubminorUnison = '@eq-tempered @micro Subminor Unison',
  NeutralSecond = '@eq-tempered @micro Neutral Second',
  SupermajorSecond = '@eq-tempered @micro Supermajor Second',
  SubminorThird = '@eq-tempered @micro Subminor Third',
  NeutralThird = '@eq-tempered @micro Neutral Third',
  SuperFourth = '@eq-tempered @micro Super Fourth',
  SubminorFifth = '@eq-tempered @micro Subminor Fifth',
  NeutralSixth = '@eq-tempered @micro Neutral Sixth',
  SuperSixth = '@eq-tempered @micro Super Sixth',
  NeutralSeventh = '@eq-tempered @micro Neutral Seventh',
  UndecimalSeventh = '@eq-tempered @micro Undecimal Seventh',
  SuperOctave = '@eq-tempered @micro Super Octave',

  // TODO @Val [NEXT]
}

// EQUAL TEMPERED INTERVALS -----------------------------------------------------------------------------------------------------------------

/**
 * @TemperedIntervals
 * @Warning Using two separated enum for insuring they never get mixed up. (see also `EqTemperedDiatonicIntervalsUUID` enums).
 * @Test TODO @Val Add a unit test that verifies the keys from `EqTemperedDiatonicIntervalsUUID` match with the keys from `EqTemperedDiatonicIntervalsUUID`.
 */
export enum EqTemperedDiatonicIntervalsUUID {
  Unison = '@eq-tempered @diat Unison',
  MinorSecond = '@eq-tempered @diat Minor Second',
  MajorSecond = '@eq-tempered @diat Major Second',
  AugmentedSecond = '@eq-tempered @diat Augmented Second',
  MinorThird = '@eq-tempered @diat Minor Third',
  MajorThird = '@eq-tempered @diat Major Third',
  PerfectFourth = '@eq-tempered @diat Perfect Fourth',
  AugmentedFourth = '@eq-tempered @diat Augmented Fourth',
  DiminishedFifth = '@eq-tempered @diat Diminished Fifth',
  PerfectFifth = '@eq-tempered @diat Perfect Fifth',
  AugmentedFifth = '@eq-tempered @diat Augmented Fifth',
  DiminishedSixth = '@eq-tempered @diat Diminished Sixth',
  MinorSixth = '@eq-tempered @diat Minor Sixth',
  MajorSixth = '@eq-tempered @diat Major Sixth',
  AugmentedSixth = '@eq-tempered @diat Augmented Sixth',
  DiminishedSeventh = '@eq-tempered @diat Diminished Seventh',
  MinorSeventh = '@eq-tempered @diat Minor Seventh',
  MajorSeventh = '@eq-tempered @diat Major Seventh',
  AugmentedSeventh = '@eq-tempered @diat Augmented Seventh',
  Octave = '@eq-tempered @diat Octave',

  // TODO @Val [FUTURE] Expand on oriental intervals, and intervals in the second octave 9th, 10th, ...
}

/**
 * @EqualTemperedIntervals
 */
export enum EqTemperedMicrotonalIntervalsUUID {
  SubminorUnison = '@eq-tempered @micro Subminor Unison',
  NeutralSecond = '@eq-tempered @micro Neutral Second',
  SupermajorSecond = '@eq-tempered @micro Supermajor Second',
  SubminorThird = '@eq-tempered @micro Subminor Third',
  NeutralThird = '@eq-tempered @micro Neutral Third',
  SuperFourth = '@eq-tempered @micro Super Fourth',
  SubminorFifth = '@eq-tempered @micro Subminor Fifth',
  NeutralSixth = '@eq-tempered @micro Neutral Sixth',
  SuperSixth = '@eq-tempered @micro Super Sixth',
  NeutralSeventh = '@eq-tempered @micro Neutral Seventh',
  UndecimalSeventh = '@eq-tempered @micro Undecimal Seventh',
  SuperOctave = '@eq-tempered @micro Super Octave',
}

// NON-EQUAL TEMPERED INTERVALS -------------------------------------------------------------------------------------------------------------

/**
 * @TemperedIntervals
 * @Warning Using two separated enum for insuring they never get mixed up. (see also `EqTemperedDiatonicIntervalsUUID` enums).
 * @Test TODO @Val Add a unit test that verifies the keys from `EqTemperedDiatonicIntervalsUUID` match with the keys from `EqTemperedDiatonicIntervalsUUID`.
 */
export enum NeqTemperedDiatonicIntervalsUUID {
  Unison = '@neq-tempered @diat Unison',
  MinorSecond = '@neq-tempered @diat Minor Second',
  MajorSecond = '@neq-tempered @diat Major Second',
  AugmentedSecond = '@neq-tempered @diat Augmented Second',
  MinorThird = '@neq-tempered @diat Minor Third',
  MajorThird = '@neq-tempered @diat Major Third',
  PerfectFourth = '@neq-tempered @diat Perfect Fourth',
  AugmentedFourth = '@neq-tempered @diat Augmented Fourth',
  DiminishedFifth = '@neq-tempered @diat Diminished Fifth',
  PerfectFifth = '@neq-tempered @diat Perfect Fifth',
  AugmentedFifth = '@neq-tempered @diat Augmented Fifth',
  DiminishedSixth = '@neq-tempered @diat Diminished Sixth',
  MinorSixth = '@neq-tempered @diat Minor Sixth',
  MajorSixth = '@neq-tempered @diat Major Sixth',
  AugmentedSixth = '@neq-tempered @diat Augmented Sixth',
  DiminishedSeventh = '@neq-tempered @diat Diminished Seventh',
  MinorSeventh = '@neq-tempered @diat Minor Seventh',
  MajorSeventh = '@neq-tempered @diat Major Seventh',
  AugmentedSeventh = '@neq-tempered @diat Augmented Seventh',
  Octave = '@neq-tempered @diat Octave',

  // TODO @Val [FUTURE] Expand on oriental intervals, and intervals in the second octave 9th, 10th, ...
}

/**
 * @NonEqualTemperedIntervals
 * @Western
 */
export const enum NeqTemperedMicrotonalIntervalsUUID {
  SubminorUnison = '@neq-tempered @micro Subminor Unison',
  NeutralSecond = '@neq-tempered @micro Neutral Second',
  SupermajorSecond = '@neq-tempered @micro Supermajor Second',
  SubminorThird = '@neq-tempered @micro Subminor Third',
  NeutralThird = '@neq-tempered @micro Neutral Third',
  SuperFourth = '@neq-tempered @micro Super Fourth',
  SubminorFifth = '@neq-tempered @micro Subminor Fifth',
  NeutralSixth = '@neq-tempered @micro Neutral Sixth',
  SuperSixth = '@neq-tempered @micro Super Sixth',
  NeutralSeventh = '@neq-tempered @micro Neutral Seventh',
  UndecimalSeventh = '@neq-tempered @micro Undecimal Seventh',
  SuperOctave = '@neq-tempered @micro Super Octave',
}

/**
 * @BaseModelData
 * @Western
 * @EqualTempered
 * @Note `temperedIntervalsRatios` is not available as static `BaseModelData` because it need to be computed based off a `<TemperedIntonation>`.
 */
export const eqWesternIntervalsRatios: Record<EqTemperedIntervalsUUID, HarmRatioNotation> = {
  [EqTemperedDiatonicIntervalsUUID.Unison]: '1:1',
  [EqTemperedDiatonicIntervalsUUID.MinorSecond]: '16:15',
  [EqTemperedDiatonicIntervalsUUID.MajorSecond]: '9:8',
  [EqTemperedDiatonicIntervalsUUID.AugmentedSecond]: '125:108',
  [EqTemperedDiatonicIntervalsUUID.MinorThird]: '6:5',
  [EqTemperedDiatonicIntervalsUUID.MajorThird]: '5:4',
  [EqTemperedDiatonicIntervalsUUID.PerfectFourth]: '4:3',
  [EqTemperedDiatonicIntervalsUUID.AugmentedFourth]: '45:32',
  [EqTemperedDiatonicIntervalsUUID.DiminishedFifth]: '36:25',
  [EqTemperedDiatonicIntervalsUUID.PerfectFifth]: '3:2',
  [EqTemperedDiatonicIntervalsUUID.AugmentedFifth]: '25:16',
  [EqTemperedDiatonicIntervalsUUID.DiminishedSixth]: '128:75',
  [EqTemperedDiatonicIntervalsUUID.MinorSixth]: '8:5',
  [EqTemperedDiatonicIntervalsUUID.MajorSixth]: '5:3',
  [EqTemperedDiatonicIntervalsUUID.AugmentedSixth]: '125:72',
  [EqTemperedDiatonicIntervalsUUID.DiminishedSeventh]: '216:125',
  [EqTemperedDiatonicIntervalsUUID.MinorSeventh]: '16:9',
  [EqTemperedDiatonicIntervalsUUID.MajorSeventh]: '15:8',
  [EqTemperedDiatonicIntervalsUUID.AugmentedSeventh]: '125:64',
  [EqTemperedDiatonicIntervalsUUID.Octave]: '2:1',

  /** @ApproximativeRatio low resolution at `~33:32`. */
  [EqTemperedMicrotonalIntervalsUUID.SubminorUnison]: '513:512',
  [EqTemperedMicrotonalIntervalsUUID.NeutralSecond]: '12:11',
  [EqTemperedMicrotonalIntervalsUUID.SupermajorSecond]: '10:9',
  [EqTemperedMicrotonalIntervalsUUID.SubminorThird]: '7:6',
  [EqTemperedMicrotonalIntervalsUUID.NeutralThird]: '11:9',
  /** @ApproximativeRatio */
  [EqTemperedMicrotonalIntervalsUUID.SuperFourth]: '729:512',
  /** @ApproximativeRatio */
  [EqTemperedMicrotonalIntervalsUUID.SubminorFifth]: '1024:729',
  [EqTemperedMicrotonalIntervalsUUID.NeutralSixth]: '13:8',
  /** @ApproximativeRatio */
  [EqTemperedMicrotonalIntervalsUUID.SuperSixth]: '27:16',
  [EqTemperedMicrotonalIntervalsUUID.NeutralSeventh]: '7:4',
  [EqTemperedMicrotonalIntervalsUUID.UndecimalSeventh]: '11:6',
  /** @ApproximativeRatio */
  [EqTemperedMicrotonalIntervalsUUID.SuperOctave]: '1296:1024',
}

export enum TemperedOrientalIntervalsUUID {}
// TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes
export enum TemperedTurkishIntervalsUUID {}
// TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes
export enum TemperedChineseIntervalsUUID {}
// TODO @Val [FUTURE] [AISDHAWBEI] Expand on these modes

// SCALES -----------------------------------------------------------------------------------------------------------------------------------

export enum ScaleRootsUuid {
  A = 'A',
  ASharp = 'A#',
  BFlat = 'Bb',
  B = 'B',
  C = 'C',
  CSharp = 'C#',
  DFlat = 'Db',
  D = 'D',
  DSharp = 'D#',
  EFlat = 'Eb',
  E = 'E',
  F = 'F',
  FSharp = 'F#',
  GFlat = 'Gb',
  G = 'G',
  GSharp = 'G#',
  AFlat = 'Ab',

  // TODO @Val [NEXT] [QUESTION] Do we need double flats & sharps, and/or half flats & sharps? ?
}
