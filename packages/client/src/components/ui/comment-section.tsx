import { Button } from "./button";
import { Input } from "./input";
import { FaPaperPlane, FaTrash } from "react-icons/fa6";

function CommentSection({ id }: { id: string | undefined }) {
  const comments = [
    "hello",
    "world",
    "hello",
    "world",
    "hello",
    "hello",
    "world",
    "hello",
    "world",
    "hello"
  ];

  return (
    <>
      <div className="m-2">
        <div className="ml-2">Comments</div>
        <div className="flex items-center justify-between">
          <Input type="text" placeholder="Write a comment..." className="m-2" />
          <Button variant="default" size="sm">
            <FaPaperPlane />
          </Button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {comments.map((comment, idx) => (
            <div key={idx}>
              <div className="my-2 border-t border-gray-200"></div>
              User said:
              <div className="m-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="justify-start">{comment}</div>
                  </div>
                  <div>
                    <FaTrash />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommentSection;
