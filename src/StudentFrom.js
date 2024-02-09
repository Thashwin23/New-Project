import { useState } from "react";
import { Button, message } from "antd";
import axios from "axios";

function StudentFrom() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const nameRegex = /^[a-zA-Z][a-zA-Z\s-]*$/;
  const phoneRegex = /^\+91-\d{10}$/;

  const ageRegex = /^\d+$/;

  const [isValid, setIsValid] = useState({
    name: true,
    age: true,
    phone: true,
  });

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "FORM IS SUBMITTED",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsValid({
      ...formData,
      [name]: validateInput(name, value),
    });
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        console.log(nameRegex.test(value));
        return nameRegex.test(value);

      case "age":
        return ageRegex.test(value);
      case "phone":
        return phoneRegex.test(value);

      default:
        return true;
    }
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    console.log("works");
    setLoading(true);
    e.preventDefault();

    console.log(formData);
    axios
      .post("https://google.com", formData)
      .then((res) => {
        // if(res.status === 200){
        message.open({
          type: "success",
          content: "This is an success message",
        });
        setLoading(false);
        setFormData({
          name: "",
          phone: "",
          age: "",
          image: null,
        });
      })
      .catch((err) => {
        message.error("This is an error message");
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        console.log(err);
      });
  };

  return (
    <div className="cont">
{/* {contextHolder}       */}
      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          style={{ borderColor: isValid.name ? "green" : "red" }}
        ></input>
        {!isValid.name && (
          <p style={{ color: "red" }}>Please enter a valid name.</p>
        )}

        <label for="age">Age:</label>
        <input
          type="number"
          autoComplete="off"
          id="age"
          name="age"
          value={formData.age}
          onChange={(e) => handleChange(e)}
          style={{ borderColor: isValid.age ? "green" : "red" }}
        ></input>
        {!isValid.age && (
          <p style={{ color: "red" }}>Please enter a valid age.</p>
        )}

        <label for="phone">Phone Number:</label>
        <input
          type="tel"
          autoComplete="off"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange(e)}
          style={{ borderColor: isValid.phone ? "green" : "red" }}
        ></input>
        {!isValid.phone && (
          <p style={{ color: "red" }}>Please enter a valid Phone number.</p>
        )}

        <label for="image">Image:</label>
        <input
          type="file"
          autoComplete="off"
          id="image"
          name="image"
          onChange={handleImageChange}
        ></input>

        <Button
          onClick={handleSubmit}
          success
          shape="round"
          type="primary"
          loading={loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default StudentFrom;
