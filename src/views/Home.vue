<template>
    <div>
        <h1>ProjectHome</h1>
        <span>
            Date: {{ date }}
        </span><br>
        <span>
            Time: {{ time }}
        </span>
        <h2>
            <router-link to="/finance">金融</router-link>
        </h2>
        <h2>
            <router-link to="/demo">demo</router-link>
        </h2>
    </div>
</template>

<script>
import {getDate, getTime} from '@/utils/getDate'

export default {
    name: 'ProjectHome',
    data() {
        return {
            date: getDate(),
            time: getTime(),
            setInterval: '', // 定时器
        }
    },
    methods: {
        /**
         * @description 定时器修改时间
         *
         */
        changeTime() {
            this.setInterval = setInterval(() => {
                this.time = getTime()
            }, 1000)
        }
    },
    created() {
        this.changeTime();
    },
    beforeDestroy() {
        clearInterval(this.setInterval); // 销毁定时器
    }

}
</script>

<style>

</style>