/* =========================================================
   FOOTBALL DEMOS — the other seven positions (v20)
   Same engine and rules as football-demos.js (offsets from each
   player's starting spot, y goes DOWN, negative dy = toward the
   defense). Scenes may start a player somewhere else with
   field.overrides (for example a safety shown deep).
   Teaching animations are simplified: coaches vary on footwork.
   ========================================================= */
// Same movement for several players: _many(['LT','LG'], 'block', [[0,3],[0,5]], delay)
function _many(ids, style, offs, delay) {
  return ids.map(id => delay ? [id, style, offs, delay] : [id, style, offs]);
}
const _SH2 = { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } };

/* ---------------------------------------------------------------
   QUARTERBACK: read the defense before and after the snap
   --------------------------------------------------------------- */
const _Q1 = { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: _SH2 };
const _Q2 = { offense: 'pistolRight', defense: '43under', showGaps: false, overrides: { MIKE: { x: 52, y: 44 } } };
const _Q3 = { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false };
_demo('qbReads', 'Quarterback: Read The Defense', [
  _dsc('rotate', 'Safeties rotate', _Q1, ['FS', 'SS'], [
    [0, 'Before the snap: both safeties are deep and split (a 2-high shell, gold rings). That points to Cover 2 or Cover 4 and a lighter box.'],
    [0.15, 'Snap. The strong safety races DOWN toward the line while the free safety slides to the deep middle.'],
    [0.45, 'The 2-high look turned into a 1-high look. The QB saw it because he watched the safeties MOVE, not only where they stood.'],
    [0.8, 'Now he knows an extra defender is near the box and the middle is covered, so he works to the matchup he likes.']
  ], [
    ['SS', 'cover', [[3, 6], [5, 14]]], ['FS', 'cover', [[8, -1], [17, -2]]],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 2], [0, 3]]),
    ['QB', 'run', [[0, 2], [0, 4]]], ['X', 'route', [[0, -22]]], ['Y', 'route', [[0, -24]]], ['Z', 'route', [[2, -12], [6, -20]]], ['TE', 'route', [[0, -10], [8, -20]]],
    ['MIKE', 'cover', [[2, -4]], 0.2], ['WILL', 'cover', [[-3, -4]], 0.2], ['NB', 'cover', [[2, -5]], 0.2]
  ], ['C', 'QB', [86, 33]],
  'Watch the safeties move at the snap, not just where they stand before it.'),
  _dsc('blitz', 'Beat the blitz', _Q2, ['MIKE'], [
    [0, 'Before the snap the Mike (gold ring) has walked up into the A gap. The QB and center re-check the protection: five linemen and one back against a possible six rushers.'],
    [0.14, 'Snap. The Mike blitzes the right A gap.'],
    [0.38, 'One rusher is not accounted for. There is no time for a deep read, so the QB goes to his hot throw: the quick slot receiver on the left.'],
    [0.65, 'The ball is out fast, before the blitzer can get home.']
  ], [
    ['MIKE', 'rush', [[0, 8], [-1, 14]]], ['WDT', 'rush', [[0, 5], [2, 9]], 0.12], ['SDT', 'rush', [[0, 5], [-1, 9]], 0.12],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]]),
    ['RB', 'block', [[-8, -5], [-10, -8]]], ['H', 'route', [[3, -4], [10, -10]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['TE', 'route', [[2, -10]]],
    ['WILL', 'cover', [[-4, -5]], 0.2], ['SAM', 'cover', [[1, -4]], 0.2]
  ], ['C', 'QB', [28, 45]],
  'More rushers than blockers? Throw it hot, fast, to the space the blitzer left.'),
  _dsc('hiLoLow', 'High-low: he goes low', _Q3, ['NB'], [
    [0, 'High-low read. Two routes on the right: the flat (the low route) and a corner route (the high route). The QB reads ONE defender, the Nickel (gold ring).'],
    [0.2, 'Snap. Both routes start and the Nickel has to choose.'],
    [0.45, 'The Nickel jumps the flat route (the low one).'],
    [0.72, 'He took the low route, so the QB throws the high one: the corner route over his head.']
  ], [
    ['Z', 'route', [[3, -4], [7, -9]]], ['TE', 'route', [[0, -12], [10, -22]]], ['NB', 'cover', [[3, 4], [6, 8]], 0.15],
    ['X', 'route', [[0, -20]]], ['Y', 'route', [[0, -22]]], ['QB', 'run', [[0, 2]]], ['RB', 'block', [[-2, -3]]],
    ['CBR', 'cover', [[-1, -3]], 0.2], ['FS', 'cover', [[6, -1]], 0.2]
  ], ['C', 'QB', [88, 31]],
  'He goes low, you throw high.'),
  _dsc('hiLoHigh', 'High-low: he goes high', _Q3, ['NB'], [
    [0, 'Same high-low read: the flat route (low) and the corner route (high), and the Nickel (gold ring) is the defender the QB reads.'],
    [0.2, 'Snap. The routes start.'],
    [0.45, 'This time the Nickel sinks back with the corner route (the high one).'],
    [0.72, 'He went high, so the QB throws the low one: the flat route underneath him.']
  ], [
    ['Z', 'route', [[3, -4], [7, -9]]], ['TE', 'route', [[0, -12], [10, -22]]], ['NB', 'cover', [[2, -4], [5, -9]], 0.15],
    ['X', 'route', [[0, -20]]], ['Y', 'route', [[0, -22]]], ['QB', 'run', [[0, 2]]], ['RB', 'block', [[-2, -3]]],
    ['CBR', 'cover', [[-1, -3]], 0.2], ['FS', 'cover', [[6, -1]], 0.2]
  ], ['C', 'QB', [92, 46]],
  'He goes high, you throw low.')
]);
_demoFor('qbReads', [['primerQB', 'rotate'], ['qbShellRead', 'rotate'], ['qbMikePoint', 'blitz'], ['qbBlitzHot', 'blitz'], ['qbHighLow', 'hiLoLow'], ['sDisguise', 'rotate']]);

/* ---------------------------------------------------------------
   WIDE RECEIVER: release, routes, coverage, stalk block
   --------------------------------------------------------------- */
const _WP = { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { CBL: { x: 3, y: 46 } } };
const _WD = { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false };
const _WM = [['H', 'route', [[0, 3], [43, 3], [59, 1]]]];
_demo('wrReceiver', 'Wide Receiver: Release, Routes & Coverage', [
  _dsc('press', 'Release vs press', _WP, ['CBL'], [
    [0, 'The left corner is pressed up on you and shaded toward your OUTSIDE shoulder (gold ring). Read his leverage first.'],
    [0.14, 'Snap. Stay low, quick feet: release to the INSIDE, away from where he is shading.'],
    [0.42, 'You beat the jam. Get right back on your route stem so your timing with the QB is not lost.'],
    [0.78, 'Now you are on top of him with a clean path up the field.']
  ], [
    ['X', 'route', [[2, -2], [7, -9], [8, -24]]], ['CBL', 'cover', [[3, -1], [6, -8], [7, -20]], 0.12],
    ['Z', 'route', [[0, -18]]], ['Y', 'route', [[0, -20]]], ['TE', 'route', [[2, -8], [10, -14]]],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]]), ['QB', 'run', [[0, 2], [0, 4]]]
  ], ['C', 'QB', [13, 27]],
  'Read his leverage, release away from it, and get right back on your route.'),
  _dsc('routes', 'The route tree', { offense: 'shotgunDoubles', defense: null, showGaps: false }, [], [
    [0, 'Four routes from a 2x2 formation. The wide receiver on the left runs a SLANT: a few quick steps, then a sharp diagonal cut toward the middle.'],
    [0.2, 'The left slot runs a CURL: upfield about twelve yards, then stops and turns back to face the quarterback.'],
    [0.45, 'The right slot runs an OUT: upfield, then a hard break flat toward the sideline.'],
    [0.7, 'The wide receiver on the right runs a POST: deep, then a break toward the goalposts. Route names and numbers vary by team.']
  ], [
    ['X', 'route', [[0, -3], [14, -11]]], ['H', 'route', [[0, -18], [1, -14]]], ['S', 'route', [[0, -14], [12, -14]]], ['Z', 'route', [[0, -16], [-14, -30]]],
    ['QB', 'run', [[0, 2]]], ['RB', 'block', [[-2, -3]]]
  ], ['C', 'QB', [19, 40]],
  'Learn the shape of each route: slant, curl, out, post. Your team’s numbers may differ.'),
  _dsc('manMotion', 'Motion: man tell', _WD, ['H'], [
    [0, 'The motion test. The left slot (gold ring) goes in motion across the formation before the snap.'],
    [0.3, 'A linebacker runs right with him across the field. A defender who follows the motion is a man-coverage tell.'],
    [0.75, 'Man coverage: you win with your release and a sharp break that creates separation.']
  ], _WM.concat([['WILL', 'cover', [[-2, 4], [24, 6], [40, 4]]], ['QB', 'run', [[0, 1]]]]),
  ['C', 'QB', [50, 59]],
  'A defender who follows the motion is probably in man coverage.'),
  _dsc('zoneMotion', 'Motion: zone tell', _WD, ['H'], [
    [0, 'Same motion test: the left slot (gold ring) goes across the formation.'],
    [0.3, 'This time nobody runs with him. The defenders just slide over and pass him off, staying in their areas.'],
    [0.75, 'That is a zone tell. Against zone, find the open window, sit down in it and turn to the quarterback.']
  ], _WM.concat([['WILL', 'cover', [[3, 0], [6, 1]]], ['NB', 'cover', [[-4, 0], [-8, 0]]], ['MIKE', 'cover', [[3, 0], [5, 0]]], ['QB', 'run', [[0, 1]]]]),
  ['C', 'QB', [50, 59]],
  'Defenders who shift and pass him off are probably in zone.'),
  _dsc('cover2', 'Beat Cover 2', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 }, CBR: { x: 94, y: 45 } } }, ['FS', 'SS'], [
    [0, 'Two safeties deep and the corner pressed up and sitting in the flat: that is Cover 2. The soft spot is deep, between the corner and the safety.'],
    [0.2, 'Snap. The corner jams the outside receiver and sinks to the flat. The slot (Z) runs a corner route.'],
    [0.5, 'The slot breaks toward the corner of the end zone: behind the underneath corner and in front of the deep safety.'],
    [0.8, 'The QB hits the soft spot. This is a tendency, not a rule: always confirm after the snap.']
  ], [
    ['Z', 'route', [[0, -18], [9, -30]]], ['Y', 'route', [[-1, -8], [-4, -24]]], ['CBR', 'cover', [[0, -1], [-2, -3]]],
    ['SS', 'cover', [[4, 1]]], ['FS', 'cover', [[-3, 0]]], ['NB', 'cover', [[2, -4]], 0.2],
    ['X', 'route', [[0, -20]]], ['TE', 'route', [[0, -10]]], ['QB', 'run', [[0, 2], [0, 4]]]
  ], ['C', 'QB', [94, 26]],
  'Cover 2: the corner route attacks the spot between the corner and the safety.'),
  _dsc('stalk', 'Stalk block', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['Z'], [
    [0, 'A run to the right. The receiver (gold ring) has a job even though the ball is not coming to him.'],
    [0.2, 'He sprints at the corner, gets in front of him, hands inside, feet moving.'],
    [0.5, 'He stays between the corner and the runner. No grabbing the jersey, because that is holding.'],
    [0.8, 'His block springs the runner for extra yards.']
  ], [
    ['Z', 'block', [[-1, -8], [-3, -13]]], ['CBR', 'cover', [[-1, 6], [-3, 10]], 0.1],
    ['RB', 'run', [[10, -4], [28, -10], [38, -22]], 0.1],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT', 'TE'], 'block', [[3, -2], [4, -3]]),
    ['SDE', 'rush', [[2, 1]], 0.15], ['SAM', 'cover', [[-2, 4]], 0.25]
  ], ['C', 'QB', 'RB', [88, 44]],
  'Get in front of him, hands inside, feet moving, and finish. No holding.')
]);
_demoFor('wrReceiver', [['primerWR', 'press'], ['wrRelease', 'press'], ['wrRouteTree', 'routes'], ['wrAlignment', 'routes'], ['wrManZone', 'manMotion'], ['wrBeatCoverage', 'cover2'], ['wrStalkBlock', 'stalk']]);

/* ---------------------------------------------------------------
   TIGHT END: combo, down block, chip, seam
   --------------------------------------------------------------- */
const _TC = { offense: 'pistolRight', defense: '43over', showGaps: false };
const _TS = { offense: 'singlebackAce', defense: '43under', showGaps: false };
_demo('teJobs', 'Tight End: Block, Chip & Seam', [
  _dsc('combo', 'Combo block', _TC, ['TE', 'RT'], [
    [0, 'A run to the right. The tight end and the right tackle (gold rings) both start on the same defender: the end lined up on the tight end.'],
    [0.2, 'Snap. Both fire out and DOUBLE-TEAM him, so he cannot get into the gap.'],
    [0.5, 'As he is controlled, the tackle climbs to the linebacker. The two must talk about who stays and who leaves.'],
    [0.82, 'The runner follows the combo through the hole.']
  ], [
    ['TE', 'block', [[0, -4], [0, -5]]], ['RT', 'block', [[5, -3], [6, -5], [3, -13]]], ['SDE', 'rush', [[0, 2], [0, 3]], 0.12], ['SAM', 'cover', [[0, 1], [-1, 4]], 0.35],
    ..._many(['LT', 'LG', 'C', 'RG'], 'block', [[3, -2], [4, -3]]),
    ['SDT', 'rush', [[2, 2]], 0.12], ['RB', 'run', [[10, -4], [22, -12], [26, -22]], 0.1]
  ], ['C', 'QB', 'RB', [76, 44]],
  'Two blockers on one defender, then one climbs. Talk, and never leave early.'),
  _dsc('down', 'Down block', _TS, ['TE'], [
    [0, 'A power run to the right. The defender is lined up on the INSIDE shoulder of the tight end (gold ring).'],
    [0.2, 'Snap. The tight end blocks DOWN on him, driving him toward the middle. The left guard pulls across the formation.'],
    [0.5, 'The puller kicks out the Sam, the end man on the line, and the lane opens.'],
    [0.82, 'The runner follows the puller through the hole.']
  ], [
    ['TE', 'block', [[-3, -3], [-4, -5]]], ['LG', 'block', [[0, 5], [26, 5], [40, -6]]], ['SDE', 'rush', [[-1, 2], [-2, 3]], 0.12], ['SAM', 'cover', [[2, 2], [4, 4]], 0.3],
    ['RT', 'block', [[-3, -2], [-4, -3]]], ['RG', 'block', [[-2, -2], [-3, -3]]], ['C', 'block', [[-2, -2]]], ['LT', 'block', [[3, -2]]],
    ['RB', 'run', [[10, -2], [22, -10], [26, -22]], 0.12]
  ], ['C', 'QB', 'RB', [76, 44]],
  'Defender inside you? Down block him, so the puller can kick out the end.'),
  _dsc('chip', 'Chip and release', _TS, ['TE', 'SDE'], [
    [0, 'A pass play. The tight end is told to chip, then release. The end beside him (gold ring) is the rusher he will slow down.'],
    [0.15, 'Snap. The tight end gives the end a quick, hard hit.'],
    [0.38, 'Then he releases up the field into his route.'],
    [0.78, 'The chip bought the quarterback a moment, and the tight end is open up the seam.']
  ], [
    ['TE', 'route', [[-2, -3], [1, -6], [2, -18], [0, -30]]], ['SDE', 'rush', [[2, 3], [5, 8], [-3, 13]], 0.12],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]]),
    ['QB', 'run', [[0, 3], [0, 6]]], ['RB', 'block', [[8, -2], [14, -3]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[-6, -18]]], ['TE2', 'route', [[0, -10], [-6, -16]]],
    ['SAM', 'cover', [[3, -4]], 0.25], ['MIKE', 'cover', [[0, -5]], 0.25], ['WILL', 'cover', [[-3, -5]], 0.25]
  ], ['C', 'QB', [78, 23]],
  'If your call is chip and release: hit for one second, then run your route.'),
  _dsc('seam', 'Seam vs two deep safeties', { offense: 'singlebackAce', defense: '43under', showGaps: false, overrides: _SH2 }, ['FS', 'SS'], [
    [0, 'Two safeties deep and split. The deep middle between them (gold rings) is the soft spot.'],
    [0.2, 'Snap. The tight end releases straight up the field on a seam route.'],
    [0.5, 'He splits the linebackers and runs at the hole between the safeties.'],
    [0.8, 'The quarterback throws to the open window. A tendency, not a rule: confirm after the snap.']
  ], [
    ['TE', 'route', [[-1, -16], [-8, -30]]], ['SAM', 'cover', [[2, -8], [-3, -12]], 0.25], ['MIKE', 'cover', [[0, -6]], 0.25],
    ['FS', 'cover', [[-2, 0]]], ['SS', 'cover', [[2, 0]]],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]]),
    ['QB', 'run', [[0, 3], [0, 6]]], ['RB', 'block', [[8, -2]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['TE2', 'route', [[0, -10]]]
  ], ['C', 'QB', [70, 23]],
  'Two deep safeties leave the deep middle open: the seam attacks it.')
]);
_demoFor('teJobs', [['primerTE', 'combo'], ['teBaseBlock', 'down'], ['teCombo', 'combo'], ['teChipRelease', 'chip'], ['teSeam', 'seam']]);

/* ---------------------------------------------------------------
   OFFENSIVE LINE: zone, power, pass set, stunt, slide
   --------------------------------------------------------------- */
const _OZ = { offense: 'pistolRight', defense: '43under', showGaps: false };
const _OP = { offense: 'iFormation', defense: '43under', showGaps: false };
const _OA = { offense: 'shotgunDoubles', defense: '43under', showGaps: false };
_demo('olScheme', 'Offensive Line: Blocking Schemes', [
  _dsc('passset', 'Pass set', _OA, ['LT', 'WDE'], [
    [0, 'A pass play. The left tackle (gold ring) faces the outside rusher. His job: stay between the rusher and the quarterback.'],
    [0.14, 'Snap. He kick-slides: a short step back and out at an angle, keeping his body in front of the rusher.'],
    [0.4, 'He punches with both hands inside the rusher’s chest. Feet moving, no lunging.'],
    [0.78, 'The rusher is ridden around and past the quarterback.']
  ], [
    ['LT', 'block', [[-3, 4], [0, 8], [4, 8]]], ['WDE', 'rush', [[-1, 4], [1, 10], [7, 14]], 0.1],
    ..._many(['LG', 'C', 'RG', 'RT'], 'block', [[0, 4], [0, 6]]),
    ['WDT', 'rush', [[0, 5], [2, 9]], 0.1], ['SDT', 'rush', [[0, 5], [-2, 9]], 0.1], ['SDE', 'rush', [[2, 4], [-4, 11]], 0.1],
    ['QB', 'run', [[0, 2], [0, 4]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]], ['RB', 'block', [[8, -2], [10, -3]]]
  ], ['C', 'QB', [83, 40]],
  'Kick-slide, punch with inside hands, keep your feet moving, and ride the rusher past the QB.'),
  _dsc('zone', 'Inside zone', _OZ, ['C', 'RG'], [
    [0, 'Inside zone to the right. The center and right guard (gold rings) will double-team the tackle between them.'],
    [0.14, 'Snap. Both step to the same defender and double-team him, with their heads on the correct side.'],
    [0.45, 'When he is controlled, the guard climbs to the linebacker (the second level) while the center stays on the tackle.'],
    [0.8, 'The runner presses the double team and cuts off the climb.']
  ], [
    ['C', 'block', [[2, -3], [3, -5]]], ['RG', 'block', [[-1, -3], [-3, -5], [-6, -14]]], ['SDT', 'rush', [[0, 2], [-1, 3]], 0.12], ['MIKE', 'cover', [[-1, 2], [-1, 4]], 0.3],
    ['LG', 'block', [[3, -2], [5, -3]]], ['LT', 'block', [[3, -2], [5, -3]]], ['RT', 'block', [[3, -2], [4, -3]]], ['TE', 'block', [[-1, -2], [-2, -3]]],
    ['SDE', 'rush', [[1, 1]], 0.15], ['WDT', 'rush', [[3, 2]], 0.15],
    ['RB', 'run', [[6, -6], [9, -14], [8, -26]], 0.1]
  ], ['C', 'QB', 'RB', [58, 40]],
  'Zone: double the defender between two blockers, then one climbs to the linebacker.'),
  _dsc('power', 'Power: down and kick', _OP, ['LG', 'FB'], [
    [0, 'Power to the right. The left guard (gold ring) will pull. The fullback leads.'],
    [0.14, 'Snap. The play-side linemen block DOWN, toward the center. The left guard pulls behind them.'],
    [0.42, 'The puller kicks out the defender on the end of the line. The fullback goes through the hole.'],
    [0.8, 'The tailback follows the fullback to the linebacker.']
  ], [
    ['LG', 'block', [[0, 5], [26, 5], [33, -3]]], ['RG', 'block', [[-3, -2], [-5, -3]]], ['RT', 'block', [[-3, -2], [-5, -3]]], ['C', 'block', [[-2, -2]]], ['LT', 'block', [[3, -2]]],
    ['SDE', 'rush', [[2, 1], [5, 2]], 0.15], ['SDT', 'rush', [[-1, 2], [-2, 3]], 0.12],
    ['FB', 'run', [[6, -4], [10, -12], [8, -24]], 0.08], ['TB', 'run', [[4, -5], [9, -14], [13, -26]], 0.14], ['MIKE', 'cover', [[3, 4], [4, 8]], 0.3]
  ], ['C', 'QB', 'TB', [63, 45]],
  'Down, down, down, kick: gap blocking with named defenders.'),
  _dsc('stunt', 'Stunt: pass them off', _OA, ['LT', 'LG'], [
    [0, 'A pass play. The defense shows a stunt: two rushers will cross. The left tackle and left guard (gold rings) must talk.'],
    [0.14, 'Snap. The end crashes inside while the tackle loops outside behind him.'],
    [0.4, 'The guard takes the crasher and the tackle takes the looper. They pass the rushers off and do not chase.'],
    [0.78, 'Both rushers are picked up and the pocket holds.']
  ], [
    ['WDE', 'rush', [[5, 5], [13, 10]], 0.1], ['WDT', 'rush', [[0, -3], [-10, 2], [-13, 10]], 0.1],
    ['LT', 'block', [[-3, 3], [-5, 6]]], ['LG', 'block', [[-3, 4], [-4, 6]]], ['C', 'block', [[0, 4], [0, 6]]], ['RG', 'block', [[0, 4], [0, 6]]], ['RT', 'block', [[0, 4], [0, 6]]],
    ['SDT', 'rush', [[0, 5], [-2, 9]], 0.1], ['SDE', 'rush', [[2, 4], [-4, 11]], 0.1],
    ['QB', 'run', [[0, 2], [0, 4]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]], ['RB', 'block', [[8, -2], [10, -3]]]
  ], ['C', 'QB', [95, 40]],
  'Pass off the first rusher, pick up the second, and talk.'),
  _dsc('slide', 'Full slide', { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false }, ['MIKE'], [
    [0, 'The line is calling a full slide to the RIGHT, counted from the Mike (gold ring).'],
    [0.14, 'Snap. All five linemen slide to the right and block the gaps in that direction.'],
    [0.4, 'The rusher on the left is not covered by the slide. The running back takes him.'],
    [0.78, 'Everyone is accounted for.']
  ], [
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[3, 3], [4, 5]]),
    ['RB', 'block', [[-14, -3], [-26, -6]]], ['WDE', 'rush', [[2, 5], [5, 10], [6, 13]], 0.1],
    ['WDT', 'rush', [[3, 4], [4, 8]], 0.1], ['SDT', 'rush', [[2, 4], [1, 8]], 0.1], ['SDE', 'rush', [[-2, 4], [-4, 9]], 0.1],
    ['MIKE', 'cover', [[0, -4]], 0.25], ['QB', 'run', [[0, 2], [0, 4]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]]
  ], ['C', 'QB', [83, 40]],
  'Slide protection: the line slides one way and a back handles the other side.')
]);
_demoFor('olScheme', [['primerOL', 'passset'], ['olPassSet', 'passset'], ['olZoneBlock', 'zone'], ['olCovered', 'zone'], ['olPower', 'power'], ['olStunt', 'stunt'], ['olSlide', 'slide']]);

/* ---------------------------------------------------------------
   INTERIOR D-LINE: keys, two-gap, double team, rush, stunt, screen
   --------------------------------------------------------------- */
const _DK = { offense: 'singlebackAce', defense: '43under', showGaps: false };
const _DA = { offense: 'shotgunDoubles', defense: '43under', showGaps: false };
_demo('dlInterior', 'Interior D-Line: Read, Hold & Rush', [
  _dsc('pass', 'Guards set back', _DK, ['LG', 'RG'], [
    [0, 'You are an inside lineman. Your first key is the guard in front of you (gold rings).'],
    [0.14, 'Snap. Both guards SET BACK with their pads high and their hands up. That is pass protection.'],
    [0.38, 'PASS read: get your hands on him and start the rush. Push the pocket back.'],
    [0.78, 'Collapse the pocket so the quarterback cannot step up.']
  ], [
    ['LG', 'block', [[0, 3], [0, 5]]], ['RG', 'block', [[0, 3], [0, 5]]], ['C', 'block', [[0, 3], [0, 5]]], ['LT', 'block', [[0, 4], [-1, 6]]], ['RT', 'block', [[1, 4], [2, 6]]],
    ['WDT', 'rush', [[1, 5], [4, 11]], 0.1], ['SDT', 'rush', [[0, 5], [-2, 11]], 0.1], ['WDE', 'rush', [[4, 3], [9, 12]], 0.12], ['SDE', 'rush', [[2, 4], [-5, 12]], 0.12],
    ['MIKE', 'cover', [[2, -6], [4, -11]], 0.2], ['WILL', 'cover', [[-5, -5], [-7, -10]], 0.2], ['SAM', 'cover', [[1, -4], [2, -8]], 0.2],
    ['QB', 'run', [[0, 1], [0, 3]]], ['TE', 'route', [[3, -9], [4, -17]]], ['TE2', 'route', [[-2, -8], [-5, -15]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['RB', 'block', [[-8, 0], [-12, -2]], 0.1]
  ], ['C', 'QB', [50, 59], [78, 36]],
  'Guards set back, pads high = pass. Rush and push the pocket.'),
  _dsc('run', 'Guards fire out', _DK, ['LG', 'RG'], [
    [0, 'Same key: the guards (gold rings). This time the play is a run up the middle.'],
    [0.14, 'Snap. Both guards FIRE OUT low, with their feet driving forward. That is a run.'],
    [0.38, 'RUN read: hands inside, press the blocker away from your body and find the ball. Keep your gap.'],
    [0.78, 'Shed the block toward the ball, and the linebacker fills behind you.']
  ], [
    ['LG', 'block', [[0, -3], [1, -5]]], ['RG', 'block', [[0, -3], [-1, -5]]], ['C', 'block', [[0, -3], [0, -5]]], ['LT', 'block', [[2, -2]]], ['RT', 'block', [[-1, -2]]],
    ['WDT', 'rush', [[1, 1], [4, 1]], 0.1], ['SDT', 'rush', [[0, 1], [-1, 2]], 0.1], ['WDE', 'rush', [[3, 1]], 0.12], ['SDE', 'rush', [[-1, 1]], 0.12],
    ['MIKE', 'cover', [[2, 4], [2, 8]], 0.28], ['WILL', 'cover', [[3, 3], [4, 6]], 0.3],
    ['RB', 'run', [[0, -4], [1, -10], [2, -16]]], ['QB', 'run', [[0, 1]]]
  ], ['C', 'QB', 'RB', [52, 48]],
  'Guards fire out = run. Hands inside, keep your gap, shed and tackle.'),
  _dsc('twogap', 'Nose: two-gap', { offense: 'iFormation', defense: '34base', showGaps: true }, ['C', 'NT'], [
    [0, '3-4 front. The nose tackle (gold ring) is head-up on the center and is a TWO-gap player: responsible for the gaps on both sides of the blocker.'],
    [0.14, 'Snap. He strikes the center and controls him with his hands, holding the middle.'],
    [0.42, 'He reads the ball: the run goes to the right A gap, so he slides to that gap, still fighting the blocker.'],
    [0.78, 'Because he tied up the center, the inside linebacker stays free and makes the tackle.']
  ], [
    ['NT', 'rush', [[0, 2], [3, 3]], 0.08], ['C', 'block', [[0, -2], [3, -3]]], ['LG', 'block', [[3, -2], [4, -3]]], ['RG', 'block', [[0, -2], [-1, -3]]],
    ['LT', 'block', [[3, -2]]], ['RT', 'block', [[-1, -2]]], ['SILB', 'cover', [[2, 5], [3, 8]], 0.3], ['WILB', 'cover', [[3, 3]], 0.3],
    ['TB', 'run', [[6, -8], [10, -18], [10, -26]], 0.1], ['FB', 'run', [[6, -4], [10, -12]], 0.05]
  ], ['C', 'QB', 'TB', [60, 45]],
  'Two-gap: control the blocker, then play the gap the ball goes to.'),
  _dsc('double', 'Beat the double', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['SDT'], [
    [0, 'Inside run. The center and right guard will double-team the 1-technique (gold ring).'],
    [0.14, 'Snap. Two blockers hit him. He stays LOW, keeps his shoulders SQUARE and sinks his hips.'],
    [0.45, 'He does not spin out, because that would open his gap. He holds his ground.'],
    [0.8, 'Holding two blockers keeps the linebacker free to make the tackle.']
  ], [
    ['SDT', 'rush', [[0, 2], [0, 3]], 0.1], ['C', 'block', [[2, -3], [3, -4]]], ['RG', 'block', [[-1, -3], [-3, -4]]],
    ['MIKE', 'cover', [[0, 4], [2, 8]], 0.3], ['LG', 'block', [[3, -2]]], ['LT', 'block', [[3, -2]]], ['RT', 'block', [[3, -2]]],
    ['RB', 'run', [[6, -6], [9, -12], [10, -16]], 0.1]
  ], ['C', 'QB', 'RB', [60, 46]],
  'Stay low and square. Do not spin out of a double team.'),
  _dsc('passrush', 'Interior rush', _DA, ['LG', 'C'], [
    [0, 'Pass play. Inside rushers have the shortest path to the quarterback.'],
    [0.14, 'Snap. Both tackles fire out and drive with power, pushing the pocket straight back.'],
    [0.45, 'They stay in their lanes: neither rushes around the blocker, so the quarterback cannot step up.'],
    [0.8, 'The pocket collapses and the quarterback is forced to hurry the throw.']
  ], [
    ['WDT', 'rush', [[1, 4], [4, 10], [8, 13]], 0.08], ['SDT', 'rush', [[0, 4], [-1, 8], [-1, 12]], 0.08],
    ['LG', 'block', [[0, 4], [3, 8]]], ['C', 'block', [[0, 4], [0, 8]]], ['RG', 'block', [[0, 4], [-1, 7]]], ['LT', 'block', [[0, 4]]], ['RT', 'block', [[0, 4]]],
    ['WDE', 'rush', [[-1, 4], [3, 10]], 0.1], ['SDE', 'rush', [[2, 4], [-3, 10]], 0.1],
    ['QB', 'run', [[0, 3], [1, 6]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]]
  ], ['C', 'QB', [95, 40]],
  'Push the pocket back and stay in your lane.'),
  _dsc('stunt', 'Stunt', _DA, ['WDT', 'WDE'], [
    [0, 'A planned stunt on the left side. The tackle (gold ring) crashes and the end loops behind him.'],
    [0.14, 'Snap. The tackle drives hard into the A gap and takes the guard with him.'],
    [0.4, 'The end waits for the right timing and loops tight behind him into the gap the tackle opened.'],
    [0.78, 'If the timing is off both rushers end up in the same place. Names of stunts vary by team.']
  ], [
    ['WDT', 'rush', [[3, 4], [7, 8]], 0.08], ['WDE', 'rush', [[0, -3], [17, 0], [24, 10]], 0.1],
    ['LG', 'block', [[3, 3], [4, 6]]], ['LT', 'block', [[3, 4], [10, 8]]], ['C', 'block', [[0, 4], [0, 6]]], ['RG', 'block', [[0, 4], [0, 6]]], ['RT', 'block', [[0, 4], [0, 6]]],
    ['SDT', 'rush', [[0, 5], [-2, 9]], 0.1], ['SDE', 'rush', [[2, 4], [-4, 11]], 0.1],
    ['QB', 'run', [[0, 2], [0, 4]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]]
  ], ['C', 'QB', [83, 40]],
  'First rusher crashes and takes a blocker. Second rusher loops behind him.'),
  _dsc('screen', 'Screen alert', _DA, ['SDT'], [
    [0, 'Pass rush. The inside tackle (gold ring) is rushing up the middle.'],
    [0.2, 'The guards let him go with almost no fight, and the running back slides out to the left. That is a screen picture.'],
    [0.45, 'He stops chasing the quarterback and finds the ball: the screen is going left.'],
    [0.8, 'He turns and chases behind it, instead of finishing a rush with no idea where the ball is.']
  ], [
    ['SDT', 'rush', [[0, 5], [-1, 10], [-12, 12]], 0.08], ['LG', 'block', [[-8, -3], [-14, -4]]], ['C', 'block', [[-12, -3], [-18, -4]]],
    ['RG', 'block', [[0, 3], [1, 5]]], ['RT', 'block', [[0, 3]]], ['LT', 'block', [[-4, -1]]],
    ['RB', 'route', [[-20, -2], [-30, -6]]], ['QB', 'run', [[0, 3], [-2, 5]]],
    ['WDT', 'rush', [[1, 5], [3, 10]], 0.1], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]], ['H', 'route', [[3, -10]]], ['S', 'route', [[-3, -12]]]
  ], ['C', 'QB', [26, 58]],
  'Let go too easily and the back slides out? Think screen: find the ball.')
]);
_demoFor('dlInterior', [['primerDL', 'pass'], ['dlKeys', 'run'], ['dlGetOff', 'run'], ['dlGaps', 'twogap'], ['dlDouble', 'double'], ['dlPassRush', 'passrush'], ['dlStunt', 'stunt'], ['dlScreen', 'screen']]);

/* ---------------------------------------------------------------
   CORNERBACK: press, Cover 2, Cover 3, route break, force
   --------------------------------------------------------------- */
_demo('cbCoverage', 'Cornerback: Press, Zones & Force', [
  _dsc('press', 'Press technique', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { CBL: { x: 6, y: 46 } } }, ['X'], [
    [0, 'Press coverage. The corner lines up on the receiver and watches the receiver’s HIPS (gold ring), not his head or shoulders.'],
    [0.14, 'Snap. A quick jam at the line with both hands inside the frame, then he stays square.'],
    [0.4, 'The receiver stems upfield. The corner mirrors him with quick, balanced steps.'],
    [0.78, 'He stays on top with his hands off downfield. Nothing gets over his head.']
  ], [
    ['CBL', 'cover', [[2, -1], [5, -8], [6, -20]], 0.1], ['X', 'route', [[2, -4], [3, -12], [4, -24]]],
    ['Z', 'route', [[0, -18]]], ['Y', 'route', [[0, -20]]], ['TE', 'route', [[2, -8], [10, -14]]], ['QB', 'run', [[0, 2], [0, 4]]],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]])
  ], ['C', 'QB', [9, 27]],
  'Eyes on the hips. Jam, stay square, stay on top. Hands off downfield.'),
  _dsc('cover2', 'Cover 2: jam and flat', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 }, CBR: { x: 94, y: 45 } } }, ['CBR'], [
    [0, 'Cover 2. The right corner (gold ring) is up close. Two safeties split the deep field.'],
    [0.16, 'Snap. The corner jams the outside receiver and redirects him.'],
    [0.42, 'Then he sinks into the flat, the short outside area. The deep half belongs to the safety.'],
    [0.78, 'The corner never goes deep with the receiver. He trusts the safety behind him.']
  ], [
    ['CBR', 'cover', [[0, -1], [-2, -3], [-4, -3]]], ['Y', 'route', [[-1, -8], [-4, -24]]], ['SS', 'cover', [[5, 1], [8, 3]]], ['FS', 'cover', [[-3, 0]]],
    ['Z', 'route', [[6, -8]]], ['NB', 'cover', [[2, -4]], 0.2], ['X', 'route', [[0, -20]]], ['TE', 'route', [[0, -10]]], ['QB', 'run', [[0, 2], [0, 4]]]
  ], ['C', 'QB', [91, 47]],
  'Cover 2 corner: jam, then sink to the flat.'),
  _dsc('cover3', 'Cover 3: deep third', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false }, ['CBL', 'CBR', 'FS'], [
    [0, 'Cover 3. Three defenders cover the deep field: the two corners and the free safety (gold rings).'],
    [0.16, 'Snap. The corners back up and out to the deep OUTSIDE thirds.'],
    [0.42, 'The free safety takes the deep MIDDLE third.'],
    [0.78, 'Each of the three keeps his depth and watches the quarterback.']
  ], [
    ['CBL', 'cover', [[1, -4], [3, -8]]], ['CBR', 'cover', [[-1, -4], [-3, -8]]], ['FS', 'cover', [[0, -1], [0, -3]]],
    ['X', 'route', [[0, -26]]], ['Y', 'route', [[0, -26]]], ['Z', 'route', [[0, -22]]], ['TE', 'route', [[0, -18]]], ['QB', 'run', [[0, 2], [0, 4]]]
  ], ['C', 'QB', [50, 59]],
  'Cover 3: the corner owns the deep outside third.'),
  _dsc('break', 'Read the break', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { CBR: { x: 94, y: 38 } } }, ['Y'], [
    [0, 'Watch the receiver’s hips and steps (gold ring). The corner is playing off, a few yards back.'],
    [0.2, 'The receiver runs upfield on his stem.'],
    [0.45, 'He sinks his hips and shortens his steps: a hard cut is coming.'],
    [0.75, 'He breaks inside. The corner plants and drives on the route.']
  ], [
    ['Y', 'route', [[0, -8], [0, -10], [-12, -10]]], ['CBR', 'cover', [[0, -1], [-1, -2], [-6, 1]]],
    ['Z', 'route', [[0, -16]]], ['TE', 'route', [[0, -10]]], ['X', 'route', [[0, -20]]], ['QB', 'run', [[0, 2], [0, 4]]]
  ], ['C', 'QB', [83, 41]],
  'Sinking hips and shortening steps tell you a break is coming.'),
  _dsc('force', 'Run support: force', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['Z', 'CBR'], [
    [0, 'A receiver who starts blocking you at the snap (gold ring on him) is telling you it is a run.'],
    [0.2, 'Snap. The receiver stalks the corner. The corner keeps his outside shoulder free and fights the block.'],
    [0.5, 'The runner tries to bounce outside.'],
    [0.8, 'The corner holds the edge and forces the runner back inside to the help. Who has force depends on the call.']
  ], [
    ['Z', 'block', [[-1, -8], [-3, -13]]], ['CBR', 'cover', [[-1, 6], [-3, 10]], 0.1],
    ['RB', 'run', [[10, -4], [26, -12], [34, -20], [30, -26]], 0.1], ['SS', 'cover', [[4, 6], [8, 14]], 0.3],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT', 'TE'], 'block', [[3, -2], [4, -3]]), ['SDE', 'rush', [[2, 1]], 0.15]
  ], ['C', 'QB', 'RB', [80, 42]],
  'Receiver blocking you = run. Keep outside leverage and force it back inside.')
]);
_demoFor('cbCoverage', [['primerCB', 'press'], ['cbAlign', 'press'], ['cbPress', 'press'], ['cbEyes', 'press'], ['cbCoverageJobs', 'cover3'], ['cbRouteStem', 'break'], ['cbForce', 'force']]);

/* ---------------------------------------------------------------
   SAFETY: quarters, alley, play-action, motion
   --------------------------------------------------------------- */
_demo('sDeep', 'Safety: Reads, Run & Calls', [
  _dsc('quarters', 'Quarters: read #2', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: _SH2 }, ['SS', 'Z'], [
    [0, 'Quarters coverage. The strong safety (gold ring) reads #2, the second receiver from the sideline: the slot (gold ring).'],
    [0.2, 'Snap. The slot pushes VERTICAL.'],
    [0.5, 'The safety sees it and covers him. In this scheme, #2 vertical means the safety’s man.'],
    [0.8, 'If #2 had broken short instead, the safety would be free to help elsewhere. Details vary by team.']
  ], [
    ['Z', 'route', [[0, -18], [-2, -30]]], ['SS', 'cover', [[6, 3], [14, 9]]], ['FS', 'cover', [[-2, 0]]], ['CBR', 'cover', [[-1, -3], [-3, -8]]],
    ['Y', 'route', [[0, -24]]], ['TE', 'route', [[0, -10]]], ['X', 'route', [[0, -22]]], ['QB', 'run', [[0, 2], [0, 4]]],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]])
  ], ['C', 'QB', [83, 25]],
  'Quarters: #2 vertical, the safety covers him.'),
  _dsc('alley', 'Run support: the alley', { offense: 'pistolRight', defense: '43under', showGaps: false, overrides: { SS: { x: 68, y: 33 } } }, ['SS'], [
    [0, 'The strong safety (gold ring) is a few steps off the line, ready to support the run.'],
    [0.14, 'Snap. The linemen fire out and the back takes a handoff. The safety reads RUN.'],
    [0.42, 'He comes downhill and fills the ALLEY, the lane between the defensive line and the sideline.'],
    [0.8, 'He keeps his leverage, breaks down and wraps up. He is the last line of defense.']
  ], [
    ['SS', 'cover', [[6, 4], [14, 10]], 0.1], ['RB', 'run', [[10, -4], [26, -12], [34, -22]], 0.1],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT', 'TE'], 'block', [[3, -2], [4, -3]]),
    ['SDE', 'rush', [[2, 1]], 0.15], ['SAM', 'cover', [[-2, 4]], 0.25], ['MIKE', 'cover', [[7, 5], [11, 10]], 0.25]
  ], ['C', 'QB', 'RB', [82, 43]],
  'Read run, come downhill, fill the alley with leverage, then wrap up.'),
  _dsc('pa', 'Play-action: stay on top', { offense: 'singlebackAce', defense: '43under', showGaps: false }, ['FS'], [
    [0, 'The free safety (gold ring) is deep in the middle. The offense runs a play-action pass.'],
    [0.14, 'Snap. The back fakes a handoff and the linebackers step up toward the run.'],
    [0.4, 'The safety does NOT bite. He holds his depth, keeps his eyes up and reads the line: the linemen set back, so it is a pass.'],
    [0.78, 'The tight end runs a seam, and the safety is still on top of him.']
  ], [
    ['RB', 'run', [[3, -5], [8, -8]]], ['QB', 'run', [[0, 3], [0, 6]]], ['TE', 'route', [[-1, -16], [-8, -30]]],
    ['FS', 'cover', [[7, 0], [14, 1]], 0.2], ['MIKE', 'cover', [[2, 5], [4, 8]], 0.12], ['WILL', 'cover', [[2, 4]], 0.12], ['SAM', 'cover', [[-2, 4]], 0.12],
    ..._many(['LT', 'LG', 'C', 'RG', 'RT'], 'block', [[0, 3], [0, 5]]), ['X', 'route', [[0, -22]]], ['Z', 'route', [[0, -22]]], ['TE2', 'route', [[0, -10]]]
  ], ['C', 'QB', [70, 24]],
  'Do not bite. The deep ball hurts most, so stay on top.'),
  _dsc('motion', 'Motion: new strength', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['TE', 'SS'], [
    [0, 'Before the snap the tight end (gold ring) goes in motion across the formation to the left.'],
    [0.3, 'The strength of the formation flips to the left. The safeties see the whole field and CALL it, and the defense re-aligns.'],
    [0.7, 'Short, loud calls keep everybody on the same page.']
  ], [
    ['TE', 'route', [[-8, 6], [-35, 6], [-56, 0]]], ['SS', 'cover', [[-12, 1], [-30, 2]], 0.15], ['FS', 'cover', [[-8, 0], [-18, 0]], 0.15],
    ['MIKE', 'cover', [[-3, 0], [-6, 0]], 0.2], ['SAM', 'cover', [[-10, 2], [-30, 4]], 0.2], ['QB', 'run', [[0, 1]]]
  ], ['C', 'QB', [50, 58]],
  'Motion can change the strength. Call it and re-align.')
]);
_demoFor('sDeep', [['primerS', 'alley'], ['sCoverages', 'quarters'], ['sRead', 'quarters'], ['sRun', 'alley'], ['sPlayAction', 'pa'], ['sMotion', 'motion']]);
