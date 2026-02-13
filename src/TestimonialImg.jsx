import { RiDoubleQuotesL } from "react-icons/ri";


export default function TestimonialImg({ src, name, title, children}) {

    return (
        <div className="testimonialImg">
            <img src={src} className="profile-img"/>
            <div className="testi-txt">
                <RiDoubleQuotesL className="quotes" size={60}/>
                <p className="quote-txt">{children}</p>
                <p className="caption"><span className="name">{name}</span><span className="title">{title}</span></p>
            </div>
        </div>
    )
}