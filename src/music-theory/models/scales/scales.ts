import type { PureMode, TemperedMode } from '@/music-theory/base/base'
import type { ScaleRootsUuid, WesternModesUuid } from '../IntonationsModesScales-enums'

// SCALES -----------------------------------------------------------------------------------------------------------------------------------

export type PureScales = Record<ScaleRootsUuid, PureScale>
export type TemperedScales = Record<ScaleRootsUuid, TemperedScale>

// TODO @Val [NEXT]
// export type EqTemperedScales = Record<ScaleRootsUuid, EqTemperedScale>
// export type NeqTemperedScales = Record<ScaleRootsUuid, NeqTemperedScale>

// [MODEL_ROOT] Base Scale & complexifying derivatives

export interface _BaseScale {
  /** Unique identifier for the scale. */
  uuid: ScaleRootsUuid

  /** Name of the scale (e.g., "A", "A#", "Bb"). */
  name: string

  /** UUID of the mode used to calculate the notes of the scale. */
  modeUuid: WesternModesUuid

  // TODO @Val [RESUME] Scales definitions
}

/**
 * Represents a pure musical scale based on a `<PureMode>` that originated from an `<PureIntonation>`.
 */
export interface PureScale extends PureMode {
  // TODO @Val [NEXT] Exten pure scale definitions
}

/**
 * Represents a tempered musical scale based on a `<TemperedMode>` tempered by an `<Intonation>` that is not a `<JustIntonation>`.
 */ export interface TemperedScale extends TemperedMode {
  // TODO @Val [NEXT] Exten pure scale definitions
}

// TODO Expand on the Scales models.
