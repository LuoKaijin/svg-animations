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
<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
```

- SVG 的 <circle> 用来创建一个圆。
- cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。
- r 属性定义圆的半径。
- stroke 和 stroke-width 属性控制如何显示形状的轮廓,也就是边框。stroke定义边框的颜色,stroke-width定义边框的宽度。
- fill 属性设置形状内的颜色,也就是背景色(填充色)。


