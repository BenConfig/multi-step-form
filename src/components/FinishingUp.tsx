interface Props {
    formData: {
        planType: string;
        planFrequency: string;
        onlineService: boolean;
        largerStorage: boolean; 
        customizableProfile: boolean;
    }
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FinishingUp = ({ formData, currentStep, setCurrentStep }: Props) => {

    const planTypeCost: {[key: string]: number} = {
        'arcade': formData.planFrequency === 'monthly' ? 9 : 90,
        'advanced': formData.planFrequency === 'monthly' ? 12 : 120,
        'pro': formData.planFrequency === 'monthly' ? 15 : 150
    }

    // If add-on isn't checked assign 0, then if the monthly plan is selected assign monthly cost, otherwise assign yearly cost
    let onlineServiceCost = !formData.onlineService ? 0 : formData.planFrequency === 'monthly' ? 1 : 10;
    let largerStorageCost = !formData.largerStorage ? 0 : formData.planFrequency === 'monthly' ? 2 : 20;
    let customizableProfileCost = !formData.customizableProfile ? 0 : formData.planFrequency === 'monthly' ? 2 : 20;

    const prefix = formData.planFrequency === 'monthly' ? '/mo' : '/yr';

    const overallCost = '$' + (
                            planTypeCost[formData.planType] +
                            onlineServiceCost +
                            largerStorageCost +
                            customizableProfileCost
                        ) + prefix;
                        
    const goToStep2 = () => setCurrentStep(2);

    const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

    return (
        <section className={`step4 form-section ${currentStep === 4 && 'current'}`} aria-labelledby="finishing-up">
            <h2 className="form-section__heading" id="finishing-up">Finishing up</h2>
            <p className="form-section__blurb">Double-check everything looks OK before confirming.</p>

            <div className="step4-sub-totals">
                <p className="step4-sub-totals__plan">
                    <label className="step4-sub-totals__plan-type" htmlFor="plan-total">
                        {`${capitalize(formData.planType)} (${capitalize(formData.planFrequency)})`}
                    </label>
                    <output className="step4-sub-totals__plan-cost" id="plan-total">
                        {'$' + planTypeCost[formData.planType] + prefix}
                    </output>
                    <a
                        className="step4-sub-totals__change-plan-link"
                        href="#select-your-plan"
                        onClick={goToStep2}
                    >
                        Change
                    </a>
                </p>
                {formData.onlineService && 
                    <p className="step4-sub-totals__add-on">
                        <label htmlFor="online-service-total">Online service</label>
                        <output className="step4-sub-totals__add-on-figure" id="online-service-total">{'+$' + onlineServiceCost + prefix}</output>
                    </p>
                }
                {formData.largerStorage && 
                    <p className="step4-sub-totals__add-on">
                        <label htmlFor="larger-storage-total">Larger Storage</label>
                        <output className="step4-sub-totals__add-on-figure" id="larger-storage-total">{'+$' + largerStorageCost + prefix}</output>
                    </p>
                }
                {formData.customizableProfile && 
                    <p className="step4-sub-totals__add-on">
                        <label htmlFor="customizable-profile-total">Customizable Profile</label>
                        <output className="step4-sub-totals__add-on-figure" id="customizable-profile-total">{'+$' + customizableProfileCost + prefix}</output>
                    </p>
                }
            </div>
            <p className="step4-overall-total">
                <label htmlFor="overall-total">{`Total (per ${formData.planFrequency === 'monthly' ? 'month' : 'year'})`}</label>
                <output className="step4-overall-total__figure" id="overall-total">{`+${overallCost}`}</output>
            </p>
        </section>
    );
}
 
export default FinishingUp;