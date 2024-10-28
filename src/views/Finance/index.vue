<template>
  <div>
    <div>
        <h1>FinanceIndex</h1>
    </div>
    <div>
      <span>
        Date: {{ date }}
      </span><br>
      <span>
        Time: {{ time }}
      </span>
    </div>
    <div>
      <router-link to="/home">返回</router-link>
    </div>
    <router-view></router-view>
    <div class="button-list">
        <button
            :class="conShow == item.value ? 'active' : ''"
            v-for="(item, index) in buttonList" :key="index"
            @click="changeButton(item)"
        >
        {{ item.label }}
        </button>
    </div>
  </div>
</template>

<script>
import {getDate, getTime} from '@/utils/getDate'
export default {
  name: "FinanceIndex",
  data() {
    return {
      date: getDate(),
      time: getTime(),
      setInterval: '', // 定时器
      conShow: 0, // 0: 首页，1：资金状况
      buttonList: [
        {
          label: "首页",
          value: 0,
          routerPath: "/finance/home",
        },
        {
          label: "资金状况",
          value: 1,
          routerPath: "/finance/capital",
        },
      ],
    };
  },
  methods: {
    /**
     * @description 切换按钮
     * @param e 当前点击的按钮
     */
    changeButton(e) {
        this.conShow = e.value, // 切换当前显示的组件

        this.$router.replace(e.routerPath);
    },
    /**
     * @description 定时器修改时间
     */
    changeTime() {
      this.setInterval = setInterval(() => {
          this.time = getTime()
      }, 1000)
    }
  },
  created() {
    this.conShow = this.$route.meta.show;
    this.changeTime();
  },
  beforeDestroy() {
    clearInterval(this.setInterval); // 销毁定时器
  }

};
</script>

<style>
.active {
    background: #409eff !important;
}

.no-active {
    background: #543f;
}
</style>
