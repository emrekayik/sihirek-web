import styles from './Input.module.css';

function Input({ value, onChange, label, placeholder="", max, min}) {
    
    return (
        <div style={{marginTop: "0.5rem"}}>
          <label className='label' htmlFor="remainderi">{label}</label>
          <input 
            id="remainderi" 
            type='number' 
            className={styles.input} 
            placeholder={placeholder}
            value={value}
            onChange={onChange} 
            max={max}
            min={min}
        />
        </div>
    )
}

export default Input;