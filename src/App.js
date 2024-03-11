import { Input, Button, Checkbox ,ButtonRadio,ButtonUpload} from "./components/atoms";
function App() {
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
        <ButtonUpload
        id="button-upload"
        name="button-upload"
        onChange={(e) => console.log(e.target.value)}
        styleType="button-upload"
        label="upload file"
        />
      </div>
    
    </div>
  );
}
export default App;
