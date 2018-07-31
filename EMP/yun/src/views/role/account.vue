<style lang="less">
    @import '../style.less';
</style>

<template>
    <div>
        <Row class="top-row">
            <div class="col-left">
                <Card>
                    <p slot="title">当前组织</p>
                    <div class="content">宇佳乡村通集团总部</div>
                </Card>            
            </div>            
            <div class="col-right">
                <Card>
                    <p slot="title">查询区域</p>
                    <Form :label-width="80">
                        <FormItem label="组织编号">
                            <Input value="Org10000" disabled/>
                        </FormItem>
                        <FormItem label="姓名">
                            <Input />
                        </FormItem>
                        <FormItem label="联系电话">
                            <Input />
                        </FormItem>
                        <Button type="primary" class="submit" style="margin-left:100px;">查询</Button>
                    </Form> 
                </Card>
            </div>
        </Row>
        <Row class="my-row">
            <div class="col-left">           
                <Card>
                    <p slot="title">组织结构树</p>
                    <div>
                        <Tree :data="tree"></Tree>
                    </div>
                </Card>
            </div>            
            <div class="col-right">
                <Card class="table-card">
                    <div style="padding-bottom:10px;">
                        <Button type="primary" @click="newModel = true">新增</Button>
                        <Modal v-model="newModel" title="新增人员" width="600">
                            <div>
                                <Form :label-width="100">
                                    <h4>基本信息</h4>
                                    <FormItem label="所属机构" class="half">
                                        <Input disabled value="集团总部"/>
                                    </FormItem>
                                    <FormItem label="所在部门/站点" class="half">
                                        <Select value="">
                                            <Option value=""></Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="用户姓名" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="用户账号" class="half">
                                        <Input disabled/>
                                    </FormItem>
                                    <FormItem label="用户角色" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="账号密码" class="half">
                                        <Input disabled/>
                                        <p class="red-text">账号初始密码为用户手机后六位</p>
                                    </FormItem>
                                    <div class="line"></div>
                                    <h4>附加信息</h4>
                                    <FormItem label="职务" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="联系手机" class="half" required>
                                        <Input />
                                    </FormItem>
                                    <FormItem label="出生日期" class="half">
                                        <DatePicker type="date" style="width: 100%"></DatePicker>
                                    </FormItem>
                                    <FormItem label="性别" class="half">
                                        <RadioGroup>
                                            <Radio label="男"></Radio>
                                            <Radio label="女"></Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem label="是否在职">
                                        <RadioGroup>
                                            <Radio label="离职"></Radio>
                                            <Radio label=" 在职"></Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem label="备注">
                                        <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                                    </FormItem>

                                </Form> 
                            </div>
                            <div slot="footer">
                                <Button @click="newModel = false">取消</Button>
                                <Button type="primary">保存</Button>
                            </div>
                        </Modal>

                        <Button type="primary" @click="handleUpdateModal">修改</Button>
                        <Modal v-model="editModel" title="编辑人员" width="600">
                            <div>
                                <Form :label-width="100">
                                    <h4>基本信息</h4>
                                    <FormItem label="所属机构" class="half">
                                        <Input disabled value="集团总部"/>
                                    </FormItem>
                                    <FormItem label="所在部门/站点" class="half">
                                        <Select value="">
                                            <Option value=""></Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="用户姓名" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="用户账号" class="half">
                                        <Input disabled/>
                                    </FormItem>
                                    <FormItem label="用户角色" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="账号密码" class="half">
                                        <Input disabled/>
                                        <p class="red-text">账号初始密码为用户手机后六位</p>
                                    </FormItem>
                                    <div class="line"></div>
                                    <h4>附加信息</h4>
                                    <FormItem label="职务" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="联系手机" class="half" required>
                                        <Input />
                                    </FormItem>
                                    <FormItem label="出生日期" class="half">
                                        <DatePicker type="date" style="width: 100%"></DatePicker>
                                    </FormItem>
                                    <FormItem label="性别" class="half">
                                        <RadioGroup>
                                            <Radio label="男"></Radio>
                                            <Radio label="女"></Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem label="是否在职">
                                        <RadioGroup>
                                            <Radio label="离职"></Radio>
                                            <Radio label=" 在职"></Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem label="备注">
                                        <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
                                    </FormItem>

                                </Form> 
                            </div>
                            <div slot="footer">
                                <Button @click="newModel = false">取消</Button>
                                <Button type="primary">保存</Button>
                            </div>
                        </Modal>

                        <Button type="primary" @click="deleteModel = true">删除</Button>
                        <Modal v-model="deleteModel" title="删除人员" width="350" class="confirmModel">
                            <div>
                                <p>确定删除吗？</p>
                            </div>
                        </Modal>

                    </div>
                    <Table :columns="columns" :data="data" :height="scrollTableH" @on-select="handleCheckedOrDeleteTable" @on-select-all="handleCheckedOrDeleteTable" @on-select-cancel="handleCheckedOrDeleteTable"></Table>
                    <div class="my-page">
                        <Page :total="totalDataCount" :current="thisPage" @on-change="handleChangePage" :page-size="parseInt(pageLimit)"></Page>
                        <span class="pageSelect">每页显示
                            <Select v-model="pageLimit" @on-change="handleChangePageLimit">
                                <Option value='10'>10</Option>
                                <Option value='20' v-show="totalDataCount >= 20">20</Option>
                                <Option value='30' v-show="totalDataCount >= 30">30</Option>
                                <Option value='40' v-show="totalDataCount >= 40">40</Option>
                                <Option value='50' v-show="totalDataCount >= 50">50</Option>
                            </Select>                                
                        </span>
                    </div>

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
                newModel: false,    // 新增模态框显示状态
                editModel: false,   // 修改模态框显示状态
                deleteModel: false, // 删除模态框显示状态
                pageLimit:'10',   // 每页显示
                thisPage:1,    // 当前页码
                totalDataCount:30,  // 总条数
                organize: {     // 当前账套信息
                    name:'英冠总部',        //当前账套名称
                    number:'Org000001',    // 当前账套标号
                },
                createOrUpdate: {   // 创建或修改的信息
                    id:'',
                    parentOrganize:'',  // 上级账套名称
                    parentOrganizeNumber:'',   // 上级账号标号
                    organizeName:'',    // 组织名称
                    organizeState:'',   // 组织类型
                },
                search:{    // 搜索字段
                    name:'',    // 姓名
                    mobile:'',  // 联系电话
                },
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
                columns: [
                    {type: 'selection',width: 30,align: 'center'},
                    {title:'编号',key:'number',width: 60},
                    {title:'姓名',key:'name',width: 100},
                    {title:'系统账号',key:'account',width: 100},
                    {title:'角色',key:'role',width: 200},
                    {title:'所在部门',key:'frombm',width: 100},
                    {title:'所属机构',key:'fromjg',width: 200},
                    {title:'性别',key:'sex',width: 60},
                    {title:'出生日期',key:'borth',width: 100},
                    {title:'联系电话',key:'mobile',width: 100},
                    {title:'备注',key:'remark',width: 200},
                    {title:'创建人',key:'createuser',width: 100},
                    {title:'创建人所属机构',key:'createfrom',width: 200},
                    {title:'创建时间',key:'createtime',width: 200},
                    {title:'更新人',key:'updateuser',width: 100},
                    {title:'更新人所属机构',key:'updatefrom',width: 200},
                    {title:'更新时间',key:'updatetime',width: 200},
                ],
                data: [
                    {number:1,name:1,account:1,role:1,frombm:1,fromjg:1,sex:1,borth:1,mobile:1,remark:1,createuser:1,createfrom:1,createtime:1,updateuser:1,updatefrom:1,updatetime:1},
                    {number:2,name:2,account:2,role:2,frombm:2,fromjg:2,sex:2,borth:2,mobile:2,remark:2,createuser:2,createfrom:2,createtime:2,updateuser:2,updatefrom:2,updatetime:2},
                    {number:3,name:3,account:3,role:3,frombm:3,fromjg:3,sex:3,borth:3,mobile:3,remark:3,createuser:3,createfrom:3,createtime:3,updateuser:3,updatefrom:3,updatetime:3},
                ],
                scrollTableH: document.body.clientHeight - 470,

            }
        },
        methods: {
            handleClearCurrentRow () {  //清空表格,没啥用
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleSearch() {  // 查询
                util.ajax.post('user/rolelist',this.search).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            },
            handleCheckedOrDeleteTable(data1) {   // 选中的菜单，修改取第一条，选中和取消都是你这个方法
                this.createOrUpdate = data1[0];
                let ids = [];
                data1.map(function(item, key) {
                    ids.push(item.id)
                })
                this.deleteIds = ids;
            },
            handleCreate() {    // 新增
                util.ajax.post('user/rolelist',this.createOrUpdate).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            },
            handleUpdateModal() {    // 修改模态框弹出
                if(this.deleteIds == undefined || this.deleteIds.length > 1) {
                    this.$Message.error('请选择一个');
                    return;
                } else {
                    this.editModel = true;
                    this.handleLookupNumInData();
                }
            },
            handleUpdate() {    // 修改
                util.ajax.post('user/rolelist',this.createOrUpdate).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                        // this.editModel = false
                    }
                })
            },
            handleLookupNumInData() {   // 找到选中的数据在data的key，要怪就怪checkbox没返回key
                let checkedId = this.createOrUpdate.id;
                let numInData1 = 0;
                this.data.map(function(item,key) {
                    if(item.id == checkedId) {
                        numInData1 = key;
                    }
                })
                this.numInData = numInData1;
            },
            handleGetDataByPage() {     // 页码改变、每页显示条数改变、初始化请求数据
                let data = {
                    p:this.thisPage,
                    t:this.pageLimit,
                };
                console.log(data)
                /*util.ajax.post('user/rolelist',data).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        // this.data = response.data.data   主数据
                        // this.totalDataCount = response.data.totalDataCount   总条数
                    }
                })*/
            },
            handleChangePage(data1) {   // 切换页码
                this.thisPage = data1;
                console.log(this.thisPage)
                console.log(this.pageLimit)
                
                this.handleGetDataByPage();
            },
            handleChangePageLimit() {   // 切换每页显示条数
                console.log(this.thisPage)
                console.log(this.pageLimit)
                this.handleGetDataByPage();
            },
        },
        mounted() {
            //table自适应
            const that = this
            window.onresize = () => {
                return (() => {
                    window.scrollTableH = document.body.clientHeight - 470
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