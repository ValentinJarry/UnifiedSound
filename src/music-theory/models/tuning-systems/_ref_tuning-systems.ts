// REFERENCE
//
// TODO @Val [NEXT] Filter this list of `tuningSystems` of tuning systems into targets implementation milestones:
//    - [POC]: [ -fill- ]
//    - [MVP]: [ -fill- ]
//    - [PRODUCTION]: [ -fill- ]
//    - [FUTURE]]: [ -fill- ]
//
// Also:
//    - Double check every ratios because I'm not gonna trust it, espeacially for the experimental ones.
//
//
// https://github.com/supercollider/supercollider/blob/develop/SCClassLibrary/Common/Collections/Scale.sc

const tuningSystems = {
  // //TWELVE-TONE TUNINGS8
  // 'et12': Tuning.new((0..11), 2, "ET12"),
  // 'pythagorean': Tuning.new([1, 256/243, 9/8, 32/27, 81/64, 4/3, 729/512, 3/2,
  //    128/81, 27/16, 16/9, 243/128].ratiomidi, 2, "Pythagorean"),
  // 'just': Tuning.new([1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3,
  //    9/5, 15/8].ratiomidi, 2, "5-Limit Just Intonation"),
  // 'sept1': Tuning.new([1, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3,
  //    9/5, 15/8].ratiomidi, 2, "Septimal Tritone Just Intonation"),
  // 'sept2': Tuning.new([1, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3,
  //    7/4, 15/8].ratiomidi, 2, "7-Limit Just Intonation"),
  // 'mean4': Tuning.new(#[0, 0.755, 1.93, 3.105, 3.86, 5.035, 5.79, 6.965,
  //    7.72, 8.895, 10.07, 10.82], 2, "Meantone, 1/4 Syntonic Comma"),
  // 'mean5': Tuning.new(#[0, 0.804, 1.944, 3.084, 3.888, 5.028, 5.832, 6.972,
  //    7.776, 8.916, 10.056, 10.86], 2, "Meantone, 1/5 Pythagorean Comma"),
  // 'mean6': Tuning.new(#[0, 0.86, 1.96, 3.06, 3.92, 5.02, 5.88, 6.98, 7.84,
  //    8.94, 10.04, 10.9], 2, "Meantone, 1/6 Pythagorean Comma"),
  // 'kirnberger': Tuning.new([1, 256/243, (5.sqrt)/2, 32/27, 5/4, 4/3,
  //    45/32, 5 ** 0.25, 128/81, (5 ** 0.75)/2, 16/9, 15/8].ratiomidi, 2,
  //    "Kirnberger III"),
  // 'werckmeister': Tuning.new(#[0, 0.92, 1.93, 2.94, 3.915, 4.98, 5.9, 6.965,
  //    7.93, 8.895, 9.96, 10.935], 2, "Werckmeister III"),
  // 'vallotti': Tuning.new(#[0, 0.94135, 1.9609, 2.98045, 3.92180, 5.01955,
  //    5.9218, 6.98045, 7.9609, 8.94135, 10, 10.90225], 2, "Vallotti"),
  // 'young': Tuning.new(#[0, 0.9, 1.96, 2.94, 3.92, 4.98, 5.88, 6.98, 7.92,
  //    8.94, 9.96, 10.9], 2, "Young"),
  // 'reinhard': Tuning.new([1, 14/13, 13/12, 16/13, 13/10, 18/13, 13/9,
  //    20/13, 13/8, 22/13, 13/7, 208/105].ratiomidi, 2, "Mayumi Reinhard"),
  // 'wcHarm': Tuning.new([1, 17/16, 9/8, 19/16, 5/4, 21/16, 11/8, 3/2, 13/8,
  //    27/16, 7/4, 15/8].ratiomidi, 2, "Wendy Carlos Harmonic"),
  // 'wcSJ': Tuning.new([1, 17/16, 9/8, 6/5, 5/4, 4/3, 11/8, 3/2, 13/8, 5/3,
  //    7/4, 15/8].ratiomidi, 2, "Wendy Carlos Super Just"),
  // 'lu':Tuning( [
  //    1, 2187/2048, 9/8, 19683/16384, 81/64, 177147/131072, 729/612, 3/2, 6561/4096,
  //    27/16, 59049/32768, 243/128
  // ].ratiomidi, 2, "Chinese Shi-er-lu scale"),
  // //MORE THAN TWELVE-TONE ET
  // 'et19': Tuning.new((0 .. 18) * 12/19, 2, "ET19"),
  // 'et22': Tuning.new((0 .. 21) * 6/11, 2, "ET22"),
  // 'et24': Tuning.new((0 .. 23) * 0.5, 2, "ET24"), // arabic
  // 'et31': Tuning.new((0 .. 30) * 12/31, 2, "ET31"),
  // 'et41': Tuning.new((0 .. 40) * 12/41, 2, "ET41"),
  // 'et53': Tuning.new((0 .. 52) * 12/53, 2, "ET53"), // arabic
  // //NON-TWELVE-TONE JI
  // 'johnston': Tuning.new([1, 25/24, 135/128, 16/15, 10/9, 9/8, 75/64, 6/5,
  //    5/4, 81/64, 32/25, 4/3, 27/20, 45/32, 36/25, 3/2, 25/16, 8/5, 5/3,
  //    27/16, 225/128, 16/9, 9/5, 15/8, 48/25].ratiomidi, 2, "Ben Johnston"),
  // 'partch': Tuning.new([1, 81/80, 33/32, 21/20, 16/15, 12/11, 11/10, 10/9, 9/8,
  //    8/7, 7/6, 32/27, 6/5, 11/9, 5/4, 14/11, 9/7, 21/16, 4/3, 27/20, 11/8,
  //    7/5, 10/7, 16/11, 40/27, 3/2, 32/21, 14/9, 11/7, 8/5, 18/11, 5/3, 27/16,
  //    12/7, 7/4, 16/9, 9/5, 20/11, 11/6, 15/8, 40/21, 64/33, 160/81].ratiomidi, 2,
  //    "Harry Partch"),
  // 'catler': Tuning.new([1, 33/32, 16/15, 9/8, 8/7, 7/6, 6/5, 128/105, 16/13,
  //    5/4, 21/16, 4/3, 11/8, 45/32, 16/11, 3/2, 8/5, 13/8, 5/3, 27/16, 7/4,
  //    16/9, 24/13, 15/8].ratiomidi, 2, "Jon Catler"),
  // 'chalmers': Tuning.new([1, 21/20, 16/15, 9/8, 7/6, 6/5, 5/4, 21/16, 4/3, 7/5,
  //    35/24, 3/2, 63/40, 8/5, 5/3, 7/4, 9/5, 28/15, 63/32].ratiomidi, 2,
  //    "John Chalmers"),
  // 'harrison': Tuning.new([1, 16/15, 10/9, 8/7, 7/6, 6/5, 5/4, 4/3, 17/12, 3/2,
  //    8/5, 5/3, 12/7, 7/4, 9/5, 15/8].ratiomidi, 2, "Lou Harrison"),
  // 'sruti': Tuning.new([1, 256/243, 16/15, 10/9, 9/8, 32/27, 6/5, 5/4, 81/64,
  //    4/3, 27/20, 45/32, 729/512, 3/2, 128/81, 8/5, 5/3, 27/16, 16/9, 9/5,
  //    15/8, 243/128].ratiomidi, 2, "Sruti"),
  // 'perret': Tuning([1, 21/20, 35/32, 9/8, 7/6, 6/5, 5/4, 21/16, 4/3, 7/5, 35/24,
  //    3/2, 63/40, 8/5, 5/3, 7/4, 9/5, 15/8, 63/32].ratiomidi, 2, "Wilfrid Perret"),
  // 'michael_harrison': Tuning( [1, 28/27, 135/128, 16/15, 243/224, 9/8, 8/7, 7/6,
  //    32/27, 6/5, 135/112, 5/4, 81/64, 9/7, 21/16, 4/3, 112/81, 45/32, 64/45, 81/56,
  //    3/2, 32/21, 14/9, 128/81, 8/5, 224/135, 5/3, 27/16, 12/7, 7/4, 16/9, 15/8,
  //    243/128, 27/14].ratiomidi, 2, "Michael Harrison 24 tone 7-limit"),
  // //HARMONIC SERIES -- length arbitary
  // 'harmonic': Tuning.new((1 .. 24).ratiomidi, 2, "Harmonic Series 24"),
  // //STRETCHED/SHRUNK OCTAVE
  // //Bohlen-Pierce
  // 'bp': Tuning.new((0 .. 12) * (3.ratiomidi/13), 3.0, "Bohlen-Pierce"),
  // 'wcAlpha': Tuning.new((0 .. 14) * 0.78, (15 * 0.78).midiratio, "Wendy Carlos Alpha"),
  // 'wcBeta': Tuning.new((0 .. 18) * 0.638, (19 * 0.638).midiratio, "Wendy Carlos Beta"),
  // 'wcGamma': Tuning.new((0 .. 33) * 0.351, (34 * 0.351).midiratio, "Wendy Carlos Gamma")
}
