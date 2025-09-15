import { useState } from "react";

const WishlistForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    wish: "",
    priority: "1",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.send) {
      props.send(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        id="wish"
        value={formData.wish}
        onChange={handleChange}
      ></textarea>
      <select id="priority" value={formData.priority} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WishlistForm;
