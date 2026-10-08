/* =========================================================
   FOOTBALL CONTENT DATA — Jr Level 13 Film Room
   =========================================================
   This file is PURE football content: formations, fronts, gaps,
   concepts, lessons, and scenarios. No UI code, no app logic, no
   reference to `state`/`save`/`render`. The idea (straight from the
   spec this was built against) is that a coach or anyone checking
   football accuracy can review or correct THIS file without reading
   a single line of application code.

   Coordinates are on a normalized 0-100 by 0-100 grid representing a
   stretch of field around the line of scrimmage (y=50). Offense lines
   up below the LOS (y>50), defense above it (y<50), x runs left(0)
   to right(100) from the offense's perspective facing the defense.

   Scope note: this is the Phase 1 vertical slice (one formation, one
   front, one run concept, one blitz, one protection rule, one
   coverage concept) — not the full curriculum. See
   Football_IQ_Architecture_Proposal.md, section 8, for the roadmap.
   ========================================================= */

const POSITIONS = {
  RB:   { label: 'Running Back' },
  EDGE: { label: 'EDGE / Defensive End' },
  LB:   { label: 'Linebacker' }
};

/* ---------- Base alignments (reused by every lesson/scenario) ---------- */

// 11 Personnel (1 RB, 1 TE, 3 WR), Shotgun, Trips Right — chosen because
// it's the exact look the "Nickel defender walks out toward the trips
// side" teaching example uses, so Recognize/Apply content can share one
// consistent picture instead of a different formation per concept.
const OFFENSE_SHOTGUN_TRIPS_RIGHT = [
  { id: 'LT', label: 'LT', x: 30, y: 52, group: 'OL' },
  { id: 'LG', label: 'LG', x: 40, y: 52, group: 'OL' },
  { id: 'C',  label: 'C',  x: 50, y: 52, group: 'OL' },
  { id: 'RG', label: 'RG', x: 60, y: 52, group: 'OL' },
  { id: 'RT', label: 'RT', x: 70, y: 52, group: 'OL' },
  { id: 'QB', label: 'QB', x: 50, y: 60, group: 'skill' },
  { id: 'RB', label: 'RB', x: 44, y: 64, group: 'skill' },
  { id: 'X',  label: 'X',  x: 5,  y: 50, group: 'skill' },   // isolated WR, left
  { id: 'TE', label: 'TE', x: 78, y: 52, group: 'skill' },   // inline right, part of trips
  { id: 'Z',  label: 'Z',  x: 85, y: 48, group: 'skill' },   // trips slot
  { id: 'Y',  label: 'Y',  x: 95, y: 46, group: 'skill' }    // trips outside
];

// 4-2 Nickel: 4 down linemen, 2 linebackers, 5 defensive backs (one of
// them a Nickel in place of a 3rd linebacker). Aligned to the Trips
// Right look above — Nickel walked out over the slot, per the spec's
// own worked example.
const DEFENSE_42_NICKEL_VS_TRIPS = [
  { id: 'LE',  label: 'LE',  x: 22, y: 46, group: 'DL', technique: '5tech' },
  { id: 'DT1', label: 'DT',  x: 37, y: 46, group: 'DL', technique: '3tech' },
  { id: 'DT2', label: 'DT',  x: 58, y: 46, group: 'DL', technique: '1tech' },
  { id: 'RE',  label: 'RE',  x: 74, y: 44, group: 'DL', technique: '5tech' },
  { id: 'WILL', label: 'Will', x: 28, y: 38, group: 'LB', role: 'Will' },
  { id: 'MIKE', label: 'Mike', x: 52, y: 36, group: 'LB', role: 'Mike' },
  { id: 'CBL', label: 'CB', x: 5,  y: 26, group: 'DB' },
  { id: 'NB',  label: 'NB', x: 83, y: 36, group: 'DB', role: 'Nickel' }, // walked out
  { id: 'CBR', label: 'CB', x: 95, y: 26, group: 'DB' },
  { id: 'FS',  label: 'FS', x: 50, y: 15, group: 'DB' },
  { id: 'SS',  label: 'SS', x: 78, y: 20, group: 'DB' }
];

// Gaps, named from the offense's alignment above. The weak side (left,
// no attached TE) only has A/B/C gaps; the strong side (right, TE
// attached) also has a D gap outside the tight end — this is standard,
// accurate gap terminology, not simplified-away.
const GAPS_VS_TRIPS_RIGHT = [
  { id: 'leftC',  label: 'C', x: 25, y: 49, side: 'weak' },
  { id: 'leftB',  label: 'B', x: 35, y: 49, side: 'weak' },
  { id: 'leftA',  label: 'A', x: 45, y: 49, side: 'weak' },
  { id: 'rightA', label: 'A', x: 55, y: 49, side: 'strong' },
  { id: 'rightB', label: 'B', x: 65, y: 49, side: 'strong' },
  { id: 'rightC', label: 'C', x: 74, y: 49, side: 'strong' },
  { id: 'rightD', label: 'D', x: 84, y: 49, side: 'strong' }
];

const FORMATIONS = {
  shotgunTripsRight: {
    id: 'shotgunTripsRight',
    name: 'Shotgun, Trips Right',
    personnel: '11',
    players: OFFENSE_SHOTGUN_TRIPS_RIGHT,
    description: 'QB set back in shotgun depth, RB offset to his left, three receivers (TE + 2 WR) stacked to the right, one isolated receiver left.'
  }
};

const PERSONNEL_GROUPINGS = {
  '11': { id: '11', rb: 1, te: 1, wr: 3, label: '11 Personnel', description: '1 running back, 1 tight end, 3 wide receivers — the most common personnel grouping in modern football because it can threaten the defense with both the run and the pass without a substitution.' }
};

const DEFENSIVE_FRONTS = {
  '42nickel': {
    id: '42nickel',
    name: '4-2 Nickel',
    players: DEFENSE_42_NICKEL_VS_TRIPS,
    description: '4 down linemen, 2 true linebackers, and a 5th defensive back (the Nickel) in place of a 3rd linebacker — a sub-package front built to defend 3-receiver sets like Trips without being outnumbered in coverage.'
  }
};

const TECHNIQUES = {
  '1tech': { id: '1tech', label: '1 Technique', description: 'Aligned on the inside shoulder of the guard, just off the center — anchors the defense against inside zone/dive and occupies two blockers.' },
  '3tech': { id: '3tech', label: '3 Technique', description: 'Aligned on the outside shoulder of the guard — the most common 1-gap penetrating alignment in a 4-man front, usually the most disruptive run-stopping defensive tackle.' },
  '5tech': { id: '5tech', label: '5 Technique', description: 'Aligned on the outside shoulder of the offensive tackle — sets the edge against the run and rushes off the tackle’s outside shoulder as a pass rusher.' }
};

const RUN_CONCEPTS = {
  insideZone: {
    id: 'insideZone',
    name: 'Inside Zone',
    aimingPoint: 'The play-side guard\u2019s hip at the snap — many coaches teach the outside hip of the play-side guard, though the exact aiming point varies a little by coach and system.',
    primaryRead: 'The play-side double team — the first down lineman past the center on the play side. If that double team is winning and pushing vertically, and the backside is cut off, the back presses and runs through the called gap.',
    secondaryRead: 'If the play-side double team gets squeezed or beaten backward, the back looks to bend the run back toward the backside cutback lane, reading the backside linebacker’s pursuit.',
    cutbackNotes: 'A good Inside Zone back never commits to a single predetermined gap before the snap — the whole point of zone blocking is that the hole shows up live, based on how the defensive line reacts to the double teams.',
    description: 'A zone run where the offensive line blocks area/gaps rather than specific defenders, and the running back reads the resulting leverage rather than following a predetermined path.'
  }
};

const BLITZES = {
  nickelBlitz: {
    id: 'nickelBlitz',
    name: 'Nickel Blitz',
    description: 'The Nickel defender, instead of staying in coverage over the slot, blitzes off the edge or through an inside gap — replacing a rusher the offensive line’s protection scheme didn’t account for.',
    tells: ['The Nickel walks up tight to the line of scrimmage before the snap instead of staying at a normal coverage depth.', 'The Nickel squares his shoulders toward the backfield instead of a receiver.']
  }
};

const PROTECTIONS = {
  halfSlide: {
    id: 'halfSlide',
    name: 'Half Slide (RB Fill)',
    description: 'The offensive line slides protection toward one side (usually toward the Will/weak side or the side with the extra rusher), and the running back is responsible for picking up whoever the slide does NOT account for on the other side — typically the most dangerous remaining threat off the back’s side, which is often a blitzing Nickel, Sam, or overloading rusher the line isn’t sliding toward.',
    rbRule: 'Before the snap, identify the side the line is sliding toward. Your eyes go to the opposite side first — if an extra rusher shows up there (like a blitzing Nickel), he is almost always your responsibility.'
  }
};

const COVERAGES = {
  cover2: {
    id: 'cover2',
    name: 'Cover 2',
    description: 'Two deep safeties split the field in half deep, while the corners play shorter, underneath zones (often jamming the receiver first) — the structure is built to be stout against deep passes but can be stressed underneath, especially in the flat and the seams.',
    assignmentsByPosition: {
      RB: 'When you release to the flat against Cover 2, the corner on your side is usually the first underneath threat — he’s responsible for the flat/underneath zone before either safety can get there, since both safeties are focused on the deep halves.'
    }
  }
};

/* ---------- Concepts (the ids state.footballIQ.concepts tracks) ---------- */

const CONCEPTS = {
  personnel11:    { id: 'personnel11',    label: '11 Personnel',            position: 'RB', difficulty: 1, prerequisites: [] },
  formationShotgun:{ id: 'formationShotgun', label: 'Shotgun Formation',    position: 'RB', difficulty: 1, prerequisites: [] },
  front42Nickel:  { id: 'front42Nickel',  label: '4-2 Nickel Front',        position: 'RB', difficulty: 2, prerequisites: ['personnel11'] },
  gaps:           { id: 'gaps',           label: 'Gap Letters (A/B/C/D)',   position: 'RB', difficulty: 1, prerequisites: [] },
  mikeId:         { id: 'mikeId',         label: 'Identifying The Mike',    position: 'RB', difficulty: 2, prerequisites: ['front42Nickel'] },
  willId:         { id: 'willId',         label: 'Identifying The Will',    position: 'RB', difficulty: 2, prerequisites: ['front42Nickel'] },
  nickelId:       { id: 'nickelId',       label: 'Identifying The Nickel',  position: 'RB', difficulty: 2, prerequisites: ['front42Nickel'] },
  insideZone:     { id: 'insideZone',     label: 'Inside Zone Reads',       position: 'RB', difficulty: 3, prerequisites: ['gaps'] },
  nickelBlitz:     { id: 'nickelBlitz',    label: 'Nickel Blitz Recognition', position: 'RB', difficulty: 3, prerequisites: ['nickelId'] },
  rbProtectionRule:{ id: 'rbProtectionRule', label: 'RB Protection Rule (Half Slide)', position: 'RB', difficulty: 4, prerequisites: ['mikeId', 'willId'] },
  cover2Flat:     { id: 'cover2Flat',     label: 'Cover 2 — Flat Threat',   position: 'RB', difficulty: 3, prerequisites: [] }
};

/* ---------- Lessons (LEARN stage) ---------- */

const LESSONS = {
  l_personnel11: {
    id: 'l_personnel11', concept: 'personnel11', position: 'RB', difficulty: 1,
    title: 'What Is 11 Personnel?',
    body: '11 Personnel means 1 running back and 1 tight end on the field (the two digits), with the rest of the eligible receivers being wide receivers — so with 5 skill players total, that’s 1 RB, 1 TE, and 3 WR. It’s the most common grouping in football today because it threatens the defense with both run and pass without needing a substitution.',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false }
  },
  l_formationShotgun: {
    id: 'l_formationShotgun', concept: 'formationShotgun', position: 'RB', difficulty: 1,
    title: 'What Is Shotgun?',
    body: 'In Shotgun, the quarterback lines up a few yards behind the center instead of directly under him, catching a longer snap. This gives the QB a better pre-snap view of the defense and more time to read it. The running back is usually offset to one side of the QB, not directly behind him.',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false }
  },
  l_front42nickel: {
    id: 'l_front42nickel', concept: 'front42Nickel', position: 'RB', difficulty: 2,
    title: 'What Is A 4-2 Nickel?',
    body: '4-2 Nickel means 4 down defensive linemen, 2 true linebackers, and a 5th defensive back (the Nickel) instead of a 3rd linebacker. Defenses use it against 3-receiver sets like Trips so they aren’t stuck trying to cover a slot receiver with a linebacker.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false }
  },
  l_gaps: {
    id: 'l_gaps', concept: 'gaps', position: 'RB', difficulty: 1,
    title: 'Gap Letters: A, B, C, D',
    body: 'Gaps are named outward from the center. The A gap is between the center and guard. The B gap is between the guard and tackle. The C gap is between the tackle and the tight end (or just outside the tackle if there’s no tight end there). The D gap is outside an attached tight end. Because this formation only has a tight end on the right, the left side stops at the C gap — there’s no D gap to the open side.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true }
  },
  l_mike: {
    id: 'l_mike', concept: 'mikeId', position: 'RB', difficulty: 2,
    title: 'Identifying The Mike Linebacker',
    body: 'The Mike is the middle linebacker — generally aligned over or near the center. Coaches call him "the quarterback of the defense" because he sets the front and is the anchor point every lineman and running back counts from when figuring out pass-protection assignments.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, highlight: 'MIKE' }
  },
  l_will: {
    id: 'l_will', concept: 'willId', position: 'RB', difficulty: 2,
    title: 'Identifying The Will Linebacker',
    body: 'The Will is the weak-side linebacker — aligned to the side AWAY from the tight end (the "weak" side, since it has fewer blockers). In this front, Will lines up to the left, opposite the trips/tight-end side.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, highlight: 'WILL' }
  },
  l_nickel: {
    id: 'l_nickel', concept: 'nickelId', position: 'RB', difficulty: 2,
    title: 'Identifying The Nickel Defender',
    body: 'The Nickel is the extra defensive back who replaces a 3rd linebacker in sub packages. He usually lines up over the slot receiver and "walks out" toward the line before the snap when he’s about to blitz instead of covering — that’s a real, watchable tell.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, highlight: 'NB' }
  },
  l_insideZone: {
    id: 'l_insideZone', concept: 'insideZone', position: 'RB', difficulty: 3,
    title: 'What Is Inside Zone?',
    body: 'Inside Zone is a zone run — the line blocks areas/gaps instead of specific defenders, double-teaming the first down lineman past the center on the play side. The running back’s aiming point is the play-side guard’s hip (most coaches teach the outside hip — the exact point varies a little by system). He presses that double team: if it’s winning and the backside is cut off, he runs through the called gap. If it’s getting squeezed, he reads the backside linebacker’s pursuit and cuts back.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true }
  },
  l_nickelBlitz: {
    id: 'l_nickelBlitz', concept: 'nickelBlitz', position: 'RB', difficulty: 3,
    title: 'Recognizing A Nickel Blitz',
    body: 'A Nickel Blitz is when the Nickel defender abandons coverage and rushes — usually off the edge or through an inside gap — attacking a gap the offensive line’s protection didn’t plan for. The tell is pre-snap: he walks up tight to the line and squares toward the backfield instead of a receiver.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, highlight: 'NB' }
  },
  l_protectionRule: {
    id: 'l_protectionRule', concept: 'rbProtectionRule', position: 'RB', difficulty: 4,
    title: 'RB Pass Protection: The Half-Slide Rule',
    body: 'In a half-slide protection, the offensive line slides toward one side, and the running back covers whoever the slide doesn’t account for on the other side. Before the snap, find which way the line is sliding — then check the OPPOSITE side first. If an extra rusher shows up there, like a blitzing Nickel, he’s almost always your responsibility.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false }
  },
  l_cover2: {
    id: 'l_cover2', concept: 'cover2Flat', position: 'RB', difficulty: 3,
    title: 'Cover 2 And The Flat',
    body: 'Cover 2 splits two safeties deep, each covering a half of the field, while the corners play shorter zones underneath. That leaves the flat and the underneath areas as the soft spots. If you release to the flat against Cover 2, the corner on your side is usually the first defender who can get to you — both safeties are busy with the deep halves.',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false }
  }
};

/* ---------- Scenarios (RECOGNIZE / APPLY / TEST stages) ---------- */

const SCENARIOS = {
  s_recognizeFront: {
    id: 's_recognizeFront', concept: 'front42Nickel', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: {
      type: 'mc',
      prompt: 'What defensive front is this?',
      options: [
        { id: '43over', label: '4-3 Over' },
        { id: '42nickel', label: '4-2 Nickel' },
        { id: '34odd', label: '3-4 Odd' },
        { id: '33stack', label: '3-3 Stack' }
      ],
      correctAnswerId: '42nickel',
      explanation: 'Count the box: 4 down linemen, 2 off-the-ball linebackers, and a 5th defensive back (the Nickel) instead of a 3rd linebacker — that’s 4-2 Nickel.'
    }
  },
  s_recognizePersonnelFormation: {
    id: 's_recognizePersonnelFormation', concept: 'personnel11', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false },
    question: {
      type: 'mc',
      prompt: 'Identify the personnel and formation.',
      options: [
        { id: 'a', label: '12 Personnel, Pistol' },
        { id: 'b', label: '11 Personnel, Shotgun' },
        { id: 'c', label: '10 Personnel, Singleback' },
        { id: 'd', label: '11 Personnel, I-Formation' }
      ],
      correctAnswerId: 'b',
      explanation: '1 RB + 1 TE + 3 WR is 11 Personnel, and the QB set back off the line with the RB offset beside him is Shotgun.'
    }
  },
  s_tapMike: {
    id: 's_tapMike', concept: 'mikeId', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: {
      type: 'tapDefender',
      prompt: 'Tap the Mike linebacker.',
      options: [
        { id: 'MIKE', label: 'Mike' }, { id: 'WILL', label: 'Will' }, { id: 'NB', label: 'Nickel' }
      ],
      correctAnswerId: 'MIKE',
      explanation: 'The Mike is aligned over/near the center, in the middle of the front — that’s your anchor point every time.'
    }
  },
  s_tapWill: {
    id: 's_tapWill', concept: 'willId', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: {
      type: 'tapDefender',
      prompt: 'Tap the Will linebacker.',
      options: [
        { id: 'MIKE', label: 'Mike' }, { id: 'WILL', label: 'Will' }, { id: 'NB', label: 'Nickel' }
      ],
      correctAnswerId: 'WILL',
      explanation: 'The Will lines up to the weak side — away from the tight end. Here that’s the left side, opposite the trips/TE look.'
    }
  },
  s_tapNickelThreat: {
    id: 's_tapNickelThreat', concept: 'nickelBlitz', position: 'RB', difficulty: 3, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { NB: { x: 80, y: 45 } } },
    question: {
      type: 'tapDefender',
      prompt: 'One defender has walked up tight to the line and squared toward the backfield instead of a receiver. Tap the defender showing the blitz tell.',
      options: [
        { id: 'NB', label: 'Nickel' }, { id: 'CBR', label: 'Corner' }, { id: 'SS', label: 'Safety' }
      ],
      correctAnswerId: 'NB',
      explanation: 'Walking up tight and squaring toward the backfield instead of a receiver is the Nickel blitz tell — he’s about to rush, not cover.'
    }
  },
  s_insideZoneCut: {
    id: 's_insideZoneCut', concept: 'insideZone', position: 'RB', difficulty: 3, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true,
      note: 'Inside Zone, run right. At the snap, the play-side (right) double team pushes the 1-technique vertically and the backside A gap (left) is cut off clean by the backside guard.' },
    question: {
      type: 'tapGap',
      prompt: 'Where should you cut?',
      options: [
        { id: 'rightA', label: 'Right A' }, { id: 'rightB', label: 'Right B' }, { id: 'leftA', label: 'Left A (cutback)' }
      ],
      correctAnswerId: 'rightA',
      explanation: 'The play-side double team is winning and pushing vertically, and the backside is cut off — press right A. There’s nothing to cut back to since the backside is sealed.'
    }
  },
  s_insideZoneCutback: {
    id: 's_insideZoneCutback', concept: 'insideZone', position: 'RB', difficulty: 4, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true,
      note: 'Inside Zone, run right. This time the play-side double team gets squeezed backward, and the backside linebacker (Will) overruns the play flowing hard to the right.' },
    question: {
      type: 'tapGap',
      prompt: 'Where should you cut?',
      options: [
        { id: 'rightA', label: 'Right A' }, { id: 'rightB', label: 'Right B' }, { id: 'leftA', label: 'Left A (cutback)' }
      ],
      correctAnswerId: 'leftA',
      explanation: 'The play side is getting squeezed and Will overran the play chasing the flow right — bend it back to the backside A gap he just vacated.'
    }
  },
  s_protectionResponsibility: {
    id: 's_protectionResponsibility', concept: 'rbProtectionRule', position: 'RB', difficulty: 4, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { NB: { x: 80, y: 45 } },
      note: 'Half-slide protection, line sliding LEFT (toward Will). The Nickel walks up and blitzes off the right edge — the side the line is NOT sliding toward.' },
    question: {
      type: 'tapDefender',
      prompt: 'Who is your protection responsibility?',
      options: [
        { id: 'NB', label: 'Nickel' }, { id: 'WILL', label: 'Will' }, { id: 'MIKE', label: 'Mike' }
      ],
      correctAnswerId: 'NB',
      explanation: 'The line slid left toward Will, so he’s accounted for. The Nickel blitzing off the right edge is the rusher the slide didn’t pick up — that’s your fill.'
    }
  },
  s_cover2Flat: {
    id: 's_cover2Flat', concept: 'cover2Flat', position: 'RB', difficulty: 3, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false,
      note: 'Defense is playing Cover 2. You release to the flat on the right side.' },
    question: {
      type: 'mc',
      prompt: 'Who is your immediate threat releasing to the flat against Cover 2?',
      options: [
        { id: 'corner', label: 'The corner on your side' },
        { id: 'deepSafety', label: 'The deep safety on your side' },
        { id: 'mike', label: 'The Mike linebacker' }
      ],
      correctAnswerId: 'corner',
      explanation: 'Both safeties are splitting the deep halves in Cover 2 — the corner is the defender actually positioned to get to the flat first.'
    }
  }
};


/* ---------- Additional scenarios (more variety, so sessions can be randomized) ---------- */
Object.assign(SCENARIOS, {
  s_tapNickel: {
    id: 's_tapNickel', concept: 'nickelId', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: { type: 'tapDefender', prompt: 'Tap the Nickel defender.',
      options: [ { id: 'NB', label: 'Nickel' }, { id: 'CBR', label: 'Corner' }, { id: 'SS', label: 'Safety' } ],
      correctAnswerId: 'NB',
      explanation: 'The Nickel is the 5th defensive back who replaced a 3rd linebacker — here he is aligned over the slot receiver, between the linebackers and the corner.' }
  },
  s_tapGapStrongA: {
    id: 's_tapGapStrongA', concept: 'gaps', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true },
    question: { type: 'tapGap', prompt: 'Tap the A gap on the strong (tight end) side.',
      options: [ { id: 'rightA' }, { id: 'rightB' }, { id: 'leftA' } ],
      correctAnswerId: 'rightA',
      explanation: 'The strong side is the side with the tight end — the right. The A gap is the gap between the center and the guard on that side.' }
  },
  s_tapGapWeakB: {
    id: 's_tapGapWeakB', concept: 'gaps', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true },
    question: { type: 'tapGap', prompt: 'Tap the B gap on the weak (open) side.',
      options: [ { id: 'leftA' }, { id: 'leftB' }, { id: 'leftC' } ],
      correctAnswerId: 'leftB',
      explanation: 'The weak side is away from the tight end — the left. The B gap sits between the guard and the tackle.' }
  },
  s_tapGapD: {
    id: 's_tapGapD', concept: 'gaps', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: true },
    question: { type: 'tapGap', prompt: 'Tap the D gap.',
      options: [ { id: 'rightC' }, { id: 'rightD' }, { id: 'leftC' } ],
      correctAnswerId: 'rightD',
      explanation: 'The D gap is outside an attached tight end, so it only exists on the tight end side. The left side has no tight end, so it stops at the C gap.' }
  },
  s_strongSide: {
    id: 's_strongSide', concept: 'gaps', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false },
    question: { type: 'mc', prompt: 'Which side of this formation is the strong side?',
      options: [ { id: 'left', label: 'Left — the side with the lone receiver' }, { id: 'right', label: 'Right — the tight end and trips side' } ],
      correctAnswerId: 'right',
      explanation: 'Strong side is the side with the tight end (and here, the extra receivers) — it has more blockers and receivers to defend. The open left side is the weak side.' }
  },
  s_countWR: {
    id: 's_countWR', concept: 'personnel11', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false },
    question: { type: 'mc', prompt: 'In 11 Personnel, how many wide receivers are on the field?',
      options: [ { id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' }, { id: '4', label: '4' } ],
      correctAnswerId: '3',
      explanation: 'The two digits are 1 RB and 1 TE. Five eligible skill players minus those two leaves 3 wide receivers.' }
  },
  s_whyShotgun: {
    id: 's_whyShotgun', concept: 'formationShotgun', position: 'RB', difficulty: 1, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: null, showGaps: false },
    question: { type: 'mc', prompt: 'Why do offenses often line up in Shotgun?',
      options: [ { id: 'a', label: 'The QB gets a better look at the defense and more time to read it' }, { id: 'b', label: 'It lets the offensive line stand farther off the ball' }, { id: 'c', label: 'It is required whenever 3 receivers are on the field' } ],
      correctAnswerId: 'a',
      explanation: 'Starting a few yards behind the center gives the QB a clearer pre-snap picture and extra time after the snap. It is a choice, not a rule.' }
  },
  s_blitzTellMC: {
    id: 's_blitzTellMC', concept: 'nickelBlitz', position: 'RB', difficulty: 2, stage: 'recognize',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { NB: { x: 80, y: 45 } } },
    question: { type: 'mc', prompt: 'Which pre-snap clue most suggests the Nickel is about to blitz?',
      options: [ { id: 'a', label: 'He walks up tight to the line and squares toward the backfield' }, { id: 'b', label: 'He backpedals to ten yards of depth' }, { id: 'c', label: 'He lines up directly behind the free safety' } ],
      correctAnswerId: 'a',
      explanation: 'Moving up close to the line and facing the backfield instead of a receiver is the classic tell — he is about to rush, not cover.' }
  },
  s_insideZoneRead: {
    id: 's_insideZoneRead', concept: 'insideZone', position: 'RB', difficulty: 3, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: { type: 'mc', prompt: 'What is the running back’s primary read on Inside Zone?',
      options: [ { id: 'a', label: 'The play-side double team and how it is pushing' }, { id: 'b', label: 'The free safety’s depth' }, { id: 'c', label: 'The quarterback’s eyes' } ],
      correctAnswerId: 'a',
      explanation: 'The play-side double team tells you whether the hole is opening where you aimed or whether the run needs to bend back.' }
  },
  s_insideZoneNoPreset: {
    id: 's_insideZoneNoPreset', concept: 'insideZone', position: 'RB', difficulty: 3, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: { type: 'mc', prompt: 'Why should the back NOT pick one gap before the snap on Inside Zone?',
      options: [ { id: 'a', label: 'Zone blocking creates the hole live, based on how the defensive line reacts' }, { id: 'b', label: 'The offensive line has not decided who to block' }, { id: 'c', label: 'It is against the rules to pick a gap' } ],
      correctAnswerId: 'a',
      explanation: 'The line blocks areas, not set defenders, so the opening depends on how the defense moves. Committing early means running into a hole that is not there.' }
  },
  s_protectionLookFirst: {
    id: 's_protectionLookFirst', concept: 'rbProtectionRule', position: 'RB', difficulty: 4, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: { type: 'mc', prompt: 'The line slides LEFT in half-slide protection. Which side do you check first for an unblocked rusher?',
      options: [ { id: 'a', label: 'The right side — away from the slide' }, { id: 'b', label: 'The left side — where the line slid' }, { id: 'c', label: 'Straight downfield at the safeties' } ],
      correctAnswerId: 'a',
      explanation: 'The slide already accounts for the left. Whoever the slide does not cover shows up on the opposite side — that is where your responsibility lives.' }
  },
  s_protectionWill: {
    id: 's_protectionWill', concept: 'rbProtectionRule', position: 'RB', difficulty: 4, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false, overrides: { WILL: { x: 30, y: 45 } },
      note: 'Half-slide protection, line sliding RIGHT (toward the tight end side). The Will creeps up and blitzes off the left edge.' },
    question: { type: 'tapDefender', prompt: 'Who is your protection responsibility?',
      options: [ { id: 'WILL', label: 'Will' }, { id: 'NB', label: 'Nickel' }, { id: 'MIKE', label: 'Mike' } ],
      correctAnswerId: 'WILL',
      explanation: 'The line slid right, so the right side is accounted for. The Will rushing from the left is the one the slide does not pick up — he is your fill.' }
  },
  s_cover2Deep: {
    id: 's_cover2Deep', concept: 'cover2Flat', position: 'RB', difficulty: 2, stage: 'apply',
    fieldState: { offense: 'shotgunTripsRight', defense: '42nickel', showGaps: false },
    question: { type: 'mc', prompt: 'In Cover 2, who splits the deep part of the field?',
      options: [ { id: 'a', label: 'Two safeties, each taking a deep half' }, { id: 'b', label: 'Three defenders, each taking a deep third' }, { id: 'c', label: 'The two corners' } ],
      correctAnswerId: 'a',
      explanation: 'Cover 2 means two deep defenders — the safeties — each responsible for half of the field deep, which is why the corners play underneath.' }
  }
});

/* Scenario ids grouped by stage, used by the session builder in the main
   app script — kept here so adding/removing scenarios never requires
   touching the engine code. */
const SCENARIOS_BY_STAGE = {
  recognize: ['s_recognizeFront', 's_recognizePersonnelFormation', 's_tapMike', 's_tapWill', 's_tapNickel', 's_tapNickelThreat', 's_tapGapStrongA', 's_tapGapWeakB', 's_tapGapD', 's_strongSide', 's_countWR', 's_whyShotgun', 's_blitzTellMC'],
  apply: ['s_insideZoneCut', 's_insideZoneCutback', 's_insideZoneRead', 's_insideZoneNoPreset', 's_protectionResponsibility', 's_protectionWill', 's_protectionLookFirst', 's_cover2Flat', 's_cover2Deep'],
  // TEST draws from everything (the session builder avoids repeating a
  // question already used earlier in the same session whenever it can).
  test: ['s_recognizeFront', 's_tapMike', 's_tapWill', 's_tapNickel', 's_tapNickelThreat', 's_tapGapStrongA', 's_tapGapWeakB', 's_tapGapD', 's_blitzTellMC', 's_insideZoneCut', 's_insideZoneCutback', 's_insideZoneRead', 's_protectionResponsibility', 's_protectionWill', 's_protectionLookFirst', 's_cover2Flat', 's_cover2Deep', 's_countWR', 's_strongSide']
};

const LESSON_ORDER = [
  'l_personnel11', 'l_formationShotgun', 'l_front42nickel', 'l_gaps',
  'l_mike', 'l_will', 'l_nickel', 'l_insideZone', 'l_nickelBlitz',
  'l_protectionRule', 'l_cover2'
];
