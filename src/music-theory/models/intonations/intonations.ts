import type { PartialRecord } from '@/music-theory/utilities/type-utilities'
import type {
  DiatonicStepsUUID,
  EqualTemperedIntonationsUUID,
  ExtendedPureIntervalsUUID,
  IntonationsUUID,
  JustIntonationsUUID,
  MinimalEqualTemperedIntonationsUUID,
  NonEqualTemperedIntonationsUUID,
  TemperedIntervalsUUID,
  WesternModesUuid,
} from '../IntonationsModesScales-enums'
import type { PureMode, TemperedMode, TemperedModeInterval } from '../modes/modes'

// TuningReference --------------------------------------------------------------------------------------------------------------------------

export interface TuningReference {
  /** @measure `Hz` */
  frequency: number
  /**
   * TODO @Val [Next] This has to map to a union generic notes enum.
   * But but then A4 or A4 from A major for JI then??
   */
  name: string
}

// [MODEL_ROOT] Base Intonation --------------------------------------------------

/**
 * @Abstract
 * @Note Used for an intermediary step in temperament object initialization.
 */
interface _BaseIntonation {
  readonly uuid: IntonationsUUID
  readonly name: string
  /** Reference frequency for the scale (e.g., `440Hz` for A4 in `12-TET`, or for A4 from C Major in JI). */
  readonly tuningReference: TuningReference
}

// JustIntonation ----------------------------------------------------------------

export enum NLimitSystem {
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _7 = 7,
  _9 = 9,
  _11 = 11,
  _13 = 13,
}

/** @deprecated @Abstract */
type _Prec_JustIntonation = Omit<JustIntonation, 'modes'>

/**
 * @ModelRoot
 * @Description epresents Just Intonation with specific intervals and relative frequency ratios.
 *
 * @Important `JustIntonation` does not have `diatonicSteps` because it is not equally tempered.
 * @Important While `JustIntonation` relies on relative harmonic ratios, it requires a `tuningReference` to anchor the system for absolute pitch calculations.
 */
export class JustIntonation implements _BaseIntonation {
  constructor(
    readonly uuid: JustIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    /** @PureIntervals */
    readonly intervalsUuids: ExtendedPureIntervalsUUID[],
  ) {
    // super(uuid, name, tuningReference)

    this._modes = this._computeModes([
      // TODO @Val [RESUME]
    ])
  }

  /**
   * @PureModes
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly _modes: Record<WesternModesUuid, PureMode>

  private _computeModes(modeUuids: WesternModesUuid[]): Record<WesternModesUuid, PureMode> {
    // TODO @Val [NOW]
    return {} as Record<WesternModesUuid, PureMode>
  }
}

// NonEqualTemperedIntonation ----------------------------------------------------

/** @deprecated @Abstract */
type _Prec_TraditionalNonEqualTemperedIntonation = Omit<EqualTemperedIntonation, 'modes'>

/**
 *
 * @ModelRoot
 * @Descritpion Represents a traditional non-equal temperament.
 * @Important `JustIntonation` does not have `diatonicStepsUuids` nor `diatonicSteps` because it is not equally tempered.
 */
export class NonEqualTemperedIntonation implements _BaseIntonation {
  constructor(
    /** Unique identifier for the traditional non-equal temperament. */
    readonly uuid: NonEqualTemperedIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    /** @PureIntervals */
    readonly intervalsUuids: TemperedIntervalsUUID[],
  ) {
    // super(uuid, name, tuningReference);

    this.allIntervals = this._computeIntervals(intervalsUuids)
    this.modes = this._computeModes(
      // TODO @Val [NEXT] Introduce `new Mode()` constructor to facilitage interval seletion.
      // Put all 12 intervals for now: the (diatonic-implied) 'Chromatic Scale'
      this.allIntervals,
    )
  }

  /** @TemperedIntervals */
  readonly allIntervals: Record<TemperedIntervalsUUID, TemperedModeInterval>
  private _computeIntervals(
    intervalsUuids: TemperedIntervalsUUID[],
  ): Record<TemperedIntervalsUUID, TemperedModeInterval> {
    // TODO @Val [NOW]
    return {} as Record<TemperedIntervalsUUID, TemperedModeInterval>
  }

  /**
   * @TemperedModes
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly modes: Record<WesternModesUuid, TemperedMode>
  private _computeModes(
    selectedModeIntervals: PartialRecord<TemperedIntervalsUUID, TemperedModeInterval>,
  ): Record<WesternModesUuid, TemperedMode> {
    // TODO @Val [NOW]
    return {} as Record<WesternModesUuid, TemperedMode>
  }
}

// EqualTemperedIntonation -------------------------------------------------------

/** @deprecated @Abstract */
type _Prec_EqualTemperedIntonation = Omit<EqualTemperedIntonation, 'modes'>

/**
 * @ModelRoot
 * @Description Represents an equal temperament with specific intervals and relative frequency ratios.
 * @Important Equal temperaments have `diatonicStepsUuids` nor `diatonicSteps`.
 */
export class EqualTemperedIntonation implements _BaseIntonation {
  constructor(
    /** Unique identifier for the equal temperament. */
    readonly uuid: EqualTemperedIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    /** @TemperedStepIntervals */
    readonly diatonicStepsUuids: DiatonicStepsUUID[],
    /** @TemperedIntervals */
    readonly intervalsUuids: TemperedIntervalsUUID[],
  ) {
    // super(uuid, name, tuningReference);

    // TODO @Val [NEXT]
    this.allDiatonicSteps = this._computeDiatonicSteps(diatonicStepsUuids)
    this.allIntervals = this._computeIntervals(diatonicStepsUuids, intervalsUuids)
    this.modes = this._computeModes(
      // TODO @Val [NEXT] Introduce `new Mode()` constructor to facilitage interval seletion.
      // Put all 12 intervals for now: the (diatonic-implied) 'Chromatic Scale'
      this.allIntervals,
    )
  }

  /** @TemperedStepIntervals */
  readonly allDiatonicSteps: Record<DiatonicStepsUUID, DiatonicInterval>
  private _computeDiatonicSteps(
    diatonicStepsUuids: DiatonicStepsUUID[],
  ): Record<DiatonicStepsUUID, DiatonicInterval> {
    // TODO @Val [NOW]
    return {} as Record<DiatonicStepsUUID, DiatonicInterval>
  }

  /** @TemperedIntervals */
  readonly allIntervals: Record<TemperedIntervalsUUID, TemperedModeInterval>
  private _computeIntervals(
    diatonicStepsUuids: DiatonicStepsUUID[],
    intervalsUuids: TemperedIntervalsUUID[],
  ): Record<TemperedIntervalsUUID, TemperedModeInterval> {
    // TODO @Val [NOW]
    return {} as Record<TemperedIntervalsUUID, TemperedModeInterval>
  }

  /**
   * @TemperedModes
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly modes: Record<WesternModesUuid, TemperedMode>
  private _computeModes(
    selectedModeIntervals: PartialRecord<TemperedIntervalsUUID, TemperedModeInterval>,
  ): Record<WesternModesUuid, TemperedMode> {
    // TODO @Val [NOW]
    return {} as Record<WesternModesUuid, TemperedMode>
  }
}

// Diatonic Intervals ------------------------------------------------------------

/** @TemperedIntervals The concept of uniform steps to compose the modes comes into play only once we tempered the intonation. */
export interface DiatonicInterval {
  uuid: DiatonicStepsUUID
  frequencyRatio: number
}

// Conveniance Unions Types ------------------------------------------------------

/** @deprecated @Abstract */
type _SupAll_IntonationsUUID = JustIntonationsUUID | AllSyntheticOctavianIntonationsUUID

/**
 * @Abstract
 * TODO @Val [NEXT] [NAIWIEHAWPE] Expand on AllNonEqualTemperedSynthOctavianIntonationsUUID.
 */
export type AllSyntheticOctavianIntonationsUUID = AllEqualTemperedIntonationsUUID
// | AllNonEqualTemperedSynthOctavianIntonationsUUID;

/** @Important Non necessarily octavian. */
export type AllTemperedIntonationsUUID =
  | MinimalEqualTemperedIntonationsUUID
  | NonEqualTemperedIntonationsUUID
  | EqualTemperedIntonationsUUID

export type AllEqualTemperedIntonationsUUID =
  | MinimalEqualTemperedIntonationsUUID
  | EqualTemperedIntonationsUUID

/**
 * @deprecated @Abstract
 * Represents a temperament, which can be equal, traditional non-equal, or Just Intonation.
 */
export type PossiblyTemperedIntonation =
  | EqualTemperedIntonation
  | NonEqualTemperedIntonation
  | JustIntonation
