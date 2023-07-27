export const Onboarding = ({ merchantId, merchantIdHmac }) => {
    return (
        <div>
            <style id="onboarding-styles">
                {
                    `.pf-field {
                        font - family: '"Helvetica Neue", Helvetica';
                        box-sizing: "border-box";
                        border: "#CCC 1p solid";
                        color: "#31325F";
                        padding: "0 10px";
                    }
                    .pf-field::placeholder {
                        color: "#CFD7E0";
                    }

                    .pf-button-next {
                        background - color: red;
                    }

                    .pf-button-back {
                        background - color: grey;
                    }`
                }
            </style>

            <pay-engine
                id="pf-onboarding"
                type="boarding"
                merchant-id={merchantId}
                hash={merchantIdHmac}
                css="#onboarding-styles"
            ></pay-engine>
        </div>
    )
}
