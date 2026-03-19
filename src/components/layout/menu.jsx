import React from 'react';
import {  Menu } from 'antd';
import {
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  WechatWorkOutlined
} from '@ant-design/icons';

export const MenuLayout = () => { 
    return ( 
          <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                      {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Профиль',
                      },
                      {
                        key: '2',
                        icon: <ShoppingCartOutlined />,
                        label: 'Корзина',
                      },
                      {
                        key: '3',
                        icon: <SettingOutlined />,
                        label: 'Настройки',
                      },
                       {
                        key: '4',
                        icon: <WechatWorkOutlined />,
                        label: 'Новости',
                      },
                    ]}
                  />
    )
}