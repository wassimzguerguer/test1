import { Input, Button, Checkbox ,ButtonRadio,ButtonUploader} from "./components/atoms";
import React, { useState } from 'react';
function App() {
  const [fileName, setFileName] = useState('');

  const handleFile = (file) => {
    
    setFileName(file.name);
  };
  return (
    <div>
      <div>
        <Input
          type="input"
          id="input"
          name="input"
          onChange={(e) => console.log(e.target.value)}
          placeholder="input"
          required
          styleType="input-primaire"
        />
      </div>
      <div>
        <Button
          onClick={() => console.log("click")}
          label="save"
          styleType="a-button"
        />
      </div>
      <div>
        <Checkbox
          id="checkbox"
          name="checkbox"
          onChange={(e) => console.log(e.target.checked)}
          styleType="checkbox"
          label="choice"
        />
      </div>
      <div>
       <ButtonRadio
       id="button-radio"
       name="button-radio"
       onChange={(e) => console.log(e.target.checked)}
       styleType="button-radio"
       label="choice"
       
       />
      </div>
      
      <div>
      {fileName && <p>Nom du fichier : {fileName}</p>}
        <ButtonUploader
        id="button-upload"
        name="button-upload"
        handleFile={handleFile}
        
        />
      </div>
    
    </div>
  );
}
export default App;
