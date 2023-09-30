import { Button, Form, Input } from "antd";
import React from "react";
import { toDoListMockDataType } from "../../model";

const { TextArea } = Input;

interface FormValuesType {
  itemName: string;
  itemDescription: string;
}

interface BottomActionType {
  content: toDoListMockDataType;
}

const BottomAction: React.FC<BottomActionType> = (props) => {
  const formFinishHandler = (values: FormValuesType) => {
    console.log(values);
  };

  return (
    <div>
      <Button style={{ width: "100%" }} type="primary">
        Add New Item
      </Button>

      <Form layout="vertical" onFinish={formFinishHandler}>
        <Form.Item
          label="Item Name"
          name="itemName"
          rules={[{ required: true }]}
        >
          <Input placeholder="Item Name" />
        </Form.Item>

        <Form.Item
          label="Item Description"
          name="itemDescription"
          rules={[{ required: true }]}
        >
          <TextArea placeholder="Item Description" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BottomAction;
