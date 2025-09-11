---
layout: page
permalink: /teaching/
title: 课程
description: Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 5
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
<style> 
    .course-card {
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 40px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    .course-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 18px 40px rgba(50, 50, 93, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    .course-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to bottom, #3498db, #8cadefff);
    }
    .course-card h2 {
        margin-top: 0;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 15px;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
    }
    .course-card h2 i {
        margin-right: 12px;
        color: #3498db;
    }
    .course-card p {
        font-size: 1.1rem;
        line-height: 1.8;
    }
    /* 图片展示区域样式 */
    .image-showcase {
        margin: 30px 0;
        border-radius: 14px;
        overflow: hidden;
        position: relative;
        height: 400px;
        box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        transition: all 0.4s ease;
    }
    .image-showcase:hover {
        box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    }
    .image-showcase img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    .image-showcase:hover img {
        transform: scale(1.05);
    }
    .image-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        color: white;
        padding: 25px 25px 15px;
    }
    .image-caption h3 {
        font-size: 1.6rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    .image-caption p {
        color: rgba(255,255,255,0.9);
        font-size: 1.05rem;
        margin-bottom: 5px;
    }
    .course-info {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 25px 0;
    }
    .info-card {
        flex: 1;
        min-width: 250px;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        display: flex;
        align-items: center;
    }
    .info-card i {
        font-size: 2rem;
        color: #3498db;
        margin-right: 15px;
    }
    .info-content h4 {
        margin-bottom: 5px;
    }
    .info-content p {
        font-size: 1rem;
    }
    .cta-button {
        display: inline-block;
        background: linear-gradient(to right, #3498db, #8fbdebff);
        color: white;
        padding: 16px 35px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        margin-top: 15px;
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
        transition: all 0.3s ease;
    }
    .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(52, 152, 219, 0.5);
    }
    .cta-button i {
        margin-left: 8px;
    }
</style>

<div class="course-card">
    <h2><i class="fas fa-book"></i> 课程简介</h2>
    <!-- 图片展示区域 -->
    <div class="image-showcase">
        <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="数据结构课程">
        <div class="image-caption">
            <h3>数据结构与算法</h3>
            <p>探索计算机科学的核心基础，掌握高效数据处理方法</p>
            <p>讲师：吕建明教授 | 华南理工大学</p>
        </div>
    </div>
    <p>本课程是计算机科学与技术专业的核心基础课程，主要介绍如何组织、存储和管理数据，以及如何在计算机中高效地处理数据。课程内容包括线性表、栈、队列、树、图等基本数据结构，以及排序和查找算法。</p>
    <div class="course-info">
        <div class="info-card">
            <i class="fas fa-clock"></i>
            <div class="info-content">
                <h4>课程时长</h4>
                <p>共12周，每周3-5小时</p>
            </div>
        </div>
        <div class="info-card">
            <i class="fas fa-certificate"></i>
            <div class="info-content">
                <h4>证书获取</h4>
                <p>完成课程并通过考核可获得证书</p>
            </div>
        </div>
        <div class="info-card">
            <i class="fas fa-tasks"></i>
            <div class="info-content">
                <h4>难度级别</h4>
                <p>中级，需要编程基础</p>
            </div>
        </div>
    </div>
    <p>通过本课程的学习，学生将掌握各种常用数据结构的逻辑结构、存储结构及其基本操作的实现，能够运用所学知识解决实际问题，为后续课程的学习和软件开发打下坚实基础。</p>
    <a href="https://www.xuetangx.com/course/SCUT08091000960/5882715" class="cta-button">
        立即学习 <i class="fas fa-arrow-right"></i>
    </a>
</div>
