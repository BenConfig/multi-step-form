interface Props {
    currentStep: number;
}

const Header = ({ currentStep }: Props) => {
    const steps = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

    const STEPS = steps.map((text, index) => (
        <li className="step" key={index} aria-current={currentStep === index + 1 && 'step'}>
            <span className="step__text">{text}</span>
        </li>
    ));

    return (
        <header className="steps">
            <ol className="steps__list">{STEPS}</ol>
        </header>
    );
}
 
export default Header;