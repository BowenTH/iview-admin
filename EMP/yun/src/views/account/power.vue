<style lang="less">
    @import '../style.less';
</style>

<template>
    <div>
        <Row class="top-row">
            <div class="col-left">
                <Card>
                    <p slot="title">当前账套</p>
                    <div class="content">{{organize.name}}</div>
                </Card>            
            </div>            
            <div class="col-right">
                <Card>
                    <p slot="title">当前账套</p>
                    <Form :label-width="100">
                        <FormItem label="账套编号">
                            <Input disabled value="Org10000"/>
                        </FormItem>
                        <FormItem label="账套联系人">
                            <Input disabled value="李兴保"/>
                        </FormItem>
                        <FormItem label="账套级别">
                            <Select value="1级" disabled>
                                <Option value="1级">1级</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="账套名称">
                            <Input disabled value="杜文明"/>
                        </FormItem>
                        <FormItem label="账套联系电话">
                            <Input disabled value="13370590090"/>
                        </FormItem>
                        <FormItem label="账套状态">
                            <Select value="已启用" disabled>
                                <Option value="已启用">已启用</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="系统管理员账号">
                            <Input disabled value="杜文明001"/>
                        </FormItem>
                    </Form> 
                </Card>
            </div>
        </Row>
        <Row class="my-row">
            <div class="col-left">           
                <Card>
                    <p slot="title">组织结构树</p>
                    <div>
                        <Tree :data="tree" @on-select-change="handleSelect"></Tree>
                    </div>
                </Card>
            </div>            
            <div class="col-right">
                <Card class="col-right-tree">
                    <div class="left-side">
                        <Button type="primary" @click="handleUpdateFront">保存前台权限</Button>
                        <div class="col-right-tree-item">
                            <Tree :data="tree1" show-checkbox @on-check-change="handleChangeFrontData"></Tree>
                        </div>                        
                    </div>
                    <div class="right-side">
                        <Button type="primary" @click="handleUpdateBack">保存后台权限</Button>
                        <div class="col-right-tree-item">
                            <Tree :data="tree2" show-checkbox @on-check-change="handleChangeBackData"></Tree>
                        </div>                           
                    </div>
                    <!-- <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
                    <Button @click="handleClearCurrentRow">Clear</Button> -->
                </Card>
            </div>
        </Row>        
    </div>

</template>
<script>
import Vue from 'vue';
import iviewArea from 'iview-area';
Vue.use(iviewArea);

    export default {
        data () {
            return {
                organize: {     // 当前账套信息
                    name:'英冠总部',        //当前账套名称
                    number:'Org000001',    // 当前账套标号
                    contact:'', // 账套联系人
                    grade:'',   // 账套级别
                    adminName:'',   // 系统管理员姓名
                    contactMobile:'',   // 账套联系电话
                    state:'',   // 账套状态
                    adminAccount:'',    // 系统管理员账号
                },
                selectId:'',    // 选中的账套id
                frontData:[],   // 选中的前台菜单
                backData:[],    // 选中的后台菜单
                data1: [    // 全国账套数据
                    {
                        type: 1,    //级别
                        state: '二级',   //状态
                        numberAndName: {    //账套编号和名称
                            number: 111111,
                            name: '上海英冠',
                        },  
                        parent: {   //上级节点（账套编号和名称）
                            number: 100001,
                            name: '英冠总部',
                        },
                        contact:　{  // 负责人
                            name: '张三',
                            mobile: 18636012057,
                        },
                        remark: '',  // 备注
                        create: {   //创建信息
                            name: '',   //创建人
                            time: '',   //创建时间
                            belong: '', //所属机构
                        },
                        update: {   //修改信息
                            name: '',   //修改人
                            time: '',   //修改时间
                            belong: '', //所属机构
                        }
                    },
                ],
                tree: [    // 组织结构树
                    {
                        id:1,
                        title: '英冠总部',
                        children: [ 
                            {
                                id:1,
                                title: '上海英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '上海英冠(浦东)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(浦东1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(浦东2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(徐汇)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(长宁)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(长宁1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(长宁2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id:1,
                                title: '山东英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '山东英冠(济南)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                            },
                                        ],
                                        
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(烟台)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(烟台1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(烟台2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(潍坊)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
                tree1: [    // 前台功能树
                    {
                        id:1,
                        title: '英冠总部',
                        children: [ 
                            {
                                id:1,
                                title: '上海英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '上海英冠(浦东)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(浦东1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(浦东2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(徐汇)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(长宁)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(长宁1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(长宁2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id:1,
                                title: '山东英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '山东英冠(济南)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                            },
                                        ],
                                        
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(烟台)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(烟台1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(烟台2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(潍坊)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
                tree2: [    // 后台功能树
                    {
                        id:1,
                        title: '英冠总部',
                        children: [ 
                            {
                                id:1,
                                title: '上海英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '上海英冠(浦东)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(浦东1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(浦东2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(徐汇)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(长宁)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(长宁1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(长宁2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id:1,
                                title: '山东英冠',
                                children: [ 
                                    {
                                        id:1,
                                        title: '山东英冠(济南)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                            },
                                        ],
                                        
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(烟台)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(烟台1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(烟台2)',
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(潍坊)',
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊1)',
                                                
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊2)',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        methods: {
            handleClearCurrentRow () {  //清空表格,没啥用
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleMenuList() {  // 获取前后台菜单树
                util.ajax.post('user/rolelist',{
                    orgid:this.selectId,
                }).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   把前后台菜单树赋值给tree1 tree2,记得让后台带上选中（selected）
                    }
                })
            },
            handleSelect(data1) { // 点击左侧账套树节点
                this.selectId = data1[0].id;
                this.handleMenuList();
            },  
            handleChangeFrontData(data2) {   // 前台菜单的选中或取消选中
                console.log(data2)
                this.frontData = data2;
            },
            handleChangeBackData(data3) {    // 后台菜单的选中或取消选中
                this.backData = data3;
            },
            handleUpdateFront() {   // 保存前台权限
                /*util.ajax.post('user/rolelist',{
                    orgid:this.selectId,
                }).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        this.$Messge.success('保存成功')
                    }
                })*/
            },
            handleUpdateBack() {    // 保存后台权限
                /*util.ajax.post('user/rolelist',{
                    orgid:this.selectId,
                }).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        this.$Messge.success('保存成功')
                    }
                })*/
            },
        },
        mounted() {
            
        }
    }
</script> 