import { Button } from "./button";
import { Input } from "./input";
import { FaPaperPlane } from "react-icons/fa6";

function CommentSection({ comments }: { comments: any }) {
  return (
    <div className="m-12">
      <div className="ml-2">Comments</div>
      <div className="flex items-center justify-between">
        <Input type="text" placeholder="Write a comment..." className="m-2" />
        <Button variant="default" size="sm">
          <FaPaperPlane />
        </Button>
      </div>
      <div className="mt-4 max-h-80 overflow-y-auto">
        {comments.map((comment: any, idx: any) => (
          <div key={idx} className="my-2 rounded-lg bg-cyan-100 p-4">
            <div className="mb-2 font-semibold text-gray-800">
              {comment.sender} said:
            </div>
            <div className="text-gray-800">{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
