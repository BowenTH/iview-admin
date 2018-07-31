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
                            <FormItem label="车牌号" required>
                                <Input value="" disabled/>
                            </FormItem>
                            <FormItem label="客户名称" required>
                                <Input value="" disabled/>
                            </FormItem>
                            <FormItem label="联系电话" required>
                                <Input value="" disabled/>
                            </FormItem>
                            <FormItem label="品牌">
                                <Select value="L-路虎" disabled>
                                    <Option value="L-路虎">L-路虎</Option>
                                </Select>
                            </FormItem>                            
                            <FormItem label="车型" class="search-form-item" required>
                                <Input value="" disabled/>
                            </FormItem>                            
                            <FormItem label="公里数" class="mileage-input-item">
                                <Input value="" disabled/>
                            </FormItem>   
                            <FormItem label="救援地址">
                                <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" style="width:110%" disabled/>
                            </FormItem>   
                            <div class="clear"></div>
                            <FormItem label="救援项目" class="large-input-item" required>
                                <RadioGroup>
                                    <Radio label="拖车"></Radio>
                                    <Radio label="电瓶搭车"></Radio>
                                    <Radio label="送油"></Radio>
                                    <Radio label="更换轮胎"></Radio>
                                    <Radio label="其他"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <div class="clear"></div>
                            <FormItem label="备注">
                                <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" style="width:110%"/>
                            </FormItem>                            
                        </Form>                      
                    </div>
                    <div class="order-form-right">
                        <div class="service">
                            <div class="top">订单状态</div>
                            <div class="con text-c">未转工单</div>
                        </div>
                        <div class="service">
                            <div class="top">服务顾问</div>
                            <div class="con text-c">于成宝</div>
                        </div>
                        <div class="service">
                            <div class="top">登记时间</div>
                            <div class="con text-c">2018-08-21  15:20</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-top"><span class="title">服务工时</span>
                    <span>折后金额合计：<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="table">
                        <table>
                            <tr>
                                <th width="50%">工时项目</th>
                                <th>工时金额(￥)</th>
                                <th width="120">操作</th>
                            </tr>
                            <tr>
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
                    <span>折后件金额合计：<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="tabs-con">
                        <div class="tabpane" v-show="isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th width="40%">配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>合计金额(￥)</th>
                                        <th width="120">操作</th>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button></td>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button><Button class="new">新增</Button></td>
                                    </tr>
                                </table>
                            </div>                            
                        </div>   
                        <div class="tabpane" v-show="!isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th width="40%">配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>合计金额(￥)</th>
                                        <th width="120">操作</th>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button></td>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button><Button class="new">新增</Button></td>
                                    </tr>
                                </table>
                            </div>                                                      
                        </div>   
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

