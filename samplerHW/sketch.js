let sounds = new Tone.Players({
  'caves': "assets/caves.mp3",
  'donkey': "assets/donkey.mp3",
  'hog': "assets/hog.mp3",
  'wrestling': "assets/wrestling.mp3"
});

let crusherAmt = new Tone.BitCrusher(4); 

let crusherSlider;

let soundNames = ['caves', 'donkey', 'hog', 'wrestling'];
let buttons = [];

sounds.connect(crusherAmt);
crusherAmt.toDestination();

function setup() {
  createCanvas(400, 400);

  soundNames.forEach((names, index) =>{
    buttons[index] = createButton(names);
    buttons[index].position(19, 19 + 30 * index);
    buttons[index].mousePressed(() => sounds.player(names).start());
  });

  crusherSlider = createSlider(0, 16, 0, 0.05);
  crusherSlider.position(19, 209);
  crusherSlider.mouseMoved(() => crusherAmt.bits.value = crusherSlider.value());
}

function draw() {
  background(220, 100, 300);
  textSize(12);
  text("Bit Crusher (0-16) From BitCrusher Start (0) to Normal End (16)", 19, 199);
}