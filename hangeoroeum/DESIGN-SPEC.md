# 한걸음 (Hangeoroeum) — Design Spec

## One-line pitch
A 2-5 minute Korean phrase learning app that feels like a good sandwich — complete, satisfying, and you'll want another one tomorrow.

---

## Core Design Principles

### 1. The phrase is the atom, not the word
You don't learn 밥 then 먹다 then assemble them. You learn "밥 먹었어?" as a chunk and the grammar is implicit. Every session delivers whole phrases in context. Words are never taught in isolation.

### 2. The Sandwich, not Reels
Each session has a beginning, middle, and end you can feel. You close it full, not hungry. You feel accomplished after 1 session. Happy if you do 3-5. Wouldn't do 9. No streaks, no points, no guilt.

### 3. One phrase that's yours
Every session leaves you with at least one new phrase added to your collection. Something you *have* now that you didn't before. Over a year that's 365 phrases. That's not nothing.

### 4. ADHD-first design
- No decision fatigue (the app decides what you learn next)
- Immediate engagement (first card is always a question, never an explanation)
- Clear progress without gamification tricks
- Sessions that respect your time and don't punish you for skipping days
- Auto-start: returning users go straight into a session, no homescreen gate

### 5. No romanization
Hangul directly. You can already read it. Speed comes from practice, not a crutch.

### 6. Korean-first, English as bridge
Exercise prompts in Korean (tappable to reveal English translation). All buttons show Korean with subtle English whisper subtitles. English kept for navigation, settings, grammar notes, and explanations. Reference: King Sejong Institute approach — immersion-forward without being confusing.

### 7. Translations wherever needed
The app helps, it doesn't withhold. English meanings are available — just not shoved in your face.

---

## The Session Flow

### Opening the App

**First launch**: Welcome modal (onboarding + API key setup) → HomeScreen.

**Returning users** (have completed at least 1 session): The app auto-starts the next session — no homescreen gate. First card is always a warmup question. The HomeScreen is always accessible via the home button.

**All sessions completed**: HomeScreen with review option.

### The HomeScreen (accessible anytime via home button)

A quiet display showing:
- Stats (phrases learned, sessions completed, day streak)
- Next session preview with topic hint
- Recent focus phrases with mastery indicators and TTS
- Single "다음 한걸음 / Next step" button

### The Session (2-5 minutes)

A session has 5 beats:

#### Beat 1: Warmup (15 sec)
2 quick questions from previously-mastered phrases (random from entire phrase library). Recognize or recall, randomly assigned. Scores not recorded — this is a pure engagement hook.

Skipped on first-ever session (no mastery data yet).

Design rationale: ADHD-first — the first card is always a question, never a passive explanation. Like YouTube Reels, the hook has to be instant. Warmup creates "I know this!" momentum before any new content.

#### Beat 2: The Scene (30 sec)
A short situation grounded in the user's interests, written to feel real.

> *You're at a film festival Q&A. The Korean director just finished speaking. The person next to you leans over and whispers...*

2-3 sentences max. Below: the **focus phrase** — the one you'll own by the end.

#### Beat 3: The Phrases (2-3 min)
Chunked interleaving of see → test exercises:
1. **Phase 1 (Reveal)**: `see` focus phrase + all other phrases (Korean with tappable English)
2. **Phase 2 (Test)**: `recognize` all phrases shuffled (Korean → pick English meaning)
3. **Phase 3 (Mixed)**: all phrases shuffled with diverse exercise types — focus phrase always `recall`, others rotate through `recall`, `listen`, `context`

Phrases are chunked in pairs: see 2 → test those 2. This prevents "I just saw it 5 seconds ago" trivial recall.

**Exercise types:**
| Type | Prompt | Shows | Picks | Score |
|------|--------|-------|-------|-------|
| see | — | Korean + reveal English | — | null |
| recognize | 무슨 뜻이에요? | Korean | English MC | 4/1 |
| recall | 어떻게 말해요? | English | Korean MC | 5/2 |
| listen | 들어 보세요 | Audio only (replay btn) | English MC | 5/1 |
| context | 어떤 표현이에요? | Context description | Korean MC | 5/2 |

**Smart distractors**: Same-topic preference (+5), length similarity scoring (0-3), loanword overlap penalty (-10). Prevents giving away answers through obvious keyword matches.

#### Beat 4: Mini-Dialogue (20 sec)
3-line chat-bubble exchange — user practices saying learned phrases in a natural A-B-A pattern:
- Line 1: "나" (me) says the focus phrase
- Line 2: Other speaker gives a natural response (from `phrase.response` if present, else `TOPIC_DIALOGUE_RESPONSES` fallback)
- Line 3: "나" says a second learned phrase

This ensures the user always speaks the learned phrases (not the other speaker). Response lines come from `phrase.response` (per-phrase — hand-authored for anchor sessions via #5, AI-generated for personalized sessions via #8) or fall back to `TOPIC_DIALOGUE_RESPONSES` (per-topic generic, e.g., 바리스타: "네, 잠시만요." at a café).

Auto-play TTS chain — lines appear one by one as each audio finishes. Context-aware speaker labels (바리스타 for cafe, 직원 for restaurant/shopping, 기사님 for transit, 상대방 as default). Translation toggle available.

#### Beat 5: The Takeaway (15 sec)
Focus phrase displayed large and beautiful. Context note, optional grammar hint (tap to expand). "Added to your collection."

Two options:
- **한 번 더** (One more) — chains into next session seamlessly
- **컬렉션** (Collection) — see your phrase library

### Navigation (all beats)
Every beat has a persistent top bar with home button (exit to HomeScreen) and settings button. PhraseBeat additionally shows a back button (previous card) and progress bar. Users are never trapped in a session.

---

## Content Structure

### Topics (20 topics, ~60 sessions, ~300 phrases)

Roughly ordered by frequency and survival value:

**TOPIK 1 (Elementary) — Sessions 1-40ish**
1. Café & ordering — 아메리카노 주세요, 여기서 마실게요
2. Convenience store — 봉투 필요하세요?, 영수증 드릴까요?
3. Restaurant & food — 추천 메뉴 있어요?, 덜 맵게 해주세요
4. Transit — 이 역에서 내려야 돼요, 몇 번 출구예요?
5. Shopping — 이거 얼마예요?, 카드 돼요?
6. Daily essentials — 지금 몇 시예요?, 화장실 어디예요?
7. Watching movies/shows — 이 영화 재미있어요, 자막 있어요?
8. Music & concerts — 이 노래 누가 불러요?, 가사가 좋다
9. Expressing feelings — 기분이 좋아요, 좀 피곤해요
10. Weather & small talk — 오늘 날씨 좋다, 비 올 것 같아요

**TOPIK 2 (Intermediate) — Sessions 40-60+**
11. Work & meetings — 회의 시간이 바뀌었어요, 보고서 확인해 주세요
12. Opinions & discussions — 저는 좀 다르게 생각해요, 일리가 있네요
13. K-drama situations — 그런 뜻이 아니었어, 오해하지 마
14. Deeper food culture — 이거 직접 만든 거예요?, 한잔 하실래요?
15. Philosophy & thoughts — 그건 관점의 차이야, 중요한 건 꾸준함이야
16. Health & wellbeing — 요즘 좀 안 좋아요, 스트레칭 해야 돼
17. Rock climbing — 이 루트 어때요?, 홀드가 미끄러워요
18. Travel & directions — 여기서 걸어갈 수 있어요?, 택시 불러 주세요
19. Reading & books — 요즘 뭐 읽어요?, 이 작가 좋아해요
20. Texting & casual chat — ㅋㅋㅋ, ㅇㅇ, 갑자기?

Each session: 1 scene + 1 focus phrase + 5 total phrases + meaning notes + optional grammar hints.

### Interest-Based Session Ordering ("About You")

Users write a freeform brain-dump in Settings about their interests, job, hobbies, goals. The app extracts keywords client-side (no API needed) using `TOPIC_KEYWORDS` maps, builds an interest score per topic, and reorders remaining sessions so higher-interest topics come first. Original session order is the tiebreaker.

**How it works**: `buildInterestMap(aboutText)` → regex keyword matching → `{topic: score}` map. `getOrderedSessions(completedIds, interestMap)` → sort by interest score desc, then by session ID asc.

~~**Previous limitation — no difficulty gating**~~ → **Resolved.** Band-based reordering (Roadmap #2) now sorts within 3 difficulty bands (1-20, 21-40, 41-60) instead of a flat sort. Grammar progression preserved, interests reorder within each tier. Anchor sessions (like 카페 for 주세요/얼마예요) still TODO.

**Unmatched interests**: If someone writes about something with no matching keywords (e.g., "fire hydrants"), the interest map returns null and sessions go in default sequential order. AI-based interest mapping (using Gemini/Claude to interpret freeform text → topic relevance) would handle this — see Roadmap.

### Spaced Repetition

SM-2 algorithm for across-session spacing. Within a session, chunked interleaving prevents trivial immediate recall. WarmupBeat reinforces random past phrases each session.

### Pre-loaded Content (60 sessions, no API required)

The app works completely offline with pre-loaded content. 60 sessions at one per day = 2 months.

### AI-Generated Content (Optional, post-60)

After exhausting pre-loaded sessions, the same AI pipeline generates new ones — same grammar skeleton system, same guardrails. See Roadmap #8 (AI Content Personalization). Not yet implemented.

---

## The Collection

Two-tab view: **표현/Phrases** (phrase library) and **수업/Sessions** (session archive).

**Phrases tab**: Grouped by topic. Each phrase shows Korean (large), English (secondary), mastery indicator (dot color). Tap to expand: context note, grammar note, related phrases, replay button.

**Sessions tab**: Rich cards with full scene text in serif italic, focus phrase highlighted, supporting Korean chips, warm accent border. Designed to feel like a bookshelf of stories. Tap any card to replay that session. Newest first.

---

## Visual Design

### Aesthetic: Literary Academic-Core

**Typography:**
- Headings: Instrument Serif (italic) — scholarly, warm
- Korean: Noto Sans KR at 24-28px minimum — they're the star
- UI: DM Sans — clean labels

**Colors:**
- Background: eggshell (#F5F3EE)
- Text: dark warm (#141210)
- Secondary: taupe
- Accent: warm tone for interactive elements
- Korean text: slightly warmer/bolder than English

**Layout:**
- Single column, max-width 480px (phone-first)
- Generous whitespace, flat hierarchy
- Subtle fade-up animations (0.3s), no bouncing/confetti

### Mobile-First PWA
- Thumb-reachable tap targets
- manifest.json + sw.js for home screen install
- Works offline with pre-loaded content

---

## Technical Architecture

### Single HTML File + sessions.js
- React 18 via CDN + Babel standalone (inline JSX)
- All styles in `<style>`, all logic in `<script type="text/babel">`
- Session data in separate `sessions.js` (loaded as script)
- Companion files: `manifest.json`, `sw.js`, `writing.png` (icon)
- Static hosting: GitHub Pages / Cloudflare Pages — no server, no build step

### State & Data
- All state via `useStorage()` custom hook (localStorage wrapper), all keys prefixed `hgr_`
- Key state: `welcomed`, `completedSessions`, `mastery` (SM-2 data per phrase), `streak`, `lastSessionDate`, `geminiKey`, `apiKey`, `ttsModel`, `ttsVoice`, `aboutYou`
- Session data format: `{id, topic, topicKorean, level, scene, focusIndex, phrases: [{id, korean, english, context, grammar, response?}]}`
  - `response` (optional): Per-phrase dialogue response for the A-B-A mini-dialogue beat. Falls back to `TOPIC_DIALOGUE_RESPONSES[topic]` if absent. Hand-authored for anchor sessions (#5), AI-generated for personalized sessions (#8).
- Export/import JSON backup in Settings

### Components & Flow
- 16 React components: 5 beat components, 5 screen components, exercise components, icons, welcome modal
- Screens: HomeScreen, SessionView, CollectionView (phrases + sessions tabs), LessonPlanView, SettingsView
- PhraseBeat exercise sequence: focus phrase (see→recognize→fillin) → other phrases in pairs (see 2→test 1 each) → focus extras (listen+context) → mixed review (focus + 2 random others × 1 type each). ~16 exercises per session.
- Auto-start: returning users skip HomeScreen, go straight to next session

### TTS (Gemini)
- Gemini TTS API for natural Korean audio (PCM → WAV conversion)
- Voices: Kore (default), Aoede, Charon, Puck, Fenrir
- Prefetch: all 5 phrases pre-fetched when session starts (background, non-blocking)
- Two-tier audio cache: in-memory (instant) + IndexedDB (persists across reloads)
- Fallback chain: Gemini → fallback model → Web Speech API
- `playAudioToEnd()` Promise wrapper enables sequential playback chaining

### API Keys (Optional)
- Gemini key: TTS audio (stored in localStorage)
- Anthropic key: future AI session generation (stored in localStorage, not yet used)
- App fully functional without either key (Web Speech API fallback for TTS)

### Current Implementation Status
All v1 features are built and functional:
- 60 hand-built sessions (5 phrases each, ~300 total) across 20 topics, TOPIK 1 & 2
- 5-beat session flow, 7 exercise types, SM-2 spaced repetition
- Interest-based session ordering, smart distractors, band-based difficulty gating
- Gemini TTS with voice selection, model detection, prefetching, fallback chain
- PWA: manifest + service worker, offline-capable
- Session checkpoints (every 8 cards, persistent save)

---

## What This App Is NOT

- Not a textbook. No grammar drills, no conjugation tables.
- Not Duolingo. No streaks, no hearts, no leaderboards, no owl guilt-tripping you.
- Not a flashcard app. Phrases appear in context, not as isolated cards.
- Not infinitely scrollable. Sessions end. The app knows when to stop.
- Not dependent on internet after first load. Pre-loaded content works offline.

---

## Reference Inspirations

- **Lingodeer**: Exercise variety, chunked pacing, "few minutes and done" pattern
- **King Sejong Institute**: Korean-first with English as bridge, minimal but smart
- **Chess apps**: Progress path visualization (3-4 checkpoints visible, not the whole journey)

---

## Future Roadmap

**STATUS (do not re-verify or re-implement done items):**
- **DONE**: #1 Session Checkpoints, #2 Band-Based Interest Reordering, #3 Grammar Skeletons & Anchor Sessions, #7 TTS Persistence (IndexedDB), #9 Reduce Session Exercise Count
- **NEXT**: #4 AI Interest Mapping → #8 AI Personalization
- **NOT STARTED**: #4-#6, #8
- **MERGED**: Old #3 (Richer Dialogue), old #5 (Richer Content for all 60 sessions), old #9 (Post-60 Generation), and old #10 (AI Personalization) are unified into #8 (AI Content Personalization). The current #5 (Richer Anchor Session Content) is a narrower task — hand-polishing anchor sessions only, not all 60.
- **DESIGN NOTE (not a roadmap item)**: Phrase cards are designed to be screenshot-worthy for stories — this is a visual design philosophy baked into the Collection view, not a feature to build.

### Implementation Order & Dependencies

**Recommended build order**: 3 → 7, 9 (parallel) → 4 → 8 → 6 → 5

**Dependency graph**:
- **#3 (Grammar Skeletons) blocks #8 (AI Personalization).** The AI needs to know the grammar points, key vocab, and difficulty constraints per session before it can generate anything. Skeletons ARE the prompt guardrails.
- **#3 also identifies anchor sessions**, which defines the scope of #8 (AI only fires on non-anchor sessions).
- **#4 (AI Interest Mapping) blocks #8.** The AI needs to know the user's interests before it can re-skin sessions.
- **#4 partially blocks #6.** The progress UI needs to know the session plan. If AI reorders sessions, the UI must handle that. But a v1 can be built without AI and upgraded later.
- **#7 is fully independent.** No dependencies. Can be done anytime, in parallel with anything.
- **#9 is fully independent.** Exercise count reduction. No dependencies. Can be done in parallel with #3 and #7.
- **#5 is fully independent.** Content enrichment for anchor sessions. No code dependencies.

**Why this order**:
1. **#3 first** — foundational data extraction, no code risk, defines the entire AI generation contract
2. **#7 and #9 in parallel** — both fully independent. #7 improves offline experience, #9 tightens session pacing. Zero risk to anything.
3. **#4 next** — replace regex interest mapping with LLM call, small contained change
4. **#8 next** — the unified AI system. #3 provides guardrails, #4 provides interests, now build the generation prompt and pipeline. Includes dialogue responses, scene generation, and post-60 generation as outputs of one system.
5. **#6 after #8** — by now session structure is known (with or without AI), so the UI reflects reality
6. **#5 whenever** — hand-polish anchor session content, benefits from everything above being settled

**Anti-blocking principle**: Never replace, always layer. AI-generated sessions use the exact same data format as hand-built ones. AI fields are optional with fallbacks to hand-built defaults. Anchor sessions are untouchable. Any item can ship independently.

### Key Architectural Insight (applies across multiple items)

**Grammar is the spine, topics are the skin.** The 60 sessions have a fixed grammar progression. Interest-based reordering shuffles which *topic* delivers a grammar point, but the grammar difficulty curve stays linear. You're not reordering grammar — you're reordering the thematic wrapping around it.

**Anchor sessions exist.** Some sessions (like 카페) are pinned because the grammar+topic pairing is essential. Even if someone's interests are all about K-drama, they still get café early because 주세요, 얼마예요, 있어요 are foundational. Reordering only applies where topics are interchangeable at the same grammar band.

This insight connects #2 (band-based reordering), #3 (grammar skeletons), #4 (AI interest mapping), #6 (progress display), and #8 (AI content personalization).

### ~~1. Session Checkpoints (Mini-Milestones) — IMPLEMENTED ✓~~
~~Sessions currently run 15-32 exercises straight. For users with only 1-2 minutes, this is too long to feel "complete."~~

**Status: Done.** Every 8 cards, the app hits a real checkpoint — progress is saved to localStorage. If the user closes at card 8, they resume at card 9. Minimal UI, no fake encouragement. Persistent save points that make 1-minute sessions viable.

### ~~2. Band-Based Interest Reordering (Difficulty Gating) — IMPLEMENTED ✓~~

**Status: Done.** `getOrderedSessions()` divides sessions into 3 difficulty bands (1-20, 21-40, 41-60) and sorts by interest score within each band. Earlier bands complete before later ones. Preserves grammar progression while letting interests influence order within each tier.

**Still TODO — anchor sessions**: Sessions where the grammar+topic pairing is essential (e.g., 카페 for 주세요/얼마예요/있어요) should stay pinned regardless of interests. Not yet implemented — currently all sessions within a band are reorderable.

**Connects to**: #4 (AI interest mapping feeds the reordering), #6 (progress display is per-band), #8 (personalized sessions need bands to slot content correctly). See Key Architectural Insight for how bands enable the broader system.

### 3. Grammar Skeletons & Anchor Sessions

**What this is**: Extract the topic-agnostic learning contract for every session, and identify which sessions are anchors (topic + grammar naturally paired, no AI needed).

**Grammar skeleton per session** — each session's skeleton defines:
- **Grammar point(s)**: What grammar structure this session teaches (e.g., -ㄹ 거예요 for future intent, -고 싶다 for desire)
- **Key vocabulary**: Words that MUST appear regardless of topic (e.g., "dream" 꿈, "practice" 연습하다 for a session on desire/goals)
- **TOPIK level constraint**: Which TOPIK level's vocab and grammar list this session draws from. Publicly available TOPIK proficiency standards serve as guardrails so the AI doesn't accidentally use TOPIK 4 grammar in a band 1 session.
- **Phrase pattern requirements**: How many phrases, what exercise types they must support, what dialogue shape they need (including per-phrase `response` fields for the A-B-A dialogue beat)

**Example**: A session teaching -고 싶다 (want to) at TOPIK 1 level. The skeleton says: "must cover desire/want grammar, must include vocab for goals and activities, phrases must be TOPIK 1 appropriate." For a climber, the AI generates "볼더링 챔피언이 되고 싶어요" (I want to become a bouldering champion). For a foodie, "한식 요리를 배우고 싶어요" (I want to learn Korean cooking). Same grammar, same difficulty, different skin.

**Anchor sessions** — sessions where topic and grammar are a natural, essential pair:
- 카페 + ordering grammar (주세요, 얼마예요, 있어요) — you can't teach ordering without a café/shop context
- 길찾기 + location grammar (어디예요, 어떻게 가요) — direction grammar needs a real place
- These are hand-built, hand-polished, and untouched by AI. They ship as-is.

**Anchor cap**: Anchors should be identified by genuine need, not by quota. Sweet spot: 40-50% anchored, 50-60% personalizable. If anchors exceed ~50%, the AI pipeline effort becomes disproportionate to the payoff.

**Why this is foundational**: The grammar skeleton IS the prompt contract for AI generation. Without it, the AI has no guardrails. With it, the AI's job is narrow and well-defined: "fill this skeleton with content themed around [user interest], using only [TOPIK N] vocabulary." This is exactly the kind of constrained generation LLMs are reliable at.

**Implementation**: Pure data extraction — go through all 60 sessions, codify what grammar and vocab each one teaches, tag which are anchors. No code changes. This is the single task that unblocks all AI work.

**Feasibility & risk**: High feasibility — the grammar points already exist implicitly in every session, we're just making them explicit. The main risk is skeleton quality: too loose (e.g., "teach some grammar") and the AI goes off-rails; too tight (e.g., "must use exactly these 5 words in this order") and the output is rigid and boring. The right level is: specify the grammar pattern and 2-3 must-have vocab items, leave the rest to the AI within TOPIK level constraints. TOPIK proficiency standards (publicly available) serve as the external reference — we don't need to invent the difficulty criteria.

**Connects to**: #8 (provides the generation contract), #4 (anchor sessions are excluded from reordering), #2 (anchor sessions stay pinned within bands).

### 4. AI-Powered Interest Mapping
**What it replaces**: The regex keyword matching in `buildInterestMap()`. Right now, if you type "I like bouldering" it matches because "bouldering" is in the climbing keywords list. If you type "I enjoy vertical problem-solving on rocks" it matches nothing.

**What it does**: Sends your About You text to an LLM (one-time API call) and gets back topic relevance scores. Small, contained change — replaces the regex matching logic, same output format (`{topic: score}` map), same downstream behavior.

**Why it matters**: This is the input layer for #2 (band-based reordering) and #8 (AI personalization). Better interest understanding → better session ordering → better personalization.

**Connects to**: #2 (provides the interest scores that band-based reordering uses), #6 (ordering affects what shows in progress view), #8 (AI personalization needs accurate interest mapping as its first step).

### 5. Richer Anchor Session Content
Hand-polish the anchor sessions: per-phrase `response` fields for natural dialogue (replacing generic `TOPIC_DIALOGUE_RESPONSES`), grammar examples in context, vocab reinforcement from multiple angles. The phrase is still the atom, but grammar + vocab repetition builds fluency. For non-anchor sessions, this richness comes from AI generation (#8) — so this task only covers the hand-built anchors.

**Scope**: Medium — content authoring for anchor sessions only (~25-30 sessions), not all 60. The `DialogueBeat` component already reads `phrase.response` with fallback to `TOPIC_DIALOGUE_RESPONSES`, so no code change needed.

### 6. Learning Journey / Progress Path

**The problem**: Showing "Session 12/60" is overwhelming — it emphasizes how much is left, not how much you've done. And we don't have a hard cap at 60 anyway (AI generation could extend it).

**The fix — chapter-based framing**:
- Instead of "12/60", show **"Session 12 (1/3)"** — meaning session 12, first of 3 sessions in this chapter/topic. The denominator is the number of sessions *in the current level or topic group*, not the total.
- **Chapter names and topic context** instead of raw numbers. "카페 · Session 2 of 3" not "Session 5/60".
- **Single-session topics** just show "Session 15 · 클라이밍" — no "1 of 1". The "X of Y" framing only matters when there's a multi-session chapter.

**Grammar point always visible**: On the HomeScreen next-session card, show the grammar focus (e.g., "-ㄹ게요 = soft promise" or "해 주세요 = polite request"). This is more important than the topic name because grammar is what's actually progressing.

**Upcoming visibility**: Show the current session prominently, plus a **peek at the next chapter/session** coming after. Chess app pattern — 3-4 upcoming checkpoints visible, not the whole journey. Minimal and editorial, no cartoon trains.

**Important**: The session ordering from #4 (AI interest mapping) feeds directly into what's displayed here. The progress view needs to reflect the AI-reordered plan, not just the raw session IDs.

**Note**: This needs a discussion before implementation. The exact framing (per-level grouping vs per-topic chapters) depends on how bands (#2) are structured and how AI reordering (#4) reshuffles things.

**Connects to**: #2 (bands define the levels/chapters), #4 (AI ordering determines what shows up next).

### 7. TTS Persistence (IndexedDB)
Audio cache currently dies on page reload — in-memory only. Persist to IndexedDB for true offline TTS. This is a **medium** effort — storage layer change, cache invalidation logic, but no UI changes.

### 8. AI Content Personalization (Unified System)

> **Note**: This merges old items #3 (Richer Dialogue), #5 (Richer Content), #9 (Post-60 Generation), and #10 (AI Personalization) into one coherent system. The app works fine without it — the 60 hand-built sessions are the product; this is an enhancement layer.

**The core model**: Grammar skeletons (#3) define what must be learned. AI's only job is to dress each skeleton in the user's interest. It doesn't invent curriculum, decide difficulty, or touch anchor sessions. It re-skins.

**Two-tier content**:
- **Anchor tier (no AI, no API, always works)**: Hand-built sessions where topic + grammar are naturally paired (café + ordering, transit + directions). These ship as-is and are never modified. Someone who never touches "About You" gets the full 60-session experience with anchors in their natural form and non-anchor sessions in their default topic.
- **Personalized tier (opt-in, API-dependent)**: For non-anchor sessions, the AI takes the grammar skeleton + user interests and generates themed content. Session 12 still teaches -고 싶다, but for a climber it uses bouldering scenarios, for a foodie it uses cooking scenarios.

**What the AI generates per session** (all within the skeleton's guardrails):
1. Scene text (2-3 sentences, grounded in user's interest)
2. 5 phrases that hit the required grammar points and key vocab
3. Per-phrase `response` fields for natural A-B-A dialogue
4. Context notes and optional grammar hints
5. All output in the exact same data format as hand-built sessions

**Guardrails — how the AI stays in bounds**:
- **Grammar skeleton**: Must hit the specified grammar point(s) and key vocab. Non-negotiable.
- **TOPIK level fence**: Each session's skeleton specifies the TOPIK level. The AI prompt includes the relevant TOPIK vocab/grammar reference list. The AI cannot use structures or vocabulary above that level.
- **Difficulty bands**: Sessions are slotted into bands (1-20, 21-40, 41-60). The AI respects band boundaries — a band 1 session stays elementary even if the user's interest is complex.
- **Quality gate**: If the user's interest doesn't fit naturally with a session's grammar point, skip it — fall back to the default hand-built session rather than forcing an awkward personalization. A bad fit is worse than no personalization.

**Batch generation**: Generate 3-5 sessions per API call, not all at once. Smaller batches mean tighter prompts, better quality, and easier debugging. The prompt can include the previous batch's output as context for consistency.

**What the AI does NOT do**:
- Touch anchor sessions. Ever.
- Override TOPIK level constraints. A band 1 session stays band 1.
- Invent grammar points not in the skeleton. It fills the template, it doesn't redesign the curriculum.
- Generate silently. The user sees a loading state and understands something substantial is happening.

**Post-60 generation**: After exhausting the 60-session curriculum, the same system generates new sessions. The grammar skeletons extend beyond 60 (TOPIK 3-4 patterns), and the AI fills them with interest-themed content. This is not a separate feature — it's the same pipeline with new skeletons.

**Cost & model guidance (estimated)**:
- For non-anchor sessions only (~30-35 sessions), not all 60
- **Gemini Flash**: Effectively free. Good first choice — constrained Korean phrase generation is well within its capability.
- **Claude Haiku 4.5**: ~$0.05-0.06 per run (fewer sessions than original estimate). Solid fallback.
- **Claude Sonnet 4.6**: ~$0.18-0.20 per run. Useful for quality-checking edge cases.
- **Time**: 10-20 seconds with batch parallelism. Reasonable for a one-time "Generate My Plan" action.
- Korean learning phrases are extremely well-represented in all major model training data. The AI isn't inventing Korean — it's recombining known phrases into new topical contexts within strict guardrails.

**Feasibility**: High. This is constrained generation — the AI fills a well-defined template, not open-ended content creation. The narrow scope (grammar point + TOPIK level + user interest → 5 phrases + scene + dialogue) is exactly where LLMs are reliable. Main risks: (1) skeleton quality from #3 determines output quality — garbage in, garbage out; (2) some interest + grammar combos will be awkward fits — the quality gate handles this by falling back to defaults rather than forcing it.

**Connects to**: #3 (grammar skeletons define the generation contract), #4 (interest mapping provides the topic), #2 (bands determine difficulty slotting), #6 (progress display reflects personalized plan).

### 9. Reduce Session Exercise Count

**The problem**: Sessions currently generate ~17-22 exercises. Even with checkpoints every 8 cards, 22 is a lot — it pushes past the "2-5 minute sandwich" feel, especially for sessions with 5 phrases where the mixed review phase multiplies.

**The fix**: Trim the exercise generation in PhraseBeat. The mixed review phase (all phrases × 4 exercise types) is where the count balloons. Options: reduce the mixed review to 2-3 types per phrase instead of 4, or cap total exercises per session at ~14-16. The focus phrase should still get full coverage (see → recognize → fill-in + listen + context), but supporting phrases can get fewer reps in the mixed phase without hurting retention — SM-2 handles long-term spacing anyway.

**Target**: ~14-16 exercises per session. Still enough variety to feel like a complete session, short enough to finish comfortably in 3-4 minutes.

**Fully independent.** No dependencies on any other roadmap item. Can be done in parallel with #3 and #7.

---

## Session Review Notes (2026-03-10)

Context from first live testing session. These observations inform future priorities.

### What works well
- **Session exercise flow is solid.** 3 exercises on the focus phrase → paired introduction of new phrases → mixed review. The chunked interleaving is effective and doesn't feel repetitive in practice.
- **Warmup beat is already active.** Returning sessions start with recognize/recall questions (not passive "see" cards), matching the ADHD-first principle.
- **Exercise variety within a session is good.** 6 types (see, recognize, recall, fillin, listen, context) with smart distractors keeps it engaging. However, ~17-22 exercises per session is too many — needs trimming (see Roadmap #9).
- **The "see" (SA) exercises are fine.** They're spaced out between active exercises, not clustered. For the first-ever session, starting with SA is appropriate since there's nothing to warm up with.

### What was fixed
- **Dialogue speaker assignment was backwards.** The old B-A-B pattern assigned learned phrases to the other speaker (e.g., barista saying "얼마예요?" instead of the customer). Fixed to A-B-A: user says learned phrases, other speaker gives a natural response.

### What to address later (not blocking)
- **Dialogue is only 3 lines.** Should be at least 5-7 lines for a more natural conversational flow. The A-B-A pattern works but feels too short.
- ~~**No difficulty gating on interest reordering.** A user interested in philosophy could get TOPIK 2 sessions before finishing TOPIK 1 basics. Band-based reordering is Roadmap #2.~~ → **Resolved.** Band-based reordering implemented.
- **Interest topic map is regex-only.** Works for common keywords but misses novel phrasing. AI-based mapping is Roadmap #4.
