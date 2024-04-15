import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import "@/css/editProfile.css";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function EditProfile() {
  // Manage state for selected size and personal note
  const [selectedSize, setSelectedSize] = useState("");
  const [personalNote, setPersonalNote] = useState("");

  // Modify the handleSave function
  function handleSave(size: string, note: string) {
    if (!size) {
      console.log("Please choose a size");
      return;
    }
    if (!note) {
      console.log("Please type a message");
      return;
    }
    console.log("Save clicked");
    // Print the chosen size and the message
    console.log("Size: " + size);
    console.log("Message: " + note);
  }

  return (
    <>
      <div className="edit-profile-container">
        <div className="profile-editor">
          T-Shirt Size:
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
              <SelectItem value="XXL">XXL</SelectItem>
            </SelectContent>
          </Select>
          <br />
          Personal Note:
          <br />
          <Textarea
            placeholder="Type your message here."
            value={personalNote}
            onChange={(e) => setPersonalNote(e.target.value)}
          />
          <br />
          {/* Pass values to handleSave on button click */}
          <Button onClick={() => handleSave(selectedSize, personalNote)}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
