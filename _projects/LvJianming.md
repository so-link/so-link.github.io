---
layout: page
title: project 1
description: with background image
img: assets/img/jm-lv.png
importance: 1
category: Professor
related_publications: true
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
 吕建明博士, 华南理工大学计算机学院教授。2002年本科毕业于中山大学计算机系,2008年获中科院计算技术研究所博士学位。2017年在香港城市大学任高级副研究员（Senior Research Associate）。目前是ACM/IEEE/CCF会员，CCF教育专业委员会委员，CCF人工智能与模式识别专委会通讯委员，CCF数据库专委会通讯委员，中文信息学会信息检索专委会委员。研究兴趣包括数据挖掘、计算机视觉、机器学习、分布式计算。已经在相关领域发表50余篇会议和杂志论文，其中包括CCF A类会议CVPR, MM, CCF B类会议ACM CIKM、ICPP、DASFAA等领域内重要的会议，以及IEEE Transactions on Pattern Analysis and Machine Intelligence、IEEE Transactions on Services Computing、IEEE Transactions on Intelligent Transportation Systems、ACM Transactions on Multimedia Computing Communications and Applications、Computer Networks等重要SCI杂志。近年来，主持了20余项科学研究项目，包括国家自然基金面上项目、青年基金、广东省科技计划项目等。获发明专利授权6项，发明专利申请11项。曾获优秀获校级本科教学成果一等奖。指导学生获得泛珠三角大学生计算机作品赛全国总决赛金奖。 所主持的《数据结构》MOOC课程在线报名人数超过17000人。
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
