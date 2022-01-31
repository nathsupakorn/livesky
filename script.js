var vela = new Date();

let night = [
  [0, 14, 36],
  [100, 123, 147],
];
let dawn = [
  [25, 118, 237],
  [255, 242, 204],
];
let noon = [
  [25, 118, 237],
  [155, 200, 253],
];
let evening = [
  [130, 112, 237],
  [255, 129, 79],
];

function getColor() {
  vela = new Date();
  var nowTime = vela.getHours() * 60 + vela.getMinutes();
  if (nowTime <= 300) {
    return night;
  } else if (nowTime <= 360) {
    return [
      [
        night[0][0] +
          Math.floor(((nowTime - 300) * (dawn[0][0] - night[0][0])) / 60),
        night[0][1] +
          Math.floor(((nowTime - 300) * (dawn[0][1] - night[0][1])) / 60),
        night[0][2] +
          Math.floor(((nowTime - 300) * (dawn[0][2] - night[0][2])) / 60),
      ],
      [
        night[1][0] +
          Math.floor(((nowTime - 300) * (dawn[1][0] - night[1][0])) / 60),
        night[1][1] +
          Math.floor(((nowTime - 300) * (dawn[1][1] - night[1][1])) / 60),
        night[1][2] +
          Math.floor(((nowTime - 300) * (dawn[1][2] - night[1][2])) / 60),
      ],
    ];
  } else if (nowTime <= 720) {
    return [
      [
        dawn[0][0] +
          Math.floor(((nowTime - 360) * (noon[0][0] - dawn[0][0])) / 360),
        dawn[0][1] +
          Math.floor(((nowTime - 360) * (noon[0][1] - dawn[0][1])) / 360),
        dawn[0][2] +
          Math.floor(((nowTime - 360) * (noon[0][2] - dawn[0][2])) / 360),
      ],
      [
        dawn[1][0] +
          Math.floor(((nowTime - 360) * (noon[1][0] - dawn[1][0])) / 360),
        dawn[1][1] +
          Math.floor(((nowTime - 360) * (noon[1][1] - dawn[1][1])) / 360),
        dawn[1][2] +
          Math.floor(((nowTime - 360) * (noon[1][2] - dawn[1][2])) / 360),
      ],
    ];
  } else if (nowTime <= 960) {
    return noon;
  } else if (nowTime <= 1080) {
    return [
      [
        noon[0][0] +
          Math.floor(((nowTime - 960) * (evening[0][0] - noon[0][0])) / 120),
        noon[0][1] +
          Math.floor(((nowTime - 960) * (evening[0][1] - noon[0][1])) / 120),
        noon[0][2] +
          Math.floor(((nowTime - 960) * (evening[0][2] - noon[0][2])) / 120),
      ],
      [
        noon[1][0] +
          Math.floor(((nowTime - 960) * (evening[1][0] - noon[1][0])) / 120),
        noon[1][1] +
          Math.floor(((nowTime - 960) * (evening[1][1] - noon[1][1])) / 120),
        noon[1][2] +
          Math.floor(((nowTime - 960) * (evening[1][2] - noon[1][2])) / 120),
      ],
    ];
  } else if (nowTime <= 1140) {
    return [
      [
        evening[0][0] +
          Math.floor(((nowTime - 1080) * (night[0][0] - evening[0][0])) / 60),
        evening[0][1] +
          Math.floor(((nowTime - 1080) * (night[0][1] - evening[0][1])) / 60),
        evening[0][2] +
          Math.floor(((nowTime - 1080) * (night[0][2] - evening[0][2])) / 60),
      ],
      [
        evening[1][0] +
          Math.floor(((nowTime - 1080) * (night[1][0] - evening[1][0])) / 60),
        evening[1][1] +
          Math.floor(((nowTime - 1080) * (night[1][1] - evening[1][1])) / 60),
        evening[1][2] +
          Math.floor(((nowTime - 1080) * (night[1][2] - evening[1][2])) / 60),
      ],
    ];
  } else {
    return night;
  }
}

function LiveSky() {
  vela = new Date();
  var clock = vela.toLocaleTimeString();
  var color = getColor();
  console.log(color);
  var sky = document.getElementById("live-sky");
  sky.innerHTML = `
  <div id="mySky" style="background-image: linear-gradient(rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]})); height: 100vh;">
  <p id="clock" style=" display: flex; justify-content: end; padding-right: 10vh; font-size: 45px; padding-top: 5vh;vertical-align: middle;">${clock}</p>
  </div>
  `;
}

var livesky = setInterval(LiveSky, 1000);

function stopLiveSky() {
  clearInterval(livesky);
}
