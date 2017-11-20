import React from "react";
import { Button,Col, Modal, Form, Input, Radio } from 'antd';
const InputGroup = Input.Group;
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="新建浏览器信息"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="IE(版本)">
                        {getFieldDecorator('IE')( <Input />)}
                    </FormItem>
                    <FormItem label="火狐(版本)">
                        {getFieldDecorator('firefox')(<Input />)}
                    </FormItem>
                    <FormItem label="谷歌(版本)">
                        {getFieldDecorator('chrome')(<Input />)}
                    </FormItem>
                    <FormItem label="组员信息">
                        {getFieldDecorator('teammate',{
                            rules: [{ required: true, message: '请输入组员信息' }],
                        })(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class BrowserConfig extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
            returnValue:{
                IE:"",
                firefox:"",
                chrome:"",
                teammate:""
            }
        };
    }
    showModal () {
        this.setState({ visible: true });
    }
    handleData(event){
        var data=this.state.returnvalue;
        switch (event.target.id){
            case "IP":
                data["IE"]=event.target.value;
                break;
            case "version":
                data["firefox"] = event.target.value;
                break;
            case "time":
                data["chrome"] = event.target.value;
                break;
            case "use":
                data["teammate"] = event.target.value;
                break;
        }
        console.log(data)
        this.setState({
            returnvalue:data
        })
    }
    setBrowsConfig (){
        const me=this;
        $.ajax({
            url:"/setDevConfig",
            type: 'post',
            dataType: 'json',
            data:this.state.returnvalue,
            success: data => {
                me.props.handleVal();//调用父组件的刷新方法
            },
            error: err => {
                console.log(err);
            }
        })
    }
    handleCancel () {
        this.setState({ visible: false });
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
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.IE} id="IE" onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>火狐(版本)</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.firefox} id="firefox" onChange={this.handleData.bind(this)}/>
                        </Col>
                    </InputGroup>
                    <InputGroup style={{margin:"0 0 10px 0"}}>
                        <Col span={5}>
                            <label>谷歌(版本)</label>
                        </Col>
                        <Col span={7}>
                            <Input style={{width:"350px"}} type="text" value={this.state.returnvalue.chrome} id="chrome" onChange={this.handleData.bind(this)}/>
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

export default BrowserConfig
