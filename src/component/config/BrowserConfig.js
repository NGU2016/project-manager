import React from "react";
import { Button, Modal, Form, Input, Radio } from 'antd';
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
        };
    }
    showModal () {
        this.setState({ visible: true });
    }
    handleCancel () {
        this.setState({ visible: false });
    }
    handleCreate () {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
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

export default BrowserConfig
