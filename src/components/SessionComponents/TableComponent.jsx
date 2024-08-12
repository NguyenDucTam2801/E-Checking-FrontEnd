import React from 'react';
import { Table } from 'antd';
import { render } from 'react-dom';

const TableComponent = () => {

    const columns = [
        {
            title: () => <span className='max-w-32'>Index</span>,
            dataIndex: 'index',
            sorter: (a, b) => a.index - b.index,
            render: (text) => <span className='flex'>{text}</span>,
        },
        {
            title: 'Student ID',
            dataIndex: 'studentId',
            sorter: (a, b) => a.studentId - b.studentId,
            render: (text) => <span className='font-palanquin uppercase '>{text}</span>,
        },
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            sorter: (a, b) => a.studentName.length - b.studentName.length,
        },
        {
            title: 'Join At',
            dataIndex: 'joinAt',
            sorter: (a, b) => new Date(a.joinAt) - new Date(b.joinAt),
        },
        {
            title: 'File Upload',
            dataIndex: 'fileUpload',
            render: (text, record) => (
                <a href={record.fileUpload} target="_blank" rel="noopener noreferrer">View File</a>
            ),
        },
    ];

    const data = [];
    for (let i = 0; i < 30; i++) {
        data.push({
            key: i,
            index: i,
            studentId: 'S101' + i,
            studentName: 'John Doe',
            joinAt: '2022-01-' + i,
            fileUpload: 'https://example.com/file' + i,
        });
    }


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} className='w-full antd-table' />;
};

export default TableComponent;