import { Table, Icon } from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import  BrowserConfig from "./config/BrowserConfig.js";

class BrowserTabel extends React.Component{
    constructor(props){
        super(props)
    }
    getAllBroesInfo(){

    }
    deleteRaw(){

    }
    render(){
        const data = [{
            IE: '1',
            firefox: 'IE',
            chrome: 32,
            teammate: 'New York No. 1 Lake Park',
        }];

        const columns = [{
            title: 'IE(版本)',
            dataIndex: 'IE',
            key: 'IE',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '火狐(版本)',
            dataIndex: 'firefox',
            key: 'firefox',
        }, {
            title: '谷歌(版本)',
            dataIndex: 'chrome',
            key: 'chrome',
        }, {
            title: '组员信息',
            dataIndex: 'teammate',
            key: 'teammate',
        }, {
            title: '编辑',
            key: 'action',
            render: (text, record) => (
                <span>
                  <span className="ant-divider"/>
                  <a onClick={this.deleteRaw(record)}>删除</a>
                  <span className="ant-divider"/>
                </span>
            )
        }];
        return(
            <div>
                <div style={{ padding: '10px 10px 10px 0px' }}>
                    <BrowserConfig handleVal={this.getAllBroesInfo.bind(this)}/>
                </div>
                <Table columns={columns} dataSource={data} bordered={true}/>
            </div>
        )
    }
}

export default BrowserTabel;