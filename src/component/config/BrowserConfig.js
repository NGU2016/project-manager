import React from "react";
import { Button,Col, Modal, Form, Input, Radio } from 'antd';
import $ from "jquery";
const InputGroup = Input.Group;
const FormItem = Form.Item;


class BrowserConfig extends React.Component {
    constructor (props) {
        super(props);
        this.state = {//优化：清空配置项可以提成一个方法
            visible: false,
            returnValue:{
                IE:"",
                firefox:"",
                chrome:"",
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
            case "IE":
                data["IE"]=event.target.value;
                break;
            case "firefox":
                data["firefox"] = event.target.value;
                break;
            case "chrome":
                data["chrome"] = event.target.value;
                break;
            case "teammate":
                data["teammate"] = event.target.value;
                break;
        }*/
        this.setState({
            returnValue:data
        })
    }
    setBrowsConfig (){
        const me=this;
        let actionUrl="";
        if(this.state.isEdit){
            actionUrl="/updateBrowsConfig";
        }else{
            actionUrl="/setBrowsConfig";
        }
        $.ajax({
            url:actionUrl,
            type: 'post',
            dataType: 'json',
            data:me.state.returnValue,
            success: data => {
                me.setState({
                    returnValue:{
                        IE:"",
                        firefox:"",
                        chrome:"",
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
                IE:"",
                firefox:"",
                chrome:"",
                teammate:""
            },
            visible: false,
            isEdit:false
        });
    }
    handleCreate () {
        this.setBrowsConfig();
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>新建</Button>
                <Modal
                    title="新建浏览器信息"
                    visible={this.state.visible}
                    onOk={this.handleCreate.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>IE(版本)</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="IE" value={this.state.returnValue.IE}  onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>火狐(版本)</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="firefox" value={this.state.returnValue.firefox}  onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>谷歌(版本)</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" id="chrome" value={this.state.returnValue.chrome}  onChange={this.handleData.bind(this)}/>
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

export default BrowserConfig
