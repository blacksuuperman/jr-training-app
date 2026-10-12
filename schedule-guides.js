/* =====================================================================
   schedule-guides.js  (v21)
   All the written "how to do it" content for the daily schedule blocks.
   Plain data only — no logic. index.html reads these and renders them.

   Voice: written to Jr, but readable by a parent checking his work.
   Cleaning products: only generic product TYPES are named (dish soap,
   all-purpose spray, glass cleaner) and every guide tells him to use only
   what a parent has set out for him, never to mix products, and to ask
   before using anything he does not recognise.

   Food / supplement text follows the same NIH + AAP stance as the
   Nutrition tab: food first, no energy drinks / stimulants / pre-workouts,
   creatine off unless the pediatrician approves it.
   ===================================================================== */

const SG = {};

/* ------------------------------------------------------------------ */
/* ESSAY — Black history, Black education, African American history,  */
/* responsibility and respect. Every weekly essay comes from this list */
/* ------------------------------------------------------------------ */
SG.essay = {
  intro: "Every essay is about Black history, Black education, African American history, responsibility or respect. Your job is to learn something real, explain it in your own words, and connect it to how you live.",
  topics: [
    { theme: "African American history", title: "Juneteenth and Texas",
      prompt: "On June 19, 1865, enslaved people in Galveston, Texas were told they were free. The Emancipation Proclamation had been signed in 1863. Why did the news take so long to reach Texas, and why does Juneteenth matter to Texans today?",
      keywords: ["Juneteenth", "Galveston 1865", "General Order No. 3", "Emancipation Proclamation"] },
    { theme: "Black education", title: "Learning to read was freedom",
      prompt: "In many places, enslaved people were forbidden by law from learning to read. After the Civil War, newly freed families built schools very quickly. Why did they treat education as freedom, and what does that say about how you should treat your own school day?",
      keywords: ["anti-literacy laws", "Freedmen’s Bureau schools", "Reconstruction education"] },
    { theme: "Black education", title: "Brown v. Board of Education",
      prompt: "In 1954 the Supreme Court decided Brown v. Board of Education. What did the Court decide, why did it matter for Black students, and what work was still left to do after the ruling?",
      keywords: ["Brown v. Board of Education 1954", "Thurgood Marshall", "school segregation"] },
    { theme: "Black education", title: "Mary McLeod Bethune",
      prompt: "Mary McLeod Bethune opened a school for Black girls in Daytona, Florida in 1904 with almost no money. What did she do to make it grow, and what does her life teach about responsibility?",
      keywords: ["Mary McLeod Bethune", "Bethune-Cookman", "Daytona 1904"] },
    { theme: "Black education", title: "Historically Black Colleges and Universities",
      prompt: "HBCUs were created when most colleges would not admit Black students. Pick ONE HBCU (Texas has several, like Prairie View A&M, Texas Southern or Wiley College). When and why was it started, and what has it meant to its community?",
      keywords: ["HBCU", "Prairie View A&M", "Texas Southern", "Wiley College"] },
    { theme: "Respect", title: "Courage and respect in school integration",
      prompt: "Ruby Bridges was six years old when she walked into an all-white school in New Orleans in 1960, and the Little Rock Nine entered Central High School in 1957. Pick one. What did they face, and how did they show respect and courage when others did not?",
      keywords: ["Ruby Bridges 1960", "Little Rock Nine 1957"] },
    { theme: "Black history", title: "Carter G. Woodson and Black History Month",
      prompt: "Carter G. Woodson started Negro History Week in 1926, which later grew into Black History Month. Why did he believe studying Black history was so important? Do you agree, and why?",
      keywords: ["Carter G. Woodson", "Negro History Week 1926", "Black History Month"] },
    { theme: "Black education", title: "Two ideas about progress",
      prompt: "Booker T. Washington and W.E.B. Du Bois were both great Black educators who disagreed about the best path forward. Explain each man’s main idea in your own words, then say which parts of each you would use today.",
      keywords: ["Booker T. Washington", "Tuskegee Institute", "W.E.B. Du Bois"] },
    { theme: "Black education", title: "Frederick Douglass and reading",
      prompt: "Frederick Douglass taught himself to read even though it was against the rules where he lived. How did reading change his life, and what does his story say about how seriously you should take your reading time?",
      keywords: ["Frederick Douglass", "learning to read", "Narrative of the Life"] },
    { theme: "Respect", title: "Respect when it is hard",
      prompt: "Respect means treating other people, and yourself, with honor. Describe one person from African American history who showed respect when it was hard. Then describe one way you will show that same respect at home this week.",
      keywords: ["respect", "dignity", "nonviolent protest"] },
    { theme: "Responsibility", title: "Responsibility builds communities",
      prompt: "Black families, churches and business owners built schools, neighborhoods and businesses through hard work and responsibility, often with little help. What are your responsibilities in your own family, and what would your family say you are responsible for?",
      keywords: ["Black churches", "Black-owned businesses", "community building"] },
    { theme: "African American history", title: "Football pioneers",
      prompt: "Pioneers like Fritz Pollard, Kenny Washington, Woody Strode and Doug Williams had to be excellent and also handle disrespect. Pick ONE. What did he accomplish, what did he have to overcome, and what can a young player learn from him?",
      keywords: ["Fritz Pollard", "Kenny Washington", "Woody Strode", "Doug Williams Super Bowl XXII"] },
    { theme: "Black education", title: "The women behind NASA’s math",
      prompt: "Katherine Johnson, Dorothy Vaughan and Mary Jackson were Black women mathematicians who worked for NASA. How did education and excellence open doors for them, and what did they have to push through?",
      keywords: ["Katherine Johnson", "Dorothy Vaughan", "Mary Jackson", "Hidden Figures"] },
    { theme: "African American history", title: "The Tuskegee Airmen",
      prompt: "The Tuskegee Airmen were the first Black military pilots in the U.S. Army Air Forces. What did they have to prove, how did they train, and what does their story teach about discipline?",
      keywords: ["Tuskegee Airmen", "World War II", "Tuskegee, Alabama"] },
    { theme: "African American history", title: "Greenwood, a community that built itself",
      prompt: "In the early 1900s the Greenwood district of Tulsa, Oklahoma was a thriving Black business community. Research what Greenwood was and what happened there in 1921. Why is it important to remember, and what can people learn from how the community built itself? (Parent note: this topic covers a violent event — read it together first.)",
      keywords: ["Greenwood district Tulsa", "1921", "Black business district"] },
    { theme: "Respect", title: "Standing up at fifteen",
      prompt: "In March 1955, fifteen-year-old Claudette Colvin refused to give up her seat on a bus in Montgomery, Alabama, months before Rosa Parks. What did she do, what happened next, and what does it mean to stand up respectfully for what is right?",
      keywords: ["Claudette Colvin", "Montgomery bus boycott", "Rosa Parks"] },
    { theme: "Black education", title: "Thurgood Marshall",
      prompt: "Thurgood Marshall was a lawyer in Brown v. Board of Education and later became the first Black Supreme Court justice. How did his education and preparation shape his career?",
      keywords: ["Thurgood Marshall", "NAACP Legal Defense Fund", "Supreme Court 1967"] },
    { theme: "Responsibility", title: "Barbara Jordan of Houston",
      prompt: "Barbara Jordan, from Houston, became a respected member of Congress known for her powerful voice and her commitment to the Constitution. How did education and preparation help her lead, and what does her example teach about responsibility?",
      keywords: ["Barbara Jordan", "Houston", "Texas Southern University"] }
  ],
  sites: [
    { name: "Smithsonian National Museum of African American History & Culture", url: "nmaahc.si.edu", good: "Big, trustworthy overview of people, events and education history." },
    { name: "Library of Congress", url: "loc.gov", good: "Real photos, letters and documents from the time (look for the African American history collections)." },
    { name: "National Archives", url: "archives.gov", good: "Official records and documents, including the Emancipation Proclamation and Brown v. Board." },
    { name: "National Park Service — African American Heritage", url: "nps.gov", good: "Short, readable pages on historic sites like Brown v. Board of Education and Tuskegee." },
    { name: "BlackPast.org", url: "blackpast.org", good: "A free encyclopedia of African American history with short entries on people and events." },
    { name: "Britannica (school/kids level)", url: "britannica.com", good: "Clear summaries and dates to check your facts." },
    { name: "PBS LearningMedia", url: "pbslearningmedia.org", good: "Videos and lessons made for students." },
    { name: "Handbook of Texas Online (Texas State Historical Association)", url: "tshaonline.org", good: "The best source for Texas stories: Juneteenth, Prairie View, Barbara Jordan and more." },
    { name: "Khan Academy — U.S. History", url: "khanacademy.org", good: "Step-by-step lessons if you need background on an era." },
    { name: "UNCF (United Negro College Fund)", url: "uncf.org", good: "Black education and HBCU history." },
    { name: "Smithsonian Magazine", url: "smithsonianmag.com", good: "Well-researched stories about people and events." }
  ],
  siteRules: [
    "Use at least TWO sites from this list. Write down which site each fact came from.",
    "A site that is not on this list needs a parent’s OK before you use it.",
    "Never copy and paste. Read it, close the page, then write it in your own words.",
    "One short quote is allowed if it is in quotation marks and you say who said it.",
    "No social media, random blogs, or videos from strangers as your source."
  ],
  // The ordered steps. `phase` groups them on screen. He can only tick a
  // step once the one before it is ticked, so the order is the order.
  steps: [
    { phase: "Part 1 — Research and plan", s: "Read the prompt twice. Underline the key words. Write the topic at the top of your paper.", how: "If you don’t understand a word in the prompt, look it up before you do anything else." },
    { phase: "Part 1 — Research and plan", s: "Say your angle in one sentence: “My essay is about ______.”", how: "Pick ONE person, event or idea. A small topic done well beats a huge topic done badly." },
    { phase: "Part 1 — Research and plan", s: "Open two approved sites and read about your topic.", how: "Use the keywords shown under the prompt as your search words." },
    { phase: "Part 1 — Research and plan", s: "Take notes: write 5 facts in your own words (who, what, when, where, why it mattered). After each fact write the site it came from.", how: "Close the page before you write the fact. If you can’t say it without looking, you don’t understand it yet." },
    { phase: "Part 1 — Research and plan", s: "Pick 3 new vocabulary words from your reading and write what each means.", how: "You will use at least two of them in your essay." },
    { phase: "Part 1 — Research and plan", s: "Write your thesis sentence: “[Topic] matters because ______, ______ and ______.”", how: "Your three reasons become your three body paragraphs." },
    { phase: "Part 1 — Research and plan", s: "Write a one-line outline: Intro, Body 1, Body 2, Body 3, Conclusion.", how: "Each body line is one reason from your thesis plus the fact that proves it." },
    { phase: "Part 2 — Write the draft", s: "Write the introduction (3–5 sentences): a hook, a little background, then your thesis sentence last.", how: "Hook ideas: a surprising fact, a short question, or a one-sentence scene. Do not start with “In this essay I will…”." },
    { phase: "Part 2 — Write the draft", s: "Write Body Paragraph 1.", how: "Use T-E-E-L: Topic sentence → Evidence (a fact from your notes) → Explain why it matters → Link to your thesis. 4–6 sentences." },
    { phase: "Part 2 — Write the draft", s: "Write Body Paragraph 2 the same way.", how: "Start with a transition like “Another reason…” or “In addition…”." },
    { phase: "Part 2 — Write the draft", s: "Write Body Paragraph 3 the same way.", how: "Use at least one of your vocabulary words." },
    { phase: "Part 2 — Write the draft", s: "Write the conclusion (3–5 sentences). Say your thesis in NEW words, say why it matters today, and connect it to responsibility or respect in your own life.", how: "End with something you will actually do or a thought a reader will remember." },
    { phase: "Part 3 — Revise and finish", s: "Read the whole draft out loud, slowly. Mark anything that sounds wrong or confusing.", how: "Your ear catches mistakes your eyes skip." },
    { phase: "Part 3 — Revise and finish", s: "Revise: fix the marked spots, replace weak words (“good”, “very”, “stuff”), and make sure every body paragraph has a fact from a source.", how: "Add a sentence if a paragraph has no evidence. Cut a sentence that repeats another one." },
    { phase: "Part 3 — Revise and finish", s: "Proofread one thing at a time: capital letters, end punctuation, spelling (names and places especially), paragraph indents.", how: "Read it backward, sentence by sentence, to catch spelling." },
    { phase: "Part 3 — Revise and finish", s: "Add a title and a “Sources” list at the bottom (the names of the sites you used).", how: "A title says what the essay is about in a few words." },
    { phase: "Part 3 — Revise and finish", s: "Make the final copy (neat handwriting or typed). Read the introduction out loud to a parent.", how: "Then mark it finished and submit it for a parent check." }
  ],
  structure: [
    "Title",
    "Introduction: hook → background → thesis (3–5 sentences)",
    "Body paragraph 1: topic sentence, evidence, explanation, link (4–6 sentences)",
    "Body paragraph 2: same pattern",
    "Body paragraph 3: same pattern",
    "Conclusion: thesis in new words → why it matters today → what you will do (3–5 sentences)",
    "Sources list (site names)"
  ],
  checklist: [
    "The topic comes from Black history, Black education, African American history, responsibility or respect.",
    "At least 5 paragraphs: intro, three body paragraphs, conclusion.",
    "A clear thesis sentence at the end of the introduction.",
    "Every body paragraph has a real fact from an approved site.",
    "At least 2 approved sites used and listed under Sources.",
    "Everything is in my own words (no copy and paste).",
    "At least 2 new vocabulary words used correctly.",
    "The conclusion connects to responsibility or respect in my own life.",
    "I read it out loud and fixed what sounded wrong.",
    "Capital letters, punctuation, spelling and indents are checked.",
    "It has a title and a neat final copy."
  ]
};

/* ------------------------------------------------------------------ */
/* ADVANCED READING + INDEPENDENT READING LOG                          */
/* ------------------------------------------------------------------ */
SG.reading = {
  whyLog: "The log is how a parent can see you really read: which chapter and page you started on, where you stopped, and how many pages that was. Be exact. Tomorrow’s START should match today’s END.",
  order: [
    { s: "Set up: phone away, quiet spot, pencil and paper ready. Write the book title (once — it saves for next time).", how: "Same book as before. Keep going; don’t jump around." },
    { s: "Write your START: the chapter and page you are on BEFORE you read a single word.", how: "It should match where you ended last time. If it doesn’t, tell a parent why." },
    { s: "Read for the full block. As you read, make a pencil mark next to: a word you don’t know, the biggest event, and a question you have.", how: "Stop at the end of a section, not in the middle of a sentence." },
    { s: "Write your END: the chapter and page where you stopped.", how: "The app counts your pages for you." },
    { s: "Close the book. Write your synopsis from memory (rules below).", how: "No flipping pages while you write it. Retelling from memory is what builds comprehension." },
    { s: "Answer the comprehension questions. Answer first from memory, then open the book to check or find the page number for evidence.", how: "Full sentences. Say WHY, not just WHAT." },
    { s: "Enter your Ending % and submit for a parent check.", how: "Be honest. A real 70 is better than a made-up 100." }
  ],
  synopsisIntro: "A synopsis is a short retelling of what you read today, in your own words. It is NOT a copy of the book and NOT your opinion.",
  synopsisMust: [
    "4 to 6 sentences (at least 40 words).",
    "Sentence 1: the book title and where you read (chapters and pages).",
    "Who: the main characters or people in today’s pages (use at least 2 names).",
    "Where and when it happened.",
    "What happened, in order (first, then, finally) — only the important events.",
    "The problem, conflict or main idea of these pages.",
    "How the section ends (where the story left off) and one prediction or feeling about what comes next.",
    "Use at least 1 vocabulary word from the reading."
  ],
  synopsisRules: [
    "Write in your own words — don’t copy sentences from the book.",
    "Use present tense (“Marcus decides…”).",
    "Facts first. Save your opinion for the last sentence only.",
    "Leave out small details; keep the big ones."
  ],
  synopsisStarter: "In chapters ___–___ of (book title), ___ and ___ are in (place/time). First, ___. Then, ___. The big problem is ___. At the end of today’s pages, ___. I predict ___.",
  // Always asked: the first 4. Plus 2 rotate daily from the pool.
  questionsCore: [
    { id: "main", q: "MAIN IDEA — In one sentence, what was today’s reading mostly about?" },
    { id: "details", q: "SUPPORTING DETAILS — Give three details from today’s pages that support the main idea." },
    { id: "cause", q: "CAUSE AND EFFECT — Name something that happened today and the reason (cause) it happened." },
    { id: "infer", q: "INFERENCE + EVIDENCE — What is something the author never says directly, but you can tell? Write the clue that proves it and its page number." }
  ],
  questionsPool: [
    { id: "character", q: "CHARACTER — Pick one character. Describe a choice they made today. Would you have made the same choice? Why or why not?" },
    { id: "vocab", q: "VOCABULARY — Write one word you didn’t know, what you guessed it meant from the sentence, and what it really means." },
    { id: "apply", q: "APPLICATION — What does today’s reading teach you that you could use in football, school or at home?" },
    { id: "predict", q: "PREDICTION — What do you think happens next? Give one clue from the text that makes you think so." },
    { id: "purpose", q: "AUTHOR’S PURPOSE — Why do you think the author included the most important scene or idea from today’s pages?" },
    { id: "connect", q: "CONNECTION — How is a character or situation in today’s reading like something you’ve seen or lived?" },
    { id: "setting", q: "SETTING — How does the time and place affect what the characters can and can’t do?" }
  ],
  indepOrder: [
    { s: "Same book as your Advanced Reading block. Check the title is right.", how: "This is reading for you, not a worksheet." },
    { s: "Write your START chapter and page. It should match where you ended in your earlier reading today.", how: "If today’s earlier END was page 62, this START is page 62 or 63." },
    { s: "Read with no screens. Book only.", how: "Sit up, good light, phone in another room." },
    { s: "Write your END chapter and page.", how: "Then write 2 sentences: what happened, and what you think about it." },
    { s: "Save the log. A parent can see your pages, and your total for the week.", how: "" }
  ]
};

/* ------------------------------------------------------------------ */
/* KITCHEN                                                             */
/* ------------------------------------------------------------------ */
SG.kitchenSupplies = [
  "Dish soap",
  "Scrub sponge or dish brush (a non-scratch pad for nonstick pans)",
  "Dish towel and a drying rack",
  "All-purpose spray cleaner (the one a parent set out)",
  "Microfiber cloth or paper towels",
  "Broom and dustpan",
  "Mop (or flat mop) and the floor cleaner a parent set out",
  "Trash bag"
];
SG.kitchenSafety = [
  "Use only the cleaners a parent has set out. Never mix two cleaning products — especially anything with bleach.",
  "Knives: wash them one at a time, handle first, blade pointed away. Never leave them in soapy water.",
  "The stove must be OFF and cool to the touch before you spray or wipe it.",
  "Hot water: test it before you put your hands in.",
  "Mop in small sections and don’t walk back over wet floor. Keep a path to the door."
];
// Quick dish routine (breakfast)
SG.washDishes = {
  steps: [
    { s: "Scrape food into the trash and rinse the plates.", use: "Trash can, rinse water" },
    { s: "Fill the sink with hot, soapy water (or load the dishwasher).", use: "Dish soap" },
    { s: "Wash in this order: cups and glasses → plates and bowls → silverware → pots and pans last.", use: "Sponge or brush" },
    { s: "Rinse every item until there are no soap bubbles.", use: "Warm water" },
    { s: "Put dishes in the rack to dry, or dry them with the towel and put them away.", use: "Drying rack, dish towel" },
    { s: "Wipe the counter and the table where you ate.", use: "Spray cleaner and cloth" },
    { s: "Rinse the sink and leave it empty.", use: "Sponge" }
  ]
};
// The full, ordered Clean Kitchen routine (lunch block)
SG.cleanKitchen = {
  intro: "Dishes first, counters second, stove third, floor LAST. Dirty floor water goes on a floor you’ll clean at the end, and dust and crumbs fall down — so you always work from top to bottom, and from dirty to clean.",
  steps: [
    { s: "Set up: clear the sink area, get your supplies, and put on music only if it doesn’t slow you down.", use: "Supplies list above", how: "Check that the trash bag isn’t overfull. If it’s more than 3/4 full, you’ll take it out in step 11." },
    { s: "Scrape and rinse: scrape leftovers into the trash, rinse plates, and stack them by type (cups, plates, bowls, silverware, pots and pans).", use: "Trash can, rinse water", how: "Pots with stuck food: fill with hot soapy water now and let them soak while you do everything else." },
    { s: "Wash ALL the dishes: glasses and cups first, then plates and bowls, then silverware.", use: "Hot soapy water, sponge or brush", how: "Cleanest items first so the water stays clean. Hold each one up to the light — no food, no film." },
    { s: "Wash ALL the pots and pans last.", use: "Dish brush, non-scratch pad for nonstick", how: "Scrub stuck-on food with the soaked pot. Use the pad that won’t scratch nonstick pans. Handles count too." },
    { s: "Rinse everything and put it in the rack to dry (or dry and put away). Run the dishwasher if it’s full and a parent said to.", use: "Drying rack, dish towel", how: "Put away anything that’s dry. Dishwasher dishes that are clean go back in the cabinets." },
    { s: "Clean the sink: scrub the basin, wipe the faucet and handles, and empty the drain strainer into the trash. Rinse and dry.", use: "Dish soap, sponge", how: "A shiny faucet is how you can tell a sink is really clean." },
    { s: "Counters: take everything off, spray, wait 30 seconds, then wipe top to bottom and back to front. Wipe the edges and the backsplash. Put things back neatly.", use: "All-purpose spray and microfiber cloth", how: "Wipe crumbs into your hand or the sink, not onto the floor. Move the toaster/coffee maker and wipe under them." },
    { s: "Stove top: make sure it’s OFF and cool. Lift off grates or burner covers, wipe up spills and grease, and wipe the knobs and front.", use: "Damp soapy cloth or the degreaser a parent set out", how: "Spray the cloth, not the knobs. Put everything back exactly how it was." },
    { s: "Table and chairs: wipe the table, the edges, and the backs and seats of the chairs where hands touch.", use: "All-purpose spray and cloth", how: "Push the chairs in when you’re done." },
    { s: "Microwave and small stuff: wipe the inside and handle of the microwave, and the front of the dishwasher and fridge handles.", use: "Damp cloth with a drop of dish soap", how: "Fingerprints on handles are the first thing a parent notices." },
    { s: "Trash: tie the bag, take it out if it’s 3/4 full or has food in it, and put in a fresh bag.", use: "New trash bag", how: "No bag left on the floor, no overflowing can." },
    { s: "FLOORS LAST — sweep: start in the far corners and sweep toward the middle. Get under the table and along the cabinets. Sweep into the dustpan and empty it.", use: "Broom and dustpan", how: "Short strokes so you don’t push dust into the air." },
    { s: "FLOORS LAST — mop: lightly damp mop in small sections, working back toward the exit door. Let it dry.", use: "Mop and the floor cleaner a parent set out", how: "Damp, not soaking. Wring the mop well. Don’t step back on wet floor." },
    { s: "Final check: sink empty, counters clear and shiny, stove clean, floor clean, trash done. Rinse the cloths, hang the dish towel, put all supplies back, wash your hands.", use: "Your eyes", how: "Stand in the doorway and look at the kitchen like a parent would." }
  ],
  standard: "Done means: no dishes anywhere, sink empty and clean, counters and stove wiped, table wiped, trash handled, floor swept and mopped, supplies put away."
};

// Added when a Clean Kitchen / Wash Dishes block is sent back for correction
SG.kitchenDeepExtra = [
  { s: "DEEP CLEAN: wipe the whole front of the fridge, the oven/stove door and handles, and every cabinet handle you can reach.", use: "Spray and cloth" },
  { s: "DEEP CLEAN: wipe the inside of the microwave and the top of the microwave and toaster.", use: "Damp cloth with a drop of dish soap" },
  { s: "DEEP CLEAN: wipe the light switches and the outside of the trash can.", use: "Spray and cloth" },
  { s: "DEEP CLEAN: sweep and mop the whole kitchen floor one more time, including under the table.", use: "Broom, dustpan, mop" }
];

/* ------------------------------------------------------------------ */
/* RESPONSIBILITY BLOCK — four areas, tap an area to open its steps    */
/* ------------------------------------------------------------------ */
SG.areas = [
  {
    id: "kitchen", icon: "🍽️", name: "Final Kitchen Clean-Up", minutes: 15,
    summary: "The end-of-day reset: dinner dishes, counters, stove and floor, so tomorrow starts clean.",
    tools: ["Dish soap, sponge or brush", "All-purpose spray and cloth", "Trash bag", "Broom, dustpan and mop"],
    standard: "Nothing in the sink, nothing on the counters, stove wiped, table wiped, trash handled, floor clean.",
    steps: [
      { s: "Clear the table and counters. Scrape and rinse the dinner dishes.", how: "Leftovers: ask a parent, then put them in a container in the fridge." },
      { s: "Wash or load dishes: cups first, then plates, then silverware, then pots and pans last. Run the dishwasher if it’s full and a parent says to.", use: "Hot soapy water, sponge or brush" },
      { s: "Rinse the sink and wipe the faucet. Empty the drain strainer.", use: "Sponge" },
      { s: "Wipe the counters top to bottom, then the stove top (when it’s off and cool), then the table and chairs.", use: "Spray and cloth" },
      { s: "Take out the trash if it is 3/4 full and put in a new bag.", use: "New bag" },
      { s: "Sweep, then mop the floor LAST. Work toward the door.", use: "Broom, dustpan, mop" },
      { s: "Put supplies away, hang the dish towel, wash your hands.", how: "Look at the kitchen from the doorway. Would a parent say it’s done?" }
    ]
  },
  {
    id: "bathroom", icon: "🚽", name: "Bathroom", minutes: 15,
    summary: "Top to bottom, clean to dirty, floor last. Toilet cloth is never used on anything else.",
    tools: ["Rubber gloves", "Toilet bowl cleaner and toilet brush", "Bathroom / all-purpose spray (the one a parent set out)", "Glass cleaner and a clean microfiber cloth", "Separate cloth or wipes just for the toilet", "Scrub sponge", "Trash bag", "Broom and mop"],
    standard: "Mirror streak-free, sink and counter shiny, tub/shower rinsed, toilet clean inside and out, trash handled, floor swept and mopped, towels hung.",
    safety: "Open the window or turn on the fan. Wear gloves. Never mix cleaning products — especially bleach with anything else.",
    steps: [
      { s: "Open the window or turn on the fan. Put on gloves. Pick up towels and clothes and put them in the hamper. Throw away trash.", use: "Gloves, hamper" },
      { s: "Squirt toilet bowl cleaner under the rim and around the bowl, and let it sit while you do the rest.", use: "Toilet bowl cleaner" },
      { s: "Spray the sink, counter and tub/shower with the bathroom cleaner and let it sit about 30 seconds.", use: "Bathroom spray" },
      { s: "Mirror first: spray glass cleaner and wipe from the top down in an S-shape until there are no streaks.", use: "Glass cleaner, microfiber cloth", how: "Top to bottom, because drips fall down." },
      { s: "Sink and counter: scrub the sink, faucet and handles, wipe the counter, and put things back neatly.", use: "Scrub sponge, cloth" },
      { s: "Tub or shower: scrub from the top (walls) down to the bottom, then rinse it all with water.", use: "Scrub sponge" },
      { s: "Toilet outside: with your toilet-only cloth, wipe the tank, lid, seat (top and bottom), the outside of the bowl and the base.", use: "Toilet-only cloth", how: "Work from the cleanest part (tank) to the dirtiest part (base)." },
      { s: "Toilet inside: scrub the bowl with the brush, under the rim too, then flush. Rinse the brush in the flushing water.", use: "Toilet brush" },
      { s: "Sweep the floor from the far corner toward the doorway, then mop.", use: "Broom, mop" },
      { s: "Hang fresh towels, replace the trash bag, put supplies away, take off gloves and wash your hands.", how: "Stand in the doorway and check the mirror, sink, toilet and floor." }
    ]
  },
  {
    id: "livingroom", icon: "🛋️", name: "Upstairs Living Room", minutes: 10,
    summary: "Pick up first, then dust, then vacuum. Dust falls, so floors always come last.",
    tools: ["Trash bag", "Laundry basket", "Microfiber cloth or duster", "Vacuum (or broom)", "TV-safe dry cloth"],
    standard: "Nothing on the floor or couch that doesn’t belong, surfaces dusted, TV and tables wiped, floor vacuumed, remotes and controllers where they belong.",
    steps: [
      { s: "Trash and dishes first: carry out cups, plates, wrappers and anything that belongs in the kitchen or trash.", use: "Trash bag" },
      { s: "Pick up everything that doesn’t belong: shoes, clothes, games, controllers, chargers. Put each thing where it lives.", use: "Laundry basket for stray items" },
      { s: "Fold blankets, fluff and straighten the couch cushions and pillows.", how: "Fold blankets in thirds and drape or stack them." },
      { s: "Dust from the top down: shelves, TV stand, tables, lamps, window sills.", use: "Microfiber cloth or duster" },
      { s: "Wipe the tables and the TV remote. Use a dry soft cloth on the TV screen — never spray cleaner on a screen.", use: "Dry microfiber cloth for the screen" },
      { s: "Vacuum the whole floor, including edges, corners and under tables. Move small things and put them back.", use: "Vacuum (or broom and dustpan)", how: "Overlapping straight lines, like mowing a lawn." },
      { s: "Empty the trash can and put in a new bag. Put the vacuum away.", use: "New bag" },
      { s: "Final check from the doorway: clear floor, tidy couch, clean tables, neat shelves.", how: "Fix the first thing you notice." }
    ]
  },
  {
    id: "room", icon: "🛏️", name: "Your Room", minutes: 10,
    summary: "Your room shows how you take care of yourself. Do it so a parent can walk in and say ‘nice.’",
    tools: ["Trash bag", "Laundry hamper", "Microfiber cloth", "Vacuum or broom", "Hangers"],
    standard: "Bed made to standard, nothing on the floor, clothes in the hamper or put away, surfaces dusted, gear put away, floor vacuumed.",
    steps: [
      { s: "Trash and dishes out: cups, plates, wrappers.", use: "Trash bag" },
      { s: "Clothes: dirty ones in the hamper, clean ones folded into drawers or on hangers. Nothing on the floor or chair.", use: "Hamper, hangers" },
      { s: "Make your bed to standard: sheets straight, comforter straight, pillows organized, nothing thrown on it.", how: "Smooth the sheet first, then the comforter, then the pillows." },
      { s: "Football gear and school stuff: bag packed and by the door, cleats and shoes lined up, school supplies on the desk or shelf.", how: "Wet or sweaty gear gets hung to dry, not left in the bag." },
      { s: "Desk and shelves: put things back, stack papers, throw away trash.", how: "A clear desk tomorrow morning means a fast start." },
      { s: "Dust top to bottom: shelves, dresser, desk, window sill, then wipe the light switch and doorknob.", use: "Microfiber cloth" },
      { s: "Check under the bed and in the closet: pull out trash and dishes, and line up shoes.", how: "Don’t shove things under the bed to hide them." },
      { s: "Vacuum or sweep the whole floor last. Put the vacuum away.", use: "Vacuum or broom" },
      { s: "Final check from the doorway.", how: "Would you be proud to show a coach this room?" }
    ]
  }
];

/* ------------------------------------------------------------------ */
/* HOUSE INSPECTION WALK-THROUGH (replaces the last dishes block)      */
/* ------------------------------------------------------------------ */
SG.inspection = {
  intro: "Walk the house like a coach inspecting the field. Carry a trash bag and a basket. Start at the front door and go room by room. Anything that needs picking up, cleaning or doing — do it right then. Don’t wait to be asked.",
  zones: [
    { name: "Front door and entry", checks: ["Shoes lined up or put away", "Backpack and football bag in their spot", "Floor clear, nothing in the way", "Door locked when it’s dark / a parent says so"] },
    { name: "Kitchen and eating area", checks: ["Sink empty, faucet dry", "Counters clear and wiped", "Stove clean and OFF", "Trash not overfull", "Floor swept, no spills", "Table wiped, chairs pushed in", "Food put away, fridge door fully shut"] },
    { name: "Living room(s)", checks: ["Blankets folded, couch tidy", "No cups, plates or wrappers", "Remotes and controllers where they belong", "Floor clear (vacuum if you see crumbs)", "Lights and TV off if no one’s in there"] },
    { name: "Bathroom(s)", checks: ["Toilet flushed and clean", "Sink and counter wiped, no toothpaste", "Towels hung, clothes in the hamper", "Trash not overfull", "Floor dry"] },
    { name: "Your room", checks: ["Bed made to standard", "Nothing on the floor", "Clothes put away or in the hamper", "School bag and football gear ready for tomorrow"] },
    { name: "Laundry and trash", checks: ["Laundry hamper isn’t overflowing — tell a parent if it’s full", "Trash cans around the house emptied if needed", "Recycling in the right place"] },
    { name: "Anything else you see", checks: ["Picked up what doesn’t belong", "Cleaned what’s dirty", "Did the thing that needed doing without being told", "Told a parent about anything broken or running low (soap, paper towels, trash bags)"] }
  ],
  dogFeed: [
    "Check the dog’s bowl and water. Dump old water and refill with fresh water.",
    "Feed the dog the amount a parent has told you (same time every day) — don’t guess.",
    "Pick up the bowl if it’s empty and wipe up any spills around it."
  ],
  dogWalk: [
    "Tell a parent you are taking the dog out and about how long you’ll be.",
    "Leash or harness on, a few poop bags in your pocket, and your phone.",
    "Walk around the neighborhood on the sidewalk, on streets you know well. Stay close to home.",
    "Let him slow down, sniff and take his time. Sniffing is how a dog explores and it’s part of his exercise.",
    "When he poops, pick it up with a bag, tie it, and throw it in a trash can at home. Never leave it.",
    "Watch for cars, other dogs, and anything he might eat off the ground. Keep the leash short near streets.",
    "If it’s getting dark, wear light-colored or reflective clothes and carry a light, or walk with a parent.",
    "Back home: unclip the leash, hang it in its spot, give him water, wipe his paws if they’re wet, wash your hands."
  ],
  wrap: "Last check: every zone ticked, the dog is fed, watered and walked, and you told a parent what you found and what you fixed."
};

/* ------------------------------------------------------------------ */
/* SNACK + TRAINING PREP — snacks, gear, supplements                   */
/* ------------------------------------------------------------------ */
SG.prep = {
  order: [
    "Check what time you leave — then work backward from it.",
    "Eat the right snack (not too close to leaving).",
    "Fill the water bottle and set it by the door.",
    "Change into your training clothes.",
    "Pack the gear bag using the list below. Check each item off.",
    "Pack the after-training bag: towel, clean clothes, post-workout snack.",
    "Bathroom, then shoes on.",
    "Final check at the door: bag, bottle, shoes, snack. Then tell a parent you’re ready."
  ],
  snackTiming: [
    "A normal meal about 2–3 hours before you train.",
    "A small snack 30–60 minutes before you leave (or about 1 hour before you start).",
    "Little to no heavy food in the last 30 minutes. A full stomach makes you sluggish and can cause cramps."
  ],
  snackGood: [
    "Banana",
    "Peanut butter (or seed butter) on toast, a bagel or crackers",
    "Applesauce pouch",
    "Pretzels or crackers",
    "Plain oatmeal or a small bowl of cereal with milk",
    "Yogurt and fruit",
    "Fruit: grapes, oranges, apple slices, berries",
    "Rice cakes with a little honey",
    "Granola or fig bar (not a candy bar)"
  ],
  snackAvoid: [
    "Fried or greasy food, burgers, pizza, or fast food right before training",
    "Candy, soda, and sugary drinks — they spike then crash",
    "Energy drinks and anything with caffeine — the American Academy of Pediatrics advises against them for kids and teens",
    "A big heavy meal in the last hour",
    "Very high-fiber or gassy foods right before (beans, big salad)",
    "Brand-new foods on a training or practice day"
  ],
  snackNote: "Allergies: only eat foods a parent knows are safe for you. If something upsets your stomach before training, tell a parent so you can swap it.",
  hydration: [
    "Drink water through the day — your pee should be pale yellow.",
    "Fill your bottle and bring it. Take a few sips every 15–20 minutes during training.",
    "Plain water is the default. A sports drink is only for long, hot, hard sessions, and only if a parent says so."
  ],
  // Gear lists by session type
  gear: {
    home: {
      title: "Home training gear",
      items: [
        "Training shoes (the ones you train in)", "Training shirt, shorts or pants, and socks", "Full water bottle",
        "Agility ladder and cones (or mark the ones you don’t have)", "Resistance bands / any weights the plan calls for", "Football for touches",
        "Receiver / lineman gloves if you use them", "Towel", "Training phone set up for the session (offline / timer ready)", "Post-workout snack ready in the kitchen"
      ]
    },
    training: {
      title: "Trainer session gear",
      items: [
        "Training shoes or turf shoes (what the trainer asked for)", "Moisture-wicking shirt, shorts or pants, socks", "Full water bottle (and a second one if it’s hot)",
        "Football gloves", "Mouthguard if you use one", "Agility ladder, cones or bands only if the trainer asked", "Training phone (offline) for timing and notes",
        "Towel", "Small notebook or the plan for the day", "After-training bag: clean shirt, socks, sandals, deodorant, and a plastic bag for wet clothes",
        "Post-workout snack in a cooler bag or lunch bag"
      ]
    },
    practice: {
      title: "Team practice gear",
      items: [
        "Helmet (chin strap checked)", "Mouthpiece", "Shoulder pads", "Practice pants with thigh, knee, hip and tailbone pads in", "Girdle / compression shorts", "Belt",
        "Practice jersey and anything the team requires", "Cleats (laces checked, not worn out)", "Socks and an extra pair", "Gloves", "Full water bottle (and extra if it’s hot)",
        "Braces or supports if you wear them", "Towel", "After-practice bag: clean clothes, sandals, deodorant, plastic bag for wet gear",
        "Post-practice snack ready for the car ride home"
      ]
    },
    game: {
      title: "Game gear",
      items: [
        "Helmet (chin strap checked)", "Guardian cap if required", "Shoulder pads", "Game pants with all pads in", "Girdle / compression shorts", "Belt", "Jersey",
        "Cleats and extra socks", "Mouthpiece", "Gloves", "Braces or supports", "Water bottle", "Towel", "Any team-required gear",
        "After-game bag: clean clothes, sandals, plastic bag for wet gear", "Post-game snack and drink"
      ]
    }
  },
  suppIntro: "Food, water and sleep do most of the work. Before you pick anything from the supplement list, check with a parent — the American Academy of Pediatrics and the NIH both say young athletes should get nutrients from food first.",
  intra: [
    "During training: water. A few sips every 15–20 minutes.",
    "If the session is long (over an hour), very hot, or you’re sweating a lot, a parent may add a sports drink or a salty snack. Ask first; it isn’t the default.",
    "Only if a parent and the pediatrician have already approved it: the amino-acid (EAA) scoop from the Nutrition tab’s Supplement Timing Stack, mixed in water, in the amount shown there for your age. This is optional — real food covers it."
  ],
  post: [
    "Within about 30–60 minutes after training: carbs + protein + fluid.",
    "Good real-food choices: chocolate milk, a turkey or chicken sandwich, yogurt with fruit, eggs with toast, peanut butter and banana, a glass of milk with a banana.",
    "A protein shake from the Nutrition tab (Shake 1 or 2) works if it’s one a parent made or bought for you.",
    "Then a real meal when you get home.",
    "Collagen: only if a parent and the pediatrician approve it, in the amount shown in the Nutrition tab."
  ],
  suppSkip: [
    "Energy drinks, caffeine and pre-workouts — skip them at your age.",
    "Fat burners, testosterone boosters and “mass gainers” — never.",
    "Creatine — the AAP recommends against it for teens; it stays OFF unless the pediatrician says otherwise.",
    "Taking extra vitamins or “immune” products on your own — only what the doctor and a parent give you, in the amount on the label."
  ]
};

/* ------------------------------------------------------------------ */
/* Showers                                                             */
/* ------------------------------------------------------------------ */
SG.shower = {
  after: [
    "Shower within about 30 minutes of finishing — wash off the sweat and dirt, including feet, armpits and face.",
    "Deodorant, clean clothes, hair done.",
    "Hang wet pads and gear up to dry — never leave them zipped in the bag.",
    "Dirty clothes in the hamper, towel hung, bathroom left clean."
  ],
  recovery: [
    "Recovery shower — it’s the morning after a practice or game. Warm water, take your time.",
    "Check your body: any sore spots, scrapes, bruises, or a joint that hurts? Tell a parent about anything that isn’t normal soreness.",
    "Stretch gently for about 5 minutes after you dry off.",
    "Drink a full glass of water.",
    "Deodorant, clean clothes, dirty clothes in the hamper, towel hung, bathroom left clean."
  ]
};

/* ------------------------------------------------------------------ */
/* Nightly star grades                                                 */
/* ------------------------------------------------------------------ */
SG.gradeCategories = [
  { id: "participation", icon: "🙌", name: "Participation", ask: "Did he jump in and give full effort on everything, without being chased?",
    five: "Started tasks right away and finished every one.", three: "Did the work but needed reminders.", one: "Had to be pushed on almost everything." },
  { id: "attitude", icon: "😀", name: "Attitude", ask: "How was his energy and tone?",
    five: "Positive, respectful tone all day.", three: "Mostly fine with a few complaints.", one: "Negative, rolling eyes or arguing." },
  { id: "behavior", icon: "🤝", name: "Behavior", ask: "Did he follow instructions and treat people with respect?",
    five: "Followed directions the first time and was respectful.", three: "Needed a few redirects.", one: "Ignored directions or was disrespectful." },
  { id: "schoolwork", icon: "📘", name: "School Work", ask: "Was the academic work done honestly, completely and with effort?",
    five: "Every block done with real effort and honest scores.", three: "Done, but rushed or needed redoing.", one: "Skipped, rushed or made up scores." },
  { id: "effort", icon: "🏈", name: "Practice / Training Effort", ask: "How hard did he work in training or practice (and film study)?",
    five: "Gave full effort and coachable the whole time.", three: "Solid but not locked in.", one: "Went through the motions." }
];

SG.weekend = {
  intro: "Every night a parent gives you 1–5 stars in five areas. Friday night your Monday–Friday average decides how much video-game time you get on Saturday and Sunday.",
  how: [
    "Stars (1–5) are given in: Participation, Attitude, Behavior, School Work and Practice/Training Effort.",
    "Each night’s stars average into a letter grade: A (4.5 or higher), B (3.5 or higher), C (2.5 or higher), D (1.5 or higher), F below that.",
    "Friday night’s Monday–Friday average sets the weekend: an A average earns the most video-game time per day, a B earns a bit less, and below a B earns TV only.",
    "The exact minutes are set by your parents in Settings and can change."
  ]
};

if (typeof window !== 'undefined') window.SG = SG;
