/* =========================================================
   FOOTBALL VIDEOS — one or two EXACT YouTube videos per lesson topic.

   How these were chosen: each one came up on YouTube for a search on
   that exact topic and its title matches the lesson. They are not
   hosted here (the owners keep their footage), so they play from
   YouTube inside the lesson card, with an "Open" link as a backup in
   case an owner has turned embedding off. View counts could not be
   checked while building, so the "most-viewed" button in each lesson
   still gives the popularity-sorted list. Replace or add a video for
   any lesson with the "Add a clip link" button, or edit this list.
   Format: conceptId: [ [youtubeVideoId, 'title'], ... ]
   ========================================================= */
const CONCEPT_VIDEOS = {
  personnel11: [['0NEI8dpqk7g', 'Football 101: Offensive Personnel Groupings']],
  personnelNumbers: [['lZvpr5CrBdY', 'Guide to the Gridiron: Personnel Groupings']],
  formationShotgun: [['sW-Dl037mps', 'Madden 101: Shotgun Formation (John Madden)']],
  formationDoubles: [['VBmcz504j3Q', 'How to Use 2x2 Variations to Trick Defenses']],
  formationPistol: [['TZWdDlybBSk', '5 Reasons I Like the Pistol (And 3 Reasons I Don’t)']],
  formationSingleback: [['shTtJBGz6kw', 'Madden Offense 101: Singleback Formation (John Madden)']],
  formationI: [['NrunbIfoe2Y', 'Football 101: I Formation']],
  formationWing: [['isq6fr8XmDM', '4 Ways You Can Utilize a Wingback in Your Offense']],
  formationTEHeavy: [['YYtA4qZEVZ8', '13 Personnel Is the New 11 Personnel']],
  formationFullHouse: [['EgRGeukXnrI', 'Defending Full House T Power']],
  strengthCall: [['qrIPOKYTAo4', 'How Defenses Call Strength (TE, Field, Pro, Tite)']],
  gaps: [['Tx2bEsXmpko', 'Football 101: Gaps and Defensive Line Numbering']],
  techniques: [['ETpe-quJ94M', 'Defensive Line Techniques & Alignments Explained in 5 Minutes']],
  front42Nickel: [['qMWn4goJ57o', 'Fundamentals of the 4-2-5 Defense']],
  front43Under: [['FGjXIB74nMQ', 'Football 101: 4-3 Under']],
  front43Over: [['TZWWZ8fcfuQ', 'Football: Basics of a 4-3 Defense']],
  front34: [['3Fdg-lJDooE', 'Gruden Explains a 3-4 Base Defense']],
  mikeId: [['Xx2mKXjBfrg', 'Who Is The Mike? Why QBs Identify the Mike']],
  willId: [['t49LsYyX5Vk', 'Football: What Is a Weak Side Linebacker?']],
  samId: [['QWJfXecy3tU', 'Football: What Is a Strong Side Linebacker?']],
  nickelId: [['kum88sSrx68', 'NFL 101: The Nickel Defense']],
  safetyShell: [['mYxlSxlSuok', 'Football 101: What Are Coverage Shells?']],
  primerRB: [['dvXHmWBO4mI', 'How to Read Football Defenses Like a Pro']],
  rbBackfieldAlign: [['dAkEBKzu85M', 'The Correct Running Back Stance']],
  insideZone: [['G8Q3H3X7F1A', 'Jim McNally Explains RB Technique in the Zone Run Game'], ['pN4wQx1nr6I', 'How To Run Inside Zone in American Football']],
  powerRun: [['HezArTWs_3M', 'Football 101: Power'], ['IAv6mlDI94A', 'How Power Is Blocked and Run in Football']],
  isoLead: [['9iUT7-kdSIc', 'Anatomy of a Play: Iso Lead Run']],
  outsideZone: [['RL8kn63AnuE', 'Football 101: Outside Zone']],
  nickelBlitz: [['ppBZi5T5k7U', 'The Unstoppable Nickel Blitz: 3 Paths to the QB']],
  rbFindMike: [['G5axNazzGMs', 'What Exactly Does “ID the Mike” Do?'], ['60RPADbOoIk', 'Mike ID in High School Football (Run Schemes & Pass Pro)']],
  rbProtectionRule: [['1Ev_sIbido0', 'Pass Protection 101: Learn The Half Slide']],
  blitzShow: [['tJrWGIHKlWI', 'RB Pass Protection (Fordham University)']],
  cover2Flat: [['5ZtK9Eykz3M', 'Football 101: Cover 2']],
  primerEDGE: [['0BYWR_cVUQ0', 'Defensive Line Tips: Defensive End Reads']],
  edgeAlign: [['uRqWawhokeQ', '6 or 9 Technique? Best Way to Defend a Tight End']],
  edgeKeys: [['KsKV9mzmP0k', 'Reading the Offensive Line (IMG Academy D-Line Fundamentals)'], ['0BYWR_cVUQ0', 'Defensive Line Tips: Defensive End Reads']],
  edgeReach: [['16hJ8z4CfFA', 'Reach Drill: How to Defeat a Reach Block']],
  edgeDown: [['BgP-xro989A', 'D-Line Tips: How to Beat Different Blocking Schemes']],
  edgeBoot: [['E4upsl2iK9Y', 'How to Contain a Play as a Defensive End']],
  edgePassRush: [['JvIOVhL2oTs', 'NFL Pass Rush Moves Explained: Film Breakdown']],
  edgeHeavy: [['4oluqcJZEcA', 'How to Contain the Tight End as a Defensive End']],
  primerLB: [['yrIKWjONrE0', 'How to Read Keys Like an NFL Linebacker']],
  lbRoles: [['yrMkxv_L3t8', 'The Names & Positions of Linebackers']],
  lbGuardKey: [['ZN8A9CcKsp8', 'How to Read the O-Line Like an Elite Linebacker'], ['xpzm2rEXEBM', 'Inside Linebacker Guard Key & Reads']],
  lbFlows: [['w9GeAEUZCyc', 'Teach Your LBs to Read the Back (Keys Breakdown)']],
  lbIKey: [['WXsb5QtMnu0', 'How to Defend the Iso / Lead Play']],
  lbPlayAction: [['LsVuf4LgtIM', 'Scout’s Eye: Linebackers and Play-Action']],
  lbCoverageDrops: [['icw0Fpw00lg', 'Linebacker Drills: Hook and Curl Drops']],
  lbBlitz: [['IcA_JzzVoTc', 'Learn How To Blitz (NFL All-Pro Hardy Nickerson)']],
  lbShortYardage: [['unHKYy9yuI0', 'Winning Short Yardage & Goal Line Defense']],
  lbSpread: [['6sWXmFi430o', 'How to Defend the Spread Offense (Dave Aranda)']]
};
Object.keys(CONCEPT_VIDEOS).forEach(cid => {
  if (!CONCEPTS[cid]) return;
  CONCEPTS[cid].clips = CONCEPT_VIDEOS[cid].map(v => ({ url: 'https://www.youtube.com/watch?v=' + v[0], title: v[1] }));
});
