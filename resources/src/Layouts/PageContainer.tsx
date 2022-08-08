import React from "react"
import Layout from "./Layout"
import { ComponentWrapper } from "@/@types/global"

const PageContainer = ({
  component, title, className = '' }: ComponentWrapper
) => {

  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <div className={`w-full px-20 ${className}`}>
          {page}
        </div>
      </Layout>
    )
  }
  return component;
}

export default PageContainer;

