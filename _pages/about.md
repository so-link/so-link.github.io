---
layout: about
title: 简介
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  # align: right
  # image: intro.jpg
  image_circular: false # crops the image to make it circular
  # more_info: >

selected_papers: false # includes a list of papers marked as "selected={true}"
# social: true # includes social icons at the bottom of the page

# announcements:
#   enabled: true # includes a list of news items
#   scrollable: true # adds a vertical scroll bar if there are more than 3 news items
#   limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new post items
#   limit: 3 # leave blank to include all the blog posts
---


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<style>
    .lab-card {
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        border-left: 5px solid #3498db;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .lab-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    }
    .lab-card h2 {
        margin-top: 0;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 15px;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
    }
    .lab-card h2 i {
        margin-right: 12px;
        color: #3498db;
    }
    .lab-card p {
        font-size: 1.1rem;
        line-height: 1.8;
    }
    
    /* 轮播图样式 - 增加高度 */
    .carousel-showcase {
        margin: 25px 0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        height: 600px; /* 从380px增加到600px */
    }
    .carousel-item {
        height: 600px; /* 同步增加 */
    }
    .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* 改为contain确保完整显示 */
        background-color: #f8f9fa; /* 添加背景色避免空白 */
    }
    .carousel-caption {
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        padding: 25px 20px 15px;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: left;
    }
    .carousel-caption h3 {
        color: #3498db;
        font-size: 1.4rem;
        margin-bottom: 8px;
    }
    .carousel-caption p {
        color: rgba(255,255,255,0.9);
        font-size: 1rem;
        margin-bottom: 0;
    }
    .carousel-control-prev,
    .carousel-control-next {
        width: 50px;
        height: 50px;
        background: rgba(0,0,0,0.3);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 15px;
    }
    .carousel-indicators {
        margin-bottom: 10px;
    }
    .carousel-indicators button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 5px;
    }
</style>

<div class="lab-card">
    <h2><i class="fas fa-flask"></i> 实验室简介</h2>
    
    <!-- 修改轮播容器，移除 data-bs-ride="carousel" -->
    <div id="labCarousel" class="carousel slide carousel-showcase">
        <!-- 轮播指示器保持不变 -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#labCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#labCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#labCarousel" data-bs-slide-to="2"></button>
            <!-- 添加第4、5张的指示器 -->
            <button type="button" data-bs-target="#labCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#labCarousel" data-bs-slide-to="4"></button>
        </div>
        
        <!-- 轮播内容保持不变 -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/img/intro1.png" class="d-block w-100" alt="intro1">
            </div>
            <div class="carousel-item">
                <img src="assets/img/intro2.png" class="d-block w-100" alt="intro2">
            </div>
            <div class="carousel-item">
                <img src="assets/img/intro3.png" class="d-block w-100" alt="intro3">
            </div>
            <div class="carousel-item">
                <img src="assets/img/intro4.png" class="d-block w-100" alt="intro4">
            </div>       
            <div class="carousel-item">
                <img src="assets/img/intro5.png" class="d-block w-100" alt="intro5">
            </div>       
        </div>
        
        <!-- 导航按钮保持不变 -->
        <button class="carousel-control-prev" type="button" data-bs-target="#labCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#labCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
    
    <p>本实验室聚焦人工智能前沿领域，致力于多模态深度学习的核心技术研究与应用创新。团队重点攻关跨模态信息融合与鲁棒特征学习，在计算机视觉与信号处理领域取得突破性进展。</p>
</div>

<!-- <script>
// 自动轮播设置
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('labCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000, // 4秒切换一次
        pause: 'hover', // 鼠标悬停时暂停
        wrap: true // 循环播放
    });
});
</script> -->


<!-- 主要内容容器 -->
<!-- <div style="max-width: 1000px; margin: 30px auto; padding: 0 20px;"> -->

<!-- 研究方向标题 -->
<div style="text-align: center; margin: 40px 0;">
    <h2 style="  display: inline-block; padding: 0 20px 10px; border-bottom: 3px solid #3498db;">核心研究方向</h2>
</div>
<!-- 研究方向1 -->
<div style="background-color: transparent; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.06); display: flex; align-items: center;">
    <div style="background: #3498db; color: white; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0; font-size: 1.8rem; font-weight: bold;">1</div>
    <div>
        <h3 style="  margin-top: 0;">图像去噪与增强</h3>
        <p>研发新一代基于深度学习的图像复原算法，针对低光照、医学影像、遥感图像等复杂场景，实现高保真噪声抑制与细节重建。</p>
    </div>
</div>
<!-- 研究方向2 -->
<div style="background-color: transparent; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.06); display: flex; align-items: center;">
    <div style="background: #e74c3c; color: white; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0; font-size: 1.8rem; font-weight: bold;">2</div>
    <div>
        <h3 style="  margin-top: 0;">弹性记忆网络（EMN）架构创新</h3>
        <p>首创时空高效的弹性记忆网络框架，通过参数压缩与映射的创新架构，在保持模型精度的同时，大幅模型提升推理速度，显著降低硬件资源消耗。</p>
    </div>
</div>
<!-- 研究方向3 -->
<div style="background-color: transparent; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.06); display: flex; align-items: center;">
    <div style="background: #27ae60; color: white; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0; font-size: 1.8rem; font-weight: bold;">3</div>
    <div>
        <h3 style="  margin-top: 0;">多模态协同学习</h3>
        <p>探索视觉-语言-音频的联合表示学习，构建跨模态自监督预训练模型，为智能医疗诊断、工业质检、自动驾驶等场景提供统一感知解决方案。</p>
    </div>
</div>
<!-- 研究成果 -->
<div style="background-color: transparent; border-radius: 12px; padding: 30px; margin: 40px 0; box-shadow: 0 8px 25px rgba(0,0,0,0.15);">
    <h2 style="margin-top: 0; text-align: center;">研究成果与影响</h2>
    <p>实验室成果发表于CVPR/MM等顶级会议，并与多家科技企业建立联合实验室，推动算法在真实场景的产业化落地。团队秉持"理论突破-算法创新-应用驱动"三位一体的研究理念，持续培养具备国际竞争力的AI研发人才。</p>
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 25px;">
        <div style="text-align: center; padding: 15px; flex: 1; min-width: 200px;">
            <div style="font-size: 2.5rem; font-weight: bold; color: #3498db;">20+</div>
            <div>顶刊顶会论文</div>
        </div>
        <div style="text-align: center; padding: 15px; flex: 1; min-width: 200px;">
            <div style="font-size: 2.5rem; font-weight: bold; color: #e74c3c;">5+</div>
            <div>企业合作项目</div>
        </div>
        <div style="text-align: center; padding: 15px; flex: 1; min-width: 200px;">
            <div style="font-size: 2.5rem; font-weight: bold; color: #27ae60;">10+</div>
            <div>专利申请</div>
        </div>
    </div>
</div>
<!-- 研究理念 -->
<!-- <div style="background-color: transparent; border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.08); margin: 40px 0;">
    <h2 style=" ">研究理念</h2>
    <div style="font-size: 1.8rem; font-weight: bold; color: #3498db; line-height: 1.4; max-width: 800px; margin: 0 auto;">
        "理论突破 - 算法创新 - 应用驱动"
    </div>
    <p style="font-style: italic; margin-top: 20px; color: #7f8c8d;">三位一体的研究理念，推动人工智能技术的创新发展与产业应用</p>
</div> -->
<!-- </div> -->
