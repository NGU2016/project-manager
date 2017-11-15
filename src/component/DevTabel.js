import { Table, Icon } from 'antd';
import React from "react";
import ReactDOM from "react-dom";

class DevTabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
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
            <Table columns={columns} dataSource={data} />
        )
    }
}

export default DevTabel;