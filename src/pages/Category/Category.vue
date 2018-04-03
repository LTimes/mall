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
    <!-- 分类 -->
    <div class="category-content" v-show="brandFlag == 0">
        <div class="content-left" ref="wrappertab">
            <ul>
                <li v-for="(item, index) in tabLeft" :key="item.Id" @click="selecttabLeft(index)" :class="{'on': item.active}">
                    <a href="javscript:;">{{item.Text}}</a>
                </li>
            </ul>
        </div>
        <div class="content-right">

        </div>
    </div>
    <!-- 品牌 -->
    <div class="brand" v-show="brandFlag == 1">
        <div class="hot_brand">
            <h4>-- 推荐品牌 --</h4>
            <ul>
                <li v-for="(item) in brandList" :key="item.Id">
                    <div class="hot_brand-content">
                        <img :src="'../../../static'+item.Img" alt="">
                        <span>{{item.Name}}</span>
                        <span>{{item.country}}</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>  
    <nav-footer></nav-footer>
</div>
</template>

<script>
import NavFooter from '@/components/footer/NavFooter'
import axios from 'axios'
import BScroll from 'better-scroll'

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
                ],
                tabLeft: [],
                brandList: [], // 品牌类表
                brandFlag: 0, // 显示品牌还是分类
                categoryFlag: 0, // 显示分类的哪一个内容
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
                this.brandFlag = index;                   

            },
            selecttabLeft(index) {
                this.tabLeft.forEach((item) => {
                    item.active = false;
                })
                this.tabLeft[index].active = true;
            },
            // 获取分类菜单左侧列表
            getDataList() {
                axios.get('/static/service/getData.json').then((response) => {
                    if (response.status === 200) {
                     this.tabLeft = response.data.categoryTab;   
                    }
                    this.$nextTick(() => {
                        let options = {
                            scrollY: true,
                            click: true
                        }
                        this.tabscroll = new BScroll(this.$refs.wrappertab,options)
                    })
                })
            },
            // 获取品牌数据
            getBrandList() {
                axios.get('/static/service/getData.json').then((response) => {
                    if (response.status === 200) {
                     this.brandList = response.data.brandList;   
                    }
                    this.$nextTick(() => {
                        let options = {
                            scrollY: true,
                            click: true
                        }
                        this.tabscroll = new BScroll(this.$refs.wrappertab,options)
                    })
                })
            }

        },
        mounted() {
        },
        created() {
            this.getDataList();
            this.getBrandList();
        }
    }
</script>
<style scoped>
.category {
    background: #f8f8f8;
}
.category-content {
    height: 29rem;
}
    .cate-tab {
        height: 34px;
        border-bottom: 1px solid #999;
        box-shadow: 0 0 4px #ddd;
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
    .category-content {
        display: flex;
        flex-direction: column;
    }
    .content-left {
        width: 4rem;
        height: 28rem;
        overflow: hidden;
        
    }
    .content-left ul {
        height: 35.6rem;
        background: #fff;
    }
    .content-left ul li:first-child{
        border-top: 1px solid #eee;
    }
    .content-left ul li  {
        width: 100%;
        height: 2.5rem;
        border-bottom: 1px solid #eee;
    }
    
    .content-left ul li a {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 2.5rem;
        display: block;
        color: #666;
    }
    .content-left ul li.on a {
        background: #f8f8f8;
        color: #f09;
    }
    /* 品牌样式 */
    .hot_brand {
        height: 100%;
    }
    .hot_brand h4 {
        text-align: center;
    }
    .hot_brand ul li {
        width: 33%;
        float: left;
    }
    .hot_brand-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .hot_brand-content .img {
        width: 2rem;
    }
</style>
