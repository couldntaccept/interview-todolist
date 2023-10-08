import { Button, Card, Input } from "antd";
import React, { useState } from "react";
import styles from "./index.less";

interface CreateNewItemHeaderType {
  onCreateNewList: (listName: string) => void;
}

const CreateNewItemHeader: React.FC<CreateNewItemHeaderType> = ({ onCreateNewList }) => {
  const [newListName, setNewListName] = useState('');

  const handleCreate = () => {
    onCreateNewList(newListName);
    setNewListName('');
  };

  return (
    <Card className={styles.createNewListContainer}>
      <div className={styles.title}>New to-do List</div>
      <div className={styles.actionContainer}>
        <Input 
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)} 
          placeholder="Please input new to-do list name" 
        />
        <Button 
          type="primary" 
          onClick={handleCreate} 
          disabled={!newListName.trim()}
        >
          CREATE
        </Button>
      </div>
    </Card>
  );
};

export default CreateNewItemHeader;
