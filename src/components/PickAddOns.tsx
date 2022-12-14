interface Props {
    formData: {
        planFrequency: string,
        onlineService: boolean;
        largerStorage: boolean;
        customizableProfile: boolean;
    }
    currentStep: number;
    updateForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PickAddOns = ({ formData, currentStep, updateForm }: Props) => {
    return (
        <fieldset className={`step3 form-section ${currentStep === 3 && 'current'}`}>
            <legend className="form-section__legend">
                <h2 className="form-section__heading">Pick add-ons</h2>
                <p className="form-section__blurb">Add-ons help enhance your gaming experience</p>
            </legend>
            
            <div className="step3__input-group">
                <div className="step3__input-group">
                    <div className="step3__form-control">
                        <input
                            className="step3__checkbox-input sr-only"
                            type="checkbox"
                            id="onlineService"
                            name="onlineService"
                            value="onlineService"
                            checked={formData.onlineService}
                            onChange={updateForm}
                        />
                        <label className="step3__label" htmlFor="onlineService">
                            <span className="step3__checkbox-bg">
                                <svg className="step3__checkbox-icon" width="12" height="9" viewBox="0 0 12 9">
                                    <path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/>
                                </svg>
                            </span>
                            <span className="step3__label-text">
                                <span className="step3__add-on-name">Online Service</span> <br />
                                <span className="step3__add-on-description">Access to multiplayer games</span> <br />
                            </span>
                            <span className="step3__add-on-cost">{formData.planFrequency === 'monthly' ? '+$1/mo' : '+$10/yr'}</span>
                        </label>
                    </div>

                    <div className="step3__form-control">
                        <input
                            className="step3__checkbox-input sr-only"
                            type="checkbox"
                            id="largerStorage"
                            name="largerStorage"
                            value="largerStorage"
                            checked={formData.largerStorage}
                            onChange={updateForm}
                        />
                        <label className="step3__label" htmlFor="largerStorage">
                            <span className="step3__checkbox-bg">
                                <svg className="step3__checkbox-icon" width="12" height="9" viewBox="0 0 12 9">
                                    <path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/>
                                </svg>
                            </span>
                            <span className="step3__label-text">
                                <span className="step3__add-on-name">Larger Storage</span> <br />
                                <span className="step3__add-on-description">Extra 1TB of cloud save</span> <br />
                            </span>
                            <span className="step3__add-on-cost">{formData.planFrequency === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
                        </label>
                    </div>

                    <div className="step3__form-control">
                        <input
                            className="step3__checkbox-input sr-only"
                            type="checkbox"
                            id="customizableProfile"
                            name="customizableProfile"
                            value="customizableProfile"
                            checked={formData.customizableProfile}
                            onChange={updateForm}
                        />
                        <label className="step3__label" htmlFor="customizableProfile">
                            <span className="step3__checkbox-bg">
                                <svg className="step3__checkbox-icon" width="12" height="9" viewBox="0 0 12 9">
                                    <path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1"/>
                                </svg>
                            </span>
                            <span className="step3__label-text">
                                <span className="step3__add-on-name">Customizable Profile</span> <br />
                                <span className="step3__add-on-description">Custom theme on your profile</span> <br />
                            </span>
                            <span className="step3__add-on-cost">{formData.planFrequency === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}
 
export default PickAddOns;