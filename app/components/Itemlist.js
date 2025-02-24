//create add item page
'use client';
import { useState } from "react";
import styles from "../page.module.css";

function Itemlist() {
    // Define state for input, message, and error
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([]);
    const [error, setError] = useState('');

    // Function triggered when the user submits the form
    const handleSubmit = (event) => {
        //Prevents the default browser action of refreshing the page when submitting the form
        event.preventDefault();

        //Check user input
        if (input.trim() === '') {
            setError('Item cannot be empty!');
            setMessage('');
        } else {
            setMessage(prev => [`"${input}" was added to your list!`, ...prev]);
            setError('')
            setInput('');
        }
    };

    // Function triggered when the user types in the input field
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className={styles.background}>
            <div className={styles.addItemPage}>

                <div className={styles.card2}>
                    {/* Heading */}
                    <h1>Item List</h1>

                    {/* Form to add a new item  */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" className={styles.inputField} value={input} onChange={handleInputChange} placeholder="Enter item name" />
                        <button type="submit" className={styles.addButton} >Add Item</button>
                    </form>

                    {/* Display error message */}
                    {error && <div>{error}</div>}

                    {/* Display item, using map to iterate through the array */}
                    {message && <div>{message.map((msg, index) => (
                        <div key={index} className={styles.listItem}>{msg}</div>
                    ))}</div>}

                </div>
            </div>
        </div >
    );
}

// Export this component 
export default Itemlist;