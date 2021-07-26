import dayjs from "dayjs";
import { v4 as  uuidV4 } from "uuid";

import { document } from "../utils/dynamodbClient";

interface IRequestBody {
  title: string;
  deadline: string;
}

interface IToDo {
  id: string;
  user_id: string;
  title: string;
  done: boolean;
  deadline: string;
}

export const handle = async (event) => {
  const { id: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body) as IRequestBody;

  const data: IToDo = {
    id: uuidV4(),
    user_id,
    title,
    done: false,
    deadline: dayjs(deadline).format("DD/MM/YYYY"),
  }

  await document.put({
    TableName: "users_todos",
    Item: data
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "To-do created!",
      todoContent: data
    }),
    headers: {
      "Content-type": "application/json"
    },
  };
}