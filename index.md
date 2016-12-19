---
title: Home
layout: default
---
I am a PhD candidate in the iSchool at University of Michigan, advised by [Mark Newman](http://mwnewman.people.si.umich.edu/).
<br />
My work centers around context-aware computing. Check out my <a href="https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf">CV
                </a> and Projects.
                <br />
Contact:
&nbsp;                <a href="mailto:gparuthi@umich.edu"><i class="fa fa-send"></i></a> ·
                <a href="https://github.com/gparuthi/"><i class="fa fa-github"></i></a> ·
                <a href="http://www.linkedin.com/in/gparuthi"><i class="fa fa-linkedin"></i></a> ·
                <a href="http://scholar.google.com/citations?user=WsoaFHIAAAAJ&hl=en"><i class="fa fa-graduation-cap"></i></a> ·

## Projects
<div>
    <!-- {% for tag in site.all_tags %}
    <span class='select-tags'> {{ tag }} </span>
    {% endfor %} -->
</div>

<div class="grid">
{% for category in site.ordered_categories %}
    <div class="unit one-of-two">
        <ul class="projects">
        {% for post in site.categories[category] %}
            {% if post.featured %}
                {% capture url %}
                    {% if post contains 'actual_url' %}
                        {{ post.actual_url }}
                    {% else %}
                        {{ post.url }}
                    {% endif %}
                {% endcapture %}

                <li tags= "{{ post.tags }}">
                {% if post.thumbnail %}
                    <img src="{{ post.thumbnail }}" width="180px">
                {% endif %}

                <div>
                <h4>
                {% if post.metadata_only %}
                    <span markdown="1">{{ post.title }} {{ post.links }}</span>
                {% else %}
                    <span markdown="1"><a href="{{ url }}">{{ post.title }}</a></span>
                {% endif %}
                </h4>
                {% if post.tags %}
                    {% for tag in post.tags %}
                    <span class='tags'>{{ tag }}</span>
                    {% endfor %}
                {% endif %}
                {% if post.abstract %}
                    {{ post.abstract | markdownify }}
                {% endif %}
                {% if post.bullets %}
                    {{ post.bullets | markdownify }}
                {% endif %}
                </div>
                </li>
            {% endif %}
        {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>
<!-- <div style="text-align:right;" class='more'><a href="projects.html">More...</a></div> -->

---

## Notes
<ul class="projects notes">
{% for post in site.posts %}
    {% if post.featured %}
    {% else %}
        {% if post.thumbnail %}
            <li>
            <img src="{{ post.thumbnail }}" width="120px" />
        {% else %}
            <li class="nothumb">
        {% endif %}
        <div>
        <span class="sans">
        {% if post.metadata_only %}
            <span markdown="1">{{ post.title }}</span>
        {% else %}
            <span markdown="1"><a href="{{ post.url }}">{{ post.title }}</a></span>
        {% endif %}
        </span>
        <p markdown="1">
        {{ post.date | date_to_string }}\\
        {{ post.abstract }}
        </p>
        </div>
        </li>
    {% endif %}
{% endfor %}
</ul>

---

## News

| [09/01/15] | Had a great summer at PARC | 
| [03/09/15] | Paper accepted in ICWSM'15! | 
| [03/02/15] | Going to be in PARC for the summer :) |
| [07/02/14] | Had an excellent time at HCIC’14 |
| [05/04/14] | CHI’14: SVing, workshop, and a lot of fun! |
| [02/17/14] | CHI’14 Workshop paper accepted |
| [02/15/14] | CSCW’14 SVing was a lot of fun |

{% include peoples_urls.md %}
