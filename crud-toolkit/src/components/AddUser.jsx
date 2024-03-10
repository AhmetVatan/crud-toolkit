import { useState } from "react";
import TextField from "../UI/TextField";
import Button from "../UI/Button";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../store/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuid(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name: "
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <TextField
        label="Email: "
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "text", placeholder: "John@gmail.com" }}
      />

      <Button onCLick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
