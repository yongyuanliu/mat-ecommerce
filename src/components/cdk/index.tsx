import React from "react";

export default function Cdk() {
    return (
        <div className="cdk-overlay-container">
            <div className="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div>
            <div className="cdk-overlay-connected-position-bounding-box">
                <div className="cdk-overlay-panel">
                    <div className="mat-select-panel-wrap">
                        <div className="mat-select-panel">
                            <div id="mat-option-12" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                <span className="mat-option-text">Useless first</span>
                                <div className="mat-ripple mat-option-ripple"></div>
                            </div>
                            <div id="mat-option-13" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                <span className="mat-option-text">Necessary second</span>
                                <div className="mat-ripple mat-option-ripple"></div>
                            </div>
                            <div id="mat-option-14" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                <span className="mat-option-text">Useful third</span>
                                <div className="mat-ripple mat-option-ripple"></div>
                            </div>
                            <div id="mat-option-15" className="mat-option" role="option" defaultValue="option1" tabIndex={0} aria-disabled="false">
                                <span className="mat-option-text">Something fourth</span>
                                <div className="mat-ripple mat-option-ripple"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}