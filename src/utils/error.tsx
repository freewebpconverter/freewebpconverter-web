import { message } from "antd";

export const warningHandler = (content: string) => {
  message.warning(content);
};

export const errorHandler = (content: string) => {
  message.error(content);
};

export const successHandler = (content: string) => {
  message.success(content);
};
