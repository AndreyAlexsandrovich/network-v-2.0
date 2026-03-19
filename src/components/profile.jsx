import React from 'react';
import { Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditModal } from './EditForm';

const profileStyle = {
    display: 'flex',
    flexDirection: 'column'
}
export const Profile = () => {
    return (
        <>
            <Space wrap size={16}>
                <div style={profileStyle}>
                    <Avatar shape="square" size={520} icon={<UserOutlined />} />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <p style={{ fontSize: 24, fontWeight: 600 }}>Андрей Александрович</p>
                             <EditModal />
                    </div>
                </div>
            </Space>
        </>
    )
}