let crrt=document.querySelector(".home120")
let cross=document.querySelector(".cros")
let pre=document.querySelector(".prev")
let nxt=document.querySelector(".next")
let baaar=document.querySelector(".baaar")
let baa=document.querySelector(".baar-overlay")
let dds=document.querySelector(".baar")
let cos=document.querySelector(".cross")

crrt.addEventListener('click',showcart)
cross.addEventListener('click',hidecart)

function showcart(){
    fic.classList.add('show')
    carrt.classList.add('show')
    pre.style.display="none";
    nxt.style.display="none";
}

function hidecart(){
    fic.classList.remove('show')
    carrt.classList.remove('show')
    pre.style.display="block";
    nxt.style.display="block";
}


dds.addEventListener('click',showbar)
cos.addEventListener('click',hidecart2)

function showbar(){
    baa.classList.add('show')
    baaar.classList.add('show')
    pre.style.display="none";
    nxt.style.display="none";
}

function hidecart2(){
    baa.classList.remove('show')
    baaar.classList.remove('show')
    pre.style.display="block";
    nxt.style.display="block";
}

// // // let slideIndex = 1;
// // //     showSlides(slideIndex);

// // //     function moveSlide(n) {
// // //         showSlides(slideIndex += n);
// // //     }

// // //     function currentSlide(event) {
// // //         const dots = document.getElementsByClassName("dot");
// // //         for (let i = 0; i < dots.length; i++) {
// // //             if (event.target === dots[i]) {
// // //                 showSlides(slideIndex = i + 1);
// // //                 break;
// // //             }
// // //         }
// // //     }

// // //     function showSlides(n) {
// // //         let i;
// // //         const slides = document.getElementsByClassName("slide");
// // //         const dots = document.getElementsByClassName("dot");
        
// // //         if (n > slides.length) {
// // //             slideIndex = 1;
// // //         }    
// // //         if (n < 1) {
// // //             slideIndex = slides.length;
// // //         }
        
// // //         for (i = 0; i < slides.length; i++) {
// // //             slides[i].style.display = "none";  
// // //         }
// // //         for (i = 0; i < dots.length; i++) {
// // //             dots[i].classList.remove("active");
// // //         }
        
// // //         slides[slideIndex-1].style.display = "block";  
// // //         dots[slideIndex-1].classList.add("active");
// // //     }

















// // // // function show(){
// // // //     document.querySelector(".hamb").classList.toggle('open');
// // // //     document.querySelector(".naviga").classList.toggle('active');
// // // // }
// // // // function shows(){
// // // //     document.querySelector(".hambur").classList.toggle('open');
// // // //     document.querySelector(".navigat").classList.toggle('active');
// // // // }

// // // // let currentslide = 0;

// // // // function showSlide(index){
// // // //     const slider = document.getElementById("slider");
// // // //     const slides =document.getElementsByClassName("slide");
// // // //     const indicators =document.getElementById("indicators").children;
// // // //     if(index >= slides.length){
// // // //         currentslide = 0;
// // // //     }else if(index < 0){
// // // //         currentslide =slides.length-1;
// // // //     }else{
// // // //         currentslide = index;
// // // //     }
// // // //     slider.style.transform = `translateX(${-currentslide * 100}%)`;
// // // //     for(i = 0;i < indicators.length;i++){
// // // //         indicators[i].classList.remove('active');
// // // //     }
// // // //     indicators[currentslide].classList.add('active');
// // // // }
// // // // function nextslide(){
// // // //     showSlide(currentslide + 1);
// // // // }
// // // // function prevslide(){
// // // //     showSlide(currentslide - 1);
// // // // }

// // // // function autoslide(){
// // // //     nextslide();
// // // // }

// // // // function docd(){
// // // //     nextslide();
// // // // }

// // // // setInterval(autoslide, 5000);



// // // // const slider = document.getElementById('slider');
// // // // const slides = document.getElementsByClassName('slide');
// // // // const indicatorsContainer = document.getElementById('indicators');

// // // // for (let i = 0; i < slides.length; i++) {
// // // //   const indicator = document.createElement('div');
// // // //   indicator.classList.add('indicator');
// // // //   indicator.addEventListener('click', i) = function (i) {
// // // //     showSlide(i);
// // // //   };
// // // //   indicatorsContainer.appendChild(indicator);
// // // // }

// // // // // Show the initial slide
// // // // showSlide(currentslide);

// let slideIndex = 1;
//     showSlides(slideIndex);

//     function moveSlide(n) {
//         showSlides(slideIndex += n);
//     }

    // function currentSlide(event) {
    //     const dots = document.getElementsByClassName("dot");
    //     for (let i = 0; i < dots.length; i++) {
    //         if (event.target === dots[i]) {
    //             showSlides(slideIndex = i + 1);
    //             break;
    //         }
    //     }
    // }

//     function showSlides(n) {
//         let i;
//         const slides = document.getElementsByClassName("slide");
//         const dots = document.getElementsByClassName("dot");
        
//         if (n > slides.length) {
//             slideIndex = 1;
//         }    
//         if (n < 1) {
//             slideIndex = slides.length;
//         }
        
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";  
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].classList.remove("active");
//         }
        
//         slides[slideIndex-1].style.display = "block";  
//         dots[slideIndex-1].classList.add("active");
//     }

//     // Automatic sliding
//     setInterval(() => {
//         moveSlide(1);
//     }, 5000); // Change slide every 5 seconds





let currentslide = 0;

function showSlide(index){
    const slider = document.getElementById("slider");
    const slides =document.getElementsByClassName("slide");
    const indicators =document.getElementById("indicators").children;
    if(index >= slides.length){
        currentslide = 0;
    }else if(index < 0){
        currentslide =slides.length-1;
    }else{
        currentslide = index;
    }
    slider.style.transform = `translateX(${-currentslide * 100}%)`;
    for(i = 0;i < indicators.length;i++){
        indicators[i].classList.remove('active');
    }
    indicators[currentslide].classList.add('active');
}
function currentSlide(event) {
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length-1; i++) {
        if (event.target === dots[i]) {
            showSlide(slideIndex = i + 1);
            break;
        }
    }
}
function nextslide(){
    showSlide(currentslide + 1);
}
function prevslide(){
    showSlide(currentslide - 1);
}

function autoslide(){
    nextslide();
}

setInterval(autoslide, 5000);



const slider = document.getElementById('slider');
const slides = document.getElementsByClassName('slide');
const indicatorsContainer = document.getElementById('indicators');

for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicators');
  indicator.onclick = function () {
    showSlide(i);
  };
  indicatorsContainer.appendChild(indicator);
}
// document.addEventListener("DOMContentLoaded", function () {
//     const mobileMenuButton = document.getElementById("pop");
//     const navList = document.querySelector(".slider");
  
//     mobileMenuButton.addEventListener("click", function () {
//       navList.classList.toggle("slider").style.position="fixed";
//     });
//   });


// alert("Click the Menubar button for closed and open Menu List")

// Show the initial slide
showSlide(currentslide);



// JavaScript for Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




let arr=[10,20,30,40,50];
arr.map((value)=>{
    console.log(value)
})

// filter
let arr1=[20,30,40,50,60];
let arr2=arr1.filter((value)=>{
    return value<50
})
console.log(arr2,arr1)

// reduce

let arr3=[1,2,3,4,5,6,7,8,9,10]
let arr4=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr4,arr3)