import type { _todoUnknown } from '@/music-theory/utilities/type-utilities'
import type { AllEqualTemperedIntonationsUUID, DiatonicInterval } from '../intonations/intonations'
import type {
  DiatonicStepsUUID,
  IntonationsUUID,
  JustIntonationsUUID,
  TemperedIntervalsUUID,
  WesternModesUuid,
  ExtendedPureIntervalsUUID,
} from '../IntonationsModesScales-enums'
import type { PureScales, TemperedScales } from '../scales/scales'

// MODES ------------------------------------------------------------------------------------------------------------------------------------

// [MODEL_ROOT] Base Mode & Complexifying Derivatives ----------------------------

/**
 * @deprecated @Abstract
 * Represents a musical mode with specific intervals.
 */
interface _BaseMode {
  /** Unique identifier for the mode using the enum. */
  uuid: WesternModesUuid
  /** Name of the mode. */
  name: string
  /**
   * @deprecated @Abstract
   * @Parent [BEQOWEJAS] UUID of the intonation most associated with this mode, *necessary* to compute `Mode.intervals`.
   */
  intonationsUuid: IntonationsUUID
}

/**
 * @ModelRoot
 * @Pure
 * @NonOctavian TODO @Val [QUESTION] [OUBQEWAS] ROI to decline into octavian and non-ocavian ?
 * @Descritpion Represents a musical mode with specific intervals.
 */
export interface PureMode extends _BaseMode {
  /** @Important */
  isFromPureIntonation: true
  /** @Important */
  isOctavian: false

  /**
   * @JustAndPure
   * @Parent [BEQOWEJAS] UUID of the intonation most associated with this mode, *necessary* to compute `Mode.intervals`.
   */
  intonationsUuid: JustIntonationsUUID

  intervalsUuids: ExtendedPureIntervalsUUID[]
  /**
   * @PureIntervals
   */
  intervals: Record<ExtendedPureIntervalsUUID, PureModeInterval>

  scales: PureScales
}

/**
 * @ModelRoot
 * @Tempered
 * @Octavian TODO @Val [QUESTION] [OUBQEWAS] ROI to decline into octavian and non-ocavian ?
 * @Descritpion Represents a musical mode with specific intervals.
 */
export interface TemperedMode extends _BaseMode {
  /** @Important */
  isFromPureIntonation: false
  /** @Important */
  isOctavian: true

  /**
   * @Tempered
   * @Parent [BEQOWEJAS] UUID of the intonation most associated with this mode, *necessary* to compute `Mode.intervals`.
   */
  intonationsUuid: AllEqualTemperedIntonationsUUID
  intervalsUuids: TemperedIntervalsUUID[]
  /**
   * @TemperedIntervals
   */
  intervals: Record<TemperedIntervalsUUID, TemperedModeInterval>

  diatonicStepsUuids: DiatonicStepsUUID[]
  diatonicSteps: Record<DiatonicStepsUUID, DiatonicInterval>

  scales: TemperedScales
}

export interface EqTemperedMode extends TemperedMode { // TODO -erase- the extend
  // TODO @Val [NEXT] [NEBQWPEKQ] [QBEIASEN] Differentiate from Equal and Non-Equal Tempered Modes.
}

export interface NeqTemperedMode extends TemperedMode { // TODO -erase- the extend
  // TODO @Val [NEXT] [NEBQWPEKQ] [QBEIASEN] Differentiate from Equal and Non-Equal Tempered Modes.
}

// Mode Intervals --------------------------------------------------------------------

/** @deprecated @Abstract */
export interface _BaseModeInterval {
  uuid: _todoUnknown
  /** @measure `Hz` */
  frequencyRatio: number
}

/**
 * @Pure
 * @Pair `TemperedModeInterval`
 * @Important A `<PureModeInterval>` coming from a `<JustIntonation>` are not subject to errorCentsFromReference deviations because reference tuning system is JustIntonation.
 * */
export interface PureModeInterval {
  uuid: ExtendedPureIntervalsUUID
  /** @deprecated Pure Mode Intervals are not subject to error cense deviations. a*/
  _errorCentsFromReference: 0
}

/**
 * @Tempered
 * @Pair with `PureModeInterval`
 * @Limitation A `Mode` by itself doesn't know the actual frequency of it's intervals, only their relative octavic `[1.0, 2.0]` or suboctavic `[2.0, ...[` ratios compared to the `root-ratio = 1.0`.
 * @Important If the `<TemperedModeInterval>` is coming from an equal tempered intonation, then `errorCentsFromReference > 0` is by far more likely than zero accross all intervals.
 */
export interface TemperedModeInterval {
  uuid: TemperedIntervalsUUID
  /** @measure `Hz` */
  frequencyRatio: number
  /** @measure `erisense` */
  errorCentsFromReference: number
}

export interface EqTemperedModeInterval extends TemperedModeInterval {// TODO -erase- the extend
  // TODO @Val [NEXT] [NEBQWPEKQ] [QBEIASEN] Differentiate from Equal and Non-Equal Tempered Modes.
}

export interface NeqTemperedModeInterval extends TemperedModeInterval { // TODO -erase- the extend
  // TODO @Val [NEXT] [NEBQWPEKQ] [QBEIASEN] Differentiate from Equal and Non-Equal Tempered Modes.
}
