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
                            <FormItem label="服务类型">
                                <Input value="维修" disabled/>
                            </FormItem>
                            <FormItem label="工单号">
                                GD0012018080704013
                            </FormItem>
                            <div class="line"></div>
                            <FormItem label="上次服务时间">
                                <Input value="2018-06-27  08:38" disabled/>
                            </FormItem>   
                            <FormItem label="上次服务项目">
                                <Input value="检测维修" disabled/>
                            </FormItem>   
                            <div class="line"></div>
                            <FormItem label="车牌号" required>
                                <Input value=""disabled/>
                            </FormItem>
                            <FormItem label="车主性质" required>
                                <Input value="个人" disabled/>
                            </FormItem>
                            <FormItem label="车主性别">
                                <Input value="男" disabled/>
                            </FormItem>
                            <FormItem label="VIN">
                                <Input value="SALSN5798458144547" disabled/>
                            </FormItem>
                            <FormItem label="车主" required>
                                <Input value="捷力安旗舰店" disabled/>
                            </FormItem>
                            <FormItem label="身份证号">
                                <Input value="340515199265150111" disabled/>
                            </FormItem>
                            <FormItem label="发动机号">
                                <Input value="" disabled/>
                            </FormItem>
                            <FormItem label="联系手机" required>
                                <Input value="13136489752" disabled/>
                            </FormItem>
                            <FormItem label="登记日期">
                                <DatePicker type="date" style="width:100%"></DatePicker>
                            </FormItem>
                            <FormItem label="车辆品牌">
                                <Input value="L-路虎" disabled/>
                            </FormItem>
                            <FormItem label="送修人" required>
                                <Input value="王志勇"/>
                            </FormItem>
                            <FormItem label="下次保险" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="车型">
                                <Input value="揽胜" disabled/>
                            </FormItem>
                            <FormItem label="送修人手机" required>
                                <Input value="13136489752"/>
                            </FormItem>
                            <FormItem label="下次年审" required>
                                <DatePicker type="date" style="width:100%"></DatePicker>
                            </FormItem>
                            <FormItem label="下次保养">
                                <DatePicker type="date" style="width:100%"></DatePicker>
                            </FormItem>
                            <FormItem label="保养里程" class="mileage-input-item">
                                <Input value=""/>
                            </FormItem>   
                            <div class="clear"></div>

                            <FormItem label="联系地址" class="large-input-item">
                                <al-selector 
                                    v-model="resDefault"
                                    level="2"
                                    auto
                                />
                            </FormItem>   
                            <FormItem label="详细地址">
                                <Input value="" disabled/>
                            </FormItem>
                            <div class="line"></div>
                            <FormItem label="进场时间" required>
                                <DatePicker type="datetime" style="width:100%"></DatePicker>
                            </FormItem>
                            <FormItem label="进场里程" class="mileage-input-item" required>
                                <Input value="2"/>
                            </FormItem>   
                            <FormItem label="渠道来源">
                                <Select placeholder="请选择">
                                    <Option value="再次进店"></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="服务顾问">
                                <Select value="孙玉环" disabled>
                                    <Option value="孙玉环">孙玉环</Option>
                                </Select>
                            </FormItem>
                           <FormItem label="维修技师">
                                <Select value="">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                           <FormItem label="支付方式">
                                <Select value="">
                                    <Option value="现金">现金</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="服务项目" class="search-form-item large-input-item" required>
                                <Input value="" disabled/><Button icon="search" class="search-btn"></Button>
                            </FormItem>
                            <FormItem label="变速箱类型">
                                <RadioGroup>
                                    <Radio label="手动挡"></Radio>
                                    <Radio label="自动挡"></Radio>
                                    <Radio label="手自一体"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="进场油表" class="large-input-item" required>
                                <RadioGroup>
                                    <Radio label="空箱"></Radio>
                                    <Radio label="1/4"></Radio>
                                    <Radio label="1/2"></Radio>
                                    <Radio label="3/4"></Radio>
                                    <Radio label="满箱"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="是否洗车">
                                <RadioGroup>
                                    <Radio label="是"></Radio>
                                    <Radio label="否"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="客户需求" class="large-input-item">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%"/>
                            </FormItem>                            
                            <FormItem label="备注" class="large-input-item">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%"/>
                            </FormItem>   

                        </Form>                       
                    </div>
                    <div class="order-form-right">
                        <div class="service">
                            <div class="top">服务项目</div>
                            <div class="con text-c"></div>
                        </div>
                        <div class="service">
                            <div class="top">服务顾问</div>
                            <div class="con text-c"></div>
                        </div>
                        <div class="service">
                            <div class="top">维修技师</div>
                            <div class="con text-c"></div>
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
                    <Button type="primary">派工</Button>
                    <Button type="primary">打印《派工单》</Button>             
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

