import { PageContainer } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import React, { useCallback, useState } from "react";
import { useModel } from "umi";
import CreateNewItemHeader from "./components/Header";
import ListContent from "./components/ListContent";
import { spaceName } from "./config";
import { toDoListMockDataType } from "./model";

const Index: React.FC = () => {
  const { toDoListMockData } = useModel(spaceName);
  const [toDoList, setToDoList] = useState(toDoListMockData);

  const [toDoLists, setToDoLists] = useState<toDoListMockDataType[]>(toDoListMockData);

  const handleCreateNewList = (listName: string) => {
    const newToDoList = {
      id: toDoLists.length,
      listName,
      subItems: []
    };
    setToDoLists([...toDoLists, newToDoList]);
  };

  const handleUpdateList = useCallback(
    (index: number, updatedList: toDoListMockDataType) => {
      const updatedToDoLists = [...toDoLists];
      updatedToDoLists[index] = updatedList;
      setToDoLists(updatedToDoLists);
    },
    [toDoLists]
  );

  const handleDeleteList = useCallback(
    (index: number) => {
      const updatedToDoLists = [...toDoLists];
      updatedToDoLists.splice(index, 1);
      setToDoLists(updatedToDoLists);
    },
    [toDoLists]
  );

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <CreateNewItemHeader onCreateNewList={handleCreateNewList} />

      <Row gutter={[16, 16]}>
        {toDoLists.map((item, index) => (
          <Col key={item.id} 
               className="gutter-row"
               xs={24}
               sm={24}
               md={12}
               lg={8}
               xl={8}
          >
            <ListContent 
              content={item} 
              onUpdate={(updatedList) => handleUpdateList(index, updatedList)} 
              onDelete={() => handleDeleteList(index)} 
            />
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};

export default Index;
