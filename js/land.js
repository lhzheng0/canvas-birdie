/*
* @Author: Administrator
* @Date:   2017-01-11 18:51:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-11 19:07:19
*/

'use strict';
(function  (Fly) {
    var Land = function(config){
      this.context = config.context;
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.img = config.img;
      this.speed = 0.2; 
      this.imgw = this.img.width;
    };
    Land.prototype.render = function(delta){
      this.context.drawImage(this.img, this.x, this.y);
      this.x -= delta * this.speed;
      if(this.x < -this.imgw){
        this.x += this.imgw*4;
      }
    };
    Fly.Land = Land;
})(Fly);