---
title: Home
layout: default
---

<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-phone mdl-cell--hide-tablet"><img src="/images/profile.jpg" width="100%"/></div>
  <div class="mdl-cell mdl-cell--10-col mdl-cell--12-col-phone" markdown="1">
{:.bigText} 
 I am a PhD candidate in the [School of Information](http://si.umich.edu) at University of Michigan, advised by [Prof. Mark Newman](http://mwnewman.people.si.umich.edu/).

 </div>

 </div>
 <div class="mdl-grid">
 <div class="mdl-cell mdl-cell--12-col" markdown="1">
{:.bigText} 
My work centers around context-aware computing. Check out my [CV](https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf) and some selected projects below.


 </div>
</div>




{:.bigText}
<a href="mailto:gparuthi@umich.edu"><i class="fa fa-send"></i></a> ·
                <a href="https://github.com/gparuthi/"><i class="fa fa-github"></i></a> ·
                <a href="http://www.linkedin.com/in/gparuthi"><i class="fa fa-linkedin"></i></a> ·
                <a href="http://scholar.google.com/citations?user=WsoaFHIAAAAJ&hl=en"><i class="fa fa-graduation-cap"></i></a> 


<projects></projects>

<div class="grid projectGrid">
    <div class="unit notes">
        <ul class="projects">
        <div class="mdl-grid">
        {% for post in site.posts %}

            {% capture url %}
                    {% if post contains 'actual_url' %}
                        {{ post.actual_url }}
                    {% else %}
                        {{ post.url }}
                    {% endif %}
                {% endcapture %}
                <div class="mdl-cell" data-tags= "{{ post.tags }}">
                  {% if post.thumbnail %}
                  {% if post.metadata_only %}
                        <img src="{{ post.thumbnail }}" width="100%">
                    {% else %}
                        <a href="{{ url }}">
                        <img src="{{ post.thumbnail }}" width="100%"></a>
                    {% endif %}

                        
                    {% endif %}
                    
                    <div class="thumbnailTitle">
                    
                    {% if post.metadata_only %}
                    <span  markdown="1">{{ post.title }} </span>
                    {% else %}
                        <span markdown="1"><a href="{{ url }}">{{ post.title }}</a></span>
                    {% endif %}

                    </div>
                    
                </div>

        {% endfor %}
          
        </div>
        </ul>
    </div>
</div>

<div class="grid projectDetails">
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

                <li data-tags= "{{ post.tags }}">
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
                {% if post.publications %}
                <span class="publicationText bgText"><i class="fa fa-graduation-cap"></i></span>
                {% for publication in post.publications %}
                    {% if publication[1].file %}
                   <span class="publicationText"><a href="{{publication[1].file}}">{{publication[0]}}</a></span>
                   {% endif %}
                {% endfor %}
                {% endif %}

                {% if post.abstract %}
                    {{ post.abstract | markdownify }}
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

                <li data-tags= "{{ post.tags }}">
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
                {% if post.publications %}
                <span class="publicationText bgText"><i class="fa fa-graduation-cap"></i></span>
                {% for publication in post.publications %}
                    {% if publication[1].file %}
                   <span class="publicationText"><a href="{{publication[1].file}}">{{publication[0]}}</a></span>
                   {% endif %}
                {% endfor %}
                {% endif %}

                {% if post.abstract %}
                    {{ post.abstract | markdownify }}
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
