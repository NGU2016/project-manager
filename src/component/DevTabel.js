import { Table, Icon } from 'antd';
import React from "react";
import ReactDOM from "react-dom";
import Devconfig from "./config/Devconfig.js";
import $ from "jquery";
class DevTabel extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: []
        }
    }
    componentDidMount () {
        this.getAllDevInfo();
    }
    getAllDevInfo(){
        const me=this;
        $.ajax({
            url:"/getAllDev",
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
    modifyConfig(value,isEdit){
        var values=JSON.parse(JSON.stringify(value))
        this.refs.DevModify.showModal(values,isEdit)
    }
    deleteRaw (value){
        const me=this;
        $.ajax({
            url:"/deleteRawDev",
            type: 'post',
            dataType: 'json',
            data:value,
            success: data => {
                me.getAllDevInfo()
            },
            error: err => {
                console.log(err);
            }
        })
    }
    render(){
        const columns = [{
            title: '设备地址',
            dataIndex: 'IP',
            key: 'IP',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '版本信息',
            dataIndex: 'version',
            key: 'version',
        }, {
            title: '编译时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '版本用途',
            dataIndex: 'use',
            key: 'use',
        },  {
            title: '管理口编号',
            dataIndex: 'IPOP',
            key: 'IPOP',
        }, {
            title: '占用时间',
            dataIndex: 'usetime',
            key: 'usetime',
        },{
            title: '组员信息',
            dataIndex: 'teammate',
            key: 'teammate',
        },{
            title: '编辑',
            key: 'action',
            render: (text, record) => (
               <span>
                   <a onClick={() => this.modifyConfig(record,true)}>编辑</a>
                  <span className="ant-divider"/>
                  <a href="#" onClick={() => this.deleteRaw(record)}>删除</a>
                  <span className="ant-divider"/>
                </span>
            )
        }];
        return(
            <div>
                <div style={{ padding: '10px 10px 10px 0px' }}>
                    <Devconfig handleVal={this.getAllDevInfo.bind(this)} ref="DevModify"/>
                </div>
                <Table columns={columns} dataSource={this.state.data} bordered={true}/>
            </div>
        )
    }
}

export default DevTabel;