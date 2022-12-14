import { useEffect, useRef } from 'react';

interface Props {
    formData: {
        name: string;
        email: string;
        phoneNumber: string;
    }
    currentStep: number;
    setCurrentStep:  React.Dispatch<React.SetStateAction<number>>;
    updateForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isValidating: boolean;
    setIsValidating: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonalInfo = ({ formData, currentStep, setCurrentStep, updateForm, isValidating, setIsValidating }: Props) => {

    /* ------------------ Step 1 Validation ----------------- */
    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const phoneNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;
   
        useEffect(() => {
            if (isValidating) {
                let isValidated = true;
                
                // Validate name value
                const NAME = nameRef.current;
                const NAME_ERROR = NAME.nextElementSibling as HTMLParagraphElement;
                const nameRegex = new RegExp(NAME.pattern);
                if (NAME.value === '') {
                    if (!NAME.classList.contains('invalid')) NAME.classList.add('invalid');
                    NAME_ERROR.innerHTML = 'This field is required';
                    isValidated = false;
                }
                else if (!nameRegex.test(NAME.value)) {
                    if (!NAME.classList.contains('invalid')) NAME.classList.add('invalid');
                    NAME_ERROR.innerHTML = 'Not a valid name'
                    isValidated = false;
                }
                else if (NAME.classList.contains('invalid')) NAME.classList.remove('invalid');
                
                // Validate email value
                const EMAIL = emailRef.current;
                const EMAIL_ERROR = EMAIL.nextElementSibling as HTMLParagraphElement;
                const emailRegex = new RegExp(EMAIL.pattern);
                if (EMAIL.value === '') {
                    if (!EMAIL.classList.contains('invalid')) EMAIL.classList.add('invalid');
                    EMAIL_ERROR.innerHTML = 'This field is required';
                    isValidated = false;
                }
                else if (!emailRegex.test(EMAIL.value.toLowerCase())) {
                    if (!EMAIL.classList.contains('invalid')) EMAIL.classList.add('invalid');
                    EMAIL_ERROR.innerHTML = 'Not a valid email'
                    isValidated = false;
                }
                else if (EMAIL.classList.contains('invalid')) EMAIL.classList.remove('invalid');
                
                // Validate phone number value
                const PHONE_NUMBER = phoneNumberRef.current;
                const PHONE_NUMBER_ERROR = phoneNumberRef.current.nextElementSibling as HTMLParagraphElement;
                const phoneNumberRegex = new RegExp(PHONE_NUMBER.pattern);
                if (PHONE_NUMBER.value === '') {
                    if (!PHONE_NUMBER.classList.contains('invalid')) PHONE_NUMBER.classList.add('invalid');
                    PHONE_NUMBER_ERROR.innerHTML = 'This field is required';
                    isValidated = false;
                }
                else if (!phoneNumberRegex.test(PHONE_NUMBER.value)) {
                    if (!PHONE_NUMBER.classList.contains('invalid')) PHONE_NUMBER.classList.add('invalid');
                    PHONE_NUMBER_ERROR.innerHTML = 'Not a valid phone number'
                    isValidated = false;
                }
                else if (PHONE_NUMBER.classList.contains('invalid')) PHONE_NUMBER.classList.remove('invalid');
                
                if (isValidated === true) { setCurrentStep(2) }
            }
            
            setIsValidating(false);
        })

    return (
        <fieldset className={`step1 form-section ${currentStep === 1 && 'current'}`}>
            <legend className="form-section__legend">
                <h2 className="form-section__heading">Personal info</h2>
                <p className="form-section__blurb">Please provide your name, email address, and phone number.</p>
            </legend>
            
            <div className="step1__input-group">
                <div className="step1__form-control">
                    <label className="step1__label" htmlFor="name">Name</label>
                    <input
                        className="step1__text-input"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                        ref={nameRef}
                        data-text-input
                        onChange={updateForm}
                        placeholder="e.g. Stephen King"
                        autoFocus
                    />
                    <p className="step1__error">This field is required</p>
                </div>

                <div className="step1__form-control">
                    <label className="step1__label" htmlFor="email">Email Address</label>
                    <input
                        className="step1__text-input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        ref={emailRef}
                        data-text-input
                        onChange={updateForm}
                        placeholder="e.g. stephenking@lorem.com"
                    />
                    <p className="step1__error">This field is required</p>
                </div>

                <div className="step1__form-control">
                    <label className="step1__label" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className="step1__text-input"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                        ref={phoneNumberRef}
                        data-text-input
                        onChange={updateForm}
                        placeholder="e.g. +1234567890"
                    />
                    <p className="step1__error">This field is required</p>
                </div>
            </div>

            

            
        </fieldset>
    );
}
 
export default PersonalInfo;