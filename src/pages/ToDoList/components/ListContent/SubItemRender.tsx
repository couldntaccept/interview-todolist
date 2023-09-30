import Delete from "@/assets/delete.png";
import Edit from "@/assets/edit.png";
import { Checkbox } from "antd";
import React from "react";
import { toDoListMockSubDataType } from "../../model";
import styles from "./style.less";

const SubItemRender: React.FC<{
  item: toDoListMockSubDataType;
  index: number;
}> = (props) => {
  const { item, index } = props;

  const getSubItemBg = index % 2 === 0 ? "#F2F2F2" : "#D6D6D6";

  return (
    <div
      className={styles.subItemRenderContainer}
      style={{
        background: getSubItemBg,
      }}
    >
      <div className={styles.nameContainer}>
        <div className={styles.content}>
          <Checkbox defaultChecked={item.isFinished} />
          <div>{item.name}</div>
        </div>

        <div className={styles.content}>
          <img alt="editIcon" width={24} height={24} src={Edit} />
          <img alt="deleteIcon" width={24} height={24} src={Delete} />
        </div>
      </div>

      <div>{item.description}</div>
    </div>
  );
};

export default SubItemRender;
