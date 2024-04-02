import {useState} from "react";

export default function Question({text}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div onClick={() => setIsActive(!isActive)} className="support-faq-questions-item">
            <div className="support-faq-questions-item-header">
                <div className="support-faq-questions-item-header__title">{text}</div>
                <div className="support-faq-questions-item-header-icon">
                    <div className="support-faq-questions-item-header-icon__one"></div>
                    <div className={`support-faq-questions-item-header-icon__two 
                    ${isActive ? 'support-faq-questions-item-header-icon__two_active' : ''}`}>
                    </div>
                </div>
            </div>
            <div className={`support-faq-questions-item-textWrapper
            ${isActive ? 'support-faq-questions-item-textWrapper_active' : ''}`}>
                <div className="support-faq-questions-item__text">Mars colonization is a complex, long-term
                    project with multiple phases. Timelines are subject to technological advancements,
                    funding availability, and international collaboration. Various space agencies and
                    private companies are working together to make Mars colonization a reality, with the
                    goal of achieving a sustainable presence within the next few decades. International
                    cooperation will be essential for sharing knowledge, resources, and expertise in
                    this endeavor.
                </div>
            </div>
        </div>
    )
}