

const SearchBox = ({searchChange}) => {
    return (
        <input
         className="pa2"
         type='search'
         placeholder='Search Robot'
         onChange={searchChange}
         />
    );
}

export default SearchBox;