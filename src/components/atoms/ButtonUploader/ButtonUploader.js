import { useRef } from 'react';         
import {Input} from "../input/input.js";

export const ButtonUploader = ({handleFile}) => { 
  const hiddenFileInput = useRef(null); 

  const handleClick = event => {
    hiddenFileInput.current.click();   
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);                   
  };

  return (
    <>
     
      <Input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        placeholder="Upload file"
        //style={{display:'none'}}
        //styleType="button-upload"
      />
    </>
  );
};