---
title: "Shipping AI Agents Without Embarrassing Yourself"
description: "Demos are easy. Agents in production are a different animal. What breaks, and the boring engineering that makes them trustworthy enough to put in front of real users."
published: true
cover: /images/covers/shipping-ai-agents-without-embarrassing-yourself.png
published_at: 2024-12-03T09:00:00.000Z
tags: AI, Agents, LLMs
---

There is a huge gap between an agent demo and an agent in production. The demo takes an afternoon and gets applause. The production version takes months and mostly consists of stopping the thing from doing something stupid. That gap is where the real engineering lives.

## What an agent actually is

Strip the hype away and an agent is a loop. A model looks at a goal, decides on an action, calls a tool, reads the result, and decides again, until it thinks it is done. That is powerful, because the model can chain steps together. It is also exactly why it breaks in ways a single model call never does.

## The failure modes are predictable

Once you run agents against real work, the same problems show up every time. They loop, repeating the same failing action forever. They call tools with malformed arguments. They wander off the task. And because each step costs a model call, a confused agent burns money and time while it fails.

None of this shows up in the demo, because the demo path is happy and short. Production is neither.

## Constrain the tool surface

The single most useful thing you can do is give the agent fewer, safer tools. Every tool you expose is a way for it to do something wrong. A tool that can only read is safer than one that can write. A tool with a narrow, validated interface is safer than a general one. Design the tools as if a fast, confident, occasionally careless junior will call them, because that is exactly what is happening.

## Make it observable and bounded

You cannot trust what you cannot see. Log every step: the reasoning, the tool call, the result. When an agent does something strange, you need to replay exactly what it saw and decided. Put hard limits on steps and spend so a confused run fails cheaply instead of running all night. And for anything that touches the real world in a way that is hard to undo, keep a human in the loop.

## Start narrow

The teams that ship agents that work do not start with a general assistant that can do anything. They start with one workflow, tightly scoped, heavily instrumented, with evals that tell them when a change makes it worse. Then they widen slowly. Boring, narrow, and observable beats broad and magical every time. Broad and magical is a demo. Narrow and boring is a product.
