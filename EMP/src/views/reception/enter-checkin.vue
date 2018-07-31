<style lang="less">
    @import '../style.less';
</style>

<template>
    <div class="order-main-con">
        <div class="order-content-con">
            <div class="box">
                <div class="box-top"><span class="title">新增进场车辆</span></div>
                <div class="box-con">
                    <div class="order-form">
                        <Form :label-width="100">
                            <FormItem label="车牌号" required class="search-form-item">
                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                            </FormItem>
                            <FormItem label="VIN" class="search-form-item">
                                <Input value=""/><Button icon="search" class="search-btn"></Button>
                            </FormItem>
                            <FormItem label="服务类型">
                                <Input value="维修" disabled/>
                            </FormItem>
                            <div class="line"></div>

                            <FormItem label="上次服务时间">
                                <Input value="2018-06-27  08:38" disabled/>
                            </FormItem>   
                            <FormItem label="上次服务项目">
                                <Input value="检测维修" disabled/><a class="link-btn">更多</a>
                            </FormItem>   
                            <div class="line"></div>

                            <FormItem label="车主性质" required>
                                <Select placeholder="请选择">
                                    <Option value="个人">个人</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="车主" required>
                                <Input value=""/>
                            </FormItem>
                            <FormItem label="登记日期">
                                <DatePicker type="date" style="width:100%" disabled value="2018-07-11"></DatePicker>
                            </FormItem>
                            <FormItem label="驾驶证号">
                                <Input value="340515199265150111"/>
                            </FormItem>
                            <FormItem label="车主性别">
                                <RadioGroup>
                                    <Radio label="男"></Radio>
                                    <Radio label="女"></Radio>
                                    <Radio label="保密"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="下次保险" required>
                                <DatePicker type="date" style="width:100%" ></DatePicker>
                            </FormItem>
                            <FormItem label="驾驶证档案号">
                                <Input value="340515199265150111"/>
                            </FormItem>
                            <FormItem label="联系手机" required>
                                <Input value="13136489752"/>
                            </FormItem>
                            <FormItem label="下次年审" required>
                                <DatePicker type="date" style="width:100%" ></DatePicker>
                            </FormItem>
                            <FormItem label="发动机号">
                                <Select placeholder="请选择">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="送修人" required>
                                <Input value="王志勇"/>
                            </FormItem>
                            <FormItem label="下次保养">
                                <DatePicker type="date" style="width:100%" ></DatePicker>
                            </FormItem>
                            <FormItem label="车辆品牌">
                                <Input value="L-路虎"/>
                            </FormItem>
                            <FormItem label="送修人手机" required>
                                <Input value="13136489752"/>
                            </FormItem>
                            <FormItem label="保养里程" class="mileage-input-item">
                                <Input value=""/>
                            </FormItem>  
                            <FormItem label="车型">
                                <Input value="揽胜"/>
                            </FormItem>
                            <FormItem label="联系地址">
                                <al-selector 
                                    v-model="resDefault"
                                    level="2"
                                    auto
                                />
                            </FormItem>   
                            <FormItem label="详细地址">
                                <Input value="" disabled/>
                            </FormItem>
                            <div class="line"></div>

                            <FormItem label="进场时间" required>
                                <DatePicker type="datetime" style="width:100%"></DatePicker>
                            </FormItem>
                            <FormItem label="进场里程" class="mileage-input-item" required>
                                <Input value="2"/>
                            </FormItem>   
                            <FormItem label="渠道来源">
                                <Select placeholder="请选择">
                                    <Option value="再次进店"></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="服务顾问">
                                <Select value="孙玉环" disabled>
                                    <Option value="孙玉环">孙玉环</Option>
                                </Select>
                            </FormItem>
                           <FormItem label="维修技师">
                                <Select value="">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="变速箱类型">
                                <RadioGroup>
                                    <Radio label="手动挡"></Radio>
                                    <Radio label="自动挡"></Radio>
                                    <Radio label="手自一体"></Radio>
                                </RadioGroup>
                            </FormItem>
                           <FormItem label="支付方式">
                                <Select value="">
                                    <Option value="现金">现金</Option>
                                </Select>
                            </FormItem>
                           <FormItem label="账务类别">
                                <Select value="">
                                    <Option value=""></Option>
                                </Select>
                            </FormItem>
                            <FormItem label="是否洗车">
                                <RadioGroup>
                                    <Radio label="是"></Radio>
                                    <Radio label="否"></Radio>
                                </RadioGroup>
                            </FormItem>

                            <FormItem label="进场油表" class="large-input-item" required>
                                <RadioGroup>
                                    <Radio label="空箱"></Radio>
                                    <Radio label="1/4"></Radio>
                                    <Radio label="1/2"></Radio>
                                    <Radio label="3/4"></Radio>
                                    <Radio label="满箱"></Radio>
                                </RadioGroup>
                            </FormItem>

                            <FormItem label="客户需求" class="full-input-item">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%"/>
                            </FormItem>                            
                            <FormItem label="备注" class="full-input-item">
                                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" style="width:100%"/>
                            </FormItem>   

                        </Form>                    
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
import util from '@/libs/util.js';
import Vue from 'vue';
import iviewArea from 'iview-area';
Vue.use(iviewArea);

export default {
    name: 'enter_checkin',
    data () {
        return {
            resDefault: ['河北省', '张家口市', '怀来县'],

        };
    },
    methods: {
        submitShowDetail () {
            this.cancelEdit();

            util.openNewPage(this, 'enter_detail');
            this.$router.push({
                name: 'enter_detail'
            });
        },
        cancelEdit(){
            this.$store.commit('removeTag', 'enter_checkin');
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
    }
};
</script>

