"use client";
import { useState } from 'react'
import styles from './page.module.css';
import supabase from './db';

const NewThing = () => {
  const [title, setTitle] = useState('');
  const [deck, setDeck] = useState('');

  const onFormSubmit = async () => {
    const { data, error } = await supabase
    .from('things')
    .upsert({ id: 'thing_2', title, description: deck })
    .select()

    console.log(data, error);
  }

  return (
  <>
    <form onSubmit={onFormSubmit} className={styles.form}>
      <h2>New Thing</h2>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor='title'>Title: </label>
        <input className={styles.inputText} type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor='title'>Deck: </label>
        <textarea className={styles.inputText} id='deck' value={deck} onChange={(e) => setDeck(e.target.value)} />
      </div>      
      
      <div>
        <button className={styles.inputSubmit} type='submit'>Add Thing</button>
      </div>
      
    </form>
  </>
)}

export default NewThing
