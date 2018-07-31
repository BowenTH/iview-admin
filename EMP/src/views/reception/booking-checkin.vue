<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">新增预约车辆</span></div>
                <div class="box-con">
                    <div class="order-form">
                        <Form :label-width="100">
                            <FormItem label="车牌号" required class="search-form-item">
                                <Input v-model="formData.cph" value=""/><Button icon="search" class="search-btn" @click="getBycph"></Button>
                            </FormItem>
                            <FormItem label="服务项目">
                                <Select placeholder="请选择">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <div class="line"></div>    
                            <FormItem label="车主性质">
                                <Select @on-change="czxz()" v-model="czxzValue">
                                    <Option value="单位">单位</Option>
                                    <Option value="个人">个人</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="单位名称" required v-show="isDanwei">
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="联系人手机" required v-show="isDanwei">
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="车主姓名" required v-show="!isDanwei">
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="车主电话" required v-show="!isDanwei">
                                <Input value=""/>
                            </FormItem>
                            <div class="line"></div>    
                            <FormItem label="品牌">
                                <Input value=""/>
                            </FormItem>                            
                            <FormItem label="车型" class="search-form-item">
                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                            </FormItem>                            
                            <FormItem label="行驶里程" class="mileage-input-item">
                                <Input value=""/>
                            </FormItem>   
                            <FormItem label="预约时间" required>
                                <DatePicker type="date" style="width:100%"></DatePicker>
                            </FormItem>   
                            <FormItem label="服务顾问" required>
                                <Select placeholder="请选择">
                                    <Option value="刘志刚">刘志刚</Option>
                                </Select>
                            </FormItem>                     
                            <div class="line"></div>    
                            <FormItem label="客户需求">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:110%"/>
                                <RadioGroup style="margin-top:10px;">
                                    <Radio label="已联系客户"></Radio>
                                    <Radio label="未联系客户"></Radio>
                                </RadioGroup>
                            </FormItem>                            
                            <FormItem label="备注">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:110%"/>
                            </FormItem>                            
                        </Form>                    
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-top"><span class="title">服务工时</span>
                    <span>工时金额合计<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="table">
                        <table>
                            <tr>
                                <th>服务项目</th>
                                <th>数量</th>
                                <th>工时金额(￥)</th>
                                <th>折扣(%)</th>
                                <th>折后金额(￥)</th>
                                <th>维修技师</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td><Select placeholder="请选择">
                                        <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                    </Select></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Input/></td>
                                <td><Button class="new">新增</Button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-top">
                    <div class="tabs-nav" style="float:left">
                        <span class="tab" :class="{active:isXqpj}" @click="pjtab()">需求配件</span>
                        <span class="tab" :class="{active:!isXqpj}" @click="pjtab()">实际领用配件</span>
                    </div>
                    <span>工时金额合计<i class="c-red">0.00</i> 元&nbsp;&nbsp;|&nbsp;&nbsp;折后金额合计<i class="c-red">0.00</i> 元</span>
                    <button class="save-btn">保存</button>
                </div>
                <div class="box-con pd-12">
                    <div class="tabs-con">
                        <div class="tabpane" v-show="isXqpj">
                            <div class="table">
                                <table>
                                    <tr>
                                        <th>配件名称</th>
                                        <th>单价(￥)</th>
                                        <th>数量</th>
                                        <th>折扣(%)</th>
                                        <th>折后金额(￥)</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Select placeholder="请选择">
                                                <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                            </Select>
                                        </td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button></td>
                                    </tr>
                                    <tr>
                                        <td><Select placeholder="请选择">
                                                <Option v-for="item in serviceTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                                            </Select></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Input/></td>
                                        <td><Button class="del">删除</Button><Button class="new">新增</Button></td>
                                    </tr>
                                </table>
                            </div>                            
                        </div>   
                        <div class="tabpane" v-show="!isXqpj"></div>   
                    </div>

                </div>
            </div>
            <div class="btm-btns-place">
                <div class="btm-btns">
                    <Button @click="cancelEdit">取消</Button>
                    <Button type="primary" @click="submitShowDetail">确定</Button>             
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util';

export default {
    name: 'booking_checkin',
    data () {
        return {
            formData:{
                cph:'',
            },
            isDanwei:true,
            isXqpj:true,
            serviceTagList: [{value:''}],
            czxzValue:"单位",
            currentPageName: this.$route.name,
        };
    },
    methods: {
        pjtab(){
             this.isXqpj==true?this.isXqpj=false:this.isXqpj=true;
        },
        czxz(){
            if(this.czxzValue=="单位") this.isDanwei=true;
            if(this.czxzValue=="个人") this.isDanwei=false;
        },
        submitShowDetail () {
            this.cancelEdit();

            util.openNewPage(this, 'booking_detail');
            this.$router.push({
                name: 'booking_detail'
            });
        },
        cancelEdit(){
            this.$store.commit('removeTag', 'booking_checkin');
            localStorage.pageOpenedList = JSON.stringify(this.$store.state.app.pageOpenedList);
            let lastPageName = '';
            if (this.$store.state.app.pageOpenedList.length > 1) {
                lastPageName = this.$store.state.app.pageOpenedList[1].name;
            } else {
                lastPageName = this.$store.state.app.pageOpenedList[0].name;
            }
            this.$router.push({
                name: lastPageName
            });            
        },
        getBycph() {
            util.ajax.post().then(response => {
                if(response.data.errCode === 0) {   
                    this.formData = RESPONSE.data.data
                } else {
                    this.$Message.warning(response.data.errMsg);
                }
            })
        }
    }
};
</script>

