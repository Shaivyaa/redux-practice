import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNode } from "./store/reducer";
export const App = () => {
  const val = useSelector((state) => state);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  console.log(val, "value");
  return (
    <>
      <div
        style={{
        //   border: "2px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "450px",
          margin: "0 auto",
        }}
      >
        <div>
          {val.map((value, idx) => (
            <>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
              <li  key={idx}>{value}</li>{" "}
              <button
             
              style={{backgroundColor: "red", color: "white", border: "none", cursor: "pointer", padding: "5px"}}
                onClick={() => {
                  dispatch(deleteNode());
                  setText("");
                }}
              >
                Delete Note
              </button>{" "}
              </div>
            </>
          ))}
          <input
            style={{ height: "20px", marginTop: "15px" }}
            type="text"
            placeholder="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button
          style={{backgroundColor: "green", color: "white", border: "none", cursor: "pointer", padding: "5px", marginLeft: "7px"}}
            onClick={() => {
              dispatch(addNote(text));
              setText("");
            }}
          >
            Add Note
          </button>
          {/* <button
            onClick={() => {
              dispatch(deleteNode());
              setText("");
            }}
          >
            Delete Note
          </button> */}
        </div>
      </div>
    </>
  );
};
