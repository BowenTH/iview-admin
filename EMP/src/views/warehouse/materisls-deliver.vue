<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <Tabs value="deliver1">
                    <TabPane label="领料出库" name="deliver1">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="工单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="进场时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="车牌号">
                                    <Input />
                                </FormItem>
                                <FormItem label="服务顾问">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="维修技师">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="状态">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="是否领料">
                                    <RadioGroup>
                                        <Radio label="已领料"></Radio>
                                        <Radio label="未领料"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <Button type="primary" class="submit" @click="outInsert()">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData1" :columns="tableColumns1"></Table>
                        </div>
                        <div class="my-page">
                            <Page v-model="total" :current="1"></Page>
                            <span class="pageSelect">每页显示
                                <Select value="20">
                                    <Option value="20">4</Option>
                                </Select>                                
                            </span>
                        </div>
                        
                    </TabPane>
                    <TabPane label="其他出库" name="deliver2">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="出库单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="开单时间">
                                    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" style="width:100%"></DatePicker>
                                </FormItem>
                                <FormItem label="仓库管理员">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="账务类别">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <Button type="primary" class="submit">查询</Button>
                            </Form>                    
                        </div>
                        <div class="search-table">
                            <Table :data="tableData2" :columns="tableColumns2"></Table>
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
    name: 'materisls_deliver',
    data () {
        return {
            p:4,  // 分页页数
            t:1,  //分页每页条数
            total:"",
            order_sn:"",
            cph:"",


            tableColumns1: [
                {title: '序号',type: 'index',width: 60,align: 'center'},
                {title: '工单号',key: 'order_sn'},
                {title: '车牌号',key: 'cph'},
                {title: '车辆型号',key: 'brand'},
                {title: '进场时间',key: 'enter_time'},
                {title: '服务项目',key: 'serve_name'},
                {title: '服务顾问',key: 'salesman_name'},
                {title: '维修技师',key: 'technician_name'},
                {title: '工单状态',key: 'stateTxt'},
                {title: '是否领料',key: 'ispickingTxt'},
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
                                        let query = {shopping_id: params.row.shopping_id};
                                        this.$router.push({
                                            name: 'deliver_detail',
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
                // {num1:'YY20180529021',plate1:'沪A26P23',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',tech1:'张大晶',status1:'在修',isdeliver1:'否'},
                // {num1:'YY20180529021',plate1:'沪A26P23',model1:'大众朗逸',time1:'18/05/29 12:20',service1:'常规保养',advisor1:'张大晶',tech1:'张大晶',status1:'已结算',isdeliver1:'是'},
            ],
            tableColumns2: [
                {title: '出库单号',key: 'num1'},
                {title: '开单时间',key: 'time1'},
                {title: '费用承担部门',key: 'department1'},

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
            tableData2: [
                {num1:'YY20180529021',time1:'18/05/29 12:20',},
            ],
        };
    },
    methods: {
        outInsert(){
         util.ajax.post('warehouse/pickinglist',{
             p:this.p,
             t:this.t,
             order_sn:this.order_sn,
             cph:this.cph,
            
        
         }
         ).then(response=>{
            console.log(response.data.data.list);
            this.tableData1=response.data.data.list;
            this.total=response.data.data.total;
            console.log(this.total)
           
         });

        }

    },
    mounted(){
        util.ajax.post('warehouse/pickinglist',{
             p:this.p,
             t:this.t,
             total:this.total,
        
         }
         ).then(response=>{
            console.log(response.data.data.list);
            this.tableData1=response.data.data.list;
            this.total=response.data.data.total;
            this.total=response.data.data.total;
            console.log(this.total)
           
         });


    }
};
</script>

