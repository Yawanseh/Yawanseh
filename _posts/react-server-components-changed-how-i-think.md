---
title: "React Server Components Changed How I Think About the Frontend"
description: "The App Router felt wrong for a month. Then it clicked. Server Components are less a new feature and more a different default, and I have come around to thinking it is the right one."
published: true
cover: /images/covers/react-server-components-changed-how-i-think.png
published_at: 2024-02-13T09:00:00.000Z
tags: React, Next.js, Web Development
---

I will be honest. The first month with the App Router and React Server Components, I was annoyed. Things I knew how to do suddenly needed a different approach, and half my instincts were wrong. I have since come all the way around, and I think the shift is the right one.

## The default flipped

The old mental model was simple: everything is a client component, and the server just sends the initial HTML. Server Components flip that. Now the default is that a component runs on the server, and you opt into the client only where you actually need interactivity.

That sounds like a small change. It is not. It changes where data fetching lives, what ends up in the browser bundle, and how you think about the boundary between server and client. Once it clicked, a lot of the ceremony I used to write just disappeared.

## Data fetching where it belongs

The part I did not expect to love: fetching data right inside the component that needs it, on the server, with no loading spinner plumbing and no extra API layer. This blog does exactly that. The page reads the posts on the server and renders them. There is no client-side fetch, no state library, no waterfall. It is less code and it is faster.

## The confusing parts are real

I am not going to pretend it is all smooth. The line between server and client components trips people up, and the error messages are not always kind. You will paste a client-only hook into a server component and get yelled at. Caching has its own learning curve, and the mental model for when things re-run takes time to build.

My advice: draw the boundary deliberately. Keep components on the server by default. Push `use client` as far down the tree as you can, to the small interactive leaves, and leave everything above it on the server. Most confusion comes from marking a big parent as a client component out of habit and dragging its whole subtree along.

## Worth it

The payoff is less JavaScript shipped to the browser, simpler data flow, and pages that are fast by default instead of fast after optimization. It took me a month to stop fighting it. If you are in that month right now, push through. The new default is better.
