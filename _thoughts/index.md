---
layout: page
title: Thoughts
description: Shroom.ink updates (🌱) & thoughts.
permalink: /thoughts/
---

<ul>
    {% for page in site.thoughts %}
    {% unless page.title == "Thoughts" %}
    <li><a href="{{page.url}}">{{ page.title }}</a></li>
    {% endunless %}
    {% endfor %}
</ul>
