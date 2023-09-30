import { PageContainer } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { useModel } from "umi";
import CreateNewItemHeader from "./components/Header";
import ListContent from "./components/ListContent";
import { spaceName } from "./config";
import { toDoListMockDataType } from "./model";

const Index: React.FC = (props) => {
  const { toDoListMockData } = useModel(spaceName);
  const [toDoList, setToDoList] = useState(toDoListMockData);

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <CreateNewItemHeader />

      <Row gutter={[16, 16]}>
        {toDoList.map((item: toDoListMockDataType) => (
          <Col
            key={item.listName}
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
          >
            <ListContent content={item} />
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};

export default Index;
