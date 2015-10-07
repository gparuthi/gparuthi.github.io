---
title: All Projects
layout: projects
---

<div class="grid">
{% for category in site.ordered_categories %}
    <div class="unit one-of-two">
        <ul class="projects">
        {% for post in site.categories[category] %}
            
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
            
        {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>

---

## News
<ul>
    <li>[07/02/14]  Had an excellent time at  HCIC’14</li>
    <li>[05/04/14]  Glad to be a CHI’14 SV</li>
    <li>[05/04/14]  CHI’14 Workshop was very useful</li>
    <li>[02/17/14]  CHI’14 Workshop paper accepted</li>
    <li>[02/15/14]  CSCW’14 SVing was a lot of fun</li>
    <li>[02/01/14]  CHI’14 looking forward to SV</li>
    <li>[01/15/14]  HCIC’14 Web Developer</li>
</ul>
{% include peoples_urls.md %}
