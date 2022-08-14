import React from "react";
import SingleComment from "./SingleComment";

interface Props { }

const CommentSection = (props: Props) => {

  return (
    <div className="w-full flex flex-col gap-4 bg-base-100/50 p-4 shadow-md rounded-md">

      <div className="flex justify-between items-center w-full p-8">
        <h5 className="text-2xl font-bold">
          {__('user.comment_section')}
        </h5>
      </div>

      <SingleComment />
    </div>
  )
}

export default CommentSection;
