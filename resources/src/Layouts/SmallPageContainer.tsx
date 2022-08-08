import React from "react"
import Layout from "./Layout"
import { ComponentWrapper } from "@/@types/global"

const SmallPageContainer = ({
  component, title, className = '' }: ComponentWrapper
) => {

  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <div className={`w-[45ch] ${className}`}>
          {page}
        </div>
      </Layout>
    )
  }
  return component;
}

export default SmallPageContainer;
