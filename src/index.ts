export function myCanvas() {
  return "Hello, MyCanvas!";
}

export function canvas() {
  const cDiv = document.getElementById("mycanvas");
  const cv = document.createElement('canvas');
  cv.innerHTML = "<p>Canvas is not supported</p>";
  cv.id = "cv"
  cv.width = 500;
  cv.height = 250;
  const context = cv.getContext('2d') || {} as any;
  cDiv!.appendChild(cv);
  const backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;
  const ctx: CanvasRenderingContext2D = context as CanvasRenderingContext2D;
  // ctx.strokeRect(1, 1, 100, 100);

  ctx.beginPath();
  ctx.fillStyle = 'rgb(250, 0, 0)';
  // ctx.fillRect(10, 10, 50, 50);
  ctx.rect(10, 10, 50, 50);
  ctx.fill();
  // (ctx as any).addHitRegion({ id: 'rect1' });

  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.rect(30, 30, 50, 50);
  ctx.fill();
  // (ctx as any).addHitRegion({ id: 'rect2' });

  ctx.beginPath();
  ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
  ctx.fill();
  //(ctx as any).addHitRegion({ id: 'circle' });

  // cv.addEventListener('mousemove', function(event) {
  //   if ((event as any).region) {
  //     alert('hit region: ' + (event as any).region);
  //   }
  // });

  cv.addEventListener('mousemove', (ev) => {
    console.log(ev);
  })
}
