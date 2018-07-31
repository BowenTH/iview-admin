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
                        <p>进场时间：{{car.time}}</p>
                        <p>服务项目：{{car.item}}</p>
                        <p>实际金额：{{car.cost}}</p>
                        <p>服务顾问：{{car.adviser}}</p>
                        <p>维修技师：{{car.tech}}</p>
                        <p>预计交车：{{car.estimate}}<span class="countdown">倒计时{{car.cd}}</span></p>
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
                        <div class="status"><img src="../../images/daiweixiu.png">待维修</div>
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
                    <span>折后金额合计：<i class="c-red">0.00</i> 元</span>
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
                                <th width="120">操作</th>
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
                    <span>折后件金额合计：<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="tabs-con">
                        <div class="tabpane" v-show="isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th width="30%">配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th width="120">操作</th>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
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
                                        <th width="30%">配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th width="120">操作</th>
                                    </tr>
                                    <tr>
                                        <td><div class="search-form-item">
                                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                                            </div></td>
                                        <td><Input/></td>
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
                    <Button type="primary" @click="showChange = true">修改</Button>
                    <Modal v-model="showChange" title="修改" class="myModel full">
                        <div class="order-form">
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
                    </Modal>

                    <Button type="primary" @click="showPaigong = true">派工</Button>
                    <Modal v-model="showPaigong" title="派工" class="myModel">
                        <Form :label-width="100">
                            <FormItem label="工单号" class="half">
                                <Input value="GD0012018080704013" disabled/>
                            </FormItem>
                            <FormItem label="预计完工时间" class="half">
                                <DatePicker type="datetime" style="width:100%"></DatePicker>
                            </FormItem>
                            <div class="clear"></div>
                            <FormItem label="服务项目">
                                <Input value="" disabled/>
                            </FormItem>
                            <FormItem label="维修技师">
                                <Input value="" disabled/>
                            </FormItem>
                        </Form> 
                    </Modal>

                    <Button type="primary" @click="showBxd = true">转报销单</Button>
                    <Modal v-model="showBxd" title="转报销单" class="myModel full">
                        <div class="order-content-con">
                            <div class="box">
                                <div class="box-top"><span class="title">服务工时</span>
                                    <span>折后金额合计：<i class="c-red">0.00</i> 元</span>
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
                                    <span>折后件金额合计：<i class="c-red">0.00</i> 元</span>
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
                                <div class="btm-btns">
                                    <Button type="primary">导出</Button>
                                    <Button type="primary">打印</Button>
                                    <Button type="primary">保存</Button>
                                    <Button type="primary">删除全部保险单</Button>
                                    <Button @click="showBxd = false">关闭</Button>
             
                                </div>
                            </div>             
                        </div>
                    </Modal>

                    <Button type="primary">打印《维修委托单》</Button>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import iviewArea from 'iview-area';
Vue.use(iviewArea);

export default {
    name: 'torepair_detail',
    data () {
        return {
            chooseNum: 0,
            isClose:true,
            isXqpj:true,
            cars: [
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00',cd:'20分钟',estimate:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00',cd:'20分钟',estimate:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00',cd:'20分钟',estimate:'18-07-11 12:00'},
                {plate:'鲁AT18T0',item:'喷漆',cost:'1911.00',adviser:'孙玉环',tech:'张晓阳',time:'18-07-11 12:00',cd:'20分钟',estimate:'18-07-11 12:00'},
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
            showChange: false,
            showPaigong: false,
            showBxd: false,
            resDefault: ['河北省', '张家口市', '怀来县'],
            showRes: [],
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
        },
    },
    computed: {
        serverSum() {       //工时金额合计
            return this.serviceTagList.reduce((sum, val) => {
                return sum + val.money;
            },0)
        },
        partsSum() {        //配件金额合计
            return this.partTagList.reduce((sum, val) => {
                return sum + val.money;
            },0)
        }
    },
    watch: {
        resDefault (val) {
            this.showRes = val;
        }
    }
};
</script>

