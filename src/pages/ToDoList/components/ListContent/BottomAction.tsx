import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { toDoListMockDataType } from "../../model";

const { TextArea } = Input;

interface FormValuesType {
  itemName: string;
  itemDescription?: string;  //  optional
}

interface BottomActionType {
  content: toDoListMockDataType;
  onNewItem: (newItem: FormValuesType) => void;
}

const BottomAction: React.FC<BottomActionType> = ({ content, onNewItem }) => {
  const [isAdding, setIsAdding] = useState(false);

  const formFinishHandler = (values: FormValuesType) => {
    onNewItem(values); 
    setIsAdding(false);
  };

  const toggleAddItem = () => {
    setIsAdding(!isAdding);
  };

  return (
    <div>
      <Button 
        style={{ width: "100%" }} 
        type="primary" 
        onClick={toggleAddItem}
      >
        {isAdding ? "Cancel" : "Add New Item"}
      </Button>

      {isAdding && (
        <Form 
          layout="vertical" 
          onFinish={formFinishHandler}
          initialValues={{ itemName: "", itemDescription: "" }}
        >
          <Form.Item
            label="Item Name"
            name="itemName"
            rules={[{ required: true, message: "Please input item name!" }]}
          >
            <Input placeholder="Item Name" />
          </Form.Item>

          <Form.Item label="Item Description" name="itemDescription">
            <TextArea placeholder="Item Description" />
          </Form.Item>

          <Form.Item>
            <Button 
              htmlType="submit" 
              style={{ width: "100%" }} 
              type="primary"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default BottomAction;
