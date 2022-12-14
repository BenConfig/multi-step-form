interface Props {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    goToNextStep: () => void;
}

const Footer = ({ currentStep, setCurrentStep, goToNextStep }: Props) => {

    const goToPreviousStep = () => setCurrentStep(prevStep => prevStep - 1);

    if (currentStep < 5) return (
        <footer className="form-navigation">
            {currentStep > 1 && <button
                                    className="form-navigation__go-back"
                                    type="button"
                                    onClick={goToPreviousStep}>
                                        Go Back
                                </button>}
            {currentStep < 4 && <button
                                    className="form-navigation__next-step"
                                    type="button"
                                    onClick={goToNextStep}>
                                        Next Step
                                </button>}
            {currentStep === 4 && <button
                                      className="form-navigation__submit-form"
                                      type="submit"
                                      form="form">
                                          Confirm
                                  </button>}
        </footer>
    )
    else return <></>;
}
 
export default Footer;