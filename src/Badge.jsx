import classnames from "classnames"

export default function Badge({ color, variant, children }) {
    const badgeClass = classnames(`badge`, variant, color)
    return (
        <span className={badgeClass}>
            {children}
        </span>
    )
}
