---
title: "Evals Are the New Unit Tests"
description: "If you are building with LLMs and you cannot measure quality, you are not engineering, you are gambling. Evals are the unglamorous work that separates a demo from a product."
published: true
cover: /images/covers/evals-are-the-new-unit-tests.png
published_at: 2025-06-17T09:00:00.000Z
tags: AI, Testing, LLMs
---

Here is a question I ask every team building on LLMs: when you change a prompt or swap a model, how do you know if things got better or worse? Too often the answer is a shrug and "it felt better in the demo." That is not engineering. That is gambling with extra steps.

The fix is evals, and they are the most important unglamorous work in AI right now.

## You cannot ship what you cannot measure

We accepted this for normal software a long time ago. You do not refactor a payment system and ship it because it "felt fine." You have tests. LLM features need the same thing, adapted to a world where the output is not a single correct value but a range of acceptable ones.

An eval is just that: a set of representative inputs, and a way to grade the outputs. Without it, every prompt tweak is a vibe, and you are flying blind into production.

## Build the dataset first

The highest-leverage thing you can do is collect real examples. Not the three you tried in the playground, but a proper set drawn from actual usage, including the ugly cases: the ambiguous question, the adversarial input, the one that broke last month. This dataset is worth more than any clever prompt. It is the thing that tells you the truth.

## Grading is the hard part

Sometimes grading is easy, because the output is structured and you can check it exactly. Often it is not, and you need a rubric: is the answer grounded in the provided context, is it in the right format, did it refuse when it should have. For the fuzzy cases you can use a model to grade against a rubric, which works better than people expect, as long as you spot-check the grader against human judgment.

This is the same discipline I built into GuideScript. If the model is a component in your system, you need to be able to test that component like any other.

## Put it in the pipeline

The payoff comes when evals stop being a one-off and become part of how you ship. Change a prompt, run the evals, see the score move. Regression on your dataset should block a release the same way a failing unit test does. Then improving quality becomes an engineering loop with a number attached, instead of an argument about whose intuition is better.

Evals are tedious to build and boring to maintain. They are also the single clearest line between teams shipping real AI products and teams shipping impressive demos that quietly fall apart.
