import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../../Components/Button';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {

    const { _id, image, carName, sellerLocation, originalPrice, resalePrice, year, postedDate, sellerEmail, description } = selectedProduct;

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();


    const handleBooking = data => {
        const bookingInfo = { productId: _id, buyerEmail: user.email, buyerPhone: data.buyerPhone, meetingLocation: data.meetingLocation };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Booking added successfully')
                reset()
            })
    };
    return (
        <div>
            {/* On clicking the Book now button, a form in a modal will popup with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked */}


            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <label htmlFor="booking-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">

                    <h3 className="text-lg font-bold">{carName}</h3>
                    <p>seller: {sellerEmail}</p>
                    <form onClick={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-3 mt-4'>

                        <input type="text" disabled value={`$${resalePrice}`} className="input w-full input-bordered " />

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="phone" type="number" placeholder="Your Phone Number" className="input w-full input-bordered" {...register("buyerPhone", { required: true })} />


                        <input name="location" type="text" placeholder="Place You want to meet" className="input w-full input-bordered" {...register("meetingLocation", { required: true })} />

                        <Button>Submit</Button>
                    </form>

                    <label htmlFor="booking-modal" className="btn btn-error absolute top-4 right-4 rounded-full h-12 w-12 text-xl">X</label>
                </label>
            </label>
        </div>
    );
};

export default BookingModal;



{/* <h3 className="text-lg font-bold">{carName}</h3>
                    <p>seller: {sellerEmail}</p>
                    <form onClick={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-3 mt-4'>

                        <input type="text" disabled value={`$${resalePrice}`} className="input w-full input-bordered " />

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="phone" type="number" placeholder="Your Phone Number" className="input w-full input-bordered" {...register("buyerPhone", { required: true })} />

                        <input name="location" type="text" placeholder="Place You want to meet" className="input w-full input-bordered" {...register("meetingLocation", { required: true })} />

                        <br />
                        <Button>Submit</Button>
                    </form>
                    <label htmlFor="my-modal" className="btn btn-error absolute top-4 right-4 rounded-full h-12 w-12 text-xl">X</label> */}