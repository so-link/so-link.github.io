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

selected_papers: true # includes a list of papers marked as "selected={true}"
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
<style>
    .lab-card {
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        border-left: 5px solid #d118ffff;
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
    /* 图片展示区域样式 */
    .image-showcase {
        margin: 25px 0;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        height: 380px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }
    .image-showcase img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    .image-showcase:hover img {
        transform: scale(1.03);
    }
    .image-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        padding: 25px 20px 15px;
    }
    .image-caption h3 {
        color: rgba(145, 234, 246, 0.9);
        font-size: 1.4rem;
        margin-bottom: 8px;
    }
    .image-caption p {
        color: rgba(255,255,255,0.9);
        font-size: 1rem;
    }
    /* @media (max-width: 768px) {
        .image-showcase {
            height: 280px;
        }  
    } */
</style>
<div class="lab-card">
    <h2><i class="fas fa-flask"></i> 实验室简介</h2>
    <!-- 图片展示区域 -->
    <div class="image-showcase">
{% include figure.liquid path="assets/img/intro1.jpg" title="实验室风采" class="img-fluid rounded z-depth-1" %}
        <div class="image-caption">
            <h3>智能研究环境</h3>
            <p>配备先进设备的多模态深度学习研究实验室</p>
        </div>
    </div>
    <p>本实验室聚焦人工智能前沿领域，致力于多模态深度学习的核心技术研究与应用创新。团队重点攻关跨模态信息融合与鲁棒特征学习，在计算机视觉与信号处理领域取得突破性进展。</p>
</div>


<!-- 主要内容容器 -->
<div style="max-width: 1000px; margin: 30px auto; padding: 0 20px;">
    <!-- 实验室简介 -->
    <div style="background-color: transparent; border-radius: 12px; padding: 30px; margin-bottom: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); border-left: 5px solid #3498db;">
        <h2 style="  margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">实验室简介</h2>
        <p style="font-size: 1.1rem;">本实验室聚焦人工智能前沿领域，致力于多模态深度学习的核心技术研究与应用创新。团队重点攻关跨模态信息融合与鲁棒特征学习，在计算机视觉与信号处理领域取得突破性进展。</p>
    </div>
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
    <div style="background-color: transparent; border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.08); margin: 40px 0;">
        <h2 style=" ">研究理念</h2>
        <div style="font-size: 1.8rem; font-weight: bold; color: #3498db; line-height: 1.4; max-width: 800px; margin: 0 auto;">
            "理论突破 - 算法创新 - 应用驱动"
        </div>
        <p style="font-style: italic; margin-top: 20px; color: #7f8c8d;">三位一体的研究理念，推动人工智能技术的创新发展与产业应用</p>
    </div>
</div>

