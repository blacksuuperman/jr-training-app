/* =========================================================
   FOOTBALL CONTENT — formation & front RECOGNITION (v21)
   =========================================================
   Loaded right AFTER football-data-positions.js. Adds:
   - 6 more offensive formations (Empty 3x2, Bunch, Trips Left,
     Pro Set, Heavy 22, Wildcat) and 4 more defensive fronts
     (3-3-5 Stack, 4-1-6 Dime, 4-3 Wide-9, Goal Line);
   - a lesson + questions for EVERY formation and front, including a
     "what is your job" question for each of the ten positions;
   - pre-snap SHELL reading and a PRO LINGO glossary with questions.
   Like the other content files it is PURE football content (no app
   logic), so a coach can review it on its own.

   ACCURACY NOTES (for a coach reviewing this file)
   - Formation and front names follow common coaching vocabulary, but
     names, alignments and rules vary by coach and level. Where they
     differ, the text says "many teams" / "often" instead of pretending
     there is one rule. Diagrams are teaching sketches, not to scale.
   - "Your job" lines are general reads and priorities, not a team's
     playbook assignment; the assigned coach's rule always wins.
   ========================================================= */

/* ---------- Mirrored formations (strength to the LEFT) ----------
   Every defensive front is written for strength-right. A mirrored
   formation flips the skill players, and the defense is flipped to
   match, so Will/Sam/Mike and strong/weak ids stay correct. */
function _mirrorFormation(baseId, id, name, description) {
  const b = FORMATIONS[baseId], m = b.meta;
  FORMATIONS[id] = {
    id: id, name: name, personnel: b.personnel, mirrorOf: baseId,
    players: b.players.map(p => p.group === 'OL' ? p : Object.assign({}, p, { x: 100 - p.x })),
    meta: Object.assign({}, m, {
      strong: 'left', teLeft: m.teRight, teRight: m.teLeft,
      wideLeft: m.wideRight, wideRight: m.wideLeft, slotLeft: m.slotRight, slotRight: m.slotLeft,
      wingLeft: m.wingRight, wingRight: m.wingLeft
    }),
    description: description
  };
}

FORMATIONS.emptyThreeByTwo = {
  id: 'emptyThreeByTwo', name: 'Empty (3x2)', personnel: '10',
  players: OL_LINE.concat([
    sk('QB', 'QB', 50, 60),
    sk('X', 'X', 5, 51), sk('H', 'H', 17, 55),
    sk('RB', 'RB', 75, 55), sk('S', 'S', 85, 55), sk('Z', 'Z', 95, 51)
  ]),
  meta: { strong: 'right', balanced: false, teRight: false, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: 17, slotRight: 85 },
  description: 'Nobody is in the backfield: the quarterback is alone and all five eligible players are lined up as receivers — two on the left, three on the right (a 3x2 look). Here the running back is split out as one of the receivers, so by the numbers it is still 10 Personnel (1 RB, 0 TE, 4 WR). Personnel counts who is on the field, not where he stands.'
};
FORMATIONS.bunchRight = {
  id: 'bunchRight', name: 'Bunch Right', personnel: '11',
  players: OL_LINE.concat([
    sk('QB', 'QB', 50, 60), sk('RB', 'RB', 44, 64),
    sk('X', 'X', 5, 51),
    sk('Z', 'Z', 88, 51), sk('TE', 'TE', 81, 56), sk('S', 'S', 95, 56)
  ]),
  meta: { strong: 'right', balanced: false, teRight: false, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: null, slotRight: 81 },
  description: 'Three receivers are squeezed together on one side — one on the line at the point and two a step behind and outside him — instead of spread out. The tight grouping lets them cross paths and pick (“rub”) defenders. One wide receiver is alone on the other side. 1 RB, 1 TE, 3 WR = 11 Personnel.'
};
_mirrorFormation('shotgunTripsRight', 'tripsLeft', 'Shotgun, Trips Left',
  'The same Trips look as Trips Right, flipped: three receivers (TE + slot + wide) on the LEFT, one isolated receiver on the right, and the running back offset to the QB’s right. The strength of the formation is now the LEFT side. Always find strength first — it changes where the defense’s Sam, Will and safeties set up.');
FORMATIONS.proSet = {
  id: 'proSet', name: 'Pro Set (Split Backs)', personnel: '21',
  players: OL_LINE.concat([
    sk('QB', 'QB', 50, 57), sk('HB', 'HB', 40, 66), sk('FB', 'FB', 60, 66),
    sk('X', 'X', 5, 51), sk('TE', 'TE', 78, 52), sk('Z', 'Z', 95, 51)
  ]),
  meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: null, slotRight: null },
  description: 'The quarterback is under center with two running backs split on either side of him, a step or two behind the line (“split backs”), plus a tight end and two wide receivers. 2 RB, 1 TE, 2 WR = 21 Personnel. It is a classic balanced look: the backs can run either way, block, or slip out for a pass.'
};
FORMATIONS.goalLine22 = {
  id: 'goalLine22', name: 'Heavy / Goal Line (22)', personnel: '22',
  players: OL_LINE.concat([
    sk('QB', 'QB', 50, 57), sk('FB', 'FB', 50, 64), sk('TB', 'TB', 50, 71),
    sk('TE2', 'TE', 22, 52), sk('TE', 'TE', 78, 52), sk('X', 'X', 5, 51)
  ]),
  meta: { strong: 'right', balanced: true, teRight: true, teLeft: true, wideLeft: 5, wideRight: null, slotLeft: null, slotRight: null },
  description: 'Two running backs lined up in an I behind the quarterback, a tight end on each side and only one wide receiver. 2 RB, 2 TE, 1 WR = 22 Personnel. It brings extra blockers for short-yardage and goal-line runs, and the defense usually answers with its own big, run-stopping group. Many teams add a sixth lineman (“jumbo”) from here.'
};
FORMATIONS.wildcat = {
  id: 'wildcat', name: 'Wildcat', personnel: '21',
  players: OL_LINE.concat([
    sk('RB', 'RB', 50, 60), sk('HB', 'HB', 44, 66),
    sk('QB', 'QB', 95, 51), sk('X', 'X', 5, 51), sk('H', 'H', 17, 55), sk('TE', 'TE', 78, 52)
  ]),
  meta: { strong: 'right', balanced: false, teRight: true, teLeft: false, wideLeft: 5, wideRight: 95, slotLeft: 17, slotRight: null },
  description: 'The tell is that the QUARTERBACK is lined up out wide like a receiver while a running back stands in the shotgun spot and takes the snap. With a runner at quarterback the offense can use the quarterback as an extra blocker or receiver, so the defense has to account for an extra run threat. The personnel here counts as 2 RB, 1 TE, 2 WR = 21 (the quarterback is counted separately).'
};

/* ---------- New defensive fronts ---------- */
DEFENSIVE_FRONTS['335stack'] = {
  id: '335stack', name: '3-3-5 Stack',
  description: '3 down linemen (a nose and two ends), 3 linebackers “stacked” right behind them, and 5 defensive backs. It is built to defend spread passing offenses while still keeping three linebackers who can run, blitz from different spots, and disguise who is coming. Names for the linebackers and exact alignments vary by team.',
  align: function (f) {
    return [
      { id: 'WDE', label: 'DE', x: 28, y: 46, group: 'DL', technique: '5tech' },
      { id: 'NT', label: 'NT', x: 50, y: 46, group: 'DL', technique: '0tech' },
      { id: 'SDE', label: 'DE', x: 72, y: 46, group: 'DL', technique: '5tech' },
      { id: 'WILL', label: 'Will', x: 28, y: 38, group: 'LB', role: 'Will' },
      { id: 'MIKE', label: 'Mike', x: 50, y: 37, group: 'LB', role: 'Mike' },
      { id: 'SAM', label: 'Sam', x: 72, y: 38, group: 'LB', role: 'Sam' },
      { id: 'NB', label: 'NB', x: _nickelX(f), y: 36, group: 'DB', role: 'Nickel' }
    ].concat(_cbs(f), [
      { id: 'FS', label: 'FS', x: 50, y: 15, group: 'DB' },
      { id: 'SS', label: 'SS', x: 76, y: 20, group: 'DB' }
    ]);
  }
};
DEFENSIVE_FRONTS['dime416'] = {
  id: 'dime416', name: '4-1-6 Dime',
  description: '4 down linemen, only 1 linebacker, and 6 defensive backs (a Nickel and a Dime on top of the normal four). It is a passing-down package: with four or five receivers on the field the defense replaces its linebackers with extra defensive backs who can cover. The trade-off is that there are fewer big bodies against the run.',
  align: function (f) {
    const m = f.meta;
    return [
      { id: 'WDE', label: 'DE', x: 26, y: 46, group: 'DL', technique: '5tech' },
      { id: 'WDT', label: 'DT', x: 38, y: 46, group: 'DL', technique: '3tech' },
      { id: 'SDT', label: 'DT', x: 54, y: 46, group: 'DL', technique: '1tech' },
      { id: 'SDE', label: 'DE', x: 74, y: 46, group: 'DL', technique: '5tech' },
      { id: 'MIKE', label: 'Mike', x: 50, y: 37, group: 'LB', role: 'Mike' },
      { id: 'NB', label: 'NB', x: _nickelX(f), y: 36, group: 'DB', role: 'Nickel' },
      { id: 'DIME', label: 'Dime', x: (m.slotRight == null && m.slotLeft != null) ? 78 : (m.slotLeft != null ? m.slotLeft + 2 : 22), y: 36, group: 'DB', role: 'Dime' }
    ].concat(_cbs(f), [
      { id: 'FS', label: 'FS', x: 50, y: 15, group: 'DB' },
      { id: 'SS', label: 'SS', x: 74, y: 20, group: 'DB' }
    ]);
  }
};
DEFENSIVE_FRONTS['43wide9'] = {
  id: '43wide9', name: '4-3 Wide 9',
  description: '4 linemen and 3 linebackers, but both defensive ends line up WIDE — outside the tight end or tackle in a 9-technique — to get a running start at the passer and to stretch the offense. The tackles and linebackers are usually closer to the middle. The risk is that the wide ends leave big gaps inside if the offense blocks them right, so teams that use it count on fast linebackers to fill. Exact alignments vary by team.',
  align: function (f) {
    return [
      { id: 'WDE', label: 'DE', x: 17, y: 45, group: 'DL', technique: '9tech' },
      { id: 'WDT', label: 'DT', x: 37, y: 46, group: 'DL', technique: '3tech' },
      { id: 'SDT', label: 'DT', x: 54, y: 46, group: 'DL', technique: '1tech' },
      { id: 'SDE', label: 'DE', x: 83, y: 45, group: 'DL', technique: '9tech' },
      { id: 'SAM', label: 'Sam', x: 72, y: 39, group: 'LB', role: 'Sam' },
      { id: 'MIKE', label: 'Mike', x: 50, y: 37, group: 'LB', role: 'Mike' },
      { id: 'WILL', label: 'Will', x: 34, y: 38, group: 'LB', role: 'Will' }
    ].concat(_cbs(f), [
      { id: 'FS', label: 'FS', x: 50, y: 16, group: 'DB' },
      { id: 'SS', label: 'SS', x: 70, y: 21, group: 'DB' }
    ]);
  }
};
DEFENSIVE_FRONTS['goalLine'] = {
  id: 'goalLine', name: 'Goal Line (5-3-3)',
  description: 'Five defensive linemen on or across from the offensive linemen, three linebackers right behind them, and only three defensive backs. With almost no room to run the ball into the end zone, the defense crowds the line so every gap has a defender. The exact numbers vary (some teams use a 6-5 look), but the idea is the same: take away space, not deep coverage.',
  align: function (f) {
    return [
      { id: 'WDE', label: 'DE', x: 30, y: 46, group: 'DL' },
      { id: 'WDT', label: 'DT', x: 40, y: 46, group: 'DL' },
      { id: 'NT', label: 'NT', x: 50, y: 46, group: 'DL' },
      { id: 'SDT', label: 'DT', x: 60, y: 46, group: 'DL' },
      { id: 'SDE', label: 'DE', x: 70, y: 46, group: 'DL' },
      { id: 'WILL', label: 'Will', x: 36, y: 40, group: 'LB', role: 'Will' },
      { id: 'MIKE', label: 'Mike', x: 50, y: 39, group: 'LB', role: 'Mike' },
      { id: 'SAM', label: 'Sam', x: 64, y: 40, group: 'LB', role: 'Sam' }
    ].concat(_cbs(f), [
      { id: 'FS', label: 'FS', x: 50, y: 24, group: 'DB' }
    ]);
  }
};

/* Wrap every front so a MIRRORED formation flips the whole defense. */
Object.keys(DEFENSIVE_FRONTS).forEach(k => {
  const fr = DEFENSIVE_FRONTS[k];
  if (fr._mirrorWrapped) return;
  const baseAlign = fr.align;
  fr.align = function (f) {
    if (f && f.mirrorOf) {
      return baseAlign(FORMATIONS[f.mirrorOf]).map(p => Object.assign({}, p, { x: 100 - p.x }));
    }
    return baseAlign(f);
  };
  fr._mirrorWrapped = true;
});

/* ---------- Data tables filled in by the next files ---------- */
const FM_OFF_INFO = {};   // per offensive formation: lingo, lookFor, tell, key, jobs{10 positions}, lesson (new ones)
const FM_DEF_INFO = {};   // per defensive front: same idea ("vs this front")
const FM_LINGO = [];      // glossary: {term, group, def}
Object.assign(FM_OFF_INFO, {
  shotgunTripsRight: {
    "concept": "formationShotgun",
    "label": "Shotgun Trips Right",
    "aliases": [
      "Trips right",
      "3x1 shotgun",
      "Three by one"
    ],
    "lookFor": "The QB stands a few yards behind the center, with three receivers bunched toward one side and a single receiver alone on the other.",
    "tell": "This look often threatens quick passes and the throw to the three-receiver side, and the lone receiver can get a one-on-one matchup. Teams can still run from it.",
    "key": [
      "TE",
      "Z",
      "Y",
      "X"
    ],
    "jobs": {
      "QB": "Count three receivers right against the lone one left, then throw to the side the defense covers thinner.",
      "RB": "In shotgun with three receivers right, pick up a blitzer first, then slip out as a short outlet.",
      "WR": "Alone wide on the left, expect single coverage; win your route so the QB has a one-on-one option.",
      "TE": "You are one of three receivers on the right; run a quick route that works with the slot and the outside receiver.",
      "OL": "Three receivers right and the QB in shotgun means a quick throw is likely; pass set fast and watch for extra rushers.",
      "EDGE": "Three receivers right means a quick throw; rush fast, or get your hands up to knock the pass down.",
      "DL": "With three receivers right and the QB in shotgun, collapse the pocket from the middle so he cannot step up.",
      "LB": "Three receivers right can pull a linebacker out to cover the tight end or slot; know who you have before the snap.",
      "CB": "On the three-receiver side, talk with the slot defender so no one is left open; on the lone-receiver side you may be alone.",
      "S": "Three receivers right usually need extra help; slide toward that side but keep deep ground behind the trio."
    }
  },

  shotgunDoubles: {
    "concept": "formationDoubles",
    "label": "Shotgun Doubles (2x2)",
    "aliases": [
      "2x2",
      "Four wide",
      "10 personnel",
      "Spread doubles"
    ],
    "lookFor": "The QB is in shotgun with four wide receivers, two on each side, and no tight end next to the line.",
    "tell": "This balanced spread look often means the offense wants to throw quickly or space out the defense. It can also run, since the defense has fewer players near the line.",
    "key": [
      "X",
      "H",
      "S",
      "Z"
    ],
    "jobs": {
      "QB": "Two receivers each side and no tight end: read both pairs and throw to the side with the weaker coverage.",
      "RB": "Beside the QB with four wide receivers out, you may be the only extra blocker; check for blitzers before you release.",
      "WR": "With two receivers on your side and a wide one beside you, run routes that work together so one of you gets a clear lane.",
      "TE": "This 2x2 look has no tight end; the offense picked a fourth receiver instead, so expect to be off the field.",
      "OL": "Four receivers and no tight end means no extra blocker; expect a fast throw and block your rusher one-on-one.",
      "EDGE": "No tight end is beside the tackle, so you face only the tackle; use speed to get around him before the quick throw.",
      "DL": "Four receivers means a pass is likely; rush the QB through the guards and watch the back beside him for a run.",
      "LB": "With four receivers split two and two, expect to cover a slot receiver or drop to a zone in space.",
      "CB": "Two receivers on your side, one wide and one slot: cover the wide one and pass information to the slot defender.",
      "S": "Two receivers on each side means safeties usually split the deep field; watch both pairs and help whichever breaks deep."
    }
  },

  pistolRight: {
    "concept": "formationPistol",
    "label": "Pistol Right",
    "aliases": [
      "Pistol",
      "Pistol formation",
      "11 personnel pistol"
    ],
    "lookFor": "The QB is about four yards deep, closer than shotgun, with the running back lined up directly behind him instead of beside him.",
    "tell": "This look often gives the offense both a run threat and a pass threat. The QB is close enough to hand off, but far enough back to see the field.",
    "key": [
      "QB",
      "RB",
      "TE",
      "H"
    ],
    "jobs": {
      "QB": "In the pistol, hand off or fake to the back directly behind you; the run threat keeps linebackers from dropping back.",
      "RB": "Lined up directly behind the QB, you can take the hand-off to either side; read the hole and make one cut.",
      "WR": "The left side has a slot and a wide receiver; run routes that work together, or block the corner on a run.",
      "TE": "As the only tight end, on the right with the back behind the QB, block the edge on runs or run a short route.",
      "OL": "The QB is a few yards back with the back directly behind him; run block to either side or pass block on a short drop.",
      "EDGE": "The back sits directly behind the QB and can run either way or the QB can keep it; keep outside contain on your side.",
      "DL": "The back directly behind the QB can hit any gap; stay in your gap rather than chasing the first move.",
      "LB": "With the back directly behind the QB, wait for him to pick a side before you run to a gap; do not over-run the play.",
      "CB": "One slot and one wide receiver left, a tight end right: stay with your receiver and do not get pulled in by the run fake.",
      "S": "The pistol makes run and pass look the same; read the back behind the QB and come up only when you see a true run."
    }
  },

  singlebackAce: {
    "concept": "formationSingleback",
    "label": "Singleback Ace (12)",
    "aliases": [
      "Ace",
      "Ace formation",
      "12 personnel",
      "Two tight end singleback"
    ],
    "lookFor": "The QB is under center with one running back behind him and a tight end on each side of the line, with one wide receiver on each side.",
    "tell": "This balanced look often keeps the defense guessing between run and pass. The two tight ends can block or run routes, so the defense cannot easily tell which.",
    "key": [
      "TE",
      "TE2",
      "RB",
      "X"
    ],
    "jobs": {
      "QB": "Under center with one back and a tight end on each side, fake the hand-off, then throw behind the linebackers.",
      "RB": "You are the only back, behind the QB; take the hand-off and run to whichever side has the better block.",
      "WR": "With a tight end on each side, you are the lone wide receiver on yours; block the corner on runs and go deep on play-action.",
      "TE": "With a tight end on each side, block on a run or release into a route; the defense cannot tell which.",
      "OL": "With a tight end on each side you get help at both ends; plan your double teams and know which tight end blocks outside.",
      "EDGE": "A tight end is on both sides of the line, so whichever side you play, expect one to block you; keep your outside arm free.",
      "DL": "Two tight ends mean extra blockers; expect double teams and keep your gap so you are not pushed onto the linebackers.",
      "LB": "With two tight ends and one back, run is likely but a tight end can slip out; check where each tight end goes.",
      "CB": "With only one wide receiver on your side and a tight end inside him, expect a run; do not bite on play-action.",
      "S": "Both sides have a tight end, so the strength is not clear; stay centered deep and come up when the run shows."
    }
  },

  iFormation: {
    "concept": "formationI",
    "label": "I-Formation",
    "aliases": [
      "I-form",
      "Pro I",
      "Two-back I",
      "Full I"
    ],
    "lookFor": "The QB is under center with the fullback and the tailback lined up one behind the other in a straight line behind him, forming an I.",
    "tell": "This look often signals a power run, since the fullback can lead block. The offense can still fake the run and throw play-action off it.",
    "key": [
      "FB",
      "TB",
      "QB",
      "TE"
    ],
    "jobs": {
      "QB": "Under center with the fullback and tailback in a line behind you, hand to the tailback or fake and throw play-action.",
      "RB": "As the tailback at the back of the I, follow the fullback and cut to the hole he opens.",
      "WR": "With two backs in an I, a run is likely; block the corner hard, then go deep if the defense moves up.",
      "TE": "With a lead fullback in the I, block the defensive end or linebacker on him to seal the run side.",
      "OL": "With a fullback and tailback stacked behind the QB, fire out on the run and open a straight-ahead hole for the fullback.",
      "EDGE": "The fullback in the I may lead into you; take him on with your inside shoulder and keep the tailback from getting outside.",
      "DL": "With a fullback leading in the I, expect a double team; stay low and fill your gap with the fullback.",
      "LB": "Watch the fullback in front of the tailback; he often shows the hole, so meet him there before the tailback arrives.",
      "CB": "With two backs in the I, a run is likely; stay on your receiver, then come up fast to tackle if it goes outside.",
      "S": "Two backs in an I mean a run is likely; step up to help, but watch the tight end or a receiver for a throw behind you."
    }
  },

  wingRight: {
    "concept": "formationWing",
    "label": "Wing Right",
    "aliases": [
      "Wingback right",
      "Wing formation",
      "Wing-T look"
    ],
    "lookFor": "A wingback stands just outside the tight end and a step behind the line, on the strong side, with the QB under center and one back deep.",
    "tell": "This look adds an extra blocker to one side, so it often signals a run to the strong side. The wingback can also motion across, or take a hand-off or pass.",
    "key": [
      "WB",
      "TE",
      "TB",
      "Z"
    ],
    "jobs": {
      "QB": "A wingback outside the tight end gives the right side an extra blocker; run that way or fake it and throw play-action.",
      "RB": "Follow the wingback and tight end to the right; with an extra blocker there, hit the hole quickly.",
      "WR": "With an extra blocker already on the right, block your corner on the run and be ready for a deep throw on play-action.",
      "TE": "With a wingback just outside you, team up with him to reach or seal the defensive end on a run right.",
      "OL": "The wingback adds a blocker on the right; work with the tight end to move the end and open a hole there.",
      "EDGE": "Expect the tight end and wingback to team up on you; keep your outside arm free so the run cannot get outside.",
      "DL": "With a wingback outside the tight end, the run is likely strong right; fight to keep blockers off the linebackers.",
      "LB": "Find the wingback before the snap; he can block, run or catch, so he can change which gap you fill on the right.",
      "CB": "The wingback adds an extra blocker on the right; if you play that side, expect to fight him on a run and stay outside.",
      "S": "Watch the wingback outside the tight end; he can block, take a pitch or catch it, so set the edge or cover him."
    }
  },

  tightEndHeavy: {
    "concept": "formationTEHeavy",
    "label": "Tight Ends Heavy (13)",
    "aliases": [
      "13 personnel",
      "Three tight ends",
      "Double TE right",
      "Heavy set"
    ],
    "lookFor": "Three tight ends are on the field, two on the right and one on the left, with only one wide receiver and one running back.",
    "tell": "This big, physical look usually signals a run, but the offense can fake it and throw play-action. The defense has to guard against both.",
    "key": [
      "TE",
      "TE2",
      "TE3",
      "X"
    ],
    "jobs": {
      "QB": "With three tight ends and one wide receiver, sell the run fake; the lone receiver may be alone deep.",
      "RB": "You are the only back behind three tight ends; follow their blocks and be patient behind the crowded line.",
      "WR": "You are the only wide receiver among three tight ends; block on a run and be ready for a deep ball on play-action.",
      "TE": "With three tight ends, know if you are inline or the wing; block the edge or end unless the call sends you out.",
      "OL": "With three tight ends, two right and one left, you have help on both sides; plan double teams and who takes the end.",
      "EDGE": "Two tight ends are on the right: expect one to block you and another to help inside; keep your outside shoulder free.",
      "DL": "With three tight ends and one back, expect double teams in the middle; stay low so the line cannot push you onto linebackers.",
      "LB": "Three tight ends bring a run, but one can leak out; find all three before the snap and know who covers them.",
      "CB": "With three tight ends and one wide receiver, you likely cover the lone wide receiver; stay deep on play-action.",
      "S": "Three tight ends mean a run is likely, but a tight end or the lone receiver can run past on play-action; do not over-commit."
    }
  }
});
Object.assign(FM_OFF_INFO, {

  fullHouse: {
    concept: 'formationFullHouse',
    label: 'Full House',
    aliases: ['Three-back set', 'T-formation look', '31 personnel'],
    lookFor: 'Three running backs stand side by side behind the quarterback, with one tight end and just one wide receiver.',
    tell: 'This look usually signals a short-yardage or goal-line power run, since the three backs can lead block or carry. A fake run and a play-action throw can come from it too.',
    key: ['HB1', 'FB', 'HB2'],
    jobs: {
      QB: 'With three backs side by side behind you, sell the run fake, then see if a quick play-action throw is open.',
      RB: 'With two other backs beside you, learn if you carry, lead block or fake; all three backs have different jobs.',
      WR: 'As the only wide receiver with three backs in the backfield, block the corner on runs; expect one-on-one passes.',
      TE: 'With three backs behind you and no second tight end, block down or seal the edge so the backs have a lane.',
      OL: 'Three backs behind you means a power run is likely: fire out low and drive your man backward.',
      EDGE: 'With three backs side by side, expect a lead back to try to kick you out; stay square and keep contain.',
      DL: 'Three backs behind the QB means lead blockers are coming: stay low and do not get driven off the ball.',
      LB: 'Three backs side by side: find the lead back, fill the gap he runs to, and take him on before the carrier.',
      CB: 'Only one wide receiver is out with three backs inside: stay outside him but be ready to help on a run.',
      S: 'Three backs and one wide receiver: come down toward the line against the run, but watch play-action over you.'
    }
  },

  emptyThreeByTwo: {
    concept: 'fmEmpty',
    label: 'Empty (3x2)',
    aliases: ['Empty', '3x2 empty', 'Five-wide', 'Empty backfield'],
    lookFor: 'No one stands in the backfield with the quarterback; all five eligible players are split out, three on one side and two on the other.',
    tell: 'This look usually means a pass. The offense gets five receivers and the quarterback often throws quickly, so the defense has to cover everyone and may blitz.',
    key: ['QB', 'RB', 'S', 'Z'],
    lesson: {
      title: 'Empty (3x2): Nobody Behind the QB',
      body: 'In an empty formation, the backfield is empty: the quarterback stands alone and all five eligible players line up as receivers. Here the running back is split out too, so three players are on the right and two on the left. That is why it is called 3x2. The personnel count still reads 10 (1 RB, 0 TE, 4 WR) because personnel counts who is on the field, not where they stand. Empty usually means pass, and it gives the defense a lot of receivers to cover.',
      points: [
        'No back in the backfield: the QB is alone.',
        'Count the sides: three receivers one way, two the other (3x2).',
        'A back split wide is still counted as a running back.',
        'Usually a pass: expect quick throws and a defense that covers or blitzes.'
      ]
    },
    jobs: {
      QB: 'Nobody is in the backfield with you: count the rushers and know your quick throw if a blitz comes.',
      RB: 'You are split out as a receiver, not behind the QB, so you will not pass block; run your route.',
      WR: 'Five receivers are spread out, three on one side and two on the other: know your split and run your route on time.',
      TE: 'An empty look has no tight end; if you are the tight end here you are split out like a receiver, so run a route.',
      OL: 'Nobody is in the backfield to help: the five linemen alone block the rush, so make clear calls on who takes whom.',
      EDGE: 'With no back to help block, you may be one-on-one with a tackle: rush hard off the edge to get there quickly.',
      DL: 'With no back behind the line, expect a pass: use your rush moves to collapse the pocket from the inside.',
      LB: 'No running back is in the box, so cover a receiver or zone, or blitz if called, instead of filling for a run.',
      CB: 'With five receivers spread out, match up on your split-out receiver and know where your safety help is.',
      S: 'With five receivers spread wide and no back, be the extra defender over the top and help the three-receiver side.'
    }
  },

  bunchRight: {
    concept: 'fmBunch',
    label: 'Bunch',
    aliases: ['Bunch right', 'Bunch formation', 'Tight trips', 'Cluster'],
    lookFor: 'Three receivers stand squeezed together on one side, one on the line and two a step behind him, instead of spread out.',
    tell: 'This look often threatens crossing routes and quick throws, because the tight group makes it hard for defenders to tell who covers whom. Legal rules differ by level; coaches teach clean releases.',
    key: ['Z', 'TE', 'S'],
    lesson: {
      title: 'Bunch: Three Receivers in a Cluster',
      body: 'In a bunch, three receivers line up very close together on one side instead of spreading out. One stands on the line at the point and two stand a step behind him. When they run, their paths can cross and the defenders have to sort out who covers whom. The other side usually has a single receiver all alone. Many teams use it to get quick throws and crossing routes; legal rules differ by level, and coaches teach clean releases.',
      points: [
        'Three receivers bunched tight on one side.',
        'One receiver alone on the other side.',
        'Often used for crossing routes and quick throws.',
        'Defenders must communicate who takes which receiver.'
      ]
    },
    jobs: {
      QB: 'Three receivers are bunched tight on one side: see who covers whom, then throw to the one who gets free.',
      RB: 'With three receivers bunched on one side, pass protect first, then release as a safety valve if no rusher shows.',
      WR: 'Release cleanly from the tight group and cross paths with your bunch mates; legal rules differ by level.',
      TE: 'You are one of three bunched receivers, a step off the line: release cleanly and cross close to your bunch mates.',
      OL: 'Three receivers are bunched on one side, so expect a quick timed throw: set fast and stay in front of your man.',
      EDGE: 'Three receivers are bunched on one side, so expect a quick throw: get your hands up to bat the ball down.',
      DL: 'With three receivers clustered on one side, a fast throw is often coming: collapse the pocket so the QB cannot step up.',
      LB: 'Three receivers bunched tight: expect crossing routes underneath, and agree on who takes which receiver as they cross.',
      CB: 'Three receivers are bunched near you: talk with teammates about who covers whom so a crossing route does not pick you.',
      S: 'With three receivers clustered on one side, stay deep enough to cap crossing routes and call out who has whom.'
    }
  },

  tripsLeft: {
    concept: 'fmTripsLeft',
    label: 'Trips Left',
    aliases: ['Shotgun trips left', 'Trips to the left', 'Three receivers left'],
    lookFor: 'Three receivers line up on the LEFT side, one receiver is alone on the right, and the strength is to the left.',
    tell: 'This is the mirror image of Trips Right, so everything flips. The three-receiver side is the strong side, and the defense’s Sam, Will and safeties usually adjust to it.',
    key: ['TE', 'Z', 'Y'],
    lesson: {
      title: 'Trips Left: Find the Strength First',
      body: 'Trips Left is the same look as Trips Right, just flipped. Three receivers (a tight end, a slot and a wide receiver) are on the LEFT, one receiver is alone on the right, and the running back is offset to the quarterback’s right. The strength of the formation is now the left, so find the strength side first. Then everything flips with it: the defense’s Sam goes left, the Will goes right, and the safeties and your own reads move to the left too.',
      points: [
        'Find the strength first: the three-receiver side is LEFT.',
        'Everything flips: Sam goes left, Will goes right.',
        'One receiver is alone on the weak side, on the right.',
        'Same ideas as Trips Right, just mirrored.'
      ]
    },
    jobs: {
      QB: 'The three receivers are on the LEFT: find that strength first, then flip your reads so the lone receiver is right.',
      RB: 'You are offset to the QB’s right, away from the three receivers on the left; the strength is left, so check it first.',
      WR: 'If you are one of the three receivers on the left, work together; the lone receiver on the right is one-on-one.',
      TE: 'Your tight end spot is on the left now: the strength is left, so flip your block and route steps to that side.',
      OL: 'The strength is on the left with three receivers there: point your protection call left, the flip of Trips Right.',
      EDGE: 'Three receivers are on the left, so strong and weak ends swap sides: the end on the left expects quick throws.',
      DL: 'With the three-receiver side on the left, flip your strong-side calls and slides to the left.',
      LB: 'Strength is left: put your Sam on the left toward the three receivers and your Will right, the reverse of Trips Right.',
      CB: 'Three receivers are on the left: your corner over them is outnumbered, and your other corner is alone with one receiver.',
      S: 'Three receivers are on the left: rotate your help toward that trips side and call out the flipped coverage.'
    }
  },

  proSet: {
    concept: 'fmProSet',
    label: 'Pro Set (Split Backs)',
    aliases: ['Pro set', 'Split backs', 'Two-back set', '21 personnel'],
    lookFor: 'The quarterback is under center with two running backs split on either side of him, a tight end and two wide receivers.',
    tell: 'This classic balanced look usually keeps the defense guessing: the backs can run either way, block, or slip out for a pass.',
    key: ['HB', 'FB'],
    lesson: {
      title: 'Pro Set: Split Backs',
      body: 'In a Pro Set the quarterback is under center and the two running backs stand on either side of him, a step or two behind the line. That is called split backs. There is also a tight end and two wide receivers, which makes it 21 Personnel (2 RB, 1 TE, 2 WR). It is a classic balanced look because both backs can run, block or catch, so the defense has trouble knowing which way the play is going.',
      points: [
        'Two backs split on either side of the QB.',
        '2 RB, 1 TE, 2 WR is 21 Personnel.',
        'Balanced: runs can go left or right.',
        'Backs can carry, block or slip out for a pass.'
      ]
    },
    jobs: {
      QB: 'Two backs are split on either side of you under center: hand off either way, or fake to one and throw.',
      RB: 'You are one of two split backs beside the QB: you may carry, block or slip out for a pass, so check your job.',
      WR: 'With only two wide receivers and two split backs, block the corner on runs and expect single coverage on passes.',
      TE: 'You line up on the right edge with split backs behind you: block down or seal the edge, or release for a short pass.',
      OL: 'With two backs split beside the QB, the run can go either way: block your assignment without leaning one way.',
      EDGE: 'Two backs split beside the QB do not tip the direction: keep contain and watch your key before you chase.',
      DL: 'Two backs are split on either side of the QB, so runs can go both ways: stay square and do not chase early.',
      LB: 'With two backs split beside the QB, watch both backs and the guards together before you fill; either may carry.',
      CB: 'With two split backs, a tight end and two wide receivers, help on a run once you see it, but stay with your man.',
      S: 'Two split backs and a tight end can run or play-action: check run or pass before you step up to the line.'
    }
  },

  goalLine22: {
    concept: 'fmGoalLine22',
    label: 'Heavy / Goal Line (22)',
    aliases: ['22 personnel', 'Heavy set', 'Goal line offense', 'Jumbo'],
    lookFor: 'Two running backs in an I behind the quarterback, a tight end on each side, and only one wide receiver.',
    tell: 'This look usually signals a short-yardage or goal-line run, because it brings extra blockers. The defense often answers with its own big, run-stopping group.',
    key: ['TE2', 'TE', 'FB', 'TB'],
    lesson: {
      title: 'Heavy / Goal Line (22)',
      body: 'This formation puts two running backs in an I behind the quarterback, a tight end on each side and only one wide receiver. That is 2 RB, 2 TE, 1 WR, or 22 Personnel. It brings extra blockers for short-yardage and goal-line runs, and the defense usually answers with its own big, run-stopping group. Many teams add a sixth lineman (called jumbo) from here. A play-action pass to a tight end is always possible.',
      points: [
        '2 RB, 2 TE, 1 WR is 22 Personnel.',
        'A tight end on each side: extra blockers on both edges.',
        'Usually a short-yardage or goal-line run.',
        'Many teams add a sixth lineman (jumbo).'
      ]
    },
    jobs: {
      QB: 'Two backs in an I and a tight end each side: hand off or sneak behind big blockers; a play-action throw can surprise.',
      RB: 'A tight end is on each side and a fullback is in front of you: follow the fullback and run downhill for short yardage.',
      WR: 'You are the only wide receiver with two tight ends: block the corner hard on runs; you may be singled up on a pass.',
      TE: 'With a tight end on each side, you are a key edge blocker: drive your man, then slip out for a play-action catch.',
      OL: 'Two tight ends and two backs mean extra blockers; many teams add a sixth lineman: get low and drive off the ball.',
      EDGE: 'A tight end is beside you and two backs are in an I: expect a run, hold the edge and take on the lead block.',
      DL: 'With two tight ends and an I behind them, expect double teams: stay low and stop the push in your gap.',
      LB: 'Two backs in an I with a tight end each side: attack the lead fullback and stop the tailback behind him.',
      CB: 'The corner opposite the lone wide receiver has no wide player to cover: come up and support the run near the edge.',
      S: 'Two tight ends and two backs in an I mean run: step toward the line, but keep depth over the tight ends for play-action.'
    }
  },

  wildcat: {
    concept: 'fmWildcat',
    label: 'Wildcat',
    aliases: ['Wildcat formation', 'Direct snap', 'Running back at quarterback'],
    lookFor: 'The quarterback is lined up wide like a receiver, and a running back stands in the shotgun spot to take the snap.',
    tell: 'With a runner taking the snap, the defense must account for the quarterback as an extra threat or blocker. It usually threatens a run, but the offense can still hand off, fake or throw depending on the play.',
    key: ['RB', 'QB', 'HB'],
    lesson: {
      title: 'Wildcat: A Runner Takes the Snap',
      body: 'The tell in the Wildcat is that the quarterback is lined up out wide like a receiver, while a running back stands in the shotgun spot and takes the snap. With a runner at quarterback, the offense can use its quarterback as an extra blocker or receiver, so the defense has to account for an extra run threat. Defenses should count the quarterback out wide before the snap. The play can be a handoff, a keep or a fake, depending on the call.',
      points: [
        'The QB is wide; a running back takes the snap.',
        'Count the QB as an extra blocker or receiver.',
        'The defense must account for an extra run threat.',
        'The play can be a handoff, a keep, or a fake.'
      ]
    },
    jobs: {
      QB: 'You are lined up wide like a receiver while a back takes the snap: know your job as a blocker, route runner or decoy.',
      RB: 'You take the snap in the shotgun spot instead of the QB: know whether the call is a handoff, a keep or a fake.',
      WR: 'The QB is split out beside you and a back has the snap: expect blocking duties and block until the carrier passes.',
      TE: 'A running back takes the snap and the QB is wide: seal or block down so the runner has a lane, per the call.',
      OL: 'A back takes the snap and the QB is out wide: recheck who you block, since the player outside may be a blocker or receiver.',
      EDGE: 'The QB is out wide, not behind center: count him as an extra threat, keep contain and do not crash on a fake.',
      DL: 'A back takes the snap with the QB split out: do not chase the first move, since a handoff, keep or fake is possible.',
      LB: 'Find the QB lined up wide and count him as an extra blocker or receiver before you fill your gap.',
      CB: 'The QB is lined up wide near you: your receiver may be blocking for a run, so watch both and support the run.',
      S: 'Locate the QB lined up wide before the snap, count him as a possible blocker or receiver, and be ready to fill or cover.'
    }
  }

});
Object.assign(FM_DEF_INFO, {
  '42nickel': {
    concept: 'front42Nickel',
    label: '4-2 Nickel',
    aliases: ['Nickel', '4-2-5', 'Nickel defense'],
    counts: '4-2-5',
    lookFor: 'Count four down linemen, only two linebackers, and five defensive backs, with the extra defensive back (the Nickel) near the slot receiver.',
    tell: 'It is built to cover three or four receivers without a linebacker stuck on a slot receiver. With one fewer linebacker, the box is often a little lighter, so a run can have a bit more room.',
    key: ['NB', 'MIKE', 'WILL'],
    tapKey: { id: 'NB', role: 'the Nickel (fifth defensive back)' },
    jobs: {
      QB: 'Vs five defensive backs and two linebackers, throw quick to the slot or hand off into the lighter box.',
      RB: 'Vs only two linebackers, look for room in the lighter box, but the extra defensive back may fill fast.',
      WR: 'With a Nickel over the slot, you face a defensive back, not a linebacker, so win with quick, sharp routes.',
      TE: 'Vs two linebackers and a Nickel, you may face a defensive back, so block him on runs and find a seam on passes.',
      OL: 'Vs four linemen and just two linebackers, you have only Mike and Will to climb to, so pick one after your block.',
      EDGE: 'With only two linebackers and the Nickel off the line, set a firm edge, since you may get less help outside.',
      DL: 'With a weak-side 3-technique and strong 1-technique in front of only two linebackers, win your gap to free them.',
      LB: 'As one of only two linebackers, cover extra ground in the run, since the Nickel takes the slot, not you.',
      CB: 'With a Nickel inside you, cover the outside receiver and let the Nickel handle the slot.',
      S: 'With a Nickel and only two linebackers, be ready to come down and help on the run, often late.'
    }
  },

  '43under': {
    concept: 'front43Under',
    label: '4-3 Under',
    aliases: ['Under front', '4-3 Under', 'Under'],
    counts: '4-3-4',
    lookFor: 'Look for the 3-technique tackle on the weak (open) side, the nose shaded toward the tight end side, and the Sam linebacker standing over the tight end.',
    tell: 'It is a base run-stopping front that puts a strong run defender on the tight end side. The weak-side 3-technique can attack that side, so offenses often attack the strong side or test the other side with a quick pass.',
    key: ['SAM', 'WDT', 'SDT'],
    tapKey: { id: 'WDT', role: 'the 3-technique tackle on the weak side' },
    jobs: {
      QB: 'Find Mike first: with the 3-technique weak and the nose shading strong, your line\'s blocks depend on where he stands.',
      RB: 'Vs a weak-side 3-technique, be ready to cut back if he beats his block, and watch the Sam on the tight end side.',
      WR: 'Vs four defensive backs and a Sam tied to the tight end, expect corners on you and block the corner on strong-side runs.',
      TE: 'With the Sam lined up over you and a 5-technique end outside him, block the Sam hard or release past him on passes.',
      OL: 'Vs a 3-technique to the weak side and a nose shaded to the strong A gap, assign the center and guard, then climb to Mike.',
      EDGE: 'On the strong side, play a 5-technique outside the tackle and set the edge; the weak-side end can rush wide.',
      DL: 'The weak-side 3-technique takes the guard\'s outside shoulder, and the nose shades the strong A gap. Line up there.',
      LB: 'With Sam over the tight end, Mike in the middle and Will weak, fit behind the 3-technique and the shaded nose.',
      CB: 'With three linebackers and Sam on the tight end, keep outside leverage on your receiver and help on runs to your side.',
      S: 'With the Sam walked up over the tight end, the strong safety can help the run on that side while the free safety stays deep.'
    }
  },

  '43over': {
    concept: 'front43Over',
    label: '4-3 Over',
    aliases: ['Over front', '4-3 Over', 'Over'],
    counts: '4-3-4',
    lookFor: 'Look for the 3-technique tackle lined up on the strong (tight end) side, the 1-technique on the weak side, and the strong-side end head-up or inside the tight end.',
    tell: 'It shifts the line toward the strong side to make the tight end side crowded and tough to run. The weak side can have more room, so offenses often try to run away from the shift or throw quickly.',
    key: ['SDT', 'WDT', 'SDE'],
    tapKey: { id: 'SDT', role: 'the 3-technique tackle on the strong side' },
    jobs: {
      QB: 'With the 3-technique on the tight end side, expect a crowded strong side and check a run or quick throw to the weak side.',
      RB: 'Vs a line shifted strong, cut back or bounce to the weak side, away from the 3-technique and the end on the tight end.',
      WR: 'Vs a line shifted to the tight end side, runs often go the other way, so block downfield on the weak side.',
      TE: 'With the strong-side end head-up on you and the 3-technique inside him, expect a physical block, not a free release.',
      OL: 'Vs the 3-technique on the tight end side and a 1-technique to the weak side, point both out so everyone knows their man.',
      EDGE: 'As the strong-side end, play head-up on or inside the tight end; the weak-side end can rush wide.',
      DL: 'The 3-technique goes to the strong side and the 1-technique to the weak side. Line up on the guard\'s or center\'s shoulder.',
      LB: 'With the line shifted strong, Sam plays near the tight end and Will gets more weak-side room. Fit behind your linemen.',
      CB: 'Vs a line shifted toward the tight end, the weak side has less help up front, so keep leverage and be ready for cutbacks.',
      S: 'Vs a shift strong, the strong safety can help the run near the tight end; the free safety watches weak cutbacks.'
    }
  },

  '34base': {
    concept: 'front34',
    label: '3-4 Base',
    aliases: ['3-4', '3-4 defense', '3-4 Base'],
    counts: '3-4-4',
    lookFor: 'Count only three down linemen, with a nose tackle on the center and two 5-technique ends, plus four linebackers standing behind or outside them.',
    tell: 'It uses outside linebackers as edge rushers, so the offense has to find where the pressure comes from. With only three linemen, many teams can send a linebacker from different spots.',
    key: ['NT', 'WOLB', 'SOLB'],
    tapKey: { id: 'NT', role: 'the nose tackle' },
    jobs: {
      QB: 'Vs three linemen and four linebackers, find the outside linebackers, who are the edge rushers; an inside one could blitz too.',
      RB: 'Vs four linebackers, scan the outside and inside linebackers for blitzers before you take the handoff or release.',
      WR: 'Vs three linemen and four linebackers, expect corners and two safeties on you, so block the corner on runs.',
      TE: 'Vs an outside linebacker standing up on the edge, block or chip him; he may rush or drop, so read him first.',
      OL: 'Vs three linemen, the center takes the nose tackle; find which linebacker rushes, since the inside ones can fill or blitz.',
      EDGE: 'As a 3-4 outside linebacker, stand up on the edge, set it against the run, and rush off the tackle on passes.',
      DL: 'As a 5-technique end, take the tackle\'s outside shoulder; as the nose, take the center head-up and tie up blockers.',
      LB: 'As an inside linebacker, stay stacked behind the nose and ends, then fill the gap that opens when they take on blockers.',
      CB: 'With four linebackers and three linemen, you and the other corner keep outside leverage, and the safeties help deep.',
      S: 'With four linebackers near the line, stay deep with the free safety and come down only when the run is clear.'
    }
  }
});
Object.assign(FM_DEF_INFO, {

  '335stack': {
    concept: 'fr335',
    label: '3-3-5 Stack',
    aliases: ['3-3-5', '3-3-5 Odd Stack', '3-3 Stack'],
    counts: '3-3-5',
    lookFor: 'Count three big linemen on the line, three linebackers standing right behind them, and five defensive backs (the extra one is the Nickel).',
    tell: 'It is built to defend spread passing teams while keeping three linebackers who can run. Because they stand behind the line, they can hide which one rushes and which one drops.',
    key: ['NT', 'MIKE', 'NB'],
    tapKey: { id: 'NT', role: 'the nose tackle in the middle of a three-man line' },
    lesson: {
      title: 'The 3-3-5 Stack: Hide The Pressure',
      body: 'The 3-3-5 has only three players with a hand near the ground: a nose tackle and two ends. Behind them, three linebackers stand "stacked" in the same lanes, and five defensive backs play behind that. Because the linebackers start back off the ball, the offense cannot easily tell which one will rush and which one will drop into coverage. Many teams use it against spread offenses. Exact alignments and names change from team to team.',
      points: [
        'Three linemen, three linebackers, five defensive backs.',
        'Linebackers stand behind the linemen, so they can hide who rushes.',
        'Built for spread passing teams, but with fewer linemen to stop the run.',
        'Count the box and watch for a late creeper before the snap.'
      ]
    },
    jobs: {
      QB: "Only three linemen with three linebackers stacked behind: watch which one creeps up, since any could rush or drop.",
      RB: "With only three linemen rushing, a stacked linebacker or the Nickel may blitz; stay in to block or slip out as the outlet.",
      WR: "Five defensive backs and a three-man line: win your release fast, since a hidden linebacker blitz can shorten the play.",
      TE: "A linebacker stands stacked behind the end over you: read his first step to see if he rushes or drops, then block or run.",
      OL: "Three linemen face your five blockers, so find the extra rusher among the stacked linebackers or Nickel and pass off stunts.",
      EDGE: "You are one of only two ends in a three-man line, with a stacked linebacker behind you: hold your side so he can fill.",
      DL: "As the nose over the center, tie up the center and guard so the three stacked linebackers behind you stay free.",
      LB: "You stand stacked right behind a lineman with two other linebackers: read the ball, then fill your gap or blitz as called.",
      CB: "A Nickel covers the slot and three linebackers cover the middle, so you take the outside receiver in the called coverage.",
      S: "With three linebackers in the box, the two safeties can split the deep field; the strong safety may walk down to blitz."
    }
  },

  'dime416': {
    concept: 'frDime',
    label: '4-1-6 Dime',
    aliases: ['Dime package', '4-1-6', 'Dime'],
    counts: '4-1-6',
    lookFor: 'Look for only one true linebacker in the middle, four linemen up front, and six defensive backs, including a Nickel and a Dime in the slots.',
    tell: 'It is mostly a passing-down package used against four or five receivers. Extra defensive backs help cover, but fewer big bodies leave less help against a run.',
    key: ['MIKE', 'NB', 'DIME'],
    tapKey: { id: 'DIME', role: 'the Dime, the sixth defensive back' },
    lesson: {
      title: 'The 4-1-6 Dime: A Passing-Down Package',
      body: 'The dime package keeps four linemen, one linebacker, and six defensive backs. The two extra backs, the Nickel and the Dime, cover slot receivers so no linebacker is stuck chasing them. Teams often call it on long third downs or when the offense spreads out four or five receivers. The trade-off is that there is much less size near the line, so a well-timed run or draw can find space. Exact alignments vary by team.',
      points: [
        'Four linemen, one linebacker, six defensive backs.',
        'The Nickel and the Dime are extra defensive backs covering the slots.',
        'Mostly used on passing downs; the run defense is thinner.',
        'Count the linebackers to spot it: just one in the middle.'
      ]
    },
    jobs: {
      QB: "Six defensive backs and one linebacker: windows are crowded, so throw on time or scramble when four rushers open a lane.",
      RB: "Only one linebacker is in the box, so draws and inside runs can work; on passes be the check-down against deep zones.",
      WR: "Six defensive backs cover receivers, so expect man or deep zones; beat the press or sit in the soft spot between them.",
      TE: "A defensive back, not a linebacker, often lines up over you in this package: use your size on short routes and blocks.",
      OL: "Four rushers and one linebacker: block the four, watch for the lone Mike or a defensive-back blitz, and drive on a run.",
      EDGE: "The offense is likely throwing against six defensive backs, so rush with speed off the edge, but watch for a draw.",
      DL: "With one linebacker behind you, push the pocket up the middle on passes; on a draw the lone Mike cannot cover every gap.",
      LB: "You are the only linebacker, so cover the middle: read the guards for a draw or run, and drop to the hook on a pass.",
      CB: "A Nickel and a Dime cover the slots, so you take the outside receiver, usually in man or a deep zone.",
      S: "With six defensive backs you may stay deep, but with one linebacker the strong safety might help against the run."
    }
  },

  '43wide9': {
    concept: 'frWide9',
    label: '4-3 Wide 9',
    aliases: ['Wide-9', 'Wide Nine', '4-3 with wide ends'],
    counts: '4-3-4',
    lookFor: 'Find both defensive ends lined up WIDE, well outside the tackle or the tight end, in a 9-technique.',
    tell: 'The wide ends get a running start at the passer. Coaches often debate the trade-off: that speed on the edge can leave more room inside, which fast linebackers have to fill.',
    key: ['WDE', 'SDE'],
    tapKey: { id: 'WDE', role: 'a wide-9 defensive end' },
    lesson: {
      title: 'The 4-3 Wide 9: Ends On The Outside',
      body: 'In the wide-9, a regular 4-3 front stands up with both defensive ends lined up far outside, outside the tight end or tackle (the 9-technique). The idea is a longer running start at the passer and more space to stretch the offense. Coaches often disagree about it. The wide ends can create a fast rush, but the inside gaps can be larger, so the tackles and linebackers have to fill them. Names and alignments vary by team.',
      points: [
        'Four linemen, three linebackers, both ends lined up wide.',
        'The 9-technique is outside the end man on the line.',
        'It is meant to get to the passer quickly.',
        'The inside gaps can be bigger, so the linebackers must fill fast.'
      ]
    },
    jobs: {
      QB: "Both ends are lined up wide outside the tackles, so expect a fast edge rush: step up in the pocket or throw quickly.",
      RB: "With ends lined up wide, inside lanes may be open for inside runs and draws; on passes, chip the wide end as he comes.",
      WR: "Wide ends can reach the QB quickly, so run timing routes and be at your spot on time rather than letting plays develop.",
      TE: "A wide end lines up outside you: seal him away from the run, or chip him on your way into your route.",
      OL: "With ends wide outside your tackles, set deep and fast with the tackles; inside, get to the linebackers to close wide gaps.",
      EDGE: "Line up wide outside the tackle or tight end and take off for the passer; on a run, squeeze or contain as called.",
      DL: "With both ends lined up wide, you plug the inside gaps against double teams so the linebackers can run free.",
      LB: "Your ends are wide, leaving bigger inside gaps: read quickly and fill the inside lane, and be ready for a cutback.",
      CB: "Wide ends rush quickly from outside, so the QB often throws early; stay tight with your receiver for a short time.",
      S: "Ends lined up wide leave room inside, so be ready to come down behind the linebackers to stop a runner cutting inside."
    }
  },

  'goalLine': {
    concept: 'frGoalLine',
    label: 'Goal Line (5-3-3)',
    aliases: ['Goal Line', 'Goal line 5-3-3', 'Short-yardage stack'],
    counts: '5-3-3',
    lookFor: 'Count five defensive linemen shoulder to shoulder, three linebackers right behind them, and only three defensive backs.',
    tell: 'It is built for the last few yards, where the defense takes away space rather than deep coverage. Some teams use a 6-5 look instead, but the idea is the same.',
    key: ['NT', 'MIKE', 'FS'],
    tapKey: { id: 'NT', role: 'the nose tackle in the middle of a five-man line' },
    lesson: {
      title: 'Goal Line: Close Every Gap',
      body: 'Near the goal line there is very little room to run, so the defense crowds the line of scrimmage. This version has five linemen, three linebackers behind them, and only three defensive backs, so nearly every gap has a defender in it. Some teams use a 6-5 look, or other numbers, but the idea is the same: make the offense score in a tiny space. The defense gives up deep coverage because the end zone is so close. Exact alignments vary by team.',
      points: [
        'Five linemen, three linebackers, three defensive backs.',
        'Every gap is covered; the defense takes away space.',
        'Little deep coverage is needed, since the end zone is close.',
        'The offense may use play-action or quick throws to a receiver.'
      ]
    },
    jobs: {
      QB: "Five linemen and three linebackers fill the gaps: sneak with the ball secure, or fake the run and look for play-action.",
      RB: "Every gap has a defender with five linemen across: get low, follow your blockers, and drive for the goal line.",
      WR: "Only three defensive backs, all close to the line: block on runs, or run a quick route or fade off play-action.",
      TE: "Defenders are over almost every gap, so block your man hard, or slip out for a quick play-action catch in the end zone.",
      OL: "Five linemen sit across from you, so win with low pads and double teams to push the line backward off the ball.",
      EDGE: "As an end on the outside of a five-man line, hold your side so the ball cannot bounce out, and don't rush far upfield.",
      DL: "You are one of five linemen across the line: take your gap head-up, fire off low, and drive the line backward.",
      LB: "Three linebackers stand right behind five linemen: fill the gap where the ball shows and attack at the line.",
      CB: "With just three defensive backs, you stay close to your receiver and help on the edge; the end zone is short.",
      S: "You are the lone safety left: stay near the goal line, watch for play-action in the end zone, and come up on the run."
    }
  }

});
// Football-IQ glossary (84 terms, 14 per group)

// ---------- form: Formations & Personnel ----------
FM_LINGO.push(
  { term: "Trips", group: "form", def: "A formation with three receivers lined up on the same side of the field, leaving the other side with one or two." },
  { term: "Bunch", group: "form", def: "Three receivers lined up close together, usually only a few yards apart on one side, so they can cross and get in each other's way." },
  { term: "Stack", group: "form", def: "Two receivers lined up one behind the other, so the defender can only see one of them clearly before the snap." },
  { term: "Empty", group: "form", def: "A formation with no running back behind the QB, so all five eligible receivers are split out at or near the line." },
  { term: "Twins", group: "form", def: "Two receivers lined up on the same side of the formation, often one wide and one in the slot." },
  { term: "Slot", group: "form", def: "A receiver who lines up between the offensive line and the outside receiver, usually a step or so off the line of scrimmage." },
  { term: "H-back", group: "form", def: "A flexible player who is part tight end and part fullback, lined up off the line, who may block, go in motion, or catch passes." },
  { term: "Wing", group: "form", def: "A player lined up just behind and outside the end of the line, often used to add a blocker on that side of a run play." },
  { term: "Pistol", group: "form", def: "A look where the QB stands about four yards behind the center with the running back directly behind him in a straight line." },
  { term: "Under center", group: "form", def: "The QB stands right behind the center with his hands under him and takes the snap there, instead of lining up in the shotgun." },
  { term: "Strength", group: "form", def: "The side of the formation with more eligible receivers, often the tight end side; the defense usually sets its front toward it." },
  { term: "Motion", group: "form", def: "One player, not the QB, moves along the backfield before the snap to change the look or to help the QB read the defense." },
  { term: "Shift", group: "form", def: "Two or more offensive players change spots before the snap, then everyone must stop and set before the ball is snapped." },
  { term: "11 personnel", group: "form", def: "Shorthand for the players on the field: one running back, one tight end, and so three wide receivers (first number backs, second tight ends)." }
);

// ---------- pre: Pre-snap Reads & Calls ----------
FM_LINGO.push(
  { term: "Mike point", group: "pre", def: "The offense picks out the Mike linebacker, the defense's lead inside linebacker, so the line can set its blocking calls from him." },
  { term: "Box count", group: "pre", def: "Counting defenders near the line between the tackles; a light box (about six or fewer) favors the run, a loaded box (eight or more) the pass." },
  { term: "Single-high", group: "pre", def: "Only one safety lines up deep in the middle of the field, which often means man coverage or a three-deep zone is coming." },
  { term: "Two-high", group: "pre", def: "Two safeties line up deep and split the field, which often means a Cover 2, Cover 4, or Cover 6 type of coverage." },
  { term: "MOF closed / open", group: "pre", def: "Middle of the field is closed with one deep safety there, and open when two safeties split wide or none is deep in the middle." },
  { term: "Rotate", group: "pre", def: "Defenders, usually safeties, change spots right as or just before the snap so the coverage is not what the offense expected." },
  { term: "Creeper", group: "pre", def: "A blitz where an unexpected defender, such as a linebacker or safety, joins the rush from a spot that looked like coverage." },
  { term: "Disguise", group: "pre", def: "The defense lines up to look like one coverage or blitz, then changes at the snap to hide what it is really doing." },
  { term: "Check-with-me", group: "pre", def: "A call that lets the QB pick the final play at the line after reading the defense, often from a few options the coach gave him." },
  { term: "Audible", group: "pre", def: "A play change the QB calls at the line of scrimmage after seeing the defense, replacing the play that was sent in." },
  { term: "Hot", group: "pre", def: "A quick-throw receiver or route the QB goes to right away when he sees a blitz coming, before the rush can reach him." },
  { term: "Sight adjust", group: "pre", def: "A receiver changes his route as he sees the defense, such as the coverage or blitz, and the QB expects that same change." },
  { term: "Hard count", group: "pre", def: "A QB's loud, sharp snap count with a changed rhythm, used to try to trick the defense into jumping offside." },
  { term: "Cadence", group: "pre", def: "The words and rhythm the QB uses before the snap, which set the snap count and tell his teammates when to go." }
);

// ---------- front: Fronts, Techniques & Gap Play ----------
FM_LINGO.push(
  { term: "Over / Under front", group: "front", def: "In many 4-3 fronts, Over shifts the D-line toward the offense's strong side and Under shifts it away, toward the weak side." },
  { term: "Odd / Even front", group: "front", def: "An even front has an even number of down linemen, like four; an odd front has an odd number, like three, with a nose tackle over the center." },
  { term: "One-gap", group: "front", def: "A defensive lineman attacks and is responsible for one gap, the space between two offensive linemen, and tries to get upfield through it." },
  { term: "Two-gap", group: "front", def: "A lineman, often a nose tackle or 3-4 end, controls a blocker and reacts to the ball, covering either gap on both sides of him." },
  { term: "Edge", group: "front", def: "The outside end of the line of scrimmage, or the defensive ends and outside linebackers who line up there to rush and set the edge." },
  { term: "Contain", group: "front", def: "Keeping the QB or ball carrier from running around the outside of the defense, often by an end or outside linebacker." },
  { term: "Force", group: "front", def: "The defender who sets the edge on a run, keeping the ball carrier from getting outside; exactly how he does it depends on the scheme." },
  { term: "Spill", group: "front", def: "A defender takes on a blocker and pushes the play wide, so the ball carrier runs into teammates waiting outside to make the tackle." },
  { term: "Run fit", group: "front", def: "The gap or spot each defender is assigned to take on a run play, so every running lane has someone responsible for it." },
  { term: "Gap integrity", group: "front", def: "Each defender stays in his assigned gap instead of chasing the ball, so the runner has no open lane to cut back into." },
  { term: "Stunt", group: "front", def: "Two or more pass rushers swap paths or gaps (a twist is one kind) to confuse blockers and open a lane to the QB." },
  { term: "Zone blitz", group: "front", def: "A pressure where a lineman drops into short zone coverage while a linebacker or defensive back rushes in his place." },
  { term: "Overload", group: "front", def: "The defense sends more rushers or defenders to one side than the offense has blockers there, to get one free." },
  { term: "Wide-9", group: "front", def: "A front where the defensive ends line up very wide, outside the tight end or tackle, to get a speed rush on the QB." }
);

// ---------- cov: Coverages ----------
FM_LINGO.push(
  { term: "Cover 0", group: "cov", def: "Man-to-man coverage with no safety deep to help, usually used with a heavy blitz and a lot of risk." },
  { term: "Cover 1", group: "cov", def: "Man-to-man coverage underneath with one safety deep in the middle of the field to help over the top." },
  { term: "Cover 2", group: "cov", def: "A zone coverage where two safeties each guard a deep half of the field, while the corners usually cover the short outside areas." },
  { term: "Cover 3", group: "cov", def: "A zone coverage where three defenders split the deep field into thirds and four others cover the short zones." },
  { term: "Cover 4 (Quarters)", group: "cov", def: "Four defenders each cover a deep quarter of the field, and many teams have them match up with receivers who run deep." },
  { term: "Cover 6", group: "cov", def: "A mix that usually plays Quarters on one side of the field and Cover 2 on the other." },
  { term: "Tampa 2", group: "cov", def: "A Cover 2 where the middle linebacker drops deep to cover the middle seam between the two safeties." },
  { term: "Man vs zone", group: "cov", def: "In man coverage each defender follows a receiver; in zone each defender guards an area and reacts to receivers who enter it." },
  { term: "Press", group: "cov", def: "A defensive back lines up right at the line of scrimmage in front of a receiver and may jam him at the snap." },
  { term: "Bail", group: "cov", def: "A defensive back turns and runs backward to keep depth, so a deep route cannot get behind him." },
  { term: "Bracket", group: "cov", def: "Two defenders cover one receiver, one underneath and one over the top or inside, often to take away the offense's top target." },
  { term: "Robber", group: "cov", def: "A defender, often a safety, drops into the short middle to jump crossing routes while others cover deep." },
  { term: "Spy", group: "cov", def: "A defender who follows one player instead of a receiver, often a running QB, and reacts to where he goes." },
  { term: "Match coverage", group: "cov", def: "A zone coverage where defenders switch to man-to-man on receivers who enter their area, so the call plays like both." }
);

// ---------- line: Line Play & Blocking ----------
FM_LINGO.push(
  { term: "Reach block", group: "line", def: "A lineman gets to the outside shoulder of a defender lined up outside him, then seals him inward; common in outside zone runs." },
  { term: "Down block", group: "line", def: "A blocker steps inside and blocks the defender lined up on the side toward the center, often in power and gap run plays." },
  { term: "Double team", group: "line", def: "Two blockers work together on one defender to move him, and one often then leaves to block a linebacker." },
  { term: "Combo block", group: "line", def: "Two linemen start by blocking the same defender, then one peels off to the next level depending on how the defenders move." },
  { term: "Pull", group: "line", def: "A lineman leaves his spot and runs along behind the line to lead the block on the play, as in power or counter." },
  { term: "Kick-slide", group: "line", def: "Pass-block footwork where a tackle steps back and out in a quick angle, then slides to stay in front of the edge rusher." },
  { term: "Punch", group: "line", def: "A blocker strikes a defender's chest with both hands and locks out his arms to control him and keep him away." },
  { term: "Zone blocking", group: "line", def: "Linemen block an area, not one set man, move together in the same direction, and take on whoever shows up in their area." },
  { term: "Gap blocking", group: "line", def: "Each lineman has an assigned defender or gap to block, as in power, and a puller often leads the way through the hole." },
  { term: "Slide protection", group: "line", def: "The line moves together in one direction to block the rushers on that side, while a back often takes the rusher on the other." },
  { term: "Chip", group: "line", def: "A back, tight end, or receiver gives a quick hit to a pass rusher on his way past before running his route." },
  { term: "Bull rush", group: "line", def: "A pass rush where the rusher drives straight into the blocker with power to push him back toward the QB." },
  { term: "Swim / rip / club", group: "line", def: "Pass-rush hand moves: swim goes over the blocker's arm, rip drives up under it, and club knocks the blocker's arm away." },
  { term: "Get-off", group: "line", def: "How fast and explosively a lineman gets out of his stance when the ball is snapped, which often decides who wins the rep." }
);

// ---------- play: Run & Pass Concepts ----------
FM_LINGO.push(
  { term: "Inside zone", group: "play", def: "A run aimed between the tackles where linemen block zones and the back picks the best crease to cut through." },
  { term: "Outside zone", group: "play", def: "A run that stretches toward the sideline with linemen moving sideways, and the back cuts up where a lane opens." },
  { term: "Power", group: "play", def: "A gap run where a guard often pulls to lead through the hole, with a blocker kicking out the defender on the edge." },
  { term: "Counter", group: "play", def: "A run where the line and a puller move one way, then the back goes the other way to make the defense flow the wrong direction." },
  { term: "Draw", group: "play", def: "The offense looks like a pass, then hands off to the running back once the pass rushers have rushed upfield." },
  { term: "Screen", group: "play", def: "A short pass thrown behind the line to a back or receiver with blockers set in front, after letting the rushers come through." },
  { term: "Play-action", group: "play", def: "The QB fakes a handoff to look like a run, then throws, trying to freeze linebackers and safeties for a moment." },
  { term: "Bootleg", group: "play", def: "After a run fake, the QB rolls out away from the run flow and throws or runs, often with fewer defenders chasing him." },
  { term: "RPO", group: "play", def: "A run-pass option: the QB reads one defender after the snap and chooses to hand off, keep it, or throw a quick pass." },
  { term: "Slant", group: "play", def: "A quick route where the receiver takes a few steps then cuts diagonally inward across the field." },
  { term: "Curl", group: "play", def: "A route where the receiver runs upfield about ten yards, then turns back toward the QB and settles in open space." },
  { term: "Post", group: "play", def: "A deep route where the receiver runs upfield then cuts diagonally toward the goalposts, often into the middle of the field." },
  { term: "Smash", group: "play", def: "A pass combo with a short route by one receiver and a corner route by another over it, built to stress a cornerback." },
  { term: "Mesh", group: "play", def: "Two receivers run shallow crossing routes in opposite directions, passing close together to create traffic for defenders." }
);

/* =========================================================
   GENERATOR — turns the tables above into concepts, lessons and
   questions. Everything is deterministic (no Math.random) so the
   same question ids and wording load every time.
   ========================================================= */
const FM_POS_NAME = {
  QB: 'quarterback', RB: 'running back', WR: 'wide receiver', TE: 'tight end', OL: 'offensive lineman',
  EDGE: 'defensive end / edge rusher', DL: 'interior defensive lineman', LB: 'linebacker', CB: 'cornerback', S: 'safety'
};
const FM_POSITIONS = ['QB', 'RB', 'WR', 'TE', 'OL', 'EDGE', 'DL', 'LB', 'CB', 'S'];

function _fmHash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
// Deterministic "shuffle": order items by a hash of (seed + item).
function _fmPick(list, seed, n) {
  return list.map(x => ({ x: x, k: _fmHash(seed + '|' + (typeof x === 'string' ? x : JSON.stringify(x))) })).sort((a, b) => a.k - b.k).slice(0, n).map(o => o.x);
}
function _fmEsc(s) { return String(s); }

PERSONNEL_GROUPINGS['22'] = { id: '22', label: '22 Personnel', description: '2 RB, 2 TE, 1 WR.' };
function _fmPersLabel(p) { const g = PERSONNEL_GROUPINGS[p]; return g ? (g.label + ' (' + g.description.replace(/\.$/, '') + ')') : (p + ' Personnel'); }

/* ---- which defenses/offenses to draw together (heavy vs heavy, spread vs spread) ---- */
const FM_DEF_FOR = {
  shotgunTripsRight: ['42nickel', '335stack', '43under'], shotgunDoubles: ['42nickel', 'dime416', '335stack'],
  pistolRight: ['43under', '43over', '42nickel'], singlebackAce: ['43under', '34base', '43over'],
  iFormation: ['43over', '43under', '34base'], wingRight: ['43over', '43under', '34base'],
  tightEndHeavy: ['43over', '34base', '43under'], fullHouse: ['goalLine', '43over', '34base'],
  emptyThreeByTwo: ['dime416', '335stack', '42nickel'], bunchRight: ['42nickel', '335stack', 'dime416'],
  tripsLeft: ['42nickel', '335stack', '43under'], proSet: ['43under', '43over', '34base'],
  goalLine22: ['goalLine', '43over', '34base'], wildcat: ['43under', '43over', '42nickel']
};
const FM_OFF_FOR = {
  '42nickel': ['shotgunTripsRight', 'shotgunDoubles', 'bunchRight'], '43under': ['pistolRight', 'singlebackAce', 'proSet'],
  '43over': ['pistolRight', 'iFormation', 'wingRight'], '34base': ['iFormation', 'singlebackAce', 'tightEndHeavy'],
  '335stack': ['shotgunDoubles', 'shotgunTripsRight', 'tripsLeft'], 'dime416': ['emptyThreeByTwo', 'shotgunDoubles', 'bunchRight'],
  '43wide9': ['pistolRight', 'shotgunDoubles', 'singlebackAce'], 'goalLine': ['goalLine22', 'fullHouse', 'iFormation']
};
// A player on the diagram to ring for each position ("this is you")
function _fmOffPlayer(fid, pos) {
  const ids = FORMATIONS[fid].players.map(p => p.id);
  const want = { QB: ['QB'], RB: ['RB', 'TB', 'HB', 'HB1', 'FB'], WR: ['X', 'Z', 'H', 'S', 'Y'], TE: ['TE', 'TE2'], OL: ['C'] }[pos] || [];
  return want.find(id => ids.indexOf(id) !== -1) || null;
}
function _fmDefPlayer(front, fid, pos) {
  const ids = defenseFor(front, fid).map(p => p.id);
  const want = { EDGE: ['SDE'], DL: ['NT', 'SDT'], LB: ['MIKE', 'SILB'], CB: ['CBR'], S: ['FS'] }[pos] || [];
  return want.find(id => ids.indexOf(id) !== -1) || null;
}

const FM_CONCEPT_IDS = { off: [], def: [], shell: [], lingo: [] };
const FM_SKILL_LABELS = {
  name: 'Naming the formation or front', look: 'Spotting the look on the field', personnel: 'Reading personnel numbers',
  strength: 'Finding the strength side', tell: 'Knowing what a look means', job: 'Knowing your job vs each look',
  count: 'Counting defenders by level', tap: 'Finding defenders on the field', shell: 'Reading the safety shell', lingo: 'Pro lingo'
};

function _fmNewConcept(id, label, difficulty, film, kind, prereq) {
  const c = _c(id, label, 'RB', _T3, difficulty, film);
  c.side = 'both'; c.prerequisites = prereq || []; c.fm = kind;
  CONCEPTS[id] = c;
  return c;
}
function _fmDefaultFieldNote(info) { return info.lookFor; }

/* ---------- OFFENSIVE FORMATIONS ---------- */
(function () {
  const ids = Object.keys(FM_OFF_INFO);
  // similarity score for plausible wrong answers
  function nearby(fid) {
    const f = FORMATIONS[fid];
    return ids.filter(o => o !== fid).map(o => {
      const g = FORMATIONS[o];
      let s = 0;
      if (g.personnel === f.personnel) s += 3;
      if (g.meta.strong === f.meta.strong) s += 1;
      if (!!g.meta.balanced === !!f.meta.balanced) s += 1;
      if (g.mirrorOf === fid || f.mirrorOf === o) s += 3;
      s += (_fmHash(fid + o) % 100) / 100;
      return { o: o, s: s };
    }).sort((a, b) => b.s - a.s).map(x => x.o);
  }
  ids.forEach(fid => {
    const info = FM_OFF_INFO[fid], f = FORMATIONS[fid];
    if (!info || !f) return;
    let cid = info.concept;
    if (!CONCEPTS[cid]) {
      _fmNewConcept(cid, info.label, 2, info.label + ' formation football explained film', 'off', ['personnelNumbers', 'strengthCall']);
      const L = info.lesson || { title: info.label, body: f.description, points: [] };
      const pts = (L.points || []).slice();
      if (info.aliases && info.aliases.length) pts.push('Also called: ' + info.aliases.join(', ') + '.');
      _l('l_' + cid, cid, 2, L.title, L.body, pts, { offense: fid, defense: null, showGaps: false, highlightIds: info.key, note: info.lookFor });
      FM_CONCEPT_IDS.off.push(cid);
    } else {
      CONCEPTS[cid].side = 'both'; CONCEPTS[cid].fm = 'off';
      if (CONCEPTS[cid].prerequisites.length === 0) CONCEPTS[cid].prerequisites = ['personnelNumbers', 'strengthCall'];
      FM_CONCEPT_IDS.off.push(cid);
    }
    const base = CONCEPTS[cid].difficulty || 2;
    const hint = { ids: info.key, text: info.lookFor };
    const defs = FM_DEF_FOR[fid] || ['43under'];
    const near = nearby(fid);
    const aliasTxt = info.aliases && info.aliases.length ? ' Also called: ' + info.aliases.slice(0, 3).join(', ') + '.' : '';

    // 1 + 2: NAME the formation (clean, then with a defense)
    [0, 1].forEach(k => {
      const wrong = _fmPick(near.slice(0, 5), fid + 'name' + k, 3);
      const opts = [[fid, info.label]].concat(wrong.map(w => [w, FM_OFF_INFO[w].label]));
      _s('s_fm_' + fid + '_name' + (k + 1), cid, base, 'recognize',
        { offense: fid, defense: k === 0 ? null : defs[1 % defs.length], showGaps: false, hideRoles: true },
        _mc('What formation is this?', opts, fid, info.label + '. ' + info.lookFor + aliasTxt), { skill: 'name', hint: hint });
    });
    // 3: LOOK — match the description to the picture
    {
      const wrong = _fmPick(near.slice(0, 5), fid + 'look', 3);
      const opts = [[fid, info.lookFor]].concat(wrong.map(w => [w, FM_OFF_INFO[w].lookFor]));
      _s('s_fm_' + fid + '_look', cid, base, 'recognize', { offense: fid, defense: null, showGaps: false },
        _mc('Which description matches the formation on the field?', opts, fid, 'This is ' + info.label + '. ' + info.lookFor), { skill: 'look', hint: hint });
    }
    // 4: PERSONNEL
    if (fid !== 'wildcat') {
      const all = ['10', '11', '12', '13', '21', '22', '31'].filter(p => p !== f.personnel);
      const wrong = _fmPick(all, fid + 'pers', 3);
      const opts = [['p' + f.personnel, _fmPersLabel(f.personnel)]].concat(wrong.map(p => ['p' + p, _fmPersLabel(p)]));
      _s('s_fm_' + fid + '_pers', cid, base + 0, 'recognize', { offense: fid, defense: null, showGaps: false },
        _mc('What personnel grouping is this? (Count the running backs, then the tight ends.)', opts, 'p' + f.personnel,
          _fmPersLabel(f.personnel) + '. First digit = running backs, second = tight ends; the rest of the five skill players are receivers. Personnel counts who is on the field, not where he lines up.'),
        { skill: 'personnel', hint: { ids: f.players.filter(p => p.group === 'skill').map(p => p.id), text: 'Count the running backs first, then the tight ends. The other eligible players are receivers.' } });
    }
    // 5: STRENGTH
    {
      const m = f.meta;
      const correct = m.balanced ? 'balanced' : m.strong;
      const why = m.balanced
        ? 'Both sides have the same number of tight ends or receivers, so there is no clear strength — the defense picks its own.'
        : 'Strength is the ' + m.strong + ' side — the side with the tight end or the extra receivers/blockers.';
      _s('s_fm_' + fid + '_str', cid, base, 'apply', { offense: fid, defense: null, showGaps: false },
        _mc('Which side is the strength of this formation?', [['left', 'The left side'], ['right', 'The right side'], ['balanced', 'Balanced — no obvious strength']], correct, why),
        { skill: 'strength', hint: { ids: f.players.filter(p => p.group === 'skill').map(p => p.id), text: 'Count tight ends and receivers on each side. More bodies on one side = strength. Equal = balanced.' } });
    }
    // 6: TELL
    {
      const wrong = _fmPick(near.slice(0, 6), fid + 'tell', 3);
      const opts = [[fid, info.tell]].concat(wrong.map(w => [w, FM_OFF_INFO[w].tell]));
      _s('s_fm_' + fid + '_tell', cid, base + 1, 'apply', { offense: fid, defense: defs[0], showGaps: false, hideRoles: true },
        _mc('Which statement best fits what THIS look usually threatens?', opts, fid, info.label + ': ' + info.tell + ' (These are tendencies — coaches can always call something different.)'),
        { skill: 'tell', hint: hint });
    }
    // 7-16: YOUR JOB, one question for each position
    FM_POSITIONS.forEach(pos => {
      const mine = info.jobs && info.jobs[pos];
      if (!mine) return;
      const wrongF = _fmPick(ids.filter(o => o !== fid && FM_OFF_INFO[o].jobs && FM_OFF_INFO[o].jobs[pos]), fid + 'job' + pos, 3);
      const opts = [[fid, mine]].concat(wrongF.map(w => [w, FM_OFF_INFO[w].jobs[pos]]));
      const isOffPos = ['QB', 'RB', 'WR', 'TE', 'OL'].indexOf(pos) !== -1;
      const dfn = defs[0];
      const hl = isOffPos ? _fmOffPlayer(fid, pos) : _fmDefPlayer(dfn, fid, pos);
      const fieldS = { offense: fid, defense: isOffPos ? null : dfn, showGaps: false };
      if (hl) fieldS.highlight = hl;
      _s('s_fm_' + fid + '_job_' + pos, cid, base + 1, 'apply', fieldS,
        _mc('You are the ' + FM_POS_NAME[pos] + ' (ringed). Against THIS look, which is your best read or priority?', opts, fid,
          info.label + ' — ' + mine + ' (General read; your own coach’s rule always wins.)'),
        { skill: 'job', forPositions: [pos], hint: { ids: info.key, text: info.lookFor + ' ' + info.tell } });
    });
  });
})();

/* ---------- DEFENSIVE FRONTS ---------- */
(function () {
  const ids = Object.keys(FM_DEF_INFO);
  function countsOf(front) { return FM_DEF_INFO[front].counts; }
  function nearby(front) {
    const c = countsOf(front);
    return ids.filter(o => o !== front).map(o => {
      let s = 0;
      if (countsOf(o) === c) s += 3;
      if (countsOf(o).charAt(0) === c.charAt(0)) s += 1;
      s += (_fmHash(front + o) % 100) / 100;
      return { o: o, s: s };
    }).sort((a, b) => b.s - a.s).map(x => x.o);
  }
  ids.forEach(front => {
    const info = FM_DEF_INFO[front], fr = DEFENSIVE_FRONTS[front];
    if (!info || !fr) return;
    let cid = info.concept;
    const offs = FM_OFF_FOR[front] || ['pistolRight'];
    if (!CONCEPTS[cid]) {
      _fmNewConcept(cid, info.label, 3, info.label + ' defense front explained football film', 'def', ['techniques', 'gaps']);
      const L = info.lesson || { title: info.label, body: fr.description, points: [] };
      const pts = (L.points || []).slice();
      if (info.counts) pts.push('Count it: ' + info.counts + ' (down linemen – linebackers – defensive backs).');
      if (info.aliases && info.aliases.length) pts.push('Also called: ' + info.aliases.join(', ') + '.');
      _l('l_' + cid, cid, 3, L.title, L.body, pts, { offense: offs[0], defense: front, showGaps: false, highlightIds: info.key, note: info.lookFor });
      FM_CONCEPT_IDS.def.push(cid);
    } else {
      CONCEPTS[cid].side = 'both'; CONCEPTS[cid].fm = 'def';
      FM_CONCEPT_IDS.def.push(cid);
    }
    const base = CONCEPTS[cid].difficulty || 3;
    const hint = { ids: info.key, text: info.lookFor };
    const near = nearby(front);
    const aliasTxt = info.aliases && info.aliases.length ? ' Also called: ' + info.aliases.slice(0, 3).join(', ') + '.' : '';
    // NAME x2
    [0, 1].forEach(k => {
      const wrong = _fmPick(near.slice(0, 5), front + 'name' + k, 3);
      const opts = [[front, info.label]].concat(wrong.map(w => [w, FM_DEF_INFO[w].label]));
      _s('s_fr_' + front + '_name' + (k + 1), cid, base - 1 + k, 'recognize',
        { offense: offs[k % offs.length], defense: front, showGaps: false, hideRoles: true },
        _mc('What defensive front is this?', opts, front, info.label + ' (' + info.counts + '). ' + info.lookFor + aliasTxt), { skill: 'name', hint: hint });
    });
    // COUNT
    {
      const all = ids.map(countsOf).filter((v, i, a) => a.indexOf(v) === i && v !== info.counts);
      const wrong = _fmPick(all, front + 'count', 3);
      const opts = [['c' + info.counts, info.counts]].concat(wrong.map(c => ['c' + c, c]));
      _s('s_fr_' + front + '_count', cid, base - 1, 'recognize', { offense: offs[0], defense: front, showGaps: false, hideRoles: true },
        _mc('Count the defenders: how many down linemen – linebackers – defensive backs?', opts, 'c' + info.counts,
          'Count it level by level: ' + info.counts + ' is the ' + info.label + '. ' + info.lookFor),
        { skill: 'count', hint: { ids: info.key, text: 'Count the players on the line first, then the linebackers just behind them, then the defensive backs in the secondary.' } });
    }
    // LOOK
    {
      const wrong = _fmPick(near.slice(0, 5), front + 'look', 3);
      const opts = [[front, info.lookFor]].concat(wrong.map(w => [w, FM_DEF_INFO[w].lookFor]));
      _s('s_fr_' + front + '_look', cid, base - 1, 'recognize', { offense: offs[1 % offs.length], defense: front, showGaps: false, hideRoles: true },
        _mc('Which description matches the defense on the field?', opts, front, 'This is the ' + info.label + '. ' + info.lookFor), { skill: 'look', hint: hint });
    }
    // TELL
    {
      const wrong = _fmPick(near.slice(0, 6), front + 'tell', 3);
      const opts = [[front, info.tell]].concat(wrong.map(w => [w, FM_DEF_INFO[w].tell]));
      _s('s_fr_' + front + '_tell', cid, base, 'apply', { offense: offs[0], defense: front, showGaps: false, hideRoles: true },
        _mc('Which statement best fits what THIS defense is built to do?', opts, front, info.label + ': ' + info.tell + ' (Tendencies, not guarantees — fronts are used in different ways by different coaches.)'), { skill: 'tell', hint: hint });
    }
    // TAP the key defender
    if (info.tapKey) {
      const defenders = defenseFor(front, offs[0]);
      const optIds = defenders.map(d => [d.id, d.label]);
      if (defenders.some(d => d.id === info.tapKey.id)) {
        _s('s_fr_' + front + '_tap', cid, base, 'apply', { offense: offs[0], defense: front, showGaps: false },
          _tap('tapDefender', 'Tap ' + info.tapKey.role + '.', optIds, info.tapKey.id,
            'That is ' + info.tapKey.role + ' in the ' + info.label + '. ' + info.lookFor), { skill: 'tap' });
      }
    }
    // YOUR JOB x 10
    FM_POSITIONS.forEach(pos => {
      const mine = info.jobs && info.jobs[pos];
      if (!mine) return;
      const wrongF = _fmPick(ids.filter(o => o !== front && FM_DEF_INFO[o].jobs && FM_DEF_INFO[o].jobs[pos]), front + 'job' + pos, 3);
      const opts = [[front, mine]].concat(wrongF.map(w => [w, FM_DEF_INFO[w].jobs[pos]]));
      const isOffPos = ['QB', 'RB', 'WR', 'TE', 'OL'].indexOf(pos) !== -1;
      const o = offs[0];
      const hl = isOffPos ? _fmOffPlayer(o, pos) : _fmDefPlayer(front, o, pos);
      const fieldS = { offense: o, defense: front, showGaps: false, hideRoles: true };
      if (hl) fieldS.highlight = hl;
      _s('s_fr_' + front + '_job_' + pos, cid, base, 'apply', fieldS,
        _mc('You are the ' + FM_POS_NAME[pos] + ' (ringed). Against THIS defense, which is your best read or priority?', opts, front,
          info.label + ' — ' + mine + ' (General read; your own coach’s rule always wins.)'),
        { skill: 'job', forPositions: [pos], hint: { ids: info.key, text: info.lookFor + ' ' + info.tell } });
    });
  });
})();

/* ---------- SAFETY SHELLS: what you SEE vs. what it usually GOES WITH ---------- */
(function () {
  const SH = [
    { id: 'two', label: '2-high shell', deep: 2, ov: { FS: { x: 33, y: 13 }, SS: { x: 67, y: 13 } }, name: 'both safeties deep and split',
      goes: 'Often Cover 2, Cover 4 (quarters) or Cover 6 — two deep defenders, so the box is often lighter.' },
    { id: 'one', label: '1-high shell', deep: 1, ov: { FS: { x: 50, y: 12 }, SS: { x: 70, y: 26 } }, name: 'one safety deep in the middle',
      goes: 'Often Cover 1 (man with a deep middle safety) or Cover 3 (three deep zones) — the other safety is closer to the box to help the run.' },
    { id: 'zero', label: '0-high (no deep safety)', deep: 0, ov: { FS: { x: 44, y: 26 }, SS: { x: 62, y: 27 } }, name: 'no safety deep',
      goes: 'Often Cover 0 — all-out man coverage with no deep help, usually paired with a blitz (or a disguise that backs out after the snap).' }
  ];
  _fmNewConcept('fmShell', 'Shell → Likely Coverage', 3, 'one high two high zero safety shell coverage disguise explained football', 'shell', ['safetyShell']);
  FM_CONCEPT_IDS.shell.push('fmShell');
  _l('l_fmShell', 'fmShell', 3, 'Read The Shell: What You See vs What It Usually Means',
    'The “shell” is where the safeties stand before the snap. Count how many are DEEP. Two deep (2-high) often goes with Cover 2, Cover 4 or Cover 6. One deep in the middle (1-high) often goes with Cover 1 or Cover 3. None deep (0-high) often goes with Cover 0 and a blitz. Good defenses disguise: they can show one shell and play another after the snap, so use the shell as a clue, not a promise.',
    ['Count the safeties standing deep.', '2-high → often Cover 2 / 4 / 6.', '1-high → often Cover 1 / 3.', '0-high → often Cover 0 (man, with a blitz). A safety walking down can be run support, a blitz, or a disguise.'],
    { offense: 'shotgunDoubles', defense: '43under', showGaps: false, highlightIds: ['FS', 'SS'], overrides: SH[0].ov, note: 'A 2-high shell: both safeties are deep and split the field.' });
  const hint = { ids: ['FS', 'SS'], text: 'Count how many safeties are standing deep, far from the line of scrimmage.' };
  const offs = ['shotgunDoubles', 'pistolRight', 'shotgunTripsRight'];
  SH.forEach((sh, i) => {
    SH.forEach((sh2, j) => { /* noop to keep structure obvious */ });
    const fieldS = { offense: offs[i], defense: i === 0 ? '43under' : '42nickel', showGaps: false, hideRoles: true, overrides: sh.ov };
    _s('s_fm_shell_' + sh.id + '_deep', 'fmShell', 2, 'recognize', fieldS,
      _mc('How many safeties are deep (“high”) in this shell?', [['n0', 'None — no safety deep'], ['n1', 'Just one safety deep'], ['n2', 'Two safeties deep']], 'n' + sh.deep,
        'This is a ' + sh.label + ' — ' + sh.name + '.'), { skill: 'shell', hint: hint });
    _s('s_fm_shell_' + sh.id + '_name', 'fmShell', 2, 'recognize', fieldS,
      _mc('What would you call this shell?', SH.map(x => [x.id, x.label]), sh.id, 'This is the ' + sh.label + ': ' + sh.name + '.'), { skill: 'shell', hint: hint });
    _s('s_fm_shell_' + sh.id + '_goes', 'fmShell', 3, 'apply', fieldS,
      _mc('Which coverages does this shell MOST OFTEN go with?', SH.map(x => [x.id, x.goes]), sh.id,
        'A ' + sh.label + ' ' + sh.goes.charAt(0).toLowerCase() + sh.goes.slice(1) + ' (A good defense can disguise — confirm after the snap.)'), { skill: 'shell', hint: hint });
  });
  _s('s_fm_shell_creeper', 'fmShell', 4, 'test',
    { offense: 'pistolRight', defense: '43under', showGaps: false, hideRoles: true, highlight: 'SS', overrides: { FS: { x: 50, y: 12 }, SS: { x: 72, y: 33 } } },
    _mc('The strong safety (ringed) walks down toward the line before the snap. What might that mean?',
      [['a', 'Run support, a blitz, or a disguise — keep reading after the snap'], ['b', 'The defense is definitely blitzing'], ['c', 'The defense switched to a 4-man line'], ['d', 'Nothing — safeties never move before the snap']], 'a',
      'A safety creeping toward the line can be run support, a blitzer, or part of a disguise. It is a clue, not a guarantee — confirm after the snap.'), { skill: 'shell', hint: hint });
})();

/* ---------- PRO LINGO ---------- */
const FM_LINGO_GROUPS = {
  form: 'Formations & Personnel', pre: 'Pre-snap Reads & Calls', front: 'Fronts, Techniques & Gap Play',
  cov: 'Coverages', line: 'Line Play & Blocking', play: 'Run & Pass Concepts'
};
(function () {
  Object.keys(FM_LINGO_GROUPS).forEach(g => {
    const terms = FM_LINGO.filter(t => t.group === g);
    if (!terms.length) return;
    const cid = 'lingo_' + g;
    _fmNewConcept(cid, 'Pro Lingo: ' + FM_LINGO_GROUPS[g], 2, 'football terminology explained ' + FM_LINGO_GROUPS[g].toLowerCase(), 'lingo', []);
    FM_CONCEPT_IDS.lingo.push(cid);
    _l('l_' + cid, cid, 2, 'Pro Lingo: ' + FM_LINGO_GROUPS[g],
      'These are the words coaches and players use for ' + FM_LINGO_GROUPS[g].toLowerCase() + '. Learn them and film (and your coach) start to make sense. Teams and levels use some of these a little differently — if your coach uses a word differently, your coach is right.',
      terms.map(t => t.term + ' — ' + t.def), { noField: true });
    terms.forEach((t, i) => {
      const others = terms.map((o, oi) => ({ o: o, id: 't' + oi })).filter(x => x.o.term !== t.term);
      const wrongDef = _fmPick(others, t.term + 'd', 3);
      _s('s_lingo_' + g + '_' + i + 'a', cid, 2, 'recognize', { noField: true },
        _mc('In football, what does “' + t.term + '” mean?', [['t' + i, t.def]].concat(wrongDef.map(x => [x.id, x.o.def])), 't' + i, '“' + t.term + '” — ' + t.def), { skill: 'lingo' });
      const wrongT = _fmPick(others, t.term + 't', 3);
      _s('s_lingo_' + g + '_' + i + 'b', cid, 3, 'apply', { noField: true },
        _mc('Which term fits this? “' + t.def + '”', [['t' + i, t.term]].concat(wrongT.map(x => [x.id, x.o.term])), 't' + i, 'That is “' + t.term + '”. ' + t.def), { skill: 'lingo' });
    });
  });
})();

/* ---------- Lesson order: slot the new lessons into every position's list ---------- */
(function () {
  const offL = FM_CONCEPT_IDS.off.filter(c => LESSONS['l_' + c]).map(c => 'l_' + c);
  const defL = FM_CONCEPT_IDS.def.filter(c => LESSONS['l_' + c]).map(c => 'l_' + c);
  const shellL = ['l_fmShell'];
  const lingoL = FM_CONCEPT_IDS.lingo.map(c => 'l_' + c);
  const newOnes = offL.concat(defL, shellL, lingoL);
  // Add new formation/front/shell/lingo lessons to the shared list...
  newOnes.forEach(id => { if (_FOUNDATION.indexOf(id) === -1) _FOUNDATION.push(id); });
  function insertAfterAny(list, anchors, ids) {
    let at = -1;
    anchors.forEach(a => { const i = list.indexOf(a); if (i > at) at = i; });
    const fresh = ids.filter(id => list.indexOf(id) === -1);
    if (at === -1) list.push.apply(list, fresh); else list.splice.apply(list, [at + 1, 0].concat(fresh));
  }
  Object.keys(LESSON_ORDER_BY_TRACK).forEach(k => {
    if (k === 'ALL') return;
    const list = LESSON_ORDER_BY_TRACK[k];
    // formation recognition right after the existing formation lessons,
    // fronts after the existing fronts, shells after the safety-shell lesson,
    // and the first lingo group (formations) right after the primer + personnel.
    insertAfterAny(list, ['l_formationFullHouse', 'l_formationI', 'l_formationPistol', 'l_formationShotgun'], offL);
    insertAfterAny(list, ['l_front34', 'l_front43over', 'l_front43under', 'l_front42nickel'], defL);
    insertAfterAny(list, ['l_safetyShell'], shellL);
    insertAfterAny(list, ['l_personnelNumbers', 'l_personnel11'], lingoL.slice(0, 2));
    insertAfterAny(list, ['l_sam', 'l_nickel', 'l_front34'], lingoL.slice(2));
  });
  LESSON_ORDER_BY_TRACK.ALL = (function () {
    const seen = {}, out = [];
    ['l_primerRB', 'l_primerEDGE', 'l_primerLB', 'l_primerQB', 'l_primerWR', 'l_primerTE', 'l_primerOL', 'l_primerDL', 'l_primerCB', 'l_primerS']
      .concat(_FOUNDATION).forEach(id => { if (!seen[id] && LESSONS[id]) { seen[id] = true; out.push(id); } });
    return out;
  })();
})();

/* ---- Subscore groups for the IQ breakdown (merged into the app's lists) ---- */
const FM_SUBSCORE_GROUPS = {
  offFormations: FM_CONCEPT_IDS.off,
  defFronts: FM_CONCEPT_IDS.def,
  shellRead: FM_CONCEPT_IDS.shell,
  proLingo: FM_CONCEPT_IDS.lingo
};
const FM_SUBSCORE_LABELS = { offFormations: 'Offensive Formations', defFronts: 'Defensive Fronts', shellRead: 'Safety Shells', proLingo: 'Pro Lingo' };
// Everything the "Formation & Front Drill" can draw from (recognition-type skills only).
const FM_DRILL_SKILLS = ['name', 'look', 'personnel', 'strength', 'count', 'tap', 'shell'];

/* ---- Keep the stage buckets in sync (same as the other content files) ---- */
SCENARIOS_BY_STAGE.recognize.length = 0; SCENARIOS_BY_STAGE.apply.length = 0; SCENARIOS_BY_STAGE.test.length = 0;
Object.keys(SCENARIOS).forEach(id => {
  const st = SCENARIOS[id].stage;
  if (SCENARIOS_BY_STAGE[st]) SCENARIOS_BY_STAGE[st].push(id);
  SCENARIOS_BY_STAGE.test.push(id);
});
