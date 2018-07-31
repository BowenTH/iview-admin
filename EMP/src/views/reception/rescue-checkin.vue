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
                            <FormItem label="车牌号" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="客户名称" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="联系电话" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="品牌">
                                <Select placeholder="请选择">
                                    <Option value="L-路虎">L-路虎</Option>
                                </Select>
                            </FormItem>                            
                            <FormItem label="车型" class="search-form-item" required>
                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                            </FormItem>                            
                            <FormItem label="公里数" class="mileage-input-item">
                                <Input value=""/>
                            </FormItem>   
                            <FormItem label="救援地址">
                                <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" style="width:110%"/>
                            </FormItem>   
                            <FormItem label="救援项目" class="large-input-item" required>
                                <RadioGroup>
                                    <Radio label="拖车"></Radio>
                                    <Radio label="电瓶搭车"></Radio>
                                    <Radio label="送油"></Radio>
                                    <Radio label="更换轮胎"></Radio>
                                    <Radio label="其他"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="备注">
                                <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" style="width:110%"/>
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
    name: 'rescue_checkin',
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

            util.openNewPage(this, 'rescue_detail');
            this.$router.push({
                name: 'rescue_detail'
            });
        },
        cancelEdit(){
            this.$store.commit('removeTag', 'rescue_checkin');
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

