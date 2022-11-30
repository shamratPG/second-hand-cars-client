import React from 'react';

const Faqs = () => {
    return (
        <div className='max-w-[1175px] mx-auto mb-20'>
            <h2 className='text-3xl mb-4 pl-2'>Used car buying related FAQs</h2>
            <hr className='h-1 bg-gradient-to-r from-primary to-secondary max-w-sm m-1' />


            <div className="collapse collapse-plus border shadow-lg m-4 rounded ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <h3 className='text-lg font-semibold'>Buying</h3>
                </div>
                <div className="collapse-content ">
                    <h3 className='text-lg font-bold'>How do I buy a car?</h3>
                    <p>
                        Car buying involves several steps that include researching vehicles, browsing inventory, securing financing and negotiating. In order to purchase the right car for you at a fair price, you should first know the type of car you want and how much you want to spend on it. From there, you'll need to identify models that fit your budget and preferences, then search inventory for potential options. After that, it's wise to secure financing prior to visiting the dealership. You'll then need to inspect the car, test drive it and negotiate the sale.</p>
                </div>
            </div>


            <div className="collapse collapse-plus border shadow-lg m-4 rounded ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <h3 className='text-lg font-semibold'>Financing & Leasing</h3>
                </div>
                <div className="collapse-content ">
                    <h3 className='text-lg font-bold'>Can you lease a used car?</h3>
                    <p>

                        Most dealers don't offer leasing on used cars, but used cars that were leased when new and are now for sale provide some benefits, such as good condition and low miles.</p>
                </div>
            </div>

            <div className="collapse collapse-plus border shadow-lg m-4 rounded ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <h3 className='text-lg font-semibold'>Warranty</h3>
                </div>
                <div className="collapse-content ">
                    <h3 className='text-lg font-bold'>Are extended warranties worth the money?</h3>
                    <p>


                        Extended warranties offer peace of mind, but apart from the coverage included with factory-certified pre-owned cars, additional plans come with a price that studies have shown to be higher than the benefits you can claim in repairs.</p>
                </div>
            </div>

            <div className="collapse collapse-plus border shadow-lg m-4 rounded ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <h3 className='text-lg font-semibold'>Certified Used Cars</h3>
                </div>
                <div className="collapse-content ">
                    <h3 className='text-lg font-bold'>What does CPO mean?</h3>
                    <p>
                        A certified pre-owned or CPO car has been inspected to meet minimum quality standards and typically includes some type of warranty. While dealers and third parties certify cars, the gold standard is an automaker-certified vehicle that provides a factory-backed warranty, often extending the original coverage. Vehicles must be in excellent condition and have low miles and wear to be certified, which is why off-lease vehicles feed many CPO programs.</p>
                </div>
            </div>

        </div>
    );
};

export default Faqs;