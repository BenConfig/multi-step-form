import { useState } from 'react'
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import SelectYourPlan from './components/SelectYourPlan';
import PickAddOns from './components/PickAddOns';
import FinishingUp from './components/FinishingUp';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import './App.css'

const App = () => {

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phoneNumber: '',
            planType: 'arcade',
            planFrequency: 'monthly',
            onlineService: false,
            largerStorage: false,
            customizableProfile: false,
        }
    )

    const [currentStep, setCurrentStep] = useState(1);

    const updateForm = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value, type, checked } = event.target;

            if (event.target.dataset.textInput && event.target.classList.contains('invalid')) {
                event.target.classList.remove('invalid');
            }


            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                };
            });
    };

    const [isValidating, setIsValidating] = useState(false);

    const goToNextStep = () => {
        if (currentStep === 1) return setIsValidating(true);
        setCurrentStep(prevStep => prevStep + 1);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentStep(5);
    }

  return (
    <>
        <Header currentStep={currentStep} />
        <main className="main">
            <form className="form" id="form" onSubmit={handleSubmit}>
                <PersonalInfo formData={formData} updateForm={updateForm} currentStep={currentStep} setCurrentStep={setCurrentStep} isValidating={isValidating} setIsValidating={setIsValidating} />
                <SelectYourPlan formData={formData} updateForm={updateForm} currentStep={currentStep} />
                <PickAddOns formData={formData} updateForm={updateForm} currentStep={currentStep} />
                <FinishingUp formData={formData} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <ThankYou currentStep={currentStep} />
            </form>
        </main>
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} goToNextStep={goToNextStep} />
    </>
  )
}

export default App
