const rateStar=document.querySelector(".rate");
const facilityBtn=document.querySelector(".facilites__btn");
const facilityLayer=document.querySelector(".facility__layer")

const coursesSlider=document.querySelector(".courses__slider")
const facilityLayerBtn=document.querySelector(".facility__layer--btn")

$(document).ready(function () {
  $(".courses__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: $(".prev__courses"),
    nextArrow: $(".next__courses"),
   
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
     autoplay: true,
     autoplaySpeed: 1000,
  });
});

$(document).ready(function () {
  $(".bannerchild__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: $(".prev__bannerchild"),
    nextArrow: $(".next__bannerchild"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});

$(document).ready(function () {
  $(".banner__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: $(".prev__banner"),
    nextArrow: $(".next__banner"),
   
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});

$(document).ready(function () {
  $(".feedback__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,  
    infinite: true,
    draggable: true,
    autoplaySpeed: 2000,
    autoplay:true,
    dots:true,
    dotsClass:"dots",
    customPaging : function(slider, i) {
      return '<button href="#" class="feedback__slider--dot w-[13px] h-[13px] mr-5 rounded-[50%]  bg-lighttext "></button>';
  },
   
  });
});
$(document).ready(function () {
  $(".footer__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,  
    infinite: true,
    draggable: true,
    autoplaySpeed: 2000,
    autoplay:true,
    
  });
});



facilityBtn.onclick=function(){
  facilityLayer.classList.toggle("active");
 
}
facilityLayerBtn.onclick=function(){
  facilityLayer.classList.toggle("active");
}
//Fetch Link ảnh lỗi
// fetch("https://60d4611a61160900173cb070.mockapi.io/courses")
// .then(response => response.json())
//   .then(data => {
    
//     data.map((x)=>{
//       coursesSlider.innerHTML+=` <div class="courses__slider--item  ">
//                     <div class="cursor-pointer h-[220px] w-[340px] overflow-hidden ">
//                       <img src="${x.image}" class="  hover:scale-110 w-[340px] duration-500 " alt="">
//                     </div>
//                     <div class="courses__content p-8 w-[340px] bg-lighttext cursor-pointer">
//                       <div class="flex">
//                         <div class="rate  text-primary ">
                       
//                         </div>
//                         <p class="font-semibold px-3 text-textdarkcolor">${x.rate}<p class="font-semibold  text-textdarkcolor" >(${x.rate_quantity})</p> </p>
                      
//                       </div>
             
//                      <h1 class="py-5 text-2xl font-bold hover:text-primary duration-500"> ${x.name}</h1>
//                      <div class=" text-textdarkcolor flex py-2">
//                       <i class="fa-regular fa-user pt-1 pr-2"></i>
//                       <p class="pr-3" >${x.total_enrolled}</p>
//                       <i class="fa-regular fa-clock pt-1 pr-2"></i>
//                       <p>${x.duration}</p>

//                      </div>
                
                     
//                      <div class=" flex justify-between py-5">
//                       <div class="flex">
//                         <img src="./assets/teacher_1.jpg" class="w-[40px] h-[40px] rounded-[50%]" alt="">
//                       <p class="pl-2 "> by  <h2 class="hover:text-primary font-bold duration-500  px-1 ">Tom Hardy</h2> in  <h2 class="hover:text-primary font-bold duration-500  px-1 text-infor">Tom Hardy</h2> </p> 
//                       </div>
//                      </div>
//                      <div class="w-[100%] h-[1px] bg-gray-200"></div>
//                       <div class="courses__footer flex   py-3">
                      
//                           <h2 class="hover:text-primary font-bold duration-500 text-md px-1 mr-[100px] ">${x.price}</h2>
                        
//                         <div class="text-textdarkcolor flex ml-2">
//                           <i class="text-primary fa-solid fa-cart-arrow-down pt-1 pr-1"></i>
//                           <p class="font-semibold">Get Enrolled</p>
//                         </div>

//                       </div>

                    
                    
//                   </div>
//                   </div>`
//     })
//   });
  var html='';
for(var i=0;i<5;i++){
  html+=`<i class="fa-solid fa-star pr-1"></i>`
}
rateStar.map((rate)=>{
    
})