<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">基本信息</span></div>
                <div class="box-con">
                    <div class="order-form" style="padding-right:280px;">
                        <Form :label-width="100">
                            <FormItem label="预约单号">
                                <Input value="YYD00120180705002" disabled/>
                            </FormItem>
                            <FormItem label="车主姓名">
                                <Input value="秦明" disabled/>
                            </FormItem>
                            <FormItem label="车主手机">
                                <Input value="15987623548" disabled/>
                            </FormItem>
                            <div class="line"></div>    
                            <FormItem label="车牌号">
                                <Input value="沪D96872" disabled/>
                            </FormItem>                         
                            <FormItem label="车辆品牌">
                                <Input value="B奔驰" disabled/>
                            </FormItem>                         
                            <FormItem label="车型">
                                <Input value="" disabled/>
                            </FormItem>                         
                            <FormItem label="行驶里程" class="mileage-input-item">
                                <Input value="35987" disabled/>
                            </FormItem>                      
                            <div class="line"></div>    
                            <FormItem label="客户需求">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:110%" disabled/>
                                <RadioGroup style="margin-top:10px;" v-model="isConnected">
                                    <Radio label="已联系客户" disabled></Radio>
                                </RadioGroup>
                            </FormItem>                            
                            <FormItem label="备注">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:110%" disabled/>
                            </FormItem>                            
                        </Form>                    
                    </div>
                    <div class="order-form-right">
                        <div class="service">
                            <div class="top">订单状态</div>
                            <div class="con text-c">未转工单</div>
                        </div>
                        <div class="service">
                            <div class="top">服务类别</div>
                            <div class="con text-c">常规保养</div>
                        </div>
                        <div class="service">
                            <div class="top">预约时间</div>
                            <div class="con text-c">2018-08-21  15:20</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-top"><span class="title">服务工时</span>
                    <span>工时金额合计<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="table">
                        <table>
                            <tr>
                                <th width="20%">服务项目</th>
                                <th>数量</th>
                                <th>工时金额(￥)</th>
                                <th>折扣(%)</th>
                                <th>折后金额(￥)</th>
                                <th>维修技师</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Button class="new">新增</Button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-top">
                    <div class="tabs-nav" style="float:left">
                        <span class="tab" :class="{active:isXqpj}" @click="pjtab()">需求配件</span>
                        <span class="tab" :class="{active:!isXqpj}" @click="pjtab()">实际领用配件</span>
                    </div>
                    <span>工时金额合计<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="tabs-con">
                        <div class="tabpane" v-show="isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th width="20%">配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Select placeholder="请选择">
                                                <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                            </Select></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button><Button class="new">新增</Button></td>
                                    </tr>
                                </table>
                            </div>                            
                        </div>   
                        <div class="tabpane" v-show="!isXqpj"></div>   
                    </div>

                </div>
            </div>
            <div class="btm-btns-place">
                <div class="btm-btns">
                    <Button type="primary">修改</Button>             
                    <Button type="primary">取消</Button>
                    <Button type="primary">直转工单</Button>             
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'booking_detail',
    data () {
        return {
            isDanwei:true,
            isXqpj:true,
            serviceTagList: [{value:''}],
            czxzValue:"单位",
            isConnected:'已联系客户',
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
    }
};
</script>

