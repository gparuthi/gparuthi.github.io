---
title: Home
layout: default
---

{:.bigText} 
I am a PhD candidate in the [School of Information](http://si.umich.edu) at University of Michigan, advised by [Prof. Mark Newman](http://mwnewman.people.si.umich.edu/).

{:.bigText} 
My work centers around context-aware computing. Check out my [CV]("https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf") and Projects below.

{:.bigText}
<a href="mailto:gparuthi@umich.edu"><i class="fa fa-send"></i></a> ·
                <a href="https://github.com/gparuthi/"><i class="fa fa-github"></i></a> ·
                <a href="http://www.linkedin.com/in/gparuthi"><i class="fa fa-linkedin"></i></a> ·
                <a href="http://scholar.google.com/citations?user=WsoaFHIAAAAJ&hl=en">Google Scholar</a> 

{:.bigText}
<span class="description">Who am I?</span> <span class="selectable">Engineer, Designer, Researcher, Data-Scientist</span>  

<div class="grid">

    <div class="unit notes">
        <ul class="projects">
        {% for post in site.posts %}
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
                    <a href="{{ url }}">
                    <img src="{{ post.thumbnail }}" width="180px"></a>
                {% endif %}

                <div>
                <h4>
                {% if post.metadata_only %}
                    <span markdown="1">{{ post.title }} </span>
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
        {% for post in site.posts %}
            {% if post.featured %}
            {% else %}
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
                    <span markdown="1">{{ post.title }} </span>
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

</div>
<!-- <div style="text-align:right;" class='more'><a href="projects.html">More...</a></div> -->



{% include peoples_urls.md %}
