import React, { useState } from "react";

const InputFileDaftarStr = ({ value, error, errorTouched }) => {
   const [selectedFile, setSelectedFile] = useState(value);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
   };

   return (
      <>
         <div
            style={{
               display: "flex",
               marginTop: "50px",
               position: "relative",
            }}
         >
            <input
               id="file-input-str"
               type="file"
               onChange={handleFileChange}
               style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  cursor: "pointer",
               }}
            />
              <span
               style={{
                  float: "left",
                  border: "solid",
                  borderWidth:"1px",
                  width: "100%",
                  borderRadius: "8px 0 0 8px",
                  height: "40px",
                  textAlign: "justify",
                  paddingTop: "8px",
                  paddingLeft: "5px",
                  borderColor: "#D2D2D2",
                  color:"gray"
               }}
            >
               {selectedFile ? selectedFile.name : "Pilih File"}
            </span>
            <label
               htmlFor="file-input-str"
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

         {errorTouched && error ? (
            <p
               className="text-[14px] text-left text-red-600 absolute"
            >
               {error}
            </p>
         ) : null}
      </>
   );
};

export default InputFileDaftarStr;
