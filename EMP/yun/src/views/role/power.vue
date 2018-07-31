<style lang="less">
    @import '../style.less';
</style>

<template>
    <div>
        <Row class="top-row">
            <div class="col-left">
                <Card>
                    <p slot="title">当前机构</p>
                    <div class="content">宇佳乡村通集团总部</div>
                </Card>            
            </div>            
            <div class="col-right">
                <Card>
                    <p slot="title">当前角色</p>
                    <Form :label-width="100">
                        <FormItem label="当前角色">
                            <Input disabled value="Org10000"/>
                        </FormItem>
                        <FormItem label="所含人员">
                            <Input disabled value="" style="width:200%"/>
                        </FormItem>
                    </Form> 
                </Card>
            </div>
        </Row>
        <Row class="my-row">
            <div class="col-left">           
                <Card>
                    <p slot="title">角色列表</p>
                    <Tabs>
                        <TabPane label="角色权限设置">
                            <RadioGroup vertical>
                                <Radio label="董事长"></Radio>
                                <Radio label="总经理"></Radio>
                                <Radio label="分管总裁"></Radio>
                            </RadioGroup>
                        </TabPane>
                        <TabPane label="用户权限设置">
                            <RadioGroup vertical>
                                <Radio label="董事长"></Radio>
                                <Radio label="总经理"></Radio>
                                <Radio label="分管总裁"></Radio>
                            </RadioGroup>                         
                        </TabPane>
                    </Tabs>
                </Card>
            </div>            
            <div class="col-right">
                <Card class="col-right-tree">
                    <div class="left-side">
                        <Button type="primary">保存前台权限</Button>
                        <div class="col-right-tree-item">
                            <Tree :data="tree1" show-checkbox></Tree>
                        </div>                        
                    </div>
                    <div class="right-side">
                        <Button type="primary">保存后台权限</Button>
                        <div class="col-right-tree-item">
                            <Tree :data="tree2" show-checkbox></Tree>
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

                treeList: [],  
                columns: [
                    {type: 'selection',width: 30,align: 'center'},
                    {title:'状态',key:'',width: 60},
                    {title:'账套编号与名称',key:'',children:[
                        {title:'编号',key:'',width: 60},
                        {title:'名称',key:'',width: 120},
                    ]},
                    {title:'上级节点',key:'',children:[
                        {title:'编号',key:'',width: 60},
                        {title:'名称',key:'',width: 120},
                    ]},
                    {title:'账套级别',key:'',width: 100},
                    {title:'账套负责人',key:'',children:[
                        {title:'联系人',key:'',width: 100},
                        {title:'联系电话',key:'',width: 200},
                    ]},
                    {title:'备注',key:'',width: 200},
                    {title:'创建人',key:'',width: 100},
                    {title:'创建人所属机构',key:'',width: 200},
                    {title:'创建时间',key:'',width: 120},
                    {title:'更新人',key:'',width: 100},
                    {title:'更新人所属机构',key:'',width: 200},
                    {title:'更新时间',key:'',width: 120},
                ],

                organization:'',    // 当前组织
                search: {   // 搜索用数据
                    number: '',    // 账套编号
                    contactName: '',  // 账套联系人
                    state: 1,   //账套状态
                    grade: '一级',    //账套级别
                    name: '',   //账套名称
                    mobile: '', //账套联系电话
                },
                state: [    //账套状态
                    {id:1,name:'已启用'},
                    {id:2,name:'已禁用'},
                ],  
                grade: [    //账套级别
                    {id:1,name:'一级'},
                    {id:2,name:'二级'},
                    {id:3,name:'三级'},
                ],
                columns3: [     //貌似没用
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
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
                tree1: [    // 组织结构树
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
                tree2: [    // 组织结构树
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
            handleSearch() {  // 查询
                util.ajax.post('user/rolelist').then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            },  
            handleGetRolePower() {  // 获取角色权限树
                util.ajax.post('user/rolelist',this.createOrUpdate).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            },  
            handleGetUserPower() {  // 获取用户权限树
                util.ajax.post('user/rolelist',this.createOrUpdate).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            }
        },
        mounted() {
            /*this.handleGetUserPower();
            this.handleGetRolePower();*/
        }
    }
</script> 