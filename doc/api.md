参考资料: 
http://www.w3school.com.cn/svg/index.asp
https://msdn.microsoft.com/zh-cn/library/gg193979
http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/


## 简介
SVG 指可伸缩矢量图形。是使用 XML 来描述二维图形和绘图程序的语言。

SVG 代码的根元素是以 &lt;svg&gt; 元素开始，&lt;/svg&gt;结束。width 和 height 属性可设置 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。


## 使用说明
#### 如何画圆
```
<svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="40" stroke="black" stroke-width="2" fill="#f60"/>
</svg>
```

- SVG 的 &lt;circle&gt; 用来创建一个圆。
- cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。
- r 属性定义圆的半径。
- stroke 和 stroke-width 属性控制如何显示形状的轮廓,也就是边框。stroke定义边框的颜色,stroke-width定义边框的宽度。
- fill 属性设置形状内的颜色,也就是背景色(填充色)。


#### 如何画矩形
```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" rx="20" ry="20" width="300" height="100" style="fill:rgb(0,0,255);fill-opacity:.5;stroke-width:2;stroke:#f60;stroke-opacity:.5;opacity:0.6" />
</svg>
```

- SVG 的 &lt;rect&gt; 用来创建一个矩形。
- x 属性定义矩形的左侧位置(矩形到浏览器窗口左侧的距离)。
- y 属性定义矩形的顶端位置(矩形到浏览器窗口顶端的距离)。
- rx 和 ry 属性可使矩形产生圆角。
- rect 元素的 width 和 height 属性可定义矩形的高度和宽度。
- style 属性用来定义 CSS 属性。
- CSS 的 fill 属性定义矩形的填充颜色(背景色)。
- CSS 的 fill-opacity 属性定义填充颜色透明度。
- CSS 的 stroke 代表边框的颜色。
- CSS 的 stroke-width 代表边框的宽度。
- CSS 的 stroke-opacity 代表边框颜色的透明度。
- CSS 的 opacity 定义整个元素的透明度。

## 如何画椭圆形



