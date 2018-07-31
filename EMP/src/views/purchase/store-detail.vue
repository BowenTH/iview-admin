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
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="采购员">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="入库时间">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="供应商">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="发票类型">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="发票号">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="发票抬头">
                                <Input disabled/>
                            </FormItem>
                            <FormItem label="审核状态">
                                <Input disabled value="已审核"/>
                            </FormItem>
                            <FormItem label="审核备注">
                                <Input disabled/>
                            </FormItem>

                            <FormItem label="税率">
                                <RadioGroup>
                                    <Radio label="3%"></Radio>
                                    <Radio label="6%"></Radio>
                                    <Radio label="16%"></Radio>
                                    <Radio label="17%"></Radio>
                                </RadioGroup>
                            </FormItem>
                        </Form>                    
                    </div>                  
                </div>              
            </div>
            <div class="box">
                <div class="box-top"><span class="title">入库明细</span></div>
                <div class="box-con">
                    <div class="search-table" style="margin-top:15px;">
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
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js';

export default {
    name: 'store_detail',
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
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '配件名称',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '型号',key: ''},
                {title: '规格',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '仓库',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '仓位',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '上次进货价',key: ''},
                {title: '入库数量',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '本次进货单价',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '合计金额',key: ''},
                {title: '库存预警',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '有效期',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '销售单价',key: '',
                    render: (h, params) => {
                        return h('Input',{
                            props: {
                                disabled: true,
                            }
                        });
                    }
                },
                {title: '审核状态',key: ''},
            ],
            tableData1: [
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

