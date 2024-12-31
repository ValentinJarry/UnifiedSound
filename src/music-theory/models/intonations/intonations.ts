import {
  lazy,
  type LazyPartialRecord,
  type PartialRecord,
} from '@/music-theory/utilities/type-utilities'
import {
  WesternModesUuid,
  type DiatonicStepsUUID,
  type EqTemperedIntervalsUUID,
  type EqualTemperedIntonationsUUID,
  type ExtendedPureIntervalsUUID,
  type IntonationsUUID,
  type JustIntonationsUUID,
  type MinimalEqualTemperedIntonationsUUID,
  type NeqTemperedIntervalsUUID,
  type NonEqualTemperedIntonationsUUID,
  type TemperedIntervalsUUID,
} from '../IntonationsModesScales-enums'
import type {
  EqTemperedMode,
  EqTemperedModeInterval,
  NeqTemperedMode,
  NeqTemperedModeInterval,
  PureMode,
  PureModeInterval,
} from '../modes/modes'

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
abstract class _BaseIntonation {
  constructor(
    readonly uuid: IntonationsUUID,
    readonly name: string,
    /** Reference frequency for the scale (e.g., `440Hz` for A4 in `12-TET`, or for A4 from C Major in JI). */
    readonly tuningReference: TuningReference,
  ) {}
}

// JustIntonation ----------------------------------------------------------------

export enum NLimit {
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _7 = 7,
  _9 = 9,
  _11 = 11,
  _13 = 13,
}

interface NLimitSystem {
  // TODO @Val [NEXT] Expand on that
}

/** @deprecated @Abstract */
type _Prec_JustIntonation = Omit<JustIntonation, 'modes'>

/** @alias */
type LazyPartialPureModesRecord = LazyPartialRecord<WesternModesUuid, PureMode>

/** @alias */
type PartialPureModeIntervalsRecord = PartialRecord<ExtendedPureIntervalsUUID, PureModeInterval>

/** @alias */
type PureModeIntervalsRecord = Record<ExtendedPureIntervalsUUID, PureModeInterval>

/**
 * @ModelRoot
 * @Description epresents Just Intonation with specific intervals and relative frequency ratios.
 *
 * @Important `JustIntonation` does not have `diatonicSteps` because it is not equally tempered.
 * @Important While `JustIntonation` relies on relative harmonic ratios, it requires a `tuningReference` to anchor the system for absolute pitch calculations.
 */
export class JustIntonation extends _BaseIntonation {
  constructor(
    readonly uuid: JustIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    readonly nLimitSystem: NLimitSystem,
    /** @PureIntervals */
    readonly intervalsUuids: ExtendedPureIntervalsUUID[],
  ) {
    super(uuid, name, tuningReference)

    this.allIntervals = this._computeIntervals(intervalsUuids)

    // TODO @Val [NEXT] Re-assesss params values.
    this.modes = this._computeModes(
      Object.keys(WesternModesUuid) as WesternModesUuid[],
      // TODO @Val [NEXT] Introduce `new Mode()` constructor to facilitage interval seletion.
      // Put all 12 intervals for now: the (diatonic-implied) 'Chromatic Scale'
      this.allIntervals,
    )
  }

  /**
   * @PureIntervals
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly allIntervals: PureModeIntervalsRecord
  private _computeIntervals(intervalsUuids: ExtendedPureIntervalsUUID[]): PureModeIntervalsRecord {
    // TODO @Val [NOW]
    return {} as PureModeIntervalsRecord
  }

  /**
   * @PureModes
   */
  readonly modes: LazyPartialPureModesRecord
  private _computeModes(
    modesUuids: WesternModesUuid[],
    selectedModeIntervals: PartialPureModeIntervalsRecord,
  ): LazyPartialPureModesRecord {
    const selectedPureIntervalUUIDs = Object.keys(
      selectedModeIntervals,
    ) as ExtendedPureIntervalsUUID[]

    return modesUuids.reduce((acc, modeUuid) => {
      const lazyMode = lazy<PureMode>(() => this._computeMode(modeUuid, selectedModeIntervals))

      return { ...acc, [modeUuid]: lazyMode }
    }, {} as LazyPartialPureModesRecord)
  }

  /**
   * @PureModes
   */
  private _computeMode(
    modeUuid: WesternModesUuid,
    selectedModeIntervals: PartialPureModeIntervalsRecord,
  ): PureMode {
    // TODO @Val [RESUME]
    return {} as PureMode
  }
}

// NonEqualTemperedIntonation ----------------------------------------------------

/** @deprecated @Abstract */
type _Prec_TraditionalNonEqualTemperedIntonation = Omit<EqualTemperedIntonation, 'modes'>

/** @alias */
type LazyPartialNeqTemperedModesRecord = LazyPartialRecord<WesternModesUuid, NeqTemperedMode>

/** @alias */
type PartialNeqTemperedModeIntervalsRecord = PartialRecord<
  NeqTemperedIntervalsUUID,
  NeqTemperedModeInterval
>
/** @alias */
type NeqTemperedModeIntervalsRecord = Record<NeqTemperedIntervalsUUID, NeqTemperedModeInterval>

/**
 * @NonEqualTemperedIntonation
 * @deprecated @Abstract For now. It's too niche / experimental.
 * @ModelRoot
 * @Descritpion Represents a traditional non-equal temperament.
 * @Important `JustIntonation` does not have `diatonicStepsUuids` nor `diatonicSteps` because it is not equally tempered.
 */
export class NonEqualTemperedIntonation extends _BaseIntonation {
  constructor(
    /** Unique identifier for the traditional non-equal temperament. */
    readonly uuid: NonEqualTemperedIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    /** @NonEqualTemperedIntervals */
    readonly intervalsUuids: NeqTemperedIntervalsUUID[],
  ) {
    super(uuid, name, tuningReference)

    this.allIntervals = this._computeIntervals(intervalsUuids)

    // TODO @Val [NEXT] Re-assesss params values.
    this.modes = this._computeModes(
      Object.keys(WesternModesUuid) as WesternModesUuid[],
      // TODO @Val [NEXT] Introduce `new Mode()` constructor to facilitage interval seletion.
      // Put all 12 intervals for now: the (diatonic-implied) 'Chromatic Scale'
      this.allIntervals,
    )
  }

  /**
   * @NonEqualTemperedIntervals
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly allIntervals: NeqTemperedModeIntervalsRecord
  private _computeIntervals(
    intervalsUuids: NeqTemperedIntervalsUUID[],
  ): NeqTemperedModeIntervalsRecord {
    // TODO @Val [NOW]
    return {} as NeqTemperedModeIntervalsRecord
  }

  /**
   * @NonEqualTemperedModes
   */
  readonly modes: LazyPartialNeqTemperedModesRecord
  private _computeModes(
    modesUuids: WesternModesUuid[],
    selectedModeIntervals: PartialNeqTemperedModeIntervalsRecord,
  ): LazyPartialNeqTemperedModesRecord {
    const selectedTemperedIntervalUUIDs = Object.keys(
      selectedModeIntervals,
    ) as TemperedIntervalsUUID[]

    return modesUuids.reduce((acc, modeUuid) => {
      const lazyMode = lazy<NeqTemperedMode>(() => this._computeMode(modeUuid, selectedModeIntervals))

      return { ...acc, [modeUuid]: lazyMode }
    }, {} as LazyPartialNeqTemperedModesRecord)
  }

  /**
   * @NonEqualTemperedModes
   */
  private _computeMode(
    modeUuid: WesternModesUuid,
    selectedModeIntervals: PartialNeqTemperedModeIntervalsRecord,
  ): NeqTemperedMode {
    // TODO @Val [RESUME]
    return {} as NeqTemperedMode
  }
}

// EqualTemperedIntonation -------------------------------------------------------

/** @deprecated @Abstract */
type _Prec_EqualTemperedIntonation = Omit<EqualTemperedIntonation, 'modes'>

/** @alias */
type LazyPartialEqTemperedModesRecord = LazyPartialRecord<WesternModesUuid, EqTemperedMode>
/** @alias */
type PartialEqTemperedModeIntervalsRecord = PartialRecord<
  EqTemperedIntervalsUUID,
  EqTemperedModeInterval
>
/** @alias */
type EqTemperedModeIntervalsRecord = Record<
  EqTemperedIntervalsUUID,
  EqTemperedModeInterval
>

/**
 * @EqualTempered
 * @ModelRoot
 * @Description Represents an equal temperament with specific intervals and relative frequency ratios.
 * @Important Equal temperaments have `diatonicStepsUuids` nor `diatonicSteps`.
 */
export class EqualTemperedIntonation extends _BaseIntonation {
  constructor(
    /** Unique identifier for the equal temperament. */
    readonly uuid: EqualTemperedIntonationsUUID,
    readonly name: string,
    readonly tuningReference: TuningReference,
    /** @EqualTemperedStepIntervals */
    readonly diatonicStepsUuids: DiatonicStepsUUID[],
    /** @EqualTemperedIntervals */
    readonly intervalsUuids: EqTemperedIntervalsUUID[],
  ) {
    super(uuid, name, tuningReference)

    this.allDiatonicSteps = this._computeDiatonicSteps(diatonicStepsUuids)

    this.allIntervals = this._computeIntervals(diatonicStepsUuids, intervalsUuids)

    // TODO @Val [NEXT] Re-assesss params values.
    this.modes = this._computeModes(
      Object.keys(WesternModesUuid) as WesternModesUuid[],
      // TODO @Val [NEXT] Introduce `new Mode()` constructor to facilitage interval seletion.
      // Put all 12 intervals for now: the (diatonic-implied) 'Chromatic Scale'
      this.allIntervals,
    )
  }

  /**
   * @EqualTemperedSteps
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly allDiatonicSteps: Record<DiatonicStepsUUID, DiatonicInterval>
  private _computeDiatonicSteps(
    diatonicStepsUuids: DiatonicStepsUUID[],
  ): Record<DiatonicStepsUUID, DiatonicInterval> {
    // TODO @Val [NOW]
    return {} as Record<DiatonicStepsUUID, DiatonicInterval>
  }

  /**
   * @EqualTemperedIntervals
   * TODO @Val [PERFORMANCE] Implemente lazy loading on this large attr.
   */
  readonly allIntervals: EqTemperedModeIntervalsRecord
  private _computeIntervals(
    diatonicStepsUuids: DiatonicStepsUUID[],
    intervalsUuids: EqTemperedIntervalsUUID[],
  ): EqTemperedModeIntervalsRecord {
    // TODO @Val [NOW]
    return {} as EqTemperedModeIntervalsRecord
  }

  /**
   * @EqualTemperedModes
   */
  readonly modes: LazyPartialEqTemperedModesRecord
  private _computeModes(
    modesUuids: WesternModesUuid[],
    selectedModeIntervals: PartialEqTemperedModeIntervalsRecord,
  ): LazyPartialEqTemperedModesRecord {
    const selectedTemperedIntervalUUIDs = Object.keys(
      selectedModeIntervals,
    ) as TemperedIntervalsUUID[]

    return modesUuids.reduce((acc, modeUuid) => {
      const lazyMode = lazy<EqTemperedMode>(() => this._computeMode(modeUuid, selectedModeIntervals))

      return { ...acc, [modeUuid]: lazyMode }
    }, {} as LazyPartialEqTemperedModesRecord)
  }

  /**
   * @EqualTemperedModes
   */
  private _computeMode(
    modeUuid: WesternModesUuid,
    selectedModeIntervals: PartialEqTemperedModeIntervalsRecord,
  ): EqTemperedMode {
    // TODO @Val [RESUME]
    return {} as EqTemperedMode
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
