import React from "react";
import { Button, Modal, Form, Input, Radio } from 'antd';
import $ from "jquery";
const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="新建设备信息"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="ip地址">
                        {getFieldDecorator('IP', {
                            rules: [{ required: true, message: '请输入IP地址' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="版本信息">
                        {getFieldDecorator('version')(<Input />)}
                    </FormItem>
                    <FormItem label="编译时间">
                        {getFieldDecorator('time')(<Input />)}
                    </FormItem>
                    <FormItem label="版本用途">
                        {getFieldDecorator('use')(<Input />)}
                    </FormItem>
                    <FormItem label="管理口编号">
                        {getFieldDecorator('IPOP')(<Input />)}
                    </FormItem>
                    <FormItem label="占用时间">
                        {getFieldDecorator('usetime')(<Input />)}
                    </FormItem>
                    <FormItem label="组员信息">
                        {getFieldDecorator('teammate')(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class Devconfig extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
        };
    }
    showModal () {
        this.setState({ visible: true });
    }
    handleCancel () {
        this.setState({ visible: false });
    }
    setDevConfig (values){
        const me=this;
        $.ajax({
            url:"/setDevConfig",
            type: 'post',
            dataType: 'json',
            data:values,
            success: data => {
                me.props.handleVal();//调用父组件的刷新方法
            },
            error: err => {
                console.log(err);
            }
        })
    }
    handleCreate () {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }else{
                this.setDevConfig(values);
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef (form) {
        this.form = form;
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>新建</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef.bind(this)}
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    onCreate={this.handleCreate.bind(this)}
                />
            </div>
        );
    }
}

export default Devconfig
