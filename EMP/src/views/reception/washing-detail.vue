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
                                <Input disabled value="X326546654466"/>
                            </FormItem>
                            <FormItem label="车牌号" required>
                                <Input disabled value=""/>
                            </FormItem>
                            <FormItem label="洗车工" required>
                                <Input disabled value=""/>
                            </FormItem>
                            <FormItem label="开单人" required>
                                <Select disabled value="">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <div class="line"></div>

                            <h4>线上支付</h4>    
                            <FormItem label="支付宝" class="cost-input-item">
                                <Input disabled value=""/>
                            </FormItem>             
                            <FormItem label="微信（APP）" class="cost-input-item">
                                <Input disabled value=""/>
                            </FormItem>             
                            <div class="line"></div>

                            <h4>其他</h4>    
                            <FormItem label="现金" class="cost-input-item">
                                <Input disabled value=""/>
                            </FormItem>             
                            <FormItem label="挂账单位">
                                <Input disabled value=""/>
                            </FormItem>             
                            <FormItem label="挂账" class="cost-input-item">
                                <Input disabled value=""/>
                            </FormItem>             
                            <FormItem label="合计" class="cost-input-item">
                                <Input disabled value=""/>
                            </FormItem>             

                        </Form>                    
                    </div>
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

        };
    },
    methods: {

    }
};
</script>

