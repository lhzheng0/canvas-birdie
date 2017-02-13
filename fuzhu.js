(function () {
    var timer = setInterval(function () {
        var g = game,
            gh = g.hero,
            bX = gh.x,
            bY = gh.y,
            rs = g.roles,
            tar = 0;
        if (g.ctx.isPointInPath(bX, bY + 10) || g.ctx.isPointInPath(bX + 10, bY) || g.ctx.isPointInPath(bX + 10, bY + 10))g.cv.click();
        for (var i = 2; i < 8; i++) {
            if ((rs[i].x - bX) < 100 && (rs[i].x - bX) > 0) {
                tar = game.roles[i].downY;
                if ((bY > tar && (rs[i].x - bX) < 38) || (bY - tar) > 80) {
                    g.cv.click();
                }
                break;
            }
        }
        if (!g.isRuning) clearInterval(timer);
    }, 10)
})();