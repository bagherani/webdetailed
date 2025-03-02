"use client";

import { useEffect } from "react";
// @ts-expect-error - CommentBox is not a module
import commentBox from "commentbox.io";

export const CommentBox = () => {
  const projectId = process.env.NEXT_PUBLIC_COMMENT_BOX_PROJ_ID;

  useEffect(() => {
    const removeCommentBox = commentBox(projectId, {
      backgroundColor: "#0a0a0a",
      textColor: "#ededed",
    });

    return () => {
      removeCommentBox();
    };
  });
  return <div className="commentbox"></div>;
};
