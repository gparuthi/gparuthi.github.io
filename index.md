---
title: Home
layout: default
---

<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-phone mdl-cell--hide-tablet"><img src="/images/profile2.png" width="100%"/></div>

 </div>
 <div class="mdl-grid">
 <div class="mdl-cell mdl-cell--12-col" markdown="1">
{:.bigText}
<a href="https://github.com/gparuthi/" title="github"><i class="fa fa-github"></i></a> ·
                <a href="http://www.linkedin.com/in/gparuthi" title="LinkedIn"><i class="fa fa-linkedin"></i></a> ·
                <a href="http://scholar.google.com/citations?user=WsoaFHIAAAAJ&hl=en" title="scholar"><i class="fa fa-graduation-cap"></i></a>  ·
                <a href="/files/gauravparuthi.pdf" title="resume"><i class="fa fa-file-text-o"></i></a>  
</div>
<div class=" mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" markdown="1">
Gaurav has a Ph.D. in Human Computer Interaction from University of Michigan. He has designed and built end-to-end systems for more than 15 years that have received recognition in global software-design competitions, top-tier academic journals, and entrepreneurship awards of excellence at the University of Michigan. His diverse skillset and product buiding experience at [Microsoft Research](https://www.microsoft.com/en-us/research/lab/microsoft-research-india/), [KindredAI](http://www.kindred.ai/), [IDEO Colab](http://www.ideocolab.com/), [Xerox PARC](https://www.parc.com/), and [Telefonica Research](http://www.tid.es/) allows him to collaborate with diverse teams to bring innovative software ideas to life.

My Ph.D. research provides design principles for building intelligent systems for behavior change. I was advised by [Mark Newman](https://www.si.umich.edu/people/mark-newman#gsc.tab=0) and worked with [Pedja Klasnja](https://www.si.umich.edu/people/predrag-klasnja#gsc.tab=0). My research unites design and engineering to create simple solutions for complex problems.

 </div>
</div>

<div class=" mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" markdown="1">
## SELECTED PROJECTS (before 2018)

<div class="grid projectDetails">
    <div class="unit notes">
        <ul class="projects">
        {% for post in site.posts limit:10 %}
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
                    <img src="{{ post.thumbnail }}" width="180px" style="max-height: 137px"></a>
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
                {% if post.awards %}
                <span class="publicationText bgText"><i class="fa fa-trophy"></i></span>
                {% for publication in post.awards %}
                    {% if publication[1].file %}
                   <span class="publicationText"><a href="{{publication[1].file}}">{{publication[0]}}</a></span>
                   {% endif %}
                {% endfor %}
                {% endif %}
                {% if post.code %}
                <span class="publicationText bgText"><i class="fa fa-code"></i></span>
                {% for publication in post.code %}
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

        <ul class="projects more">
        {% for post in site.posts offset:3 %}
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
                {% if post.awards %}
                <span class="publicationText bgText"><i class="fa fa-trophy"></i></span>
                {% for publication in post.awards %}
                    {% if publication[1].file %}
                   <span class="publicationText"><a href="{{publication[1].file}}">{{publication[0]}}</a></span>
                   {% endif %}
                {% endfor %}
                {% endif %}
                {% if post.code %}
                <span class="publicationText bgText"><i class="fa fa-code"></i></span>
                {% for publication in post.code %}
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
        <more></more>
    </div>

</div>
 </div>

<!-- <div style="text-align:right;" class='more'><a href="projects.html">More...</a></div> -->

{% include peoples_urls.md %}
