import {FormContainer, StyledInput, StyledButton} from './styles'

const Form = ({ handleKeyDown, onSubmit, handleChange, value }) => (
    <FormContainer>
      <form autoComplete="off">
        <StyledInput type="text" id="name" value={value} placeholder="Введіть ім'я" onChange={handleChange} onKeyDown={handleKeyDown} />
      </form>
      <StyledButton onClick={onSubmit}><img src="/send_icon.png" alt="button"/></StyledButton>
    </FormContainer>
  );
  
  export default Form;