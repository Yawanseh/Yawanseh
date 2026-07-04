---
title: "Building the Ski Dubai App with React Native"
description: "How we chose React Native for the Ski Dubai app at Majid Al Futtaim, what worked, what didn't, and what I'd tell another web-heavy team weighing the same call."
published: true
cover: /images/covers/react-native-journey.png
published_at: 2023-12-29T10:00:00.000Z
tags: React Native, Mobile Development, Ski Dubai, Digital Transformation
---

At Majid Al Futtaim I led the team behind the Ski Dubai app. This is the honest version of how we built it on React Native: the reasons that held up, the ones that didn't, and what I'd tell another team making the same decision.

## Why we picked React Native

Our team already knew React well. React Native let us reuse that instead of standing up two separate native teams, and it gave us one codebase for iOS and Android. Three things sold us:

- **Speed.** We could get from an idea to a build in front of stakeholders fast.
- **Reuse.** One team, one language, both platforms.
- **CodePush.** App store review cycles are slow. Pushing JavaScript updates and fixes without waiting for review was worth a lot while we were iterating.

Those were the reasons on paper. Some held up. Some didn't.

## Where it got hard

**Monitoring.** We started with New Relic and Crashlytics and quickly realised we were blind to the JavaScript layer, which is exactly where most of our bugs lived. Moving to Sentry fixed that. It was the single change that most improved how fast we could find and close issues.

**Native work.** The team was strong on the web and thinner on native. Anything that touched the platform directly (smooth animations, native SDKs, the last bit of polish like blur and shadow) was slower and harder than we expected. React Native makes the easy things easy and leaves the hard things as your problem.

**Upgrades.** Staying on a recent version made a real difference to performance, but no upgrade was ever free. Each one cost time we had to plan for.

## Where it paid off

- One shared codebase kept maintenance cheap. A fix usually shipped to both platforms at once.
- Fast Refresh saved hours across the project. A small feature with a huge cumulative effect.
- The community carried us through the awkward parts, RTL support in particular, which matters a great deal for an Arabic-first product.

## What I'd tell another team

React Native was the right call for us, but not for the "write once, run anywhere" reason people repeat. It's closer to "write once, and still own the native details." If your team is web-heavy and you need to ship to both platforms quickly, it's a strong choice, as long as you budget for the native work and invest early in observability at the JavaScript level.

We're now looking at keeping React Native for the UI while moving heavier logic to something like Kotlin Multiplatform or GoMobile. The goal hasn't changed: ship a great app with a team that can actually maintain it.
