import React, { useState } from "react";

interface SearchFormProps {
  onNewSearch: (data: IEmail) => void;
}

interface IEmail {
  email: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onNewSearch }) => {
  const [formData, setformData] = useState<IEmail>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onNewSearch(formData);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="w-100 m-auto px-3"
        placeholder="Search checkout by email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="search"
      />
    </form>
  );
};
