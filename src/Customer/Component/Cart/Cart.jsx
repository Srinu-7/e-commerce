import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate("/checkout?step=2");
    }
    return (
        <div>

            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1,1,1].map((item) => <CartItem />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <p>Price</p>
                                <p>₹ 5000</p>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <p>Discount</p>
                                <p className='text-green-600'>- ₹ 1500</p>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <p>Delivery Charges</p>
                                <p className='text-green-600'>₹ 50</p>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <p>Total Amount</p>
                                <p className='text-green-600'>₹ 3450</p>
                            </div>
                        </div>

                        <Button  onClick = {handleCheckOut}variant='contained' className = 'w-full'sx={{ px: "2.5rem", py: "0.7rem", bgColor: "#9155fd", mt: "3rem" }}>
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart