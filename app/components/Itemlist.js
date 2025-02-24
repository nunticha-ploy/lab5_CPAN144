//create add item page
'use client';
import { useState } from "react";
import styles from "../page.module.css";

function Itemlist() {
    // Define state for input, message, and error
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    // Function triggered when the user submits the form
    const handleSubmit = (event) => {
        //Prevents the default browser action of refreshing the page when submitting the form
        event.preventDefault();

        //Check user input
        if (input.trim() === '') {
            setError('Item cannot be empty!');
        } else {
            setItems(prev => [...prev, input]);
            setError('')
            setInput('');
        }
    };

    // Function triggered when the user types in the input field
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    //deleyes an item when clicked delete button
    const handleDelete = (index) => {
        //makes new list without the item at the clicked position and make a new list without the item a the clicked position
        const updatedItems = items.filter((_, i) => i !== index);
        //update list 
        setItems(updatedItems);

    };

    return (
        <div className={styles.background}>
            <div className={styles.addItemPage}>

                {/* Heading */}
                <h1>Item List</h1>

                <div className={styles.card2}>

                    {/* Form to add a new item  */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" className={styles.inputField} value={input} onChange={handleInputChange} placeholder="Enter item name" />
                        <button type="submit" className={styles.addButton} >Add Item</button>
                    </form>

                    {/* Display error message */}
                    {error && <div>{error}</div>}

                    {/* Create new array using map  */}
                    {/* Display and call the function"  */}
                    {items.length > 0 &&
                        items.map((item, index) => (
                            <div key={index} className={styles.listItem}  >
                                <span>{item}</span>
                                <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

// Export this component 
export default Itemlist;