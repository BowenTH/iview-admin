<style lang="less">
    @import '../style.less';
</style>

<template>
    <Row class="my-row">
        <div class="col-left">
            <Card>
                <p slot="title">平台菜单树</p>
                <Tabs @on-click="handleChangeTab" v-model="type">
                    <TabPane label="前台" name="1">
                        <div class="classification-con">
                            <Tree :data="treeList" @on-select-change="handleCheckedMenu"></Tree>
                        </div>
                    </TabPane>
                    <TabPane label="后台" name="2">
                        <div class="classification-con">
                            <Tree :data="treeList" @on-select-change="handleCheckedMenu"></Tree>
                        </div>                            
                    </TabPane>
                </Tabs>
            </Card>
        </div>            
        <div class="col-right">
            <Card>
                <p slot="title">查询区域</p>
                <Form :label-width="80">
                    <FormItem label="菜单名称">
                        <Input v-model="menuKey"/>
                    </FormItem>
                    <Button type="primary" class="submit" @click="handleSearch">查询</Button>
                </Form> 
                <div style="padding-bottom:10px;">
                    <Button type="primary" @click="newModel = true">新增</Button>
                    <Modal v-model="newModel" title="新增菜单" width="600">
                        <div>
                            <Form :label-width="120" v-model="createOrUpdate">
                                <FormItem label="上级菜单名称">
                                    <Select v-model="createOrUpdate.parentMenuId" @on-change="handleCheckedCreateMenu">
                                        <Option value="0">顶级菜单</Option>
                                        <template v-for="item in treeList[0].children">
                                            <Option :value="item.title" >{{item.title}}</Option>
                                            <Option v-for="item1 in item.children" :key="item1.title" :value="item1.id">&nbsp;&nbsp;&nbsp;{{item1.title}}</Option>
                                        </template>
                                    </Select>
                                </FormItem>
                                <FormItem label="上级菜单ID" class="half">
                                    <Input disabled v-model="createOrUpdate.parentMenuId"/>
                                </FormItem>
                                <FormItem label="上级菜单序号" class="half">
                                    <Input disabled value="这个没卵用"/>
                                </FormItem>
                                <FormItem label="菜单名称">
                                    <Input v-model="createOrUpdate.menuName"/>
                                </FormItem>
                                <FormItem label="Controller.Action">
                                    <Input  placeholder="例如：org-menuIndex" v-model="createOrUpdate.controllerAction"/>
                                </FormItem>
                                <FormItem label="是否显示">
                                    <Select v-model="createOrUpdate.isShow">
                                        <Option value="1"></Option>
                                        <Option value="2"></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="菜单序号">
                                    <Input value="这个没卵用"/>
                                </FormItem>
                                <FormItem label="图标">
                                    <Input v-model="createOrUpdate.icon"/>
                                </FormItem>

                            </Form> 
                        </div>
                        <div slot="footer">
                            <Button @click="newModel = false">取消</Button>
                            <Button type="primary" @click="handleCreateOrUpdate">保存</Button>
                        </div>
                    </Modal>

                    <Button type="primary" @click="handleUpdate">修改</Button>
                    <Modal v-model="editModel" title="编辑菜单" width="600">
                        <div>
                            <Form :label-width="120">
                                <FormItem label="上级菜单名称">
                                    <Select v-model="createOrUpdate.parentMenuName">
                                        <Option value="1"></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="上级菜单ID" class="half">
                                    <Input disabled v-model="createOrUpdate.parentMenuId"/>
                                </FormItem>
                                <FormItem label="上级菜单序号" class="half">
                                    <Input disabled value="这个没卵用"/>
                                </FormItem>
                                <FormItem label="菜单名称">
                                    <Input v-model="createOrUpdate.menuName"/>
                                </FormItem>
                                <FormItem label="Controller-Action">
                                    <Input  placeholder="例如：org-menuIndex" v-model="createOrUpdate.controllerAction"/>
                                </FormItem>
                                <FormItem label="是否显示">
                                    <Select v-model="createOrUpdate.isShow">
                                        <Option value="1"></Option>
                                        <Option value="2"></Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="菜单序号">
                                    <Input value="这个没卵用"/>
                                </FormItem>
                                <FormItem label="图标">
                                    <Input  v-model="createOrUpdate.icon"/>
                                </FormItem>

                            </Form> 
                        </div>
                        <div slot="footer">
                            <Button @click="editModel = false">取消</Button>
                            <Button type="primary" @click="handleCreateOrUpdate">保存</Button>
                        </div>
                    </Modal>

                    <Button type="primary" @click="deleteModel = true">删除</Button>
                    <Modal v-model="deleteModel" title="删除菜单" width="350" class="confirmModel" @on-ok="handleDelete">
                        <div>
                            <p>确定删除吗？</p>
                        </div>
                    </Modal>

                </div>
                <Table :data="tableData1" :columns="tableColumns1" @on-select="handleCheckedOrDeleteTable" @on-select-all="handleCheckedOrDeleteTable" @on-select-cancel="handleCheckedOrDeleteTable" :height="scrollTableH"></Table>
                <div class="my-page">
                    <Page :total="100" :current="1"></Page>
                    <span class="pageSelect">每页显示
                        <Select value="20">
                            <Option value="20">20</Option>
                        </Select>                                
                    </span>
                </div>
            </Card>
        </div>
    </Row>
</template>
<script>
import util from '@/libs/util'

    export default {
        data () {
            return {
                menuKey:'',     // 查询菜单输入的字
                type:'1',     // 1前台2后台
                createOrUpdate: {   // 创建或修改
                    parentMenuName:'',  //上级菜单名称
                    parentMenuId:'',   //上级菜单id
                    menuName:'',    // 菜单名称
                    controllerAction:'',    // 控制器_方法
                    isShow:'',  // 是否显示
                    icon:'',    // 图标，去iview官网找
                },
                checkedData:'',     //选中的第一个数据，用作修改
                deleteIds:[],       //选中的菜单id
                newModel: false,        // 新增菜单模态框
                editModel: false,       // 修改菜单模态框
                deleteModel: false,     // 删除菜单模态框
                treeList: [     // 平台菜单树
                    {
                        title: '前台功能菜单',
                        expand: true,
                        children: [
                            {
                                title: '111',
                                expand: true,
                                id:'11',
                                num:'2',
                                icon:'3',
                                level:'4',
                                name:'5',
                                parentId:'6',
                                parentName:'7',
                                founder:'8',
                                organ1:'9',
                                time1:'10',
                                renew:'44',
                                organ2:'12',
                                time2:'13',
                                children: [
                                    {
                                        title: '1231',
                                        expand: true,
                                        id:'1',num:'2',icon:'3',level:'4',name:'1',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '1232',
                                        expand: true,
                                        id:'2',num:'2',icon:'3',level:'4',name:'2',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '1233',
                                        expand: true,
                                        id:'3',num:'2',icon:'3',level:'4',name:'3',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '1234',
                                        expand: true,
                                        id:'4',num:'2',icon:'3',level:'4',name:'4',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '1235',
                                        expand: true,
                                        id:'5',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    }
                                ]
                            },
                            {
                                title: '222',
                                expand: true,
                                id:'11',
                                num:'2',
                                icon:'3',
                                level:'4',
                                name:'5',
                                parentId:'6',
                                parentName:'7',
                                founder:'8',
                                organ1:'9',
                                time1:'10',
                                renew:'44',
                                organ2:'12',
                                time2:'13',
                                children: [
                                    {
                                        title: '123451',
                                        id:'1',
                                        expand: true,
                                        id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '123452',
                                        expand: true,
                                        id:'2',id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '123453',
                                        expand: true,
                                        id:'3',id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '123454',
                                        expand: true,
                                        id:'3',id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    },
                                    {
                                        title: '123455',
                                        expand: true,
                                        id:'3',id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',
                                    }
                                ]
                            },
                        ]
                    },
                ],    
                treeNum:0,  //菜单节点数
                tableColumns1: [    //列表头
                    {type: 'selection',width: 30,align: 'center'},
                    {title: '菜单ID',key:'id',width: 60},
                    {title: '序号',key:'num',width: 60},    
                    {title: '图标',key:'icon',width: 100},    
                    {title: '菜单级别',key:'level',width: 100},    
                    {title: '菜单名称',key:'name',width: 100},    
                    {title: '上级菜单ID',key:'parentId',width: 100},    
                    {title: '上级菜单名称',key:'parentName',width: 100},    
                    {title: '创建人',key:'founder',width: 100},    
                    {title: '创建人所属机构',key:'organ1',width: 200},    
                    {title: '创建时间',key:'time1',width: 200},
                    {title: '更新人',key:'renew',width: 100},    
                    {title: '更新人所属机构',key:'organ2',width: 200},    
                    {title: '更新时间',key:'time2',width: 200},
                ],
                tableData1: [   // 菜单主数据
                    {id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',},
                    {id:'1',num:'2',icon:'3',level:'4',name:'5',parentId:'6',parentName:'7',founder:'8',organ1:'9',time1:'10',renew:'44',organ2:'12',time2:'13',}
                ],  
                scrollTableH: document.body.clientHeight - 380,
            }
        },
        methods: {
            handleCheckedMenu(data1) {    // 点击功能菜单，右侧显示相应列表
                this.tableData1 = data1[0].children
            },
            handleSearch() {    //查询菜单
                //alert(this.menuKey)
                /*util.ajax.post('user/rolelist',{menuKey:this.menuKey}).then(response => {     有接口了放开
                    if(response.data.errCode === 0) {
                        this.tableData1 = response.data
                        this.$Message.success('请求成功了')
                    }
                })*/
            },
            handleChangeTab() {     // 切换标签时，请求对应菜单树
                //console.log(this.type)
                /*util.ajax.post('user/rolelist',{type:data2}).then(response => {     //有接口了放开
                    if(response.data.errCode === 0) {
                        this.treeList = response.data
                        this.$Message.success('请求成功了')
                    }
                })*/
            },
            handleCreateOrUpdate() {    // 保存或修改
                console.log(this.createOrUpdate);
                /*util.ajax.post('user/rolelist',{type:data2}).then(response => {     //有接口了放开
                    if(response.data.errCode === 0) {
                        this.treeList = response.data
                        this.$Message.success('请求成功了')
                    }
                })*/
            },
            handleCheckedOrDeleteTable(data2) {   // 选中的菜单，修改取第一条，选中和取消都是你这个方法
                this.createOrUpdate.parentMenuId = data2[0].id;
                this.createOrUpdate.parentMenuName = data2[0].parentName;
                let ids = [];
                data2.map(function(item, key) {
                    ids.push(item.id)
                })
                this.deleteIds = ids;
            },
            handleUpdate() {    //修改
                console.log(this.checkedData)
                if(this.createOrUpdate.parentMenuId == '') {
                    this.$Message.error('请选择修改项')
                } else {
                    this.editModel = true;   // 模态框显示
                }
                
            },
            handleDelete() {    // 删除，成功的话再次请求获取菜单接口
                /*util.ajax.post('user/rolelist',{deleteIds:this.deleteIds}).then(response => {     //有接口了放开
                    if(response.data.errCode === 0) {
                        this.treeList = response.data;
                        this.$Message.success('请求成功了');
                        this.handleChangeTab();
                    }
                })*/
            },
            handleInit() {  //初始化数据,新增、修改、删除都要初始化,这里有几种方法，1刷新2页面内所有属性重新赋值3网上搜的方法貌似比价复杂
                window.reload();
            },
            handleCheckedCreateMenu(data3) {     // 新增或修改的时候选择上级菜单
                console.log(data3)
            }
        },
        mounted () {
            console.log(this.treeList[0].children)
            this.handleChangeTab(this.type); 
            //table自适应
            const that = this
            window.onresize = () => {
                return (() => {
                    window.scrollTableH = document.body.clientHeight - 380
                    that.scrollTableH = window.scrollTableH
                })()
            }
        },
        watch: {
            //table自适应
            scrollTableH (val) {
                if (!this.timer) {
                    this.scrollTableH = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        console.log(that.scrollTableH)
                        //that.init()
                        that.timer = false
                    }, 400)
                }
            }
        }
    }
</script>