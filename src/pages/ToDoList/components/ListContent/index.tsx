import Delete from "@/assets/delete.png";
import { Card, Input, Modal } from "antd";
import React, { useState } from "react";
import { toDoListMockDataType, toDoListMockSubDataType } from "../../model";
import BottomAction from "./BottomAction";
import SubItemRender from "./SubItemRender";
import styles from "./index.less";

const { confirm } = Modal;

interface ListContentProps {
  content: toDoListMockDataType;
  onDelete: () => void;  // To delete this list
  onUpdate: (updatedList: toDoListMockDataType) => void;  // To update this list
}

const Index: React.FC<ListContentProps> = ({ content, onDelete, onUpdate }) => {
  const { subItems, listName } = content;

  const [editableName, setEditableName] = useState(listName);

  const handleUpdateListName = () => {
    if (editableName !== listName) {
      onUpdate({ ...content, listName: editableName });
    }
  };

  const handleNewItem = (newItem: { itemName: string; itemDescription?: string }) => {
    const updatedList = {
      ...content,
      subItems: [
        ...subItems,
        {
          id: subItems.length + 1,  // Assign new ID
          name: newItem.itemName,
          description: newItem.itemDescription || "",
          isFinished: false,
        },
      ],
    };
    onUpdate(updatedList);
  };

  const handleDelete = () => {
    confirm({
      title: 'Are you sure you want to delete this list?',
      onOk: onDelete,
    });
  };

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
        <Input
          defaultValue={listName}
          value={editableName}
          onChange={(e) => setEditableName(e.target.value)}
          onBlur={handleUpdateListName}
          onPressEnter={handleUpdateListName}
        />
        <img 
          alt="deleteIcon" 
          width={24} 
          height={24} 
          src={Delete} 
          onClick={handleDelete}
        />
      </div>

      <div className={styles.listDisplay}>
        {subItems.map((item: toDoListMockSubDataType, index: number) => (
          <SubItemRender key={item.id} item={item} index={index} onItemChange={function (updatedItem: toDoListMockSubDataType): void {} } />
        ))}
      </div>

      <BottomAction onNewItem={handleNewItem} content={content} />
    </Card>
  );
};

export default Index;
