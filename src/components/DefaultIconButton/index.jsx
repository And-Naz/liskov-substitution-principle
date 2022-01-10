import SimpleIconButton from "../SimpleIconButton"
import { FiChevronRight } from "react-icons/fi"
import css from "./styles.module.css"
import { useMemo, forwardRef } from "react"
const DefaultIconButton = forwardRef(function (props, ref) {
	const { children = null, size = "medium", ...otherProps } = props
	otherProps.className = (typeof otherProps.className === "string"
		? otherProps.className + " " + css.default_icon_button
		: otherProps.className = css.default_icon_button)
	const localChildren = useMemo(() => {
		if (children) { return children }
		switch (size) {
			case "small": return <FiChevronRight />
			case "medium": return <FiChevronRight style={{ transform: "scale(1.5)" }} />
			case "big": return <FiChevronRight style={{ transform: "scale(2)" }} />
			case "custom": return <FiChevronRight />;
			default:
		}
	}, [children, size])
	return (
		<SimpleIconButton ref={ref} size={size} {...otherProps}>{localChildren}</SimpleIconButton>
	);
})

export default DefaultIconButton;