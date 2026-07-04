---
title: "MCP and the Case for Boring, Standard Tools"
description: "Every AI app was reinventing how it connects models to tools. The Model Context Protocol is the boring standard that fixes it, and boring standards are how ecosystems grow up."
published: true
cover: /images/covers/mcp-and-the-case-for-boring-standard-tools.png
published_at: 2025-10-28T09:00:00.000Z
tags: AI, MCP, Tooling
---

For a while, every team building AI features was solving the same problem in a slightly different way: how do you connect a model to your tools and data? Everyone wrote their own glue. Every integration was bespoke. It worked, but it was the kind of duplicated effort that tells you a standard is missing.

The Model Context Protocol is that standard, and I think it matters more than the hype around it suggests, precisely because it is boring.

## The problem it solves

Think about it as a math problem. You have some number of AI applications, and some number of tools and data sources you want them to reach. Without a standard, connecting them is an N times M problem: every app needs a custom integration for every tool. That does not scale, and it means everyone rebuilds the same connectors over and over.

MCP turns that into an N plus M problem. A tool exposes itself once, through a standard protocol. An app speaks that protocol once. Now any compliant app can talk to any compliant tool, without a bespoke bridge for each pair. That is the entire value, and it is enormous.

## Boring standards are how ecosystems grow up

We have seen this movie before. HTTP for the web. The language server protocol for editors. Before LSP, every editor needed custom support for every language, which is the same N times M mess. After it, a language implemented support once and worked everywhere. The result was an explosion of tooling, because the integration cost collapsed.

Standards are not exciting. They do not demo well. But they are the thing that turns a pile of incompatible experiments into an ecosystem where work compounds.

## What it means for building

If you are building AI products, this changes your calculus. Instead of writing a one-off integration that only your app can use, you expose your capability through the protocol and it becomes available to a whole ecosystem of clients. Instead of being locked to one vendor's way of doing tools, you build against a standard that many of them speak.

I have grown suspicious of clever, proprietary approaches to problems that are really integration problems. The clever version wins the demo. The boring standard wins the decade. MCP is the boring standard, and I would bet on boring.
