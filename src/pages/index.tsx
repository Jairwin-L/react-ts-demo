import React from 'react'
import GIF from 'gif.js'
import { Link } from "react-router-dom"
import GifWorker from '../lib/plugin/gif.worker.js'
import OneJpg from '../assets/img/1.jpg'
import TwoJpg from '../assets/img/2.jpg'
import ThreeJpg from '../assets/img/3.jpg'
// var gif = new GIF({
//   workers: 2, //可以开多线程
//   quality: 10,
//   workerScript: GifWorker
// });
// const imgList = [
//   OneJpg,
//   TwoJpg,
//   ThreeJpg
// ]
// let canvas: any = document.createElement('canvas');

// let ctx: any = canvas.getContext("2d");
// // let mark = false;
// let index = 0;
// let imageList: any = []
// for (let i = 0; i < imgList.length; i++) {
//   let image = new Image()
//   image.src = imgList[i];
//   imageList.push(image)
//   image.onload = function () {
//     if (i == imgList.length - 1) {
//       canvas.width = image.width;
//       canvas.height = image.height;
//       createGif(imageList)
//     }
//   }
// }
// const imgDom: any = document.getElementById('img')
// function createGif(image: any) {
//   for (let i = 0; i < image.length; i++) {
//     let element = image[i];
//     ctx.drawImage(element, 10, 10);
//     ctx.fillStyle = "#ffffff";
//     ctx.fillText('hello world', 20, 20);
//     gif.addFrame(canvas, {
//       copy: true,
//       delay: 1000
//     });
//     if (i == image.length - 1) {
//       gif.render();
//     }
//   }
//   gif.on('finished', (blob: any) => {
//     const imgTag = document.createElement('img')
//     console.log(URL.createObjectURL(blob))
//     imgTag.src = URL.createObjectURL(blob)
//     imgDom.appendChild(imgTag)
//   });
// }
export default () => {
  return (
    <>Demo
      <canvas id="canvas"></canvas>
      <div id="img"></div>
      <Link to={`hook`}>hook</Link>
    </>
  )
}
