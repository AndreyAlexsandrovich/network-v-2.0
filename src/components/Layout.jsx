import React from 'react';
import { ContentLayout } from "./layout/content"
import { HeaderLayout } from "./layout/header"
import { SiderLayout } from "./layout/sider"
import { Layout } from "antd"
import {useState} from 'react'

export const PageLayout = () => {
   const [collapsed, setCollapsed] = useState(false);
  return (

    <Layout>
      <SiderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed}/>
        <ContentLayout />
      </Layout>
    </Layout>
  )
}