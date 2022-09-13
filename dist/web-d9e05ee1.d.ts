declare const todo = true;

declare const web_todo: typeof todo;
declare namespace web {
  export {
    web_todo as todo,
  };
}

export { todo as t, web as w };
