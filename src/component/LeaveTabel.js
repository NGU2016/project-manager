import { Table, Button,Icon } from 'antd';
import React from "react";
import  LeaveConfig from "./config/LeaveConfig.js";
import $ from "jquery"

class LeaveTabel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount () {
        this.getAllLeaveInfo();
    }
    modifyConfig (value,isEdit){
        const values=JSON.parse(JSON.stringify(value))
        this.refs.leaveModify.showModal(values,isEdit)
    }
    getAllLeaveInfo(){
        const me=this;
        $.ajax({
            url:"/getAllLeaveInfo",
            type: 'get',
            dataType: 'json',
            success: data => {
                me.setState({
                    data: data
                });
            },
            error: err => {
                console.log(err);
            }
        })
    }

    deleteRaw(value){
        const me=this;
        $.ajax({
            url:"/deleteRawLeave",
            type: 'post',
            dataType: 'json',
            data:value,
            success: data => {
                me.getAllLeaveInfo();
            },
            error: err => {
                console.log(err);
            }
        })
    }
    render(){
        const columns = [{
            title: '请假开始时间',
            dataIndex: 'begintime',
            key: 'begintime',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '请假结束时间',
            dataIndex: 'endtime',
            key: 'endtime',
        }, {
            title: '紧急联系人',
            dataIndex: 'emergency',
            key: 'emergency',
        }, {
            title: '紧急联系人号码',
            dataIndex: 'emergencyNum',
            key: 'emergencyNum',
        },{
            title:"组员信息",
            dataIndex:"teammate",
            key:"teammate"
        }, {
            title: '编辑',
            key: 'action',
            width:"178px",
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => this.modifyConfig(record,true)}>编辑</Button>
                  <span className="ant-divider"/>
                    <Button type="danger" onClick={() => this.deleteRaw(record)}>删除</Button>
                  <span className="ant-divider"/>
                </span>
            )
        }];
        return(
            <div>
                <div style={{ padding: '10px 10px 10px 0px' }}>
                    <LeaveConfig handleVal={this.getAllLeaveInfo.bind(this)} ref="leaveModify"/>
                </div>
                <Table columns={columns} dataSource={this.state.data} bordered={true}/>
            </div>
        )
    }
}

export default LeaveTabel;