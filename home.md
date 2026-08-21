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

[Ed]({{site.course.edstem}}){:target="\_blank" .btn .btn-ed .mr-1 }
<!-- [Lecture Recordings]({{site.course.videos}}){:target="\_blank" .btn .btn-bcourses .mr-1 } -->
<!-- [Gradescope]({{site.course.gradescope}}){:target="\_blank" .btn .btn-gradescope .mr-1 } -->
<!-- [Lecture Recordings](https://bcourses.berkeley.edu/courses/1547305/external_tools/90481){:target="\_blank" .btn .btn-bcourses} -->
<!-- [Additional Extensions]({{site.course.additional_extensions}}){:target="\_blank" .btn .btn-extensions .mr-1 } -->
[Office Hours Queue]({{site.course.office_hours}}){: .btn .btn-officehours}
[Jump to Current Week](https://data101.org/fa25/#week-1){: .btn .btn-currweek}

<div class="role flex">
  {% assign instructors = site.staffers | where: 'role', 'InstructorHome' %}
  {% for staffer in instructors %}
    {{ staffer }}
  {% endfor %}
</div>

## Announcements

{% include announcement-navigation.html %}

## Schedule

<div>
{%- include schedule.html -%}
</div>