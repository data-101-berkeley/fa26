---
layout: page
title: 🏠 Home
permalink: /
nav_order: 1
seo:
  type: Course
  name: Data 101
---

# Data 101 (CS 187): Data Engineering 💾

{: .mb-2 }

## UC Berkeley, Fall 2026
{: .mb-2 .fs-6 .text-grey-dk-000 }

[Ed](https://edstem.org/us/courses/{{site.ed_course_id}}/discussion){:target="\_blank" .btn .btn-ed .mr-1 }
<!-- [Lecture Recordings]({{site.course.videos}}){:target="\_blank" .btn .btn-bcourses .mr-1 } -->
<!-- [Gradescope]({{site.course.gradescope}}){:target="\_blank" .btn .btn-gradescope .mr-1 } -->
<!-- [Lecture Recordings](https://bcourses.berkeley.edu/courses/1547305/external_tools/90481){:target="\_blank" .btn .btn-bcourses} -->
<!-- [Additional Extensions]({{site.extensions_form}}){:target="\_blank" .btn .btn-extensions .mr-1 } -->
<!-- Not using the OH queue in fa26; office hours are first come, first served. Uncomment to bring the queue back. -->
<!-- [Office Hours Queue]({{site.course.office_hours}}){: .btn .btn-officehours} -->
[Jump to Current Week](#week-1){: .btn .btn-currweek #jump-to-current-week }

<div class="role flex">
  {% assign instructors = site.staffers | where: 'role', 'InstructorHome' %}
  {% for staffer in instructors %}
    {{ staffer }}
  {% endfor %}
</div>

<!-- Announcements live on Ed, so the homepage feed is switched off. To bring
     it back, restore an "## Announcements" heading followed by an include of
     announcement-navigation.html (the include and the _announcements
     collection are both still in the repo). Wrap it in a Liquid comment rather
     than an HTML one if you ever want it disabled again: Liquid is evaluated
     first, so an HTML comment would still pull the component in. -->

## Schedule

<div>
{%- include schedule.html -%}
</div>

<script src="{{ 'assets/scripts/current-week.js' | relative_url }}"></script>
