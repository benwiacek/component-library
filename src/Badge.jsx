import classnames from "classnames"

export default function Badge({ color, style, children }) {
    const badgeClass = classnames(`badge`, style, color)
    return (
        <span className={badgeClass}>
            {children}
        </span>
    )
}
