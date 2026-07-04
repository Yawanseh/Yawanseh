---
title: "Prompt Engineering Is Just Engineering"
description: "The title makes it sound like a new discipline. It is mostly the old ones: specification, testing, and iteration. What building GuideScript taught me about talking to models."
published: true
cover: /images/covers/prompt-engineering-is-just-engineering.png
published_at: 2023-05-16T09:00:00.000Z
tags: AI, LLMs, Engineering
---

There is a lot of talk right now about prompt engineering as if it were a mysterious new craft, full of magic words and secret incantations. I have spent the last few months building on top of these models, and I want to push back on that framing.

Prompt engineering is just engineering. The parts that actually work are the parts we already knew.

## A prompt is a specification

When you write a prompt, you are writing a specification for a system that is fuzzy and non-deterministic. That is uncomfortable for engineers who are used to exact behavior. But the discipline is the same one we have always used for specs: be precise, remove ambiguity, state your assumptions, and give examples.

Most bad prompts are not bad because they lack a magic phrase. They are bad because they are vague, exactly like a bad ticket or a bad API contract.

## Treat prompts like code

If a prompt is part of your product, it deserves the same treatment as code. Put it in version control. Review changes to it. And most importantly, test it. A prompt that works on the three examples you tried in the playground will fail in ways you cannot imagine once real users hit it.

The moment you have more than a handful of prompts, you need a system around them, not a folder of strings. That is the problem I kept running into, and it is why I started building GuideScript. I did not want clever prompts. I wanted prompts I could reason about, constrain, and trust.

## The real work is the guardrails

The interesting engineering is not the prompt itself. It is everything around it. Validating that the output matches the shape you expected. Handling the case where the model returns nonsense. Deciding what happens when it is confidently wrong. Keeping cost and latency in check.

That is where the reliability comes from, and none of it is new. It is input validation, error handling, and testing, wearing a new hat.

## Stop chasing magic words

The teams that will build good products on these models are not the ones hunting for the perfect phrasing. They are the ones treating the model as one unreliable component in a system they engineer carefully around. Give it a clear spec, test it like you mean it, and wrap it in guardrails.

That is not a new discipline. It is the one you already have.
