import Cookies from 'js-cookie';
import util from '@/libs/util'

const user = {
    state: {
        access_token:'',
    },
    mutations: {
        login (state, data) {
            state.access_token = data.access_token;
            localStorage.access_token = data.access_token;
            localStorage.fresh_token = data.fresh_token;
            localStorage.access_token_expire = data.access_token_expire;
            localStorage.fresh_token_expire = data.fresh_token_expire;
        },
        logout (state, vm) {
            console.log(Math.round(Math.random()*10));
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('access');
            state.access_token = '';    //退出登录销毁access_token
            localStorage.access_token = '';
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        },
        getToken (state) {      //把token放回state中
            let access_token = localStorage.access_token;
            state.access_token = access_token;
        },
        refresh(state) {    //刷新token
            let access_token = localStorage.access_token;
            let fresh_token  = localStorage.fresh_token;
            util.ajax.post('common/freshtoken',{access_token:access_token,fresh_token:fresh_token}).then(response=>{
                if(response.data.errCode === 0) {
                    state.access_token = response.data.access_token;
                    localStorage.access_token = response.data.access_token;
                    localStorage.fresh_token =response.data.fresh_token;                    
                    localStorage.fresh_token_expire = response.data.fresh_token_expire;
                }
            })
        }
    }
};

export default user;
