- ES6 

  ## let 和 const 命令

  ### let 命令

  - 声明变量，声明的变量，只在 let 命令所在的代码块内有效
  - 不存在变量提升，即声明的变量一定要在声明后使用，否则报错
  - 暂时性死区，只要块级作用域内存在let命令，它所声明的变量就”绑定“这个区域，不受外部影响
  - 不允许重复声明

  ### 块级作用域

  - 引入块级作用域，明确允许在块级作用域之中声明函数

  ### const 命令

  - 声明一个只读的变量，常量的值不能改变
  - 一旦声明变量，就必须初始化
  - 只在声明所在的块级作用域内有效
  - 常量不提升，存在暂时性死区

  ## 变量的解构赋值

  ### 数组的解构赋值

  允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

  ```js
  let [a, b, c] = [1, 2, 3];
  let [a, [b], d] = [1, [2, 3], 4];
  let [x, y, z] = new Set(['a', 'b', 'c']);
  ```

  - 对于 set 结构，也可以使用数组的解构赋值
  - 只要数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值

  解构赋值允许指定默认值

  ```js
  let [x, y = 'b'] = ['a'];
  
  
  let [x = 1] = [undefined];
  x // 1
  
  let [x = 1] = [null];
  x // null
  ```

  

  

  

  

  

  

  

  

  

  

  