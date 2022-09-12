import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        introduction: "",
        isCool: false,
        isSmart: false,
        favBrand: "",
        favType: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((preFormData) => {
            return {
                ...preFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function submit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form className="form-container" onSubmit={submit}>
            <label htmlFor="firstName" className="label-firstName">
                First Name
            </label>
            <label htmlFor="lastName" className="label-lastName">
                Last Name
            </label>
            <input
                type="text"
                id="firstName"
                placeholder="e.g. Barak"
                name="firstName"
                onChange={handleChange}
            />
            <input
                type="text"
                id="lastName"
                placeholder="e.g. Obama"
                name="lastName"
                onChange={handleChange}
            />
            <label htmlFor="email" className="label-email">
                E-mail
            </label>
            <input
                type="email"
                id="email"
                placeholder="e.g. email@example.com"
                name="email"
                onChange={handleChange}
            />
            <label htmlFor="introduction" className="label-introduction">
                Introduction
            </label>
            <div className="checkboxContainer">
                <input
                    type="checkbox"
                    id="isCool"
                    name="isCool"
                    checked={formData.isCool}
                    onChange={handleChange}
                />
                <label htmlFor="isCool" className="label-isCool">
                    Are you cool?
                </label>
                <br />
                <input
                    type="checkbox"
                    id="isSmart"
                    name="isSmart"
                    checked={formData.isSmart}
                    onChange={handleChange}
                />
                <label htmlFor="isSmart">Are you smart?</label>
            </div>
            <textarea
                type="text-area"
                id="introduction"
                placeholder="Enter your introduction here"
                name="introduction"
                onChange={handleChange}
            />
            <fieldset className="favBrand">
                <legend>What is your favorite car brand?</legend>
                <input
                    type="radio"
                    id="BMW"
                    name="carBrand"
                    value="BMW"
                    checked={formData.carBrand === "BMW"}
                    onChange={handleChange}
                />
                <label htmlFor="BMW">BMW</label>
                <br />
                <input
                    type="radio"
                    id="M-Benz"
                    name="carBrand"
                    value="M-Benz"
                    checked={formData.carBrand === "M-Benz"}
                    onChange={handleChange}
                />
                <label htmlFor="M-Benz">M-Benz</label>
                <br />
                <input
                    type="radio"
                    id="Toyota"
                    name="carBrand"
                    value="Toyota"
                    checked={formData.carBrand === "Toyota"}
                    onChange={handleChange}
                />
                <label htmlFor="Toyota">Toyota</label>
            </fieldset>
            <label htmlFor="favType" className="label-favType">
                What is your favorite car type?
            </label>
            <select
                id="favType"
                name="favType"
                onChange={handleChange}
                value={formData.favType}
            >
                <option value="">-- choose --</option>
                <option value="Sedan">Sedan</option>
                <option value="Coupe">Coupe</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Convertible">Convertible</option>
                <option value="Pickup Truck">Pickup Truck</option>
            </select>
            <button className="formSubmit">Submit!</button>
        </form>
    );
}
