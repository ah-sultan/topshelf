import React, { memo, useEffect, useState } from 'react'

// Set the date we're counting down to



function Notification() {
  const [countDown, setCountDown] = useState('')

  useEffect(() => {
    var countDownDate = new Date("May 5, 2027 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setCountDown(days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ")

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setCountDown("EXPIRED")
      }
    }, 1000);
  }, [])
  return (
    <>
      <div className=" notification text-center bg--secondary text-white pt-8 pb-8">
        <p>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout. 
        <span>{countDown}</span>
</p>
      </div>
    </>
  )
}

export default memo(Notification)
