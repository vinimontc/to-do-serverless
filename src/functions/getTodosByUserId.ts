import { document } from "../utils/dynamodbClient";

export const handle = async (event) => {
  const { id } = event.pathParameters;

  const todos = await document.query({
    TableName: "users_todos",
    IndexName: "UserIdIndex",
    KeyConditionExpression: "user_id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      todoList: todos.Items
    })
  }
}