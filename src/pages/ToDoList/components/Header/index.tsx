import { Button, Card, Input } from "antd";
import React from "react";
import styles from "./index.less";

interface CreateNewItemHeaderType {}
const CreateNewItemHeader: React.FC<CreateNewItemHeaderType> = (props) => {
  return (
    <Card className={styles.createNewListContainer}>
      <div className={styles.title}>New to-do List</div>
      <div className={styles.actionContainer}>
        <Input placeholder="Please input new to-do list name" />
        <Button type="primary">CREATE</Button>
      </div>
    </Card>
  );
};

export default CreateNewItemHeader;
