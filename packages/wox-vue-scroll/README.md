#### 安装/测试/编译

```javascript {.line-numbers}

  // yarn 
  $ yarn add wox-vue-scroll

  // npm 
  $ npm i wox-vue-scroll

```

### 使用

| 子元素接受参数 | 描述 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| isScrollDown | 是否向下滚动 | Boolean | true/false | false |
| showGoTop | 是否展GoTop示按钮 |Boolean | true/false | false |

```javascript {.line-numbers}

  import WoxVueScroll from 'wox-vue-scroll'

  Vue.use(WoxVueScroll)

  <template>
    <WoxVueScroll>
      <div slot-scope="{isScrollDown, showGoTop}"> 
         <div class="sideBar" v-show="isScrollDown">
          <div class="customer sideBar-btn"></div>
          <div class="phone sideBar-btn">
            <a href="tell://17862818029"></a>
          </div>
          <div class="goTop sideBar-btn" @click="goTop" v-show="showGoTop"></div>
        </div>
      </div>
    </WoxVueScroll>
  </template>

  <script>
  import { WoxVueCalendar } from 'wox-vue-calendar';

  

```
