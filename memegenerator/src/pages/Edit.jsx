import { Button } from "react-bootstrap";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();

  const addText = () => {
    setCount(count + 1);
  };

  const memeref = createRef();

  const [count, setCount] = useState(0);
  return (
    <div>
      <div  ref={memeref} style={{ width: "500px" }}    >
        <img src={params.get("url")} width="350px" />

        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeref)}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
