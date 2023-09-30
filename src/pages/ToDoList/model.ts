export interface toDoListMockSubDataType {
  id: number;
  name: string;
  description: string;
  isFinished: boolean;
}

export interface toDoListMockDataType {
  id: number;
  listName: string;
  subItems: toDoListMockSubDataType[];
}

export default function ToDoListModel() {
  const toDoListMockData: toDoListMockDataType[] = [
    {
      id: 0,
      listName: "List one",
      subItems: [
        {
          id: 0,
          name: "item A",
          description: "This is item A description",
          isFinished: true,
        },
        {
          id: 1,
          name: "item B",
          description: "This is item B description",
          isFinished: false,
        },
        {
          id: 2,
          name: "item C",
          description: "This is item C description",
          isFinished: false,
        },
      ],
    },
    {
      id: 1,
      listName: "List two",
      subItems: [
        {
          id: 0,
          name: "item A",
          description: "This is item A description",
          isFinished: false,
        },
        {
          id: 1,
          name: "item B",
          description: "This is item B description",
          isFinished: false,
        },
        {
          id: 2,
          name: "item C",
          description: "This is item C description",
          isFinished: false,
        },
      ],
    },
  ];

  return { toDoListMockData };
}
