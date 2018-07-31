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
                                    <Input disabled/>
                                </FormItem>
                                <FormItem label="入库时间">
                                    <Input disabled/>
                                </FormItem>
                                <FormItem label="供应商" class="search-form-item">
                                    <Input /><Button icon="search" class="search-btn"></Button>
                                </FormItem>
                                <FormItem label="发票类型">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="发票号">
                                    <Input/>
                                </FormItem>
                                <FormItem label="销售方">
                                    <Input placeholder="开票方全称"/>
                                </FormItem>
                                <FormItem label="审核状态">
                                    <Input disabled/>
                                </FormItem>
                                <FormItem label="审核备注">
                                    <Input disabled/>
                                </FormItem>
                            </Form>                    
                        </div>                
                </div>              
            </div>
            <div class="box">
                <div class="box-top"><span class="title">配件入库</span></div>
                <div class="box-con">
                    <div class="search-table" style="margin-top:15px;">
                        <Table :data="tableData1" :columns="tableColumns1"></Table>
                    </div>                   
                </div>              
            </div>
            <div class="box">
                <div class="box-top"><span class="title">库存信息</span></div>
                <div class="box-con">
                    <div class="search-table" style="margin-top:15px;">
                        <Table :data="tableData2" :columns="tableColumns2"></Table>
                    </div>                   
                </div>              
            </div>

            <div class="btm-btns-place">
                <div class="btm-btns">
                    <Button type="primary">入库保存</Button>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js';

export default {
    name: 'store_new',
    data () {
        return {
            p:4,  // 分页页数
            t:1,  //分页每页条数
            total:"",
            order_sn:"",
            cph:"",


            tableColumns1: [
                {title: '配件编码',key: 'num',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '配件名称',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '型号',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '规格',key: ''},
                {title: '仓库',key: '',
                    render: (h, params) => {
                        return h('Select',[
                            h('Option',{
                                props: {
                                    value: '1'
                                }
                            },'option1'),
                            h('Option',{
                                props: {
                                    value: '2'
                                }
                            },'option2')
                        ]);
                    }
                },
                {title: '仓位',key: '',
                    render: (h, params) => {
                        return h('Select',[
                            h('Option',{
                                props: {
                                    value: '1'
                                }
                            },'option1'),
                            h('Option',{
                                props: {
                                    value: '2'
                                }
                            },'option2')
                        ]);
                    }
                },
                {title: '上次进货价',key: ''},
                {title: '入库数量',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '本次进货单价',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '合计金额',key: ''},
                {title: '库存预警',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '有效期',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '销售单价',key: '',
                    render: (h, params) => {
                        return h('Input');
                    }
                },
                {title: '审核状态',key: ''},
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

                                    }
                                }
                            }, '新增'),
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
            tableColumns2: [
                {title: '入库单号',key: 'num'},
                {title: '配件编码',key: ''},
                {title: '配件名称',key: ''},
                {title: '采购员',key: ''},
                {title: '供应商',key: ''},
                {title: '入库时间',key: ''},
                {title: '入库数量',key: ''},
                {title: '进价(含税)',key: ''},
                {title: '进价(不含税)',key: ''},
                {title: '有效期',key: ''},
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

                                    }
                                }
                            }, '选定')
                        ]);
                    }
                }
            ],
            tableData2: [
               {num:"1"}
            ],
          
        };
    },
    methods: {


    },
    mounted(){

    }
};
</script>

