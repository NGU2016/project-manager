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
                title="新建请假信息"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="请假开始时间">
                        {getFieldDecorator('begintime', {
                            rules: [{ required: true, message: '请输入开始时间' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="请假结束时间">
                        {getFieldDecorator('endtime')(<Input />)}
                    </FormItem>
                    <FormItem label="紧急联系人">
                        {getFieldDecorator('emergency')(<Input />)}
                    </FormItem>
                    <FormItem label="紧急联系人号码">
                        {getFieldDecorator('emergencyNum')(<Input />)}
                    </FormItem>
                    <FormItem label="审批人">
                        {getFieldDecorator('assessing')(<Input />)}
                    </FormItem>
                    <FormItem label="组员">
                        {getFieldDecorator('teammate')(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class LeaveConfig extends React.Component {
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

export default LeaveConfig
