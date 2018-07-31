<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">配件入库</span></div>
                <div class="box-con">
                        <div class="order-form search-form">
                            <Form :label-width="80">
                                <FormItem label="入库单号">
                                    <Input />
                                </FormItem>
                                <FormItem label="采购员">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="供应商" class="search-form-item">
                                    <Input /><Button icon="search" class="search-btn"></Button>
                                </FormItem>
                                <FormItem label="审核状态">
                                    <RadioGroup>
                                        <Radio label="已审核"></Radio>
                                        <Radio label="未审核"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="开票状态">
                                    <RadioGroup>
                                        <Radio label="已开票"></Radio>
                                        <Radio label="未开票"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="支付状态">
                                    <RadioGroup>
                                        <Radio label="已支付"></Radio>
                                        <Radio label="未支付"></Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="入库时间">
                                    <DatePicker type="daterange" style="width:100%" :options="dateRange"></DatePicker>
                                </FormItem>
                                
                                <Button type="primary" class="submit">查询</Button>
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
                </div>              
            </div>
            <div class="btm-btns-place">
                <div class="btm-btns">
                    <Button type="primary" @click="storeNew">配件入库</Button>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js';

export default {
    name: 'materisls_store',
    data () {
        return {
            p:4,  // 分页页数
            t:1,  //分页每页条数
            total:"",
            order_sn:"",
            cph:"",


            tableColumns1: [
                {title: '入库单号',key: 'num'},
                {title: '入库时间',key: ''},
                {title: '采购员',key: ''},
                {title: '供应商',key: ''},
                {title: '审核状态',key: ''},
                {title: '开票状态',key: ''},
                {title: '支付状态',key: ''},
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
                                            name: 'store_detail',
                                            query: query
                                        });
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            tableData1: [
               {num:"1"}
            ],

            //时间控件配置
            dateRange: {
                    shortcuts: [
                        {
                            text: '今日',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                return [start, end];
                            }
                        },
                        {
                            text: '本周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '本月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '本季度',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }            
        };
    },
    methods: {
        storeNew () {
            util.openNewPage(this, 'store_new');
            this.$router.push({
                name: 'store_new'
            });
        },

    },
    mounted(){

    }
};
</script>

