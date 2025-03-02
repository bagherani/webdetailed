"use client";

import { useEffect } from "react";
// @ts-expect-error - CommentBox is not a module
import commentBox from "commentbox.io";

export const CommentBox = () => {
  const projectId = process.env.NEXT_PUBLIC_COMMENTBOX_PROJECT_ID;

  useEffect(() => {
    const removeCommentBox = commentBox(projectId);

    return () => {
      removeCommentBox();
    };
  });
  return <div id="commentbox"></div>;
};
