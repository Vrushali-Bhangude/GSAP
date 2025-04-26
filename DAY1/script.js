// gsap.to(
//     "div",{
//       x:700,
//       y:500,
//       rotate:360,
//       duration:2,
//       repeat:-1,
//       delay:5,
//       backgroundColor:"green",
//       scaleX:1.5,
//       scaleY:2,
//     }
// )
gsap.from(
    "div",{
      x:800,
      y:700,
      rotate:360,
      duration:2,
      repeat:-1,
      backgroundColor:"pink",
      scaleX:1.5,
      scaleY:2,
    //   delay:3,
      yoyo:true,
      stagger:1,
    }
)
