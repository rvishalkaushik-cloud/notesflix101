/* Answer Writing Lab · Class IX English (Kaveri). Original questions and answers based on the Notesflix notes for each chapter. */
NFWrite.register({
  slug: "ix-eng", cls: "IX", subject: "English (Kaveri)",
  intro: "English answers are marked on content, organisation and expression. For literature, answer the exact question with evidence from the text; for writing tasks, follow the format and stay within the word limit.",
  words: { 3: "40–60", 5: "100–120" },
  rules: [
    { t: "Answer the question first", b: "Begin with a <b>direct answer</b> in your first sentence, then support it. Don't retell the whole story." },
    { t: "Use the text", b: "Refer to a <b>specific event, line or image</b> from the text. It shows you have read it, not just remembered the gist." },
    { t: "Name the device", b: "In poems, name the device and its effect: '<b>sensory imagery</b> of smell brings the mother close'." },
    { t: "Writing: format earns marks", b: "Letters need address, date, salutation, body, closing and name. A paragraph needs a <b>topic sentence</b> and a closing line." },
    { t: "Content, organisation, expression", b: "Writing tasks are marked on what you say, how you order it, and how accurately you write. Plan for one minute first." },
    { t: "Respect the word limit", b: "40–60 words for short answers; 100–120 for long ones. Going far over can cost marks." }
  ],
  questions: [
    {
      id: "q1", ch: "ix-eng1", chTitle: "How I Taught My Grandmother to Read", marks: 3, cmd: "Explain",
      q: "Why did Krishtakka decide to learn to read at the age of sixty-two? What does this show about her?",
      ask: "The trigger (missing the serial <i>Kashi Yatre</i> while the narrator was away), her feeling of helplessness, and the quality it shows.",
      points: [
        { p: "She depended on the narrator to read the serial <i>Kashi Yatre</i> to her", m: 1, k: ["kashi yatre", "serial", "depend"] },
        { p: "When the narrator was away, she could not read it herself and felt helpless and dependent", m: 1, k: ["helpless", "away", "could not read", "dependent"] },
        { p: "Shows determination and that learning has no age limit", m: 1, k: ["determin", "no age", "age limit"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The grandmother wanted to read because she was old and wanted to be educated. She was a good woman.</p>",
          notes: ["'Wanted to be educated' is general, not the reason in the story.", "'Good woman' does not name a quality shown by the event.", "1 mark for a broad link to learning."] },
        good: { score: 2, text: "<p>Krishtakka loved the serial <i>Kashi Yatre</i>, which the narrator read to her. When the narrator went away, she could not read it herself, so she decided to learn.</p>",
          notes: ["Trigger and helplessness are clear: 2 marks.", "The second part, <b>what it shows about her</b>, is missing: determination; learning has no age limit."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">Krishtakka relied on her granddaughter, the narrator, to read the serial <i>Kashi Yatre</i> aloud to her every week.</span> <span class=\"mp\" data-p=\"2\">When the narrator went away, the magazine came but Krishtakka could not read it, and she felt helpless and dependent.</span> <span class=\"mp\" data-p=\"3\">Her decision to learn at sixty-two shows her <b>determination</b> and proves that <b>learning has no age limit</b>.</span></p>",
          notes: ["Direct answer with the story's specific trigger.", "Both parts answered in about 60 words.", "Ends with the quality and the theme."] }
      },
      mistakes: ["Retelling the whole story.", "Missing the 'what does it show' part.", "Vague qualities like 'good' or 'nice'."],
      tip: "Two-part questions need two parts in the answer. Use 'This shows…' to begin the second."
    },
    {
      id: "q2", ch: "ix-eng2", chTitle: "The Pot Maker", marks: 3, cmd: "Explain",
      q: "What is the central conflict in 'The Pot Maker'? How does Sentila deal with it?",
      ask: "The external conflict (her wish vs her mother's wish), the inner conflict, and how she moves forward.",
      points: [
        { p: "External conflict: Sentila wants to make pots, but her mother Arenla wants her to take up weaving", m: 1, k: ["weav", "mother", "arenla"] },
        { p: "Inner conflict: her doubt and discouragement after early failures", m: 1, k: ["doubt", "fail", "inner"] },
        { p: "She deals with it through persistence and Onula's guidance, making pot after pot", m: 1, k: ["onula", "persist", "practi", "guidance"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The story is about a girl who makes pots. Her mother is angry. In the end she becomes a good potter.</p>",
          notes: ["'Mother is angry' hints at the conflict: 1 mark.", "Name the wishes on both sides: pots vs weaving.", "No mention of the inner conflict or of Onula."] },
        good: { score: 2, text: "<p>Sentila wants to become a pot maker, but her mother Arenla wants her to weave instead. Sentila keeps practising and makes many pots.</p>",
          notes: ["External conflict and her response: 2 marks.", "Add the <b>inner conflict</b>, her doubt after failing, and the role of Onula's guidance."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">The central conflict is between Sentila's dream of becoming a pot maker and her mother Arenla's wish that she take up weaving.</span> <span class=\"mp\" data-p=\"2\">There is also an inner conflict: when her first pots fail, Sentila doubts herself.</span> <span class=\"mp\" data-p=\"3\">She overcomes both through <b>persistence</b>, practising pot after pot, and with the kind guidance of Onula.</span></p>",
          notes: ["External and inner conflict both named.", "Resolution linked to her character (persistence) and to a helper (Onula)."] }
      },
      mistakes: ["Only summarising the plot.", "Missing the inner conflict.", "Confusing the characters' roles."],
      tip: "Conflict = what a character wants versus what blocks it. Write both halves."
    },
    {
      id: "q3", ch: "ix-eng4", chTitle: "Vitamin-M (poem: I Cannot Remember My Mother)", marks: 3, cmd: "Explain",
      q: "In Tagore's poem 'I Cannot Remember My Mother', how does the speaker feel his mother's presence even though he cannot remember her?",
      ask: "The three senses (sound, smell, sight), with the image linked to each.",
      points: [
        { p: "Sound: a tune he hums while playing seems to be her lullaby", m: 1, k: ["sound", "tune", "lullaby", "song"] },
        { p: "Smell: the scent of flowers on an autumn morning and the temple service bring her scent", m: 1, k: ["smell", "scent", "flower", "temple"] },
        { p: "Sight: looking at the distant blue sky, he feels her gaze spread over it", m: 1, k: ["sight", "sky", "gaze"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The poet misses his mother a lot. He cannot remember her face but he loves her.</p>",
          notes: ["Feeling is right but no evidence from the poem: 1 mark at most.", "The question asks <b>how</b>: through three senses."] },
        good: { score: 2, text: "<p>The poet feels his mother through a song he hums, which reminds him of her lullaby, and through the smell of flowers in the morning that reminds him of the temple.</p>",
          notes: ["Sound and smell: 2 marks.", "Add <b>sight</b>: the blue sky, where he feels her gaze."] },
        full: { score: 3, text: "<p>The speaker feels his mother through his senses. <span class=\"mp\" data-p=\"1\"><b>Sound:</b> a tune he hums at play seems to be the lullaby she sang.</span> <span class=\"mp\" data-p=\"2\"><b>Smell:</b> the fragrance of flowers on an autumn morning, mixed with the scent of the temple service, comes to him as her scent.</span> <span class=\"mp\" data-p=\"3\"><b>Sight:</b> when he gazes at the distant blue sky, he feels her gaze spread across it.</span> Through this sensory imagery, she remains present.</p>",
          notes: ["All three senses, each with its image.", "Names the device (sensory imagery)."] }
      },
      mistakes: ["Writing about missing her without poem evidence.", "Mentioning only one or two senses.", "Not naming the device."],
      tip: "One stanza, one sense: sound, smell, sight."
    },
    {
      id: "q4", ch: "ix-eng8", chTitle: "Follow That Dream", marks: 3, cmd: "Explain",
      q: "What advice does Irene Chua give her daughter Ming about following a dream?",
      ask: "Three pieces of advice from the letter: passion, planning, and readiness for sacrifice/hurdles (or a support network).",
      points: [
        { p: "Passion: a dream needs passion, or it fades into a wish", m: 1, k: ["passion"] },
        { p: "Planning: turn the dream into a practical plan with steps", m: 1, k: ["plan"] },
        { p: "Be ready for sacrifice and hurdles; build a support network", m: 1, k: ["sacrifice", "hurdle", "support"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The mother tells Ming to follow her dream and be happy.</p>",
          notes: ["Too general: 1 mark at most.", "Name specific advice: passion, planning, sacrifice, support."] },
        good: { score: 2, text: "<p>Irene Chua tells Ming that she must be passionate about her dream and must make a proper plan to achieve it.</p>",
          notes: ["Passion and planning: 2 marks.", "Add a third point: be prepared for <b>sacrifices and hurdles</b>, and lean on a <b>support network</b>."] },
        full: { score: 3, text: "<p>In her letter, Irene Chua gives Ming warm but practical advice. <span class=\"mp\" data-p=\"1\">First, a dream needs <b>passion</b>; without it, a dream becomes a wish that soon fades.</span> <span class=\"mp\" data-p=\"2\">Second, Ming must <b>plan</b> carefully and turn the dream into clear steps.</span> <span class=\"mp\" data-p=\"3\">Third, she should be ready for <b>sacrifices and hurdles</b>, and rely on family and teachers as a support network.</span></p>",
          notes: ["Three distinct pieces of advice, signposted (first, second, third).", "Captures the letter's warm, practical tone."] }
      },
      mistakes: ["General lines like 'follow your dream'.", "Mixing in ideas from the poem in the same chapter.", "Only one piece of advice."],
      tip: "Signpost points with 'First… Second… Third…'. Examiners can tick each quickly."
    },
    {
      id: "q5", ch: "ix-eng1", chTitle: "Writing skill: descriptive paragraph (Ch 1)", marks: 5, cmd: "Write (descriptive paragraph)",
      q: "Write a descriptive paragraph of about 100–120 words on 'A local market at sunset'.",
      ask: "A topic sentence, details for several senses, a clear order (e.g. entrance → centre → exit), vivid words, and a closing line.",
      points: [
        { p: "Content: a clear topic sentence introducing the scene", m: 1, k: ["market"] },
        { p: "Content: sensory details (sight, sound, smell)", m: 1, k: ["smell", "sound", "colour", "shout", "aroma"] },
        { p: "Organisation: details in a logical order (space or time)", m: 1, k: ["entrance", "centre", "as", "then"] },
        { p: "Expression: vivid vocabulary and an image or comparison", m: 1, k: ["like", "glow", "golden"] },
        { p: "A closing line that leaves an impression; accurate language within the word limit", m: 1, k: ["home", "end", "last"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>The market is very nice. There are many shops. People buy things. There is lot of noise. I like the market very much. It is good to go there in the evening. There are vegetables and fruits also.</p>",
          notes: ["Some content (shops, noise, fruits): 2 marks.", "No topic sentence or order; ideas jump around.", "Plain, repetitive words ('nice', 'good'); 'lot of' should be 'a lot of'."] },
        good: { score: 3, text: "<p>Our local market comes alive at sunset. Vendors call out the prices of fresh vegetables and fruits. The smell of hot samosas comes from a small stall. Children run around while their parents bargain. Bulbs are switched on in every shop. It is crowded and noisy but I enjoy it.</p>",
          notes: ["Good topic sentence and sensory details: 3 marks.", "No clear order of movement through the scene.", "Language is correct but plain; add one image ('bulbs flicker on like fireflies') and a stronger closing line."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\">As the sun sinks behind the water tank, our local market wakes up for its busiest hour.</span> <span class=\"mp\" data-p=\"3\">At the entrance, vegetable sellers arrange glossy tomatoes and bright green chillies into neat hills,</span> <span class=\"mp\" data-p=\"2\">calling out prices in sing-song voices. Further in, the sharp aroma of frying onions drifts from a samosa stall, and a pressure cooker whistles somewhere behind it.</span> <span class=\"mp\" data-p=\"4\">One by one, bulbs flicker on above the shops like fireflies, turning the dusty lane golden.</span> Mothers bargain patiently while children tug at their hands towards the balloon seller. <span class=\"mp\" data-p=\"5\">By the time the sky turns purple, the market is a warm, noisy river of people, and I walk home with its sounds still humming in my ears.</span></p>",
          notes: ["Topic sentence sets time and place.", "Moves in order: entrance → further in → overhead → closing.", "Sight, sound and smell; a simile ('like fireflies') and strong verbs.", "About 120 words, with a memorable last line."] }
      },
      mistakes: ["Listing facts without description.", "No order: jumping between details.", "Overusing 'nice', 'good', 'very'."],
      tip: "Plan in 30 seconds: 3 senses × 1 detail each, then decide the order you will 'walk' through the scene."
    },
    {
      id: "q6", ch: "ix-eng8", chTitle: "Writing skill: letter of advice (Ch 8)", marks: 5, cmd: "Write (letter of advice)",
      q: "Write a letter of about 100–120 words to your younger brother, who wants to become a footballer, advising him how to follow his dream. You are Meena, 14 Lake View Road, Pune.",
      ask: "Informal letter format and three pieces of advice in a warm tone.",
      points: [
        { p: "Format: sender's address and date at the top", m: 1, k: ["lake view", "pune", "2026", "date"] },
        { p: "Format: informal salutation and closing with name", m: 1, k: ["dear", "love", "meena"] },
        { p: "Content: at least three pieces of practical advice (practice, fitness, balance studies, accept setbacks)", m: 1, k: ["practi", "fitness", "studies", "setback"] },
        { p: "Tone: warm and encouraging, like the letter in 'Follow That Dream'", m: 1, k: ["proud", "believe", "love"] },
        { p: "Organisation and accuracy within the word limit", m: 1, k: ["first", "also", "finally"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Dear brother, Football is a good game. You should play well. Don't waste time. Study also. All the best. Meena</p>",
          notes: ["Salutation, closing and some advice: 2 marks.", "Address and date are missing.", "Advice is too thin for 5 marks, and the tone is curt rather than warm."] },
        good: { score: 3, text: "<p>14 Lake View Road<br>Pune</p><p>Dear Rohan,</p><p>I heard you want to become a footballer. That is great! You should practise every day and eat healthy food. Also, do not forget your studies, because they are important too.</p><p>Your loving sister,<br>Meena</p>",
          notes: ["Address, salutation, closing and two pieces of advice: 3 marks.", "The <b>date</b> is missing below the address.", "Too short: add a third piece of advice (handling setbacks) and more warmth."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\">14 Lake View Road<br>Pune<br>18 November 2026</span></p><p><span class=\"mp\" data-p=\"2\">Dear Rohan,</span></p><p><span class=\"mp\" data-p=\"4\">Mum told me you have set your heart on becoming a footballer, and I could not be prouder!</span> <span class=\"mp\" data-p=\"3\">First, practise a little every single day; small, regular drills build real skill. Also, take care of your fitness: sleep well, eat simple home food and stretch before every game. Finally, keep up with your studies, because a sharp mind reads the game better.</span> <span class=\"mp\" data-p=\"5\">You will lose matches and miss goals, but every setback is a lesson. Believe in yourself, and remember that we are all cheering for you.</span></p><p><span class=\"mp\" data-p=\"2\">With lots of love,<br>Meena</span></p>",
          notes: ["Complete informal format: address, date, salutation, closing, name.", "Three clear pieces of advice, signposted (First, Also, Finally).", "Warm, encouraging tone, about 115 words."] }
      },
      mistakes: ["Missing address or date.", "Formal salutation ('Respected Sir') in an informal letter.", "Advice without any warmth, or warmth without any advice."],
      tip: "Informal letter: address → date → Dear… → 3 paragraphs → With love → name."
    }
  ]
});
