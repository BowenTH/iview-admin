import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';

Vue.use(VueI18n);
Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {

        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        util.checkUpdate(this);

        

        //后台获取菜单
        /*util.ajax.get('home/test').then(response=>{
            console.info('菜单列表：', response)
            let munuss = [];
            let childrens = [];
            let num = '';

            let mapp = function(data) {
                data.map(function(item, key) {
                    item.component = (resolve) => require(['..' + item.component + '.vue'], resolve);
                    
                    if(item.children != undefined) {    //有子集
                        num = key;
                        munuss.push(item);
                        mapp(item.children);
                    } else {    //无子集
                        childrens.push(item);
                    }
                })
            }

            mapp(response.data.data);

            console.log('666')
            console.log(munuss)

            munuss.children = childrens;

            //存菜单
            sessionStorage.setItem('menus', JSON.stringify(response.data.data[1]));

            this.$store.commit('insertMenulist',munuss);
            
            //console.log(this.$router)

            //动态添加路由
            this.$router.addRoutes(response.data.data);

            //console.log(response.data.data[0])
        })*/

    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});
