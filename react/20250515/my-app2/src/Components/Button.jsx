import "./Button.css";

export default function Button({ text, color, size, onClick, disabled }) {
  const className = ['btn'];
  className.push(color ? `${color}-btn` : '');
  className.push(size ? `${size}-btn` : '');
  return (
      <button className={className.join(' ')} onClick={onClick} disabled={disabled}>{text}</button>
    );



    // const className = `${color || ''} ${size || ''}`;
    // return (
    //   <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
    // );
}