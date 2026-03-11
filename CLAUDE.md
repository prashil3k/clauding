# Hangeoroeum (한걸음) — Korean Learning App

## Project
- Single HTML file + sessions.js, React 18 via CDN + Babel standalone
- No build step, no server — static files only (GitHub Pages / Cloudflare Pages)
- Design spec: `hangeoroeum/DESIGN-SPEC.md` (source of truth for all design decisions)

## Current State
- Design spec is largely complete (principles, session flow, content structure, visual design, tech arch, roadmap)
- No code written yet — still in design phase

## Key Context
- 60 hand-built sessions, 1 per day, 2-5 min each
- Phrase-first learning (not word-by-word), no romanization, Korean-first UI
- TTS via Gemini API, optional Anthropic API key for future AI features
- Roadmap item #10 (AI-personalized sessions) is directional/non-blocking — try it, don't treat it as a hard requirement
- localStorage for all state, prefixed `hgr_`
