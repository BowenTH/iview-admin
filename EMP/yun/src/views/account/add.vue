<style lang="less">
    @import '../style.less';
</style>

<template>
    <div>
        <Row class="top-row">
            <div class="col-left">
                <Card>
                    <p slot="title">当前账套</p>
                    <div class="content">{{organize}}</div>
                </Card>            
            </div>            
            <div class="col-right">
                <Card>
                    <p slot="title">查询区域</p>
                    <Form :label-width="100">
                        <FormItem label="账套编号">
                            <Input />
                        </FormItem>
                        <FormItem label="账套联系人">
                            <Input />
                        </FormItem>
                        <FormItem label="账套级别">
                            <Select value="">
                                <Option value=""></Option>
                            </Select>
                        </FormItem>
                        <FormItem label="账套名称">
                            <Input />
                        </FormItem>
                        <FormItem label="账套联系电话">
                            <Input />
                        </FormItem>
                        <FormItem label="账套状态">
                            <Select value="">
                                <Option value="已启用">已启用</Option>
                                <Option value="已停用">已停用</Option>
                            </Select>
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
                        <Modal v-model="newModel" title="新增账套" width="600" @on-ok="handleCreate">
                            <div>
                                <Form :label-width="100" ref="createOrUpdate" :model="createOrUpdate" :rules="rules">
                                    <FormItem label="上级账套" class="two-input-item">
                                        <Input disabled/><Input disabled/><span class="right-text">一级</span>
                                    </FormItem>
                                    <FormItem label="账套名称" class="two-input-item">
                                        <Input disabled/><Input v-model="createOrUpdate.organizeName"/><span class="right-text">二级</span>
                                    </FormItem>
                                    <FormItem label="联系人" class="half" prop="contactName">
                                        <Input/>
                                    </FormItem>
                                    <FormItem label="联系电话" class="half" prop="contactMobile">
                                        <Input v-model="createOrUpdate.contactMobile"/>
                                    </FormItem>
                                    <FormItem label="IP地址" class="half">
                                        <Input/>
                                    </FormItem>
                                    <FormItem label="业务范围" class="half">
                                        <Input/>
                                    </FormItem>
                                     <FormItem label="地址" class="addr-form-item">
                                        <al-selector 
                                            v-model="resDefault"
                                            level="2"
                                            auto
                                        />
                                    </FormItem>
                                    <FormItem label="备注">
                                        <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%" v-model="createOrUpdate.remark"/>
                                    </FormItem>
                                    <FormItem label="图片">
                                        <div class="upload-list" v-for="item in uploadList">
                                            <template v-if="item.status === 'finished'">
                                                <img :src="item.url">
                                                <div class="upload-list-cover">
                                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                            </template>
                                        </div>
                                        <Upload
                                            ref="upload"
                                            :show-upload-list="false"
                                            :default-file-list="defaultImgList"
                                            :on-success="handleSuccess"
                                            :format="['jpg','jpeg','png']"
                                            :max-size="2048"
                                            :on-format-error="handleFormatError"
                                            :on-exceeded-size="handleMaxSize"
                                            :before-upload="handleBeforeUpload"
                                            multiple
                                            type="drag"
                                            action="http://data.yg.com/common/upload"
                                            style="display: inline-block;width:58px;"
                                            @on-success="handleUploadSuccess"
                                            >
                                            <div style="width: 58px;height:58px;line-height: 58px;">
                                                <Icon type="camera" size="20"></Icon>
                                            </div>
                                        </Upload>
                                    </FormItem>
                                </Form> 
                            </div>
                        </Modal>

                        <Button type="primary" @click="handleUpdateModal">修改</Button>
                        <Modal v-model="editModel" title="编辑账套" width="600" @on-ok="handleUpdate">
                            <div>
                                <Form :label-width="100">
                                    <FormItem label="上级账套" class="two-input-item">
                                        <Input disabled/><Input disabled/><span class="right-text">一级</span>
                                    </FormItem>
                                    <FormItem label="账套名称" class="two-input-item">
                                        <Input disabled/><Input v-model="createOrUpdate.organizeName"/><span class="right-text">二级</span>
                                    </FormItem>
                                    <FormItem label="联系人" class="half">
                                        <Input v-model="createOrUpdate.contactName"/>
                                    </FormItem>
                                    <FormItem label="联系电话" class="half">
                                        <Input v-model="createOrUpdate.contactMobile"/>
                                    </FormItem>
                                    <FormItem label="IP地址" class="half">
                                        <Input />
                                    </FormItem>
                                    <FormItem label="业务范围" class="half">
                                        <Input />
                                    </FormItem>
                                     <FormItem label="地址" class="addr-form-item">
                                        <al-selector 
                                            v-model="resDefault"
                                            level="2"
                                            auto
                                        />
                                    </FormItem>
                                    <FormItem label="备注">
                                        <Input v-model="createOrUpdate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%"/>
                                    </FormItem>
                                    <FormItem label="图片">
                                        <div class="upload-list" v-for="item in uploadList">
                                            <template v-if="item.status === 'finished'">
                                                <img :src="item.url">
                                                <div class="upload-list-cover">
                                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                            </template>
                                        </div>
                                        <Upload
                                            ref="upload"
                                            :show-upload-list="false"
                                            :default-file-list="defaultImgList"
                                            :on-success="handleSuccess"
                                            :format="['jpg','jpeg','png']"
                                            :max-size="2048"
                                            :on-format-error="handleFormatError"
                                            :on-exceeded-size="handleMaxSize"
                                            :before-upload="handleBeforeUpload"
                                            multiple
                                            type="drag"
                                            action="http://data.yg.com/common/upload/"
                                            style="display: inline-block;width:58px;"
                                            @on-success="handleUploadSuccess"
                                            >
                                            <div style="width: 58px;height:58px;line-height: 58px;">
                                                <Icon type="camera" size="20"></Icon>
                                            </div>
                                        </Upload>
                                    </FormItem>
                                </Form> 
                            </div>
                        </Modal>

                        <Button type="primary" @click="stopModel=true">停用</Button>
                        <Modal
                            v-model="stopModel"
                            title="提示"
                            @on-ok="handleStop">
                            <h3>确定操作？</h3>
                        </Modal>
                        <Button type="primary" @click="enableModel=true">启用</Button>
                        <Modal
                            v-model="enableModel"
                            title="提示"
                            @on-ok="handleEnable">
                            <h3>确定操作？</h3>
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
                },
                createOrUpdate: {   // 创建或修改的信息
                    id:'',
                    parentOrganize:this.organize,  // 上级账套名称
                    parentOrganizeNumber:this.organizeNumber,   // 上级账号标号
                    organizeName:'',    // 账套名称
                    contactName:'', //联系人
                    contactMobile:'', //联系电话
                    province:'',    // 省
                    city:'',    // 市
                    area:'',    // 县区
                    remark:'',  // 备注
                    img:'',    // 图片
                },
                rules:{ // 验证规格
                    contactMobile: [
                        {required:true,message:'手机号码必填',trigger:'blur'},
                    ],
                    contactName: [
                        {required:true,message:'联系人姓名必填',trigger:'blur'},
                    ]
                },
                searchData: {       // 搜索字段
                    number:'',  // 账套编号
                    contact:'', // 账套联系人
                    grade:'',   // 账套级别
                    name:'',    // 账套名称
                    mobile:'',  // 账套联系电话
                    state:'',   // 账套状态
                },
                grade:[     // 账套级别（列表）
                    {id:1,name:'一级'},
                    {id:2,name:'二级'},
                    {id:3,name:'三级'},
                ],
                state:[     // 账套状态（列表）
                    {id:1,name:'已启用'},
                    {id:2,name:'已停用'},
                ],
                checkedData:'',     // 选中的第一个数据，用作修改
                numInData:'',   // 选中的这条数据在data中的位置（key）
                deleteIds:[],       // 选中的账套id
                pageLimit:'10',   // 每页显示
                thisPage:1,    // 当前页码
                totalDataCount:30,  // 总条数
                newModel: false,    // 新增模态框
                editModel: false,       // 修改模态框
                stopModel: false,     // 停用启用模态框
                enableModel: false,     // 停用启用模态框
                defaultImgList:[],  
                imgView: false,
                uploadList: [],
                resDefault: ['河北省', '张家口市', '怀来县'],
                treeList: [],  
                columns: [
                    {type: 'selection',width: 30,align: 'center'},
                    {title:'状态',key:'state',width: 60},
                    {title:'账套编号与名称',key:'',children:[
                        {title:'编号',key:'number',width: 60},
                        {title:'名称',key:'name',width: 120},
                    ]},
                    {title:'上级节点',key:'',children:[
                        {title:'编号',key:'parentNumber',width: 60},
                        {title:'名称',key:'parentName',width: 120},
                    ]},
                    {title:'账套级别',key:'grade',width: 100},
                    {title:'账套负责人',key:'',children:[
                        {title:'联系人',key:'contactName',width: 100},
                        {title:'联系电话',key:'contactMobile',width: 200},
                    ]},
                    {title:'备注',key:'remark',width: 200},
                    {title:'创建人',key:'createName',width: 100},
                    {title:'创建人所属机构',key:'createBelong',width: 200},
                    {title:'创建时间',key:'createTime',width: 120},
                    {title:'更新人',key:'updateName',width: 100},
                    {title:'更新人所属机构',key:'updateBelong',width: 200},
                    {title:'更新时间',key:'updateTime',width: 120},
                ],
                scrollTableH: document.body.clientHeight - 470,     //  主体部分滚动条
                data: [    // 全国账套数据
                    {
                        id:1,
                        grade: 1,    //级别
                        state: '已启用',   //状态
                        number: 111111,
                        name: '上海英冠1',
                        parentNumber: 100001,
                        parentName: '英冠总部',
                        contactName: '张三',
                        contactMobile: 18636012057,
                        remark: 'php是世界上最好的语言',  // 备注
                        createName: '张三',   //创建人
                        createTime: '2018-07-27',   //创建时间
                        createBelong: '总部', //所属机构
                        updateName: '张三',   //修改人
                        updateTime: '2018-07-27',   //修改时间
                        updateBelong: '总部', //所属机构
                    },
                     {
                        id:2,
                        grade: 1,    //级别
                        state: '已启用',   //状态
                        number: 111111,
                        name: '上海英冠2',
                        parentNumber: 100001,
                        parentName: '英冠总部',
                        contactName: '张三',
                        contactMobile: 18636012057,
                        remark: 'php是世界上最好的语言',  // 备注
                        createName: '张三',   //创建人
                        createTime: '2018-07-27',   //创建时间
                        createBelong: '总部', //所属机构
                        updateName: '张三',   //修改人
                        updateTime: '2018-07-27',   //修改时间
                        updateBelong: '总部', //所属机构
                    },
                     {
                        id:3,
                        grade: 1,    //级别
                        state: '已停用',   //状态
                        number: 111111,
                        name: '上海英冠3',
                        parentNumber: 100001,
                        parentName: '英冠总部',
                        contactName: '张三',
                        contactMobile: 18636012057,
                        remark: 'php是世界上最好的语言',  // 备注
                        createName: '张三',   //创建人
                        createTime: '2018-07-27',   //创建时间
                        createBelong: '总部', //所属机构
                        updateName: '张三',   //修改人
                        updateTime: '2018-07-27',   //修改时间
                        updateBelong: '总部', //所属机构
                    },
                ],
                tree: [    // 组织结构树
                    {
                        id:1,
                        title: '英冠总部',
                        expand:true,
                        children: [ 
                            {
                                id:1,
                                title: '上海英冠',
                                expand:true,
                                children: [ 
                                    {
                                        id:1,
                                        title: '上海英冠(浦东)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(浦东1)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(浦东2)',
                                                expand:true,
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(徐汇)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇1)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(徐汇2)',
                                                expand:true,
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '上海英冠(长宁)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(长宁1)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(长宁2)',
                                                expand:true,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id:1,
                                title: '山东英冠',
                                expand:true,
                                children: [ 
                                    {
                                        id:1,
                                        title: '山东英冠(济南)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(济南2)',
                                                expand:true,
                                            },
                                        ],
                                        
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(烟台)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(烟台1)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(烟台2)',
                                                expand:true,
                                            },
                                        ],
                                    },
                                    {
                                        id:1,
                                        title: '山东英冠(潍坊)',
                                        expand:true,
                                        children: [ 
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊1)',
                                                expand:true,
                                            },
                                            {
                                                id:1,
                                                title: '上海英冠(潍坊2)',
                                                expand:true,
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
            handleClearCurrentRow () {  // 清空表格,没啥用
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleSearch() {  // 查询
                util.ajax.post('user/rolelist').then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                        
                    }
                })
            },
            handleGetTree() {   // 去后台获取组织结构树
                util.ajax.post('user/rolelist').then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding
                    }
                })
            },
            //图片上传
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确, 请上传 jpg 或 png。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超过文件大小限制',
                    desc: '文件  ' + file.name + ' 太大, 超过 2M。'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多可上传五张图片。'
                    });
                }
                return check;
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
            handleCheckedOrDeleteTable(data2,index2) {   // 选中的菜单，修改取第一条，选中和取消都是这个方法
                console.log(data2)
                if(data2[0] != undefined) {
                    this.checkedData = data2[0];
                    let ids = [];
                    data2.map(function(item, key) {
                        ids.push(item.id)
                    })
                    this.deleteIds = ids;
                } 
            },
            handleStop() {  // 停用
                /*util.ajax.post('user/rolelist',data).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        // this.$Message.success('操作成功')
                        // 

                        let checkedIds = this.deleteIds;
                        this.data.map(function(item,key) {
                            if(checkedIds.indexOf(item.id) >= 0) {
                                if(item.state == '已启用') {
                                    item.state = '已停用';
                                }
                            }
                        })
                    }
                })*/
            },
            handleEnable() {  // 启用
                let checkedIds = this.deleteIds;
                this.data.map(function(item,key) {
                    console.log(key)
                    console.log(item)
                    /*if(checkedIds.indexOf(item.id) >= 0) {
                        if(item.state == '已停用') {
                            item.state = '已启用';
                        }
                    }*/
                })
                /*util.ajax.post('user/rolelist',data).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        // this.$Message.success('操作成功')
                        // 

                        let checkedIds = this.deleteIds;
                        this.data.map(function(item,key) {
                            if(checkedIds.indexOf(item.id) >= 0) {
                                if(item.state == '已停用') {
                                    item.state = '已启用';
                                }
                            }
                        })
                    }
                })*/
            },
            handleUploadSuccess(response, file, fileList) { // 上传成功的回调
                console.log(response)
                console.log(file)
                console.log(fileList)
            },
            handleCreate() {    // 保存
                this.$refs.createOrUpdate.validate((valid) => {
                    if (valid) {
                        /*let data = this.createOrUpdate;
                        util.ajax.post('user/rolelist',data).then(response => {  //这个接口地址乱写的
                            if(respnse.errCode === 0) {
                                // coding   
                                // this.$Message.success('操作成功')
                                if(修改成功) {  // 后台返回修改完的数据，添加到data
                                    this.data.push(response.data)
                                }
                            }
                        })*/
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleUpdateModal() {    // 修改模态框弹出,把选中的那些数据的第一条赋值给createOrUpdate
                this.editModel = true;
                this.createOrUpdate = this.checkedData;
                this.handleLookupNumInData();
            },
            handleUpdate() {    // 修改
                /*let data = this.createOrUpdate;
                util.ajax.post('user/rolelist',data).then(response => {  //这个接口地址乱写的
                    if(respnse.errCode === 0) {
                        // coding   
                        // this.$Message.success('操作成功')
                        if(修改成功) {  // 后台返回修改完的数据，替换掉旧数据
                            this.data[this.numInData] = response.data
                        }
                    }
                })*/
            },
            handleLookupNumInData() {   // 找到选中的数据在data的key，要怪就怪checkbox没返回key
                let checkedId = this.checkedData.id;
                let numInData1 = 0;
                this.data.map(function(item,key) {
                    if(item.id == checkedId) {
                        numInData1 = key;
                    }
                })
                this.numInData = numInData1;
            }
        },
        mounted() {
  
            //console.info(this.tree);

            this.uploadList = this.$refs.upload.fileList;

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