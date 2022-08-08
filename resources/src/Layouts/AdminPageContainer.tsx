import React from "react"
import Layout from "./Layout"
import TabItem from "@/Components/Nav/TabItem"
import { ComponentWrapper } from "@/@types/global"

interface Props extends ComponentWrapper {
  active?: boolean;
}

const AdminPageContainer = ({
  component, title, className = '' }: Props
) => {

  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <div className={`tabs tabs-boxed mb-8 ${className}`}>

          <TabItem
            path={route('admin.index')}
            label="Dashboard"
          />
          <TabItem
            path={route('admin.users.index')}
            label="Manage Users"
          />
          <TabItem
            path={route('admin.categories.index')}
            label="Manage Categories"
          />
        </div>
        {page}
      </Layout>
    )
  }
  return component;
}

export default AdminPageContainer;

