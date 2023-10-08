import Delete from "@/assets/delete.png";
import Edit from "@/assets/edit.png";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { toDoListMockSubDataType } from "../../model";
import styles from "./style.less";

const SubItemRender: React.FC<{
  item: toDoListMockSubDataType;
  index: number;
  onItemChange: (updatedItem: toDoListMockSubDataType) => void;
}> = (props) => {
  const { item, index, onItemChange } = props;
  const [isDone, setIsDone] = useState(item.isFinished);

  const handleToggleDone = () => {
    const updatedIsDone = !isDone;
    setIsDone(updatedIsDone);
    onItemChange({
      ...item,
      isFinished: updatedIsDone,
    });
  };

  const getSubItemBg = index % 2 === 0 ? "#F2F2F2" : "#D6D6D6";

  return (
    <div
      className={styles.subItemRenderContainer}
      style={{ background: getSubItemBg }}
    >
      <div className={styles.nameContainer}>
        <div className={styles.content}>
          <Checkbox checked={isDone} onChange={handleToggleDone} />
          <div className={isDone ? styles.crossedOut : ""}>{item.name}</div>
        </div>

        <div className={styles.content}>
          <img alt="editIcon" width={24} height={24} src={Edit} />
          <img alt="deleteIcon" width={24} height={24} src={Delete} />
        </div>
      </div>

      {item.description && <div>{item.description}</div>}
    </div>
  );
};

export default SubItemRender;
