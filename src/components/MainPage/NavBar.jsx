import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({
	handleClick,
	Reset,
	handleFilter,
	disableReset,
}) {
	const [input, setInput] = useState("");
	const [selected, setSelected] = useState("select an option");
	const [disableSearch, setDisableSearch] = useState(true);

	const handleSearch = (event) => {
		const value = event.target.value;
		const lowerCaseValue = value.toLowerCase();
		lowerCaseValue ? setDisableSearch(false) : setDisableSearch(true);
		setInput(lowerCaseValue);
	};

	const handleSubmit = () => {
		handleClick(input);
	};

	const handleChange = (event) => {
		const type = event.target.value;
		setSelected(type);
		handleFilter(type);
	};

	const handleReset = () => {
		Reset();
		setInput("");
		setSelected("select an option");
	};

	return (
		<nav className="mainnav">
			<Link to="/">
				<p>PokéDB</p>
			</Link>
			<div className="searchfield">
				<input
					required
					value={input}
					className="search"
					type="search"
					onChange={handleSearch}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							handleSubmit();
						}
					}}
				/>
				<button
					disabled={disableSearch}
					className="search"
					type="button"
					onClick={handleSubmit}
				>
					Search
				</button>
				<span
					style={{ borderLeft: "3px solid rgba(0,0,0,0.5)", height: "20px" }}
				></span>
				<button disabled={disableReset} className="reset" onClick={handleReset}>
					Reset
				</button>
				<span
					style={{ borderRight: "3px solid rgba(0,0,0,0.5)", height: "20px" }}
				></span>
				<label htmlFor="filter">Filter by Type:</label>
				<select
					onChange={handleChange}
					name="filter"
					id="type-filter"
					value={selected}
				>
					<option disabled value={null}>
						select an option
					</option>
					<option value="rock">Rock</option>
					<option value="grass">Grass</option>
					<option value="normal">Normal</option>
					<option value="fire">Fire</option>
					<option value="water">Water</option>
					<option value="electric">Electric</option>
					<option value="ice">Ice</option>
					<option value="fighting">Fighting</option>
					<option value="poison">Poison</option>
					<option value="flying">Flying</option>
					<option value="psychic">Psychic</option>
					<option value="bug">Bug</option>
					<option value="ghost">Ghost</option>
					<option value="dragon">Dragon</option>
					<option value="dark">Dark</option>
					<option value="steel">Steel</option>
					<option value="fairy">Fairy</option>
				</select>
			</div>
			<Link to="/favorites">
				<button className="fav-btn">Favorites</button>
			</Link>
		</nav>
	);
}
