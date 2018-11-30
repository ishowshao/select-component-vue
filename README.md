# select-component-vue

wx's Component selectComponent and selectAllComponents for Vue

selector类似于 CSS 的选择器，但仅支持下列语法。

* ID选择器：#the-id
* class选择器（可以连续指定多个）：.a-class.another-class
* 子元素选择器：.the-parent > .the-child
* 后代选择器：.the-ancestor .the-descendant
* 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
* 多选择器的并集：#a-node, .some-other-nodes
