

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";




const $ = require('jquery');
$.DataTable = require('datatables.net');


const columns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];


class Table extends Component {

    constructor(props) {
        super(props);
        this.reloadTableData = this.reloadTableData.bind(this);


    }
    componentDidMount() {
        console.log(this.props)
        console.log(this.refs.main);


        $(this.refs.main).DataTable({
            "ajax": this.props.dataSource,
            "columns": this.props.cols,
           // "processing": true,
           // "serverSide": true
        });
    }
    componentWillUnmount(){
        $('.data-table-wrapper')
            .find('table')
            .DataTable()
            .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }
    reloadTableData() {

        console.log("q")

        console.log(this)

        const table = $(this.refs.main)
            //.find('table')
            .DataTable();
        table.clear();

        //get data from API

      //  table.rows.add();
        table.draw();
    }
    render() {
        return (
            <div>
            <table ref="main" />

            </div>);
    }


}

export default withRouter(Table);
