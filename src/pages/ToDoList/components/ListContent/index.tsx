import Delete from "@/assets/delete.png";
import { Card, Input } from "antd";
import React from "react";
import { toDoListMockDataType, toDoListMockSubDataType } from "../../model";
import BottomAction from "./BottomAction";
import SubItemRender from "./SubItemRender";
import styles from "./index.less";

const Index: React.FC<{
  content: toDoListMockDataType;
}> = (props) => {
  const { content } = props;
  const { subItems, listName } = content;

  return (
    <Card
      className={styles.container}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div className={styles.subTitleDisplay}>
        <Input defaultValue={listName} />
        <img alt="deleteIcon" width={24} height={24} src={Delete} />
      </div>

      <div className={styles.listDisplay}>
        {subItems.map((item: toDoListMockSubDataType, index: number) => (
          <SubItemRender key={item.id} item={item} index={index} />
        ))}
      </div>

      <BottomAction content={content} />
    </Card>
  );
};

export default Index;
