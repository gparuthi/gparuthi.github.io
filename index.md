---
title: Home
layout: default
---

<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-phone mdl-cell--hide-tablet"><img src="/images/profile.png" width="100%"/></div>
  <div class="intro mdl-cell mdl-cell--10-col mdl-cell--12-col-phone" markdown="1">
  {:.bigText} 
  I am Gaurav Paruthi, a design technologist with a broad and extensive product design experience.  
 </div>

 </div>
 <div class="mdl-grid">
 <div class="mdl-cell mdl-cell--12-col" style="text-align: center;" markdown="1">

{:.bigText}
<a href="mailto:gparuthi@umich.edu" title="email"><i class="fa fa-send"></i></a> ·
                <a href="https://github.com/gparuthi/" title="github"><i class="fa fa-github"></i></a> ·
                <a href="http://www.linkedin.com/in/gparuthi" title="LinkedIn"><i class="fa fa-linkedin"></i></a> ·
                <a href="http://scholar.google.com/citations?user=WsoaFHIAAAAJ&hl=en" title="scholar"><i class="fa fa-graduation-cap"></i></a>  ·
                <a href="https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf" title="resume"><i class="fa fa-file-text-o"></i></a>  
</div>
<div class=" mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" markdown="1">
## ABOUT ME

I have 8 years of academic and 3 years of professional experience in designing and building systems that demonstrate product innovation. Having a deep understanding of how technologies work allow me to conceptualize, engineer, and evaluate systems with real-world applications. 

During my professional experience at [IDEO Colab](http://www.ideocolab.com/), [Microsoft Research](https://www.microsoft.com/en-us/research/lab/microsoft-research-india/), [Xerox PARC](https://www.parc.com/), and [Telefonica Research](http://www.tid.es/), I led projects in collaborative environments towards solving hard problems. My experience as a cofounder of a startup helped me understand the nuances of market trends that affect product adoption.

My Ph.D. research provides design principles for building intelligent systems for behavior change. I was advised by [Mark Newman](https://www.si.umich.edu/people/mark-newman#gsc.tab=0) and worked with [Pedja Klasnja](https://www.si.umich.edu/people/predrag-klasnja#gsc.tab=0). I used qualitative methods to study complex human behavior, and iteratively developed novel systems to articulate unexplored design space.
  
  Please find my resume [here](https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf) and [send me](mailto:gparuthi@umich.edu) a note if you would like to connect. 
  
  
 </div>
</div>

<div class=" mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" markdown="1">
## PROJECTS

  


<div class="grid projectDetails">
    <div class="unit notes">
        <ul class="projects">
        {% for post in site.posts limit:3 %}
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
