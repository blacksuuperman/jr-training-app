/* =========================================================
   FOOTBALL CONTENT DATA — Jr Level 13 Film Room (v16)
   =========================================================
   This file is PURE football content: formations, fronts, gaps,
   concepts, lessons, and scenarios. No UI code, no app logic, no
   reference to `state`/`save`/`render`. A coach (or anyone checking
   football accuracy) can review or correct THIS file without reading
   a single line of application code.

   Coordinates are on a normalized 0-100 by 0-100 grid around the line
   of scrimmage (y=50). Offense lines up below the LOS (y>50), defense
   above it (y<50), x runs left(0) to right(100) from the offense's
   point of view. Diagrams are teaching sketches, not to scale.

   ACCURACY NOTES (for a coach reviewing this file)
   - Technique numbers (0,1,2i,3,4i,5,6,7,9), gap letters, and the
     Over/Under front definitions were checked against published coaching
     glossaries. Linebacker flow-reading terms (tight / full / fast /
     split flow) follow USA Football's published teaching. Edge-rusher
     "keys" follow standard tackle-key / triangle-read teaching.
   - Where the real answer varies by coach or system (aiming points,
     exact depths, wing/personnel labels) the text says so rather than
     pretending there is one rule. Defender depths and splits are
     illustrative.
   - Nothing here claims to be a specific team's playbook.
   - Film links are SEARCH links, not hosted footage — see FILM below.
   ========================================================= */

const POSITIONS = {
  RB:   { label: 'Running Back' },
  EDGE: { label: 'EDGE / Defensive End' },
  LB:   { label: 'Linebacker' }
};

// Study tracks shown in the Film Room. 'ALL' mixes every track.
const TRACKS = {
  RB:   { id: 'RB',   label: 'Running Back',  short: 'RB',   icon: '🏃' },
  EDGE: { id: 'EDGE', label: 'Defensive End / EDGE', short: 'EDGE', icon: '💥' },
  LB:   { id: 'LB',   label: 'Linebacker (Mike / Will)', short: 'LB', icon: '🛡️' },
  ALL:  { id: 'ALL',  label: 'Mix Everything', short: 'Mix', icon: '🔀' }
};

/* ---------- Offensive line (same in every formation) ---------- */
const OL_LINE = [
  { id: 'LT', label: 'LT', x: 30, y: 52, group: 'OL' },
  { id: 'LG', label: 'LG', x: 40, y: 52, group: 'OL' },
  { id: 'C',  label: 'C',  x: 50, y: 52, group: 'OL' },
  { id: 'RG', label: 'RG', x: 60, y: 52, group: 'OL' },
  { id: 'RT', label: 'RT', x: 70, y: 52, group: 'OL' }
];
function sk(id, label, x, y){ return { id: id, label: label, x: x, y: y, group: 'skill' }; }

/* ---------- OFFENSIVE FORMATIONS ----------
   meta.* tells the defensive-alignment generator what the defense is
   facing: which sides have an attached tight end, where the wide and
   slot receivers are, and the strong side. */
const FORMATIONS = {
  shotgunTripsRight: {
    id: 'shotgunTripsRight', name: 'Shotgun, Trips Right', personnel: '11',
    players: OL_LINE.concat([
      sk('QB','QB',50,60), sk('RB','RB',44,64),
      sk('X','X',5,51), sk('TE','TE',78,52), sk('Z','Z',85,55), sk('Y','Y',95,51)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: null, slotRight: 85 },
    description: 'QB set back in shotgun depth, RB offset to his left, three receivers (TE + slot + wide) to the right, one isolated wide receiver left.'
  },
  shotgunDoubles: {
    id: 'shotgunDoubles', name: 'Shotgun, Doubles (2x2)', personnel: '10',
    players: OL_LINE.concat([
      sk('QB','QB',50,60), sk('RB','RB',56,64),
      sk('X','X',5,51), sk('H','H',17,55), sk('S','S',83,55), sk('Z','Z',95,51)
    ]),
    meta: { strong: 'right', balanced: true, teRight: false, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: 17, slotRight: 83 },
    description: 'Four wide receivers — two on each side, one wide and one in the slot — with the RB beside the QB. No tight end, so this is 10 Personnel. The formation is balanced, so the defense picks its own "strength".'
  },
  pistolRight: {
    id: 'pistolRight', name: 'Pistol, Right', personnel: '11',
    players: OL_LINE.concat([
      sk('QB','QB',50,58), sk('RB','RB',50,66),
      sk('X','X',5,51), sk('H','H',18,55), sk('TE','TE',78,52), sk('Z','Z',95,51)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: 18, slotRight: null },
    description: 'The QB is a few yards back — closer than regular shotgun — and the RB is lined up directly behind him instead of beside him. Tight end right, wide receiver and slot receiver left.'
  },
  singlebackAce: {
    id: 'singlebackAce', name: 'Singleback, Ace', personnel: '12',
    players: OL_LINE.concat([
      sk('QB','QB',50,57), sk('RB','RB',50,66),
      sk('X','X',5,51), sk('TE2','TE',22,52), sk('TE','TE',78,52), sk('Z','Z',95,51)
    ]),
    meta: { strong: 'right', balanced: true, teRight: true, teLeft: true, wideLeft: 5, wideRight: 95, slotLeft: null, slotRight: null },
    description: 'QB under center with ONE running back behind him ("single back"), a tight end on each side and a wide receiver on each side — 1 RB, 2 TE, 2 WR = 12 Personnel. Because both sides have a tight end the formation is balanced.'
  },
  iFormation: {
    id: 'iFormation', name: 'I-Formation', personnel: '21',
    players: OL_LINE.concat([
      sk('QB','QB',50,57), sk('FB','FB',50,64), sk('TB','TB',50,71),
      sk('X','X',5,51), sk('TE','TE',78,52), sk('Z','Z',95,51)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: null, slotRight: null },
    description: 'QB under center with a fullback and a tailback stacked in a line directly behind him (the "I"). Tight end right, a wide receiver on each side — 2 RB, 1 TE, 2 WR = 21 Personnel.'
  },
  wingRight: {
    id: 'wingRight', name: 'Wing Right (Wingback)', personnel: '21',
    players: OL_LINE.concat([
      sk('QB','QB',50,57), sk('TB','TB',50,66), sk('WB','WB',87,56),
      sk('X','X',5,51), sk('TE','TE',78,52), sk('Z','Z',96,51)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wingRight: true, wideLeft: 5, wideRight: 96, slotLeft: null, slotRight: null },
    description: 'A wingback lines up just outside and a step behind the tight end, adding an extra blocker (and a gap) to the strong side. QB under center, one back deep. Many teams count the wingback as a running back, which is how this reads as 21 Personnel — some count him differently.'
  },
  tightEndHeavy: {
    id: 'tightEndHeavy', name: 'Tight Ends Heavy (Double TE Right)', personnel: '13',
    players: OL_LINE.concat([
      sk('QB','QB',50,57), sk('RB','RB',50,66),
      sk('X','X',5,51), sk('TE2','TE',22,52), sk('TE','TE',78,52), sk('TE3','TE',87,56)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: true, wingRight: true, wideLeft: 5, wideRight: null, slotLeft: null, slotRight: null },
    description: 'Three tight ends and only one wide receiver — 1 RB, 3 TE, 1 WR = 13 Personnel. Two tight ends are on the right (one inline, one lined up as a wing / H-back), one is inline on the left. A big, physical look that usually signals a run, though play-action is always possible.'
  },
  fullHouse: {
    id: 'fullHouse', name: 'Full House (3 Backs)', personnel: '31',
    players: OL_LINE.concat([
      sk('QB','QB',50,57), sk('HB1','HB',38,66), sk('FB','FB',50,66), sk('HB2','HB',62,66),
      sk('X','X',5,51), sk('TE','TE',78,52)
    ]),
    meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: null, slotLeft: null, slotRight: null },
    description: 'Three running backs side by side behind the quarterback (the "T" shape). With one tight end and one wide receiver this is 31 Personnel — 3 RB, 1 TE, 1 WR. Short-yardage and goal-line teams love it.'
  }
};

const PERSONNEL_GROUPINGS = {
  '10': { id: '10', label: '10 Personnel', description: '1 RB, 0 TE, 4 WR.' },
  '11': { id: '11', label: '11 Personnel', description: '1 RB, 1 TE, 3 WR — the most common grouping in modern football.' },
  '12': { id: '12', label: '12 Personnel', description: '1 RB, 2 TE, 2 WR.' },
  '13': { id: '13', label: '13 Personnel', description: '1 RB, 3 TE, 1 WR.' },
  '21': { id: '21', label: '21 Personnel', description: '2 RB, 1 TE, 2 WR.' },
  '31': { id: '31', label: '31 Personnel', description: '3 RB, 1 TE, 1 WR.' }
};

/* ---------- Gaps: generated from the formation ----------
   A gap = between center and guard, B = guard/tackle, C = tackle/tight
   end (or just outside the tackle with no TE), D = outside an attached
   TE. A side without an attached tight end stops at the C gap. */
function gapsFor(f){
  const m = (f && f.meta) || {};
  const g = [
    { id: 'leftB',  label: 'B', x: 35, y: 49 }, { id: 'leftA',  label: 'A', x: 45, y: 49 },
    { id: 'rightA', label: 'A', x: 55, y: 49 }, { id: 'rightB', label: 'B', x: 65, y: 49 },
    { id: 'leftC',  label: 'C', x: m.teLeft ? 26 : 25, y: 49 },
    { id: 'rightC', label: 'C', x: m.teRight ? 74 : 75, y: 49 }
  ];
  if (m.teLeft)  g.push({ id: 'leftD',  label: 'D', x: 16, y: 49 });
  if (m.teRight) g.push({ id: 'rightD', label: 'D', x: 84, y: 49 });
  return g;
}
// Kept for backward compatibility with older callers.
const GAPS_VS_TRIPS_RIGHT = gapsFor(FORMATIONS.shotgunTripsRight);

/* ---------- Alignment techniques ---------- */
const TECHNIQUES = {
  '0tech':  { id: '0tech',  label: '0 Technique',  description: 'Head-up on the center (the "nose").' },
  '1tech':  { id: '1tech',  label: '1 Technique',  description: 'On the outside shoulder of the center, shading toward one A gap.' },
  '2itech': { id: '2itech', label: '2i Technique', description: 'On the inside shoulder of a guard (A gap).' },
  '3tech':  { id: '3tech',  label: '3 Technique',  description: 'On the outside shoulder of a guard — the B gap. Usually the most disruptive penetrating tackle in a 4-man front.' },
  '4itech': { id: '4itech', label: '4i Technique', description: 'On the inside shoulder of an offensive tackle (B gap).' },
  '5tech':  { id: '5tech',  label: '5 Technique',  description: 'On the outside shoulder of the offensive tackle (C gap) — sets the edge vs the run and rushes the passer from there.' },
  '6tech':  { id: '6tech',  label: '6 Technique',  description: 'Head-up on a tight end.' },
  '7tech':  { id: '7tech',  label: '7 Technique',  description: 'On the inside shoulder of a tight end.' },
  '9tech':  { id: '9tech',  label: '9 Technique',  description: 'Outside the end man on the line (outside the tight end or the tackle) — a wide edge rusher.' }
};

/* ---------- DEFENSIVE FRONTS ----------
   Each front is a function of the offensive formation it's facing. Written
   once in "strong side right" coordinates (every formation here is
   strong-right), so strength-based ids (SDE = strong-side end, WDE = weak-
   side end ...) stay correct. */
function _cbs(f){
  const m = f.meta;
  return [
    { id: 'CBL', label: 'CB', x: m.wideLeft != null ? m.wideLeft : 14, y: m.wideLeft != null ? 28 : 36, group: 'DB' },
    { id: 'CBR', label: 'CB', x: m.wideRight != null ? m.wideRight : 92, y: m.wideRight != null ? 28 : 38, group: 'DB' }
  ];
}
function _nickelX(f){ const m = f.meta; return m.slotRight != null ? m.slotRight - 2 : (m.slotLeft != null ? m.slotLeft + 2 : 86); }

const DEFENSIVE_FRONTS = {
  '42nickel': {
    id: '42nickel', name: '4-2 Nickel (4-2-5)',
    description: '4 down linemen, 2 true linebackers, and a 5th defensive back (the Nickel) in place of a 3rd linebacker — built to defend 3- and 4-receiver sets without a linebacker stuck covering a slot receiver. This version is aligned "Under-style": the 3-technique is to the weak side and the 1-technique shades the strong side.',
    align: function(f){
      const m = f.meta, wde = m.teLeft ? 25 : 26;
      return [
        { id: 'WDE', label: 'DE', x: wde, y: 46, group: 'DL', technique: m.teLeft ? '7tech' : '5tech' },
        { id: 'WDT', label: 'DT', x: 37, y: 46, group: 'DL', technique: '3tech' },
        { id: 'SDT', label: 'DT', x: 54, y: 46, group: 'DL', technique: '1tech' },
        { id: 'SDE', label: 'DE', x: 74, y: 44, group: 'DL', technique: '5tech' },
        { id: 'WILL', label: 'Will', x: 30, y: 38, group: 'LB', role: 'Will' },
        { id: 'MIKE', label: 'Mike', x: 52, y: 36, group: 'LB', role: 'Mike' },
        { id: 'NB', label: 'NB', x: _nickelX(f), y: 36, group: 'DB', role: 'Nickel' }
      ].concat(_cbs(f), [
        { id: 'FS', label: 'FS', x: 50, y: 15, group: 'DB' },
        { id: 'SS', label: 'SS', x: 78, y: 20, group: 'DB' }
      ]);
    }
  },
  '43under': {
    id: '43under', name: '4-3 Under',
    description: '4 linemen, 3 linebackers. The 3-technique tackle goes to the WEAK (open) side, the nose shades the strong A gap, the strong-side end is a 5-technique, and the weak-side end is a wide rusher. The Sam linebacker walks up over the tight end. A classic run-stopping base front.',
    align: function(f){
      const m = f.meta;
      return [
        { id: 'WDE', label: 'DE', x: m.teLeft ? 24 : 21, y: 45, group: 'DL', technique: m.teLeft ? '7tech' : '9tech' },
        { id: 'WDT', label: 'DT', x: 37, y: 46, group: 'DL', technique: '3tech' },
        { id: 'SDT', label: 'DT', x: 54, y: 46, group: 'DL', technique: '1tech' },
        { id: 'SDE', label: 'DE', x: 74, y: 46, group: 'DL', technique: '5tech' },
        { id: 'SAM', label: 'Sam', x: 81, y: 41, group: 'LB', role: 'Sam' },
        { id: 'MIKE', label: 'Mike', x: 53, y: 37, group: 'LB', role: 'Mike' },
        { id: 'WILL', label: 'Will', x: 36, y: 38, group: 'LB', role: 'Will' }
      ].concat(_cbs(f), [
        { id: 'FS', label: 'FS', x: 50, y: 16, group: 'DB' },
        { id: 'SS', label: 'SS', x: 70, y: 21, group: 'DB' }
      ]);
    }
  },
  '43over': {
    id: '43over', name: '4-3 Over',
    description: '4 linemen, 3 linebackers. The line is shifted toward the STRONG side: the 3-technique tackle lines up on the strong side (tight end side), the 1-technique is on the weak side, the strong-side end is head-up or inside the tight end, and the weak-side end is a wide rusher. The opposite idea from the Under front.',
    align: function(f){
      const m = f.meta;
      return [
        { id: 'WDE', label: 'DE', x: m.teLeft ? 25 : 23, y: 45, group: 'DL', technique: m.teLeft ? '7tech' : '5tech' },
        { id: 'WDT', label: 'DT', x: 46, y: 46, group: 'DL', technique: '1tech' },
        { id: 'SDT', label: 'DT', x: 63, y: 46, group: 'DL', technique: '3tech' },
        { id: 'SDE', label: 'DE', x: 78, y: 46, group: 'DL', technique: '6tech' },
        { id: 'SAM', label: 'Sam', x: 71, y: 38, group: 'LB', role: 'Sam' },
        { id: 'MIKE', label: 'Mike', x: 50, y: 36, group: 'LB', role: 'Mike' },
        { id: 'WILL', label: 'Will', x: 35, y: 38, group: 'LB', role: 'Will' }
      ].concat(_cbs(f), [
        { id: 'FS', label: 'FS', x: 50, y: 16, group: 'DB' },
        { id: 'SS', label: 'SS', x: 70, y: 21, group: 'DB' }
      ]);
    }
  },
  '34base': {
    id: '34base', name: '3-4 Base',
    description: '3 down linemen (a nose tackle head-up on the center and two 5-technique ends) and 4 linebackers: two inside, two outside. The outside linebackers are the edge rushers — they stand up on the line and rush like defensive ends. Inside/outside naming varies by team, so the labels here are ILB and OLB.',
    align: function(f){
      return [
        { id: 'WDE', label: 'DE', x: 26, y: 46, group: 'DL', technique: '5tech' },
        { id: 'NT', label: 'NT', x: 50, y: 46, group: 'DL', technique: '0tech' },
        { id: 'SDE', label: 'DE', x: 74, y: 46, group: 'DL', technique: '5tech' },
        { id: 'WOLB', label: 'OLB', x: 17, y: 42, group: 'LB' },
        { id: 'WILB', label: 'ILB', x: 43, y: 37, group: 'LB' },
        { id: 'SILB', label: 'ILB', x: 58, y: 37, group: 'LB' },
        { id: 'SOLB', label: 'OLB', x: 82, y: 42, group: 'LB' }
      ].concat(_cbs(f), [
        { id: 'FS', label: 'FS', x: 50, y: 16, group: 'DB' },
        { id: 'SS', label: 'SS', x: 70, y: 21, group: 'DB' }
      ]);
    }
  }
};
// Resolve a front's 11 defenders against a specific offensive formation.
function defenseFor(frontId, formationId){
  const front = DEFENSIVE_FRONTS[frontId], f = FORMATIONS[formationId];
  return (front && f) ? front.align(f) : [];
}

/* ---------- Reference data kept from earlier versions ---------- */
const RUN_CONCEPTS = {
  insideZone: {
    id: 'insideZone', name: 'Inside Zone',
    aimingPoint: 'The play-side guard’s hip at the snap — many coaches teach the outside hip of the play-side guard, though the exact aiming point varies a little by coach and system.',
    primaryRead: 'The play-side double team — the first down lineman past the center on the play side.',
    secondaryRead: 'If the play-side double team gets squeezed or beaten backward, the back looks to bend the run toward the backside cutback lane, reading the backside linebacker’s pursuit.',
    description: 'A zone run where the line blocks areas/gaps rather than specific defenders, and the back reads the resulting leverage.'
  }
};
const BLITZES = { nickelBlitz: { id: 'nickelBlitz', name: 'Nickel Blitz' } };
const PROTECTIONS = { halfSlide: { id: 'halfSlide', name: 'Half Slide (RB Fill)' } };
const COVERAGES = { cover2: { id: 'cover2', name: 'Cover 2' } };

/* ---------- FILM ----------
   The app does NOT host NFL or college footage (it isn't ours to host).
   Instead every concept can carry a search phrase that opens real film
   examples on YouTube, and an athlete/parent can paste a specific clip
   link for any concept in the app — it is then embedded right after the
   question. Add `clips:[{url,title}]` to a concept below to ship a
   default clip you have verified yourself. */
const FILM_SEARCH_BASE = 'https://www.youtube.com/results?search_query=';
function filmSearchUrl(query){ return FILM_SEARCH_BASE + encodeURIComponent(query); }
// Same search, sorted by view count (YouTube's "sort by view count" filter), so the
// most-watched videos on the topic come first.
function filmMostViewedUrl(query){ return FILM_SEARCH_BASE + encodeURIComponent(query) + '&sp=CAM%253D'; }

/* =========================================================
   CONCEPTS — the ids state.footballIQ.concepts tracks.
   tracks = which study tracks include this concept.
   film   = search phrase for real film examples.
   ========================================================= */
const _T3 = ['RB', 'EDGE', 'LB'];
function _c(id, label, position, tracks, difficulty, film){
  return { id: id, label: label, position: position, tracks: tracks, difficulty: difficulty, prerequisites: [], film: film || '' };
}
const CONCEPTS = {};
[
  // ---- Shared foundation (every track) ----
  _c('personnel11', '11 Personnel', 'RB', _T3, 1, 'football 11 personnel explained film'),
  _c('personnelNumbers', 'Reading Personnel Numbers', 'RB', _T3, 1, 'football personnel groupings explained 11 12 21 13'),
  _c('formationShotgun', 'Shotgun Formation', 'RB', _T3, 1, 'shotgun formation explained football film'),
  _c('formationDoubles', 'Shotgun Doubles (2x2)', 'RB', _T3, 2, 'football 10 personnel shotgun 2x2 spread film'),
  _c('formationPistol', 'Pistol Formation', 'RB', _T3, 2, 'pistol formation explained football offense'),
  _c('formationSingleback', 'Singleback / Ace (12)', 'RB', _T3, 2, 'ace formation 12 personnel singleback football film'),
  _c('formationI', 'I-Formation', 'RB', _T3, 2, 'i formation football explained lead fullback iso film'),
  _c('formationWing', 'Wing / Wingback', 'RB', _T3, 3, 'wing formation wingback football explained'),
  _c('formationTEHeavy', 'Tight Ends Heavy (13)', 'RB', _T3, 3, '13 personnel three tight ends football film'),
  _c('formationFullHouse', 'Full House (3 Backs)', 'RB', _T3, 3, 'full house backfield formation football goal line film'),
  _c('strengthCall', 'Strong Side / Weak Side', 'RB', _T3, 1, 'football strong side weak side formation strength explained'),
  _c('gaps', 'Gap Letters (A/B/C/D)', 'RB', _T3, 1, 'football gaps A B C D gap explained defense'),
  _c('techniques', 'Technique Numbers (0 to 9)', 'EDGE', _T3, 2, 'defensive line techniques 3 technique 5 technique 9 technique explained'),
  _c('front42Nickel', '4-2 Nickel Front', 'RB', _T3, 2, '4-2-5 nickel defense explained football film'),
  _c('front43Under', '4-3 Under Front', 'LB', _T3, 3, '4-3 under front defense explained film'),
  _c('front43Over', '4-3 Over Front', 'LB', _T3, 3, '4-3 over front defense explained film'),
  _c('front34', '3-4 Base Front', 'EDGE', _T3, 3, '3-4 defense explained outside linebackers edge rush film'),
  _c('mikeId', 'Identifying The Mike', 'RB', _T3, 2, 'mike linebacker middle linebacker identify protection'),
  _c('willId', 'Identifying The Will', 'RB', _T3, 2, 'will linebacker weak side linebacker explained'),
  _c('samId', 'Identifying The Sam', 'LB', ['LB', 'EDGE'], 2, 'sam linebacker strong side linebacker explained'),
  _c('nickelId', 'Identifying The Nickel', 'RB', _T3, 2, 'nickel defender explained slot coverage football'),
  _c('safetyShell', 'Safety Shells (1-High / 2-High)', 'RB', _T3, 3, 'one high two high safety shell coverage disguise explained'),
  // ---- Running back ----
  _c('primerRB', 'RB Primer: What To Look For', 'RB', ['RB'], 1, 'running back pre snap reads film'),
  _c('rbBackfieldAlign', 'Backfield Alignment & Depth', 'RB', ['RB'], 2, 'running back stance alignment depth pistol shotgun i formation'),
  _c('insideZone', 'Inside Zone Reads', 'RB', ['RB', 'LB', 'EDGE'], 3, 'inside zone running back reads film breakdown'),
  _c('powerRun', 'Power: Follow The Puller', 'RB', ['RB', 'LB'], 3, 'power run play pulling guard running back film breakdown'),
  _c('isoLead', 'Iso / Lead: Follow The Fullback', 'RB', ['RB', 'LB'], 3, 'iso lead run play fullback tailback film breakdown'),
  _c('outsideZone', 'Outside Zone (Stretch)', 'RB', ['RB', 'EDGE'], 3, 'outside zone stretch run running back film breakdown'),
  _c('nickelBlitz', 'Nickel Blitz Recognition', 'RB', ['RB'], 3, 'nickel blitz pre snap tell pass protection running back film'),
  _c('rbFindMike', 'Find The Mike (Protection)', 'RB', ['RB'], 2, 'running back pass protection identify mike linebacker'),
  _c('rbProtectionRule', 'RB Protection Rule (Half Slide)', 'RB', ['RB'], 4, 'half slide protection running back pass pro film'),
  _c('blitzShow', 'LB Creeping To The Line', 'RB', ['RB'], 3, 'linebacker show blitz bluff pre snap read running back'),
  _c('cover2Flat', 'Cover 2 — Flat Threat', 'RB', ['RB'], 3, 'cover 2 running back check down flat film'),
  // ---- Edge / defensive end ----
  _c('primerEDGE', 'Edge Primer: What To Look For', 'EDGE', ['EDGE'], 1, 'defensive end keys reads tackle film study'),
  _c('edgeAlign', 'Edge Alignment: 5 / 7 / 9', 'EDGE', ['EDGE'], 2, 'defensive end alignment 5 technique 7 technique 9 technique wide 9'),
  _c('edgeKeys', 'First Key: The Offensive Tackle', 'EDGE', ['EDGE'], 2, 'defensive end read offensive tackle keys run pass film study'),
  _c('edgeReach', 'Reach Block: Hold The Edge', 'EDGE', ['EDGE'], 3, 'defensive end reach block technique hold edge film'),
  _c('edgeDown', 'Down Block: Close The Door', 'EDGE', ['EDGE'], 3, 'defensive end down block kick out wrong arm technique film'),
  _c('edgeBoot', 'Bootleg: Backside Contain', 'EDGE', ['EDGE'], 3, 'defensive end backside contain bootleg film'),
  _c('edgePassRush', 'Pass Set: Rush With A Plan', 'EDGE', ['EDGE'], 3, 'edge rusher pass rush plan rush lane film'),
  _c('edgeDrawScreen', 'Draw & Screen Alerts', 'EDGE', ['EDGE'], 4, 'defensive end draw play screen pass recognition film'),
  _c('edgeHeavy', 'Set The Edge vs Wings & Tight Ends', 'EDGE', ['EDGE'], 3, 'defensive end set the edge tight end wing film'),
  _c('edgeSituation', 'Down & Distance For Rushers', 'EDGE', ['EDGE'], 2, 'edge rusher third down get off film'),
  // ---- Linebacker ----
  _c('primerLB', 'LB Primer: What To Look For', 'LB', ['LB'], 1, 'linebacker keys reads guards film study'),
  _c('lbRoles', 'Mike, Will & Sam Jobs', 'LB', ['LB'], 2, 'mike will sam linebacker responsibilities 4-3 defense'),
  _c('lbGuardKey', 'Run/Pass Key: The Guards', 'LB', ['LB'], 2, 'linebacker read guards run pass key pad level film'),
  _c('lbFlows', 'Flow Reads: Tight, Full, Fast, Split', 'LB', ['LB'], 3, 'linebacker flow reads guard to back film study'),
  _c('lbIKey', 'I-Formation: Key The Fullback', 'LB', ['LB'], 3, 'linebacker fill iso fullback lead block film'),
  _c('lbPlayAction', 'Play-Action: Don’t Bite', 'LB', ['LB'], 3, 'linebacker play action read eyes film study'),
  _c('lbCoverageDrops', 'Zone Drops: Hooks & Curls', 'LB', ['LB'], 3, 'linebacker zone drops hook curl cover 2 tampa 2 film'),
  _c('lbBlitz', 'Blitz: Own Your Gap', 'LB', ['LB'], 3, 'linebacker blitz gap timing a gap blitz film'),
  _c('lbShortYardage', 'Heavy Sets: Think Run First', 'LB', ['LB'], 3, 'linebacker goal line short yardage full house fill film'),
  _c('lbSpread', 'Spread Sets: Space & Support', 'LB', ['LB'], 3, 'linebacker defending spread offense space match slot film')
].forEach(c => { CONCEPTS[c.id] = c; });

/* =========================================================
   LESSONS — the quick education before the questions.
   body   = short explanation, points = "what to look for" bullets
   ========================================================= */
const LESSONS = {};
function _l(id, concept, difficulty, title, body, points, fieldState){
  LESSONS[id] = { id: id, concept: concept, position: CONCEPTS[concept].position, difficulty: difficulty, title: title, body: body, points: points || [], fieldState: fieldState };
}
const _TRIPS = 'shotgunTripsRight';

// ---- Primers (the "start here" education for each track) ----
_l('l_primerRB', 'primerRB', 1, 'Running Back: What You’re Looking For',
  'Before every snap a good back answers four questions in about five seconds. The Film Room trains each one.',
  ['Formation & personnel: who is on the field and where is my help?', 'Front & Mike: how many defenders are in the box, and who is the Mike? Pass-protection calls start from him.', 'Extra rushers: is a linebacker or the Nickel creeping up to the line? Is it a 1-high or 2-high safety look?', 'My read: what is the play and where is my aiming point — and what do I do if it is not there?'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_primerEDGE', 'primerEDGE', 1, 'Edge Rusher: What You’re Looking For',
  'Your day starts with the offensive tackle in front of you (or the tight end if you line up on him). His first move tells you run or pass before the ball gets there.',
  ['Key #1: the offensive tackle’s first step and shoulders — run or pass?', 'Key #2: check the near back and the guard (the “triangle”) so you know where the ball is going.', 'Down block or a pulling guard means a run coming at you or a trap — close down, don’t run upfield past it.', 'Pass set means rush with a plan — and never get deeper than the quarterback.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SDE' });
_l('l_primerLB', 'primerLB', 1, 'Linebacker: What You’re Looking For',
  'Linebackers read through the line to the ball: the guards first, then the near back, then the ball. Mike anchors the middle; Will usually gets to run free behind a protected front.',
  ['Run or pass: do the guards fire out low (run) or set back with tall pads (pass)?', 'Direction: the guard’s step and the near back’s path show you where the play is going (the “flow”).', 'Formation & personnel: they tell you the likely plays and who you may have to cover.', 'Fit your gap with the right shoulder — never let the lead blocker get his hands on you clean.'],
  { offense: 'iFormation', defense: '43under', showGaps: false, highlight: 'MIKE' });

// ---- Formations & personnel ----
_l('l_personnel11', 'personnel11', 1, 'What Is 11 Personnel?',
  '11 Personnel means 1 running back and 1 tight end on the field, so with 5 skill players total the other 3 are wide receivers. It is the most common grouping in football today because it threatens both the run and the pass without a substitution.',
  ['First digit = running backs (1).', 'Second digit = tight ends (1).', 'Receivers = 5 minus (RB + TE) = 3 WR.'],
  { offense: _TRIPS, defense: null, showGaps: false });
_l('l_personnelNumbers', 'personnelNumbers', 1, 'Reading Personnel Numbers',
  'Personnel is a two-digit code. The FIRST digit is the number of running backs, the SECOND is the number of tight ends, and the receivers are whatever is left of the five skill players. The defense answers by choosing its own personnel (base, nickel, or dime).',
  ['10 = 1 RB, 0 TE, 4 WR', '11 = 1 RB, 1 TE, 3 WR', '12 = 1 RB, 2 TE, 2 WR   •   13 = 1 RB, 3 TE, 1 WR', '21 = 2 RB, 1 TE, 2 WR   •   31 = 3 RB, 1 TE, 1 WR'],
  { offense: 'tightEndHeavy', defense: null, showGaps: false, note: 'This is 13 Personnel: 1 RB, 3 TE, 1 WR.' });
_l('l_formationShotgun', 'formationShotgun', 1, 'What Is Shotgun?',
  'In Shotgun, the quarterback lines up a few yards behind the center instead of directly under him, catching a longer snap. That gives him a clearer pre-snap look at the defense and more time to read it. The back is usually offset to one side of the QB.',
  ['QB several yards behind the center.', 'RB beside the QB, not behind him — his side can hint at direction.', 'Common with 3 or more receivers.'],
  { offense: _TRIPS, defense: null, showGaps: false });
_l('l_formationDoubles', 'formationDoubles', 2, 'Shotgun Doubles (2×2): 10 Personnel',
  'Four wide receivers — two on each side, one wide and one in the slot — and no tight end. With the defense’s extra defenders pulled out wide, there are fewer bodies near the line, which opens run lanes for the back when the box is light. The defense usually answers with a nickel or dime package.',
  ['4 WR + 1 RB + 0 TE = 10 Personnel.', 'Balanced: no tight end side, so the defense chooses its own “strength”.', 'Defenders have to cover space — the box is often lighter.'],
  { offense: 'shotgunDoubles', defense: null, showGaps: false });
_l('l_formationPistol', 'formationPistol', 2, 'The Pistol Formation',
  'The Pistol is a hybrid: the quarterback lines up closer to the center than in regular Shotgun, and the running back lines up DIRECTLY behind him instead of beside him. The back can run either way, so where he lines up does not give away the direction, and he can hit the line downhill quickly.',
  ['QB depth is between under-center and full Shotgun.', 'RB is directly behind the QB — no offset “tell”.', 'Can run inside zone, outside zone, power, or play-action from the same look.'],
  { offense: 'pistolRight', defense: null, showGaps: false });
_l('l_formationSingleback', 'formationSingleback', 2, 'Singleback / Ace (12 Personnel)',
  '“Single back” just means one running back behind the quarterback. “Ace” usually refers to the single-back look with two tight ends and two wide receivers (12 Personnel). Because both sides have a tight end the formation is balanced, and the defense can’t tell run from pass by the look alone.',
  ['One RB behind the QB (QB under center here).', 'Two TEs — one each side — so both sides have a D gap.', '1 RB + 2 TE + 2 WR = 12 Personnel.'],
  { offense: 'singlebackAce', defense: null, showGaps: false });
_l('l_formationI', 'formationI', 2, 'The I-Formation (21 Personnel)',
  'In the I-Formation a fullback and a tailback line up in a straight line behind the quarterback, who is under center. The fullback is the lead blocker; the tailback follows him and runs behind his block. It is built for downhill, physical running — plays like Iso and Power — but play-action passes come off the same picture.',
  ['FB (closer) is the lead blocker; TB (deeper) carries the ball.', 'Two backs = first digit 2: with 1 TE and 2 WR this is 21 Personnel.', 'Defenders expect a run — your eyes should too, but be ready for play-action.'],
  { offense: 'iFormation', defense: null, showGaps: false });
_l('l_formationWing', 'formationWing', 3, 'The Wing Formation (Wingback)',
  'A wingback lines up just outside and a step behind the tight end, on the strong side. He is an extra blocker (or receiver) on the edge, which adds a gap and a lot of blockers to one side — good for power and sweep plays and for play-action. Teams count the wingback differently (as a back or a tight end), so the personnel label can vary.',
  ['Wingback sits outside the TE, one step back.', 'Overloads the strong side with blockers.', 'Defense usually answers by adding a defender (e.g., a safety or linebacker) to that side.'],
  { offense: 'wingRight', defense: null, showGaps: false });
_l('l_formationTEHeavy', 'formationTEHeavy', 3, 'Tight Ends Heavy (13 Personnel)',
  'With three tight ends and only one wide receiver, the offense brings extra size and extra blockers: here two tight ends are on the right (one inline, one as a wing / H-back) and one inline on the left. It usually signals a physical run, but the tight ends can also release for play-action and short passes.',
  ['1 RB + 3 TE + 1 WR = 13 Personnel.', 'Extra blockers on both edges — more gaps to account for.', 'Run is likely; play-action is the surprise.'],
  { offense: 'tightEndHeavy', defense: null, showGaps: false });
_l('l_formationFullHouse', 'formationFullHouse', 3, 'Full House (3 Backs)',
  'Full House puts three running backs side by side behind the quarterback in a “T” shape. It’s a short-yardage and goal-line look: lots of lead blockers and power running. With one tight end and one wide receiver this is 31 Personnel. Teams that run it often can also fake the run and throw.',
  ['3 RB + 1 TE + 1 WR = 31 Personnel.', 'Three backs = three potential lead blockers or ball carriers.', 'Very run-heavy picture; the defense often loads the box.'],
  { offense: 'fullHouse', defense: null, showGaps: false });
_l('l_strengthCall', 'strengthCall', 1, 'Strong Side vs Weak Side',
  'The strong side is usually the side with the tight end (or the extra blockers/receivers). The weak side is the other. Coaches name assignments from strength — “Sam” is the strong-side linebacker, “Will” the weak-side one. If the formation is balanced (a tight end on each side, or none), the defense may set strength a different way, such as toward the field.',
  ['Look for the tight end (and wing) — that is normally strength.', 'Balanced formations have no obvious strong side; defenses decide it.', 'Strong side = more blockers; weak side = more space.'],
  { offense: _TRIPS, defense: null, showGaps: false });
_l('l_gaps', 'gaps', 1, 'Gap Letters: A, B, C, D',
  'Gaps are named outward from the center. The A gap is between the center and guard. The B gap is between the guard and tackle. The C gap is between the tackle and the tight end (or just outside the tackle if there is no tight end). The D gap is outside an attached tight end. A side with no tight end stops at the C gap.',
  ['A: center ↔ guard', 'B: guard ↔ tackle', 'C: tackle ↔ tight end (or just outside the tackle)', 'D: outside the tight end — only exists where a TE is attached'],
  { offense: _TRIPS, defense: '42nickel', showGaps: true });
_l('l_techniques', 'techniques', 2, 'Reading Technique Numbers (0 to 9)',
  'A defender’s number tells you exactly where he lines up on the offensive line. Even numbers are head-up (0 center, 2 guard, 4 tackle, 6 tight end). Odd numbers shade a shoulder: a 3 is on the outside shoulder of the guard, a 5 on the outside shoulder of the tackle. An “i” means the inside shoulder (2i, 4i). A 9 is outside the end man on the line.',
  ['0 = head-up on the center   •   1 = outside shoulder of the center', '2i = inside shoulder of the guard   •   3 = outside shoulder of the guard', '4i = inside shoulder of the tackle   •   5 = outside shoulder of the tackle', '6 = head-up on the TE   •   7 = inside shoulder of the TE   •   9 = outside the end man'],
  { offense: _TRIPS, defense: '43under', showGaps: false, showTech: true });

// ---- Fronts & defenders ----
_l('l_front42nickel', 'front42Nickel', 2, 'What Is A 4-2 Nickel?',
  '4-2 Nickel means 4 down linemen, 2 true linebackers, and a 5th defensive back (the Nickel) instead of a 3rd linebacker. Defenses use it against 3-receiver sets like Trips so they aren’t stuck covering a slot receiver with a linebacker.',
  ['Count it: 4 DL + 2 LB + 5 DB.', 'The Nickel lines up near the slot receiver.', 'Great for passing downs; the box is a little lighter.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false });
_l('l_front43under', 'front43Under', 3, 'The 4-3 Under Front',
  'Four linemen, three linebackers. In the Under front the 3-technique tackle goes to the WEAK side (the side away from the tight end), the nose shades the strong A gap, and the strong-side end plays a 5-technique. The weak-side end can play wide as a speed rusher. The Sam linebacker walks up over the tight end.',
  ['3-tech to the weak side; nose shades the strong A gap.', 'Sam over the tight end; Mike in the middle; Will on the weak side.', 'A classic run-stopping base front.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, showTech: true });
_l('l_front43over', 'front43Over', 3, 'The 4-3 Over Front',
  'The Over front shifts the line toward the STRONG side: the 3-technique tackle lines up on the strong side (tight end side) and the 1-technique goes to the weak side. The strong-side end is head-up or inside the tight end, and the weak-side end plays a wide 5. It is the opposite idea from the Under front.',
  ['3-tech to the STRONG side; 1-tech to the weak side.', 'Strong-side end on or inside the tight end.', 'Over = line shifted over to strength.'],
  { offense: 'pistolRight', defense: '43over', showGaps: false, showTech: true });
_l('l_front34', 'front34', 3, 'The 3-4 Base Front',
  'Three down linemen (a nose tackle head-up on the center and two 5-technique ends) and four linebackers — two inside, two outside. The outside linebackers stand up on the edge and rush like defensive ends, so they are the “edge” players in this front. Inside/outside labels vary by team, so the diagram just says ILB and OLB.',
  ['3 DL + 4 LB.', 'Nose tackle is a 0-technique; ends are 5-techniques.', 'OLBs are the edge rushers; ILBs fit the run inside.'],
  { offense: 'iFormation', defense: '34base', showGaps: false, showTech: true });
_l('l_mike', 'mikeId', 2, 'Identifying The Mike Linebacker',
  'The Mike is the middle linebacker — generally aligned over or near the center. Coaches call him “the quarterback of the defense” because he usually sets the front and is the anchor every running back and lineman counts from when figuring out protection assignments.',
  ['Over or just behind the center in most fronts.', 'Protection calls start counting from him.', 'He is usually the one calling out the front.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_will', 'willId', 2, 'Identifying The Will Linebacker',
  'The Will is the weak-side linebacker — aligned to the side AWAY from the tight end (the “weak” side, since it has fewer blockers). In this front, Will lines up to the left, opposite the trips / tight end side.',
  ['Opposite the tight end.', 'Often has room to run because the line protects him.', 'In pass protection, a Will blitz is a threat from the weak side.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'WILL' });
_l('l_sam', 'samId', 2, 'Identifying The Sam Linebacker',
  'The Sam is the strong-side linebacker, lined up on the tight end’s side — often right over or just outside the tight end in an Under front. He handles the tight end, sets the edge against the run, and is often the strongest, most physical of the three.',
  ['Strong side = tight end side.', 'In the Under front he is on or near the line of scrimmage.', 'Covers the tight end in coverage; often sets the edge vs the run.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SAM' });
_l('l_nickel', 'nickelId', 2, 'Identifying The Nickel Defender',
  'The Nickel is the extra defensive back who replaces a 3rd linebacker in sub packages. He usually lines up over the slot receiver, and he “walks up” toward the line before the snap when he is about to blitz instead of cover — that’s a real, watchable tell.',
  ['5th defensive back; replaces a linebacker.', 'Lines up near the slot receiver.', 'Watch for him creeping toward the line pre-snap.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'NB' });
_l('l_safetyShell', 'safetyShell', 3, 'Safety Shells: One-High or Two-High?',
  'Look at the safeties before the snap. Two safeties deep and split (2-high) points toward coverages like Cover 2 or Cover 4 (quarters). One safety deep in the middle (1-high) points toward Cover 1 or Cover 3. It is a clue, not a promise — defenses can rotate safeties after the snap or disguise their shell.',
  ['Two deep safeties: Cover 2 / Cover 4 are likely.', 'One deep safety: Cover 1 / Cover 3 are likely.', 'A safety creeping down toward the box can mean run support or a blitz.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'FS' });

// ---- Running back lessons ----
_l('l_rbBackfieldAlign', 'rbBackfieldAlign', 2, 'Where The Back Lines Up',
  'Your alignment is set by the formation, and defenders watch it. In Shotgun the back is offset beside the QB — his side can hint at where the run is going. In the Pistol he is directly behind the QB, so nothing is given away. In the I-Formation the tailback is the deepest back and follows the fullback. In Full House three backs sit side by side. Know your depth and spot cold, because the play’s timing depends on it.',
  ['Shotgun: beside the QB, offset to one side.', 'Pistol: directly behind the QB, closer than Shotgun.', 'I-Formation: tailback deepest, fullback in front of him.', 'Full House: three backs side by side.'],
  { offense: 'pistolRight', defense: null, showGaps: false, highlight: 'RB' });
_l('l_insideZone', 'insideZone', 3, 'What Is Inside Zone?',
  'Inside Zone is a zone run: the line blocks areas instead of specific defenders, double-teaming the first down lineman past the center on the play side. The back’s aiming point is the play-side guard’s hip (most coaches teach the outside hip — the exact point varies by system). He presses that double team: if it is winning and the backside is cut off, he runs through the called gap. If it gets squeezed, he reads the backside linebacker’s pursuit and cuts back.',
  ['Aim for the play-side guard’s hip.', 'Press the double team — read how it is pushing.', 'Hole shows live; don’t pick a gap before the snap.', 'If the play side is squeezed, bend it back.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: true });
_l('l_powerRun', 'powerRun', 3, 'Power: Follow The Puller',
  'Power is a gap-blocking run, not a zone run. The play-side linemen block down (toward the center) to wall off defenders, one blocker is assigned to the defender on the end of the line (he is “kicked out” by a puller), and another blocker leads through the hole. The back follows the lead blocker, aims for the gap just inside the kick-out, and cuts off his block. Exact assignments (who kicks out, who leads) vary by team.',
  ['Gap blocking: the blockers have named defenders.', 'A kick-out block turns the end man outward; a lead blocker goes through the hole.', 'Stay tight on the lead blocker’s hip — don’t pass him.', 'Cut off the block he makes.'],
  { offense: 'iFormation', defense: '43under', showGaps: true });
_l('l_isoLead', 'isoLead', 3, 'Iso / Lead: Follow The Fullback',
  'Iso is a downhill run: the fullback leads straight into the hole and blocks the first linebacker he finds, and the tailback follows right behind him. The back does not stare at the whole defense — he reads the fullback’s block and cuts off it, because the lead blocker has already picked the point of attack. It works best from the I-Formation.',
  ['Fullback blocks the first threatening linebacker.', 'Tailback follows his hip, then cuts off the block.', 'Press the hole; no dancing behind the line.'],
  { offense: 'iFormation', defense: '43over', showGaps: true });
_l('l_outsideZone', 'outsideZone', 3, 'Outside Zone (The Stretch)',
  'Outside Zone is a zone run that stretches the defense sideways. Linemen take wide, lateral zone steps toward the play side, and the back takes a wide, flat path to press the edge — usually aiming at or just outside the tackle/tight end — then plants his foot and cuts upfield through the best crease. Keep your shoulders square until you cut, and only bounce it outside when the edge is already turned.',
  ['Wide, flat path first; cut upfield second.', 'Be patient — let the zone blocks create a crease.', 'One decisive cut, then north-south.', 'Aiming point varies by system.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false });
_l('l_nickelBlitz', 'nickelBlitz', 3, 'Recognizing A Nickel Blitz',
  'A Nickel Blitz is when the Nickel defender abandons coverage and rushes — usually off the edge or through an inside gap — attacking a gap the protection did not plan for. The tell is pre-snap: he walks up tight to the line and squares toward the backfield instead of a receiver.',
  ['Walks up tight to the line.', 'Shoulders square to the backfield, not a receiver.', 'May bluff — so keep your protection assignment ready either way.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'NB' });
_l('l_rbFindMike', 'rbFindMike', 2, 'Find The Mike (Protection)',
  'Pass-protection calls are built around the Mike linebacker. Before every snap the quarterback or center identifies him, and the line and backs take their rules from that call. If you can’t find the Mike, you can’t be sure who you are blocking — so find him first, every play, before you worry about anything else.',
  ['Find the Mike first, every play.', 'Check who is aligned over the center and behind the line.', 'Then count from him to see the extra rushers.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_protectionRule', 'rbProtectionRule', 4, 'RB Pass Protection: The Half-Slide Rule',
  'In a half-slide protection, the line slides toward one side, and the back covers whoever the slide does not account for on the other side. Before the snap, find which way the line slides — then check the OPPOSITE side first. If an extra rusher shows up there, like a blitzing Nickel, he is almost always your responsibility.',
  ['Find the slide direction.', 'Check the opposite side first.', 'The unaccounted-for rusher is your fill.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false });
_l('l_blitzShow', 'blitzShow', 3, 'A Linebacker Creeping To The Line',
  'When an inside linebacker walks up into an A gap close to the line of scrimmage, he may be showing a blitz — or bluffing one and dropping back at the snap. As a back, you can’t be sure which, so keep your protection rules ready, find the Mike and the extra defender, and decide how you will react if he comes.',
  ['LB walks up into an A gap.', 'Could be a real blitz or a bluff — stay patient.', 'Find who is over you, then stay ready to block him.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, overrides: { MIKE: { x: 52, y: 44 } }, highlight: 'MIKE' });
_l('l_cover2', 'cover2Flat', 3, 'Cover 2 And The Flat',
  'Cover 2 splits two safeties deep, each covering half the field, while the corners play shorter zones underneath. That leaves the flat and underneath areas as soft spots. If you release to the flat against Cover 2, the corner on your side is usually the first defender who can get to you — both safeties are busy with the deep halves.',
  ['Two deep safeties split the field.', 'Corner is the flat/underneath defender.', 'Flat and seams are the soft spots.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false });

// ---- Edge / defensive end lessons ----
_l('l_edgeAlign', 'edgeAlign', 2, 'Edge Alignment: 5, 7, and 9',
  'An edge rusher’s technique number says how far outside he lines up. A 5-technique is on the outside shoulder of the tackle. A 7 is on the inside shoulder of the tight end. A 9 is outside the end man — the tight end or the tackle. The wider you line up, the faster your path to the quarterback; the tighter, the better you are at stopping the run inside you. The coach calls the technique before the snap.',
  ['5 = outside shoulder of the tackle.', '7 = inside shoulder of a tight end.', '9 = outside the end man on the line — a wide rusher.', 'Wider = faster to the QB; tighter = stronger vs the run.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, showTech: true, highlight: 'WDE' });
_l('l_edgeKeys', 'edgeKeys', 2, 'Your First Key: The Offensive Tackle',
  'Your eyes go to the offensive tackle you line up on — or to the tight end if you are lined up on him. His first step and the way his shoulders move tell you if it is run or pass. After that you check the near back and the guard (the “triangle”) to find where the ball is going. Learn to see the blocker’s movement, not the ball, in the first half second.',
  ['Watch the tackle’s first step and shoulders.', 'Then check the near back and the guard.', 'Reach, down, drive, or set back — each one means something different.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SDE' });
_l('l_edgeReach', 'edgeReach', 3, 'Reach Block: Hold Your Edge',
  'If the tackle steps outside to reach you, he is trying to wash you inside so the ball can run outside. Mirror his step, strike his chest with your hands, keep your outside shoulder free, and work upfield so the play can’t get around you. Never let him turn you inside: you must hold the edge.',
  ['Tackle steps outside = reach.', 'Mirror step, strike the chest, keep outside leverage.', 'Don’t get washed inside; hold the edge.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'SDE', note: 'Zone run to your side — the tackle steps outside to reach you.' });
_l('l_edgeDown', 'edgeDown', 3, 'Down Block: Close The Door',
  'When the tackle blocks down (inside) instead of coming at you, a run is coming and somebody else is coming for you — a pulling guard or the near back is likely coming to kick you out. Don’t run upfield past it. Shrink the hole: close inside, take on the kick-out with leverage, and keep the tackle off the linebacker behind you. Check the guard and back to confirm.',
  ['Tackle blocks down → run, usually with a kick-out on you.', 'Close inside — don’t run upfield past the trap.', 'Keep the tackle off your linebacker.', 'Confirm with the guard and near back.'],
  { offense: 'iFormation', defense: '43under', showGaps: false, highlight: 'SDE', note: 'The tackle steps down and the guard pulls toward you.' });
_l('l_edgeBoot', 'edgeBoot', 3, 'Bootleg: Backside Contain',
  'On the backside of a run that looks like zone, the offense may fake the handoff and bootleg the quarterback the other way. The backside end — you — must not chase the fake: if the line flows away and the quarterback hides the ball, stay home, keep outside leverage, and contain the quarterback. Squeeze if the ball is handed off; contain if the QB keeps it.',
  ['Don’t chase flow away from you.', 'Backside guard or tackle pulling the other way can signal a boot.', 'Keep outside leverage and contain the QB.', 'Keep your feet.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false, highlight: 'WDE', note: 'Run action flows right; you are the backside (left) end.' });
_l('l_edgePassRush', 'edgePassRush', 3, 'Pass Set: Rush With A Plan',
  'When the tackle kicks back and sets vertically, it’s a pass. Rush with a plan — speed to the corner, a power move, or a counter — and keep the quarterback on your inside shoulder so you don’t open a lane for him. The first rule of any rush: never get deeper than the quarterback. Rush past him and he steps up and escapes.',
  ['Tackle sets back = pass.', 'Have a plan; don’t just run upfield.', 'Keep the QB on your inside shoulder.', 'Never get deeper than the QB.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'WDE' });
_l('l_edgeDrawScreen', 'edgeDrawScreen', 4, 'Draw & Screen Alerts',
  'Sometimes the offense shows pass first, then runs. If the tackle sets back like a pass block and then suddenly drives you upfield, it’s a draw — retrace your steps and attack the ball from outside in. If linemen let you go and the back slides to your side, a screen may be coming: get your hands up, don’t chase a fake, find the ball. Never finish a rush with no idea where the ball is.',
  ['Pass set, then he drives you upfield → draw.', 'Retrace; attack from the outside in.', 'Linemen letting you go + back sliding out → screen alert.', 'Keep finding the ball.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'WDE' });
_l('l_edgeHeavy', 'edgeHeavy', 3, 'Set The Edge vs Wings & Tight Ends',
  'Against a tight end or a wingback the edge has more blockers on it. Your job against the run is to set the edge: hold your ground at the line of scrimmage, keep your outside shoulder free, and don’t get kicked out or washed inside, so the ball can’t get around you. Expect a down block, a kick-out, or a double team — and be ready for play-action too.',
  ['Hold your ground; keep your outside shoulder free.', 'Expect kick-outs and double teams.', 'Never let the ball bounce outside you.', 'Stay alert for play-action.'],
  { offense: 'wingRight', defense: '43over', showGaps: false, highlight: 'SDE' });
_l('l_edgeSituation', 'edgeSituation', 2, 'Down & Distance For Rushers',
  'Your rush changes with the situation. On 3rd and long the offense must pass, so you get off the ball and go all out after the quarterback. On 1st and 10 or in short yardage, play the run first and use your keys before you rush. Know the down, the distance and the score before every snap.',
  ['3rd & long: attack the quarterback.', '1st down / short yardage: run first, then rush.', 'Check the down, distance, and formation every play.'],
  { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlight: 'WDE' });

// ---- Linebacker lessons ----
_l('l_lbRoles', 'lbRoles', 2, 'Mike, Will, and Sam: The Jobs',
  'The Mike is the middle linebacker: he sets the front, makes the calls, and plugs the middle gaps. The Will is the weak-side linebacker: the line usually keeps him clean so he can run to the ball. The Sam is the strong-side linebacker: he lines up near the tight end, sets the edge against the run, and covers the tight end. Knowing your job tells you what to look at first.',
  ['Mike: middle; makes the calls; fills the A and B gaps.', 'Will: weak side; runs to the ball; often the free player.', 'Sam: strong side; handles the tight end and the edge.'],
  { offense: 'pistolRight', defense: '43under', showGaps: false });
_l('l_lbGuardKey', 'lbGuardKey', 2, 'Run/Pass Key: The Guards',
  'Inside linebackers read through the offensive line, and the guards are the best key. If the guards fire out low toward you with pads down, it’s a run. If they set back with their pads high, it’s a pass. If a guard pulls, the run is going the way he pulls. Read the guards first and the ball second, because the guards tell you the story faster.',
  ['Guards fire out low → run.', 'Guards set back, pads high → pass.', 'A pulling guard shows the direction of the run.', 'Don’t stare at the ball — read through the line.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'MIKE' });
_l('l_lbFlows', 'lbFlows', 3, 'Flow Reads: Tight, Full, Fast, and Split',
  'After the guard shows you run, the near back’s path finishes the picture. These four “flows” are how USA Football teaches inside linebackers to read it. Tight flow (dive, trap, iso): downhill, no lateral step — attack and fill the open window. Full flow (inside zone, power): the guard steps away and the back runs downhill with a lateral step — stay square, shuffle, and press the next open window. Fast flow (outside zone, toss, sweep): the back shows a side look and the line stretches wide — open up, mirror the back, and get out of the box. Split flow (counter, misdirection): the play-side guard steps away and the backside guard pulls away — watch the pull and shuffle with it.',
  ['Tight: downhill → attack and fill.', 'Full: zone/power → stay square, shuffle, press the next window.', 'Fast: stretch/toss/sweep → open up and run with the back.', 'Split: counter/misdirection → watch the pull, shuffle, re-fit.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'MIKE' });
_l('l_lbIKey', 'lbIKey', 3, 'I-Formation: Key The Fullback',
  'In the I-Formation the fullback leads the tailback into the hole, so the fullback is your key. Read through the guard to the fullback’s path, and prepare to meet him at the line of scrimmage with your near foot and near shoulder (the foot and shoulder closest to him). Attack downhill, take on the block, and keep your outside arm free to make the tackle. Don’t let the lead blocker get his hands on you clean.',
  ['Key the fullback’s path through the guard.', 'Attack downhill; meet him at the line.', 'Near foot, near shoulder; keep an arm free.', 'Fill your gap, don’t go around the block.'],
  { offense: 'iFormation', defense: '43under', showGaps: true, highlight: 'MIKE' });
_l('l_lbPlayAction', 'lbPlayAction', 3, 'Play-Action: Don’t Bite',
  'Play-action looks like a run first: the guards fire out, the back takes the fake. Linebackers who bite — take extra steps toward the run — leave the middle open. Respect the run fit, but if the ball does not get handed off, work back to your pass drop, keep your eyes in the backfield, and look for the tight end or back releasing behind you. Discipline beats curiosity.',
  ['Guards fire out like a run; the QB fakes the handoff.', 'Don’t take extra steps toward the fake.', 'Find the QB, then the releasing tight end or back.', 'Drop to your zone and keep your eyes up.'],
  { offense: 'singlebackAce', defense: '43under', showGaps: false, highlight: 'MIKE' });
_l('l_lbCoverageDrops', 'lbCoverageDrops', 3, 'Zone Drops: Hooks and Curls',
  'In most zone coverages the linebackers cover the underneath middle: the hook and curl zones just beyond the line. In Cover 2 the linebackers take underneath hook zones while the safeties split the deep halves. In the Tampa 2 version of Cover 2 the Mike drops deep down the middle to cover the hole between the safeties. Drop with your eyes on the quarterback and get depth first.',
  ['Linebackers cover the underneath zones.', 'Get depth first, then read the QB’s eyes.', 'Tampa 2: Mike runs the deep middle.', 'Use your help: know where your safeties are.'],
  { offense: _TRIPS, defense: '42nickel', showGaps: false, highlight: 'MIKE' });
_l('l_lbBlitz', 'lbBlitz', 3, 'Blitz: Own Your Gap',
  'When a blitz is called you own one specific gap — know it by letter before the snap. Time your move to the snap count, stay in your gap, and don’t cross a teammate’s path: stunts and blitzes run on exact lanes. If the blocker picks you up, keep fighting him; the other rusher is counting on you to hold him. If you’re showing blitz and dropping, your pre-snap look should still match the real blitz.',
  ['Know your gap letter.', 'Time the snap.', 'Stay in your lane — don’t cross faces.', 'Show the same look whether you blitz or not.'],
  { offense: 'pistolRight', defense: '43under', showGaps: true, highlight: 'MIKE' });
_l('l_lbShortYardage', 'lbShortYardage', 3, 'Heavy Sets: Think Run First',
  'Against Full House, a tight-ends-heavy look, or a wingback set, expect a downhill run — power, iso, or a sweep. Stack the box, fill your gap with the right shoulder, and don’t let the lead blocker get you. But these same looks run play-action, so read the guards: if they set back, it’s a pass.',
  ['Expect power, iso, or a sweep.', 'Count the blockers and fill your gap.', 'Read the guards to see if it is a fake.', 'Goal line: win low pad level.'],
  { offense: 'fullHouse', defense: '43over', showGaps: true, highlight: 'MIKE' });
_l('l_lbSpread', 'lbSpread', 3, 'Spread Sets: Space and Support',
  'Against Doubles (2×2, 10 Personnel) with no tight end, there are fewer blockers in the box and more space to cover. Linebackers have to be ready to cover a back or a slot receiver and to fit runs quickly when the box is light. Stay square, communicate with the safeties and the Nickel, and know who you match with.',
  ['Fewer blockers in the box, more space.', 'Be ready to match a back or a slot.', 'Talk to the safeties and the Nickel.', 'Fit run gaps quickly.'],
  { offense: 'shotgunDoubles', defense: '42nickel', showGaps: false, highlight: 'MIKE' });

/* ---- Lesson order: what gets taught first in each track ---- */
const _FOUNDATION = ['l_personnel11', 'l_personnelNumbers', 'l_formationShotgun', 'l_strengthCall', 'l_gaps', 'l_front42nickel', 'l_mike', 'l_will', 'l_formationPistol', 'l_formationSingleback', 'l_formationI', 'l_formationDoubles', 'l_formationWing', 'l_formationTEHeavy', 'l_formationFullHouse', 'l_techniques', 'l_front43under', 'l_front43over', 'l_front34', 'l_sam', 'l_nickel', 'l_safetyShell'];
const LESSON_ORDER_BY_TRACK = {
  RB: ['l_primerRB', 'l_personnel11', 'l_formationShotgun', 'l_gaps', 'l_front42nickel', 'l_mike', 'l_rbBackfieldAlign', 'l_insideZone', 'l_will', 'l_nickel', 'l_formationPistol', 'l_formationI', 'l_isoLead', 'l_powerRun', 'l_outsideZone', 'l_rbFindMike', 'l_nickelBlitz', 'l_protectionRule', 'l_blitzShow', 'l_safetyShell', 'l_cover2', 'l_personnelNumbers', 'l_strengthCall', 'l_formationSingleback', 'l_formationDoubles', 'l_formationWing', 'l_formationTEHeavy', 'l_formationFullHouse', 'l_techniques', 'l_front43under', 'l_front43over', 'l_front34'],
  EDGE: ['l_primerEDGE', 'l_personnel11', 'l_strengthCall', 'l_gaps', 'l_techniques', 'l_edgeAlign', 'l_edgeKeys', 'l_front43under', 'l_edgeReach', 'l_edgeDown', 'l_edgePassRush', 'l_edgeBoot', 'l_edgeSituation', 'l_front43over', 'l_front34', 'l_edgeDrawScreen', 'l_edgeHeavy', 'l_mike', 'l_will', 'l_nickel', 'l_safetyShell', 'l_formationPistol', 'l_formationI', 'l_formationWing', 'l_formationTEHeavy', 'l_formationDoubles', 'l_insideZone', 'l_outsideZone', 'l_formationShotgun', 'l_personnelNumbers', 'l_formationSingleback', 'l_formationFullHouse', 'l_front42nickel', 'l_sam'],
  LB: ['l_primerLB', 'l_personnel11', 'l_strengthCall', 'l_gaps', 'l_lbRoles', 'l_mike', 'l_will', 'l_sam', 'l_lbGuardKey', 'l_front43under', 'l_lbFlows', 'l_formationI', 'l_lbIKey', 'l_insideZone', 'l_powerRun', 'l_isoLead', 'l_lbPlayAction', 'l_lbCoverageDrops', 'l_safetyShell', 'l_lbBlitz', 'l_front43over', 'l_formationFullHouse', 'l_formationTEHeavy', 'l_formationWing', 'l_lbShortYardage', 'l_formationDoubles', 'l_lbSpread', 'l_front42nickel', 'l_nickel', 'l_formationPistol', 'l_formationSingleback', 'l_formationShotgun', 'l_personnelNumbers', 'l_techniques', 'l_front34']
};
LESSON_ORDER_BY_TRACK.ALL = (function(){
  const seen = {}, out = [];
  ['l_primerRB', 'l_primerEDGE', 'l_primerLB'].concat(_FOUNDATION, LESSON_ORDER_BY_TRACK.RB, LESSON_ORDER_BY_TRACK.EDGE, LESSON_ORDER_BY_TRACK.LB).forEach(id => { if (!seen[id] && LESSONS[id]) { seen[id] = true; out.push(id); } });
  return out;
})();
// Backward compatible name (the RB track order).
const LESSON_ORDER = LESSON_ORDER_BY_TRACK.RB;

/* =========================================================
   SCENARIOS — RECOGNIZE / APPLY / TEST questions.
   Question types: mc (multiple choice), tapDefender (tap a defender),
   tapPlayer (tap any player), tapGap (tap a gap on the field).
   playOut = the animated "watch it play out" shown after the answer.
   ========================================================= */
const SCENARIOS = {};
function _s(id, concept, difficulty, stage, field, q){
  const extras = Array.prototype.slice.call(arguments, 6);
  SCENARIOS[id] = Object.assign.apply(null, [{ id: id, concept: concept, position: CONCEPTS[concept].position, difficulty: difficulty, stage: stage, fieldState: field, question: q }].concat(extras));
}
function _mc(prompt, opts, correct, explanation){
  return { type: 'mc', prompt: prompt, options: opts.map(o => ({ id: o[0], label: o[1] })), correctAnswerId: correct, explanation: explanation };
}
function _tap(type, prompt, opts, correct, explanation){
  return { type: type, prompt: prompt, options: opts.map(o => Array.isArray(o) ? { id: o[0], label: o[1] } : { id: o }), correctAnswerId: correct, explanation: explanation };
}
// _p(caption, [[playerId, [[x,y],...], style], ...], ballPath)
function _p(caption, moves, ball){
  return { playOut: { caption: caption, moves: moves.map(m => ({ id: m[0], to: m[1], style: m[2] || 'run' })), ball: ball || null } };
}
function _f(off, def, extra){ return Object.assign({ offense: off, defense: def, showGaps: false }, extra || {}); }

/* ===== A. Formations & personnel (all tracks) ===== */
_s('s_recognizePersonnelFormation', 'personnel11', 1, 'recognize', _f(_TRIPS, null),
  _mc('Identify the personnel and formation.', [['a', '12 Personnel, Pistol'], ['b', '11 Personnel, Shotgun'], ['c', '10 Personnel, Singleback'], ['d', '11 Personnel, I-Formation']], 'b',
    '1 RB + 1 TE + 3 WR is 11 Personnel, and the QB set back off the line with the RB offset beside him is Shotgun.'));
_s('s_countWR', 'personnel11', 1, 'recognize', _f(_TRIPS, null),
  _mc('In 11 Personnel, how many wide receivers are on the field?', [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']], '3',
    'The two digits are 1 RB and 1 TE. Five skill players minus those two leaves 3 wide receivers.'));
_s('s_personnelDigit', 'personnelNumbers', 1, 'recognize', _f(_TRIPS, null),
  _mc('In a personnel code like “12,” what does the FIRST digit tell you?', [['rb', 'The number of running backs'], ['te', 'The number of tight ends'], ['wr', 'The number of wide receivers']], 'rb',
    'First digit = running backs, second digit = tight ends. The receivers are whatever is left of the five skill players.'));
_s('s_idAcePersonnel', 'personnelNumbers', 2, 'recognize', _f('singlebackAce', null),
  _mc('What personnel is this?', [['11', '11 Personnel'], ['12', '12 Personnel'], ['13', '13 Personnel'], ['21', '21 Personnel']], '12',
    'One back, TWO tight ends (one on each side) and two wide receivers: 1 RB + 2 TE + 2 WR = 12 Personnel.'));
_s('s_idTEHeavyPersonnel', 'personnelNumbers', 3, 'recognize', _f('tightEndHeavy', null),
  _mc('What personnel is this?', [['12', '12 Personnel'], ['13', '13 Personnel'], ['22', '22 Personnel'], ['11', '11 Personnel']], '13',
    '1 RB, THREE tight ends (two right, one left) and 1 wide receiver = 13 Personnel.'));
_s('s_idDoublesPersonnel', 'personnelNumbers', 2, 'recognize', _f('shotgunDoubles', null),
  _mc('What personnel is this?', [['10', '10 Personnel'], ['11', '11 Personnel'], ['20', '20 Personnel'], ['12', '12 Personnel']], '10',
    'One back, no tight end, four wide receivers — two on each side. That is 10 Personnel.'));
_s('s_idIPersonnel', 'personnelNumbers', 2, 'recognize', _f('iFormation', null),
  _mc('What personnel is this?', [['11', '11 Personnel'], ['21', '21 Personnel'], ['12', '12 Personnel'], ['22', '22 Personnel']], '21',
    'Two backs (fullback and tailback), one tight end, and two wide receivers: 21 Personnel.'));
_s('s_idFullHousePersonnel', 'personnelNumbers', 3, 'recognize', _f('fullHouse', null),
  _mc('What personnel is this?', [['21', '21 Personnel'], ['31', '31 Personnel'], ['30', '30 Personnel'], ['32', '32 Personnel']], '31',
    'Three running backs, one tight end, one wide receiver: 31 Personnel.'));
_s('s_whyShotgun', 'formationShotgun', 1, 'recognize', _f(_TRIPS, null),
  _mc('Why do offenses often line up in Shotgun?', [['a', 'The QB gets a better look at the defense and more time to read it'], ['b', 'It lets the offensive line stand farther off the ball'], ['c', 'It is required whenever 3 receivers are on the field']], 'a',
    'Starting a few yards behind the center gives the QB a clearer pre-snap picture and extra time after the snap. It is a choice, not a rule.'));
_s('s_strongSide', 'strengthCall', 1, 'recognize', _f(_TRIPS, null),
  _mc('Which side of this formation is the strong side?', [['left', 'Left — the side with the lone receiver'], ['right', 'Right — the tight end and trips side']], 'right',
    'Strong side is the side with the tight end (and here, the extra receivers). The open left side is the weak side.'));
_s('s_strongSideWing', 'strengthCall', 2, 'recognize', _f('wingRight', null),
  _mc('Which side is the strong side?', [['left', 'Left'], ['right', 'Right — tight end AND wingback']], 'right',
    'The tight end and the wingback are both on the right, loading the strength to that side.'));
_s('s_strongSideTEHeavy', 'strengthCall', 2, 'recognize', _f('tightEndHeavy', null),
  _mc('Two tight ends are on the right and one on the left. Which side has the most strength?', [['right', 'Right — two tight ends'], ['left', 'Left — one tight end and a wide receiver']], 'right',
    'More blockers sit on the right (an inline tight end and a wing/H-back), so the formation is strongest there.'));
_s('s_balancedAce', 'strengthCall', 2, 'recognize', _f('singlebackAce', null),
  _mc('This formation has a tight end on each side. How would you describe it?', [['bal', 'Balanced — no obvious strong side from the look alone'], ['r', 'Strong right'], ['l', 'Strong left']], 'bal',
    'With tight ends on both sides there is no clear strong side from the picture, so the defense has to set its own strength (often to the field).'));
_s('s_doublesBalanced', 'formationDoubles', 2, 'recognize', _f('shotgunDoubles', null),
  _mc('This formation has two receivers on each side and no tight end. What is it called?', [['doubles', 'Doubles (2×2) — 10 Personnel'], ['trips', 'Trips'], ['ace', 'Ace']], 'doubles',
    'Two receivers on each side is a 2×2, “Doubles” look. With four wide receivers and one back, it is 10 Personnel.'));
_s('s_doublesBox', 'formationDoubles', 3, 'apply', _f('shotgunDoubles', '42nickel'),
  _mc('Against a 2×2 spread, why can the run game find room?', [['a', 'Defenders are stretched out wide, so fewer are in the box'], ['b', 'The offense has an extra blocker'], ['c', 'The defense must play 8 in the box']], 'a',
    'Four receivers pull defenders away from the middle. With fewer defenders near the line, the box is lighter — if the defense doesn’t add a safety.'));
_s('s_idPistol', 'formationPistol', 2, 'recognize', _f('pistolRight', null),
  _mc('Which formation is this?', [['pistol', 'Pistol'], ['shotgun', 'Shotgun'], ['i', 'I-Formation'], ['fh', 'Full House']], 'pistol',
    'The QB is a few yards behind the center — closer than regular Shotgun — and the running back is directly behind him. That is the Pistol.'));
_s('s_pistolRBSpot', 'formationPistol', 2, 'recognize', _f('pistolRight', null, { highlight: 'RB' }),
  _mc('Where does the running back line up in the Pistol?', [['behind', 'Directly behind the quarterback'], ['beside', 'Beside the quarterback, offset to one side'], ['wide', 'Out wide as a receiver']], 'behind',
    'The Pistol’s big idea: the back is lined up directly behind the quarterback, not offset — so he can run either way.'));
_s('s_pistolWhy', 'formationPistol', 3, 'apply', _f('pistolRight', '43under'),
  _mc('Why is the Pistol harder for a defense to read?', [['a', 'The back’s alignment doesn’t tip off which way the run is going'], ['b', 'The linemen are lined up farther back'], ['c', 'The quarterback is under center']], 'a',
    'Because the back isn’t offset to one side, the defense can’t get a clue from his alignment — he can attack either side of the line.'));
_s('s_idI', 'formationI', 2, 'recognize', _f('iFormation', null),
  _mc('Which formation is this?', [['i', 'I-Formation'], ['fh', 'Full House'], ['pistol', 'Pistol'], ['ace', 'Singleback Ace']], 'i',
    'The fullback and tailback are stacked in a straight line behind the QB, who is under center — the “I”.'));
_s('s_tapFullback', 'formationI', 2, 'recognize', _f('iFormation', null),
  _tap('tapPlayer', 'Tap the fullback — the lead blocker.', [['FB', 'Fullback'], ['TB', 'Tailback'], ['QB', 'Quarterback']], 'FB',
    'The fullback lines up directly in front of the tailback, closer to the QB. He leads the way and blocks for the tailback.'), { hideOptionLabels: true });
_s('s_tapDeepBack', 'formationI', 2, 'recognize', _f('iFormation', null),
  _tap('tapPlayer', 'Tap the tailback — the deepest back, who usually carries the ball.', [['FB', 'Fullback'], ['TB', 'Tailback'], ['QB', 'Quarterback']], 'TB',
    'The tailback is deepest in the I, behind the fullback, so he can follow his lead block and pick a lane.'), { hideOptionLabels: true });
_s('s_idAce', 'formationSingleback', 2, 'recognize', _f('singlebackAce', null),
  _mc('Which formation is this?', [['ace', 'Singleback, Ace (two tight ends)'], ['i', 'I-Formation'], ['dbl', 'Doubles (2×2)'], ['fh', 'Full House']], 'ace',
    'One back behind the QB, who is under center, with a tight end on each side: Singleback, Ace (12 Personnel).'));
_s('s_aceDGap', 'formationSingleback', 3, 'recognize', _f('singlebackAce', null, { showGaps: true }),
  _tap('tapGap', 'Tap the D gap on the LEFT side.', [['leftC'], ['leftD'], ['rightD']], 'leftD',
    'The D gap is outside an attached tight end. This formation has a tight end on the left too, so the left side has a D gap.'));
_s('s_idWing', 'formationWing', 3, 'recognize', _f('wingRight', null),
  _tap('tapPlayer', 'Tap the wingback.', [['WB', 'Wingback'], ['TE', 'Tight end'], ['Z', 'Wide receiver']], 'WB',
    'The wingback lines up just outside and a step behind the tight end. He is an extra blocker or receiver on the strong side.'), { hideOptionLabels: true });
_s('s_wingWhy', 'formationWing', 3, 'apply', _f('wingRight', '43over'),
  _mc('What does adding a wingback do to the strong side?', [['a', 'Adds another blocker (and a gap) to that side'], ['b', 'Makes the formation balanced'], ['c', 'Takes a blocker away from that side']], 'a',
    'The wing is an extra body outside the tight end. The strong side gets more blockers and the defense has to account for them.'));
_s('s_idTEHeavy', 'formationTEHeavy', 3, 'recognize', _f('tightEndHeavy', null),
  _mc('What does this look usually signal?', [['run', 'A physical run — but play-action is still possible'], ['pass', 'An all-out pass'], ['screen', 'A screen pass only']], 'run',
    'Three tight ends bring extra blockers and size, which is the run-game look. Teams also use it to set up play-action.'));
_s('s_idFullHouse', 'formationFullHouse', 3, 'recognize', _f('fullHouse', null),
  _mc('Which formation is this?', [['fh', 'Full House'], ['i', 'I-Formation'], ['pistol', 'Pistol'], ['ace', 'Ace']], 'fh',
    'Three running backs side by side behind the quarterback make the Full House “T”.'));
_s('s_fullHouseBacks', 'formationFullHouse', 2, 'recognize', _f('fullHouse', null),
  _mc('How many running backs are in the backfield in a Full House?', [['2', '2'], ['3', '3'], ['4', '4']], '3',
    'Full House puts three running backs behind the quarterback — which is why it reads as 31 or 30 Personnel.'));
_s('s_fullHouseWhy', 'formationFullHouse', 3, 'apply', _f('fullHouse', '43over'),
  _mc('Why do teams use Full House near the goal line?', [['a', 'Three backs mean three potential lead blockers or ball carriers for a power run'], ['b', 'It spreads the defense out wide'], ['c', 'It makes the QB faster']], 'a',
    'It is a power-running formation: lots of lead blockers and a few ways to run, plus play-action off the same look.'));

/* ===== B. Fronts, techniques, and defender identification ===== */
_s('s_recognizeFront', 'front42Nickel', 2, 'recognize', _f(_TRIPS, '42nickel'),
  _mc('What defensive front is this?', [['43over', '4-3 Over'], ['42nickel', '4-2 Nickel'], ['34odd', '3-4 Odd'], ['33stack', '3-3 Stack']], '42nickel',
    'Count the box: 4 down linemen, 2 off-the-ball linebackers, and a 5th defensive back (the Nickel) instead of a 3rd linebacker — that’s 4-2 Nickel.'));
_s('s_front43under', 'front43Under', 3, 'recognize', _f('pistolRight', '43under'),
  _mc('What front is this?', [['under', '4-3 Under'], ['over', '4-3 Over'], ['34', '3-4 Base'], ['nickel', '4-2 Nickel']], 'under',
    '4 linemen and 3 linebackers, with the 3-technique on the WEAK side (away from the tight end) and the Sam walked up over the tight end — that is the Under front.'));
_s('s_front43over', 'front43Over', 3, 'recognize', _f('pistolRight', '43over'),
  _mc('What front is this?', [['under', '4-3 Under'], ['over', '4-3 Over'], ['34', '3-4 Base'], ['nickel', '4-2 Nickel']], 'over',
    '4 linemen and 3 linebackers, with the 3-technique shifted to the STRONG (tight end) side and the end head-up on the tight end — the line is shifted over. That is the Over front.'));
_s('s_front34', 'front34', 3, 'recognize', _f('iFormation', '34base'),
  _mc('What front is this?', [['34', '3-4 Base'], ['43', '4-3 Under'], ['nickel', '4-2 Nickel']], '34',
    'Three down linemen (nose tackle and two ends) and four linebackers — two inside and two outside — is a 3-4 base.'));
_s('s_over3Strong', 'front43Over', 3, 'apply', _f('pistolRight', '43over'),
  _mc('In the 4-3 OVER front, which side does the 3-technique tackle line up on?', [['strong', 'The strong (tight end) side'], ['weak', 'The weak (open) side']], 'strong',
    'Over = the line is shifted OVER to the strong side, so the 3-tech lines up there. (Under is the reverse: 3-tech to the weak side.)'));
_s('s_under3Weak', 'front43Under', 3, 'apply', _f('pistolRight', '43under'),
  _mc('In the 4-3 UNDER front, which side does the 3-technique tackle line up on?', [['strong', 'The strong (tight end) side'], ['weak', 'The weak (open) side']], 'weak',
    'In the Under front the 3-technique goes to the weak side, while the nose shades the strong A gap.'));
_s('s_tech3', 'techniques', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the 3-technique (outside shoulder of the guard).', [['WDT', 'Weak tackle'], ['SDT', 'Strong tackle'], ['SDE', 'Strong end'], ['WDE', 'Weak end']], 'WDT',
    'The 3-technique lines up on the outside shoulder of a guard. In this Under front that is the left (weak-side) tackle.'));
_s('s_tech1', 'techniques', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the 1-technique (outside shoulder of the center).', [['WDT', 'Weak tackle'], ['SDT', 'Strong tackle'], ['SDE', 'Strong end'], ['WDE', 'Weak end']], 'SDT',
    'The 1-technique shades the center’s outside shoulder in an A gap. Here he shades the strong-side A gap.'));
_s('s_tech5', 'techniques', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the 5-technique (outside shoulder of the offensive tackle).', [['SDE', 'Strong end'], ['SDT', 'Strong tackle'], ['WDT', 'Weak tackle'], ['WDE', 'Weak end']], 'SDE',
    'The 5-technique is on the outside shoulder of the offensive tackle. In this front the strong-side end plays it.'));
_s('s_tech9', 'techniques', 3, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the 9-technique — the wide rusher outside the end man on the line.', [['WDE', 'Weak end'], ['SDE', 'Strong end'], ['WDT', 'Weak tackle'], ['SAM', 'Sam']], 'WDE',
    'A 9-technique lines up outside the end man on the offensive line. With no tight end on the left, the weak-side end is wide of the tackle.'));
_s('s_tech6', 'techniques', 3, 'recognize', _f('pistolRight', '43over'),
  _tap('tapDefender', 'Tap the 6-technique — head-up on the tight end.', [['SDE', 'Strong end'], ['SDT', 'Strong tackle'], ['WDE', 'Weak end'], ['SAM', 'Sam']], 'SDE',
    'The 6-technique is head-up on the tight end. The Over front’s strong-side end plays there.'));
_s('s_techNumberMC', 'techniques', 2, 'apply', _f(_TRIPS, '43under'),
  _mc('A defender is on the OUTSIDE shoulder of the offensive tackle. What technique is he?', [['3', '3 technique'], ['5', '5 technique'], ['7', '7 technique'], ['9', '9 technique']], '5',
    'The 5-technique is on the tackle’s outside shoulder. (3 is the guard’s outside shoulder, 7 is the tight end’s inside shoulder, 9 is outside the end man.)'));
_s('s_techNumberGuard', 'techniques', 2, 'apply', _f(_TRIPS, '43under'),
  _mc('Which technique is head-up on the center?', [['0', '0 technique (nose)'], ['1', '1 technique'], ['3', '3 technique'], ['6', '6 technique']], '0',
    'The 0-technique is head-up on the center. A 1 shades his outside shoulder.'));
_s('s_tapMike', 'mikeId', 2, 'recognize', _f(_TRIPS, '42nickel'),
  _tap('tapDefender', 'Tap the Mike linebacker.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['NB', 'Nickel']], 'MIKE',
    'The Mike is aligned over/near the center, in the middle of the front — that’s your anchor point every time.'));
_s('s_tapMikeUnder', 'mikeId', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the Mike linebacker.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['SAM', 'Sam']], 'MIKE',
    'The Mike is the middle linebacker, behind the nose and over the center.'));
_s('s_tapWill', 'willId', 2, 'recognize', _f(_TRIPS, '42nickel'),
  _tap('tapDefender', 'Tap the Will linebacker.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['NB', 'Nickel']], 'WILL',
    'The Will lines up to the weak side — away from the tight end. Here that’s the left side, opposite the trips/TE look.'));
_s('s_tapWillOver', 'willId', 2, 'recognize', _f('iFormation', '43over'),
  _tap('tapDefender', 'Tap the Will linebacker.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['SAM', 'Sam']], 'WILL',
    'The tight end is on the right, so the weak side is the left. The Will is the linebacker on the left.'));
_s('s_tapSam', 'samId', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the Sam linebacker.', [['SAM', 'Sam'], ['MIKE', 'Mike'], ['WILL', 'Will']], 'SAM',
    'The Sam is the strong-side linebacker — here he is lined up over the tight end on the strong (right) side.'));
_s('s_tapSamOver', 'samId', 3, 'recognize', _f('iFormation', '43over'),
  _tap('tapDefender', 'Tap the Sam linebacker.', [['SAM', 'Sam'], ['MIKE', 'Mike'], ['WILL', 'Will']], 'SAM',
    'The tight end is on the right, so the strong side is the right — and that’s where the Sam is.'));
_s('s_tapNickel', 'nickelId', 2, 'recognize', _f(_TRIPS, '42nickel'),
  _tap('tapDefender', 'Tap the Nickel defender.', [['NB', 'Nickel'], ['CBR', 'Corner'], ['SS', 'Safety']], 'NB',
    'The Nickel is the 5th defensive back who replaced a 3rd linebacker — here he is aligned over the slot receiver, between the linebackers and the corner.'));
_s('s_tapOLB34', 'front34', 3, 'recognize', _f('iFormation', '34base'),
  _tap('tapDefender', 'Tap the strong-side outside linebacker — in a 3-4, the edge rusher.', [['SOLB', 'Strong OLB'], ['NT', 'Nose tackle'], ['SILB', 'Inside LB'], ['WILB', 'Inside LB']], 'SOLB',
    'In a 3-4 the outside linebackers stand up on the edge and rush like defensive ends. The strong-side one lines up on the tight end’s side.'));
_s('s_tapNT', 'front34', 2, 'recognize', _f('iFormation', '34base'),
  _tap('tapDefender', 'Tap the nose tackle.', [['NT', 'Nose tackle'], ['SILB', 'Inside LB'], ['SDE', 'End'], ['SOLB', 'Outside LB']], 'NT',
    'The nose tackle is head-up on the center — a 0-technique — in the middle of the three-man line.'));
_s('s_shell2High', 'safetyShell', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 33, y: 14 }, SS: { x: 67, y: 14 } } }),
  _mc('Two safeties are deep and split the field. Which coverages does this shell suggest?', [['a', 'Cover 2 or Cover 4 (quarters)'], ['b', 'Cover 1 or Cover 3'], ['c', 'Cover 0 (no deep help)']], 'a',
    'Two deep safeties (a 2-high shell) point toward Cover 2 or Cover 4. It is a clue only — defenses can rotate after the snap.'));
_s('s_shell1High', 'safetyShell', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { FS: { x: 50, y: 12 }, SS: { x: 72, y: 32 } } }),
  _mc('One safety is deep in the middle and the other has walked down. What does this suggest?', [['a', 'Cover 1 or Cover 3 (1-high)'], ['b', 'Cover 2'], ['c', 'Quarters only']], 'a',
    'One deep safety (a 1-high shell) points toward Cover 1 or Cover 3, and the second safety is closer to the box to help with the run.'));
_s('s_shellCreep', 'safetyShell', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { SS: { x: 68, y: 33 } } }),
  _mc('A safety walks down toward the line before the snap. What might it mean?', [['a', 'Run support or a blitz is possible'], ['b', 'The defense is playing prevent'], ['c', 'It always means Cover 2']], 'a',
    'A safety moving down toward the box can mean extra run support or a blitz. It might also be a bluff, so stay alert.'));


/* ===== B2. Gap letters ===== */
_s('s_tapGapStrongA', 'gaps', 1, 'recognize', _f(_TRIPS, '42nickel', { showGaps: true }),
  _tap('tapGap', 'Tap the A gap on the strong (tight end) side.', [['rightA'], ['rightB'], ['leftA']], 'rightA',
    'The strong side is the side with the tight end — the right. The A gap is the gap between the center and the guard on that side.'));
_s('s_tapGapWeakB', 'gaps', 1, 'recognize', _f(_TRIPS, '42nickel', { showGaps: true }),
  _tap('tapGap', 'Tap the B gap on the weak (open) side.', [['leftA'], ['leftB'], ['leftC']], 'leftB',
    'The weak side is away from the tight end — the left. The B gap sits between the guard and the tackle.'));
_s('s_tapGapD', 'gaps', 2, 'recognize', _f(_TRIPS, '42nickel', { showGaps: true }),
  _tap('tapGap', 'Tap the D gap.', [['rightC'], ['rightD'], ['leftC']], 'rightD',
    'The D gap is outside an attached tight end, so it only exists on the tight end side. The left side has no tight end, so it stops at the C gap.'));
_s('s_tapGapC', 'gaps', 2, 'recognize', _f('pistolRight', '43under', { showGaps: true }),
  _tap('tapGap', 'Tap the C gap on the tight end side.', [['rightB'], ['rightC'], ['rightD']], 'rightC',
    'The C gap is between the tackle and the tight end. The D gap is outside the tight end.'));
_s('s_gapNoD', 'gaps', 2, 'recognize', _f('pistolRight', null, { showGaps: true }),
  _mc('This formation has no tight end on the left. What is the outermost gap on that side?', [['c', 'The C gap'], ['d', 'The D gap'], ['b', 'The B gap']], 'c',
    'The D gap only exists outside an attached tight end. With none on the left, the outermost gap there is C.'));

/* ===== C. Running back track ===== */
_s('s_primerRB', 'primerRB', 1, 'recognize', _f(_TRIPS, '42nickel', { highlight: 'MIKE' }),
  _mc('Before the snap, what should a running back check?', [['a', 'Formation, the front and the Mike, extra rushers, and my read'], ['b', 'Only where the ball is'], ['c', 'Only the scoreboard']], 'a',
    'A good back’s pre-snap checklist: formation and personnel, the front and the Mike, extra rushers (blitz tells, safety shell), and his read for the play.'));
_s('s_rbDepthI', 'rbBackfieldAlign', 2, 'recognize', _f('iFormation', null),
  _mc('In the I-Formation, which back is deepest?', [['tb', 'The tailback'], ['fb', 'The fullback'], ['qb', 'The quarterback']], 'tb',
    'The fullback lines up in front of the tailback; the tailback is deepest and follows him.'));
_s('s_rbShotgunSpot', 'rbBackfieldAlign', 1, 'recognize', _f(_TRIPS, null, { highlight: 'RB' }),
  _mc('Where is the running back in this Shotgun formation?', [['beside', 'Offset beside the quarterback'], ['behind', 'Directly behind the quarterback'], ['wide', 'Out wide']], 'beside',
    'In regular Shotgun the back is offset to one side of the QB, not directly behind him.'));
_s('s_insideZoneCut', 'insideZone', 3, 'apply', _f(_TRIPS, '42nickel', { showGaps: true,
    note: 'Inside Zone, run right. At the snap, the play-side (right) double team pushes the 1-technique vertically and the backside A gap (left) is cut off clean by the backside guard.' }),
  _tap('tapGap', 'Where should you cut?', [['rightA', 'Right A'], ['rightB', 'Right B'], ['leftA', 'Left A (cutback)']], 'rightA',
    'The play-side double team is winning and pushing vertically, and the backside is cut off — press right A. There’s nothing to cut back to since the backside is sealed.'),
  _p('The center and right guard double-team the 1-technique and drive him back. The back presses the aiming point, sees the A gap open, and runs through it.',
    [['RB', [[49, 62], [55, 54], [55, 44], [55, 32]], 'run'], ['C', [[53, 49]], 'block'], ['RG', [[57, 49]], 'block'], ['LG', [[42, 48]], 'block'], ['SDT', [[56, 41]], 'rush'], ['MIKE', [[54, 39]], 'cover']],
    [[50, 60], [46, 62], [49, 62], [55, 54], [55, 44], [55, 32]]));
_s('s_insideZoneCutback', 'insideZone', 4, 'apply', _f(_TRIPS, '42nickel', { showGaps: true,
    note: 'Inside Zone, run right. This time the play-side double team gets squeezed backward, and the backside linebacker (Will) overruns the play flowing hard to the right.' }),
  _tap('tapGap', 'Where should you cut?', [['rightA', 'Right A'], ['rightB', 'Right B'], ['leftA', 'Left A (cutback)']], 'leftA',
    'The play side is getting squeezed and Will overran the play chasing the flow right — bend it back to the backside A gap he just vacated.'),
  _p('The play side gets squeezed and the Will flows right. The back sees the cutback lane open and bends it back to the left A gap.',
    [['RB', [[50, 58], [47, 53], [45, 46], [45, 36]], 'run'], ['SDT', [[54, 50]], 'rush'], ['WILL', [[46, 40], [58, 42]], 'cover']],
    [[50, 60], [46, 62], [50, 58], [47, 53], [45, 46], [45, 36]]));
_s('s_insideZoneRead', 'insideZone', 3, 'apply', _f(_TRIPS, '42nickel'),
  _mc('What is the running back’s primary read on Inside Zone?', [['a', 'The play-side double team and how it is pushing'], ['b', 'The free safety’s depth'], ['c', 'The quarterback’s eyes']], 'a',
    'The play-side double team tells you whether the hole is opening where you aimed or whether the run needs to bend back.'));
_s('s_insideZoneNoPreset', 'insideZone', 3, 'apply', _f(_TRIPS, '42nickel'),
  _mc('Why should the back NOT pick one gap before the snap on Inside Zone?', [['a', 'Zone blocking creates the hole live, based on how the defensive line reacts'], ['b', 'The offensive line has not decided who to block'], ['c', 'It is against the rules to pick a gap']], 'a',
    'The line blocks areas, not set defenders, so the opening depends on how the defense moves. Committing early means running into a hole that is not there.'));
_s('s_izPress', 'insideZone', 3, 'apply', _f('pistolRight', '43under'),
  _mc('Which describes the back’s path on Inside Zone?', [['a', 'Press toward the aiming point, read the double team, then cut through the hole that shows'], ['b', 'Run a fixed path to a gap picked before the snap'], ['c', 'Run wide around the edge every time']], 'a',
    'Press the line at your aiming point first, and let the blocks show you the hole.'));
_s('s_powerKick', 'powerRun', 4, 'apply', _f('iFormation', '43over', { note: 'Power run to the right. A puller will kick out the end man on the line of scrimmage.' }),
  _tap('tapDefender', 'Which defender is the end man on the line who must be kicked out?', [['SDE', 'Strong end'], ['SDT', 'Strong tackle'], ['SAM', 'Sam'], ['MIKE', 'Mike']], 'SDE',
    'On Power, the end man on the line of scrimmage — the first defender at the edge, here head-up on the tight end — is kicked out by a pulling blocker so the run can turn the corner inside him. (Which blocker does the kick-out varies by team.)'),
  _p('The left guard pulls across and kicks out the end man; the fullback leads through the hole; the tailback follows and cuts off the blocks.',
    [['LG', [[43, 57], [60, 57], [74, 49]], 'block'], ['FB', [[58, 60], [66, 52], [66, 42], [62, 36]], 'block'], ['TB', [[56, 66], [64, 56], [66, 46], [66, 36]], 'run'], ['RT', [[66, 49]], 'block'], ['SDE', [[74, 48]], 'rush'], ['MIKE', [[60, 38]], 'cover']],
    [[50, 57], [52, 62], [56, 66], [64, 56], [66, 46], [66, 36]]));
_s('s_powerPuller', 'powerRun', 3, 'apply', _f('iFormation', '43over'),
  _mc('On Power, who should the back follow?', [['a', 'The lead / pulling blocker, then cut off his block'], ['b', 'The free safety'], ['c', 'The quarterback’s eyes']], 'a',
    'Power has a lead blocker through the hole; the back stays tight to him and cuts off his block.'));
_s('s_powerDown', 'powerRun', 4, 'apply', _f('iFormation', '43over'),
  _mc('On Power, the play-side linemen “block down.” What does that mean?', [['a', 'Block the defenders toward the center to wall off the inside'], ['b', 'Drop to the ground'], ['c', 'Block the corners']], 'a',
    'Down blocks are inside blocks. They wall off the inside while a puller kicks out the edge.'));
_s('s_powerGap', 'powerRun', 3, 'apply', _f('iFormation', '43over'),
  _mc('Power is a gap-blocking run. What does that mean for the offensive line?', [['a', 'Each blocker is assigned a specific defender or gap'], ['b', 'They block whatever area is closest'], ['c', 'They all block the same defender']], 'a',
    'Gap blocking assigns defenders and gaps; zone blocking assigns areas. That’s the key difference between Power and Inside Zone.'));
_s('s_isoFB', 'isoLead', 3, 'apply', _f('iFormation', '43over', { note: 'Iso run to the A gap on the right.' }),
  _tap('tapPlayer', 'Who is the lead blocker on an Iso?', [['FB', 'Fullback'], ['TB', 'Tailback'], ['TE', 'Tight end']], 'FB',
    'On Iso, the fullback leads straight into the hole and blocks the first linebacker he finds. The tailback follows right behind.'),
  _p('The fullback attacks the Mike in the hole; the tailback follows his hip, then cuts off the block. Downhill — no wasted steps.',
    [['FB', [[53, 58], [55, 50], [54, 42]], 'block'], ['TB', [[53, 66], [55, 58], [55, 48], [56, 38]], 'run'], ['C', [[53, 49]], 'block'], ['RG', [[57, 49]], 'block'], ['MIKE', [[53, 41]], 'cover']],
    [[50, 57], [51, 62], [53, 66], [55, 58], [55, 48], [56, 38]]), { hideOptionLabels: true });
_s('s_isoRead', 'isoLead', 3, 'apply', _f('iFormation', '43over'),
  _mc('On Iso, what does the tailback read?', [['a', 'The fullback’s block — then cut off it'], ['b', 'The corner’s alignment'], ['c', 'The center’s snap']], 'a',
    'The fullback has already picked the point of attack. The tailback follows him and cuts off his block.'));
_s('s_isoRun', 'isoLead', 3, 'apply', _f('iFormation', '43over'),
  _mc('How should the tailback run Iso?', [['a', 'Downhill, tight to the fullback, no dancing behind the line'], ['b', 'Bounce it wide immediately'], ['c', 'Wait for the QB to signal']], 'a',
    'Iso is a downhill run — the speed and the block are the point. Hit the hole and make one cut.'));
_s('s_ozPath', 'outsideZone', 3, 'apply', _f('pistolRight', '43under'),
  _mc('What does the back do FIRST on Outside Zone?', [['a', 'Take a wide, flat path to press the edge'], ['b', 'Run straight up the A gap'], ['c', 'Cut back immediately']], 'a',
    'The back stretches the defense with a wide, flat path first, then plants and cuts up through the best crease.'),
  _p('The line takes wide zone steps and the back presses the edge, then plants and cuts upfield through the crease.',
    [['RB', [[58, 64], [68, 58], [74, 52], [76, 44], [77, 34]], 'run'], ['LT', [[33, 51]], 'block'], ['LG', [[43, 51]], 'block'], ['C', [[53, 51]], 'block'], ['RG', [[63, 51]], 'block'], ['RT', [[73, 51]], 'block'], ['TE', [[80, 50]], 'block'], ['SDE', [[75, 47]], 'rush'], ['MIKE', [[62, 38]], 'cover'], ['WILL', [[46, 38]], 'cover']],
    [[50, 58], [52, 62], [58, 64], [68, 58], [74, 52], [76, 44], [77, 34]]));
_s('s_ozBounce', 'outsideZone', 4, 'apply', _f('pistolRight', '43under'),
  _mc('When should the back bounce Outside Zone outside?', [['a', 'Only when the edge is already turned and there is a clear lane'], ['b', 'Every time'], ['c', 'Never']], 'a',
    'Bouncing wide when the edge is set just runs you into the corner. Press and cut — go outside only when the edge is blocked or turned.'));
_s('s_ozCut', 'outsideZone', 3, 'apply', _f('pistolRight', '43under'),
  _mc('After pressing the edge on Outside Zone, what comes next?', [['a', 'Plant your foot and cut upfield through the best crease'], ['b', 'Stop and wait'], ['c', 'Run backward']], 'a',
    'Press, plant, cut — a single decisive cut and then north-south.'));
_s('s_findMikeDoubles', 'rbFindMike', 2, 'recognize', _f('shotgunDoubles', '42nickel'),
  _tap('tapDefender', 'Pass protection: find the Mike.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['NB', 'Nickel']], 'MIKE',
    'Protection calls count from the Mike — the middle linebacker. Find him first, every play.'));
_s('s_findMikeUnder', 'rbFindMike', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Pass protection: find the Mike.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['SAM', 'Sam']], 'MIKE',
    'The Mike is the middle linebacker, stacked behind the nose.'));
_s('s_findMikeOver', 'rbFindMike', 2, 'recognize', _f('iFormation', '43over'),
  _tap('tapDefender', 'Pass protection: find the Mike.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['SAM', 'Sam']], 'MIKE',
    'The Mike is in the middle, at about the same depth as the other linebackers. The Sam is on the tight end’s side and the Will is on the weak side.'));
_s('s_whyFindMike', 'rbFindMike', 2, 'apply', _f('singlebackAce', '43under'),
  _mc('Why does a running back find the Mike first?', [['a', 'Protection rules count from him'], ['b', 'He always blitzes'], ['c', 'He is the fastest defender']], 'a',
    'The Mike is the anchor everyone counts from. Once you know who he is, you can tell who might be an extra rusher.'));
_s('s_tapNickelThreat', 'nickelBlitz', 3, 'recognize', _f(_TRIPS, '42nickel', { overrides: { NB: { x: 80, y: 45 } } }),
  _tap('tapDefender', 'One defender has walked up tight to the line and squared toward the backfield instead of a receiver. Tap the defender showing the blitz tell.', [['NB', 'Nickel'], ['CBR', 'Corner'], ['SS', 'Safety']], 'NB',
    'Walking up tight and squaring toward the backfield instead of a receiver is the Nickel blitz tell — he’s about to rush, not cover.'));
_s('s_blitzTellMC', 'nickelBlitz', 2, 'recognize', _f(_TRIPS, '42nickel', { overrides: { NB: { x: 80, y: 45 } } }),
  _mc('Which pre-snap clue most suggests the Nickel is about to blitz?', [['a', 'He walks up tight to the line and squares toward the backfield'], ['b', 'He backpedals to ten yards of depth'], ['c', 'He lines up directly behind the free safety']], 'a',
    'Moving up close to the line and facing the backfield instead of a receiver is the classic tell — he is about to rush, not cover.'));
_s('s_protectionResponsibility', 'rbProtectionRule', 4, 'apply', _f(_TRIPS, '42nickel', { overrides: { NB: { x: 80, y: 45 } },
    note: 'Half-slide protection, line sliding LEFT (toward Will). The Nickel walks up and blitzes off the right edge — the side the line is NOT sliding toward.' }),
  _tap('tapDefender', 'Who is your protection responsibility?', [['NB', 'Nickel'], ['WILL', 'Will'], ['MIKE', 'Mike']], 'NB',
    'The line slid left toward Will, so he’s accounted for. The Nickel blitzing off the right edge is the rusher the slide didn’t pick up — that’s your fill.'),
  _p('The line slides left. The Nickel comes off the right edge — the unblocked rusher — and the back steps up and fills to pick him up.',
    [['NB', [[74, 51], [64, 57], [54, 59]], 'rush'], ['RB', [[54, 63], [62, 60]], 'block'], ['LT', [[28, 53]], 'block'], ['LG', [[38, 53]], 'block'], ['C', [[48, 53]], 'block'], ['RG', [[58, 53]], 'block']]));
_s('s_protectionWill', 'rbProtectionRule', 4, 'apply', _f(_TRIPS, '42nickel', { overrides: { WILL: { x: 30, y: 45 } },
    note: 'Half-slide protection, line sliding RIGHT (toward the tight end side). The Will creeps up and blitzes off the left edge.' }),
  _tap('tapDefender', 'Who is your protection responsibility?', [['WILL', 'Will'], ['NB', 'Nickel'], ['MIKE', 'Mike']], 'WILL',
    'The line slid right, so the right side is accounted for. The Will rushing from the left is the one the slide does not pick up — he is your fill.'),
  _p('The line slides right. The Will blitzes off the left edge, and the back steps left to meet him.',
    [['WILL', [[34, 50], [42, 56], [46, 59]], 'rush'], ['RB', [[40, 62], [38, 59]], 'block'], ['LT', [[32, 53]], 'block'], ['LG', [[42, 53]], 'block'], ['C', [[52, 53]], 'block'], ['RG', [[62, 53]], 'block'], ['RT', [[72, 53]], 'block']]));
_s('s_protectionLookFirst', 'rbProtectionRule', 4, 'apply', _f(_TRIPS, '42nickel'),
  _mc('The line slides LEFT in half-slide protection. Which side do you check first for an unblocked rusher?', [['a', 'The right side — away from the slide'], ['b', 'The left side — where the line slid'], ['c', 'Straight downfield at the safeties']], 'a',
    'The slide already accounts for the left. Whoever the slide does not cover shows up on the opposite side — that is where your responsibility lives.'));
_s('s_blitzShowLB', 'blitzShow', 3, 'recognize', _f('pistolRight', '43under', { overrides: { MIKE: { x: 52, y: 44 } } }),
  _tap('tapDefender', 'One linebacker has walked up into an A gap, close to the line. Tap him.', [['MIKE', 'Mike'], ['WILL', 'Will'], ['SAM', 'Sam']], 'MIKE',
    'The Mike has crept up into the A gap. He may blitz — or bluff and drop. Either way, find him and stay ready to block.'));
_s('s_blitzShowBluff', 'blitzShow', 3, 'apply', _f('pistolRight', '43under', { overrides: { MIKE: { x: 52, y: 44 } } }),
  _mc('A linebacker walks up into the A gap. What is the best mindset for the back?', [['a', 'It could be a blitz or a bluff — stay ready to block and decide at the snap'], ['b', 'It is always a blitz — run right at him'], ['c', 'Ignore him']], 'a',
    'You can’t be sure before the snap. Keep your protection rules ready and react to what he does.'));
_s('s_cover2Flat', 'cover2Flat', 3, 'apply', _f(_TRIPS, '42nickel', { note: 'Defense is playing Cover 2. You release to the flat on the right side.' }),
  _mc('Who is your immediate threat releasing to the flat against Cover 2?', [['corner', 'The corner on your side'], ['deepSafety', 'The deep safety on your side'], ['mike', 'The Mike linebacker']], 'corner',
    'Both safeties are splitting the deep halves in Cover 2 — the corner is the defender actually positioned to get to the flat first.'),
  _p('In Cover 2 the safeties split the deep halves and the corner jumps the flat. The back releasing to the flat has the corner as his first threat.',
    [['RB', [[56, 66], [74, 62], [88, 58]], 'route'], ['CBR', [[92, 40], [88, 46]], 'cover'], ['FS', [[30, 12]], 'cover'], ['SS', [[70, 12]], 'cover']]));
_s('s_cover2Deep', 'cover2Flat', 2, 'apply', _f(_TRIPS, '42nickel'),
  _mc('In Cover 2, who splits the deep part of the field?', [['a', 'Two safeties, each taking a deep half'], ['b', 'Three defenders, each taking a deep third'], ['c', 'The two corners']], 'a',
    'Cover 2 means two deep defenders — the safeties — each responsible for half of the field deep, which is why the corners play underneath.'));
_s('s_cover2Weak', 'cover2Flat', 3, 'apply', _f(_TRIPS, '42nickel'),
  _mc('Where are the soft spots in Cover 2?', [['a', 'The flats and the seams between the corner and safety'], ['b', 'Deep behind the safeties'], ['c', 'Directly in front of the Mike']], 'a',
    'Cover 2 protects the deep halves, so the flats and the seams are where offenses attack it.'));

/* ===== D. Edge rusher / defensive end track ===== */
_s('s_primerEDGE', 'primerEDGE', 1, 'recognize', _f('pistolRight', '43under', { highlight: 'SDE' }),
  _mc('Which pair are an edge rusher’s first keys?', [['a', 'The offensive tackle, then the near back and guard (the “triangle”)'], ['b', 'The cornerback, then the safety'], ['c', 'The scoreboard, then the crowd']], 'a',
    'Start with the offensive tackle’s first move, then check the near back and the guard to find the ball.'));
_s('s_edgeKeyWhat', 'edgeKeys', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'SDE' }),
  _mc('What is the strong-side end’s first key?', [['a', 'The offensive tackle’s first step and shoulders'], ['b', 'The free safety'], ['c', 'The quarterback’s eyes only']], 'a',
    'The tackle in front of you tells you run or pass before anything else does.'));
_s('s_edgeKeyTap', 'edgeKeys', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'SDE' }),
  _tap('tapPlayer', 'Tap the offensive player the strong-side end keys first (he is a 5-technique).', [['RT', 'Right tackle'], ['RG', 'Right guard'], ['TE', 'Tight end'], ['RB', 'Running back']], 'RT',
    'A 5-technique is on the outside shoulder of the offensive tackle, so the tackle is your first key.'), { hideOptionLabels: true });
_s('s_edgeKeyTE', 'edgeKeys', 3, 'apply', _f('iFormation', '43over', { highlight: 'SDE' }),
  _mc('You are the strong-side end, head-up on the tight end (6-technique). Who is your first key?', [['te', 'The tight end'], ['rt', 'The right tackle'], ['fb', 'The fullback']], 'te',
    'You key whoever is directly in front of you. Head-up on the tight end means he is your first key.'));
_s('s_edgeReach', 'edgeReach', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SDE', note: 'Zone run to your side. The offensive tackle steps hard OUTSIDE to reach you.' }),
  _mc('What should you do?', [['a', 'Mirror his step, strike, keep your outside shoulder free and hold the edge'], ['b', 'Run upfield around him'], ['c', 'Let him wash you inside']], 'a',
    'He’s trying to wash you inside so the ball can run outside. Keep outside leverage and hold the edge.'),
  _p('The tackle reaches outside; the end mirrors, keeps outside leverage, and holds the edge so the back can’t get around him.',
    [['RT', [[74, 50]], 'block'], ['SDE', [[77, 46]], 'rush'], ['RB', [[58, 64], [68, 58], [73, 54]], 'run'], ['TE', [[80, 50]], 'block']],
    [[50, 58], [52, 62], [58, 64], [68, 58], [73, 54]]));
_s('s_edgeDownQ', 'edgeDown', 3, 'apply', _f('iFormation', '43under', { highlight: 'SDE', note: 'The offensive tackle steps DOWN inside, and the right guard pulls toward you.' }),
  _mc('What does this tell you, and what should you do?', [['a', 'A run is coming at you with a kick-out — close inside, take it on with leverage, don’t run upfield past it'], ['b', 'It’s a pass — rush upfield for the sack'], ['c', 'Chase the running back from behind']], 'a',
    'A down block plus a pulling guard means a run with a kick-out (or trap) on you. Closing the hole and taking it on with leverage keeps the run inside; running upfield past it opens the hole.'),
  _p('The tackle blocks down and the guard pulls to kick out the end. The end closes inside, takes on the kick-out with leverage, and the run is stopped in the hole.',
    [['RT', [[66, 50]], 'block'], ['RG', [[56, 56], [68, 56], [74, 49]], 'block'], ['SDE', [[72, 49], [68, 49]], 'rush'], ['TB', [[58, 66], [66, 56], [67, 48]], 'run'], ['FB', [[60, 60], [67, 52]], 'block']],
    [[50, 57], [52, 62], [58, 66], [66, 56], [67, 48]]));
_s('s_edgeDownKey', 'edgeDown', 3, 'recognize', _f('iFormation', '43under', { highlight: 'SDE' }),
  _mc('The tackle in front of you blocks DOWN, away from you. What does that most likely mean?', [['a', 'Run — someone else is coming to block you (kick-out or trap)'], ['b', 'Pass — he is setting up'], ['c', 'Nothing — keep rushing upfield']], 'a',
    'When the tackle goes down, the play is a run and somebody — a guard or a back — is usually coming to block you.'));
_s('s_edgeBoot', 'edgeBoot', 3, 'apply', _f('pistolRight', '43under', { highlight: 'WDE', note: 'Zone run action flows RIGHT. You are the backside (left) end. The quarterback fakes the handoff and keeps hiding the ball.' }),
  _mc('What is your job?', [['a', 'Stay home, keep outside leverage, and contain the quarterback'], ['b', 'Chase the running back across the field'], ['c', 'Run upfield wildly']], 'a',
    'If the line flows away and the QB hides the ball, it could be a bootleg. Don’t chase the fake — contain the QB.'),
  _p('The run action flows right while the QB bootlegs left. The backside end doesn’t chase the fake — he stays home and contains the QB.',
    [['QB', [[44, 60], [34, 62], [24, 60]], 'route'], ['RB', [[56, 66], [62, 62]], 'run'], ['WDE', [[20, 52], [22, 57]], 'rush'], ['LT', [[33, 51]], 'block'], ['LG', [[43, 51]], 'block'], ['C', [[53, 51]], 'block'], ['RG', [[63, 51]], 'block'], ['RT', [[73, 51]], 'block']],
    [[50, 58], [44, 60], [34, 62], [24, 60]]));
_s('s_edgeBootWhy', 'edgeBoot', 3, 'apply', _f('pistolRight', '43under', { highlight: 'WDE' }),
  _mc('Why must the backside end NOT chase the zone flow?', [['a', 'The quarterback may keep the ball on a bootleg'], ['b', 'It’s against the rules'], ['c', 'The ball is always handed to the tight end']], 'a',
    'Chasing flow takes you out of the play if the QB keeps it. Backside contain is the job.'));
_s('s_edgePassSet', 'edgePassRush', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE', note: 'The offensive tackle takes a deep, vertical kick-slide set back toward the quarterback.' }),
  _mc('What is it, and what is your plan?', [['a', 'Pass — rush with a plan and keep the QB on your inside shoulder'], ['b', 'Run — squeeze the hole'], ['c', 'Screen — drop into coverage']], 'a',
    'A deep, vertical set is a pass block. Have a rush plan and keep the quarterback on your inside shoulder.'),
  _p('The tackle sets deep. The end rushes the corner and bends back to the quarterback — and never gets deeper than the QB.',
    [['LT', [[27, 56], [30, 58]], 'block'], ['WDE', [[24, 53], [32, 58], [44, 60]], 'rush'], ['RT', [[72, 56], [68, 58]], 'block'], ['SDE', [[75, 52], [67, 58], [56, 60]], 'rush']]));
_s('s_edgeDepth', 'edgePassRush', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE' }),
  _mc('On a pass rush, how deep should you get relative to the quarterback?', [['a', 'No deeper than the quarterback'], ['b', 'As deep as possible behind him'], ['c', 'Stay at the line of scrimmage']], 'a',
    'If you rush past the QB, he steps up and escapes. Stay level with or shallower than him.'));
_s('s_edgeLane', 'edgePassRush', 3, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE' }),
  _mc('Which shoulder should you keep the quarterback on while you rush?', [['a', 'Your inside shoulder'], ['b', 'Your outside shoulder'], ['c', 'It doesn’t matter']], 'a',
    'Keeping the QB on your inside shoulder keeps you in your lane so he can’t slide around you.'));
_s('s_edgeDraw', 'edgeDrawScreen', 4, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE', note: 'The tackle sets back like a pass block, then suddenly drives you upfield past the quarterback.' }),
  _mc('What play is this, and what do you do?', [['a', 'A draw — retrace and attack the ball from the outside in'], ['b', 'A screen — put your hands up'], ['c', 'A bootleg — chase the QB']], 'a',
    'A pass-set that turns into a drive-block is a draw. Stop rushing, retrace, and attack the ball carrier.'),
  _p('The tackle sets as if to pass-block, then drives the rusher upfield. The end retraces and attacks the back from the outside in.',
    [['LT', [[27, 56], [34, 54]], 'block'], ['WDE', [[24, 54], [28, 57], [36, 56], [48, 52]], 'rush'], ['RB', [[58, 60], [58, 50], [57, 42]], 'run']],
    [[50, 60], [56, 63], [58, 60], [58, 50], [57, 42]]));
_s('s_edgeScreen', 'edgeDrawScreen', 4, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE', note: 'Linemen let you go free, the quarterback drops, and the back slides out to your side.' }),
  _mc('What play might this be?', [['a', 'A screen — get your hands up and find the ball'], ['b', 'A draw'], ['c', 'A sack — keep rushing']], 'a',
    'When blockers let you go free and the back slides out, a screen may be coming. Get your hands up and find the ball.'));
_s('s_edgeSetEdge', 'edgeHeavy', 3, 'apply', _f('wingRight', '43over', { highlight: 'SDE', note: 'A wingback and a tight end are lined up on your side.' }),
  _mc('What is your main job against the run here?', [['a', 'Set the edge: hold your ground and keep your outside shoulder free'], ['b', 'Run upfield past the wing'], ['c', 'Drop into coverage']], 'a',
    'Extra blockers mean kick-outs and double teams. Set the edge so the ball can’t get around you.'));
_s('s_edgeHeavyPA', 'edgeHeavy', 3, 'apply', _f('tightEndHeavy', '43over', { highlight: 'SDE' }),
  _mc('Against three tight ends, what should you still be ready for?', [['a', 'Play-action — it can look just like a run'], ['b', 'A kickoff'], ['c', 'Nothing but runs']], 'a',
    'Heavy sets run the ball a lot, which makes play-action effective. Read the tackle’s first step before you rush.'));
_s('s_edge3rdLong', 'edgeSituation', 2, 'apply', _f('shotgunDoubles', '43under', { highlight: 'WDE', note: '3rd and 12. The offense is in Shotgun with four receivers.' }),
  _mc('What is your best plan?', [['a', 'Get off the ball fast and rush the quarterback'], ['b', 'Sit and wait for a run'], ['c', 'Drop into coverage']], 'a',
    'On 3rd and long the offense has to pass. Get-off and a good rush plan win.'));
_s('s_edge1stRun', 'edgeSituation', 2, 'apply', _f('iFormation', '43under', { highlight: 'SDE', note: '1st and 10. The offense has two backs in the I-Formation.' }),
  _mc('What do you play first?', [['a', 'The run — use your keys before you rush'], ['b', 'The pass — rush immediately'], ['c', 'A blitz every time']], 'a',
    'An I-Formation on first down is a run look. Read the tackle first and rush only if it is a pass.'));
_s('s_edgeOLB34', 'front34', 3, 'apply', _f('iFormation', '34base', { highlight: 'SOLB' }),
  _mc('In a 3-4, who are the edge rushers?', [['a', 'The outside linebackers'], ['b', 'The nose tackle'], ['c', 'The free safety']], 'a',
    'In a 3-4 the outside linebackers stand on the edge and rush like defensive ends.'));
_s('s_edgeOZ', 'outsideZone', 3, 'apply', _f('pistolRight', '43under', { highlight: 'SDE', note: 'Outside Zone to your side. The tight end and tackle both step wide.' }),
  _mc('What is the key idea against Outside Zone?', [['a', 'Keep outside leverage so the ball can’t get around you'], ['b', 'Run upfield and let the back go past'], ['c', 'Wait for the cornerback']], 'a',
    'Outside Zone tries to stretch the defense. Keeping outside leverage on the edge forces the back to cut inside.'));


_s('s_edgeAlignWide', 'edgeAlign', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'WDE' }),
  _mc('Which alignment lines up farthest outside?', [['9', '9 technique'], ['5', '5 technique'], ['3', '3 technique'], ['1', '1 technique']], '9',
    'A 9-technique lines up outside the end man on the line — the widest of these.'));
_s('s_edge7', 'edgeAlign', 3, 'recognize', _f('pistolRight', '43over', { highlight: 'SDE' }),
  _mc('Where does a 7-technique line up?', [['a', 'On the inside shoulder of the tight end'], ['b', 'On the outside shoulder of the tackle'], ['c', 'Head-up on the center']], 'a',
    'A 7 is on the tight end’s inside shoulder. A 6 is head-up; a 9 is outside him.'));
_s('s_edgeWhyWide', 'edgeAlign', 3, 'apply', _f('pistolRight', '43under', { highlight: 'WDE' }),
  _mc('What is the main benefit of lining up wide as a pass rusher?', [['a', 'A faster path to the quarterback'], ['b', 'Better against inside runs'], ['c', 'Easier to cover receivers']], 'a',
    'Wider means a faster angle at the QB, but you give up some strength against the run inside you.'));
_s('s_edgeTapWide', 'edgeAlign', 2, 'recognize', _f('pistolRight', '43under'),
  _tap('tapDefender', 'Tap the defender lined up wide, outside the left tackle (a 9-technique).', [['WDE', 'Weak end'], ['WDT', 'Weak tackle'], ['WILL', 'Will'], ['SDE', 'Strong end']], 'WDE',
    'With no tight end on the left, the weak-side end lines up wide of the tackle — a wide edge rusher.'));

/* ===== E. Linebacker track (Mike / Will / Sam) ===== */
_s('s_primerLB', 'primerLB', 1, 'recognize', _f('iFormation', '43under', { highlight: 'MIKE' }),
  _mc('In what order do linebackers read?', [['a', 'The guards, then the near back, then the ball'], ['b', 'The ball, then the crowd'], ['c', 'The corner, then the safety']], 'a',
    'Read through the line: the guards tell you run or pass and direction, the near back finishes the picture, then find the ball.'));
_s('s_lbRoleMike', 'lbRoles', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'MIKE' }),
  _mc('Which describes the Mike linebacker best?', [['a', 'The middle linebacker who sets the front and makes the calls'], ['b', 'The strong-side linebacker who covers the tight end'], ['c', 'The free safety']], 'a',
    'The Mike is the middle linebacker and the quarterback of the front.'));
_s('s_lbRoleWill', 'lbRoles', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'WILL' }),
  _mc('Which linebacker is usually the one protected by the front so he can run to the ball?', [['a', 'The Will'], ['b', 'The Sam'], ['c', 'The Mike']], 'a',
    'The Will is the weak-side linebacker; the line usually keeps him clean so he can run to the ball.'));
_s('s_lbRoleSam', 'lbRoles', 2, 'recognize', _f('pistolRight', '43under', { highlight: 'SAM' }),
  _mc('Which linebacker lines up on the tight end side and often covers him?', [['a', 'The Sam'], ['b', 'The Will'], ['c', 'The Mike']], 'a',
    'The Sam is the strong-side linebacker: he sets the edge and covers the tight end.'));
_s('s_lbSamUnder', 'front43Under', 3, 'recognize', _f('pistolRight', '43under', { highlight: 'SAM' }),
  _mc('In the 4-3 Under, where does the Sam line up?', [['a', 'On or over the tight end, close to the line'], ['b', 'Deep over the middle'], ['c', 'On the weak side']], 'a',
    'The Under front walks the Sam up over the tight end.'));
_s('s_lbGuardRun', 'lbGuardKey', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'MIKE', note: 'Both guards fire out low and flat toward you.' }),
  _mc('What does that tell you?', [['run', 'Run'], ['pass', 'Pass'], ['screen', 'Screen']], 'run',
    'Guards firing out low with pads down is a run key.'));
_s('s_lbGuardPass', 'lbGuardKey', 2, 'recognize', _f('singlebackAce', '43under', { highlight: 'MIKE', note: 'Both guards set back with tall pads, like pass protection.' }),
  _mc('What does that tell you?', [['run', 'Run'], ['pass', 'Pass'], ['kick', 'Kickoff']], 'pass',
    'Guards setting back with their pads high is a pass key.'));
_s('s_lbGuardPull', 'lbGuardKey', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE', note: 'The right guard pulls across the formation to your left.' }),
  _mc('What does the pulling guard tell you?', [['a', 'Run, going the way he is pulling'], ['b', 'Pass'], ['c', 'Nothing']], 'a',
    'A pulling guard shows the direction of the run. Read it and fit your gap.'));
_s('s_lbFlowTight', 'lbFlows', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE', note: 'The guards block straight ahead and the back runs straight downhill with no lateral step.' }),
  _mc('Which flow is this?', [['tight', 'Tight flow'], ['full', 'Full flow'], ['fast', 'Fast flow'], ['split', 'Split flow']], 'tight',
    'Straight-ahead blocks and a downhill back with no lateral step is tight flow (dive, trap, iso). Attack and fill the open window.'),
  _p('Tight flow: the back runs straight downhill. The linebacker attacks and fills the open window at the line of scrimmage.',
    [['TB', [[52, 66], [54, 56], [54, 46]], 'run'], ['FB', [[52, 60], [54, 52], [54, 44]], 'block'], ['MIKE', [[53, 42]], 'cover'], ['C', [[53, 49]], 'block'], ['RG', [[57, 49]], 'block']],
    [[50, 57], [52, 62], [52, 66], [54, 56], [54, 46]]));
_s('s_lbFlowFull', 'lbFlows', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE', note: 'The guards flow together to one side and the back takes a lateral step before running downhill — like inside zone.' }),
  _mc('Which flow is this?', [['tight', 'Tight flow'], ['full', 'Full flow'], ['fast', 'Fast flow'], ['split', 'Split flow']], 'full',
    'Zone-style flow with a lateral step before downhill is full flow (inside zone, power). Stay square and shuffle to the next open window.'),
  _p('Full flow: the back steps sideways, then goes downhill. The linebacker stays square and shuffles with him, pressing the next open window.',
    [['RB', [[56, 64], [58, 56], [58, 46]], 'run'], ['MIKE', [[56, 38], [58, 40]], 'cover'], ['LG', [[43, 51]], 'block'], ['C', [[53, 51]], 'block'], ['RG', [[63, 51]], 'block']],
    [[50, 58], [53, 62], [56, 64], [58, 56], [58, 46]]));
_s('s_lbFlowFast', 'lbFlows', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE', note: 'The back runs a wide, sideways path and the linemen take wide zone steps — a stretch.' }),
  _mc('Which flow is this?', [['tight', 'Tight flow'], ['full', 'Full flow'], ['fast', 'Fast flow'], ['split', 'Split flow']], 'fast',
    'A wide, sideways path with a stretching line is fast flow (outside zone, toss, sweep). Open up, mirror the back, and get outside the box.'),
  _p('Fast flow: the back stretches wide. The linebacker opens his hips, mirrors the back and runs to get outside the box.',
    [['RB', [[60, 64], [72, 60], [80, 54]], 'run'], ['MIKE', [[64, 38], [74, 36], [80, 40]], 'cover'], ['RT', [[74, 51]], 'block'], ['TE', [[82, 50]], 'block']],
    [[50, 58], [54, 62], [60, 64], [72, 60], [80, 54]]));
_s('s_lbFlowSplit', 'lbFlows', 4, 'apply', _f('pistolRight', '43under', { highlight: 'WILL', note: 'The play-side guard steps one way and the backside guard pulls away across the formation. The back first steps away, then follows the puller.' }),
  _mc('Which flow is this?', [['tight', 'Tight flow'], ['full', 'Full flow'], ['fast', 'Fast flow'], ['split', 'Split flow']], 'split',
    'The guards stepping opposite ways — a pull away from the play — is split flow (counter, misdirection). Watch the pull and shuffle with it.'),
  _p('Split flow: the back steps one way and the left guard pulls the other way. The linebacker watches the pull and shuffles with it.',
    [['LG', [[43, 57], [58, 57], [68, 50]], 'block'], ['RB', [[44, 64], [54, 64], [64, 56]], 'run'], ['WILL', [[34, 40], [46, 40], [58, 42]], 'cover']],
    [[50, 58], [48, 62], [54, 64], [64, 56]]));
_s('s_lbFlowFullTech', 'lbFlows', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE' }),
  _mc('Against FULL flow (an inside-zone look), what is the best technique?', [['a', 'Stay square, shuffle with the back, and press the next open window'], ['b', 'Run around the blocks'], ['c', 'Drop deep into coverage']], 'a',
    'In full flow the hole shows live, so keep your shoulders square, shuffle, and press the next open window.'));
_s('s_lbFlowFastTech', 'lbFlows', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE' }),
  _mc('Against FAST flow (outside zone or toss), what should you do?', [['a', 'Open up, mirror the back, and get outside the box'], ['b', 'Stay in the A gap'], ['c', 'Wait for the QB']], 'a',
    'Fast flow stretches the defense. If you stay in the box you lose the edge. Open your hips and run with the back.'));
_s('s_lbFlowTightTech', 'lbFlows', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE' }),
  _mc('Against TIGHT flow (iso, dive), what should you do?', [['a', 'Attack downhill and fill the open window'], ['b', 'Run to the sideline'], ['c', 'Back up'], ['d', 'Wait to be blocked']], 'a',
    'Tight flow is a downhill run. Attack and fill the open window.'));
_s('s_lbIKey', 'lbIKey', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE' }),
  _tap('tapPlayer', 'In the I-Formation, which offensive player’s path do you read through the guard?', [['FB', 'Fullback'], ['TB', 'Tailback'], ['QB', 'Quarterback'], ['TE', 'Tight end']], 'FB',
    'The fullback leads the way. His path through the guard shows you where the point of attack is.'), { hideOptionLabels: true });
_s('s_lbIFit', 'lbIKey', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE' }),
  _mc('How should you meet a lead blocker?', [['a', 'Attack downhill, meet him at the line with your near foot and near shoulder, keep an arm free'], ['b', 'Wait behind the line'], ['c', 'Run around him']], 'a',
    'Meeting the lead blocker low and square at the line keeps you in your gap and lets you make the tackle.'));
_s('s_lbFillWrong', 'lbIKey', 3, 'apply', _f('iFormation', '43under', { highlight: 'MIKE' }),
  _mc('What is wrong with running around the lead blocker?', [['a', 'You leave your gap open for the back'], ['b', 'It’s too tiring'], ['c', 'Nothing']], 'a',
    'A linebacker’s job is to fill his gap. Going around the block opens it.'));
_s('s_lbPlayAction', 'lbPlayAction', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'MIKE', note: 'The guards fire out like a run and the quarterback fakes the handoff.' }),
  _mc('What should you do?', [['a', 'Honor the run briefly, then work back to your drop — don’t take extra steps toward the fake'], ['b', 'Chase the running back'], ['c', 'Blitz']], 'a',
    'Discipline beats curiosity. If the ball doesn’t get handed off, get back to your pass responsibilities.'),
  _p('Play-action: the back fakes and the QB drops. The linebacker doesn’t bite — he gets depth into his zone as the tight end crosses behind him.',
    [['RB', [[55, 64], [57, 56]], 'run'], ['QB', [[50, 63]], 'route'], ['TE', [[76, 42], [64, 32]], 'route'], ['MIKE', [[53, 38], [58, 30]], 'cover']],
    [[50, 57], [50, 63]]));
_s('s_lbPAEyes', 'lbPlayAction', 3, 'apply', _f('singlebackAce', '43under', { highlight: 'MIKE' }),
  _mc('After a run fake, where do your eyes go?', [['a', 'Back to the quarterback and the releasing tight end or back'], ['b', 'Only at the running back'], ['c', 'At the scoreboard']], 'a',
    'Find the QB, then the receivers releasing behind you.'));
_s('s_lbZoneHook', 'lbCoverageDrops', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'MIKE' }),
  _mc('Which zones do linebackers usually cover in zone coverage?', [['a', 'The underneath hook and curl zones'], ['b', 'The deep thirds'], ['c', 'The sideline only']], 'a',
    'Linebackers cover the underneath middle: hook and curl zones. Safeties cover deep.'));
_s('s_lbTampa2', 'lbCoverageDrops', 4, 'apply', _f(_TRIPS, '42nickel', { highlight: 'MIKE' }),
  _mc('In the Tampa 2 version of Cover 2, where does the Mike drop?', [['a', 'Deep down the middle, between the two safeties'], ['b', 'To the flat'], ['c', 'Into the A gap']], 'a',
    'The Tampa 2 Mike runs the deep middle, covering the hole between the safeties.'),
  _p('Tampa 2: the safeties split the deep halves and the Mike runs the deep middle between them.',
    [['MIKE', [[52, 28], [50, 20]], 'cover'], ['FS', [[30, 12]], 'cover'], ['SS', [[70, 12]], 'cover'], ['NB', [[84, 44]], 'cover']]));
_s('s_lbDepth', 'lbCoverageDrops', 3, 'apply', _f(_TRIPS, '42nickel', { highlight: 'MIKE' }),
  _mc('On a pass drop, what is the first priority?', [['a', 'Get depth while keeping your eyes on the quarterback'], ['b', 'Look at the receiver only'], ['c', 'Stay at the line']], 'a',
    'Get depth first. If you stay shallow, throws go over your head.'));
_s('s_lbBlitzGap', 'lbBlitz', 3, 'apply', _f('pistolRight', '43under', { showGaps: true, highlight: 'MIKE', note: 'The Mike is called to blitz the right A gap.' }),
  _mc('When you blitz, what is your first thought?', [['a', 'Know your gap letter and stay in it'], ['b', 'Go wherever the ball is'], ['c', 'Wait for a teammate']], 'a',
    'Blitzes run on exact lanes. Own your gap.'),
  _p('The Mike blitzes the right A gap, staying in his lane so he doesn’t cross a teammate’s path.',
    [['MIKE', [[54, 44], [54, 52], [52, 58]], 'rush'], ['C', [[52, 52]], 'block'], ['RG', [[58, 52]], 'block']]));
_s('s_lbBlitzShow', 'lbBlitz', 3, 'apply', _f('pistolRight', '43under', { highlight: 'MIKE' }),
  _mc('You are showing blitz but will drop at the snap. How should your pre-snap look compare to a real blitz?', [['a', 'It should look the same'], ['b', 'It should look different so the offense knows'], ['c', 'It doesn’t matter']], 'a',
    'A bluff only works if it looks like the real thing.'));
_s('s_lbHeavyRun', 'lbShortYardage', 3, 'apply', _f('fullHouse', '43over', { highlight: 'MIKE' }),
  _mc('Against a Full House backfield, what should you expect?', [['a', 'A downhill power run with lead blockers — but watch for play-action'], ['b', 'Four-wide passing'], ['c', 'A punt']], 'a',
    'Full House is a power-running look. Read the guards to see if it is a fake.'));
_s('s_lbHeavyFill', 'lbShortYardage', 3, 'apply', _f('fullHouse', '43over', { showGaps: true, highlight: 'MIKE' }),
  _mc('At the goal line against a heavy set, what matters most?', [['a', 'Low pad level and filling your gap'], ['b', 'Dropping back into coverage'], ['c', 'Running around the blockers']], 'a',
    'The low man wins at the goal line. Fill your gap and don’t let the lead blocker get you.'));
_s('s_lbTEHeavy', 'lbShortYardage', 3, 'apply', _f('tightEndHeavy', '43over', { highlight: 'MIKE' }),
  _mc('Against three tight ends, what do you expect most?', [['a', 'A run, with play-action to the tight ends as a surprise'], ['b', 'A deep pass every time'], ['c', 'A punt']], 'a',
    'Heavy personnel runs the ball, which also makes play-action a strong surprise.'));
_s('s_lbWing', 'lbShortYardage', 3, 'apply', _f('wingRight', '43over', { highlight: 'SAM' }),
  _mc('Against a wing formation, where should you be ready for extra blockers?', [['a', 'To the strong side, where the wing and the tight end are'], ['b', 'To the weak side'], ['c', 'Deep']], 'a',
    'The wingback and tight end both load the strong side with blockers.'));
_s('s_lbSpread', 'lbSpread', 3, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'MIKE' }),
  _mc('Against 10 Personnel (four wide receivers), what changes?', [['a', 'Fewer blockers in the box, and more space to defend'], ['b', 'More blockers in the box'], ['c', 'Nothing']], 'a',
    'Spread formations pull defenders outside, making a lighter box and more space to cover.'));
_s('s_lbMatch', 'lbSpread', 3, 'apply', _f('shotgunDoubles', '42nickel', { highlight: 'MIKE' }),
  _mc('Who should a linebacker be ready to cover against a spread set?', [['a', 'A back or a slot receiver'], ['b', 'The deep safety'], ['c', 'Only the tight end']], 'a',
    'In spread sets linebackers are often asked to match a back or a slot receiver.'));

/* Scenario ids grouped by stage — the session builder picks from these
   (filtered to the athlete’s track in the app code). */
const SCENARIOS_BY_STAGE = { recognize: [], apply: [], test: [] };
Object.keys(SCENARIOS).forEach(id => {
  const st = SCENARIOS[id].stage;
  if (SCENARIOS_BY_STAGE[st]) SCENARIOS_BY_STAGE[st].push(id);
  SCENARIOS_BY_STAGE.test.push(id);
});
