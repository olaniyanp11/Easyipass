// button reusable component
const Button = ({styles, children}) => {
  return (
    <button className={` py-2 px-4 rounded ${styles}`}>
      {children}
    </button>
  )
}
export default Button

// tailwind config