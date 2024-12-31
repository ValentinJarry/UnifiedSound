import { type HarmRatioNotation } from '@/music-theory/base/base'
import { type _todoUnknown } from '@/music-theory/utilities/type-utilities'

// HARMONICS & SERIES -----------------------------------------------------------------------------------------------------------------------

// Harmonics Series --------------------------------------------------------------

export interface NaturalHarmonicSerie {
  series: _todoUnknown[]
}

export interface TemperedHarmonicSeries {
  series: _todoUnknown[]
}

// Harmonics ---------------------------------------------------------------------

/** @deprecated @Astract */
interface _BaseHarmonic {
  /** @Important from [1, ..., n] */
  index: number

  pureFrequencyRatioNotation: HarmRatioNotation
}

export interface PureHarmonic extends _BaseHarmonic {
  /** @SignedFloat @Zero */
  _signedFrequencyErrorRatioFromPureRatio: 0
  /** @deprecated @Zero */
  _errorCents: 0
}

export interface TemperedHarmonic extends _BaseHarmonic {
  /** @SignedFloat */
  signedFrequencyErrorRatioFromPureRatio: number | 0
  /** @SignedInteger */
  errorCents: number | 0

  temperedFreqRatioNotation: HarmRatioNotation
}

// TODO @Val [NOW] NonOctavianEqualTemperedHarmonic, OctavianEqualTemperedHarmonic
// TODO @Val [NOW] NonOctavianNonEqualTemperedHarmonic, OctavianNonEqualTemperedHarmonic
