/*
* @Author: Administrator
* @Date:   2017-01-11 19:12:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-25 10:27:32
*/

'use strict';
(function  (Fly) {
    var Pipe = function(config){
      this.context = config.context;
      this.imgTop = config.imgTop;
      this.imgBottom = config.imgBottom;
      this.x = config.x || 0;
      this.yTop = 0;
      this.yBottom = 0;
      this.speed = 0.2;
      //管道间隔
      this.space = 150;
      //管道宽高
      this.imgW = this.imgTop.width;
      this.imgH = this.imgTop.height;

      this.initHeight();
    };
    Pipe.prototype.render = function(delta){
      this.initPath();
      this.context.drawImage(this.imgTop, this.x, this.yTop);
      this.context.drawImage(this.imgBottom, this.x, this.yBottom);
      this.x -= delta *this.speed;
      if(this.x < -this.imgW){
        this.x += this.imgW*3*6;
        this.initHeight();
      }
      
    };
    //生成随机高度
    Pipe.prototype.initHeight = function(){
      var h = Math.random()*200+50;
      this.yTop = h - this.imgH;
      this.yBottom = h + this.space;
    }

    //绘制路径
    Pipe.prototype.initPath = function(){

      this.context.rect(this.x, this.yTop, this.imgW, this.imgH);
      this.context.rect(this.x, this.yBottom, this.imgW, this.imgH);

    }
    Fly.Pipe = Pipe;
})(Fly)