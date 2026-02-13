import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ headline, Icon, color, children}) {

    const CardIcon = Icon? Icon : HiOutlineCloudUpload
    const colorIcon = color? color : "#3F75FE"

    return (
        <div className="card" >
            <div className="card-icon-container" style={{backgroundColor: colorIcon}}>
                <CardIcon className="card-icon" size={28} />
            </div>
            <div className="card-text">
                <h3>{headline}</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}