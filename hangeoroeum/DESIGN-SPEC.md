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
The app helps, it doesn't withhold. English meanings are generous and always available — just not shoved in your face.

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
- Line 2: Other speaker gives a natural topic-appropriate response (from `TOPIC_DIALOGUE_RESPONSES` map)
- Line 3: "나" says a second learned phrase

This ensures the user always speaks the learned phrases (not the other speaker). Response lines are short, natural Korean reactions per topic (e.g., 바리스타: "네, 잠시만요." at a café, 직원: "네, 알겠습니다." at a restaurant).

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

**Current limitation — no difficulty gating**: Interest reordering is a flat sort across ALL remaining sessions. If a user's interests match harder TOPIK 2 topics (e.g., climbing, philosophy), those sessions get prioritized over foundational TOPIK 1 content. This needs band-based reordering (reorder within difficulty tiers, not across them) — see Roadmap.

**Unmatched interests**: If someone writes about something with no matching keywords (e.g., "fire hydrants"), the interest map returns null and sessions go in default sequential order. AI-based interest mapping (using Gemini/Claude to interpret freeform text → topic relevance) would handle this — see Roadmap.

### Spaced Repetition

SM-2 algorithm for across-session spacing. Within a session, chunked interleaving prevents trivial immediate recall. WarmupBeat reinforces random past phrases each session.

### Pre-loaded Content (60 sessions, no API required)

The app works completely offline with pre-loaded content. 60 sessions at one per day = 2 months.

### AI-Generated Content (Optional, post-60)

After exhausting pre-loaded sessions, can generate new ones using Anthropic API key. Not yet implemented — see Roadmap.

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

### Data Storage
- localStorage for all state (progress, mastery, settings, about-you)
- All keys prefixed `hgr_`
- Export/import JSON backup in Settings

### TTS (Gemini)
- Gemini TTS API for natural Korean audio (PCM → WAV conversion)
- Voices: Kore (default), Aoede, Charon, Puck, Fenrir
- Prefetch: all 5 phrases pre-fetched when session starts (background, non-blocking)
- In-memory audio cache per page load
- Fallback chain: Gemini → fallback model → Web Speech API
- `playAudioToEnd()` Promise wrapper enables sequential playback chaining

### API Keys (Optional)
- Gemini key: TTS audio (stored in localStorage)
- Anthropic key: future AI session generation (stored in localStorage)
- App fully functional without either key (Web Speech API fallback for TTS)

### Hosting
- Static files only — GitHub Pages, Cloudflare Pages, or similar
- No server, no build step

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

Ordered by priority. Items 1-2 are next-session targets. Items 3-5 are medium-term. Items 6-9 are longer-term. Item 10 is the big architectural bet.

### 1. Session Checkpoints (Mini-Milestones) — HIGH PRIORITY
Sessions currently run 15-32 exercises straight. For users with only 1-2 minutes, this is too long to feel "complete."

**Fix**: Every 8 cards, the app hits a **real checkpoint** — progress is **saved to localStorage** at that point. If the user closes the app at card 8, they resume at card 9, not card 1. This is not an affirmation screen or a "great job!" moment. It's a persistent save point that makes 1-minute sessions viable.

The checkpoint UI should be minimal — just a brief visual pause that signals "your progress is saved, you can stop here or keep going." No fake encouragement. The value is practical: shorter commitment windows without losing progress.

### 2. Band-Based Interest Reordering (Difficulty Gating) — HIGH PRIORITY
Interest-based session reordering currently ignores difficulty. Fix: divide sessions into difficulty bands (e.g., 1-20, 21-40, 41-60) and only reorder within each band. Complete all of band 1 (in your preferred interest order) before moving to band 2. This preserves easy→hard progression while letting interests influence order within each tier.

### 3. Richer Dialogue Data
Current dialogue uses a single generic response per topic (`TOPIC_DIALOGUE_RESPONSES`). Future: add proper dialogue pairs to session data — each phrase could have a `responseFrom` field indicating a natural reply from the other speaker. This would enable realistic multi-turn conversations instead of the current A → generic-B → A pattern. Could also enable dialogue-based exercises (fill in what the barista would say, etc.).

### 4. AI-Powered Interest Mapping
Current interest extraction uses hardcoded keyword lists — novel interests (not in `TOPIC_KEYWORDS`) get no matches. Fix: use Gemini/Claude to interpret freeform "About You" text and map it to topic relevance scores. Would handle any interest, not just pre-mapped ones.

### 5. Richer Session Content
Grammar examples in context (not drills). Vocab reinforcement from multiple angles. Multiple practice patterns around the same grammar point. The phrase is still the atom, but grammar + vocab repetition builds fluency.

### 6. Learning Journey / Progress Path
Show where you are in a non-overwhelming way. Chess app pattern: 3-4 upcoming checkpoints visible, scrollable for the rest. Minimal and editorial, no cartoon trains.

### 7. TTS Persistence
Persist audio to IndexedDB for true offline playback. Current: in-memory cache only, lost on page reload.

### 8. Social / Share
Phrase cards designed to be screenshot-worthy for stories. Future: dedicated share/export feature for phrase cards.

### 9. AI Session Generation (Post-60)
After 60 pre-loaded sessions, generate new ones via Anthropic/Gemini API. Same format (scene + 5 phrases + focus phrase). Personalized to interest map and weak areas from mastery data. Depends on getting the first 60 sessions solid first.

### 10. AI-Personalized Sessions (The Big One)

> **Note**: This is a directional idea, not a committed spec. If this approach doesn't pan out during implementation, it should not block the rest of the roadmap — the app works fine without it. The 60 hand-built sessions are the product; this is an enhancement layer. Try it, and if it works, the context below will be very useful for implementation.

**This replaces the old "Decouple Topics from Difficulty" idea.** Manually creating every topic at every difficulty level would be too heavy and brittle. Instead:

**The core insight**: The grammar curriculum is the skeleton. The topical content is just skin. AI can re-skin sessions to match any interest without touching the underlying structure.

**Two-tier content model**:
- **Default tier (no AI, no API, always works)**: The 60 hand-built sessions ship with the app. Someone who never touches "About You" gets a complete, functional Korean learning experience. These sessions are never deleted or hidden.
- **Personalized tier (opt-in, API-dependent)**: When a user fills out their About You section and hits a **"Generate My Plan"** button, an API call fires. The AI reads their interests, looks at all the grammar points and phrase patterns across the curriculum, and generates new personalized session content. Session 12 still teaches the same grammar pattern, but for a climber it uses mountain vocabulary, for a foodie it uses restaurant vocabulary.

**What the AI does**:
1. Reads the About You text + the full grammar/phrase curriculum
2. Maps interests to topical vocabulary and scenarios
3. Generates personalized scenes, phrases, and context — all fitted to the existing session structure
4. Preserves all essential/survival content (ordering food, asking directions, etc.) regardless of interests
5. Populates the personalized session plan

**What it does NOT do**:
- Override essentials. Core phrases ("화장실 어디예요?", "이거 얼마예요?") stay no matter what your interests are.
- Replace the default content. Personalized sessions are layered alongside, not instead of.
- Work silently. The generation takes real time and real API credits. The user should see a loading state and understand that something substantial is happening.

**Why this is better than manual topic×difficulty matrices**: Any language is ultimately phrases + meanings + cultural context. AI excels at generating contextually appropriate language content. Instead of hand-authoring 60×N variants, one AI generation pass handles infinite interest combinations. The framework just needs sessions structured so the topical layer is cleanly replaceable.

**This is a large effort**, but it makes the app universally personalizable without exponential content authoring. Once built, it's more stable than maintaining hundreds of manual session variants.

**Cost & model guidance (estimated)**:
- ~48K tokens total for a full 60-session personalization run (500 input + 300 output per session)
- **Gemini Flash**: Effectively free. Good first choice — Korean phrases are well within its capability since this is pattern-filling, not heavy reasoning.
- **Claude Haiku 4.5**: ~$0.10 per run. Solid fallback if Gemini quality isn't sufficient.
- **Claude Sonnet 4.6**: ~$0.36 per run. Overkill for bulk generation, but useful for quality-checking or edge cases.
- **Time**: 15-30 seconds sequential, 5-10 seconds with parallel batching. Reasonable for a one-time "Generate My Plan" action behind a loading screen.
- Korean learning phrases are extremely well-represented in all major model training data. The AI isn't inventing Korean — it's recombining known phrases into new topical contexts. Gap-filling (cultural nuance, natural phrasing, formality levels) is where it adds real value.

---

## Session Review Notes (2026-03-10)

Context from first live testing session. These observations inform future priorities.

### What works well
- **Session exercise flow is solid.** 3 exercises on the focus phrase → paired introduction of new phrases → mixed review. The chunked interleaving is effective and doesn't feel repetitive in practice.
- **Warmup beat is already active.** Returning sessions start with recognize/recall questions (not passive "see" cards), matching the ADHD-first principle.
- **Exercise variety within a session is good.** ~17-22 exercises across 6 types (see, recognize, recall, fillin, listen, context) with smart distractors keeps it engaging.
- **The "see" (SA) exercises are fine.** They're spaced out between active exercises, not clustered. For the first-ever session, starting with SA is appropriate since there's nothing to warm up with.

### What was fixed
- **Dialogue speaker assignment was backwards.** The old B-A-B pattern assigned learned phrases to the other speaker (e.g., barista saying "얼마예요?" instead of the customer). Fixed to A-B-A: user says learned phrases, other speaker gives a natural response.

### What to address later (not blocking)
- **32 cards per session is on the high side.** Not a problem for motivated sessions, but needs session checkpoints (see Roadmap #1) for users who only have 1 minute.
- **No difficulty gating on interest reordering.** A user interested in philosophy could get TOPIK 2 sessions before finishing TOPIK 1 basics. Band-based reordering is Roadmap #2.
- **Interest topic map is regex-only.** Works for common keywords but misses novel phrasing. AI-based mapping is Roadmap #4.
