import type { _todoUnknown, UUID } from '@/music-theory/utilities/type-utilities'
import type { AllSyntheticOctavianIntonationsUUID } from '../intonations/intonations'
import type { JustIntonationsUUID } from '../IntonationsModesScales-enums'
import type { PureHarmonic, TemperedHarmonic } from '../harmonics/harmonics-and-series'

// CHROMATIC CONFLUENCE ---------------------------------------------------------------------------------------------------------------------

export interface ChromaticConfluence {
  uuid: UUID | _todoUnknown
  referenceChroma: Chroma
  chromaticSpaces: Chroma[]
  /** TODO @Val This is going to be  */
  chromaticSpaceRelationships: Record<number, Chroma[]>
}

// CHROMAS ----------------------------------------------------------------------------------------------------------------------------------

export type ChromaticSpace = Chroma[]

export type NonOctavianChromaticSpace = NonOctavianChroma[]

export type SyntheticOctavianChromaticSpace = SyntheticOctavianChroma[]

// ROOT CHROMAS -----------------------------------------------------------------------------------------------------------------------------

// Chromas are abstract precursors for Chromaticities.
// It is meant to expand the models upward from the entry point that intonations.

// TODO @Val [NEXT / FUTURE] [QBENAPSE]
// Reflect further on what contemporary boundary the Chromaticities and Chromas will help.
// I suspect they will be the foundation of exploration and for a chromatic spaces

// MusicalPrism = SingularChroma | Chromas
// Semi-Finite Chromas Space = Chromaticity
// Harmonic relationships from chromas to others = Chromatic Confluence | Synchromaticity

// BaseChroma --------------------------------------------------------------------

/**
 * @deprecated @Abstract
 * @ModelRoot
 * */
interface _BaseChroma {
  uuid: UUID | _todoUnknown

  /** @Note Ordered list. */
  harmonicSeries: Record<number, PureHarmonic | TemperedHarmonic>

  // TODO @Val [NEXT / FUTURE] [QBENAPSE] Add fondamentaChroma colorimetry.
  // colorymetricIdentityCard: unknown;
}

/** @Abstract @Generalized */
export type Chroma = NonOctavianChroma | SyntheticOctavianChroma

// Non-Octavian Chroma -----------------------------------------------------------

export const enum NonOctavianIntonationsUUID {}
// TODO @Val [NOW] -fill-

/**
 * @Abstract
 * @PossibleEqualTempered @PossiblyNonEqualTempered
 */
export interface NonOctavianChroma extends _BaseChroma {
  // TODO @Val [NOW] -fill-

  intonationUuid: JustIntonationsUUID | NonOctavianIntonationsUUID
}

// Octavian Chroma ---------------------------------------------------------------

/**
 * @Alias
 * @NonOctavian Natural Chroma is non-octavian
 * @Nomenclature_QLWMEI Tempered short hands: `{Ne | E}T{No |So}*` <=> `{NonEqual | Equal}Tempered{NonOctavian | SyntheticOctavian}*`
 */
export type SoChroma = SyntheticOctavianChroma
/**
 * @Abstract
 * @NonOctavian Natural Chroma is non-octavian
 */
interface SyntheticOctavianChroma extends _BaseChroma {
  // TODO @Val [NOW] -fill-

  intonationUuid: AllSyntheticOctavianIntonationsUUID
}

// TODO @Val [NEXT] [NAIWIEHAWPE] Worry about Specific `SymetricOctavianChroma` & `AsymetricOctavianChroma`

// SPECIALIZE CHROMAS -----------------------------------------------------------------------------------------------------------------------

// Natural Chroma ----------------------------------------------------------

/**
 * @Pure
 * @NonOctavian
 */
export interface PureChroma extends NonOctavianChroma {
  // TODO @Val [NOW] -fill-
}
// Tempered Non Octavian Chromaticities ---------------------------------------------

/**
 * @Alias
 * @EqualTempered
 * @NonOctavian
 * @Nomenclature_QLWMEI Tempered short hands: `{Ne | E}T{No |So}*` <=> `{NonEqual | Equal}Tempered{NonOctavian | SyntheticOctavian}*`
 */
export type ETNoChroma = EqualTemperedNonOctavianChroma
/**
 * @deprecated prefer `ETNoChroma` short-form.
 */
interface EqualTemperedNonOctavianChroma extends SyntheticOctavianChroma {
  // TODO @Val [NOW] -fill-
}

/**
 * @Alias
 * @NonEqualTempered
 * @NonOctavian
 * @Nomenclature_QLWMEI Tempered short hands: `{Ne | E}T{No |So}*` <=> `{NonEqual | Equal}Tempered{NonOctavian | SyntheticOctavian}*`
 */
export type NeTNoChroma = NonEqualTemperedNonOctavianChroma
/**
 * @deprecated prefer `NeTNoChroma` short-form.
 */
interface NonEqualTemperedNonOctavianChroma extends SyntheticOctavianChroma {
  // TODO @Val [NOW] -fill-
}

// Tempered Synthetic Octavian Chromaticities --------------------------------------

/**
 * @Alias
 * @EqualTempered
 * @SyntheticOctavian
 * @Nomenclature_QLWMEI Tempered short hands: `{Ne | E}T{No |So}*` <=> `{NonEqual | Equal}Tempered{NonOctavian | SyntheticOctavian}*`
 */
export type ETSoChroma = EqualTemperedSyntheticOctavianChroma
/**
 * @deprecated prefer `ETSoChroma` short-form.
 */
interface EqualTemperedSyntheticOctavianChroma extends SyntheticOctavianChroma {
  // TODO @Val [NOW] -fill-
}

/**
 * @Alias
 * @NonEqualTempered
 * @SyntheticOctavian
 * @Nomenclature_QLWMEI Tempered short hands: `{Ne | E}T{No |So}*` <=> `{NonEqual | Equal}Tempered{NonOctavian | SyntheticOctavian}*`
 */
export type NeTOChroma = NonEqualTemperedSynthethicOctavianChroma
/**
 * @deprecated prefer `NeTOChroma` short-form.
 */
interface NonEqualTemperedSynthethicOctavianChroma extends SyntheticOctavianChroma {
  // TODO @Val [NOW] -fill-
}

// TODO @Val [NOW] Semantic issue:
// - PureIntonation: implie that it is non octavian. This is only intonation that is set as a reference point for all other intonations. It is highly complex and impractical for musicians, hence the advent of the equal temperament.
// - TemperedIntonations: implie tempering that make them non-natural, however, it doesn't guarantee wether the tempering is octavian or not. These represend all other possible intonations outside of the unique PureIntonation.
// - TemperedOctavianIntonations: implie tempering that make them non-natural. that are also octavian. They are 'NonEqualTemperedOctavianIntonations' where the 'NonEqual' prefix is ommitable because it is implied by the 'Tempered' prefix.  These are probably some of the traditional temperament that pre-date the equal temperament.
// - TemperedNonOctavianIntonations: implie templering that make them non-natural, that are also non-octavian.  They are 'NonEqualTemperedNonOctavianIntonations' where the 'NonEqual' prefix is ommitable because it is implied by the 'Tempered' prefix.
// - EqualTemperedIntonations: imple tempering that make them non-natural, however, it doesn't means their are either octavian or non-octavian.
// - EqualTemperedOctavianIntonations: imple tempering that make them non-natural, that are also octavia. These are the practical [5-96]-TET equal temperaments.
// - EqualTemperedNonOctavianIntonations: imple tempering that make them non-natural, that are also non-octavian. These are probably some of the traditional temperament that pre-date the equal temperament.
