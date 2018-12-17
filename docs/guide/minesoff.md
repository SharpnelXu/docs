# 关于Mines Off

从Etterna 0.60版本开始，Mines Off的成绩被无效化了。具体表现为如果谱面有雷（Mine），则玩家带有Mines Off的成绩为00.00。

如果实在不会打地雷（雨幕幕：像我在0.60之前一直开着Mines Off，根本不会打）可以用一个简单的方式解决这个问题。因为地雷是由三个部分组成的，所以依次消除掉就好。

1. 地雷的图片，大部分时候都是属于所用NoteSkins的一部分。
2. 地雷击中的图片，默认的图片位于根目录下`NoteSkins/common/common/Fallback HitMine Explosion.png`。
3. 地雷击中的音效，可以在游戏内由`图像与音效设定->炸弹音效`直接关掉。

1和2可以通过替换透明图片文件来解决，3则可以直接改设置。这样操作的结果就是地雷是完全看不见的，所以可以放心开着地雷打而不用担心影响读谱。不过打中地雷HP和百分比还是照扣，这也是这样修改之后唯一能知道自己中雷的方法。