import { useEffect, useState } from "react";

const initialFormValues = { title: "", comleted: ""};

function Header({ toDo, addToDo }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value, comleted: ""});
  };

  const OnInput = (e) => {
    if (e.keyCode === 13) {
      setForm({...form, [e.target.name]: e.target.value, comleted: ""});
    }
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [toDo]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }

    addToDo([...toDo, form]);
  };

  return (
    <header className="header">
      <h1>TodoApp</h1>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          className="new-todo"
          placeholder="What needs to be done?"
          value={form.title}
          onChange={onChangeInput}
          onKeyUp={OnInput}
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
