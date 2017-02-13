/*
* @Author: Administrator
* @Date:   2017-01-11 18:25:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-11 18:50:43
*/

'use strict';
(function  (Fly) {
    var Sky = function(config){
      this.img = config.img;
      this.x = config.x || 0;
      this.y = 0;
      this.speed = 0.2;
      this.context = config.context;

    };
    Sky.prototype.render = function(delta){
      this.context.drawImage(this.img, this.x, this.y);
      this.x -= delta*this.speed;
      if(this.x < -cv.width){
        this.x += 2*cv.width;
      }
    };
    Fly.Sky = Sky;
})(Fly);