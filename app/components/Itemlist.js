//create add item page
'use client';
import { useState } from "react";
import styles from "../page.module.css";

function Itemlist() {
    // Define state for input, message, and error
    const [input, setInput] = useState('');
    const [items, setItems] = useState(['Apple', 'Banana', 'Grape']);
    const [error, setError] = useState('');
    const [showAOnly, setShowAOnly] = useState(false);

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

    //deletes an item when clicked delete button
    const handleDelete = (index) => {
        //makes new list without the item at the clicked position and make a new list without the item a the clicked position
        const updatedItems = items.filter((_, i) => i !== index);
        //update list 
        setItems(updatedItems);

    };

    //filter show item start with A when clicked 
    const filterItems = showAOnly
        ? items.filter(item => item.charAt(0).toLowerCase() === 'a') : items;

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
                        filterItems.map((item, index) => (
                            <div key={index} className={styles.listItem}  >
                                <span>{item}</span>
                                <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                {/* Display filter check box */}
                <div>
                    <input
                    className={styles.checkBox}
                        type="checkbox"
                        checked={showAOnly}
                        onChange={() => setShowAOnly(prev => !prev)}
                    />
                    <label className={styles.text}>Show Only Items Starting with A</label>

                </div>
            </div>
        </div >
    );
}

// Export this component 
export default Itemlist;