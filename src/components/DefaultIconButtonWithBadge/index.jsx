import { forwardRef, useCallback, useMemo, useState } from "react"
import DefaultIconButton from "../DefaultIconButton"
import css from "./styles.module.css"
import { FiBell } from "react-icons/fi"

const DefaultIconButtonWithBadge = forwardRef(function (props, ref) {
	const { count = 0, children = null, className = "", size = "medium", ...otherProps } = props
	const [countState, setCountState] = useState(count)
	const handleClick = useCallback((e) => { setCountState(prev => ++prev) }, [])
	const classes = useMemo(() => {
		const initClasses = [css.default_icon_button_with_badge]
		switch (size) {
			case "small": initClasses.push(css.small_text); break;
			case "medium": initClasses.push(css.medium_text); break;
			case "big": initClasses.push(css.big_text); break;
			case "custom": break;
			default: throw new Error(`The size can be one of small, medium, big, custom. It can't be ${size}`);
		}
		if (typeof className === "string" && className.length > 0) { initClasses.push(className) }
		return initClasses.join(" ")
	}, [className])
	const localChildren = useMemo(() => {
		if (children) { return children }
		switch (size) {
			case "small": return <FiBell />
			case "medium": return <FiBell style={{ transform: "scale(1.5)" }} />
			case "big": return <FiBell style={{ transform: "scale(2)" }} />
			case "custom": return <FiBell />;
			default:
		}
	}, [children, size])
	return (
		<DefaultIconButton onClick={handleClick} ref={ref} className={classes} size={size} {...otherProps}>
			{localChildren}
			{countState > 0 && <span className={css.info}>{countState}</span>}
		</DefaultIconButton>
	);
})

export default DefaultIconButtonWithBadge;