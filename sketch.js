var face_colors = "fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)
var eye_colors = "323031-3d3b3c-7f7979-c1bdb3-5f5b6b".split("-").map(a=>"#"+a)
var pos_x=[]
var pos_y=[]
var sizes=[]
var colors=[]
var v_y=[]
var v_x=[]
var txts
var face_move_var =false
var lang = navigator.language
var myRec = new p5.SpeechRec(lang)
var face_Rot_var = false
function setup() {
 createCanvas(windowWidth, windowHeight);
 inputElement = createInput("DOG") //產生一個文字方塊，""內的文字為預設中的文字
 inputElement.position(10,10) //把文字方塊放到(10,10的位置)
 inputElement.size(140,40) //(寬,高)
 //以下的style，可以google搜尋html
 inputElement.style("font-size","20px") //文字大小
 inputElement.style("color"," #00DB00") //文字顏色
 inputElement.style("background","#E6E6F2")
 inputElement.style("border","1")


 let eyeX = map(mouseX, 0, width, -25, 25);
 let eyeY = map(mouseY, 0, height, -15, 15);
 





 //按鈕的設定
 btnmoveElement = createButton("移動")
 btnmoveElement.position(170,10) //按鈕位置
 btnmoveElement.size(80,40)
 btnmoveElement.style("font-size","20px") //文字大小
 btnmoveElement.style("color","#000000") //文字顏色
 btnmoveElement.style("background","#E6E6F2")
 btnmoveElement.style("border","1")
 btnmoveElement.mousePressed(face_move)




 btnStopElement = createButton("暫停")
 btnStopElement.position(270,10) //按鈕位置
 btnStopElement.size(80,40)
 btnStopElement.style("font-size","20px") //文字大小
 btnStopElement.style("color","#000000") //文字顏色
 btnStopElement.style("background","#E6E6F2")
 btnStopElement.style("border","1")
 btnStopElement.mousePressed(face_stop)








btnvoiceElement = createButton("語音")
btnvoiceElement.position(590,10) //按鈕位置
btnvoiceElement.size(80,40)
btnvoiceElement.style("font-size","20px") //文字大小
btnvoiceElement.style("color","#000000") //文字顏色
btnvoiceElement.style("background","#E6E6F2")
btnvoiceElement.style("border","1")
btnvoiceElement.mousePressed(voice_go)



radioElement=createRadio()
radioElement.option("一般")
radioElement.option("旋轉(rotate)")
radioElement.option("大小(scale)")
radioElement.style("background-color",'white')




 //radio的設定，
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("旋轉")
 radioElement.option("移動")
 radioElement.position(370,10)
 radioElement.size(200,40)
 radioElement.style("font-size","20px")
 btnmoveElement.style("border","1")
 radioElement.style("color","#000")
 radioElement.style("background","#E6E6F2")
 
  //for(var i=0;i<20;i=i+1){
   // drawface(face_colors[int(random(face_colors.length))] ,eye_colors[int(random(eye_colors.length))],random(0.3,1.2))
// }
}
function draw(){
   background("#b8d4e3");
   let mode= radioElement.value()
   for(var i=0;i<pos_x.length;i=i+1){
    push()
    txts = inputElement.value();
    translate(pos_x[i],pos_y[i])
    if(mode=="旋轉"){
      rotate(sin(frameCount/10*v_y[i]))




    }
    else
    {
      if(mode=="移動"){
        face_move_var =false
        }
       
     
    }
    drawface(colors[i],0,sizes[i])
    pop()
    if(face_move_var || mode=="移動"){
    pos_y[i] = pos_y[i] +v_y[i]
    }
    if(pos_y[i] > height || pos_y[i]<0)
    {
      pos_x.splice(i,1)
      pos_y.splice(i,1).
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
   }
  }
}
function drawface(face_clr=255,eye_clr=0,size=1){   //255與0為預設的值
  push()  //自行設定格式
  //translate(random(width),random(height))  //原點(0,0)移動到(200,200)
  scale(size) //
 

    fill("#d90429")
    textSize(50)
    text(txts,-100,250)
   
  

  // Body
  fill(255, 200, 150); // Light brown for body
  stroke(0);
  strokeWeight(2);
  ellipse(200, 300, 150, 100);

  // Head
  fill(255, 200, 150); // Light brown for head
  ellipse(100, 270, 100, 100);

  // Eyes

   //眼睛
   ellipse(85,260,50)
   ellipse(115,260,50)

  fill(eye_clr);
  ellipse(85, 260, 3, 20);
  ellipse(115, 260, 3, 20);
  fill(0);
  stroke(85, 260, 25, 15);
  stroke(115, 260, 25, 15);

  // Nose
  fill(face_clr);
  ellipse(100, 290, 20, 20);

  // Mouth
  fill(face_clr);
  stroke(0);
  strokeWeight(2);
  arc(100, 305, 40, 20, 0, PI);

  // Ears
  fill(255, 200, 150); // Light brown for ears
  triangle(70, 230, 80, 210, 100, 240);
  triangle(130, 230, 120, 210, 100, 240);

  // Tail
  fill(255, 200, 150); // Light brown for tail
  beginShape();
  vertex(270, 305);
  bezierVertex(290, 330, 330, 280, 310, 290);
  endShape();
  pop()  //把原本設定都消失
}



var sound1
function preload(){
  sound1 = loadSound("alex-productions-virus-cinematic-midtempo.mp3") //先把音樂檔載入到sound1程式碼中
}
//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}


function mousePressed(){
  if(mouseY>60){
    pos_x.push(mouseX)
    pos_y.push(mouseY)
    sizes.push(random(0.3,1))
    colors.push(face_colors[int(random(face_colors.length))])
    v_y.push(random(-1,1))
    if(sound1.isPlaying()){
      sound1.stop();
    }else{
      sound1.play();
    }
  }
}
function face_move(){
  face_move_var = true
}
function face_stop(){
   face_move_var = false








}
function voice_go() {
   myRec.onResult = showResult
   myRec.start()
 
}
function showResult() {
if(myRec.resultValue == true)
{
 print(myRec.resultString)
 let lowStr =myRec.resultString.toLowerCase();
 let mostrecentword = lowStr.sp
 if(myRec.resultString.indexOf ("走")!== -1 ){
  face_move_var = true
 }
 if(myRec.resultString.indexOf ("停")!== -1 ){
  face_move_var = false
  face_Rot_var=false
  }


}

}












