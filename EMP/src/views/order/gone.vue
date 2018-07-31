<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-mainlist-con">
            <ul>
                <li v-for="(car,index) in cars" :class="{active:index == chooseNum}" @click="isChoose(index)">
                    <img src="../../images/brand.png">
                    <div class="right-cont">
                        <p>{{car.plate}}</p>
                        <p>出场时间：{{car.time}}</p>
                        <p>服务项目：{{car.item}}</p>
                        <p>实际金额：{{car.cost}}</p>
                        <p>服务顾问：{{car.adviser}}</p>
                        <p>维修技师：{{car.tech}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="order-content-con" style="left:305px;">
            <div class="box">
                <div class="box-top"><span class="title">基本信息</span></div>
                <div class="box-con">
                    <div class="order-form" style="padding-right:280px;">
                        <Form :label-width="80">
                            <FormItem :label="baseItem.label" v-for="(baseItem,idx1) in baseItems" :key="'baseItem'+idx1">
                                <Input :value="baseItem.value" disabled/>
                            </FormItem>
                            <div class="line"></div>    
                            <FormItem :label="costItem.label" v-for="(costItem,idx2) in costItems" :key="'costItem'+idx2" class="cost-input-item">
                                <Input :value="costItem.value" disabled/>
                            </FormItem>
                        </Form>                    
                    </div>
                    <div class="order-form-right">
                        <div class="status"><img src="../../images/chuchang.png">已出场</div>
                        <div class="service">
                            <div class="top">服务项目</div>
                            <div class="con">更换空调滤网、 洗车、小保养、车身喷 漆、更换保险杠</div>
                        </div>
                        <div class="service">
                            <div class="top">服务顾问</div>
                            <div class="con text-c">张大米</div>
                        </div>
                        <div class="service">
                            <div class="top">维修技师</div>
                            <div class="con text-c">张晓阳</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-top"><span class="title">验车记录</span><span>验车日期：18-07-12  09:20</span></div>
                <div class="box-con pd-12">
                    <div :class="{closeBox:isClose}">
                        <Form :label-width="60">
                            <div class="box-l">
                                <div class="box-top"><span class="title">环检</span></div>
                                <div class="box-con pd-12">
                                    <div class="img-view">
                                        <div class="img-view-item" v-for="(imgItem1,img1) in imgItems1" :key="'baseItem'+img1">
                                            <img src="../../images/car.png">
                                            <p>{{imgItem1.name}}</p>
                                        </div>
                                    </div>
                                    <FormItem label="备注" style="width:90%;">
                                        <Input disabled type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                                    </FormItem>
                                </div>                        
                            </div>
                            <div class="box-r">
                                <div class="box-top"><span class="title">维修技师检测</span></div>
                                <div class="box-con pd-12">
                                    <div class="img-view">
                                        <div class="img-view-item" v-for="(imgItem2,img2) in imgItems2" :key="'baseItem'+img2">
                                            <img src="../../images/car.png">
                                        </div>
                                    </div>
                                    <FormItem label="备注" style="width:90%;">
                                        <Input disabled type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                                    </FormItem>
                                </div>                        
                            </div>
                        </Form>                        
                    </div>
                    <div class="text-c clear">
                        <button class="box-toggle off" @click="toggleBox" :class="{active:isClose}">点击展开</button>
                        <button class="box-toggle on" @click="toggleBox" :class="{active:!isClose}">点击收起</button>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-top"><span class="title">服务工时</span>
                    <span>工时金额合计：<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计：<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="table">
                        <table>
                            <tr>
                                <th>服务项目</th>
                                <th>数量</th>
                                <th>工时金额(￥)</th>
                                <th>折扣(%)</th>
                                <th>折后金额(￥)</th>
                                <th>维修技师</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td><Select placeholder="请选择">
                                        <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                    </Select></td>
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
                    <span>配件数量合计：<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;配件金额合计：<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计：<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="tabs-con">
                        <div class="tabpane" v-show="isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th>配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr>
                                        <td><Select placeholder="请选择">
                                                <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                            </Select></td>
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
                        <div class="tabpane" v-show="!isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th>配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr>
                                        <td><Select placeholder="请选择">
                                                <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                            </Select></td>
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
                    </div>

                </div>
            </div>
            <div class="btm-btns-place">
                <div class="btm-btns" style="left: 505px;">
                    <Button type="primary">打印《维修结算单》</Button>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gone_detail',
    data () {
        return {
            chooseNum: 0,
            isClose:true,
            isXqpj:true,
            cars: [
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00'},
            ],
            baseItems: [
                {label:'车牌号',value:'鲁K1235'},
                {label:'车主性质',value:'个人'},
                {label:'工单号',value:'G232546654566'},

                {label:'VIN',value:'236545f566566G6556'},
                {label:'车主',value:'秦明'},
                {label:'进场时间',value:'201-07-12 10:56'},

                {label:'发动机号',value:'2099224565323333222'},
                {label:'车主手机',value:'13800138000'},
                {label:'进场里程',value:'32568'},

                {label:'车辆品牌',value:'奔驰'},
                {label:'送修人',value:'秦敏'},
                {label:'进场油表',value:'3/4'},

                {label:'车型',value:'A3'},
                {label:'送修人手机',value:'15821983569'},
                {label:'支付方式',value:'现金'},

                {label:'下次保险',value:'2018-11-15'},
                {label:'下次年审',value:'2018-11-15'},
                {label:'支付方式',value:'现金'},

                {label:'下次保养',value:'2018-10-01'},
                {label:'保养里程',value:''},
                {label:'财务列表',value:'C-客账'},

                {label:'客户需求',value:''},                
                {label:'备注',value:''},
                {label:'是否洗车',value:'否'},
            ],
            costItems: [
                {label:'费用累计',value:''},
                {label:'合计优惠',value:''},
                {label:'应收金额',value:''},
            ],
            imgItems1: [
                {name:'左前'},{name:'右前'},{name:'左后'},{name:'右后'},{name:'仪表'},{name:'其他(环检单)'}
            ],
            imgItems2: [{},{},],
            serviceTagList: [{value:''}],
        };
    },
    methods: {
        isChoose(index){
            this.chooseNum = index;
        },
        toggleBox(){
            this.isClose = !this.isClose;
        },
        pjtab(){
             this.isXqpj==true?this.isXqpj=false:this.isXqpj=true;
        }
    }
};
</script>

