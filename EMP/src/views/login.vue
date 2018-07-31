<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="uname">
                            <Input v-model="form.uname" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="upwd">
                            <Input type="password" v-model="form.upwd" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="imgcode" class="loginImgCode">
                            <Input v-model="form.imgcode" placeholder="请输入验证码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                                <span slot="append">
                                    <img :src="img" @click="getVerify">
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import util from '@/libs/util';
export default {
    data () {
        return {
            form: {
                uname: '',
                upwd: '',
                imgcode:'',
                imgtoken:'',
                type:1,     //1前台2后台3主数据
                token:2,    //是否需要token，1需要2不需要
            },
            rules: {
                uname: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                upwd: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                imgcode: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ],
            },
            img:'', //验证码图片 
        };
    },
    methods: {
        handleSubmit () {   //登录
            this.$refs.loginForm.validate((valid) => {
                util.ajax.post('common/login',this.form).then(response=>{
                    console.log(response.data.data);
                    if(response.data.errCode === 0) {    //登录成功
                        Cookies.set('user', this.form.userName);
                        Cookies.set('password', this.form.password);
                        //this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                        this.$store.commit('login', response.data.data);   // access_token存一下
                        Cookies.set('access', 0);
                        this.$router.push({ name: 'home_index'});
                    } else {
                        this.$Message.warning(response.data.errMsg);
                        this.getVerify();
                    }
                })

                /*if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }*/
            });
        },
        getVerify () {    //获取验证码
            let imgtoken = new Date().getTime() + Math.ceil(Math.random()*10);
            this.form.imgtoken = imgtoken;
            this.img = 'http://data.yg.com/common/codeimg?imgtoken='+imgtoken;

            /*let imgToken = new Date().getTime() + Math.round(Math.random()*10);
            util.ajax.post('common/codeimg',Qs.stringify({imgtoken:imgToken})).then(response=>{
                console.log('http://data.yg.com/common/codeimg/'+response.data)
                if(response === 0) {
                    this.img = 'http://data.yg.com/common/codeimg/'+response.data
                }
            })*/
        },
        login() {   //登录

        }
    },
    mounted() {
        this.getVerify();
 
    }
};
</script>

<style>

</style>
