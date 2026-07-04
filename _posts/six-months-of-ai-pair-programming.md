---
title: "Six Months of AI Pair Programming"
description: "Copilot and Cursor in daily use across the team. Where they earned their keep, where they cost us, and how I would tell a team to adopt them without losing the plot."
published: true
cover: /images/covers/six-months-of-ai-pair-programming.png
published_at: 2024-08-20T09:00:00.000Z
tags: AI, Developer Productivity, Engineering
---

For the last six months, AI coding assistants have been part of how my team works. Not an experiment on the side, the real daily workflow. Here is the honest ledger: where they helped, where they hurt, and what I would tell another team.

## Where they earned their keep

The wins are real and they are boring, which is exactly why they matter. Boilerplate that used to take twenty minutes now takes two. Writing the first draft of tests. Getting up to speed on an unfamiliar API without leaving the editor. Translating a function from one language to another. Filling in the tedious middle of a task once you have decided the shape.

For that class of work, these tools are a genuine speed-up, and the team feels it.

## Where they cost us

The costs are subtler and easy to miss. The assistant is excellent at producing code that looks right. Sometimes it is right. Sometimes it has a subtle bug, an off-by-one, a wrong assumption about an edge case, wrapped in clean, confident syntax. That kind of bug is harder to catch than obvious bad code, because your guard is down.

It is also bad at the things that matter most: architecture, the tradeoff nobody wrote down, the reason the weird old code is weird. It will happily suggest the obvious thing that the last engineer already tried and abandoned for a good reason.

## Review discipline is the whole story

The teams that get this right are the ones that did not lower their review bar. Every line still has to be understood and owned by a human, whether a person typed it or accepted it. The moment "the AI wrote it" becomes an excuse for code nobody understands, you have traded short-term speed for long-term debt.

I worry most about juniors here. The tool can carry them past the point where they should have struggled and learned. So I ask my newer engineers to be able to explain everything they ship, and to turn the assistant off sometimes on purpose.

## The verdict

Net positive, clearly, with guardrails. Use them for the boring middle of the work. Keep humans firmly in charge of the decisions and the review. Treat the output as a fast draft from a confident junior, not as an answer. Adopt them that way and your team gets faster. Adopt them carelessly and you just generate technical debt at a higher rate.
