/**
 * @enum Ajnas
 * Represents the primary ajnas (tetrachords) used in the central maqamat.
 * Each ajnas defines a specific melodic structure and mood.
 */
export enum Ajnas {
  /**
   * - A natural and balanced tetrachord (1-3-4-5).
   * - Forms the foundation of the Rast maqam family.
   * - Characterized by stability and consonance, often associated with beginnings or calmness.
   */
  Rast = 'Rast',

  /**
   * - A warm and expressive tetrachord (1-3b-4-5).
   * - Central to the Bayati maqam family.
   * - Known for its emotional resonance, often used in folkloric and lyrical themes.
   */
  Bayati = 'Bayati',

  /**
   * - An exotic and striking tetrachord (1-4-6b-7).
   * - Fundamental to the Hijaz maqam family.
   * - Evokes mystery and drama, often associated with spiritual or mystical themes.
   */
  Hijaz = 'Hijaz',

  /**
   * - A minor-like tetrachord (1-2-4-5).
   * - Forms the base of the Nahawand maqam family.
   * - Conveys introspection and melancholy, resembling the Western minor scale.
   */
  Nahawand = 'Nahawand',

  /**
   * - A melancholic tetrachord (1-3b-4-5).
   * - Integral to the Kurd maqam family.
   * - Known for its soft, somber tone, often used in plaintive and reflective pieces.
   */
  Kurd = 'Kurd',

  /**
   * Saba:
   * - A unique tetrachord with microtonal intervals (1-3b-4b-5).
   * - Central to the Saba maqam family.
   * - Evokes mystery, sadness, and longing, with a distinctive modal flavor.
   */
  Saba = 'Saba',

  /**
   * - A bright and uplifting tetrachord (1-2-4-5).
   * - Forms the foundation of the Ajam maqam family.
   * - Analogous to the Western major scale, exuding optimism and joy.
   */
  Ajam = 'Ajam',

  /**
   * - A microtonal tetrachord (1-2#-3b-4) with a distinctive flavor.
   * - Central to the Segah maqam family.
   * - Known for its emotional expressiveness, often used in traditional and improvisational contexts.
   */
  Segah = 'Segah',
}

/**
 * @enum CentralMaqamat
 * Represents the 12 central maqamat (MECONs) in Arabic music.
 *
 * Each maqam is associated with its primary ajnas (tetrachords),
 * which form the lower and upper segments of its melodic structure.
 */
const CentralMaqamats: Record<Ajnas, _todoUnknown> = {
  [Ajnas.Rast]: {
    name: 'Rast',
    lowerAjnas: 'Rast (1-3-4-5)',
    upperAjnas: 'Rast or Nahawand (1-2-4-5)',
    description: 'The foundational maqam, emphasizing stability and consonance.',
  },
  [Ajnas.Bayati]: {
    name: 'Bayati',
    lowerAjnas: 'Bayati (1-3b-4-5)',
    upperAjnas: 'Rast or Nahawand',
    description: 'A maqam with a warm and expressive character, often used in emotional melodies.',
  },
  [Ajnas.Hijaz]: {
    name: 'Hijaz',
    lowerAjnas: 'Hijaz (1-4-6b-7)',
    upperAjnas: 'Rast or Nahawand',
    description: 'A maqam known for its exotic and emotional sound.',
  },
  [Ajnas.Nahawand]: {
    name: 'Nahawand',
    lowerAjnas: 'Nahawand (1-2-4-5)',
    upperAjnas: 'Nahawand or Rast',
    description: 'A minor-sounding maqam, similar to the Western minor scale.',
  },
  [Ajnas.Kurd]: {
    name: 'Kurd',
    lowerAjnas: 'Kurd (1-3b-4-5)',
    upperAjnas: 'Hijaz or Rast',
    description: 'A maqam with a melancholic yet soft tone.',
  },
  [Ajnas.Saba]: {
    name: 'Saba',
    lowerAjnas: 'Saba (1-3b-4b-5)',
    upperAjnas: 'Rast or Bayati',
    description: 'Unique for its microtonal intervals, often evoking mystery or sadness.',
  },
  [Ajnas.Ajam]: {
    name: 'Ajam',
    lowerAjnas: 'Ajam (1-2-4-5)',
    upperAjnas: 'Ajam or Nahawand',
    description: 'The Arabic equivalent of the major scale, bright and uplifting.',
  },
  [Ajnas.Segah]: {
    name: 'Segah',
    lowerAjnas: 'Segah (1-2#-3b-4)',
    upperAjnas: 'Bayati or Hijaz',
    description: 'A maqam with a distinctive microtonal flavor, emphasizing emotional expression.',
  },
  //  [Ajnas.Husseini]: {
  //    name: "Husseini",
  //    lowerAjnas: "Bayati (1-3b-4-5)",
  //    upperAjnas: "Rast or Ajam",
  //    description: "A variant of Bayati, often used for spiritual or devotional themes."
  //  },
  //  [Ajnas.ShaddAraban]: {
  //    name: "Shadd Araban",
  //    lowerAjnas: "Hijaz (1-4-6b-7)",
  //    upperAjnas: "Hijaz",
  //    description: "A maqam with a bold and majestic character, rooted in the Hijaz family."
  //  },
  //  [Ajnas.Suznak]: {
  //    name: "Suznak",
  //    lowerAjnas: "Rast (1-3-4-5)",
  //    upperAjnas: "Hijaz",
  //    description: "Combines Rast and Hijaz for a balanced yet complex melodic expression."
  //  },
  //  [Ajnas.Zanjaran]: {
  //    name: "Zanjaran",
  //    lowerAjnas: "Nahawand (1-2-4-5)",
  //    upperAjnas: "Hijaz",
  //    description: "A maqam blending minor-like Nahawand with the exotic Hijaz."
  // }
}
