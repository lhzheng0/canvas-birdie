/*
* @Author: Administrator
* @Date:   2017-01-11 14:51:07
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-11 20:02:59
*/

'use strict';
(function  (Fly) {
    var Bird = function(config){
       this.img = config.img;
        this.index = 0;
        this.imgW = this.img.width / 3;
        this.imgH = this.img.height;
        //小鸟默认位置
        this.y = config.y || 100;
        this.x = 100;
        //加速度
        this.a = 0.0005;
        //瞬时速度
        this.vt = 0;

        //最大角度
        this.maxAngle = 45;
        //最大角度时的速度
        this.maxVt = 0.5;
        //当前角度
        this.curAngle = 0;
    };
    Bird.prototype.render = function(delta){
        //判断最大速度
            if(this.vt < -this.maxVt){
             this.vt = -this.maxVt;
            }else if(this.vt > this.maxVt){
              this.vt = this.maxVt;
            }
            this.curAngle = this.vt /this.maxVt * this.maxAngle;
            ctx.translate(100, this.y);
            ctx.rotate(toRadin(this.curAngle));
            ctx.drawImage(this.img, this.index++ * this.imgW,0, this.imgW, this.imgH, -1/2*this.imgW, -1/2*this.imgH, this.imgW, this.imgH);
            this.index %= 3;
            this.y += this.vt * delta + 1 / 2 * this.a * delta * delta;
            this.vt = this.vt + this.a * delta;
          
    };
    Bird.prototype.changeS = function(c){
      this.vt = c;
    }
    Fly.Bird = Bird;
})(Fly)