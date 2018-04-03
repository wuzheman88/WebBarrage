// class Barrage {
//   constructor(canvas) {
//     this.canvas = canvas
//     let rect = this.canvas.getBoundingClientRect();
//     this.w = rect.right - rect.left;
//     this.h = rect.bottom - rect.top;
//     this.ctx = this.canvas.getContext('2d');
//     this.ctx.font = '30px 黑体';
//     this.barrageList = [];
//   }
//   shoot(value) {
//     let top = this.getTop();
//     let color = this.getColor();
//     let offset = this.getOffset();
//     let width = Math.ceil(this.ctx.measureText(value).width);
//     let barrage = {
//       value: value,
//       top: top,
//       left: this.w,
//       color: color,
//       offset: offset,
//       width: width,
//       velocity: this.getVelocity()
//     }
//     this.barrageList.push(barrage);
//   }
//   draw() {
//     if (this.barrageList.length) {
//       this.ctx.clearRect(0, 0, this.w, this.h);
//       for (let i = 0; i < this.barrageList.length; i++) {
//         let b = this.barrageList[i];
//         if (b.left + b.width <= 0) {
//           this.barrageList.splice(i, 1);
//           i--;
//           continue;
//         }
//         b.left -= b.offset;
//         this.drawText(b);
//       }
//     }
//     this.requestID = requestAnimationFrame(this.draw.bind(this));
//   }
//   drawText(barrage) {
//     this.ctx.fillStyle = barrage.color;
//     this.ctx.fillText(barrage.value, barrage.left, barrage.top);
//   }
//   getColor() {
//     return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
//   }
//   getTop() {
//     return Math.floor(Math.random() * (this.h - 30)) + 30;
//   }
//   getOffset() {
//     return +(Math.random() * 4).toFixed(1) + 1;
//   }
//   getVelocity() {
//     return 5
//   }
//   clear() {
//     this.cancelAnimationFrame(this.requestID);
//     this.interval = "";
//     this.ctx.clearRect(0, 0, this.w, this.h);
//     this.ctx.save();
//     for(var i=0; i<this.barrageList.length; i++){
//       delete this.barrageList[i];
//     }
//   }
// }
document.addEventListener('DOMContentLoaded', function()
{
  var canvas = document.createElement('canvas')
  canvas.id     = "CursorLayer"
  canvas.width  = document.body.clientWidth
  canvas.height = document.body.clientHeight
  canvas.style.zIndex   = 99999
  canvas.style.top = "0px"
  canvas.style.left = "0px"
  canvas.style.position = "absolute"
  canvas.style.border   = "1px solid"

  document.body.appendChild(canvas)
  console.log('loaded')
  const barrage = new Barrage(canvas)
  barrage.draw()
  const textList = ['弹幕', '666', '233333333',
    'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
    'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
    'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
    'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
    'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
    'Angular', '测试弹幕效果'
  ]
  textList.forEach((t) => {
    barrage.shoot(t)
  })
})