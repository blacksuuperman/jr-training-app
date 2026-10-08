/* =========================================================
   FOOTBALL DEMOS — animated "what to key on" teaching demos.

   Each demo is a small set of SCENES (e.g. "Pass play" and "Run play").
   A scene is one field diagram plus the movement of the players, with
   caption STEPS that appear as the play unfolds. The athlete can press
   Play, drag the slider to scrub through the play, or switch scenes.

   Movement is written as offsets from where each player lines up:
     ['RT', 'block', [[dx,dy],[dx,dy]], delay]
   Offsets are measured from the START spot (not cumulative).
   y goes DOWN the screen: the offense is below the line, the defense is
   above it, so a NEGATIVE dy moves a player toward the defense/upfield.
   delay (0 to .6) = how late in the play he starts (defenders react).

   All of this is teaching animation — simplified and generic. Teams and
   coaches differ on exact footwork and assignments, and every scene is
   worded to say so where it matters.
   ========================================================= */
const DEMOS = {};
const DEMO_FOR_CONCEPT = {};   // conceptId -> { demo: demoId, scene: sceneId }

function _demoStart(field){
  const out = {};
  const off = FORMATIONS[field.offense];
  if (off) off.players.forEach(p => { out[p.id] = [p.x, p.y]; });
  if (field.defense) defenseFor(field.defense, field.offense).forEach(p => { out[p.id] = [p.x, p.y]; });
  return out;
}
// Build one scene. mv = list of [id, style, offsets, delay]
function _dsc(id, label, field, keys, steps, mv, ballTokens, takeaway){
  return { id: id, label: label, field: field, keys: keys, steps: steps, mv: mv, ball: ballTokens || null, takeaway: takeaway || '' };
}
function _demo(id, title, scenes){
  DEMOS[id] = { id: id, title: title, scenes: scenes };
}
function _demoFor(demoId, list){   // list = [[conceptId, sceneId], ...]
  list.forEach(x => { DEMO_FOR_CONCEPT[x[0]] = { demo: demoId, scene: x[1] }; });
}
// Turn a scene into what the field renderer wants: moves with absolute points + ball path.
function demoPlayOut(scene){
  const st = _demoStart(scene.field);
  const moves = scene.mv.filter(m => st[m[0]]).map(m => ({
    id: m[0], style: m[1] || 'run', delay: m[3] || 0,
    to: (m[2] || []).map(d => [st[m[0]][0] + d[0], st[m[0]][1] + d[1]])
  }));
  let ball = null;
  if (scene.ball) ball = scene.ball.map(t => typeof t === 'string' ? (st[t] || [50, 55]) : t);
  return { caption: '', moves: moves, ball: ball };
}

/* ---------------------------------------------------------------
   1. THE TACKLE: run or pass?  (for the edge rusher)
   Pistol vs 4-3 Under. The strong-side end (SDE) keys the right tackle.
   --------------------------------------------------------------- */
const _FE = { offense: 'pistolRight', defense: '43under', showGaps: false };
_demo('tackleKey', 'Edge Rusher: Read The Tackle', [
  _dsc('pass', 'Pass play', _FE, ['RT'], [
    [0, 'Before the snap: your eyes go to the offensive tackle (the gold ring). His first move is your first key.'],
    [0.14, 'Snap. The tackle sets BACK with his shoulders square and his hands up. That is pass protection.'],
    [0.40, 'PASS read: stop reading and start rushing. Go after the outside edge with a plan.'],
    [0.78, 'Finish at the quarterback. Stay level with him; never get deeper than the QB.']
  ], [
    ['RT', 'block', [[2, 4], [3, 6]]], ['LT', 'block', [[0, 4], [-1, 6]]], ['LG', 'block', [[0, 3], [0, 5]]],
    ['C', 'block', [[0, 3], [0, 5]]], ['RG', 'block', [[0, 3], [0, 5]]],
    ['SDE', 'rush', [[3, 3], [4, 11], [-8, 14]], 0.12], ['SDT', 'rush', [[0, 5], [-2, 9]], 0.1], ['WDT', 'rush', [[0, 5], [1, 9]], 0.1],
    ['WDE', 'rush', [[-3, 4], [0, 11], [14, 12]], 0.12],
    ['QB', 'run', [[0, 2], [0, 3]]],
    ['MIKE', 'cover', [[0, -6], [3, -10]], 0.2], ['WILL', 'cover', [[-4, -6], [-6, -11]], 0.2],
    ['X', 'route', [[0, -20]]], ['Z', 'route', [[-6, -18]]], ['TE', 'route', [[2, -10], [10, -14]]], ['H', 'route', [[10, -6], [20, -14]]],
    ['RB', 'block', [[8, -2], [12, -3]], 0.1]
  ], ['C', 'QB', 'QB', [78, 40]],
  'Tackle sets back = pass. Rush with a plan, and stay no deeper than the QB.'),
  _dsc('down', 'Run: tackle blocks down', { offense: 'iFormation', defense: '43under', showGaps: false }, ['RT'], [
    [0, 'Same key: the offensive tackle. In the I-Formation the fullback and tailback are behind the QB.'],
    [0.14, 'Snap. The tackle steps INSIDE and fires into the lineman next to you. That is a down block, and a run.'],
    [0.38, 'A down block means somebody is coming to kick you out (a pulling guard or the fullback). Close down and shrink the hole; do not run upfield past it.'],
    [0.75, 'Take on the kick-out with leverage and keep the ball from getting outside you.']
  ], [
    ['RT', 'block', [[-3, -1], [-5, -2]]], ['RG', 'block', [[-1, -2], [-3, -3]]], ['C', 'block', [[-2, -2]]], ['LG', 'block', [[3, -2], [8, -3]]], ['LT', 'block', [[3, -2]]],
    ['FB', 'run', [[10, -4], [24, -10], [26, -12]]], ['TB', 'run', [[3, -6], [10, -14], [20, -18]], 0.1],
    ['SDE', 'rush', [[-3, 2], [-6, 4]], 0.15], ['SDT', 'rush', [[-2, 2]], 0.1], ['MIKE', 'cover', [[8, 6], [16, 9]], 0.25], ['SAM', 'cover', [[-3, 4], [-6, 8]], 0.3]
  ], ['C', 'QB', [54, 62], [64, 58], [72, 52]],
  'Tackle blocks down = run with a kick-out coming. Close down; don’t run upfield.'),
  _dsc('reach', 'Run: tackle reaches you', _FE, ['RT'], [
    [0, 'Same key: the offensive tackle (gold ring). This time the play is a zone run toward your side.'],
    [0.14, 'Snap. The tackle steps OUTSIDE at you with his hands aimed at your outside shoulder. That is a reach block.'],
    [0.40, 'RUN AT YOU: keep your outside shoulder free and hold the edge so he cannot wash you inside.'],
    [0.75, 'The back is forced to cut inside, where the linebacker fills and makes the tackle.']
  ], [
    ['RT', 'block', [[4, -2], [6, -3]]], ['TE', 'block', [[-1, -2], [-3, -3]]], ['RG', 'block', [[3, -2], [4, -3]]], ['C', 'block', [[3, -2]]], ['LG', 'block', [[3, -2]]], ['LT', 'block', [[3, -2]]],
    ['SDE', 'rush', [[1, 1], [0, 2]], 0.14], ['SDT', 'rush', [[2, 2]], 0.1], ['SAM', 'cover', [[-4, 4], [-6, 7]], 0.3], ['MIKE', 'cover', [[7, 5], [11, 10]], 0.25],
    ['RB', 'run', [[8, -4], [16, -10], [14, -16]]]
  ], ['C', 'QB', [54, 66], [66, 56], [64, 50]],
  'Tackle reaches outside = run toward you. Hold the edge and keep the ball inside.')
]);
_demoFor('tackleKey', [['primerEDGE', 'pass'], ['edgeKeys', 'pass'], ['edgePassRush', 'pass'], ['edgeDown', 'down'], ['edgeReach', 'reach']]);

/* ---------------------------------------------------------------
   2. THE GUARDS: run or pass?  (for the inside / Mike linebacker)
   Single-back Ace vs 4-3 Under.
   --------------------------------------------------------------- */
const _FL = { offense: 'singlebackAce', defense: '43under', showGaps: false };
_demo('guardKey', 'Linebacker: Read The Guards', [
  _dsc('pass', 'Pass play', _FL, ['LG', 'RG'], [
    [0, 'Before the snap: the Mike’s eyes go THROUGH the two guards (gold rings). They tell the story faster than the ball.'],
    [0.14, 'Snap. Both guards SET BACK with their pads high and their hands up. That is pass protection.'],
    [0.38, 'PASS read: do not run to the line. Drop to your zone depth with your eyes on the QB.'],
    [0.78, 'Get depth in the hook zone. Now you can see the throw and break on it.']
  ], [
    ['LG', 'block', [[0, 3], [0, 5]]], ['RG', 'block', [[0, 3], [0, 5]]], ['C', 'block', [[0, 3], [0, 5]]], ['LT', 'block', [[0, 4], [-1, 6]]], ['RT', 'block', [[1, 4], [2, 6]]],
    ['WDT', 'rush', [[0, 5], [3, 9]], 0.12], ['SDT', 'rush', [[0, 5], [-3, 9]], 0.12], ['WDE', 'rush', [[4, 3], [9, 12]], 0.12], ['SDE', 'rush', [[2, 4], [-6, 12]], 0.12],
    ['MIKE', 'cover', [[2, -6], [4, -11]], 0.2], ['WILL', 'cover', [[-5, -5], [-7, -10]], 0.2], ['SAM', 'cover', [[1, -4], [2, -8]], 0.2],
    ['QB', 'run', [[0, 1], [0, 3]]], ['TE', 'route', [[3, -9], [4, -17]]], ['TE2', 'route', [[-2, -8], [-5, -15]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]],
    ['RB', 'block', [[-8, 0], [-12, -2]], 0.1]
  ], ['C', 'QB', [50, 59], [78, 36]],
  'Guards set back, pads high = pass. Drop to your zone and read the QB.'),
  _dsc('run', 'Run play', _FL, ['LG', 'RG'], [
    [0, 'Same key: the guards (gold rings). This time the play is a run up the middle.'],
    [0.14, 'Snap. Both guards FIRE OUT low, with pads down and feet driving forward. That is a run.'],
    [0.38, 'RUN read: do not drop. Attack downhill and fill the gap where the ball is going.'],
    [0.75, 'Meet the ball carrier at the line with your shoulders square. Take on the block; do not go around it.']
  ], [
    ['LG', 'block', [[2, -3], [3, -5]]], ['RG', 'block', [[-2, -3], [-3, -5]]], ['C', 'block', [[2, -3], [3, -4]]], ['LT', 'block', [[3, -2]]], ['RT', 'block', [[-3, -2]]],
    ['SDT', 'rush', [[0, 3], [0, 4]], 0.12], ['WDT', 'rush', [[1, 2]], 0.12],
    ['MIKE', 'cover', [[0, 5], [-3, 10]], 0.2], ['WILL', 'cover', [[5, 3], [12, 8]], 0.3], ['SAM', 'cover', [[-3, 4], [-8, 8]], 0.3],
    ['RB', 'run', [[0, -4], [1, -10], [2, -15]]], ['TE', 'block', [[-2, -2]]], ['TE2', 'block', [[2, -2]]]
  ], ['C', 'QB', [50, 63], [50, 56], [52, 48]],
  'Guards fire out low = run. Attack downhill and fill.'),
  _dsc('pa', 'Play-action fake', _FL, ['LG', 'RG', 'MIKE'], [
    [0, 'Watch the guards. They look the same as a run, so be ready.'],
    [0.16, 'Snap. The guards fire out and the back takes the fake. Do not stop reading at the guards.'],
    [0.40, 'You may take a step or two for the run fit. Then check the QB: he still has the ball, so it is play-action.'],
    [0.78, 'Recover to your pass drop with your eyes back on the QB. Do not bite on the fake.']
  ], [
    ['LG', 'block', [[1, -3], [2, -5]]], ['RG', 'block', [[-1, -3], [-2, -5]]], ['C', 'block', [[0, -3]]], ['LT', 'block', [[2, -2]]], ['RT', 'block', [[-2, -2]]],
    ['RB', 'run', [[-3, -6], [-2, -9]]], ['QB', 'run', [[-3, 2], [0, 5]]],
    ['MIKE', 'cover', [[0, 3], [3, -3], [6, -9]], 0.18], ['WILL', 'cover', [[2, 2], [-2, -3], [-4, -9]], 0.18],
    ['SDT', 'rush', [[0, 3]], 0.1], ['WDT', 'rush', [[1, 2]], 0.1], ['TE', 'route', [[3, -8], [4, -15]]]
  ], ['C', 'QB', [50, 64], [78, 38]],
  'Guards fire out and the QB fakes: it may be play-action. Do not bite; work back to your drop.')
]);
_demoFor('guardKey', [['primerLB', 'pass'], ['lbGuardKey', 'run'], ['lbPlayAction', 'pa']]);

/* ---------------------------------------------------------------
   3. THE PULLING GUARD (Power) — follow the puller.
   --------------------------------------------------------------- */
const _FP = { offense: 'iFormation', defense: '43under', showGaps: false };
_demo('powerPull', 'Power: Follow The Puller', [
  _dsc('power', 'Power run', _FP, ['LG'], [
    [0, 'Gold ring: the backside guard. If he does not block the man in front of him, he is pulling.'],
    [0.14, 'Snap. The guard PULLS: he runs behind the line toward the play side. The other linemen block down.'],
    [0.40, 'Power is gap blocking. The puller kicks out the end man and a lead blocker leads through the hole. The back follows them.'],
    [0.75, 'Fill the hole inside the kick-out block. For the back: stay on the lead blocker’s hip and cut off his block.']
  ], [
    ['LG', 'block', [[0, 4], [22, 5], [30, -4], [32, -8]]],
    ['RG', 'block', [[3, -3]]], ['C', 'block', [[3, -2]]], ['RT', 'block', [[-2, -3]]], ['LT', 'block', [[3, -2]]], ['TE', 'block', [[-3, -3]]],
    ['FB', 'run', [[10, -3], [20, -12], [22, -16]]], ['TB', 'run', [[6, -6], [15, -13], [20, -22]], 0.05],
    ['SDE', 'rush', [[3, 1], [4, 2]], 0.2], ['SDT', 'rush', [[-3, 2]], 0.1], ['MIKE', 'cover', [[8, 4], [14, 9]], 0.25], ['WILL', 'cover', [[6, 4], [14, 8]], 0.35], ['SAM', 'cover', [[-2, 4]], 0.3]
  ], ['C', 'QB', [50, 66], [58, 64], [68, 54], [74, 44]],
  'A pulling guard shows you where the run is going. Follow him and fill inside his block.')
]);
_demoFor('powerPull', [['powerRun', 'power'], ['lbFlows', 'power']]);

/* ---------------------------------------------------------------
   4. ISO / LEAD: key the fullback.
   --------------------------------------------------------------- */
const _FI = { offense: 'iFormation', defense: '43over', showGaps: false };
_demo('isoFill', 'I-Formation: Key The Fullback', [
  _dsc('iso', 'Iso run', _FI, ['FB'], [
    [0, 'Gold ring: the fullback. In the I-Formation he leads the tailback into the hole.'],
    [0.14, 'Snap. The fullback is first out of the backfield, aimed at the hole. The tailback is right behind him.'],
    [0.40, 'The play goes where the fullback goes. Read through the guard to his path and attack him downhill.'],
    [0.75, 'Meet him at the line: near foot, near shoulder, one arm free. Fill your gap; do not go around the block.']
  ], [
    ['FB', 'run', [[0, -7], [1, -14], [2, -20]], 0.03], ['TB', 'run', [[-1, -8], [1, -17], [2, -23]], 0.08],
    ['C', 'block', [[0, -3]]], ['RG', 'block', [[-2, -3]]], ['LG', 'block', [[2, -3]]], ['LT', 'block', [[3, -2]]], ['RT', 'block', [[-3, -2]]], ['TE', 'block', [[-3, -2]]],
    ['MIKE', 'cover', [[0, 5], [0, 12]], 0.2], ['SDT', 'rush', [[0, 3]], 0.1], ['WILL', 'cover', [[3, 3], [8, 7]], 0.3], ['SAM', 'cover', [[-3, 4], [-8, 8]], 0.3]
  ], ['C', 'QB', [50, 66], [50, 60], [52, 50]],
  'In the I-Formation, key the fullback. Meet him at the line and fill the hole.')
]);
_demoFor('isoFill', [['isoLead', 'iso'], ['lbIKey', 'iso']]);

/* ---------------------------------------------------------------
   5. RB PASS PROTECTION: find the Mike, then the extra rusher.
   --------------------------------------------------------------- */
const _FB = { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false };
_demo('rbPassPro', 'Running Back: Pass Protection', [
  _dsc('blitz', 'Nickel blitz', _FB, ['MIKE', 'NB'], [
    [0, 'Before the snap: find the Mike first (gold ring). Then look for any extra defender creeping toward the line, like the Nickel.'],
    [0.15, 'Snap. The line slides toward the weak (left) side. The Nickel leaves coverage and rushes from the strong side, the side the slide does NOT cover.'],
    [0.40, 'The rusher the slide does not account for is yours. Step up and meet him in front of the QB.'],
    [0.78, 'Square up, keep your head up and your hands inside, and give the QB time to throw.']
  ], [
    ['LT', 'block', [[-3, 3], [-5, 5]]], ['LG', 'block', [[-3, 3], [-5, 5]]], ['C', 'block', [[-3, 3], [-5, 5]]], ['RG', 'block', [[-3, 3], [-5, 5]]], ['RT', 'block', [[-3, 3], [-5, 5]]],
    ['NB', 'rush', [[-1, 6], [-12, 14], [-22, 26]], 0.12], ['SDE', 'rush', [[-4, 5], [-12, 13]], 0.12], ['SDT', 'rush', [[-2, 6]], 0.12], ['WDT', 'rush', [[2, 6]], 0.12], ['WDE', 'rush', [[3, 5]], 0.12],
    ['MIKE', 'cover', [[0, -3], [2, -8]], 0.2], ['WILL', 'cover', [[-3, -5], [-6, -10]], 0.2],
    ['RB', 'block', [[8, 0], [18, -2], [26, -6]], 0.1], ['QB', 'run', [[0, 1], [0, 3]]],
    ['X', 'route', [[0, -20]]], ['Z', 'route', [[-4, -14]]], ['Y', 'route', [[-6, -18]]], ['TE', 'route', [[2, -10], [4, -15]]]
  ], ['C', 'QB', [50, 62], [5, 32]],
  'Find the Mike, then the extra rusher. The rusher the line does not account for is yours.'),
  _dsc('bluff', 'Linebacker bluff', { offense: 'pistolRight', defense: '43under', showGaps: false, overrides: { MIKE: { x: 52, y: 44 } } }, ['MIKE'], [
    [0, 'The Mike walks up into the A gap. He is showing a blitz, but he might be bluffing.'],
    [0.14, 'Snap. He drops back instead of rushing. You cannot be sure before the snap, so keep your protection rules ready.'],
    [0.40, 'Check who is over you. If no one comes, release to your check-down route.'],
    [0.78, 'Patience. React to what the defender actually does, not what he shows.']
  ], [
    ['MIKE', 'cover', [[2, -3], [5, -9], [6, -15]], 0.15], ['WILL', 'cover', [[-3, -5], [-6, -9]], 0.2],
    ['LT', 'block', [[0, 4]]], ['LG', 'block', [[0, 3]]], ['C', 'block', [[0, 3]]], ['RG', 'block', [[0, 3]]], ['RT', 'block', [[0, 4]]],
    ['WDE', 'rush', [[4, 5], [8, 12]], 0.12], ['SDE', 'rush', [[-3, 5], [-8, 12]], 0.12], ['WDT', 'rush', [[1, 6]], 0.12], ['SDT', 'rush', [[-1, 6]], 0.12],
    ['RB', 'route', [[10, -2], [20, -10], [24, -20]], 0.2], ['QB', 'run', [[0, 3]]],
    ['X', 'route', [[0, -20]]], ['H', 'route', [[8, -12], [14, -14]]], ['Z', 'route', [[0, -22]]], ['TE', 'route', [[3, -9]]]
  ], ['C', 'QB', [50, 62], [74, 42]],
  'A linebacker creeping to the line may be showing blitz or bluffing. Stay ready and react to what he does.')
]);
_demoFor('rbPassPro', [['primerRB', 'blitz'], ['nickelBlitz', 'blitz'], ['rbProtectionRule', 'blitz'], ['rbFindMike', 'blitz'], ['blitzShow', 'bluff']]);

/* ---------------------------------------------------------------
   6. BACKSIDE CONTAIN vs a bootleg.
   --------------------------------------------------------------- */
_demo('bootContain', 'Edge: Backside Contain', [
  _dsc('boot', 'Bootleg', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['WDE', 'LG'], [
    [0, 'You are the backside end (left side). The play looks like a run to the right.'],
    [0.14, 'Snap. The line flows right and the QB fakes the handoff. The backside guard may pull the other way: a boot sign.'],
    [0.40, 'Do not chase the flow. If the QB hides the ball and slides your way, stay home with outside leverage.'],
    [0.76, 'Contain: keep the QB inside you and force him to cut it up or throw on the run. Squeeze if the ball is handed off.']
  ], [
    ['LT', 'block', [[5, -2], [6, -3]]], ['LG', 'block', [[-2, 4], [-6, 6]]], ['C', 'block', [[4, -2]]], ['RG', 'block', [[4, -2]]], ['RT', 'block', [[3, -2]]], ['TE', 'block', [[-2, -2]]],
    ['RB', 'run', [[8, -4], [14, -8]]], ['QB', 'run', [[-3, 2], [-14, 4], [-22, 2], [-26, -6]]],
    ['WDE', 'rush', [[-1, 4], [3, 8], [8, 12]], 0.2], ['WDT', 'rush', [[5, 3]], 0.1], ['SDT', 'rush', [[5, 3]], 0.1], ['SDE', 'rush', [[0, 3]], 0.1],
    ['MIKE', 'cover', [[5, 4], [8, 6]], 0.2], ['WILL', 'cover', [[3, 3], [-4, 5]], 0.25], ['H', 'route', [[5, -8], [10, -16]]], ['X', 'route', [[3, -10], [10, -18]]],
    ['Z', 'route', [[-6, -10], [-30, -14]]], ['TE', 'route', [[-4, -8], [-14, -14]]]
  ], ['C', 'QB', [50, 62], [32, 60], [26, 52]],
  'Do not chase flow away from you. Keep outside leverage and contain the QB.')
]);
_demoFor('bootContain', [['edgeBoot', 'boot']]);

/* ---------------------------------------------------------------
   7. DRAW & SCREEN: the pass set that is not a pass.
   --------------------------------------------------------------- */
const _FD = { offense: 'shotgunDoubles', defense: '43under', showGaps: false };
_demo('drawScreen', 'Edge: Draw & Screen Alerts', [
  _dsc('draw', 'Draw', _FD, ['LT'], [
    [0, 'Gold ring: the tackle. At the snap it looks like pass protection.'],
    [0.14, 'Snap. The tackle sets back like a pass block, so you rush upfield. The QB drops, hiding the run.'],
    [0.40, 'Then he drives you upfield, past the QB, and the back takes a late handoff. That is a draw.'],
    [0.78, 'Retrace your steps and attack the ball from the outside in. Never finish a rush without knowing where the ball is.']
  ], [
    ['LT', 'block', [[0, 3], [-10, -4], [-14, -8]]], ['LG', 'block', [[0, 3], [0, 2]]], ['C', 'block', [[0, 3]]], ['RG', 'block', [[0, 3]]], ['RT', 'block', [[0, 3], [2, -1]]],
    ['WDE', 'rush', [[-1, 2], [-4, 8], [-8, 14]], 0.12], ['WDT', 'rush', [[1, 6]], 0.1], ['SDT', 'rush', [[-1, 6]], 0.1], ['SDE', 'rush', [[-3, 8]], 0.12],
    ['QB', 'run', [[0, 3], [0, 5]]], ['RB', 'run', [[2, 2], [5, -6], [6, -16], [8, -26]], 0.35],
    ['MIKE', 'cover', [[0, -5], [0, 6]], 0.2], ['WILL', 'cover', [[-4, -5], [-2, 4]], 0.2]
  ], ['C', 'QB', [50, 64], [56, 62], [58, 50], [60, 40]],
  'Pass set that suddenly drives you upfield is a draw. Retrace and find the ball.'),
  _dsc('screen', 'Screen', _FD, ['LT'], [
    [0, 'Gold ring: the tackle again. Watch the back, too.'],
    [0.14, 'Snap. The linemen LET YOU GO. They are not blocking you hard, which is a warning sign.'],
    [0.40, 'The back slides out to your side while the linemen sneak off to set up a wall. That is a screen alert.'],
    [0.78, 'Get your hands up, do not chase the fake, and find the ball. Peel off and run with the back.']
  ], [
    ['LT', 'block', [[-2, 0], [-6, -5], [-10, -8]], 0.1], ['LG', 'block', [[-4, 3], [-12, 6], [-16, 4]], 0.25], ['C', 'block', [[-3, 4], [-10, 7]], 0.3],
    ['RG', 'block', [[0, 4]]], ['RT', 'block', [[0, 4]]],
    ['WDE', 'rush', [[-1, 3], [-3, 12], [-6, 18]], 0.1], ['WDT', 'rush', [[0, 6]], 0.1], ['SDT', 'rush', [[0, 6]], 0.1], ['SDE', 'rush', [[-4, 8]], 0.1],
    ['QB', 'run', [[0, 3], [0, 4]]], ['RB', 'route', [[-12, 4], [-30, 2], [-36, -6]], 0.15],
    ['X', 'block', [[3, -2], [6, -6]]], ['H', 'block', [[3, 0]]], ['Z', 'route', [[0, -22]]], ['S', 'route', [[0, -16]]],
    ['MIKE', 'cover', [[-2, 2], [-8, 5]], 0.35], ['WILL', 'cover', [[-3, 3], [-4, 8]], 0.3]
  ], ['C', 'QB', [50, 64], [36, 62]],
  'Linemen letting you go plus the back sliding out: screen alert. Find the ball.')
]);
_demoFor('drawScreen', [['edgeDrawScreen', 'draw']]);

/* ---------------------------------------------------------------
   8. ZONE DROPS (Cover 2 / Tampa 2).
   --------------------------------------------------------------- */
_demo('zoneDrops', 'Linebacker: Zone Drops', [
  _dsc('c2', 'Cover 2', { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false }, ['MIKE'], [
    [0, 'Cover 2: two safeties split the deep field. The linebackers own the underneath hook zones.'],
    [0.14, 'Snap. Read pass, then drop. Get DEPTH first: turn and run to your zone, eyes back on the QB.'],
    [0.42, 'The corners play the flat. The safeties cover the deep halves. Know where your help is.'],
    [0.78, 'In the Tampa 2 version of Cover 2, the Mike runs deeper down the middle to protect the hole between the safeties.']
  ], [
    ['MIKE', 'cover', [[2, -8], [4, -15]], 0.15], ['WILL', 'cover', [[-5, -6], [-8, -10]], 0.15],
    ['NB', 'cover', [[0, -2], [3, -4]], 0.15], ['CBL', 'cover', [[2, 4], [3, 6]], 0.12], ['CBR', 'cover', [[-2, 4], [-3, 6]], 0.12],
    ['FS', 'cover', [[-12, -1], [-22, -3]], 0.12], ['SS', 'cover', [[-2, -2], [-6, -6]], 0.12],
    ['WDT', 'rush', [[0, 6]], 0.1], ['SDT', 'rush', [[0, 6]], 0.1], ['WDE', 'rush', [[3, 7]], 0.1], ['SDE', 'rush', [[-3, 7]], 0.1],
    ['LT', 'block', [[0, 4]]], ['LG', 'block', [[0, 3]]], ['C', 'block', [[0, 3]]], ['RG', 'block', [[0, 3]]], ['RT', 'block', [[0, 4]]],
    ['QB', 'run', [[0, 2]]], ['X', 'route', [[0, -18]]], ['Z', 'route', [[-2, -12], [-6, -16]]], ['Y', 'route', [[-4, -14], [-14, -22]]], ['TE', 'route', [[3, -9]]]
  ], ['C', 'QB', [50, 62], [78, 40]],
  'Linebackers drop to the underneath zones with depth first, eyes on the QB.')
]);
_demoFor('zoneDrops', [['lbCoverageDrops', 'c2'], ['cover2Flat', 'c2']]);

/* ---------------------------------------------------------------
   9. LB BLITZ: own your gap.
   --------------------------------------------------------------- */
_demo('lbBlitzGap', 'Linebacker: Own Your Gap', [
  _dsc('agap', 'A-gap blitz', { offense: 'pistolRight', defense: '43under', showGaps: true }, ['MIKE'], [
    [0, 'Before the snap: know your gap by letter. Here the Mike has the A gap between the center and the guard.'],
    [0.16, 'Time the snap count. Show the same look whether you blitz or drop.'],
    [0.40, 'Attack your gap and stay in your lane. Do not cross a teammate’s path.'],
    [0.78, 'If the blocker picks you up, keep fighting him. Another rusher is counting on you to hold him.']
  ], [
    ['MIKE', 'rush', [[1, 3], [-2, 11], [-2, 20]], 0.14],
    ['WILL', 'cover', [[-4, -5], [-6, -9]], 0.2], ['SAM', 'cover', [[1, -4], [2, -8]], 0.2],
    ['SDT', 'rush', [[0, 5]], 0.12], ['WDT', 'rush', [[0, 5]], 0.12], ['WDE', 'rush', [[5, 4], [10, 11]], 0.12], ['SDE', 'rush', [[-3, 5], [-9, 12]], 0.12],
    ['C', 'block', [[-2, 3], [-3, 5]]], ['LG', 'block', [[0, 3], [0, 5]]], ['RG', 'block', [[0, 3], [0, 5]]], ['LT', 'block', [[0, 4]]], ['RT', 'block', [[0, 4]]],
    ['QB', 'run', [[0, 1], [0, 3]]], ['RB', 'block', [[-6, -2], [-8, -4]], 0.1], ['TE', 'route', [[2, -9]]], ['X', 'route', [[0, -18]]], ['Z', 'route', [[0, -20]]], ['H', 'route', [[6, -10]]]
  ], ['C', 'QB', [50, 62], [78, 38]],
  'Own one gap by letter, time the snap, stay in your lane.')
]);
_demoFor('lbBlitzGap', [['lbBlitz', 'agap']]);

/* ---------------------------------------------------------------
   10. ZONE RUNS (inside / outside) from the back's and defender's view.
   --------------------------------------------------------------- */
const _FZ = { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true };
_demo('zoneRuns', 'Zone Runs', [
  _dsc('inside', 'Inside zone', _FZ, ['RG'], [
    [0, 'Gold ring: the play-side guard. His hip is the back’s aiming point (the exact point varies by coach).'],
    [0.16, 'Snap. The line takes short, lateral zone steps toward the play side. The center and guard double-team the first down lineman.'],
    [0.42, 'The back presses the double team and watches how it moves. The hole shows LIVE, so do not pick a gap before the snap.'],
    [0.78, 'If the double team is winning and the backside is cut off, run through the opening. If it gets squeezed, bend it back.']
  ], [
    ['C', 'block', [[3, -3], [4, -5]]], ['RG', 'block', [[2, -3], [3, -5]]], ['LG', 'block', [[3, -2], [4, -3]]], ['LT', 'block', [[3, -2], [4, -3]]], ['RT', 'block', [[2, -2], [4, -3]]], ['TE', 'block', [[-2, -2]]],
    ['SDT', 'rush', [[0, 3], [-1, 4]], 0.15], ['WDT', 'rush', [[2, 2]], 0.12], ['MIKE', 'cover', [[3, 4], [5, 8]], 0.3], ['WILL', 'cover', [[4, 3], [10, 8]], 0.3], ['SDE', 'rush', [[-2, 2]], 0.12], ['WDE', 'rush', [[3, 3]], 0.12],
    ['QB', 'run', [[0, 0]]], ['RB', 'run', [[6, -4], [10, -10], [11, -22]]]
  ], ['C', 'QB', [47, 64], [56, 60], [60, 50]],
  'Press the double team and read the hole as it opens.'),
  _dsc('outside', 'Outside zone (stretch)', { offense: 'pistolRight', defense: '43under', showGaps: false }, ['RB'], [
    [0, 'Outside zone stretches the defense sideways. The linemen take wide, lateral steps toward the play side.'],
    [0.16, 'Snap. The back takes a wide, flat path toward the edge. Keep your shoulders square.'],
    [0.42, 'Be patient and let the zone blocks create a crease. Defenders must hold their edge.'],
    [0.78, 'Plant one foot, make one decisive cut, then go north-south. Only bounce outside when the edge is already turned.']
  ], [
    ['LT', 'block', [[4, -1], [8, -2]]], ['LG', 'block', [[4, -1], [8, -2]]], ['C', 'block', [[4, -1], [8, -2]]], ['RG', 'block', [[4, -1], [8, -2]]], ['RT', 'block', [[4, -1], [7, -3]]], ['TE', 'block', [[3, -2], [5, -4]]],
    ['SDE', 'rush', [[4, 2], [8, 6]], 0.15], ['SDT', 'rush', [[5, 3]], 0.12], ['WDT', 'rush', [[5, 3]], 0.12], ['WDE', 'rush', [[3, 3]], 0.12],
    ['SAM', 'cover', [[-4, 4], [-8, 10]], 0.3], ['MIKE', 'cover', [[6, 4], [14, 10]], 0.3], ['WILL', 'cover', [[6, 4], [14, 8]], 0.3],
    ['RB', 'run', [[10, -4], [22, -8], [28, -20]]]
  ], ['C', 'QB', [50, 66], [60, 62], [72, 56], [78, 44]],
  'Wide, flat path first, one cut, then north-south.')
]);
_demoFor('zoneRuns', [['insideZone', 'inside'], ['outsideZone', 'outside']]);

/* ---------------------------------------------------------------
   11. THE THREE LINEBACKER JOBS (Mike / Will / Sam).
   --------------------------------------------------------------- */
const _FR = { offense: 'pistolRight', defense: '43under', showGaps: false };
_demo('lbRoles', 'Mike, Will & Sam: Three Jobs', [
  _dsc('run', 'Run to the strong side', _FR, ['SAM', 'MIKE', 'WILL'], [
    [0, 'Three linebackers, three jobs. Sam is on the tight end side, Mike is in the middle, Will is on the weak side.'],
    [0.14, 'Snap. It is a run toward the strong (tight end) side. Every linebacker reads the guards first.'],
    [0.40, 'Sam takes on the tight end and sets the edge. Mike fills the middle gaps downhill.'],
    [0.76, 'Will is usually the free player: he runs to the ball from the weak side and cleans up the tackle.']
  ], [
    ['SAM', 'cover', [[-1, 3], [-1, 6]], 0.16], ['MIKE', 'cover', [[3, 4], [8, 9], [10, 12]], 0.2], ['WILL', 'cover', [[6, 3], [16, 7], [22, 12]], 0.25],
    ['SDE', 'rush', [[2, 2]], 0.12], ['SDT', 'rush', [[1, 3]], 0.12], ['WDT', 'rush', [[3, 2]], 0.12], ['WDE', 'rush', [[3, 3], [6, 6]], 0.14],
    ['TE', 'block', [[-1, -3]]], ['RT', 'block', [[-2, -3]]], ['RG', 'block', [[-1, -3]]], ['C', 'block', [[1, -3]]], ['LG', 'block', [[2, -2]]], ['LT', 'block', [[3, -2]]],
    ['RB', 'run', [[6, -4], [12, -9], [16, -17]]]
  ], ['C', 'QB', [54, 66], [62, 60], [66, 49]],
  'Sam: strong side and edge. Mike: middle gaps. Will: weak side and the free runner to the ball.'),
  _dsc('pass', 'Pass play', _FR, ['SAM', 'MIKE', 'WILL'], [
    [0, 'Same three linebackers on a pass play.'],
    [0.14, 'Snap. The guards set back: pass. Each linebacker drops to his job.'],
    [0.40, 'Sam stays with the tight end. Mike drops to the middle hook zone. Will drops to the weak-side curl.'],
    [0.76, 'Eyes on the QB first. Then break on the throw.']
  ], [
    ['SAM', 'cover', [[3, -5], [5, -10]], 0.16], ['MIKE', 'cover', [[2, -7], [4, -12]], 0.2], ['WILL', 'cover', [[-4, -6], [-7, -11]], 0.2],
    ['TE', 'route', [[3, -8], [5, -15]]], ['H', 'route', [[8, -8], [16, -14]]], ['X', 'route', [[0, -20]]], ['Z', 'route', [[0, -22]]],
    ['LT', 'block', [[0, 4]]], ['LG', 'block', [[0, 3]]], ['C', 'block', [[0, 3]]], ['RG', 'block', [[0, 3]]], ['RT', 'block', [[0, 4]]],
    ['WDE', 'rush', [[5, 4], [10, 11]], 0.12], ['SDE', 'rush', [[-3, 5], [-9, 12]], 0.12], ['WDT', 'rush', [[0, 5]], 0.12], ['SDT', 'rush', [[0, 5]], 0.12],
    ['QB', 'run', [[0, 2]]], ['RB', 'block', [[-6, -2]], 0.1]
  ], ['C', 'QB', [50, 61], [78, 38]],
  'On passes each linebacker drops to his zone with depth first, eyes on the QB.')
]);
_demoFor('lbRoles', [['lbRoles', 'run'], ['samId', 'run'], ['mikeId', 'run'], ['willId', 'run']]);

/* ---------------------------------------------------------------
   12. SET THE EDGE vs a tight end and a wingback.
   --------------------------------------------------------------- */
_demo('edgeHeavy', 'Edge: Set The Edge vs Wings & Tight Ends', [
  _dsc('set', 'Run at your side', { offense: 'wingRight', defense: '43over', showGaps: false }, ['SDE'], [
    [0, 'Gold ring: you, the strong-side end. A tight end AND a wingback are on your side, so you will see more blockers.'],
    [0.14, 'Snap. The tight end and the wingback both come at you. Expect a double team, a kick-out, or a down block.'],
    [0.40, 'Hold your ground and keep your outside shoulder free. Do not get washed inside or kicked out.'],
    [0.76, 'Because you held the edge, the ball cannot bounce outside, and the linebacker fills inside to make the tackle.']
  ], [
    ['TE', 'block', [[-1, -3], [-1, -5]]], ['WB', 'block', [[-5, -4], [-7, -7]]], ['RT', 'block', [[-1, -3]]], ['RG', 'block', [[-1, -3]]], ['C', 'block', [[1, -3]]], ['LG', 'block', [[2, -2]]], ['LT', 'block', [[3, -2]]],
    ['SDE', 'rush', [[1, 2], [1, 3]], 0.14], ['SDT', 'rush', [[0, 3]], 0.12], ['WDT', 'rush', [[2, 2]], 0.12], ['WDE', 'rush', [[3, 3]], 0.14],
    ['SAM', 'cover', [[-1, 5], [-3, 9]], 0.3], ['MIKE', 'cover', [[8, 4], [14, 10]], 0.28], ['WILL', 'cover', [[6, 4], [16, 8]], 0.35],
    ['TB', 'run', [[8, -4], [18, -9], [20, -16]]]
  ], ['C', 'QB', [54, 62], [64, 58], [70, 50]],
  'Hold your ground, keep your outside shoulder free, and never let the ball bounce outside you.')
]);
_demoFor('edgeHeavy', [['edgeHeavy', 'set']]);

/* ---------------------------------------------------------------
   13. HEAVY SETS: think run first, but read the guards.
   --------------------------------------------------------------- */
const _FH = { offense: 'fullHouse', defense: '43over', showGaps: false };
_demo('heavySets', 'Linebacker: Heavy Sets', [
  _dsc('run', 'Downhill run', _FH, ['LG', 'RG', 'MIKE'], [
    [0, 'Full House: three running backs. Expect a downhill run such as power or iso. Count the blockers and know your gap.'],
    [0.14, 'Snap. The guards FIRE OUT low and the lead blocker comes: it is a run.'],
    [0.40, 'Fill your gap with the correct shoulder and do not let the lead blocker get his hands on you clean.'],
    [0.76, 'Win the pad-level battle and make the tackle at the line.']
  ], [
    ['LG', 'block', [[2, -3], [3, -5]]], ['RG', 'block', [[-1, -3], [-2, -5]]], ['C', 'block', [[1, -3]]], ['LT', 'block', [[3, -2]]], ['RT', 'block', [[-2, -3]]], ['TE', 'block', [[-2, -3]]],
    ['FB', 'run', [[3, -6], [8, -14], [10, -19]], 0.02], ['HB2', 'run', [[1, -4], [4, -11], [6, -19]], 0.08], ['HB1', 'block', [[4, -3], [10, -6]], 0.1],
    ['MIKE', 'cover', [[3, 5], [10, 10]], 0.22], ['SDT', 'rush', [[0, 3]], 0.12], ['WDT', 'rush', [[2, 2]], 0.12], ['SAM', 'cover', [[-2, 4], [-5, 8]], 0.28], ['WILL', 'cover', [[5, 4], [12, 8]], 0.3]
  ], ['C', 'QB', [50, 64], [60, 62], [64, 55], [66, 48]],
  'Heavy sets run downhill: stack the box and fill your gap.'),
  _dsc('pa', 'Play-action fake', _FH, ['LG', 'RG', 'MIKE'], [
    [0, 'Same heavy look, same start. These sets also run play-action, so keep reading the guards.'],
    [0.14, 'Snap. At first the guards fire out. But the QB keeps the ball and the line turns into a pocket.'],
    [0.40, 'Do not bite on the fake. Recover to your pass drop with your eyes in the backfield.'],
    [0.76, 'The tight end is releasing behind you. Find him.']
  ], [
    ['LG', 'block', [[1, -2], [0, 1]]], ['RG', 'block', [[-1, -2], [0, 1]]], ['C', 'block', [[0, -2], [0, 1]]], ['LT', 'block', [[2, -2], [1, 0]]], ['RT', 'block', [[-2, -2], [-1, 0]]],
    ['FB', 'run', [[3, -4], [6, -7]]], ['HB2', 'run', [[1, -3], [4, -7]], 0.05], ['QB', 'run', [[-2, 2], [0, 5]]],
    ['MIKE', 'cover', [[2, 3], [4, -3], [7, -10]], 0.2], ['SDT', 'rush', [[0, 3]], 0.12], ['WDT', 'rush', [[2, 3]], 0.12], ['SAM', 'cover', [[-1, 3], [1, -3], [3, -8]], 0.25],
    ['TE', 'route', [[2, -8], [3, -16]], 0.2]
  ], ['C', 'QB', [50, 63], [78, 40]],
  'Heavy sets can run play-action. If the guards set back, it is a pass.')
]);
_demoFor('heavySets', [['lbShortYardage', 'run']]);
