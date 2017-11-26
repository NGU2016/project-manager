import React from "react";
import { Button,Col, Modal, Form, Input, Radio } from 'antd';
import $ from "jquery";
const InputGroup = Input.Group;
const FormItem = Form.Item;


class LeaveConfig extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: false,
            returnValue:{
                begintime:"",
                endtime:"",
                emergency:"",
                emergencyNum:"",
                assessing:"",
                teammate:""
            },
            isEdit:false
        };
    }
    showModal (value,isEdit) {
        this.setState({ visible: true });
        if(isEdit){
            this.setState({
                returnValue : value,
                isEdit:true
            })
        }
    }
    handleData(event){
        var data=this.state.returnValue;
        data[event.target.id]=event.target.value;
        /*switch (event.target.id){
            case "begintime":
                data["begintime"]=event.target.value;
                break;
            case "endtime":
                data["endtime"] = event.target.value;
                break;
            case "emergency":
                data["emergency"] = event.target.value;
                break;
            case "emergencyNum":
                data["emergencyNum"] = event.target.value;
                break;
            case "teammate":
                data["teammate"] = event.target.value;
                break;
            case "assessing":
                data["assessing"] = event.target.value;
                break;
        }*/
        this.setState({
            returnValue:data
        })
    }
    setLeaveConfig (){
        const me=this;
        let actionUrl="";
        if(this.state.isEdit){
            actionUrl="/updateLeaveConfig";
        }else{
            actionUrl="/setLeaveConfig";
        }
        $.ajax({
            url:actionUrl,
            type: 'post',
            dataType: 'json',
            data:me.state.returnValue,
            success: data => {
                me.setState({
                    returnValue:{
                        begintime:"",
                        endtime:"",
                        emergency:"",
                        emergencyNum:"",
                        assessing:"",
                        teammate:""
                    }
                });
                me.props.handleVal();//调用父组件的刷新方法
            },
            error: err => {
                console.log(err);
            }
        });
        this.setState({
            visible: false,
        })
    }
    handleCancel () {
        this.setState({
            returnValue:{
                begintime:"",
                endtime:"",
                emergency:"",
                emergencyNum:"",
                assessing:"",
                teammate:""
            },
            visible: false,
            isEdit:false
        });
    }
    handleCreate () {
        this.setLeaveConfig();
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>新建</Button>
                <Modal
                    title="新建请假信息"
                    visible={this.state.visible}
                    onOk={this.handleCreate.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>请假开始时间</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="begintime" value={this.state.returnValue.begintime}  onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>请假结束时间</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="endtime" value={this.state.returnValue.endtime}  onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>紧急联系人</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="emergency" value={this.state.returnValue.emergency}  onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>紧急联系人号码</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="emergencyNum" value={this.state.returnValue.emergencyNum} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>组员信息</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="teammate" value={this.state.returnValue.teammate} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                </Modal>
            </div>
        );
    }
}

export default LeaveConfig
