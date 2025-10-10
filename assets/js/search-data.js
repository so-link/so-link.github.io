// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-简介",
    title: "简介",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-论文",
          title: "论文",
          description: "实验室近年来发表的高质量论文。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-成员",
          title: "成员",
          description: "已毕业或仍在实验室工作的成员",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "已毕业或仍在实验室工作的成员",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-课程",
          title: "课程",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-多模态儿童医疗",
          title: '多模态儿童医疗',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-华为5g信号处理",
          title: '华为5G信号处理',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-重定向测试",
          title: '重定向测试',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-郭冰琦",
          title: '郭冰琦',
          description: "25级在读硕士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GuoBingqi/";
            },},{id: "projects-何旭怡",
          title: '何旭怡',
          description: "25级在读博士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HeXuyi/";
            },},{id: "projects-接玉婵",
          title: '接玉婵',
          description: "24级在读博士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/JieYuchan/";
            },},{id: "projects-刘尚霖",
          title: '刘尚霖',
          description: "25级在读博士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LiuShanglin/";
            },},{id: "projects-卢梓锋",
          title: '卢梓锋',
          description: "24级在读硕士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LuZifeng/";
            },},{id: "projects-吕建明",
          title: '吕建明',
          description: "实验室导师",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LvJianming/";
            },},{id: "projects-项悦悦",
          title: '项悦悦',
          description: "25级在读硕士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/XiangYueyue/";
            },},{id: "projects-姚一阳",
          title: '姚一阳',
          description: "25级在读博士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/YaoYiyang/";
            },},{id: "projects-曾祥辉",
          title: '曾祥辉',
          description: "25级在读硕士",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ZengXianghui/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6D%6C%76@%73%63%75%74.%65%64%75.%63%6E", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
