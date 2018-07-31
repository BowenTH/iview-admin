<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">新增救援车辆</span></div>
                <div class="box-con">
                    <div class="order-form vertical">
                        <Form :label-width="100">
                            <FormItem label="洗车单号">
                                <Input value="X326546654466" disabled/>
                            </FormItem>
                            <FormItem label="车牌号" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="洗车工" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="开单人" required>
                                <Select placeholder="请选择">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <div class="line"></div>

                            <h4>线上支付</h4>    
                            <FormItem label="支付宝" class="cost-input-item">
                                <Input value=""/>
                            </FormItem>             
                            <FormItem label="微信（APP）" class="cost-input-item">
                                <Input value=""/>
                            </FormItem>             
                            <div class="line"></div>

                            <h4>其他</h4>    
                            <FormItem label="现金" class="cost-input-item">
                                <Input value=""/>
                            </FormItem>             
                            <FormItem label="挂账单位">
                                <Input value=""/>
                            </FormItem>             
                            <FormItem label="挂账" class="cost-input-item">
                                <Input value=""/>
                            </FormItem>             
                            <FormItem label="合计" class="cost-input-item">
                                <Input value=""/>
                            </FormItem>             

                        </Form>                    
                    </div>
                </div>
            </div>

            <div class="btm-btns-place">
                <div class="btm-btns">
                    <Button @click="cancelEdit">取消</Button>
                    <Button type="primary" @click="submitShowDetail">确定</Button>             
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js';

export default {
    name: 'washing_checkin',
    data () {
        return {
            isDanwei:true,
            isXqpj:true,
            serviceTagList: [{value:''}],
            czxzValue:"单位",
            currentPageName: this.$route.name,
        };
    },
    methods: {
        pjtab(){
             this.isXqpj==true?this.isXqpj=false:this.isXqpj=true;
        },
        czxz(){
            if(this.czxzValue=="单位") this.isDanwei=true;
            if(this.czxzValue=="个人") this.isDanwei=false;
        },
        submitShowDetail () {
            this.cancelEdit();

            util.openNewPage(this, 'washing_detail');
            this.$router.push({
                name: 'washing_detail'
            });
        },
        cancelEdit(){
            this.$store.commit('removeTag', 'washing_checkin');
            localStorage.pageOpenedList = JSON.stringify(this.$store.state.app.pageOpenedList);
            let lastPageName = '';
            if (this.$store.state.app.pageOpenedList.length > 1) {
                lastPageName = this.$store.state.app.pageOpenedList[1].name;
            } else {
                lastPageName = this.$store.state.app.pageOpenedList[0].name;
            }
            this.$router.push({
                name: lastPageName
            });            
        },
    }
};
</script>

