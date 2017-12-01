var app = angular.module('portfolio', [])

app.controller('featuredCtrl', function($scope) {
    $scope.projects = [{
            projectName: 'Carolyn Whelan',
            frontPage: true,
            featuredImage: 'img/project_cw/ashley_cw_mac.png',
            link: 'carolyn_whelan.html',
            heading:"Carolyn Whelan Portfolio Site",
            type:"Website",
            paragraph:"A portfolio for a writer named Carolyn Whelan to showcase her work in an organized system."
            // "This is a website I built during my time at Resilient Lab. I used HTML, CSS, JavaScript, and Angular 1.0."
        },
        {
            projectName: 'Quilt',
            frontPage: true,
            featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
            link: 'quilt.html',
            heading:"Quilt",
            type:"Web Application",
            paragraph:"A ruby o rails application that needed to be adjusted for desktop size."
        },
        {
            projectName: 'Roslindale Village Main Street',
            frontPage: true,
            featuredImage: 'img/project_rvms/ashley_rvms_mac_mock.png',
            link: 'rvms.html',
            heading:"Roslindale Village Main Street",
            type:"WordPress Theme",
            paragraph:"A Wordpress theme created from scratch for a Resilient Lab client."
        },
        // {
        //     projectName: 'To Do List',
        //     frontPage: true,
        //     featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
        //     link: 'toDoList.html',
        //     heading:"To Do List Application",
        //     type:"JavaScript Application",
        //     paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // },
        {
            projectName: 'Level Ground MMA',
            frontPage: true,
            featuredImage: 'img/project_lg/ashley_lg_mac.png',
            link: 'lg.html',
            heading:"Level Ground MMA",
            type:"Jekyll Theme",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        // {
        //     projectName: 'Boston Weather App',
        //     frontPage: true,
        //     featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
        //     link: 'weather.html',
        //     heading:"Boston Weather Application",
        //     type:"JavaScript API Application",
        //     paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // },
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
  // {
  // project:"To Do List",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"What I Created",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  // project:"To Do List",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"What I Used and Learned",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  // project:"To Do List",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"Why I Did It",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  // project:"Weather",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"What I Created",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  // project:"Weather",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"What I Used and Learned",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  // project:"Weather",
  // image:"img/project_quilt/quilt-tablet-mock.png",
  // sectionHeading:"Why I Did It",
  // writeUp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },


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

let project_cw = ["img/project_cw/ashley_cw_mac.png",
                  "img/project_cw/cw_about_no_header.png",
                  "img/project_cw/cw_featured.png",
                  "img/project_cw/cw_home.png",
                  "img/project_cw/cw_pp.png",
                  "img/project_cw/cw_sci.png",
                  "img/project_cw/cw1.png",
                  "img/project_cw/cw2.png",
                  "img/project_cw/cw3.png"];
let project_lg = ["img/project_lg/ashley_lg_mac.png",
                  "img/project_lg/lg1.png",
                  "img/project_lg/lg2.png",
                  "img/project_lg/lg3.png"];
let project_rvms = ["img/project_rvms/ashley_rvms_mac_mock.png",
                    "img/project_rvms/rvms_home.png",
                    "img/project_rvms/rvms-13.png",
                    "img/project_rvms/rvms-14.png",
                    "img/project_rvms/rvms-15.png",
                    "img/project_rvms/rvms-17.png"];
let project_quilt = ["img/project_quilt/quilt-in-page1.png",
                      "img/project_quilt/quilt-in-page2.png",
                      "img/project_quilt/quilt-in-page3.png",
                      "img/project_quilt/quilt-mac.png",
                      "img/project_quilt/quilt-tablet-mock.png"];

let sectionHeadingText = null;
let sectionClass;

function nameOfSection(nameOfArray){
    if(nameOfArray.length == 9){
      sectionHeadingText = "Carolyn Whelan";
      imageClass = "project_cw";
    }else if (nameOfArray.length == 6) {
      sectionHeadingText = "Roslindale Village Main Street";
      imageClass = "project_rvms";
    }else if (nameOfArray.length == 5) {
      sectionHeadingText = "Quilt";
      imageClass = "project_quilt"
    }else if (nameOfArray.length == 4) {
      sectionHeadingText = "Level Ground MMA";
      imageClass = "project_lg"
    }
    return sectionHeadingText;
}

let projectArray = [project_cw, project_lg, project_rvms, project_quilt];

projectArray.forEach(function(nameOfArray){
  nameOfSection(nameOfArray);
  $('section.gallery').append("<h3>"+ sectionHeadingText +"</h3>");
  nameOfArray.forEach(function(image){
    $('section.gallery').append("<img src='"+ image +"' class='galleryImages'"+ imageClass +">")
  });
  $('section.gallery').append("</section>");
});
