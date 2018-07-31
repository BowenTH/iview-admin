<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <Tabs value="sort1">
                    <TabPane label="预约" name="sort1">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="车牌号">
                                    <Input />
                                </FormItem>
                                <FormItem label="车型" class="search-form-item">
                                    <Input /><Button icon="search" class="search-btn"></Button>
                                </FormItem>
                                <FormItem label="车主">
                                    <Input />
                                </FormItem>
                                <FormItem label="车主电话">
                                    <Input />
                                </FormItem>
                                <FormItem label="服务顾问">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="状态">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="渠道">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="联系客户">
                                    <RadioGroup>
                                        <Radio label="已联系"></Radio>
                                        <Radio label="未联系"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <Button type="primary" class="submit">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData1" :columns="tableColumns1"></Table>
                        </div>
                        <div class="my-page">
                            <Page :total="100" :current="1"></Page>
                            <span class="pageSelect">每页显示
                                <Select value="20">
                                    <Option value="20">20</Option>
                                </Select>                                
                            </span>
                        </div>
                        
                    </TabPane>
                    <TabPane label="进场" name="sort2">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="车牌号">
                                    <Input />
                                </FormItem>
                                <FormItem label="车型" class="search-form-item">
                                    <Input /><Button icon="search" class="search-btn"></Button>
                                </FormItem>
                                <FormItem label="车主">
                                    <Input />
                                </FormItem>
                                <FormItem label="车主电话">
                                    <Input />
                                </FormItem>
                                <FormItem label="服务顾问">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="状态">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="渠道">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="联系客户">
                                    <RadioGroup>
                                        <Radio label="已联系"></Radio>
                                        <Radio label="未联系"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <Button type="primary" class="submit">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData1" :columns="tableColumns1"></Table>
                        </div>
                        <div class="my-page">
                            <Page :total="100" :current="1"></Page>
                            <span class="pageSelect">每页显示
                                <Select value="20">
                                    <Option value="20">20</Option>
                                </Select>                                
                            </span>
                        </div>
                        
                    </TabPane>
                    <TabPane label="救援" name="sort3">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="救援单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="登记时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="车牌号">
                                    <Input />
                                </FormItem>
                                <FormItem label="车型" class="search-form-item">
                                    <Input /><Button icon="search" class="search-btn"></Button>
                                </FormItem>
                                <FormItem label="车主">
                                    <Input />
                                </FormItem>
                                <FormItem label="车主电话">
                                    <Input />
                                </FormItem>
                                <FormItem label="服务顾问">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="状态">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="渠道">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="联系客户">
                                    <RadioGroup>
                                        <Radio label="已联系"></Radio>
                                        <Radio label="未联系"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <Button type="primary" class="submit">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData3" :columns="tableColumns3"></Table>
                        </div>
                        <div class="my-page">
                            <Page :total="100" :current="1"></Page>
                            <span class="pageSelect">每页显示
                                <Select value="20">
                                    <Option value="20">20</Option>
                                </Select>                                
                            </span>
                        </div>
                        
                    </TabPane>
                    <TabPane label="洗车" name="sort4">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="洗车单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="收银时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="车牌号">
                                    <Input />
                                </FormItem>
                                <FormItem label="洗车工">
                                    <Input />
                                </FormItem>
                                <FormItem label="支付方式">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="支付单位">
                                    <Input />
                                </FormItem>
                                <Button type="primary" class="submit">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData4" :columns="tableColumns4"></Table>
                        </div>
                        <div class="my-page">
                            <Page :total="100" :current="1"></Page>
                            <span class="pageSelect">每页显示
                                <Select value="20">
                                    <Option value="20">20</Option>
                                </Select>                                
                            </span>
                        </div>
                        
                    </TabPane>
                </Tabs>                
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
            tableColumns1: [
                {title: '预约单号',key: 'num1'},
                {title: '车牌号',key: 'plate1'},
                {title: '车主',key: 'owner1'},
                {title: '车主电话',key: 'tel1'},
                {title: '车辆型号',key: 'model1'},
                {title: '预约时间',key: 'time1'},
                {title: '服务类型',key: 'service1'},
                {title: '服务顾问',key: 'advisor1'},
                {title: '状态',key: 'status1'},
                {title: '渠道',key: 'channel1'},
                {title: '联系客户',key: 'iscontact1'},
                {title: '操作',key: 'action1',width: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        //this.show(params.index)
                                    }
                                }
                            }, '直转工单'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let query = {shopping_id: params.row.shopping_id};
                                        this.$router.push({
                                            name: 'booking_detail',
                                            query: query
                                        });
                                    }
                                }
                            }, '查看')
                        ]);
                    }
                }
            ],
            tableData1: [
                {num1:'YY20180529021',plate1:'沪A26P23',owner1:'王笑笑',tel1:'13800138000',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',status1:'未转工单',channel1:'门店预约',iscontact1:'未联系',},
                {num1:'YY20180529021',plate1:'沪A26P23',owner1:'王笑笑',tel1:'13800138000',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',status1:'未转工单',channel1:'门店预约',iscontact1:'未联系',},
                {num1:'YY20180529021',plate1:'沪A26P23',owner1:'王笑笑',tel1:'13800138000',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',status1:'未转工单',channel1:'门店预约',iscontact1:'未联系',},
                {num1:'YY20180529021',plate1:'沪A26P23',owner1:'王笑笑',tel1:'13800138000',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',status1:'未转工单',channel1:'门店预约',iscontact1:'未联系',},
                {num1:'YY20180529021',plate1:'沪A26P23',owner1:'王笑笑',tel1:'13800138000',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',status1:'未转工单',channel1:'门店预约',iscontact1:'未联系',},
            ],
            tableColumns2: [
                {title: '预约单号',key: 'num2'},
                {title: '车牌号',key: 'plate2'},
                {title: '车主',key: 'owner2'},
                {title: '车主电话',key: 'tel2'},
                {title: '车辆型号',key: 'model2'},
                {title: '预约时间',key: 'time2'},
                {title: '服务类型',key: 'service2'},
                {title: '服务顾问',key: 'advisor2'},
                {title: '状态',key: 'status2'},
                {title: '渠道',key: 'channel2'},
                {title: '联系客户',key: 'iscontact2'},
                {title: '操作',key: 'action1',width: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        //this.show(params.index)
                                    }
                                }
                            }, '直转工单'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let query = {shopping_id: params.row.shopping_id};
                                        this.$router.push({
                                            name: 'enter_detail',
                                            query: query
                                        });
                                    }
                                }
                            }, '查看')
                        ]);
                    }
                }
            ],
            tableData2: [
                {num2:'YY20180529021',plate2:'沪A26P23',owner2:'王笑笑',tel2:'13800138000',model2:'大众朗逸',time2:'18/05/29 12:20',service2:'常规保养',advisor2:'张大晶',status2:'未转工单',channel2:'门店预约',iscontact2:'未联系',},
                {num2:'YY20180529021',plate2:'沪A26P23',owner2:'王笑笑',tel2:'13800138000',model2:'大众朗逸',time2:'18/05/29 12:20',service2:'常规保养',advisor2:'张大晶',status2:'未转工单',channel2:'门店预约',iscontact2:'未联系',},
                {num2:'YY20180529021',plate2:'沪A26P23',owner2:'王笑笑',tel2:'13800138000',model2:'大众朗逸',time2:'18/05/29 12:20',service2:'常规保养',advisor2:'张大晶',status2:'未转工单',channel2:'门店预约',iscontact2:'未联系',},
                {num2:'YY20180529021',plate2:'沪A26P23',owner2:'王笑笑',tel2:'13800138000',model2:'大众朗逸',time2:'18/05/29 12:20',service2:'常规保养',advisor2:'张大晶',status2:'未转工单',channel2:'门店预约',iscontact2:'未联系',},
                {num2:'YY20180529021',plate2:'沪A26P23',owner2:'王笑笑',tel2:'13800138000',model2:'大众朗逸',time2:'18/05/29 12:20',service2:'常规保养',advisor2:'张大晶',status2:'未转工单',channel2:'门店预约',iscontact2:'未联系',},
            ],
            tableColumns3: [
                {title: '救援单号',key: 'num3'},
                {title: '车牌号',key: 'plate3'},
                {title: '客户名称',key: 'owner3'},
                {title: '联系电话',key: 'tel3'},
                {title: '车辆型号',key: 'model3'},
                {title: '登记时间',key: 'time3'},
                {title: '服务顾问',key: 'advisor3'},
                {title: '状态',key: 'status3'},
                {title: '渠道',key: 'channel3'},
                {title: '操作',key: 'action1',width: 150,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        //this.show(params.index)
                                    }
                                }
                            }, '直转工单'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let query = {shopping_id: params.row.shopping_id};
                                        this.$router.push({
                                            name: 'rescue_detail',
                                            query: query
                                        });
                                    }
                                }
                            }, '查看')
                        ]);
                    }
                }
            ],
            tableData3: [
                {num3:'YY20180529021',plate3:'沪A26P23',owner3:'王笑笑',tel3:'13800138000',model3:'大众朗逸',time3:'18/05/29 12:20',advisor3:'张大晶',status3:'未转工单',channel3:'门店预约'},
                {num3:'YY20180529021',plate3:'沪A26P23',owner3:'王笑笑',tel3:'13800138000',model3:'大众朗逸',time3:'18/05/29 12:20',advisor3:'张大晶',status3:'未转工单',channel3:'门店预约'},
                {num3:'YY20180529021',plate3:'沪A26P23',owner3:'王笑笑',tel3:'13800138000',model3:'大众朗逸',time3:'18/05/29 12:20',advisor3:'张大晶',status3:'未转工单',channel3:'门店预约'},
                {num3:'YY20180529021',plate3:'沪A26P23',owner3:'王笑笑',tel3:'13800138000',model3:'大众朗逸',time3:'18/05/29 12:20',advisor3:'张大晶',status3:'未转工单',channel3:'门店预约'},
                {num3:'YY20180529021',plate3:'沪A26P23',owner3:'王笑笑',tel3:'13800138000',model3:'大众朗逸',time3:'18/05/29 12:20',advisor3:'张大晶',status3:'未转工单',channel3:'门店预约'},
            ],
            tableColumns4: [
                {title: '洗车单号',key: 'num4'},
                {title: '车牌号',key: 'plate4'},
                {title: '服务项目',key: 'service4'},
                {title: '支付方式',key: 'payment4'},
                {title: '支付单位',key: 'unit4'},
                {title: '实收金额',key: 'money4'},
                {title: '收银时间',key: 'time4'},
                {title: '洗车工',key: 'staff4'},
            ],
            tableData4: [
                {num4:'XCD20180529021',plate4:'沪A26P23',service4:'洗车',payment4:'支付宝',unit4:'',money4:'20.00',time4:'18/05/29 12:20',staff4:'王'},
            ],
        };
    },
    methods: {

    }
};
</script>

