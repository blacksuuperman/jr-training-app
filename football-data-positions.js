/* =========================================================
   FOOTBALL CONTENT — the other seven positions (v20)
   =========================================================
   Loaded right AFTER football-data.js. It adds Film Study content for
   Quarterback, Wide Receiver, Tight End, Offensive Line, Interior
   D-Line, Cornerback and Safety: concepts, teaching lessons, questions,
   and the lesson order for each. Like football-data.js it is PURE
   football content — no app logic — so a coach can check it alone.

   ACCURACY NOTES (for a coach reviewing this file)
   - Where coaches and systems genuinely differ (route numbering, drop
     footwork, which defender has "force", who calls the protection, the
     names of stunts) the text says so instead of pretending there is one
     rule. Diagrams are teaching sketches, not to scale.
   - Rule references (7 on the line of scrimmage, false start, holding,
     illegal contact) are stated in general terms; exact yardage and edge
     cases differ a little between NFL, college and high school.
   - Nothing here is any specific team's playbook.
   ========================================================= */
const NEW_POSITIONS = ['QB', 'WR', 'TE', 'OL', 'DL', 'CB', 'S'];

// Shared foundation (personnel, formations, fronts, gaps, Mike/Will/Sam/Nickel,
// safety shells) is useful to every position, so the new tracks join it.
// (Every foundation concept shares the _T3 array, so one push covers them all.)
NEW_POSITIONS.forEach(p => { if (_T3.indexOf(p) === -1) _T3.push(p); });
NEW_POSITIONS.forEach(p => { if (CONCEPTS.samId.tracks.indexOf(p) === -1) CONCEPTS.samId.tracks.push(p); });

// New concept: its own track only, with an explicit side of the ball.
function _cp(id, label, pos, side, difficulty, film) {
  const c = _c(id, label, pos, [pos], difficulty, film);
  c.side = side;
  CONCEPTS[id] = c;
}
// A lesson order = this position's own lessons woven into the shared basics,
// followed by any shared basics not already listed so nothing runs dry.
function _orderWith(own) {
  const seen = {}, out = [];
  own.concat(_FOUNDATION).forEach(id => { if (!seen[id] && LESSONS[id]) { seen[id] = true; out.push(id); } });
  return out;
}

/* =========================================================
   QUARTERBACK
   ========================================================= */
_cp('primerQB', 'QB Primer: What To Look For', 'QB', 'offense', 1, 'quarterback pre snap reads film study');
_cp('qbMikePoint', 'Find The Mike (Set The Protection)', 'QB', 'offense', 2, 'quarterback identify mike linebacker protection call');
_cp('qbCountBox', 'Count The Box: Run Or Pass?', 'QB', 'offense', 2, 'quarterback count the box light box heavy box audible');
_cp('qbShellRead', 'Read The Safeties: 1-High Or 2-High', 'QB', 'offense', 3, 'quarterback read safeties one high two high pre snap');
_cp('qbHighLow', 'High-Low Read: Read One Defender', 'QB', 'offense', 3, 'quarterback high low read flat defender film');
_cp('qbDrops', 'Drops & Timing: 3, 5 and 7 Steps', 'QB', 'offense', 2, 'quarterback 3 step 5 step 7 step drop footwork timing');
_cp('qbBlitzHot', 'Beat The Blitz: Hot Throws', 'QB', 'offense', 3, 'quarterback beat the blitz hot route sight adjust');
_cp('qbSituation', 'Situations: Sticks, Safe Plays, Ball Security', 'QB', 'offense', 3, 'quarterback third down throw to the sticks ball security decision making');

_l('l_primerQB', 'primerQB', 1, 'Quarterback: What You’re Looking For',
  'A quarterback plays the game before the snap. In the few seconds at the line he answers four questions: who is the Mike and how is the protection set, how many defenders are in the box, what are the safeties showing, and does anyone look like they are about to blitz. After the snap he already knows where to look first.',
  ['Find the Mike: the protection is counted from him.', 'Count the box: a light box favors the run, a heavy box makes the pass more attractive.', 'Read the safeties: 1-high or 2-high is a clue to the coverage.', 'Watch for extra rushers creeping toward the line.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_qbMikePoint', 'qbMikePoint', 2, 'Find The Mike: Set The Protection',
  'The Mike is the middle linebacker. Before the snap the quarterback (often together with the center) identifies him, and the offensive line and backs build their pass-protection rules from that call — who each blocker takes, and which side the line slides toward. If the Mike is wrong, everybody is wrong, so this check comes first. Many teams have the center make the call and the QB confirm it; the exact process differs by system.',
  ['Find the middle linebacker: usually over or just behind the center.', 'The protection is counted FROM him.', 'If a linebacker creeps into a gap, re-check the call.', 'Communicate it loudly and clearly.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_qbCountBox', 'qbCountBox', 2, 'Count The Box: Run Or Pass?',
  'The “box” is the area near the line of scrimmage, roughly between the offensive tackles, where the defensive linemen and linebackers line up. Counting the defenders there tells you how the defense feels about the run. Few defenders (a “light box,” around six) make runs easier, because the blockers outnumber the defenders. Many defenders (a “heavy box,” seven to eight) make the run harder and can open space on the outside for the pass. Where your offense allows it, the QB can change the play to take what the defense gives. Not every system lets the QB change the call.',
  ['Count the linemen plus the linebackers near the line.', 'Light box (about 6): the run has room.', 'Heavy box (7–8): throwing may be the better choice.', 'Check the safeties too, because one may step into the box.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false });
_l('l_qbShellRead', 'qbShellRead', 3, 'Read The Safeties: 1-High Or 2-High',
  'The safeties are the biggest pre-snap clue about the coverage. Two safeties deep and split (a 2-high shell) usually go with Cover 2 or Cover 4, and often a lighter box. One safety deep in the middle (a 1-high shell) usually goes with Cover 1 or Cover 3, with the other safety closer to the box to help against the run. It is a clue, not a promise: defenses disguise their shell and “rotate” a safety at the snap, so watch what the safeties do as the ball is snapped, not only where they stand.',
  ['2-high: Cover 2 / Cover 4 are likely; the box is often lighter.', '1-high: Cover 1 / Cover 3 are likely; an extra defender is near the box.', 'A safety who creeps down may be run support or a blitz.', 'Disguise is real — confirm after the snap.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } }, note: 'A 2-high shell: both safeties are deep and split.' });
_l('l_qbHighLow', 'qbHighLow', 3, 'High-Low Read: Read One Defender',
  'A high-low read puts one defender in a bind. You send one receiver shallow (the “low” route, such as a flat route) and another deeper (the “high” route, such as a corner route) on the same side, and read the defender in between. If he takes the shallow route, you throw the deeper one over his head. If he drops back with the deep route, you throw the shallow one underneath him. You do not decide where the ball goes before the snap: the defender decides for you. Teams use different names for this concept.',
  ['Pick ONE defender to read and watch him.', 'He goes low → throw high. He goes high → throw low.', 'Your feet and eyes should match the throw.', 'Don’t force it if both are covered: go to the next read.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'NB' });
_l('l_qbDrops', 'qbDrops', 2, 'Drops And Timing: 3, 5 And 7 Steps',
  'The quarterback’s footwork has to match the route. A 3-step drop is used for quick throws — slants, hitches and quick outs — where the ball is out before the rush can get there. A 5-step drop goes with mid-depth routes like curls, digs and comebacks. A 7-step drop gives deep routes time to develop. The goal is timing: your last step of the drop lands as the receiver makes his break, so the ball is on its way when he turns. Coaches count the steps a little differently, and they differ for under-center and shotgun, but the idea is the same.',
  ['3-step: quick game, ball out fast.', '5-step: medium routes, rhythm and timing.', '7-step: deep routes need the most time.', 'Hit the last step as the receiver breaks, then throw.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'QB' });
_l('l_qbBlitzHot', 'qbBlitzHot', 3, 'Beat The Blitz: Hot Throws',
  'The offense has five linemen and usually one back to block. If the defense sends more rushers than there are blockers, somebody is unblocked, and the quarterback has no time for a deep read. The answer is a “hot” throw: a quick pass to the receiver the blitzer left behind, thrown before the unblocked rusher arrives. Many offenses also change the protection at the line, or use a “sight adjust” where a receiver turns his route into the space the blitzer left. The exact calls differ from team to team, but the idea is always get the ball out fast, to the open side.',
  ['Count rushers against blockers: extra rusher = hot throw.', 'Look for the receiver in the space the blitzer vacated.', 'Get the ball out quickly and don’t hold it.', 'Ideally the protection is changed BEFORE the snap.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'MIKE', overrides: { MIKE: { x: 52, y: 44 } }, note: 'The Mike has walked up into the A gap: a possible blitz.' });
_l('l_qbSituation', 'qbSituation', 3, 'Situations: Sticks, Safe Plays, Ball Security',
  'Good quarterbacks play the situation, not only the play. On third down, the throw should reach the first-down marker (“the sticks”), because a catch short of it means a punt. When the play breaks down, the safe choice is usually to protect the ball and live for the next down: throw the ball away when you legally can, or take a small loss, instead of forcing it into coverage. When pressured, carry the ball high and tight so it can’t be stripped. Turnovers lose games.',
  ['3rd down: throw to the sticks, not short of them.', 'No one open? Protect the ball and live for the next down.', 'Ball security: high and tight when you’re pressured.', 'Know the down, distance and score every snap.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'QB' });

// ---- QB scenarios ----
_s('s_qbWhyLook', 'primerQB', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'MIKE' }),
  _mc('Why does a quarterback study the defense before the snap?', [['a', 'To find the Mike, count the box and read the safeties for clues about the run, the blitz and the coverage'], ['b', 'Because the rules require it'], ['c', 'To pick his favorite receiver']], 'a',
    'The pre-snap picture sets the protection, the play and the first read. A QB who waits until after the snap is already late.'));
_s('s_qbPrimerFirst', 'primerQB', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('Which of these is a pre-snap clue for the quarterback?', [['a', 'Whether the safeties are 1-high or 2-high'], ['b', 'The color of the helmets'], ['c', 'The jersey numbers of the guards']], 'a',
    'The safeties’ alignment is one of the strongest clues about the coverage. The others tell the QB nothing about the defense.'));
_s('s_qbTapMike', 'qbMikePoint', 2, 'recognize', _f(_TRIPS, '42nickel'),
  _tap('tapDefender', 'Tap the Mike linebacker — the one the protection is counted from.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['NB', 'Nickel'], ['FS', 'Free safety']], 'MIKE',
    'The Mike is the middle linebacker, over or just behind the center. Protection calls start counting from him.'));
_s('s_qbWhyMike', 'qbMikePoint', 2, 'recognize', _f('shotgunDoubles', '42nickel', { highlight: 'MIKE' }),
  _mc('Why does the quarterback (or center) identify the Mike?', [['a', 'The protection and each blocker’s assignment are counted from him'], ['b', 'He is always the best tackler'], ['c', 'He is the only defender who can blitz']], 'a',
    'Pass-protection rules are built around the Mike. If you misidentify him, blockers can end up with the wrong assignments.'));
_s('s_qbMikeCreep', 'qbMikePoint', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE', overrides: { MIKE: { x: 52, y: 44 } }, note: 'Just before the snap, the Mike walks up into the right A gap.' }),
  _mc('What should the quarterback do?', [['a', 'Re-check the protection: he may be blitzing or bluffing, so make sure every rusher is accounted for'], ['b', 'Ignore it'], ['c', 'Run to the sideline']], 'a',
    'A linebacker creeping into a gap may be blitzing or bluffing. Either way, the QB (with the center) should re-confirm the protection before the snap.'));
_s('s_qbBox6', 'qbCountBox', 2, 'recognize', _f('shotgunDoubles', '42nickel'),
  _mc('Count the defensive linemen and linebackers near the line. How many are in the box?', [['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']], '6',
    '4 defensive linemen + 2 linebackers = 6. The Nickel and the safeties are not in the box. Six is a light box.'));
_s('s_qbBox7', 'qbCountBox', 2, 'recognize', _f('fullHouse', '43over'),
  _mc('Count the defensive linemen and linebackers. How many are in the box?', [['5', '5'], ['6', '6'], ['7', '7'], ['8', '8']], '7',
    '4 defensive linemen + 3 linebackers = 7. That is a heavy box, and it matches a heavy running formation.'));
_s('s_qbBox34', 'qbCountBox', 3, 'apply', _f('iFormation', '34base'),
  _mc('In this 3-4 look, how many defenders are on or near the line (3 linemen and 4 linebackers)?', [['6', '6'], ['7', '7'], ['8', '8']], '7',
    '3 down linemen + 4 linebackers = 7 defenders near the line. The outside linebackers stand on the edge like defensive ends.'));
_s('s_qbLightBox', 'qbCountBox', 3, 'apply', _f('shotgunDoubles', '42nickel'),
  _mc('The box is light (6 defenders) and your offense allows you to change the play. Which choice usually makes the most sense?', [['a', 'Take advantage of the run: the blockers outnumber the defenders'], ['b', 'Throw deep every time'], ['c', 'Take a delay-of-game penalty']], 'a',
    'A light box means more blockers than defenders at the point of attack. Not every system lets the QB change the call, but when it does, this is the classic reason.'));
_s('s_qbShell2', 'qbShellRead', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('Both safeties are deep and split the field. What does this usually mean for the box?', [['a', 'It is often lighter, because no safety is stepping down'], ['b', 'It is heavier, with eight defenders'], ['c', 'Nothing at all']], 'a',
    'With both safeties deep, nobody extra is in the box, so the run game usually has more room. It is a clue, not a guarantee, because safeties can rotate.'));
_s('s_qbShell1', 'qbShellRead', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 50, y: 12 }, SS: { x: 72, y: 32 } } }),
  _mc('One safety is deep in the middle and the other has walked down. What is the best quarterback takeaway?', [['a', 'An extra defender is near the box (better against the run), and Cover 1 or Cover 3 is likely'], ['b', 'Nobody is covering the receivers'], ['c', 'Cover 2 is certain']], 'a',
    'A 1-high shell usually pairs with Cover 1 or Cover 3, and the second safety helps stop the run. It tells the QB where the defense is strong and where one-on-one chances may be.'));
_s('s_qbTapFS', 'qbShellRead', 3, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 50, y: 12 }, SS: { x: 72, y: 32 } } }),
  _tap('tapDefender', 'Tap the single deep safety in this 1-high look.', [['FS', 'Free safety'], ['SS', 'Strong safety'], ['NB', 'Nickel'], ['MIKE', 'Mike']], 'FS',
    'The free safety is the one deep in the middle of the field. The strong safety has stepped down toward the line.'));
_s('s_qbRotate', 'qbShellRead', 4, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } }, note: 'Pre-snap both safeties are deep. At the snap one runs down toward the line and the other slides to the middle.' }),
  _mc('Why is the quarterback careful not to lock into the pre-snap shell?', [['a', 'Defenses disguise and rotate safeties at the snap, so the real coverage may be different'], ['b', 'Safeties are not allowed to move'], ['c', 'The shell never tells you anything']], 'a',
    'Pre-snap looks are clues. The best QBs confirm what they saw by watching the safeties move as the ball is snapped.'),
  _p('Disguise: the safeties show 2-high, then rotate at the snap. One drops down and the other slides to the deep middle — a 1-high look.',
    [['SS', [[67, 14], [72, 28]], 'cover'], ['FS', [[33, 14], [50, 12]], 'cover']]));
_s('s_qbHLConcept', 'qbHighLow', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'NB' }),
  _mc('What is the idea of a high-low read?', [['a', 'Put one defender between a shallow and a deeper route, and throw to the one he leaves open'], ['b', 'Throw the ball high or low depending on the receiver’s height'], ['c', 'Read the offensive line']], 'a',
    'The defender decides. If he takes the low route you throw high, and if he drops with the high route you throw low.'));
_s('s_qbHLLow', 'qbHighLow', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'NB', note: 'The flat route is the low route. The corner route is the high route.' }),
  _mc('The Nickel runs out to cover the flat route (the low route). Where does the quarterback throw?', [['a', 'To the corner route behind him (the high route)'], ['b', 'To the flat route'], ['c', 'Straight into the Nickel']], 'a',
    'He took the low route, so the high route is open behind him.'),
  _p('The Nickel jumps the flat route, so the quarterback throws the corner route over his head.',
    [['Z', [[92, 46]], 'route'], ['TE', [[78, 42], [88, 31]], 'route'], ['NB', [[88, 44]], 'cover']], [[50, 60], [87, 32]]));
_s('s_qbHLHigh', 'qbHighLow', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'NB', note: 'The flat route is the low route. The corner route is the high route.' }),
  _mc('The Nickel drops back with the corner route (the high route). Where does the quarterback throw?', [['a', 'To the flat route underneath him (the low route)'], ['b', 'Over his head to the corner'], ['c', 'Nowhere, he takes a sack']], 'a',
    'He went high, so the flat route underneath is open.'),
  _p('The Nickel carries the corner route deep, so the quarterback checks it down to the flat route.',
    [['Z', [[92, 46]], 'route'], ['TE', [[78, 42], [88, 31]], 'route'], ['NB', [[84, 30]], 'cover']], [[50, 60], [91, 47]]));
_s('s_qbDrop3', 'qbDrops', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'QB' }),
  _mc('Which drop usually goes with quick throws like slants and hitches?', [['3', '3-step drop'], ['5', '5-step drop'], ['7', '7-step drop']], '3',
    'Quick-game routes break fast, so the ball has to be out fast. A 3-step drop gets it out before the rush arrives.'));
_s('s_qbDropDeep', 'qbDrops', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'QB' }),
  _mc('Which drop usually goes with a deep route like a post or a corner?', [['3', '3-step drop'], ['5or7', '5- or 7-step drop'], ['none', 'No drop at all']], '5or7',
    'Deeper routes take longer to develop, so the quarterback takes a deeper drop to give them time. Coaches count the steps a little differently.'));
_s('s_qbTiming', 'qbDrops', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'QB' }),
  _mc('What does “timing” mean for a quarterback and a receiver?', [['a', 'The ball is on its way when the receiver makes his break, so it arrives as he turns'], ['b', 'The quarterback waits until the receiver is wide open'], ['c', 'The play clock']], 'a',
    'On timing routes the quarterback throws to a spot before the receiver is open. His last step lands as the receiver breaks.'));
_s('s_qbHotCount', 'qbBlitzHot', 3, 'apply', _f('pistolRight', '43under', { showGaps: true, highlight: 'MIKE', overrides: { MIKE: { x: 52, y: 44 } }, note: 'Five linemen and one back block. The defense can send six.' }),
  _mc('If the defense brings six rushers and you have six blockers (five linemen and one back), what is the risk?', [['a', 'Someone can still be unblocked, such as a rusher the blockers did not count'], ['b', 'No risk at all'], ['c', 'The QB can’t be sacked']], 'a',
    'Six blockers against six rushers only works if every rusher is counted. A creeping linebacker, a safety or the Nickel can be the extra one.'));
_s('s_qbHotThrow', 'qbBlitzHot', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE', overrides: { MIKE: { x: 52, y: 44 } } }),
  _mc('A hot throw is…', [['a', 'A quick pass to the receiver the blitzer left open, thrown before the rush arrives'], ['b', 'A deep pass into the end zone'], ['c', 'A pass thrown only on third down']], 'a',
    'It answers the blitz by getting the ball out fast to the space the blitzer vacated.'));
_s('s_qbTapBlitzer', 'qbBlitzHot', 3, 'recognize', _f('pistolRight', '43under', { overrides: { MIKE: { x: 52, y: 44 } } }),
  _tap('tapDefender', 'Tap the linebacker who has walked up into the A gap — the most likely extra rusher.', [['MIKE', 'Middle linebacker'], ['WILL', 'Weak-side linebacker'], ['SAM', 'Strong-side linebacker'], ['FS', 'Free safety']], 'MIKE',
    'The middle linebacker stepped up into the A gap. That is the classic look of a blitz, though it may also be a bluff.'));
_s('s_qbSticks', 'qbSituation', 3, 'apply', _f(_TRIPS, '42nickel', { note: 'It is 3rd and 8 and your first read is 5 yards past the line.' }),
  _mc('On 3rd and 8, where should the throw ideally reach?', [['a', 'At or past the first-down marker (the sticks)'], ['b', 'Short of the sticks to be safe'], ['c', 'Out of bounds on purpose']], 'a',
    'A catch that stops short of the sticks usually means a punt. On third down, the throw should get the first down.'));
_s('s_qbSafePlay', 'qbSituation', 3, 'apply', _f(_TRIPS, '42nickel'),
  _mc('The pocket is collapsing on 2nd down and no receiver is open. Which is usually the best choice?', [['a', 'Protect the ball and live for the next down: throw it away where legal, or take the small loss'], ['b', 'Force the ball into tight coverage'], ['c', 'Spin and throw across your body']], 'a',
    'A turnover costs far more than a small loss. Throwing it away needs to be legal (outside the pocket or toward a receiver), so know the rules.'));
_s('s_qbBallSecurity', 'qbSituation', 2, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'QB' }),
  _mc('When a rusher closes in on the quarterback, how should he carry the ball?', [['a', 'High and tight to the body'], ['b', 'Loose at his side'], ['c', 'Waving over his head']], 'a',
    'Holding the ball high and tight makes it hard to strip. Strip-sacks lose games.'));

LESSON_ORDER_BY_TRACK.QB = _orderWith(['l_primerQB', 'l_personnel11', 'l_formationShotgun', 'l_strengthCall', 'l_mike', 'l_qbMikePoint', 'l_front42nickel', 'l_qbCountBox', 'l_safetyShell', 'l_qbShellRead', 'l_qbDrops', 'l_nickel', 'l_qbHighLow', 'l_will', 'l_front43under', 'l_qbBlitzHot', 'l_gaps', 'l_qbSituation', 'l_formationPistol', 'l_formationDoubles']);

/* =========================================================
   WIDE RECEIVER
   ========================================================= */
_cp('primerWR', 'WR Primer: What To Look For', 'WR', 'offense', 1, 'wide receiver pre snap reads film study');
_cp('wrAlignment', 'Alignment: On The Line Or Off It', 'WR', 'offense', 2, 'wide receiver alignment on the line off the line slot flanker explained');
_cp('wrRelease', 'Releases Against Press', 'WR', 'offense', 3, 'wide receiver release against press coverage technique');
_cp('wrManZone', 'Man Or Zone? Read The Coverage', 'WR', 'offense', 3, 'wide receiver man vs zone coverage recognition motion');
_cp('wrRouteTree', 'The Route Tree', 'WR', 'offense', 2, 'wide receiver route tree explained slant out curl post corner');
_cp('wrBeatCoverage', 'Beating Cover 1, 2 and 3', 'WR', 'offense', 3, 'wide receiver beat cover 2 cover 3 cover 1 route concepts');
_cp('wrStalkBlock', 'Run Game: The Stalk Block', 'WR', 'offense', 2, 'wide receiver stalk block technique run blocking');
_cp('wrHands', 'Hands & Ball Security', 'WR', 'offense', 1, 'wide receiver catching hands technique high point tuck');

_l('l_primerWR', 'primerWR', 1, 'Wide Receiver: What You’re Looking For',
  'A receiver plays every snap in three steps. Before the snap: know your alignment and your route, and see whether the corner is pressed up on you or playing off. At the snap: beat him off the line with your release. During the route: figure out man or zone, and run the route that beats it. When the ball comes: catch it with your hands, tuck it, and get upfield.',
  ['Pre-snap: where am I lined up, and how is the corner playing me?', 'Release: get off the line clean.', 'Man or zone? Your route changes how you win.', 'Catch with your hands, secure the ball, then run.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'X' });
_l('l_wrAlignment', 'wrAlignment', 2, 'Alignment: On The Line Or Off It',
  'Receivers line up either ON the line of scrimmage or OFF it (a yard or so back). The offense must always have at least seven players on the line at the snap, and the players on the ends of the line are the eligible ones. A receiver on the line is closer to a pressing corner and can be jammed at the snap. A receiver off the line, like a slot receiver, has a little more room to get into his route. Coaches use different letters (X, Z, Y, H, slot, flanker) so learn your own team’s names for them.',
  ['At least 7 players must be on the line at the snap.', 'On the line = easier to jam. Off the line = more room to release.', 'Slot receivers line up inside, off the line.', 'Letter names (X, Z, Y) vary by team.'],
  { offense: 'shotgunDoubles', defense: null, showGaps: false, highlight: 'X' });
_l('l_wrRelease', 'wrRelease', 3, 'Releases Against Press Coverage',
  'When a corner presses up and tries to jam you at the line, your release is your first route. Look at his leverage: if he is shaded to your inside shoulder, release to the outside, away from where he wants to take you; if he is shaded outside, go inside. Stay low, use quick feet to make him miss, and use your hands to knock his hands off you. A clean release, and a quick return to your route, wins the rep before the route even starts. Names of the moves (swim, rip, stutter) differ from coach to coach.',
  ['Read his leverage, then release away from it.', 'Stay low; quick feet first, hands second.', 'Get back on your stem right away.', 'Don’t drift, because you lose timing.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'X', overrides: { CBL: { x: 5, y: 46 } }, note: 'The corner is pressed up on you at the line.' });
_l('l_wrManZone', 'wrManZone', 3, 'Man Or Zone? Reading The Coverage',
  'In MAN coverage a defender follows you wherever you go. In ZONE coverage each defender covers an area instead. Receivers learn to read it. A defender who follows a receiver all the way across the formation when he goes in motion is probably in man. If the defenders just shift over and pass the receiver off, it is probably zone. Against man you win with your release and sharp breaks to create separation. Against zone you find the open window between defenders, sit down in it and turn to the quarterback.',
  ['Motion test: a defender follows the receiver → man.', 'Defenders shift and pass him off → zone.', 'Man: win with the release and a sharp break.', 'Zone: find the window, sit down, face the QB.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false, highlight: 'H' });
_l('l_wrRouteTree', 'wrRouteTree', 2, 'The Route Tree',
  'Routes are named for the shape they run. The slant cuts sharply across the field toward the middle after a few quick steps. The out breaks toward the sideline, and the in (or dig) breaks toward the middle. A curl runs upfield, then turns back toward the quarterback. A comeback runs deep and then returns toward the sideline. The post breaks deep toward the goalposts, the corner breaks deep toward the corner of the end zone, and a go (or fade) runs straight up the sideline. Many teams give routes numbers, but the numbering differs from team to team, so learn your own.',
  ['Slant: quick diagonal toward the middle.', 'Out / In: break toward the sideline / toward the middle.', 'Curl: upfield, then turn back to the QB.', 'Post = toward the goalposts. Corner = toward the corner. Go = straight.'],
  { offense: _TRIPS, defense: null, showGaps: false, highlight: 'Z' });
_l('l_wrBeatCoverage', 'wrBeatCoverage', 3, 'Beating Cover 1, Cover 2 And Cover 3',
  'Each coverage has weak spots. Cover 2 has two deep safeties, so the area between the corner and the safety, and the deep middle, are soft; the corner route and the deep seam attack them. Cover 3 has three defenders deep, so four vertical (seam) routes put pressure on the gaps between them, and the flats are open. Cover 1 is man coverage with one safety deep, so crossing routes that make defenders run through traffic, and sharp breaks, help you win. These are tendencies, not guarantees.',
  ['Cover 2: attack the area between the corner and the deep safety.', 'Cover 3: seams and flats.', 'Cover 1 (man): crossers and sharp breaks.', 'Always confirm with what you see after the snap.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } }, note: 'A 2-high shell: the soft spots are between the corner and the safety.' });
_l('l_wrStalkBlock', 'wrStalkBlock', 2, 'The Run Game: The Stalk Block',
  'On a running play the receivers block too, and a good block can turn a short run into a long one. A stalk block means you run to the defender, get in front of him, keep your feet moving and stay between him and the ball carrier. Keep your hands inside his shoulders, and never grab and pull his jersey, because that is holding. Keep blocking until the whistle. The receiver who blocks hard is the one the coach trusts with the ball.',
  ['Get to the defender, then get in front of him.', 'Feet moving, hands inside his shoulders.', 'Keep him off the ball carrier.', 'Don’t hold: no grabbing or pulling the jersey.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'Z' });
_l('l_wrHands', 'wrHands', 1, 'Hands And Ball Security',
  'Catch with your hands, away from your body. For a ball above your waist, make a diamond or triangle with your thumbs and index fingers together. For a ball below your waist, put your pinkies together. Keep your eyes on the ball until it is secure, then tuck it away high and tight with the arm nearest the sideline, and turn upfield. Reach up to catch the ball at its highest point (“high-pointing” it) whenever you can.',
  ['Above the waist: thumbs together. Below the waist: pinkies together.', 'Catch with your hands, not your body.', 'Eyes on the ball until it is tucked.', 'Tuck high and tight, then run.'],
  { offense: _TRIPS, defense: null, showGaps: false, highlight: 'Z' });

// ---- WR scenarios ----
_s('s_wrPrimerBefore', 'primerWR', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'X' }),
  _mc('What should a receiver know before the snap?', [['a', 'His alignment and route, and whether the corner is pressing or playing off'], ['b', 'Only his jersey number'], ['c', 'Nothing, he just reacts']], 'a',
    'Alignment, route and how the corner is playing you set up your release and your route.'));
_s('s_wrPrimerOrder', 'primerWR', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'X' }),
  _mc('Put these in order: catch, release, pre-snap read. What comes first?', [['a', 'Pre-snap read, then release, then catch'], ['b', 'Catch, then release'], ['c', 'Release, then pre-snap read']], 'a',
    'You read the defender first, beat him off the line second and catch the ball last.'));
_s('s_wrSeven', 'wrAlignment', 2, 'recognize', _f('shotgunDoubles', null),
  _mc('At the snap, how many players must the offense have on the line of scrimmage?', [['5', '5'], ['7', '7'], ['9', '9']], '7',
    'At least seven. Five linemen plus two more, often the receivers or a tight end on the ends of the line.'));
_s('s_wrTapSlot', 'wrAlignment', 2, 'recognize', _f('shotgunDoubles', null),
  _tap('tapPlayer', 'Tap the slot receiver on the LEFT side — the one lined up off the line.', [['X', 'Wide receiver'], ['H', 'Slot receiver'], ['S', 'Slot receiver'], ['Z', 'Wide receiver']], 'H',
    'The left slot (H) is inside the wide receiver and a step off the line. The wide receiver on the left (X) is on the line.'), { hideOptionLabels: true });
_s('s_wrOnLine', 'wrAlignment', 3, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'X' }),
  _mc('Who is easier for a cornerback to jam at the line of scrimmage?', [['a', 'A receiver lined up ON the line'], ['b', 'A receiver lined up in the slot, off the line'], ['c', 'Neither']], 'a',
    'A receiver on the line is right in front of the corner, so he can be jammed. A slot receiver has a little more room to release.'));
_s('s_wrReleaseInside', 'wrRelease', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'X', overrides: { CBL: { x: 8, y: 46 } }, note: 'The corner is pressed up and shaded to your INSIDE shoulder.' }),
  _mc('Which way should you generally release?', [['a', 'To the outside, away from his leverage'], ['b', 'To the inside, straight into his leverage'], ['c', 'Stand still']], 'a',
    'Release away from the side he is shading. Going into his leverage helps him.'));
_s('s_wrReleaseFirst', 'wrRelease', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'X', overrides: { CBL: { x: 5, y: 46 } } }),
  _mc('Beating a press corner, what is the best order?', [['a', 'Stay low and use quick feet, then use your hands to knock his hands away'], ['b', 'Stand tall and grab his jersey'], ['c', 'Run straight into him']], 'a',
    'Quick feet and a low pad level make him miss, and your hands clear his. Grabbing his jersey is a penalty.'));
_s('s_wrReleaseStem', 'wrRelease', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'X', overrides: { CBL: { x: 5, y: 46 } } }),
  _mc('After you win the release, what should you do next?', [['a', 'Get back on your route stem right away, so your timing with the QB is not lost'], ['b', 'Slow down and look back'], ['c', 'Wait for the QB']], 'a',
    'The quarterback is counting on you being at your spot on time. A great release that costs you your timing is not a win.'));
_s('s_wrMotionMan', 'wrManZone', 3, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'H', note: 'The left slot goes in motion across the formation, and one defender runs with him.' }),
  _mc('A defender follows the motioning receiver all the way across the formation. What does that usually tell you?', [['a', 'Man coverage'], ['b', 'Zone coverage'], ['c', 'A blitz is certain']], 'a',
    'In man coverage the defender goes where his receiver goes. In zone the defenders pass the receiver off and stay in their areas.'),
  _p('Motion: the slot receiver crosses the formation and a linebacker runs right with him — a man-coverage tell.',
    [['H', [[17, 58], [60, 58], [76, 56]], 'route'], ['WILL', [[28, 42], [55, 44], [74, 42]], 'cover']]));
_s('s_wrMotionZone', 'wrManZone', 3, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'H', note: 'The left slot goes in motion. The defenders just shift over and stay in their areas.' }),
  _mc('Nobody follows the motion; the defenders shift and pass him off. What does that usually mean?', [['a', 'Zone coverage'], ['b', 'Man coverage'], ['c', 'No coverage']], 'a',
    'Defenders who keep their areas and pass the receiver off are usually in zone.'));
_s('s_wrVsZone', 'wrManZone', 3, 'apply', _f('shotgunDoubles', '42nickel'),
  _mc('Against zone coverage, how does a receiver usually win?', [['a', 'Find the open window between defenders, sit down and turn to the quarterback'], ['b', 'Run the same route no matter what'], ['c', 'Run into the defender']], 'a',
    'Zone defenders cover areas, so the receiver works to the gaps between them and gives the QB a target.'));
_s('s_wrVsMan', 'wrManZone', 3, 'apply', _f('shotgunDoubles', '42nickel'),
  _mc('Against man coverage, how does a receiver usually win?', [['a', 'With his release and a sharp break that creates separation'], ['b', 'By sitting down in a window'], ['c', 'By slowing down']], 'a',
    'A defender is following you, so you win by getting away from him with your release and sharp, clean breaks.'));
_s('s_wrRouteSlant', 'wrRouteTree', 2, 'recognize', _f(_TRIPS, null, { highlight: 'X' }),
  _mc('A receiver takes a few quick steps upfield and then cuts sharply diagonally toward the middle of the field. What route is it?', [['slant', 'Slant'], ['out', 'Out'], ['post', 'Post'], ['go', 'Go']], 'slant',
    'The slant is a quick, sharp diagonal cut toward the middle of the field.'),
  _p('The slant: a quick burst upfield, then a sharp diagonal cut inside.', [['X', [[5, 47], [20, 39]], 'route']], [[50, 60], [19, 40]]));
_s('s_wrRouteOut', 'wrRouteTree', 2, 'recognize', _f(_TRIPS, null, { highlight: 'Z' }),
  _mc('A receiver runs upfield about ten yards and breaks hard toward the sideline. What route is it?', [['in', 'In'], ['out', 'Out'], ['curl', 'Curl'], ['post', 'Post']], 'out',
    'An out route breaks sharply toward the sideline.'),
  _p('The out route: run upfield, then break flat toward the sideline.', [['Z', [[85, 38], [97, 38]], 'route']], [[50, 60], [96, 39]]));
_s('s_wrRouteCurl', 'wrRouteTree', 2, 'recognize', _f(_TRIPS, null, { highlight: 'Z' }),
  _mc('A receiver runs upfield about twelve yards, then stops and turns back toward the quarterback. What route is it?', [['curl', 'Curl'], ['go', 'Go'], ['corner', 'Corner'], ['slant', 'Slant']], 'curl',
    'A curl runs upfield, stops, and turns back to face the quarterback.'),
  _p('The curl: run upfield, stop and turn back toward the quarterback.', [['Z', [[85, 38], [84, 42]], 'route']], [[50, 60], [84, 42]]));
_s('s_wrRoutePostCorner', 'wrRouteTree', 3, 'apply', _f(_TRIPS, null, { highlight: 'Y' }),
  _mc('A receiver runs deep and breaks toward the goalposts in the middle of the field. What route is it?', [['post', 'Post'], ['corner', 'Corner'], ['out', 'Out'], ['curl', 'Curl']], 'post',
    'A post breaks deep toward the goalposts. A corner breaks deep toward the corner of the end zone.'),
  _p('The post: run deep, then break toward the goalposts.', [['Y', [[95, 34], [78, 20]], 'route']], [[50, 60], [79, 22]]));
_s('s_wrRouteNumbers', 'wrRouteTree', 3, 'apply', _f(_TRIPS, null),
  _mc('Many teams give each route a number. Is that numbering the same on every team?', [['a', 'No, it differs from team to team, so learn your own'], ['b', 'Yes, it is a national standard'], ['c', 'Only in the NFL']], 'a',
    'There is a common idea of a “route tree,” but the numbers and names vary by system.'));
_s('s_wrCover2Soft', 'wrBeatCoverage', 3, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } }, note: 'The defense shows two safeties deep.' }),
  _mc('Against Cover 2, which route is built to sit between the corner and the deep safety?', [['a', 'A corner route'], ['b', 'A hitch straight at the corner'], ['c', 'A block']], 'a',
    'A corner route breaks deep toward the sideline, behind the underneath corner and in front of the deep safety.'));
_s('s_wrCover3Seams', 'wrBeatCoverage', 3, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 50, y: 15 } }, note: 'One safety deep in the middle: Cover 3 is likely.' }),
  _mc('Which routes stress the gaps between the three deep defenders in Cover 3?', [['a', 'Vertical seam routes'], ['b', 'Short hitches only'], ['c', 'Screens only']], 'a',
    'Verticals up the seams put pressure on the spaces between the deep thirds.'));
_s('s_wrCover1Cross', 'wrBeatCoverage', 3, 'apply', _f(_TRIPS, '42nickel'),
  _mc('Against man coverage with one safety deep (Cover 1), which routes help?', [['a', 'Crossing routes that make defenders run through traffic, and sharp breaks'], ['b', 'Standing still'], ['c', 'Only deep go routes']], 'a',
    'Crossers force man defenders to fight through other players, and sharp breaks create separation.'));
_s('s_wrStalk', 'wrStalkBlock', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'Z' }),
  _mc('What is a stalk block?', [['a', 'Getting in front of a defender and staying between him and the ball carrier'], ['b', 'Catching a pass'], ['c', 'Pulling his jersey']], 'a',
    'A stalk block means getting to the defender, getting in front of him, and keeping him away from the runner without holding.'));
_s('s_wrHoldBlock', 'wrStalkBlock', 2, 'apply', _f('pistolRight', '43under', { highlight: 'Z' }),
  _mc('Where should your hands be on a stalk block?', [['a', 'Inside his shoulders, on his chest'], ['b', 'Grabbing the back of his jersey'], ['c', 'Wrapped around his waist']], 'a',
    'Hands inside the shoulders is legal. Grabbing and pulling the jersey is holding.'));
_s('s_wrBlockWhy', 'wrStalkBlock', 2, 'apply', _f('pistolRight', '43under', { highlight: 'Z' }),
  _mc('Why does a receiver block hard on running plays?', [['a', 'A good block can turn a short run into a long one'], ['b', 'He has nothing else to do'], ['c', 'It is only for show']], 'a',
    'The cornerback or safety he blocks is often the last defender between the runner and open grass.'));
_s('s_wrHandsHigh', 'wrHands', 1, 'recognize', _f(_TRIPS, null, { highlight: 'Z' }),
  _mc('For a ball thrown above your waist, how should your hands look?', [['thumbs', 'Thumbs together'], ['pinkies', 'Pinkies together'], ['fists', 'Closed fists']], 'thumbs',
    'Above the waist the thumbs and index fingers make a diamond or triangle. Below the waist the pinkies go together.'));
_s('s_wrHandsLow', 'wrHands', 1, 'recognize', _f(_TRIPS, null, { highlight: 'Z' }),
  _mc('For a ball thrown below your waist, how should your hands look?', [['thumbs', 'Thumbs together'], ['pinkies', 'Pinkies together'], ['fists', 'Closed fists']], 'pinkies',
    'Below the waist, pinkies together makes a cradle for the ball.'));
_s('s_wrTuck', 'wrHands', 2, 'apply', _f(_TRIPS, null, { highlight: 'Z' }),
  _mc('Right after the catch, what should you do with the ball before you run?', [['a', 'Tuck it high and tight'], ['b', 'Hold it out for balance'], ['c', 'Hold it loosely in one hand']], 'a',
    'Secure the ball first. A fumble costs the offense more than a few extra yards earn.'));

LESSON_ORDER_BY_TRACK.WR = _orderWith(['l_primerWR', 'l_personnel11', 'l_wrAlignment', 'l_formationShotgun', 'l_wrHands', 'l_strengthCall', 'l_wrRouteTree', 'l_safetyShell', 'l_wrRelease', 'l_formationDoubles', 'l_wrManZone', 'l_nickel', 'l_wrBeatCoverage', 'l_wrStalkBlock', 'l_mike', 'l_formationPistol', 'l_personnelNumbers']);

/* =========================================================
   TIGHT END
   ========================================================= */
_cp('primerTE', 'TE Primer: What To Look For', 'TE', 'offense', 1, 'tight end pre snap reads blocking and receiving film study');
_cp('teAlign', 'Alignment: Inline, Flexed, Wing', 'TE', 'offense', 2, 'tight end alignment inline flex wing h-back explained');
_cp('teBaseBlock', 'Run Blocks: Base, Reach, Down', 'TE', 'offense', 2, 'tight end run blocking base block reach block down block technique');
_cp('teCombo', 'Combo Blocks With The Tackle', 'TE', 'offense', 3, 'tight end tackle combo block double team climb linebacker');
_cp('teChipRelease', 'Chip, Release, Or Stay In', 'TE', 'offense', 3, 'tight end chip block release pass protection max protect');
_cp('teSeam', 'Seams, Windows & Mismatches', 'TE', 'offense', 3, 'tight end seam route cover 2 middle of the field mismatch film');
_cp('teGoalLine', 'Short Yardage & Goal Line', 'TE', 'offense', 3, 'tight end goal line short yardage 13 personnel play action');
_cp('teScramble', 'When The Play Breaks Down', 'TE', 'offense', 2, 'tight end scramble drill find open space quarterback scramble rules');

_l('l_primerTE', 'primerTE', 1, 'Tight End: What You’re Looking For',
  'The tight end does two jobs in the same play: he is the sixth lineman on runs and a receiver on passes. Before the snap he must know where he lines up and whether this play is a block or a route. On a run he needs to know which defender is his and who he works with. On a pass he needs to know whether he runs a route, chips a rusher first, or stays in to protect.',
  ['Where am I lined up: inline, flexed or as a wing?', 'Run: who is my defender, and who do I work with?', 'Pass: route, chip-and-release, or stay in to block?', 'Watch the Sam and the end: they decide how I block.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'TE' });
_l('l_teAlign', 'teAlign', 2, 'Alignment: Inline, Flexed Or Wing',
  'An inline tight end puts his hand down next to the offensive tackle, on the line of scrimmage, “attached” to the line. A flexed tight end lines up a few steps away from the tackle, still on the line, which makes him look like a receiver. A wing or H-back lines up off the line, behind and outside the tackle or tight end. Each spot changes what the defense does. An inline tight end creates a strong side and a D gap, and a wing adds another blocker to the edge. Teams use different names (Y, H, F, U) for these players.',
  ['Inline: next to the tackle, on the line.', 'Flexed: off the tackle but still on the line.', 'Wing / H-back: off the line, behind and outside.', 'An inline TE (or a wing) makes that side the strong side.'],
  { offense: 'tightEndHeavy', defense: null, showGaps: false, highlight: 'TE3', note: 'Two tight ends are inline. The third is a wing / H-back.' });
_l('l_teBaseBlock', 'teBaseBlock', 2, 'Run Blocks: Base, Reach And Down',
  'Three common ways a tight end blocks the defender near him. A base block is a straight-ahead drive on the defender lined up on you. A reach block is when the defender is lined up outside you and you step to get your body across his outside, to keep him from setting the edge. A down block is when the defender is inside of you and you block him back toward the middle, often so a teammate can pull and kick out the end. In all three, win with a low pad level, hands inside, and feet that keep driving.',
  ['Base: drive the defender in front of you.', 'Reach: defender outside you, so get across his outside.', 'Down: defender inside you, so drive him toward the middle.', 'Low pad level, hands inside, feet moving.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'TE' });
_l('l_teCombo', 'teCombo', 3, 'Combo Blocks With The Tackle',
  'In a combo block (a double team) the tight end and the tackle both start on the same down lineman. Together they can move him and keep him from getting into the gap. As the defender is controlled, one of them leaves for the linebacker, which is called working to the “second level.” Who leaves usually depends on how the defender moves and on the coach’s rules, so the two blockers must communicate. If either blocker leaves too early, the defender gets free.',
  ['Two blockers on one defender to start.', 'Then one climbs to the linebacker.', 'Talk to each other: who is staying, who is climbing?', 'Don’t leave early.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'TE' });
_l('l_teChipRelease', 'teChipRelease', 3, 'Chip, Release, Or Stay In',
  'On a pass, the tight end has three jobs he might be given. In a release he runs his route right away. In a chip-and-release he gives a quick, hard hit to a rusher (often the end) to slow him down, then runs his route. In max protection he stays in to block as an extra protector. The call usually depends on the play and the protection, and on whether the defense shows extra rushers. A tight end who chips for one second can buy the quarterback a lot of time.',
  ['Release: run your route.', 'Chip: a quick hit on the rusher, then release.', 'Stay in: block as part of the protection.', 'Extra rushers? The protection call may keep you in.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'TE' });
_l('l_teSeam', 'teSeam', 3, 'Seams, Windows And Mismatches',
  'A tight end is often a mismatch: bigger and stronger than a defensive back, and often faster than a linebacker. The seam route runs straight up the field between the outside defenders and the deep middle. Against two deep safeties (Cover 2), the seam attacks the deep middle between them. Against zone, the tight end finds the open window and sits down; against man, he uses his body to shield the ball from the defender. These are tendencies, not rules, and defenses adjust.',
  ['Bigger than a DB, quicker than most linebackers.', 'Seam: straight up the field in the gap between defenders.', 'Zone: sit in the window. Man: use your body.', 'Two deep safeties leave the deep middle open.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'TE', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } });
_l('l_teGoalLine', 'teGoalLine', 3, 'Short Yardage And The Goal Line',
  'Near the goal line the tight end is an extra blocker. With two or three tight ends (12 or 13 Personnel) the offense expects to run and brings lots of size. That also sets up play-action: the defense crashes toward the run, and a tight end slips out into the flat or the back of the end zone. Pad level matters even more near the goal line because everyone is squeezed into a small space. The low man wins.',
  ['Extra blocker: stay low and drive.', 'More tight ends = a run is likely.', 'Play-action: the tight end slips out as the defense crashes.', 'In a tight space, the low man wins.'],
  { offense: 'tightEndHeavy', defense: '43over', showGaps: true, highlight: 'TE' });
_l('l_teScramble', 'teScramble', 2, 'When The Play Breaks Down',
  'Sometimes the pocket collapses and the quarterback has to run. Receivers, including tight ends, then switch to scramble rules: find an open space away from defenders, turn to face the quarterback and show him a target. If the quarterback runs to one side, you work to the open space on that side, rather than staying on your route. Keep your eyes on the quarterback and keep moving until you have the ball or the whistle blows. Teams teach slightly different scramble rules, so learn yours.',
  ['Find open space away from defenders.', 'Turn and give the QB a target.', 'Eyes on the quarterback.', 'Keep working until the whistle.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'TE' });

// ---- TE scenarios ----
_s('s_tePrimerJobs', 'primerTE', 1, 'recognize', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('What are the two main jobs of a tight end?', [['a', 'Blocking like a lineman and catching like a receiver'], ['b', 'Only blocking'], ['c', 'Only kicking']], 'a',
    'A tight end blocks on runs and runs routes on passes. That is why he is both a lineman and a receiver.'));
_s('s_tePrimerKnow', 'primerTE', 1, 'recognize', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('Before the snap, what must a tight end know?', [['a', 'Whether the play is a block or a route, and who his defender is'], ['b', 'Only the jersey numbers'], ['c', 'Nothing, he reacts']], 'a',
    'The assignment decides everything: block or route, and who he works with.'));
_s('s_teTapWing', 'teAlign', 2, 'recognize', _f('tightEndHeavy', null),
  _tap('tapPlayer', 'Tap the tight end lined up OFF the line as a wing / H-back.', [['TE2', 'Left tight end'], ['TE', 'Right tight end'], ['TE3', 'Wing tight end']], 'TE3',
    'The wing / H-back lines up behind and outside the inline tight end, off the line of scrimmage.'), { hideOptionLabels: true });
_s('s_teInline', 'teAlign', 2, 'recognize', _f('singlebackAce', null, { highlight: 'TE' }),
  _mc('A tight end puts his hand down next to the offensive tackle, on the line. What do we call this?', [['inline', 'Inline (attached)'], ['flex', 'Flexed'], ['wing', 'Wing']], 'inline',
    'Inline means attached to the line next to the tackle. A flexed tight end is a few steps away from the tackle, and a wing is off the line.'));
_s('s_teStrength', 'teAlign', 2, 'apply', _f('tightEndHeavy', '43over', { showGaps: true }),
  _mc('How does an inline tight end change the defense’s picture?', [['a', 'It creates a strong side and adds a D gap to account for'], ['b', 'It removes all the gaps'], ['c', 'It changes nothing']], 'a',
    'The side with the tight end becomes the strong side, and the defense has an extra gap (the D gap) outside him.'));
_s('s_teFlex', 'teAlign', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE', overrides: { TE: { x: 88, y: 52 } }, note: 'The tight end splits out wide, still on the line.' }),
  _mc('What do we call a tight end who splits away from the tackle but stays on the line?', [['flex', 'Flexed'], ['inline', 'Inline'], ['wing', 'Wing']], 'flex',
    'He is on the line but is split from the tackle. That makes him look like a receiver, and defenders must decide who covers him.'));
_s('s_teBaseWhat', 'teBaseBlock', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'TE' }),
  _mc('A defender is lined up directly in front of you. Which block is the most natural?', [['base', 'Base block (drive him straight back)'], ['reach', 'Reach block'], ['down', 'Down block']], 'base',
    'When the defender is on you, a base block drives him straight back.'),
  _p('A base block: the tight end fires off the ball and drives the defender back.', [['TE', [[78, 49], [78, 46]], 'block'], ['SDE', [[74, 46], [74, 49]], 'rush']]));
_s('s_teReach', 'teBaseBlock', 3, 'apply', _f('pistolRight', '43under', { highlight: 'TE', note: 'A defender is lined up on your OUTSIDE shoulder on a run to your side.' }),
  _mc('Which block do you use to keep that defender from setting the edge?', [['reach', 'Reach block, getting across his outside'], ['down', 'Down block'], ['none', 'No block']], 'reach',
    'A reach block gets your body across the outside of the defender and seals him inside.'));
_s('s_teDown', 'teBaseBlock', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE', note: 'The defender is lined up on your INSIDE shoulder on a power run.' }),
  _mc('Which block fits a defender lined up inside you, on a play where a teammate will kick out the end?', [['down', 'Down block'], ['reach', 'Reach block'], ['pass', 'Pass set']], 'down',
    'A down block drives the inside defender toward the middle so the puller can get the end.'));
_s('s_teLow', 'teBaseBlock', 1, 'recognize', _f('pistolRight', '43under', { highlight: 'TE' }),
  _mc('Who wins most blocks: the player with the lower pad level or the higher one?', [['low', 'The lower one'], ['high', 'The higher one']], 'low',
    'The lower player has better leverage. “Low man wins” is true at every level.'));
_s('s_teComboWhat', 'teCombo', 3, 'recognize', _f('pistolRight', '43under', { highlight: 'TE' }),
  _mc('What is a combo block?', [['a', 'Two blockers start on one defender, then one climbs to a linebacker'], ['b', 'Two blockers on two linebackers'], ['c', 'A pass block']], 'a',
    'Two blockers control one defender together, and then one leaves for the second level.'),
  _p('The tight end and the tackle double the end, then the tackle climbs to the linebacker.',
    [['TE', [[78, 49], [76, 47]], 'block'], ['RT', [[72, 50], [74, 44], [76, 40]], 'block'], ['SDE', [[74, 46], [76, 49]], 'rush']]));
_s('s_teComboWhy', 'teCombo', 3, 'apply', _f('pistolRight', '43under', { highlight: 'TE' }),
  _mc('Why does a combo block need talking between the two blockers?', [['a', 'They must agree on who stays and who climbs'], ['b', 'It is required by the rules'], ['c', 'To fool the referee']], 'a',
    'If both climb or both stay, the defender gets free or a linebacker is left untouched.'));
_s('s_teComboEarly', 'teCombo', 3, 'apply', _f('pistolRight', '43under', { highlight: 'TE' }),
  _mc('What happens if one blocker leaves the combo too early?', [['a', 'The defender can get loose and make the tackle'], ['b', 'Nothing'], ['c', 'The play is dead']], 'a',
    'The double team only works while both blockers are controlling the defender.'));
_s('s_teChipWhat', 'teChipRelease', 3, 'recognize', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('What is a chip block by a tight end?', [['a', 'A quick, hard hit on a rusher before he releases into his route'], ['b', 'A cut block at the knees'], ['c', 'A block after the whistle']], 'a',
    'The chip slows the rusher for a second, and then the tight end runs his route.'));
_s('s_teStayIn', 'teChipRelease', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('When might a tight end stay in to block instead of running a route?', [['a', 'When the protection call needs him, or the defense shows extra rushers'], ['b', 'Never'], ['c', 'Only on punts']], 'a',
    'Max protection or a blitz look can keep the tight end in as an extra blocker.'));
_s('s_teSeam', 'teSeam', 3, 'recognize', _f('singlebackAce', '43under', { highlight: 'TE', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('Against two deep safeties, which route attacks the deep middle between them?', [['seam', 'Seam route up the middle'], ['out', 'Quick out'], ['block', 'A block']], 'seam',
    'A seam goes straight up the field, between the outside defenders and the safeties. Two deep safeties leave the middle between them as a soft spot.'),
  _p('The seam: the tight end runs straight up between the deep safeties.', [['TE', [[78, 38], [64, 24]], 'route']], [[50, 57], [64, 25]]));
_s('s_teMismatch', 'teSeam', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('Why is a tight end often a matchup problem?', [['a', 'He can be bigger than a defensive back and faster than a linebacker'], ['b', 'He is always the fastest player'], ['c', 'He can’t be covered by anyone']], 'a',
    'The size/speed combination can create mismatches, although defenses plan for it.'));
_s('s_teZone', 'teSeam', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('Against zone coverage, a tight end usually…', [['a', 'Finds the window between defenders and sits down'], ['b', 'Runs into the nearest defender'], ['c', 'Stops moving at the line']], 'a',
    'Zone defenders cover areas, so the tight end finds the gap and gives the QB a target.'));
_s('s_teGLRun', 'teGoalLine', 3, 'recognize', _f('tightEndHeavy', '43over', { showGaps: true }),
  _mc('Three tight ends and one wide receiver. What does the offense probably want to do?', [['a', 'Run the ball, with play-action as a surprise'], ['b', 'Throw four verticals'], ['c', 'Punt']], 'a',
    'Heavy personnel is the run-game look, which makes play-action effective.'));
_s('s_teGLPA', 'teGoalLine', 3, 'apply', _f('tightEndHeavy', '43over', { highlight: 'TE' }),
  _mc('On a goal-line play-action, where does the tight end often go once the defense crashes toward the run?', [['a', 'Into the flat or the back of the end zone'], ['b', 'Back to the huddle'], ['c', 'Straight into the pile']], 'a',
    'The defense bites on the run fake and the tight end slips out where nobody is covering him.'));
_s('s_teLowGL', 'teGoalLine', 2, 'recognize', _f('tightEndHeavy', '43over', { highlight: 'TE' }),
  _mc('Near the goal line, what wins a block?', [['a', 'Low pad level and driving your feet'], ['b', 'Standing tall'], ['c', 'Looking at the crowd']], 'a',
    'Everyone is squeezed into a small space, and the low man wins.'));
_s('s_teScrambleOpen', 'teScramble', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('The quarterback leaves the pocket and starts to run. What should the tight end do?', [['a', 'Find open space away from defenders and give the QB a target'], ['b', 'Keep running the same route no matter what'], ['c', 'Stand still']], 'a',
    'A scramble means the play has changed, and the receivers must find open space and show a target.'));
_s('s_teScrambleEyes', 'teScramble', 2, 'apply', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('During a scramble, where should a receiver’s eyes be?', [['a', 'On the quarterback'], ['b', 'On the sideline'], ['c', 'On the scoreboard']], 'a',
    'The receiver needs to see the QB so he can turn to the ball when it comes.'));
_s('s_teScrambleTurn', 'teScramble', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'TE' }),
  _mc('When the QB scrambles, should receivers freeze or keep moving?', [['a', 'Keep working to open space until the whistle'], ['b', 'Freeze in place'], ['c', 'Go back to the line']], 'a',
    'Defenders are also moving, and an open window can appear at any moment.'));

LESSON_ORDER_BY_TRACK.TE = _orderWith(['l_primerTE', 'l_personnel11', 'l_teAlign', 'l_strengthCall', 'l_gaps', 'l_teBaseBlock', 'l_sam', 'l_formationSingleback', 'l_teCombo', 'l_teSeam', 'l_formationTEHeavy', 'l_teChipRelease', 'l_front43under', 'l_teScramble', 'l_teGoalLine', 'l_formationWing', 'l_mike', 'l_front43over', 'l_formationPistol', 'l_safetyShell']);

/* =========================================================
   OFFENSIVE LINE
   ========================================================= */
_cp('primerOL', 'OL Primer: What To Look For', 'OL', 'offense', 1, 'offensive line pre snap reads film study');
_cp('olStance', 'Stance, First Step & Pad Level', 'OL', 'offense', 1, 'offensive line stance first step pad level technique');
_cp('olCovered', 'Covered Or Uncovered?', 'OL', 'offense', 2, 'offensive line covered uncovered lineman rule explained');
_cp('olZoneBlock', 'Inside Zone: Double, Then Climb', 'OL', 'offense', 3, 'offensive line inside zone blocking double team climb linebacker');
_cp('olPower', 'Power: Down, Down, Kick', 'OL', 'offense', 3, 'offensive line power scheme pulling guard kick out down block');
_cp('olPassSet', 'Pass Sets: Kick-Slide & Punch', 'OL', 'offense', 2, 'offensive tackle pass set kick slide punch hands technique');
_cp('olStunt', 'Stunts & Twists: Pass Them Off', 'OL', 'offense', 3, 'offensive line pick up stunt twist communication pass off');
_cp('olSlide', 'Slide Protection', 'OL', 'offense', 3, 'offensive line slide protection full slide half slide mike point');
_cp('olDiscipline', 'Discipline: Snap Count & Penalties', 'OL', 'offense', 1, 'offensive line false start holding ineligible downfield penalties explained');

_l('l_primerOL', 'primerOL', 1, 'Offensive Line: What You’re Looking For',
  'The offensive line works as one unit, and it starts before the snap. Know the snap count, find the Mike so the protection is right, and see how the defensive front lines up. Then check your assignment: is it a zone run, a gap run or a pass play, and who is your defender or your area? After the snap, win with your stance, hands and pad level, and finish every block.',
  ['Know the snap count and the call.', 'Find the Mike and read the front.', 'Know your defender or your area.', 'Pad level and hands win the block.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'MIKE' });
_l('l_olStance', 'olStance', 1, 'Stance, First Step And Pad Level',
  'A good stance is balanced: feet about shoulder-width apart, weight on the balls of your feet, back flat, head up. From there you can fire out on a run block or set back on a pass block. Your first step is quick and short, with the foot nearest the direction you are going. The lower player wins most blocks, so keep your pad level lower than the defender’s. Coaches differ on how much weight goes on the hand, so follow your own coach’s stance.',
  ['Balanced: feet shoulder-width, back flat, head up.', 'First step: quick, short, toward the play.', 'Low pad level wins.', 'Stance details vary by coach.'],
  { offense: 'pistolRight', defense: null, showGaps: false, highlight: 'RG' });
_l('l_olCovered', 'olCovered', 2, 'Covered Or Uncovered?',
  'A lineman is “covered” when a defender lines up on him — head-up or on a shoulder. He is “uncovered” when no defender is on him. Many blocking rules use this idea. A covered lineman blocks the man in front of him. An uncovered lineman helps a covered neighbor first, usually in a double team, and then moves on to a linebacker. Counting who is covered tells every lineman what his job is.',
  ['Covered: a defender is on you.', 'Uncovered: nobody is on you.', 'Uncovered linemen help a neighbor, then climb.', 'Everyone counts the front together.'],
  { offense: 'iFormation', defense: '34base', showGaps: false, highlight: 'C' });
_l('l_olZoneBlock', 'olZoneBlock', 3, 'Inside Zone: Double, Then Climb',
  'In a zone run, linemen block areas instead of named defenders. On inside zone, two neighboring linemen often start by double-teaming the down lineman between them. As the defender is controlled, one of the two climbs to the linebacker (the second level) while the other stays on the defender. The lineman who is uncovered often helps the double first. The aiming points and exact rules differ between systems, but the idea is to move defenders and get a body on a linebacker.',
  ['Zone: block areas, not names.', 'Double-team the defender between two linemen.', 'One climbs to the linebacker, one stays on the defender.', 'Move your feet and keep your head on the right side.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'RG' });
_l('l_olPower', 'olPower', 3, 'Power: Down, Down, Kick',
  'Power is a gap-blocking run: each blocker has a named defender. The play-side linemen block down, toward the center. A pulling lineman, usually the backside guard, runs behind them and kicks out the defender on the end of the line (the “end man on the line”). A lead blocker, often the fullback, goes through the hole and finds the linebacker. The reminder “down, down, down, kick” describes the idea. Teams add variations, but the pattern is the same.',
  ['Gap scheme: each blocker has a named defender.', 'Play-side linemen block down.', 'The puller kicks out the end man on the line.', 'The lead blocker takes the linebacker.'],
  { offense: 'iFormation', defense: '43under', showGaps: true, highlight: 'LG' });
_l('l_olPassSet', 'olPassSet', 2, 'Pass Sets: Kick-Slide And Punch',
  'On a pass play the lineman’s goal is to keep the rusher in front of him and away from the quarterback. Tackles often start with a kick-slide: a short step back and out at an angle, which keeps them in front of a fast edge rusher. Then comes the punch: both hands strike the defender’s chest, inside his frame, in one quick motion. Keep your feet moving, stay square and don’t lunge, because a lunging lineman gets beaten. The aim is to push the rusher around and past the quarterback.',
  ['Kick-slide to stay in front of the edge rusher.', 'Punch: both hands, inside, on the chest.', 'Don’t lunge, and keep your feet moving.', 'Push the rusher past the QB.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'LT' });
_l('l_olStunt', 'olStunt', 3, 'Stunts And Twists: Pass Them Off',
  'A stunt (or twist) is when two pass rushers cross paths: one crashes into a gap to pull a blocker with him while the other loops around behind him. The blockers’ job is to talk and pass the rushers off. The lineman on the first rusher does not chase him through the gap; he lets the neighbor take him and picks up the looper. If a blocker chases the first rusher, the looper is free. Names of stunts differ from team to team.',
  ['Two rushers cross: one crashes, one loops.', 'Talk: call “stunt!”', 'Pass off the first rusher, pick up the second.', 'Don’t chase the first one.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'LG' });
_l('l_olSlide', 'olSlide', 3, 'Slide Protection',
  'In a slide protection the line turns and blocks gaps in one direction instead of taking specific men. In a full slide all five linemen slide the same way, and a back or tight end usually takes the rusher on the other side. In a half slide, the line slides one way and the remaining side is man-to-man. The Mike is the key: the slide direction is called from him. A slide gets everyone covered without needing a perfect count, but it depends on communication.',
  ['Slide: block gaps in one direction.', 'Full slide: all five slide; a back takes the other side.', 'Half slide: part of the line slides, part is man.', 'The direction is called from the Mike.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: true, highlight: 'MIKE' });
_l('l_olDiscipline', 'olDiscipline', 1, 'Discipline: Snap Count And Penalties',
  'The offensive line is flagged more than any other group, and most flags are avoidable. A false start (moving after you are set, before the snap) is a five-yard penalty. Holding (grabbing or pulling with your hands instead of blocking) is usually ten yards. And linemen are ineligible receivers, so going more than about a yard past the line on a pass play is also a penalty. Learn the snap count, stay set, keep your hands inside and finish every play within the rules. Exact yardages and details vary a little between levels.',
  ['False start: moving before the snap, 5 yards.', 'Holding: 10 yards.', 'Linemen can’t go far downfield on a pass.', 'Know the cadence and stay set.'],
  { offense: 'pistolRight', defense: null, showGaps: false });

// ---- OL scenarios ----
_s('s_olPrimerBefore', 'primerOL', 1, 'recognize', _f('pistolRight', '43under', { highlight: 'MIKE' }),
  _mc('What should a lineman know before the snap?', [['a', 'The snap count, the call and who is his defender or area'], ['b', 'Only which hand is down'], ['c', 'Nothing']], 'a',
    'The whole line must be on the same page on the count, the call and the assignments.'));
_s('s_olPrimerUnit', 'primerOL', 1, 'recognize', _f('pistolRight', '43under'),
  _mc('Why must the offensive line work as a unit?', [['a', 'A mistake by one lineman can break the play for everyone'], ['b', 'Because it looks better'], ['c', 'It does not need to']], 'a',
    'Blocking schemes depend on each lineman doing his part. One missed assignment can cost a sack or a loss.'));
_s('s_olStanceWeight', 'olStance', 1, 'recognize', _f('pistolRight', null, { highlight: 'RG' }),
  _mc('Which describes a good offensive line stance?', [['a', 'Balanced, weight on the balls of the feet, back flat, head up'], ['b', 'Weight on your heels, back round'], ['c', 'Standing straight up']], 'a',
    'A balanced stance lets you fire out or set back. Weight on the heels makes you late.'));
_s('s_olLowMan', 'olStance', 1, 'recognize', _f('pistolRight', null, { highlight: 'RG' }),
  _mc('Who usually wins the block: the lower or the higher player?', [['low', 'The lower player'], ['high', 'The higher player']], 'low',
    'Leverage comes from the lower pad level.'));
_s('s_olFirstStep', 'olStance', 2, 'apply', _f('pistolRight', '43under', { highlight: 'RG' }),
  _mc('How should the first step be?', [['a', 'Quick and short, with the foot nearest the direction of the play'], ['b', 'A huge step to reach farther'], ['c', 'Backward always']], 'a',
    'A short, quick step keeps your base under you. A huge step takes you off balance.'));
_s('s_olCenterCovered', 'olCovered', 2, 'recognize', _f('iFormation', '34base', { highlight: 'C' }),
  _mc('A nose tackle is lined up head-up on the center. What is the center?', [['cov', 'Covered'], ['unc', 'Uncovered']], 'cov',
    'A defender is directly on him, so the center is covered.'));
_s('s_olGuardsUncovered', 'olCovered', 3, 'apply', _f('iFormation', '34base'),
  _mc('In this 3-4 look, the nose is on the center and the 5-techniques are on the tackles. Which linemen are uncovered?', [['guards', 'Both guards'], ['tackles', 'Both tackles'], ['none', 'No one']], 'guards',
    'The center is covered by the nose and each tackle is covered by a 5-technique. No defender is lined up on either guard.'));
_s('s_olUncoveredJob', 'olCovered', 3, 'apply', _f('iFormation', '34base'),
  _mc('What does an uncovered lineman often do first?', [['a', 'Help a covered neighbor with a double team, then move on to a linebacker'], ['b', 'Stand still'], ['c', 'Block nobody']], 'a',
    'The uncovered lineman helps first, then climbs. It gives the offense extra blockers where they are needed.'));
_s('s_olZoneDouble', 'olZoneBlock', 3, 'recognize', _f('pistolRight', '43under', { showGaps: true, highlight: 'RG' }),
  _mc('On inside zone, what usually happens to the down lineman between two neighboring blockers?', [['a', 'The two blockers double-team him'], ['b', 'Nobody blocks him'], ['c', 'He is pushed by the quarterback']], 'a',
    'Two neighboring linemen often double-team the defender between them to move him.'),
  _p('Inside zone: the center and guard double-team the tackle. The guard then climbs to the linebacker.',
    [['C', [[53, 50], [54, 47]], 'block'], ['RG', [[57, 49], [56, 44], [55, 40]], 'block'], ['SDT', [[54, 46], [53, 49]], 'rush']]));
_s('s_olClimb', 'olZoneBlock', 3, 'apply', _f('pistolRight', '43under', { highlight: 'RG' }),
  _mc('What does “climbing” to the second level mean?', [['a', 'Leaving a double team to block a linebacker'], ['b', 'Jumping over a defender'], ['c', 'Running to the sideline']], 'a',
    'The “second level” is where the linebackers are. A climb is the move from a defender at the line to a linebacker behind him.'));
_s('s_olZoneAreas', 'olZoneBlock', 3, 'apply', _f('pistolRight', '43under'),
  _mc('How is a zone run blocked?', [['a', 'Linemen block areas and the defenders who enter them'], ['b', 'Every lineman has a named defender'], ['c', 'No one blocks']], 'a',
    'Zone blocking is about areas. A gap scheme like Power gives each blocker a specific defender.'));
_s('s_olPowerKick', 'olPower', 3, 'recognize', _f('iFormation', '43under', { showGaps: true, highlight: 'LG' }),
  _mc('On Power, what does the pulling guard usually do?', [['a', 'Kicks out the defender on the end of the line'], ['b', 'Blocks the quarterback'], ['c', 'Runs a route']], 'a',
    'The puller wraps behind the line and kicks out the end man on the line, which opens the lane.'),
  _p('Power: the right tackle blocks down, the left guard pulls and kicks out the end, and the fullback leads through the hole.',
    [['LG', [[40, 57], [66, 57], [73, 49]], 'block'], ['RT', [[67, 50], [64, 47]], 'block'], ['FB', [[50, 64], [64, 56], [70, 47]], 'run'], ['TB', [[50, 71], [60, 62], [68, 52]], 'run'], ['SDE', [[74, 46], [76, 48]], 'rush']], [[50, 57], [50, 64], [60, 62]]));
_s('s_olPowerDown', 'olPower', 3, 'apply', _f('iFormation', '43under', { showGaps: true }),
  _mc('On Power, which way do the play-side linemen block?', [['a', 'Down, toward the center'], ['b', 'Out, toward the sideline'], ['c', 'Back']], 'a',
    'Down blocks seal the inside, so the puller can kick out the end man.'));
_s('s_olGapVsZone', 'olPower', 3, 'apply', _f('iFormation', '43under'),
  _mc('What is the main difference between gap blocking and zone blocking?', [['a', 'In gap blocking each blocker has a named defender; in zone they block areas'], ['b', 'Zone uses the pass, gap uses the run'], ['c', 'There is none']], 'a',
    'Power is a gap scheme. Inside zone is a zone scheme.'));
_s('s_olKickSlide', 'olPassSet', 2, 'recognize', _f('shotgunDoubles', '43under', { highlight: 'LT' }),
  _mc('Why do tackles use a kick-slide in pass protection?', [['a', 'To stay in front of a fast edge rusher'], ['b', 'To run to the sideline'], ['c', 'To get a head start downfield']], 'a',
    'A short step back and out keeps the tackle between the rusher and the quarterback.'));
_s('s_olPunch', 'olPassSet', 2, 'recognize', _f('shotgunDoubles', '43under', { highlight: 'LT' }),
  _mc('Where should your hands go in a punch?', [['a', 'Both hands to the defender’s chest, inside his frame'], ['b', 'Around his waist'], ['c', 'On his helmet']], 'a',
    'Inside hands control the defender and are legal. Hands outside the frame or around his neck risk holding.'));
_s('s_olLunge', 'olPassSet', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'LT' }),
  _mc('What happens when a pass blocker lunges at the rusher?', [['a', 'He is off balance and can be beaten'], ['b', 'He blocks better'], ['c', 'Nothing']], 'a',
    'A lunging blocker leans over his feet and the rusher gets by him. Stay square and keep your feet moving.'));
_s('s_olStuntWhat', 'olStunt', 3, 'recognize', _f('shotgunDoubles', '43under'),
  _mc('What is a stunt (or twist)?', [['a', 'Two pass rushers cross, with one looping behind the other'], ['b', 'A trick play by the offense'], ['c', 'A false start']], 'a',
    'The crashing rusher pulls a blocker with him and the looper runs the arc behind him.'),
  _p('A stunt: the end crashes inside while the tackle loops outside behind him. The blockers pass them off.',
    [['WDE', [[21, 45], [27, 50], [34, 55]], 'rush'], ['WDT', [[37, 46], [37, 43], [27, 48], [24, 56]], 'rush'], ['LT', [[28, 55]], 'block'], ['LG', [[36, 55]], 'block']]));
_s('s_olPassOff', 'olStunt', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'LG' }),
  _mc('Against a stunt, what should the linemen do?', [['a', 'Talk, pass off the first rusher and pick up the looper'], ['b', 'Chase the first rusher through the gap'], ['c', 'Stand still']], 'a',
    'Chasing the first rusher leaves the looper free. Pass off, and pick up the next one.'));
_s('s_olStuntTalk', 'olStunt', 3, 'apply', _f('shotgunDoubles', '43under'),
  _mc('Why should linemen call out “stunt!”?', [['a', 'So neighbors know to pass off and pick up the looper'], ['b', 'To fool the referee'], ['c', 'It is a rule']], 'a',
    'Communication keeps the neighbors together. Silence leaves a gap.'));
_s('s_olSlideWhat', 'olSlide', 3, 'recognize', _f('shotgunDoubles', '42nickel', { highlight: 'MIKE' }),
  _mc('In a slide protection, what does the line do?', [['a', 'It blocks gaps in one direction'], ['b', 'It blocks nobody'], ['c', 'It runs routes']], 'a',
    'The linemen step and block the area on one side, rather than picking a specific man.'));
_s('s_olSlideBack', 'olSlide', 4, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'MIKE' }),
  _mc('In a full slide to the right, who usually handles the rusher on the left, the side the line is not sliding toward?', [['a', 'A running back or tight end'], ['b', 'The right tackle'], ['c', 'Nobody']], 'a',
    'The back (or sometimes a tight end) takes the rusher the slide does not cover. Exact rules differ by team.'));
_s('s_olSlideKey', 'olSlide', 3, 'apply', _f('shotgunDoubles', '42nickel'),
  _tap('tapDefender', 'Tap the defender the slide call is based on.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['NB', 'Nickel'], ['FS', 'Safety']], 'MIKE',
    'Protections are counted and called from the Mike.'));
_s('s_olFalseStart', 'olDiscipline', 1, 'recognize', _f('pistolRight', null),
  _mc('A lineman moves after he is set, before the snap. What is the penalty?', [['a', 'False start'], ['b', 'Holding'], ['c', 'Nothing']], 'a',
    'Moving after being set, before the snap, is a false start. It is a five-yard penalty.'));
_s('s_olHolding', 'olDiscipline', 1, 'recognize', _f('pistolRight', null),
  _mc('A lineman grabs and pulls a defender instead of blocking him. What is the penalty?', [['a', 'Holding'], ['b', 'False start'], ['c', 'Offside']], 'a',
    'Holding is usually a ten-yard penalty. Keep your hands inside the defender’s frame.'));
_s('s_olIneligible', 'olDiscipline', 2, 'apply', _f('pistolRight', null),
  _mc('A lineman runs far downfield on a pass play. Why can that be a penalty?', [['a', 'Linemen are ineligible receivers and cannot go far past the line on a pass'], ['b', 'It is never a penalty'], ['c', 'Linemen are never allowed to run']], 'a',
    'Linemen are ineligible receivers. Rules allow only about a yard downfield before the pass is thrown.'));

LESSON_ORDER_BY_TRACK.OL = _orderWith(['l_primerOL', 'l_olDiscipline', 'l_olStance', 'l_personnel11', 'l_gaps', 'l_mike', 'l_olCovered', 'l_front43under', 'l_olPassSet', 'l_olZoneBlock', 'l_front34', 'l_olPower', 'l_olStunt', 'l_olSlide', 'l_front42nickel', 'l_front43over', 'l_techniques', 'l_formationPistol', 'l_formationI']);

/* =========================================================
   INTERIOR D-LINE (nose / 1-tech / 3-tech tackles)
   ========================================================= */
_cp('primerDL', 'D-Line Primer: What To Look For', 'DL', 'defense', 1, 'defensive tackle keys reads film study interior defensive line');
_cp('dlAlign', 'Alignment: 0, 1, 2i, 3, 4i', 'DL', 'defense', 2, 'defensive tackle alignment 1 technique 3 technique nose tackle explained');
_cp('dlGetOff', 'Get-Off, Hands & The Half-Man', 'DL', 'defense', 2, 'defensive tackle get off hands half man relationship technique');
_cp('dlGaps', 'One-Gap Or Two-Gap?', 'DL', 'defense', 3, 'defensive line one gap two gap nose tackle explained 3-4');
_cp('dlKeys', 'Keys: Guard, Pull & Back', 'DL', 'defense', 2, 'defensive tackle read guard pull trap run pass key');
_cp('dlDouble', 'Beating The Double Team', 'DL', 'defense', 3, 'defensive tackle double team technique hold ground anchor');
_cp('dlPassRush', 'Interior Pass Rush', 'DL', 'defense', 2, 'interior defensive line pass rush bull rush collapse the pocket rush lanes');
_cp('dlStunt', 'Stunts & Games', 'DL', 'defense', 3, 'defensive line stunts twist te et stunt explained gap integrity');
_cp('dlScreen', 'Draws & Screens Up The Middle', 'DL', 'defense', 3, 'defensive tackle draw screen recognition film');

_l('l_primerDL', 'primerDL', 1, 'Interior D-Line: What You’re Looking For',
  'Inside defensive linemen fight in a small space and have two main jobs: stop the run up the middle, and push the pocket on passing downs. Your day starts at the snap. Get off the ball low, get your hands on the blocker and read his movement. The guard’s first step and the path of the near back tell you run or pass, and which gap the ball is headed for.',
  ['Know your alignment and your gap.', 'Get off the ball low and fast.', 'Read the blocker: his first step shows run or pass.', 'Stop the run in your gap; push the pocket on pass.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: true, highlight: 'WDT' });
_l('l_dlAlign', 'dlAlign', 2, 'Alignment: 0, 1, 2i, 3 And 4i',
  'Inside linemen are named for where they line up. A 0-technique (the nose) is head-up on the center. A 1-technique is on the center’s outside shoulder, shading an A gap. A 2i is on the guard’s inside shoulder. A 3-technique is on the guard’s outside shoulder in the B gap, usually the most disruptive tackle in a 4-man front. A 4i is on the tackle’s inside shoulder. In an Under front the 3-technique goes to the weak side; in an Over front he goes to the strong side.',
  ['0 = head-up on the center (nose).', '1 = outside shoulder of the center (A gap).', '3 = outside shoulder of the guard (B gap).', 'Under: 3-tech to the weak side. Over: 3-tech to the strong side.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, showTech: true, highlight: 'WDT' });
_l('l_dlGetOff', 'dlGetOff', 2, 'Get-Off, Hands And The Half-Man',
  'The first one to strike usually wins. Get off the ball on the snap with your pads low, and get your hands on the blocker quickly, inside his chest. Many coaches teach the “half-man” idea: line up on one shoulder of the blocker and attack that half, so he can never get his whole body on you. Keep your eyes on the blocker, press him away from your body and shed him toward the ball. Names and fine points differ by coach.',
  ['Fire out low on the snap.', 'Hands inside, on the blocker’s chest.', 'Attack the half-man: one shoulder, not the whole body.', 'Press, shed and find the ball.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SDT' });
_l('l_dlGaps', 'dlGaps', 3, 'One-Gap Or Two-Gap?',
  'A one-gap lineman is responsible for just one gap and tries to attack it, like a 3-technique shooting the B gap. A two-gap lineman is responsible for the gaps on both sides of the blocker he faces; he controls the blocker with his hands and then moves to whichever gap the ball goes through. A 3-4 nose tackle is often a two-gapper so the linebackers behind him can run free. Whichever you are, your gap job comes first.',
  ['One-gap: attack your gap.', 'Two-gap: control the blocker, then play the gap the ball goes to.', 'Nose tackles in a 3-4 are often two-gappers.', 'Everybody must keep to his gap job.'],
  { offense: 'iFormation', defense: '34base', showGaps: true, highlight: 'NT' });
_l('l_dlKeys', 'dlKeys', 2, 'Keys: The Guard, The Pull And The Back',
  'The guard in front of you is your best key. If he fires out low, it is a run. If he sets back with high pads, it is a pass. If he blocks down on someone else and the other guard pulls, a trap or power play is coming. Check the near back too: if he heads toward you, the ball is coming your way. React to what you see, not what you expect.',
  ['Guard fires out → run.', 'Guard sets back → pass.', 'Guard pulls → trap or power is coming; close the hole.', 'Check the near back.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'WDT' });
_l('l_dlDouble', 'dlDouble', 3, 'Beating The Double Team',
  'Offenses double-team the best interior linemen. When two blockers hit you, do not spin out or turn your shoulders sideways, because that opens your gap. Stay low, keep your shoulders square, sink your hips and hold your ground. If you cannot split the double, simply refuse to be moved: a lineman who ties up two blockers keeps the linebackers free to make the tackle. If you feel the double from one side, work to the side of the blocker with the pressure.',
  ['Stay low and square.', 'Don’t spin out; you open the gap.', 'Holding two blockers frees your linebackers.', 'Work toward the pressure.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'SDT' });
_l('l_dlPassRush', 'dlPassRush', 2, 'Interior Pass Rush',
  'Inside rushers have the shortest path to the quarterback, but they also face the most help. The job is to push the pocket back so the quarterback cannot step up, with a power move like a bull rush, a swim over the blocker’s arm, or a rip underneath him. The best move depends on your blocker. Stay in your rush lane and do not all go to the same side, or the quarterback will escape through the lane that is left open.',
  ['Push the pocket back.', 'Use a move: bull rush, swim, rip.', 'Keep your lane; don’t all rush the same way.', 'Hands up if you can’t reach him.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'WDT' });
_l('l_dlStunt', 'dlStunt', 3, 'Stunts And Games',
  'A stunt (or “game”) is a planned crossing of two rushers. The first rusher crashes into a gap to pull a blocker with him and the second loops around behind into the gap he leaves. For it to work the first rusher has to take the blocker with him, and the second has to wait for the right timing and keep a tight path. If the timing is off, both rushers end up in the same place and the gap is left open. Stunt names differ from team to team.',
  ['First rusher: crash and take the blocker.', 'Second rusher: loop tight behind him.', 'Timing and lanes matter.', 'Names of stunts differ by team.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'WDT' });
_l('l_dlScreen', 'dlScreen', 3, 'Draws And Screens Up The Middle',
  'Offenses set up the pass first and then run, or let you go on purpose. If the guard sets back for a pass and then suddenly drives you upfield, it may be a draw: stop rushing and find the ball. If the guards let you go too easily and the back slides out, it may be a screen: get your hands up, stop chasing the quarterback, and find the ball. Never finish a rush without knowing where the ball is.',
  ['Pass set, then he drives you upfield → draw.', 'Blockers let you go + back slides out → screen.', 'Find the ball, then react.', 'Don’t chase a quarterback who is not holding the ball.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'SDT' });

// ---- DL scenarios ----
_s('s_dlPrimerJobs', 'primerDL', 1, 'recognize', _f('singlebackAce', '43under', { highlight: 'WDT' }),
  _mc('What are the two main jobs of an interior defensive lineman?', [['a', 'Stop the run up the middle and push the pocket on pass plays'], ['b', 'Only cover receivers'], ['c', 'Only tackle the quarterback']], 'a',
    'Inside linemen plug the run gaps and pressure the quarterback up the middle.'));
_s('s_dlPrimerKey', 'primerDL', 1, 'recognize', _f('singlebackAce', '43under', { highlight: 'WDT' }),
  _mc('What gives an interior lineman his first clue to run or pass?', [['a', 'The blocker’s first step and pad level'], ['b', 'The stadium announcer'], ['c', 'The color of the ball']], 'a',
    'The way the blocker comes off the ball shows what the play is.'));
_s('s_dlTap3', 'dlAlign', 2, 'recognize', _f('pistolRight', '43under', { showTech: true }),
  _tap('tapDefender', 'Tap the 3-technique tackle (outside shoulder of the guard).', [['WDT', 'Weak tackle'], ['SDT', 'Strong tackle'], ['SDE', 'Strong end'], ['WDE', 'Weak end']], 'WDT',
    'The 3-technique lines up on the outside shoulder of the guard. In an Under front he is on the weak side.'));
_s('s_dlTap1', 'dlAlign', 2, 'recognize', _f('pistolRight', '43over'),
  _tap('tapDefender', 'In this Over front, tap the 1-technique tackle (outside shoulder of the center).', [['WDT', 'Weak tackle'], ['SDT', 'Strong tackle'], ['SDE', 'Strong end'], ['WDE', 'Weak end']], 'WDT',
    'In an Over front the 3-technique goes to the strong side, so the 1-technique is on the weak side.'));
_s('s_dlTapNose', 'dlAlign', 2, 'recognize', _f('iFormation', '34base'),
  _tap('tapDefender', 'Tap the nose tackle (head-up on the center, a 0-technique).', [['NT', 'Nose tackle'], ['WDE', 'Weak end'], ['SDE', 'Strong end'], ['WILB', 'Inside linebacker']], 'NT',
    'The nose is the tackle in the middle, head-up on the center.'));
_s('s_dlB', 'dlAlign', 3, 'apply', _f('pistolRight', '43under', { showTech: true, highlight: 'WDT' }),
  _mc('Which gap does the 3-technique line up in?', [['a', 'The B gap, outside the guard'], ['b', 'The A gap'], ['c', 'The D gap']], 'a',
    'He is on the outside shoulder of the guard, which is the B gap.'));
_s('s_dlFirst', 'dlGetOff', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'SDT' }),
  _mc('Who usually wins the first contact on the line?', [['a', 'The one who gets off the ball first with lower pads'], ['b', 'The tallest player'], ['c', 'The one who waits']], 'a',
    'Getting off the ball first and getting your hands on him with low pads gives you the advantage.'));
_s('s_dlHalfMan', 'dlGetOff', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SDT' }),
  _mc('What is the idea of the “half-man” relationship?', [['a', 'Line up on one shoulder of the blocker so he can’t get his whole body on you'], ['b', 'Play only half the game'], ['c', 'Block half the field']], 'a',
    'Attacking one half of the blocker keeps his body from being in front of you. Terms differ by coach.'));
_s('s_dlHands', 'dlGetOff', 2, 'apply', _f('pistolRight', '43under', { highlight: 'SDT' }),
  _mc('Where should your hands go on the blocker?', [['a', 'Inside, on his chest'], ['b', 'On his facemask'], ['c', 'Around his legs']], 'a',
    'Hands inside the blocker’s frame, on his chest, give control. Grabbing the facemask is a penalty.'));
_s('s_dlTwoGap', 'dlGaps', 3, 'recognize', _f('iFormation', '34base', { showGaps: true, highlight: 'NT' }),
  _mc('A two-gap lineman is responsible for…', [['a', 'The gaps on both sides of his blocker, once he sees where the ball goes'], ['b', 'Only one gap'], ['c', 'The whole field']], 'a',
    'He controls the blocker with his hands and then plays whichever gap the ball goes through.'));
_s('s_dlOneGap', 'dlGaps', 3, 'recognize', _f('pistolRight', '43under', { showGaps: true, highlight: 'WDT' }),
  _mc('A 3-technique who attacks the B gap on every snap is playing…', [['one', 'One-gap'], ['two', 'Two-gap']], 'one',
    'He is attacking one gap, which is what a penetrating one-gap tackle does.'));
_s('s_dlNoseWhy', 'dlGaps', 4, 'apply', _f('iFormation', '34base', { highlight: 'NT' }),
  _mc('Why is a 3-4 nose tackle often a two-gap player?', [['a', 'He controls the center and holds the middle so the linebackers behind him can run free'], ['b', 'Because he is the fastest'], ['c', 'Because he must cover receivers']], 'a',
    'The nose ties up the center and the guards so the inside linebackers can make plays.'));
_s('s_dlGuardRun', 'dlKeys', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'WDT', note: 'The guard in front of you fires out low and hard.' }),
  _mc('What does that tell you?', [['run', 'Run'], ['pass', 'Pass']], 'run',
    'A guard firing out with low pads is blocking for a run.'));
_s('s_dlGuardPass', 'dlKeys', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'WDT', note: 'The guard in front of you sets back with high pads and his hands up.' }),
  _mc('What does that tell you?', [['run', 'Run'], ['pass', 'Pass']], 'pass',
    'A guard who sets back with high pads is in pass protection, so start your rush.'));
_s('s_dlPull', 'dlKeys', 3, 'apply', _f('iFormation', '43under', { highlight: 'SDT', note: 'The guard next to you blocks down and the other guard starts to pull.' }),
  _mc('What should you expect?', [['a', 'A trap or power play, so close the hole and fight the puller low'], ['b', 'A pass'], ['c', 'A punt']], 'a',
    'When a guard pulls, the run is coming through the hole he is heading toward. Stay low and close the gap.'));
_s('s_dlDoubleHold', 'dlDouble', 3, 'recognize', _f('pistolRight', '43under', { showGaps: true, highlight: 'SDT' }),
  _mc('You are double-teamed. What should you do?', [['a', 'Stay low, keep your shoulders square and hold your ground'], ['b', 'Spin out as fast as you can'], ['c', 'Fall to the ground']], 'a',
    'Staying square keeps your gap closed. Spinning out opens it.'));
_s('s_dlDoubleWhy', 'dlDouble', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SDT' }),
  _mc('Why is it valuable to hold two blockers, even if you don’t make the tackle?', [['a', 'The linebackers behind you stay free to make it'], ['b', 'It does nothing'], ['c', 'The referee gives points']], 'a',
    'A tackle who ties up two blockers keeps the linebackers free.'));
_s('s_dlSpin', 'dlDouble', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SDT' }),
  _mc('What can happen if you spin out of a double team and turn your shoulders sideways?', [['a', 'You open the gap and the runner can hit it'], ['b', 'You win the play'], ['c', 'Nothing']], 'a',
    'Turning your shoulders opens your gap, which is the one thing you must not do.'));
_s('s_dlPocket', 'dlPassRush', 2, 'recognize', _f('shotgunDoubles', '43under', { highlight: 'WDT' }),
  _mc('What is the main goal of an interior pass rusher?', [['a', 'Push the pocket back so the quarterback can’t step up'], ['b', 'Run around the end'], ['c', 'Cover a receiver']], 'a',
    'Interior pressure squeezes the quarterback and makes him throw off-balance.'),
  _p('Interior pass rush: the two tackles push the pocket straight back toward the quarterback.',
    [['WDT', [[37, 46], [41, 54], [45, 58]], 'rush'], ['SDT', [[54, 46], [52, 54], [50, 58]], 'rush'], ['LG', [[40, 57]], 'block'], ['C', [[50, 57]], 'block'], ['RG', [[60, 57]], 'block']]));
_s('s_dlLane', 'dlPassRush', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'SDT' }),
  _mc('Why must rushers keep their rush lanes?', [['a', 'If everyone goes to the same side, the quarterback escapes up the lane that is open'], ['b', 'It is a penalty not to'], ['c', 'It does not matter']], 'a',
    'Rush lanes keep the quarterback contained. A rush that collapses to one side opens the other.'));
_s('s_dlBull', 'dlPassRush', 2, 'recognize', _f('shotgunDoubles', '43under', { highlight: 'SDT' }),
  _mc('A bull rush is…', [['a', 'A power move: drive the blocker straight back into the quarterback'], ['b', 'A speed move around the tackle'], ['c', 'A kick']], 'a',
    'A bull rush uses strength to push the blocker into the quarterback’s lap.'));
_s('s_dlStuntFirst', 'dlStunt', 3, 'recognize', _f('shotgunDoubles', '43under', { highlight: 'WDT' }),
  _mc('In a stunt, what must the first rusher do?', [['a', 'Crash into a gap and pull a blocker with him'], ['b', 'Stand still'], ['c', 'Run away from the play']], 'a',
    'The first rusher takes a blocker so the looper has a clear path.'),
  _p('A stunt: the tackle crashes into the A gap and the end loops tight behind him.',
    [['WDT', [[37, 46], [40, 50], [44, 54]], 'rush'], ['WDE', [[21, 45], [24, 42], [38, 46], [44, 55]], 'rush'], ['LG', [[42, 54]], 'block'], ['LT', [[32, 55]], 'block']]));
_s('s_dlStuntTiming', 'dlStunt', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE' }),
  _mc('What goes wrong if the second rusher loops too early?', [['a', 'He runs into the first rusher and the gap is left open'], ['b', 'Nothing'], ['c', 'The play is dead']], 'a',
    'Timing is everything. If the loop is early, the two rushers collide.'));
_s('s_dlStuntNames', 'dlStunt', 3, 'apply', _f('shotgunDoubles', '43under'),
  _mc('Are stunt names the same on every team?', [['a', 'No, they differ by team and coach'], ['b', 'Yes, everywhere'], ['c', 'Only in college']], 'a',
    'The idea is universal, but the names are a team’s own.'));
_s('s_dlDraw', 'dlScreen', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'SDT', note: 'The guard sets back for a pass, then suddenly drives you upfield.' }),
  _mc('What could be coming?', [['a', 'A draw: stop rushing and find the ball'], ['b', 'A punt'], ['c', 'A quarterback sneak']], 'a',
    'Setting like a pass and then driving you past the quarterback is a draw. Find the ball.'));
_s('s_dlScreen', 'dlScreen', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'SDT', note: 'The guards let you through with almost no contact, and the running back slides out.' }),
  _mc('What could be coming?', [['a', 'A screen: get your hands up and find the ball'], ['b', 'A kneel-down'], ['c', 'A field goal']], 'a',
    'Linemen who let you go on purpose and a back sliding out is the screen picture.'));
_s('s_dlFindBall', 'dlScreen', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'SDT' }),
  _mc('Why should a pass rusher keep checking where the ball is?', [['a', 'So he doesn’t chase a quarterback who has already thrown or handed off'], ['b', 'It is a rule'], ['c', 'He should never check']], 'a',
    'A rusher who loses the ball can be beaten by draws and screens.'));

LESSON_ORDER_BY_TRACK.DL = _orderWith(['l_primerDL', 'l_gaps', 'l_techniques', 'l_dlAlign', 'l_front43under', 'l_dlGetOff', 'l_dlKeys', 'l_front43over', 'l_dlGaps', 'l_front34', 'l_dlPassRush', 'l_dlDouble', 'l_dlStunt', 'l_dlScreen', 'l_mike', 'l_strengthCall', 'l_formationPistol']);

/* =========================================================
   CORNERBACK
   ========================================================= */
_cp('primerCB', 'CB Primer: What To Look For', 'CB', 'defense', 1, 'cornerback pre snap reads film study');
_cp('cbAlign', 'Alignment: Press, Off & Leverage', 'CB', 'defense', 2, 'cornerback alignment press off coverage leverage inside outside');
_cp('cbPress', 'Press Technique: Eyes On The Hips', 'CB', 'defense', 3, 'cornerback press technique jam hips mirror film');
_cp('cbEyes', 'Eyes & Footwork: Man vs Zone', 'CB', 'defense', 2, 'cornerback backpedal eyes man zone footwork break on the ball');
_cp('cbCoverageJobs', 'Your Job In Cover 1, 2, 3 And 4', 'CB', 'defense', 3, 'cornerback responsibilities cover 1 cover 2 cover 3 cover 4 quarters');
_cp('cbRouteStem', 'Stems, Hips & Route Clues', 'CB', 'defense', 3, 'cornerback read receiver hips stem break route recognition');
_cp('cbForce', 'Run Support & The Force', 'CB', 'defense', 3, 'cornerback run support force contain tackle open field');
_cp('cbBall', 'Playing The Ball', 'CB', 'defense', 3, 'cornerback locate the ball high point interception pass interference');

_l('l_primerCB', 'primerCB', 1, 'Cornerback: What You’re Looking For',
  'A cornerback plays in the open field with little help, so he reads the picture before the snap. Check the receiver’s alignment and splits, the down and distance, and where your help is, such as a safety over the top. Know the coverage call and your job in it. At the snap, read the receiver’s release and the quarterback’s drop, then react. One bad step can mean a touchdown, so the pre-snap work matters.',
  ['Receiver’s alignment and splits.', 'Down and distance.', 'Where is my help? Is the safety inside or over the top?', 'Know your coverage job.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBL' });
_l('l_cbAlign', 'cbAlign', 2, 'Alignment: Press, Off And Leverage',
  'A cornerback can line up in press (a yard or so in front of the receiver, ready to jam him at the line) or in off coverage (five to seven yards back, giving a cushion to see the whole route). Press helps disrupt timing on short routes, while off coverage helps prevent big plays. Leverage means which side of the receiver you line up on. It depends on where your help is: you usually take the side that sends the receiver toward your help. The coverage call decides, so follow your own coach’s rules.',
  ['Press: close to the receiver, ready to jam.', 'Off: a cushion, to keep everything in front.', 'Leverage depends on where your help is.', 'The coverage call decides.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBL', overrides: { CBL: { x: 5, y: 46 } }, note: 'The left corner is playing press coverage.' });
_l('l_cbPress', 'cbPress', 3, 'Press Technique: Eyes On The Hips',
  'In press coverage, keep your eyes on the receiver’s hips or belt, because the hips go where the body goes, while the head and shoulders can fake. Stay square, keep your feet moving, and use your hands inside his frame in a quick jam at the line. Stay balanced and mirror his movement without grabbing him. After about five yards, contact with a receiver before the ball is thrown can draw a penalty, so hands off as the route develops. Rules differ a little by level.',
  ['Eyes on the hips, not the head or shoulders.', 'Stay square and balanced.', 'Quick jam with hands inside the frame.', 'Don’t keep your hands on him downfield.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBL', overrides: { CBL: { x: 5, y: 46 } } });
_l('l_cbEyes', 'cbEyes', 2, 'Eyes And Footwork: Man Versus Zone',
  'In man coverage your eyes are on your receiver, especially his hips. In zone coverage your eyes are on the quarterback, while you see the receivers who enter your area. In both, use a low, balanced backpedal with short, quick steps, and do not cross your feet. When the quarterback throws, plant and break on the ball. A cornerback who stays square and low can change direction faster.',
  ['Man: eyes on the receiver.', 'Zone: eyes on the quarterback.', 'Low, balanced backpedal; don’t cross your feet.', 'Plant and drive to the ball.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBR' });
_l('l_cbCoverageJobs', 'cbCoverageJobs', 3, 'Your Job In Cover 1, 2, 3 And 4',
  'The corner’s job changes with the coverage. In Cover 1 he covers a receiver man-to-man with a safety deep behind him. In Cover 2 he jams the receiver at the line and then plays the flat (the short outside area), while two safeties split the deep field. In Cover 3 he drops to cover the deep outside third of the field, with a safety in the middle. In Cover 4 (quarters) he covers the deep outside quarter and matches the receiver’s route. Teams add variations, so learn your own checks.',
  ['Cover 1: man-to-man, safety deep behind.', 'Cover 2: jam, then play the flat.', 'Cover 3: deep outside third.', 'Cover 4: deep outside quarter, matching the receiver.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBL', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } });
_l('l_cbRouteStem', 'cbRouteStem', 3, 'Stems, Hips And Route Clues',
  'The stem is the path a receiver runs before his break. Watch his hips: receivers must sink their hips and shorten their steps to make a hard cut, so you can often see the break coming. A receiver who suddenly slows down or sinks is about to cut. A receiver who looks back at the quarterback is about to turn for the ball. Against a speed release, keep your cushion and stay on top. These are tendencies, not guarantees, so keep your eyes on the hips and stay balanced.',
  ['Stem = the path before the break.', 'Hips sink and steps shorten before a hard cut.', 'Receiver looks back = the ball is coming.', 'Never let him get behind you.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBL' });
_l('l_cbForce', 'cbForce', 3, 'Run Support And The Force',
  'Cornerbacks also stop the run. A receiver who starts blocking you at the snap, with a stalk block, is a clue that it is a run. When the run comes outside, someone has the “force”: he meets the ball carrier at the edge and forces him back inside to the help. In some defenses the corner has force, in others a safety does, so know your own. When you tackle in the open field, keep your head up, break down, bring your feet and wrap up the runner.',
  ['A receiver blocking you = run.', 'Force: meet the runner at the edge and turn him inside.', 'Who has force depends on the call.', 'Tackle with your head up and wrap up.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'CBR' });
_l('l_cbBall', 'cbBall', 3, 'Playing The Ball',
  'When the ball is in the air the corner has to find it. In man coverage, turn your head to locate the ball at the right moment, usually when the receiver looks back, and then play the ball at its highest point, trying to break up or intercept the pass. Grabbing or pushing a receiver before the ball arrives, when you are not playing the ball, can be pass interference. If you intercept, secure the ball and become a ball carrier.',
  ['Locate the ball at the right moment.', 'Play the ball at its highest point.', 'Don’t grab: that can be pass interference.', 'After the interception, secure it and run.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'CBR' });

// ---- CB scenarios ----
_s('s_cbPrimerSee', 'primerCB', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('What does a cornerback check before the snap?', [['a', 'The receiver’s alignment, the down and distance, and where his help is'], ['b', 'Only the scoreboard'], ['c', 'Nothing']], 'a',
    'The pre-snap picture tells the corner how to play the receiver and where to look.'));
_s('s_cbPrimerHelp', 'primerCB', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('Why does a corner need to know where his help is?', [['a', 'It tells him how to play the receiver and which route to protect against'], ['b', 'It doesn’t matter'], ['c', 'It tells him when to rest']], 'a',
    'Help changes his leverage. If the safety is over the top, he can play differently than if he is alone.'));
_s('s_cbTapPress', 'cbAlign', 2, 'recognize', _f(_TRIPS, '42nickel', { overrides: { CBL: { x: 5, y: 46 } } }),
  _tap('tapDefender', 'Tap the cornerback playing press coverage.', [['CBL', 'Left corner'], ['CBR', 'Right corner'], ['SS', 'Strong safety'], ['NB', 'Nickel']], 'CBL',
    'The left corner is right up on the receiver at the line, ready to jam. The right corner is playing off.'));
_s('s_cbOff', 'cbAlign', 2, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('This corner is lined up five to seven yards back. What is that called?', [['off', 'Off coverage'], ['press', 'Press coverage'], ['blitz', 'A blitz']], 'off',
    'Off coverage gives the corner a cushion so he can see the whole route and stay on top.'));
_s('s_cbOffWhy', 'cbAlign', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('Why might a corner play off on 3rd and long?', [['a', 'To keep everything in front of him and avoid giving up the big play'], ['b', 'So the receiver can run free'], ['c', 'Because he is tired']], 'a',
    'Off coverage trades a short throw for protection against the deep ball.'));
_s('s_cbLeverage', 'cbAlign', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('Leverage means…', [['a', 'Which side of the receiver you line up on, chosen to send him toward your help'], ['b', 'How strong you are'], ['c', 'How fast you are']], 'a',
    'Leverage is about positioning relative to the receiver and your help. The call tells you which side to take.'));
_s('s_cbHips', 'cbPress', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBL', overrides: { CBL: { x: 5, y: 46 } } }),
  _mc('In press coverage where do your eyes go?', [['a', 'The receiver’s hips or belt'], ['b', 'His helmet'], ['c', 'The crowd']], 'a',
    'The hips go where the body goes. Head and shoulders can fake you out.'));
_s('s_cbJam', 'cbPress', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL', overrides: { CBL: { x: 5, y: 46 } } }),
  _mc('How should the jam at the line be?', [['a', 'A quick strike with both hands inside his frame, staying balanced'], ['b', 'Grabbing his jersey and holding on'], ['c', 'Standing still']], 'a',
    'A quick, balanced jam at the line is legal. Holding on is not.'));
_s('s_cbFive', 'cbPress', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('Can a corner keep his hands on a receiver deep downfield before the ball is thrown?', [['a', 'No, contact beyond about five yards can draw a penalty'], ['b', 'Yes, always'], ['c', 'Only on Fridays']], 'a',
    'After the first few yards the contact is limited. Exact rules vary a little by level.'));
_s('s_cbManEyes', 'cbEyes', 2, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('In man coverage, where are your eyes?', [['a', 'On the receiver, especially his hips'], ['b', 'On the quarterback only'], ['c', 'On the ball always']], 'a',
    'In man you follow the receiver. You turn to the ball only at the right time.'));
_s('s_cbZoneEyes', 'cbEyes', 2, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('In zone coverage, where are your eyes?', [['a', 'On the quarterback, while you see the receivers in your area'], ['b', 'On one receiver only'], ['c', 'On the sideline']], 'a',
    'In zone you cover an area, so the quarterback’s eyes tell you where the ball goes.'));
_s('s_cbBackpedal', 'cbEyes', 2, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('What does a good backpedal look like?', [['a', 'Low, balanced, with short quick steps and no crossing of the feet'], ['b', 'Tall and fast with crossed feet'], ['c', 'Hopping']], 'a',
    'Short quick steps and a low base let you plant and drive on the ball.'));
_s('s_cbCover2', 'cbCoverageJobs', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBL', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('In Cover 2, what is the corner’s job?', [['a', 'Jam the receiver, then play the flat'], ['b', 'Cover the deep half'], ['c', 'Rush the passer']], 'a',
    'The corners take the short outside area while the two safeties split the deep halves.'));
_s('s_cbCover3', 'cbCoverageJobs', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('In Cover 3, what is the corner’s job?', [['a', 'Cover the deep outside third'], ['b', 'Cover the flat'], ['c', 'Cover the deep middle']], 'a',
    'Cover 3 has three deep defenders: two corners on the outside thirds and a safety in the middle.'),
  _p('Cover 3: the corners drop to the deep outside thirds and the free safety takes the deep middle.',
    [['CBL', [[5, 22]], 'cover'], ['CBR', [[95, 22]], 'cover'], ['FS', [[50, 14]], 'cover']]));
_s('s_cbCover1', 'cbCoverageJobs', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('In Cover 1, what does the corner do?', [['a', 'Covers his receiver man-to-man with a safety deep behind'], ['b', 'Covers a deep third'], ['c', 'Rushes']], 'a',
    'Cover 1 is man coverage with one safety deep in the middle as help.'));
_s('s_cbCover4', 'cbCoverageJobs', 4, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('In Cover 4 (quarters), what does the corner cover?', [['a', 'The deep outside quarter, matching the receiver’s route'], ['b', 'The flat'], ['c', 'The deep middle']], 'a',
    'The field is divided into four deep zones, and the corners take the outside two while the safeties take the inside two.'));
_s('s_cbStem', 'cbRouteStem', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('What is the stem of a route?', [['a', 'The path the receiver runs before his break'], ['b', 'The catch'], ['c', 'The huddle']], 'a',
    'The stem is the run up to the break. Watching it tells the corner a lot.'));
_s('s_cbHipSink', 'cbRouteStem', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('A receiver suddenly sinks his hips and shortens his steps. What is he likely about to do?', [['a', 'Break sharply, making a cut'], ['b', 'Run a go route'], ['c', 'Fall down']], 'a',
    'A hard cut needs a lower hip position and shorter steps, so you can often see the break coming.'));
_s('s_cbLookBack', 'cbRouteStem', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBL' }),
  _mc('The receiver turns his head back to the quarterback. What does it often mean?', [['a', 'The ball is coming, so find it'], ['b', 'The play is over'], ['c', 'He is lost']], 'a',
    'The receiver looks for the ball at the end of his route, which is a cue for the corner to locate it.'));
_s('s_cbStalk', 'cbForce', 3, 'recognize', _f('pistolRight', '43under', { highlight: 'CBR', note: 'The receiver in front of you starts to stalk-block you at the snap.' }),
  _mc('What does a receiver blocking you at the snap usually mean?', [['run', 'A run'], ['pass', 'A deep pass']], 'run',
    'A receiver who blocks is a clue to the run. Fight off the block and find the ball.'));
_s('s_cbForceWhat', 'cbForce', 3, 'apply', _f('pistolRight', '43under', { highlight: 'CBR' }),
  _mc('What is the job of the player with force?', [['a', 'Meet the runner at the edge and turn him back inside toward the help'], ['b', 'Let the runner go outside'], ['c', 'Cover the quarterback']], 'a',
    'The force player keeps the ball from getting outside. Who has force depends on the coverage.'));
_s('s_cbTackle', 'cbForce', 2, 'apply', _f('pistolRight', '43under', { highlight: 'CBR' }),
  _mc('Which is the safest way to make an open-field tackle?', [['a', 'Head up, break down, bring your feet and wrap up'], ['b', 'Lower your head and ram him'], ['c', 'Dive at his ankles']], 'a',
    'Keeping your head up is both safer and more effective. Wrap up and drive your feet.'));
_s('s_cbLocate', 'cbBall', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('In man coverage, when do you turn to look for the ball?', [['a', 'At the right moment, often when the receiver looks back for it'], ['b', 'At the snap'], ['c', 'Never']], 'a',
    'Turning too early loses the receiver, and too late means you can’t play the ball.'));
_s('s_cbPI', 'cbBall', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('You grab a receiver before the ball arrives and you are not playing the ball. What can this be?', [['a', 'Pass interference'], ['b', 'A great play'], ['c', 'Nothing']], 'a',
    'Contacting a receiver who is trying to catch a pass, when you are not playing the ball, can be pass interference.'));
_s('s_cbPick', 'cbBall', 2, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'CBR' }),
  _mc('You intercept a pass. What next?', [['a', 'Secure the ball, then become a ball carrier'], ['b', 'Throw it away'], ['c', 'Hand it to the referee']], 'a',
    'After the catch the defender becomes the runner. Secure the ball first.'));

LESSON_ORDER_BY_TRACK.CB = _orderWith(['l_primerCB', 'l_personnel11', 'l_cbAlign', 'l_strengthCall', 'l_cbEyes', 'l_safetyShell', 'l_cbPress', 'l_cbCoverageJobs', 'l_nickel', 'l_cbRouteStem', 'l_cbForce', 'l_cbBall', 'l_formationShotgun', 'l_formationDoubles', 'l_front42nickel']);

/* =========================================================
   SAFETY
   ========================================================= */
_cp('primerS', 'Safety Primer: What To Look For', 'S', 'defense', 1, 'safety pre snap reads film study defensive back');
_cp('sDisguise', 'Disguise: Show One Look, Play Another', 'S', 'defense', 3, 'safety disguise coverage rotation pre snap two high one high');
_cp('sCoverages', 'Safety Jobs In Cover 1, 2, 3 And 4', 'S', 'defense', 3, 'safety responsibilities cover 1 cover 2 cover 3 cover 4 quarters deep half');
_cp('sRead', 'Reads: Eyes, #2 And Depth', 'S', 'defense', 3, 'safety reads quarterback eyes number two receiver quarters match');
_cp('sRun', 'Run Support: The Alley', 'S', 'defense', 3, 'safety run support alley fit tackling film');
_cp('sPlayAction', 'Play-Action: Stay On Top', 'S', 'defense', 3, 'safety play action discipline stay on top deep ball film');
_cp('sMotion', 'Motion, Shifts & Communication', 'S', 'defense', 2, 'safety communication motion shift strength call defensive back');
_cp('sSituation', 'Situations: Third Down, Goal Line, Two-Minute', 'S', 'defense', 3, 'safety situational football goal line third and long two minute defense');

_l('l_primerS', 'primerS', 1, 'Safety: What You’re Looking For',
  'The safeties see the whole field, so they are the defense’s last line and its voice. Before the snap, look at the formation and personnel, the receivers’ alignment, and the backfield, then communicate the strength and any motion. After the snap, read the line and the quarterback’s eyes, play your coverage job, and be ready to come downhill against the run. A safety must never let the ball get behind him.',
  ['Read the formation and the personnel.', 'Communicate strength and motion.', 'Read the line, the back and the QB’s eyes.', 'Nothing over your head.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS' });
_l('l_sDisguise', 'sDisguise', 3, 'Disguise: Show One Look, Play Another',
  'Quarterbacks read the safeties before the snap, so a smart defense gives them a false picture. A disguise shows one shell, such as two safeties deep, and then rotates at the snap into another, such as one deep and one down. The idea is to make the quarterback guess wrong. Disguise only works if the safeties get to their real spots on time and stay disciplined, so it needs practice and clear communication.',
  ['Show 2-high, play 1-high (or the reverse).', 'Move at the snap, not early.', 'Get to your real spot on time.', 'Talk to your teammates.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'SS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } }, note: 'A 2-high shell before the snap.' });
_l('l_sCoverages', 'sCoverages', 3, 'Safety Jobs In Cover 1, 2, 3 And 4',
  'The safety’s job changes with the coverage. In Cover 2 each of the two safeties covers a deep half of the field. In Cover 3 the free safety plays the deep middle third. In Cover 4 (quarters) the two safeties cover the inside deep quarters, and often match the second receiver (#2) if he runs vertical. In Cover 1 one safety plays deep in the middle as help while the others cover man-to-man. Free safety and strong safety are the usual names, and the strong safety is typically on the tight end’s side.',
  ['Cover 2: each safety has a deep half.', 'Cover 3: free safety has the deep middle third.', 'Cover 4: each safety has a deep inside quarter.', 'Cover 1: one safety deep as help.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } });
_l('l_sRead', 'sRead', 3, 'Reads: Eyes, #2 And Depth',
  'A safety’s first read is the offensive line and the backfield, which tell him run or pass. If it is a pass, he reads the quarterback’s eyes and keeps his depth: the deepest receiver comes first and nothing may go over his head. In quarters coverage many teams teach reading the second receiver (#2, counting from the sideline): if #2 runs vertical the safety covers him; if #2 breaks short, the safety is free to help elsewhere. The details differ by team, so learn your own.',
  ['Line and back first: run or pass?', 'If pass: depth, then the QB’s eyes.', 'Nothing over your head.', 'Quarters: read #2.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS' });
_l('l_sRun', 'sRun', 3, 'Run Support: The Alley',
  'When a safety reads run, he comes downhill. The “alley” is the lane between the defensive line and the sideline where a runner often tries to break free, and the safety fills it. He is often the last line of defense, so he needs a leveraged angle: he stays inside-out on the runner so he can’t cut back, he breaks down before the tackle and he doesn’t dive at the legs. Then he wraps up and drives his feet.',
  ['Read run, then come downhill.', 'Fill the alley.', 'Keep your leverage and break down.', 'Wrap up, drive your feet.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SS', overrides: { SS: { x: 68, y: 33 } } });
_l('l_sPlayAction', 'sPlayAction', 3, 'Play-Action: Stay On Top',
  'Play-action uses a run fake to freeze the defense before a pass. A safety who bites hard on the fake takes himself out of position for the deep routes. Read the offensive line: if the linemen fire out low it is a run, and if they set back after the fake it is play-action. Honor the run fit if you are asked to, but keep your eyes up and keep your depth. The deep ball is worth more than a yard of run support.',
  ['Linemen firing out = run; linemen setting back after a fake = pass.', 'Don’t take extra steps toward the fake.', 'Keep your depth.', 'The deep ball beats you most.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'FS' });
_l('l_sMotion', 'sMotion', 2, 'Motion, Shifts And Communication',
  'Offenses use motion and shifts to change the formation just before the snap. When a tight end or receiver motions to the other side, the strength of the formation can change, and the defense has to adjust. The safeties see the whole field, so they communicate: they call the strength, tell teammates about motion, and check the coverage if needed. Clear, loud, short calls keep everyone on the same page.',
  ['Motion can change the strength.', 'Call the strength and the motion.', 'Check coverage if the formation changes.', 'Short, loud calls.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SS', note: 'The tight end can motion to the other side before the snap.' });
_l('l_sSituation', 'sSituation', 3, 'Third Down, Goal Line And Two-Minute',
  'Situations change a safety’s job. On third and long, keep everything in front of you and tackle the receiver short of the first-down marker. Near the goal line there is little room behind the defense, so safeties come down to stop the run and cover tight. In a two-minute drill the offense wants the sideline and chunk plays, so stay deep, tackle inbounds and do not let the ball get behind you. Always know the down, the distance, the clock and the score.',
  ['3rd & long: keep the play in front; tackle short of the sticks.', 'Goal line: come down and stop the run.', 'Two-minute: protect the deep ball and the sidelines.', 'Know the down, distance, clock and score.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS' });

// ---- Safety scenarios ----
_s('s_sPrimerJobs', 'primerS', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('What are the two main jobs of a safety?', [['a', 'Cover the deep part of the field and support the run'], ['b', 'Only rush the passer'], ['c', 'Only kick']], 'a',
    'Safeties are the deep help in pass coverage and also come downhill against the run.'));
_s('s_sPrimerOver', 'primerS', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('What is the safety’s first rule?', [['a', 'Nothing goes over his head'], ['b', 'Always blitz'], ['c', 'Always cover the tight end']], 'a',
    'A ball thrown over a safety’s head is a big play or a touchdown, so he protects the deep field first.'));
_s('s_sDisguise', 'sDisguise', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('What is disguising a coverage?', [['a', 'Showing one look before the snap and playing another at the snap'], ['b', 'Hiding from the referee'], ['c', 'Changing jerseys']], 'a',
    'The defense hides its real coverage from the quarterback until the snap.'),
  _p('Disguise: both safeties show deep, then at the snap one drops down and the other takes the deep middle.',
    [['SS', [[67, 14], [72, 28]], 'cover'], ['FS', [[33, 14], [50, 12]], 'cover']]));
_s('s_sDisguiseWhy', 'sDisguise', 3, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('Why do defenses disguise coverages?', [['a', 'So the quarterback guesses wrong from his pre-snap read'], ['b', 'To confuse their own players'], ['c', 'Because it’s required']], 'a',
    'A quarterback who reads the shell wrong may throw into the real coverage.'));
_s('s_sDisguiseTime', 'sDisguise', 4, 'apply', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('When should a safety move to his real spot in a disguise?', [['a', 'At the snap, not early'], ['b', 'Before the huddle'], ['c', 'Whenever he wants']], 'a',
    'Moving early gives the disguise away. Moving late means you aren’t in position.'));
_s('s_sCover2', 'sCoverages', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('In Cover 2, what does each safety cover?', [['half', 'A deep half of the field'], ['third', 'A deep third'], ['man', 'One receiver man-to-man']], 'half',
    'Cover 2 splits the deep field into two halves, one for each safety.'),
  _p('Cover 2: each safety covers a deep half of the field.', [['FS', [[30, 13]], 'cover'], ['SS', [[70, 13]], 'cover']]));
_s('s_sCover3', 'sCoverages', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('In Cover 3, what does the free safety cover?', [['third', 'The deep middle third'], ['half', 'A deep half'], ['flat', 'The flat']], 'third',
    'In Cover 3 the free safety takes the deep middle third while the corners take the outside thirds.'));
_s('s_sCover4', 'sCoverages', 4, 'apply', _f(_TRIPS, '42nickel', { highlight: 'SS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('In Cover 4 (quarters), what does a safety cover?', [['a', 'A deep inside quarter of the field, often matching #2 if he goes vertical'], ['b', 'The flat'], ['c', 'The entire deep field']], 'a',
    'The field has four deep zones, with the two safeties in the middle ones.'));
_s('s_sCover1', 'sCoverages', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'FS', overrides: { FS: { x: 50, y: 12 }, SS: { x: 72, y: 32 } } }),
  _mc('In Cover 1, what does the single deep safety do?', [['a', 'Plays deep in the middle as help for the man-to-man defenders'], ['b', 'Covers the flat'], ['c', 'Rushes the passer']], 'a',
    'Cover 1 is man coverage with one safety deep as a safety net.'));
_s('s_sLineFirst', 'sRead', 3, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('What does a safety read first after the snap?', [['a', 'The line and the backfield, to know run or pass'], ['b', 'The sideline'], ['c', 'The crowd']], 'a',
    'The line and the backs tell him if it is a run or a pass before he reacts.'));
_s('s_sNumber2', 'sRead', 4, 'apply', _f(_TRIPS, '42nickel', { highlight: 'SS', overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('In quarters coverage, a safety reads #2 (the second receiver from the sideline). If #2 runs vertical, what does he usually do?', [['a', 'Covers him'], ['b', 'Ignores him'], ['c', 'Blitzes']], 'a',
    'Many teams teach quarters this way. If #2 breaks short, the safety is free to help elsewhere. The details vary by team.'));
_s('s_sDepth', 'sRead', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'FS' }),
  _mc('Why does a deep safety keep his depth until the ball is thrown?', [['a', 'So no receiver can get behind him'], ['b', 'To be farther from the play'], ['c', 'To rest']], 'a',
    'The deep safety’s job is to keep everything in front of him.'));
_s('s_sAlley', 'sRun', 3, 'recognize', _f('pistolRight', '43under', { highlight: 'SS', overrides: { SS: { x: 68, y: 33 } } }),
  _mc('What is the alley?', [['a', 'The lane between the defensive line and the sideline where a runner may try to escape'], ['b', 'A part of the stadium'], ['c', 'The huddle']], 'a',
    'The alley is a running lane outside the tackles. A safety fills it as the last line of defense.'),
  _p('The safety reads run and fills the alley, keeping his leverage on the ball carrier.', [['SS', [[68, 33], [72, 42]], 'cover'], ['RB', [[50, 66], [60, 56], [68, 44]], 'run']], [[50, 58], [50, 66], [60, 56]]));
_s('s_sTapRun', 'sRun', 3, 'apply', _f('pistolRight', '43under', { overrides: { SS: { x: 68, y: 33 } } }),
  _tap('tapDefender', 'Tap the safety who has stepped down into run support.', [['FS', 'Free safety'], ['SS', 'Strong safety'], ['MIKE', 'Mike'], ['CBR', 'Corner']], 'SS',
    'The strong safety has moved down toward the line, which is the run-support position. The free safety stays deep.'));
_s('s_sTackleLev', 'sRun', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SS' }),
  _mc('How should a safety approach a runner in the open field?', [['a', 'Keep leverage, break down, then wrap up and drive the feet'], ['b', 'Dive at the legs from far away'], ['c', 'Run past him']], 'a',
    'A controlled approach prevents the cutback and the missed tackle.'));
_s('s_sPABite', 'sPlayAction', 3, 'recognize', _f('singlebackAce', '43under', { highlight: 'FS', note: 'The running back fakes a handoff and the quarterback drops back.' }),
  _mc('What happens if the deep safety bites hard on the run fake?', [['a', 'He is out of position and the deep route can get behind him'], ['b', 'Nothing'], ['c', 'He gets a penalty']], 'a',
    'The fake only works if the defense bites. Stay on top.'),
  _p('Play-action: the back fakes and the QB drops. The safety keeps his depth as the tight end runs a seam.', [['RB', [[50, 66], [55, 56]], 'run'], ['QB', [[50, 63]], 'route'], ['TE', [[78, 40], [66, 24]], 'route'], ['FS', [[50, 17], [60, 18]], 'cover']], [[50, 57], [50, 63]]));
_s('s_sPALine', 'sPlayAction', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'FS', note: 'The linemen fire out like a run, then the quarterback fakes the handoff and the guards set back.' }),
  _mc('What does it mean when the linemen set back after a run fake?', [['a', 'It is probably play-action, so stay on top'], ['b', 'A kneel-down'], ['c', 'A field goal']], 'a',
    'The line’s pass set after the fake is the sign of play-action.'));
_s('s_sPAWhy', 'sPlayAction', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'FS' }),
  _mc('Why is the deep ball worth more than a yard of run support?', [['a', 'A deep pass can score or gain many yards at once'], ['b', 'It is not'], ['c', 'Safeties never defend the run']], 'a',
    'A single bad step on a deep route can cost a touchdown.'));
_s('s_sMotionStrength', 'sMotion', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'SS', note: 'The tight end motions across the formation to the other side.' }),
  _mc('A tight end motions to the other side before the snap. What can change?', [['a', 'The strength of the formation, so the defense must adjust'], ['b', 'Nothing'], ['c', 'The yard line']], 'a',
    'Moving the tight end moves the strength, and the defense may re-align or check coverage.'));
_s('s_sCall', 'sMotion', 2, 'apply', _f('pistolRight', '43under', { highlight: 'FS' }),
  _mc('Why do safeties make calls before the snap?', [['a', 'They see the whole field and can tell teammates the strength, motion and checks'], ['b', 'They are the biggest players'], ['c', 'It is a rule']], 'a',
    'Safeties are in the best place to see the picture and tell everyone what the offense is doing.'));
_s('s_sCallStyle', 'sMotion', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'FS' }),
  _mc('How should a safety make a call?', [['a', 'Short, loud and clear'], ['b', 'Quiet and long'], ['c', 'Only with hand signals']], 'a',
    'A crowd can be loud. Teammates need a short, clear call.'));
_s('s_sThirdLong', 'sSituation', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'FS', note: 'It is 3rd and 12.' }),
  _mc('On 3rd and long, where should the defense tackle the receiver after a catch?', [['a', 'Short of the first-down marker'], ['b', 'Past the first-down marker'], ['c', 'It doesn’t matter']], 'a',
    'A tackle short of the marker forces a punt. Keep everything in front and rally to the ball.'));
_s('s_sGoalLine', 'sSituation', 3, 'apply', _f('tightEndHeavy', '43over', { highlight: 'SS', note: 'The offense is at your 2-yard line.' }),
  _mc('Near your own goal line, what do safeties do against the run?', [['a', 'Come down close to the line to stop it'], ['b', 'Stay 20 yards deep'], ['c', 'Leave the field']], 'a',
    'There is little room behind the defense, so everyone helps against the run.'));
_s('s_sTwoMinute', 'sSituation', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'FS', note: 'Two minutes left in the half.' }),
  _mc('In a two-minute drill, what does the defense worry about most?', [['a', 'Big plays deep and the sideline throws that stop the clock'], ['b', 'Only the run'], ['c', 'The kicker']], 'a',
    'The offense wants chunk plays and to stop the clock. Stay on top, and tackle inbounds when you can.'));

LESSON_ORDER_BY_TRACK.S = _orderWith(['l_primerS', 'l_safetyShell', 'l_personnel11', 'l_strengthCall', 'l_sMotion', 'l_mike', 'l_sCoverages', 'l_sRead', 'l_front42nickel', 'l_sDisguise', 'l_nickel', 'l_sRun', 'l_front43under', 'l_sPlayAction', 'l_sSituation', 'l_formationTEHeavy', 'l_formationDoubles']);

/* ---- Rebuild the things football-data.js computed before these existed ---- */
LESSON_ORDER_BY_TRACK.ALL = (function () {
  const seen = {}, out = [];
  ['l_primerRB', 'l_primerEDGE', 'l_primerLB', 'l_primerQB', 'l_primerWR', 'l_primerTE', 'l_primerOL', 'l_primerDL', 'l_primerCB', 'l_primerS']
    .concat(_FOUNDATION, LESSON_ORDER_BY_TRACK.RB, LESSON_ORDER_BY_TRACK.EDGE, LESSON_ORDER_BY_TRACK.LB, LESSON_ORDER_BY_TRACK.QB, LESSON_ORDER_BY_TRACK.WR, LESSON_ORDER_BY_TRACK.TE, LESSON_ORDER_BY_TRACK.OL, LESSON_ORDER_BY_TRACK.DL, LESSON_ORDER_BY_TRACK.CB, LESSON_ORDER_BY_TRACK.S)
    .forEach(id => { if (!seen[id] && LESSONS[id]) { seen[id] = true; out.push(id); } });
  return out;
})();
SCENARIOS_BY_STAGE.recognize.length = 0; SCENARIOS_BY_STAGE.apply.length = 0; SCENARIOS_BY_STAGE.test.length = 0;
Object.keys(SCENARIOS).forEach(id => {
  const st = SCENARIOS[id].stage;
  if (SCENARIOS_BY_STAGE[st]) SCENARIOS_BY_STAGE[st].push(id);
  SCENARIOS_BY_STAGE.test.push(id);
});
Object.assign(POSITIONS, {
  QB: { label: 'Quarterback' }, WR: { label: 'Wide Receiver' }, TE: { label: 'Tight End' }, OL: { label: 'Offensive Line' },
  DL: { label: 'Interior D-Line' }, CB: { label: 'Cornerback' }, S: { label: 'Safety' }
});
