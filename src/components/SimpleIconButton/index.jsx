
import { useMemo, forwardRef } from "react";
import css from "./styles.module.css"
const IconButton = forwardRef(function (props, ref) {
	const { size = "medium", children = null, className = null, ...otherProps } = props
	const localChildren = useMemo(() => {
		if (children) { return children }
		switch (size) {
			case "small": return "s"
			case "medium": return "m"
			case "big": return "b"
			case "custom": return "c";
			default:
		}
	}, [children, size])
	const classes = useMemo(() => {
		const initClasses = [css.simple_icon_button]
		switch (size) {
			case "small": initClasses.push(css.small); break;
			case "medium": initClasses.push(css.medium); break;
			case "big": initClasses.push(css.big); break;
			case "custom": break;
			default: throw new Error(`The size can be one of small, medium, big, custom. It can't be ${size}`);
		}
		if (typeof className === "string" && className.length > 0) { initClasses.push(className) }
		return initClasses.join(" ")
	}, [size, className])
	return (
		<button ref={ref} className={classes} {...otherProps}>{localChildren}</button>
	);
})

export default IconButton;