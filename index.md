---
title: Home
layout: default
---

<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-phone mdl-cell--hide-tablet"><img src="/images/profile.png" width="100%"/></div>
  <div class="intro mdl-cell mdl-cell--10-col mdl-cell--12-col-phone" markdown="1">
{:.bigText} 
  I am Gaurav Paruthi, a design technologist with extensive experience in using user-centered design methods to build end-to-end applications of emerging technologies. My expertise lies at the intersection of Design, Engineering, and Research.
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

I finished my Ph.D. in Human-Computer Interaction from the University of Michigan in the School of Information. I was advised by [Mark Newman](https://www.si.umich.edu/people/mark-newman#gsc.tab=0). My research provides design principles for building intelligent systems for behavior change. I worked with [Pedja Klasnja](https://www.si.umich.edu/people/predrag-klasnja#gsc.tab=0), [Ken Resnicow](https://sph.umich.edu/faculty-profiles/resnicow-ken.html), and [Natalie Colabianchi](http://www.kines.umich.edu/directory/faculty/natalie-colabianchi). 
 
 In the past, I explored the use of emerging technologies in the areas of Social Computing and Health. At [Microsoft Research](https://www.microsoft.com/en-us/research/lab/microsoft-research-india/), I worked with [Bill Thies](http://billthies.net/) to build low-cost educational technology for under-resourced environments. As part of [DOIIIT studio](https://doiiit.github.io/), I worked with [Roland Graf](http://assocreation.com/) on the [Internet of Shoes](http://assocreation.com/project/internet-of-shoes/). At [Telefonica Research](http://www.tid.es/), I worked with [Vanessa Frias](http://www.vanessafriasmartinez.org/) to delve into the micro-lending behavior data from the Kiva website. At Xerox PARC, I worked with [Ashwin Ram](https://www.linkedin.com/in/ashwinram/), on building an intelligent assistant for physical activity promotion. At [IDEO Colab](http://www.ideocolab.com/), I worked on projects related to Blockchains and Smart Cities. My research has been published in top-tier HCI venues such as CHI and UbiComp.
  
  Please find my resume [here](https://rawgit.com/gparuthi/resume/master/gauravparuthi.pdf), and [send me](mailto:gparuthi@umich.edu) a note if you would like to connect. 
  
  
 </div>
</div>

<div class=" mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" markdown="1">
## PROJECTS

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
                {% if post.awards %}
                <span class="publicationText bgText"><i class="fa fa-trophy"></i></span>
                {% for publication in post.awards %}
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
 </div>


<!-- <div style="text-align:right;" class='more'><a href="projects.html">More...</a></div> -->



{% include peoples_urls.md %}
