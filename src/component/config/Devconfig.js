import React from "react";
import { Button, Col, Modal, Form, Input, Radio } from 'antd';
import $ from "jquery";
const InputGroup = Input.Group;

class Devconfig extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
            returnvalue:{
                IP:"",
                version:"",
                time:"",
                use:"",
                IPOP:"",
                usetime:"",
                teammate:""

            }
        };
    }
    showModal (value) {
        this.setState({ visible: true });
        if(value){
            console.log(2222)
            console.log(value)
            this.state.returnvalue=value;
        }
    }
    handleCancel () {
        this.setState({
            returnvalue:{
                IP:"",
                version:"",
                time:"",
                use:"",
                IPOP:"",
                usetime:"",
                teammate:""

            }
        })
        this.setState({ visible: false });
    }
    handleData(event){
        const data=this.state.returnvalue;
        switch (event.target.id){
            case "IP":
                data["IP"]=event.target.value;
                break;
            case "version":
                data["version"] = event.target.value;
                break;
            case "time":
                data["time"] = event.target.value;
                break;
            case "use":
                data["use"] = event.target.value;
                break;
            case "IPOP":
                data["IPOP"] =  event.target.value;
                break;
            case "usetime":
                data["usetime"] = event.target.value;
                break;
            case "teammate" :
                data["teammate"] = event.target.value;
                break;
        }
        console.log(data);
        this.setState({
            returnvalue:data
        })
    }
    setDevConfig (){
        const me=this;
        $.ajax({
            url:"/setDevConfig",
            type: 'post',
            dataType: 'json',
            data:me.state.returnvalue,
            success: data => {
                me.props.handleVal();//调用父组件的刷新方法
            },
            error: err => {
                console.log(err);
            }
        })
    }
    handleCreate () {
        this.setDevConfig();
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>新建</Button>
                <Modal
                    title="新建设备信息"
                    visible={this.state.visible}
                    onOk={this.handleCreate.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>ip地址</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.IP} id="IP" onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>版本信息</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.version} id="version" onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>编译时间</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.time} id="time" onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>版本用途</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="use" value={this.state.returnvalue.use} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>管理口编号</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="IPOP" value={this.state.returnvalue.IPOP} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>占用时间</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="usetime" value={this.state.returnvalue.usetime} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>组员信息</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="teammate" value={this.state.returnvalue.teammate} onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                </Modal>
            </div>
        );
    }
}

export default Devconfig
