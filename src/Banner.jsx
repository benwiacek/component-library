import classnames from "classnames"
import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationTriangle } from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"
import { HiInformationCircle } from "react-icons/hi"

export default function Banner({ variant, children }) {

    const variants = {
        success: {
            icon: FaCheckCircle,
            iconClass: "icon green-mark",
            headline: "Congratulations!",
            headlineClass: "headline head-success",
        },
        warning: {
            icon: FaExclamationTriangle,
            iconClass: "icon warning-tri",
            headline: "Attention",
            headlineClass: "headline head-warning",
        },
        error: {
            icon: FaCircleXmark,
            iconClass: "icon red-cross",
            headline: "There is a problem with your application",
            headlineClass: "headline head-error",
        },
        neutral: {
            icon: HiInformationCircle,
            iconClass: "icon blue=icon",
            headline: "Update available",
            headlineClass: "headline head-neutral",
        }
    }

    const selected = variants[variant]

    return (
        <div className={classnames(variant, "banner")}>
            <selected.icon className={selected.iconClass} size={16}/>
            <div>
                <span className={selected.headlineClass}>
                    {selected.headline}
                </span>
                {children && <p>{children}</p>}
            </div>
        </div>
    )
}