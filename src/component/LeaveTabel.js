import { Table, Icon } from 'antd';
import React from "react";
import ReactDOM from "react-dom";

class LeaveTabel extends React.Component{
    constructor(props){
        super(props)
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
        },  {
            title: '审批人',
            dataIndex: 'assessing',
            key: 'assessing',
        }, {
            title: '组员',
            dataIndex: 'teammate',
            key: 'teammate',
        },  {
            title: '编辑',
            key: 'action',
            render: (text, record) => (
                <span>
                  <span className="ant-divider"/>
                  <a href="#">删除</a>
                  <span className="ant-divider"/>
                </span>
            )
        }];
        return(
            <Table columns={columns}  />
        )
    }
}

export default LeaveTabel;