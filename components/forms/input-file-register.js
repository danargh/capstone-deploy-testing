import { useState } from "react";

const InputFileRegister = ({ children, selectedFile }) => {
   return (
      <>
         <div
            style={{
               display: "flex",
               marginTop: "50px",
               position: "relative",
            }}
         >
            {children}
            <span
               style={{
                  float: "left",
                  border: "solid",
                  borderWidth: "1px",
                  width: "100%",
                  borderRadius: "8px 0 0 8px",
                  height: "40px",
                  textAlign: "justify",
                  paddingTop: "8px",
                  paddingLeft: "5px",
                  borderColor: "#D2D2D2",
                  color: "gray",
               }}
            >
               {selectedFile ? selectedFile.name : "Pilih File"}
            </span>
            <label
               htmlFor="file-input-cv"
               style={{
                  backgroundColor: "#8EBF59",
                  color: "white",
                  padding: "8px 35px",
                  cursor: "pointer",
                  borderRadius: "0 8px 8px 0",
                  float: "right",
               }}
            >
               Pilih
            </label>
         </div>
      </>
   );
};

export default InputFileRegister;
