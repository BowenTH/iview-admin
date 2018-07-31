<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">供应商档案</span></div>
                <div class="box-con">
                        <div class="order-form">
                            <Form :label-width="100">
                                <FormItem label="供应商代码">
                                    <Input />
                                </FormItem>
                                <FormItem label="供应商名称">
                                    <Input />
                                </FormItem>
                                <FormItem label="供应商类型">
                                    <Select>
                                        <Option value=""></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="供应商联系人">
                                    <Input />
                                </FormItem>
                                <FormItem label="所在地">
                                    <al-selector 
                                        v-model="resDefault"
                                        level="2"
                                        auto
                                    />
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
                    <Button type="primary" @click="newFile = true">新增</Button>   
                    <Modal v-model="newFile" title="新增" class="myModel">
                        <Form :label-width="90">
                            <FormItem label="供应商名称" class="half" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="座机" class="half">
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="联系人" class="half" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="联系人手机" class="half" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="联系地址" required>
                                    <al-selector 
                                        v-model="resDefault"
                                        level="2"
                                        auto
                                    />
                            </FormItem>
                            <FormItem label="详细地址" required>
                                <Input value=""/>
                            </FormItem>

                            <div class="line"></div>
                            <FormItem label="供应商代码" class="half" required>
                                <Input value=""/>
                            </FormItem>                            
                            <FormItem label="供应商类型" class="half" required>
                                <Select>
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="备注" style="width:96%;">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                            </FormItem>
                            <FormItem label="">
                                <Checkbox>不退出，继续新增</Checkbox>
                            </FormItem>

                        </Form> 
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js';
import Vue from 'vue';
import iviewArea from 'iview-area';
Vue.use(iviewArea);

export default {
    name: 'supplier_file',
    data () {
        return {
            p:4,  // 分页页数
            t:1,  //分页每页条数
            total:"",
            order_sn:"",
            cph:"",


            tableColumns1: [
                {title: '序号',type: 'index',width: 60,align: 'center'},
                {title: '供应商代码',key: 'num'},
                {title: '供应商名称',key: ''},
                {title: '供应商类型',key: ''},
                {title: '供应商联系人',key: ''},
                {title: '备注',key: ''},
                {title: '联系电话',key: ''},
            ],
            tableData1: [
               {num:"1"}
            ],

            //地区
            resDefault: ['河北省', '张家口市', '怀来县'],

            newFile: false,
          
        };
    },
    methods: {
    },
    mounted(){

    }
};
</script>

