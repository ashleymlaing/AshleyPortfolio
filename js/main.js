var app = angular.module('portfolio', [])

app.controller('featuredCtrl', function($scope) {
    $scope.projects = [{
            projectName: 'Carolyn Whelan',
            frontPage: true,
            featuredImage: 'img/project_cw/ashley_cw_mac.png',
            link: 'carolyn_whelan.html',
            heading:"Carolyn Whelan Portfolio Site",
            type:"Website",
            paragraph:"Carolyn Whelan is a writer and I built this site to broadcast her articles. I developed this static site and added Angular 1.0. We separated her articles into catergories, and made them easy to find."
            // "This is a website I built during my time at Resilient Lab. I used HTML, CSS, JavaScript, and Angular 1.0."
        },
        {
            projectName: 'Quilt',
            frontPage: true,
            featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
            link: 'quilt.html',
            heading:"Quilt",
            type:"Web Application",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            projectName: 'Roslindale Village Main Street',
            frontPage: true,
            featuredImage: 'img/project_rvms/ashley_rvms_mac_mock.png',
            link: 'rvms.html',
            heading:"Roslindale Village Main Street",
            type:"WordPress Theme",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            projectName: 'To Do List',
            frontPage: true,
            featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
            link: 'toDoList.html',
            heading:"To Do List Application",
            type:"JavaScript Application",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            projectName: 'Level Ground MMA',
            frontPage: true,
            featuredImage: 'img/project_lg/ashley_lg_mac.png',
            link: 'lg.html',
            heading:"Level Ground MMA",
            type:"Jekyll Theme",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            projectName: 'Boston Weather App',
            frontPage: true,
            featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
            link: 'weather.html',
            heading:"Boston Weather Application",
            type:"JavaScript API Application",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
        project:"Carolyn Whelan",
        image:"img/project_cw/cw_featured.png",
        sectionHeading:"What I Created",
        writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
      project:"Carolyn Whelan",
      image:"img/project_cw/cw_pp.png",
      sectionHeading:"What I Used and Learned",
      writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
      project:"Carolyn Whelan",
      image:"img/project_cw/cw_sci.png",
      sectionHeading:"Why I Did It",
      writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
      project:"Roslindale Village",
      image:"img/project_rvms/rvms_home.png",
      sectionHeading:"What I Created",
      writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    project:"Roslindale Village",
    image:"img/project_rvms/rvms-13.png",
    sectionHeading:"What I Used and Learned",
    writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    project:"Roslindale Village",
    image:"img/project_rvms/rvms-15.png",
    sectionHeading:"Why I Did It",
    writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    project:"Level Ground",
    image:"img/project_lg/lg1.png",
    sectionHeading:"What I Created",
    writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Level Ground",
  image:"img/project_lg/lg2.png",
  sectionHeading:"What I Used and Learned",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Level Ground",
  image:"img/project_lg/lg3.png",
  sectionHeading:"Why I Did It",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Quilt",
  image:"img/project_quilt/quilt-in-page1.png",
  sectionHeading:"What I Created",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Quilt",
  image:"img/project_quilt/quilt-in-page2.png",
  sectionHeading:"What I Used and Learned",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Quilt",
  image:"img/project_quilt/quilt-in-page3.png",
  sectionHeading:"Why I Did It",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"To Do List",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"What I Created",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"To Do List",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"What I Used and Learned",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"To Do List",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"Why I Did It",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Weather",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"What I Created",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Weather",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"What I Used and Learned",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
  project:"Weather",
  image:"img/project_quilt/quilt-tablet-mock.png",
  sectionHeading:"Why I Did It",
  writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },


      // {
      //   project:"",
      //   image:"",
      //   sectionHeading:"",
      //   writeUp:""
      // }
    ]
})

let closeJobText = "Read More";
let openJobText = "Show Less";

$("button.microsoft").on("click",function(){
  $("ul.microsoft .disappear").toggleClass("hiddenBullet");
  if($("button.microsoft").text()==closeJobText){
    $("button.microsoft").text(openJobText);
  }else {
    $("button.microsoft").text(closeJobText);
  }
});

$("button.howard").on("click",function(){
  $("ul.howard .disappear").toggleClass("hiddenBullet");
  if($("button.howard").text()==closeJobText){
    $("button.howard").text(openJobText);
  }else {
    $("button.howard").text(closeJobText);
  }
});

$("button.resilientDev").on("click",function(){
  $("ul.resilientDev .disappear").toggleClass("hiddenBullet");
  if($("button.resilientDev").text()==closeJobText){
    $("button.resilientDev").text(openJobText);
  }else {
    $("button.resilientDev").text(closeJobText);
  }
});

$("button.resilientLab").on("click",function(){
  $("ul.resilientLab .disappear").toggleClass("hiddenBullet");
  if($("button.resilientLab").text()==closeJobText){
    $("button.resilientLab").text(openJobText);
  }else {
    $("button.resilientLab").text(closeJobText);
  }
});

let project_cw = [];
let project_lg = [];
let project_rvms = [];
let project_quilt = [];
let project_weather = [];
let project_todo = [];
