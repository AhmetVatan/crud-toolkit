import TextField from "../UI/TextField";
import Button from "../UI/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/"); // butona tıkladıktan sonra anasayfaya dönsün.
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

      <Button onCLick={handleEditUser}>Submit</Button>
    </div>
  );
};

export default EditUser;
