<template>
<div class="category">
    <!-- 分类和品牌 -->
    <div class="cate-tab">
        <ul>
            <li v-for="(item, index) in tabs" :key="item.Id" @click="selectTab(index)" :class="{'on': item.active}">
                <span>{{item.Text}}</span>
            </li>
        </ul>
    </div>
    <nav-footer></nav-footer>
</div>
</template>

<script>
import NavFooter from '@/components/footer/NavFooter'
import axios from "axios"
import getData from '@/service/getData'
    export default {
        data() {
            return {
                tabs:[
                    {
                        Text:'分类',
                        active: true,
                        Id: 0                        
                    },
                    {
                        Text:'品牌',
                        active: false,
                        Id: 1                        
                    }
                ]
            }
        },
        components: {
            NavFooter
        },
        methods: {
            selectTab(index) {
                this.tabs.forEach((item) => {
                    item.active = false;
                })
                this.tabs[index].active = true;
            },
            getDataList() {
                axios.post('./src/service/getData.js').then((response) => {
                    let res = response.data;
                    console.log(res)
                })
            }
        },
        mounted() {
            this.getDataList();
        }
    }
</script>
<style>
    .cate-tab {
        height: 60px;
        padding: 10px 12px;
    }
    .cate-tab ul {
        display: flex;
        justify-content: space-around;
        align-items:flex-end;
    }
    .cate-tab ul li{
           width: 60px;
    height: 42px;
    text-align: center;
    line-height: 42px;
        border-bottom: 2px solid #fff;
    }
    .cate-tab ul li.on {
        color: #f09;
        border-bottom: 2px solid #f09;
    }
</style>
