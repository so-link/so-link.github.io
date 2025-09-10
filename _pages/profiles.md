---
layout: profiles
title: 成员
permalink: /people/
description: 已毕业或仍在实验室工作的成员
nav: true
nav_order: 3
display_categories: [Graduated students, Current students]
horizontal: false
---

<!-- profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: left
    image: jm-lv.jpg
    content: people_description/jm-lv.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
--- -->


<!-- pages/people.md -->
<div class="people">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized people -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_people = site.people | where: "category", category %}
  {% assign sorted_people = categorized_people | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_people %}
      {% include people_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_people %}
      {% include people.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display people without categories -->

{% assign sorted_people = site.people | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_people %}
      {% include people_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_people %}
      {% include people.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
